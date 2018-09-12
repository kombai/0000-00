import TreeView from './graph/tree-view';

(function() {

  var graphSetting = {
    currentData: null,
    textSearch: '',
    isVertical: true,
    searchInput: '',
    showFullTree: 1, // show full tree with search;
    showNodeLabel: true,
    selectedNode: null, // for radius option;
    highlightNode: null, // mouse over node;
    currentCluster: null
  };

  var tree = new TreeView();

  function showGraph(tabName, jsonData) {
    var activeTab = d3.select(".tab-content .active");
    if (!tabName) return;
    tree.plot(activeTab, jsonData, graphSetting);
  };


  function init() {

    var currentTab = 'tree';
    var jsonData;

    $('#search-button').on('click', function() {
      graphSetting.textSearch = $('#search-input').val();
      showGraph(currentTab, jsonData);
      return false;
    });

    $('#reset-search').on('click', function() {
      graphSetting.textSearch = "";
      if (graphSetting.currentData) {
        showGraph(currentTab, jsonData);
      }
      return false;
    });

    $("#rotate-button").click(function() {
      graphSetting.isVertical = !!!graphSetting.isVertical;
      if (graphSetting.currentData) {
        showGraph(currentTab, jsonData);
      }
    });


    $("#show-node-label").click(function() {
      graphSetting.showNodeLabel = !!!graphSetting.showNodeLabel;
      if (graphSetting.currentData) {
        showGraph(currentTab, jsonData);
      }

      if (graphSetting.showNodeLabel) {
        $(this).html("Text: On");
      } else {
        $(this).html("Text: Off");
      }
    });

    // save graph to localStorage;
    $("#save-to-store").on('click', function() {
      if (graphSetting.currentData && graphSetting.currentCluster) {
        localStorage.setItem(graphSetting.currentData, graphSetting.currentCluster);
      }
    });

    $("#clear-local-store").on('click', function() {
      localStorage.clear();
      window.location.reload();
    });

    // option to view only search path or full tree;
    $('#show-full-tree input[type=radio]').on('change', function() {
      graphSetting.textSearch = $('#search-input').val();
      graphSetting.showFullTree = parseInt($(this).val());
      if (graphSetting.textSearch && jsonData.length) {
        showGraph(currentTab, jsonData);
      }
      return false;
    });

    // get data via ajax;
    var file = 'data/alpha.json?id=' + Date.now();
    graphSetting.isVertical = true;

    $.ajax({
      type: 'GET',
      url: file,
      dataType: 'json',
      success: function(json) {
        jsonData = json;
        showGraph(currentTab, json);
      },
      error: function(e1, e2, e3, e4) {}
    });

    // show/hide virtual scroll area;
    $(document.body).keydown(function(e) {
      if (e.ctrlKey) {
        $('#scroll-box').show();
      }
    }).keyup(function(e) {
      $('#scroll-box').hide();
    });

    $('#scroll-box').scroll(function(e) {
      $(".tab-pane.in").scrollTop(this.scrollTop).scrollLeft(this.scrollLeft);
    });
  };

  $(document).ready(function() {
    init();
  })
})();