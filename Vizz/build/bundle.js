/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _treeView = __webpack_require__(/*! ./graph/tree-view */ \"./app/graph/tree-view.js\");\n\nvar _treeView2 = _interopRequireDefault(_treeView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n\n  var graphSetting = {\n    currentData: null,\n    textSearch: '',\n    isVertical: true,\n    searchInput: '',\n    showFullTree: 1, // show full tree with search;\n    showNodeLabel: true,\n    selectedNode: null, // for radius option;\n    highlightNode: null, // mouse over node;\n    currentCluster: null\n  };\n\n  var tree = new _treeView2.default();\n\n  function showGraph(tabName, jsonData) {\n    var activeTab = d3.select(\".tab-content .active\");\n    if (!tabName) return;\n    tree.plot(activeTab, jsonData, graphSetting);\n  };\n\n  function init() {\n\n    var currentTab = 'tree';\n    var jsonData;\n\n    $('#search-button').on('click', function () {\n      graphSetting.textSearch = $('#search-input').val();\n      showGraph(currentTab, jsonData);\n      return false;\n    });\n\n    $('#reset-search').on('click', function () {\n      graphSetting.textSearch = \"\";\n      if (graphSetting.currentData) {\n        showGraph(currentTab, jsonData);\n      }\n      return false;\n    });\n\n    $(\"#rotate-button\").click(function () {\n      graphSetting.isVertical = !!!graphSetting.isVertical;\n      if (graphSetting.currentData) {\n        showGraph(currentTab, jsonData);\n      }\n    });\n\n    $(\"#show-node-label\").click(function () {\n      graphSetting.showNodeLabel = !!!graphSetting.showNodeLabel;\n      if (graphSetting.currentData) {\n        showGraph(currentTab, jsonData);\n      }\n\n      if (graphSetting.showNodeLabel) {\n        $(this).html(\"Text: On\");\n      } else {\n        $(this).html(\"Text: Off\");\n      }\n    });\n\n    // get data via ajax;\n    var file = 'data/alpha.json?id=' + Date.now();\n    graphSetting.isVertical = true;\n\n    $.ajax({\n      type: 'GET',\n      url: file,\n      dataType: 'json',\n      success: function success(json) {\n        jsonData = json;\n        showGraph(currentTab, json);\n      },\n      error: function error(e1, e2, e3, e4) {}\n    });\n\n    // show/hide virtual scroll area;\n    $(document.body).keydown(function (e) {\n      if (e.ctrlKey) {\n        $('#scroll-box').show();\n      }\n    }).keyup(function (e) {\n      $('#scroll-box').hide();\n    });\n\n    $('#scroll-box').scroll(function (e) {\n      $(\".tab-pane.in\").scrollTop(this.scrollTop).scrollLeft(this.scrollLeft);\n    });\n  };\n\n  $(document).ready(init);\n})();\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/graph/tree-view.js":
/*!********************************!*\
  !*** ./app/graph/tree-view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar textSearch = \"\",\n    rootCluster = {},\n    isVertical = true,\n    graphScale = 1,\n    graphTrans = {},\n    showFullTree = 1,\n    // show full tree with search;\nusePosCache = false,\n    showNodeLabel = true,\n    selectedNode = null,\n    // for radius option;\nhighlightNode = null;\n\nvar sourceNodes = {};\n\nfunction translateNode(node, transX, transY) {\n    node.posX += transX;\n    node.posY += transY;\n    if (usePosCache) {\n        if (node.x != null) {\n            node.x += transX;\n        }\n        if (node.y != null) {\n            node.y += transY;\n        }\n    } else {\n        node.x = node.posX;\n        node.y = node.posY;\n    }\n    node.dragging = true;\n    if (node.children && node.children.length) {\n        node.children.forEach(function (item) {\n            translateNode(item, transX, transY);\n        });\n    }\n}\n\n// every node holds all child name of it;\nfunction getChildName(source) {\n    var childName = [source.name];\n    source.children.forEach(function (item) {\n        var child = sourceNodes[item.toString()] || item;\n        if (child && !child.hasChildName) {\n            // don't allow multi parents;\n            child.hasChildName = true;\n            childName = childName.concat(getChildName(child));\n        }\n    });\n    source.childName = childName;\n    return childName;\n}\n\nfunction estimateSize(source) {\n    var children = [];\n    var size = 0;\n    // hightlight the grandchild with text search;\n    var sourceName = source.name.toLowerCase();\n    if (textSearch && sourceName.indexOf(textSearch) > -1) {\n        source.isFocus = true;\n        source.foundText = true;\n    }\n\n    if (source.children) {\n        source.children.forEach(function (item) {\n            var child = sourceNodes[item.toString()] || item;\n            if (child) {\n                // hightlight the grandchild with text search;\n                if (source.foundText == true) {\n                    child.foundText = true;\n                }\n\n                var childName = child.childName.join(\"::\").toLowerCase();\n                var allowChild = childName.indexOf(textSearch) > -1;\n                allowChild = allowChild || showFullTree || !textSearch;\n                allowChild = allowChild || child.foundText;\n\n                if (allowChild && !child.parentId) {\n                    // allow multi parents;\n                    // children.push(child);\n                    children.push(child); // don't allow multi parents;\n                    child.parentId = source.id; // main parent node, use for set position;\n                    size += estimateSize(child);\n                }\n            }\n        });\n        source.children = children;\n    }\n\n    // keep the size to expand node when hover on it;\n    if (!source.size) {\n        source.size = size ? size : 20;\n    }\n\n    return source.size;\n}\n\nfunction createConnect(source, nodes, links) {\n    if (!source) return false;\n    var children = source.children;\n    var radial = Math.PI / 2;\n    var radius = 200;\n    var size = source.size;\n    var startX = source.posX + 200;\n    var startY = source.posY - size / 2;\n\n    if (source.isRadial && source.option) {\n        radius = source.option.radius;\n        radial = source.option.radial / 180 * Math.PI;\n    }\n\n    if (children && children.length) {\n        var length = children.length;\n        var offset = 0;\n        var unit = 0;\n        var rad = 0;\n        if (length > 3) {\n            unit = radial / (length - 1);\n        }\n        var offsetRal = (Math.PI - radial) / 2;\n\n        children.forEach(function (child, index) {\n            // get posX, posY from cache;\n            if (usePosCache || child.dragging) {\n                if (child.x != null) {\n                    child.posX = child.x;\n                }\n\n                if (child.y != null) {\n                    child.posY = child.y;\n                }\n            }\n\n            if (child.posX == null) {\n                if (source.isRadial && unit) {\n                    rad = offsetRal + index * unit;\n                    child.posX = source.posX + radius * Math.sin(rad);\n                } else {\n                    child.posX = startX;\n                }\n            }\n\n            if (child.posY == null) {\n                if (source.isRadial && unit) {\n                    rad = offsetRal + index * unit;\n                    child.posY = source.posY + radius * Math.cos(rad);\n                } else {\n                    child.posY = startY + offset + child.size / 2;\n                }\n            }\n\n            offset += child.size;\n\n            var sX = source.posX;\n            var sY = source.posY;\n            var tX = child.posX;\n            var tY = child.posY;\n\n            createConnect(child, nodes, links);\n            // hide the root links;\n            if (source.id !== rootCluster.id) {\n                links.push({\n                    source: {\n                        x: sX,\n                        y: sY\n                    },\n                    target: {\n                        x: tX,\n                        y: tY\n                    },\n                    childName: child.childName,\n                    foundText: child.foundText,\n                    hightlight: child.hightlight\n                });\n            }\n        });\n    }\n\n    // hide the root node;\n    if (source.id !== rootCluster.id) {\n        nodes.push(source);\n    }\n}\n\nfunction showNodeOption(callback) {\n    var nodeOption = $(\"#node-option\");\n    var radius = $(\"#node-radius\");\n    var radial = $(\"#node-radial\");\n    var event = d3.event;\n    var node = selectedNode;\n    var option = node.option || {};\n    if (option.radius != null) {\n        radius.val(option.radius);\n    } else {\n        radius.val(200);\n    }\n\n    if (option.radial != null) {\n        radial.val(option.radial);\n    } else {\n        radial.val(90);\n    }\n\n    nodeOption.show().css({\n        top: event.clientY,\n        left: event.clientX\n    });\n\n    event.stopPropagation();\n\n    nodeOption.find(\".apply-node-option\").one(\"click\", function (evt) {\n        evt.stopPropagation();\n        node.option = {\n            radius: Number(radius.val()),\n            radial: Number(radial.val())\n        };\n        node.isRadial = true;\n        callback && callback();\n        $(\"#node-option\").hide();\n    });\n\n    nodeOption.find(\".cancel-node-option\").one(\"click\", function (evt) {\n        evt.stopPropagation();\n        $(\"#node-option\").hide();\n    });\n}\n\nfunction hightlighting(source, hightlight) {\n    var isMouseOver = false;\n    if (source.id == highlightNode.id) {\n        isMouseOver = true;\n        hightlight = true;\n        source.isFocus = true;\n    }\n\n    if (source.children) {\n        source.children.forEach(function (item) {\n            if (hightlighting(item, hightlight)) {\n                isMouseOver = true;\n            }\n        });\n    }\n\n    if (isMouseOver || hightlight) {\n        source.hightlight = true;\n    }\n\n    return isMouseOver;\n}\n\nvar TreeView = function () {\n    function TreeView() {\n        _classCallCheck(this, TreeView);\n    }\n\n    _createClass(TreeView, [{\n        key: \"plot\",\n        value: function plot(activeTab, jsonData, graphSetting) {\n            // mapping option;\n            textSearch = graphSetting.textSearch.toLowerCase();\n            isVertical = graphSetting.isVertical || false;\n            showFullTree = graphSetting.showFullTree || false;\n            showNodeLabel = graphSetting.showNodeLabel || false;\n            usePosCache = graphSetting.usePosCache || false;\n\n            var svgSize = activeTab.node().getBoundingClientRect();\n            var clickNum = 0;\n            var padding = 48;\n            var timer = 0;\n            var minX = 9999;\n            var minY = 9999;\n            var maxX = -9999;\n            var maxY = -9999;\n            var contentWidth = 0;\n            var contentHeight = 0;\n            var svgWidth = svgSize.width;\n            var svgHeight = svgSize.height;\n\n            var isZoom = true;\n            function zoom() {\n                if (isZoom) {\n                    graphTrans = d3.event.translate;\n                    graphScale = d3.event.scale;\n                }\n                svgGroup.attr(\"transform\", \"translate(\" + graphTrans + \")scale(\" + graphScale + \")\");\n            }\n\n            var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on(\"zoom\", zoom);\n\n            var baseSvg = activeTab.html(\"\").append(\"svg\").attr(\"width\", \"100%\").attr(\"height\", \"100%\").call(zoomListener).on(\"mouseover\", function (d) {\n                if (highlightNode) {\n                    highlightNode = null;\n                    renderNode();\n                }\n            });\n\n            var svgGroup = baseSvg.append(\"g\").attr(\"class\", \"pan-cover\").attr(\"transform\", \"translate(\" + padding + \",\" + padding + \")\");\n\n            var dragGroup = svgGroup.append(\"g\").attr(\"class\", \"group drag-group\");\n\n            var pathGroup = svgGroup.append(\"g\").attr(\"class\", \"group path-group\");\n\n            var nodeGroup = svgGroup.append(\"g\").attr(\"class\", \"group node-group\");\n\n            // Define the drag listeners for drag/drop behaviour of nodes.\n            var startDragPos = { X: 0, Y: 0 },\n                dragStarted,\n                draggingNode,\n                dragScale = 1;\n\n            var dragListener = d3.behavior.drag().on(\"dragstart\", function (d) {\n                var event = d3.event.sourceEvent;\n                event.stopPropagation();\n                if (d.id == rootCluster.id) {\n                    return;\n                }\n\n                dragScale = zoomListener.scale();\n                dragStarted = true;\n                startDragPos.X = event.pageX;\n                startDragPos.Y = event.pageY;\n\n                draggingNode = this.parentNode;\n\n                draggingNode.originalPosX = d.posX;\n                draggingNode.originalPosY = d.posY;\n\n                cloneDraggingNode(d); // virtual dragged node;\n                dragGroup.attr(\"transform\", \"translate(\" + 0 + \",\" + 0 + \")\");\n            }).on(\"drag\", function (d) {\n                var event = d3.event.sourceEvent;\n                if (d.id == rootCluster.id) {\n                    return;\n                }\n                dragStarted = null;\n\n                var dx = (event.pageX - startDragPos.X) / dragScale;\n                var dy = (event.pageY - startDragPos.Y) / dragScale;\n                d3.select(draggingNode).style(\"pointer-events\", 'none');\n                dragGroup.attr(\"transform\", \"translate(\" + dx + \",\" + dy + \")\");\n            }).on(\"dragend\", function (d) {\n                var event = d3.event.sourceEvent;\n                if (d.id == rootCluster.id) {\n                    return;\n                }\n\n                if (dragStarted == null) {\n                    // snap with cloest node;\n                    var dx = (event.pageX - startDragPos.X) / dragScale;\n                    var dy = (event.pageY - startDragPos.Y) / dragScale;\n                    if (!isVertical) {\n                        translateNode(d, dx, dy);\n                    } else {\n                        translateNode(d, dy, -dx);\n                    }\n                    // rerender graph;\n                    renderNode();\n                }\n\n                d3.select(draggingNode).style(\"pointer-events\", \"auto\");\n\n                // remove fake dragging nodes;\n                dragGroup.selectAll(\"g.node\").data([]).exit().remove();\n                dragGroup.selectAll(\"path.connect\").data([]).exit().remove();\n            });\n\n            function centerNode(source) {\n                var scale = zoomListener.scale();\n                var x = 0;\n                var y = 0;\n                if (!isVertical) {\n                    scale = svgWidth / contentWidth;\n                    scale = Math.max(scale, 0.3);\n                    scale = Math.min(scale, 1);\n                    y = svgHeight / 2;\n                    x = Math.max(48, (svgWidth - scale * contentWidth) / 2);\n                } else {\n                    scale = svgHeight / contentHeight;\n                    scale = Math.max(scale, 0.3);\n                    scale = Math.min(scale, 1);\n                    x = svgWidth / 2;\n                    y = Math.max(48, (svgHeight - scale * contentHeight) / 2);\n                }\n\n                svgGroup.attr({\n                    \"transform\": \"translate(\" + x + \",\" + y + \")scale(\" + scale + \")\"\n                });\n\n                zoomListener.scale(scale);\n                zoomListener.translate([x, y]);\n            }\n\n            rootCluster = {\n                children: [],\n                name: \"Root\",\n                size: 0,\n                id: Date.now() // random id for dragdrop\n            };\n            sourceNodes = {}; // reset node dictionary;\n            sourceNodes[rootCluster.id] = rootCluster;\n\n            // revert tree data from cached;\n            if (jsonData.name === \"Root\") {\n                var _restoreChild = function _restoreChild(node) {\n                    node.children.forEach(function (item) {\n                        sourceNodes[item.id] = item;\n                        item.x = item.posX;\n                        item.y = item.posY;\n                        _restoreChild(item);\n                    });\n                };\n\n                rootCluster = jsonData;\n\n                _restoreChild(rootCluster);\n                rootCluster.x = rootCluster.posX;\n                rootCluster.y = rootCluster.posY;\n            } else {\n                jsonData.forEach(function (node) {\n                    if (!node.name) {\n                        node.name = node.friendlyName;\n                    }\n\n                    var newNode = Object.assign({}, node);\n                    // add first group to root;\n                    if (!newNode.parents || !newNode.parents.length) {\n                        rootCluster.children.push(newNode.id);\n                    }\n                    // create dictionary for quick access;\n                    delete newNode.parents;\n                    // assign node id;\n                    if (!newNode.id) {\n                        newNode.id = Date.now();\n                    }\n                    sourceNodes[newNode.id] = newNode;\n                });\n\n                getChildName(rootCluster);\n            }\n\n            // for dragging node;\n            function cloneDraggingNode(node) {\n                dragGroup.selectAll(\"path.connect\").data([]).exit().remove();\n                dragGroup.selectAll(\"g.node\").data([]).exit().remove();\n\n                var cloneNodes = [node];\n                var clonePaths = [];\n\n                function recursive(source) {\n                    if (!source || !source.children) return;\n                    source.children.forEach(function (child) {\n                        cloneNodes.push(child);\n                        clonePaths.push({\n                            source: {\n                                x: source.posX,\n                                y: source.posY\n                            },\n                            target: {\n                                x: child.posX,\n                                y: child.posY\n                            }\n                        });\n                        recursive(child);\n                    });\n                }\n\n                recursive(node);\n\n                var pathGroup = dragGroup.selectAll(\"path.connect\").data(clonePaths).enter();\n                pathGroup.append(\"path\").attr(\"class\", \"connect\").attr({\n                    'd': function d(_d) {\n                        var path = \"\";\n                        if (!isVertical) {\n                            path = [\"M\", _d.source.x, _d.source.y, \"L\", _d.target.x, _d.target.y].join(\" \");\n                        } else {\n                            path = [\"M\", -_d.source.y, _d.source.x, \"L\", -_d.target.y, _d.target.x].join(\" \");\n                        }\n                        return path;\n                    },\n                    'fill': 'none',\n                    'stroke': \"#ccc\",\n                    'stroke-width': \"3px\"\n                });\n\n                var nodeGroup = dragGroup.selectAll(\"g.node\").data(cloneNodes);\n                var nodeEnter = nodeGroup.enter().append(\"g\").attr(\"class\", \"node\").attr(\"transform\", function (d) {\n                    var gPos = \"\";\n                    if (!isVertical) {\n                        gPos = \"translate(\" + d.posX + \",\" + d.posY + \")\";\n                    } else {\n                        gPos = \"translate(\" + -d.posY + \",\" + d.posX + \")\";\n                    }\n                    return gPos;\n                });\n\n                nodeEnter.append(\"circle\").attr({\n                    \"r\": 6,\n                    \"stroke\": \"lightsteelblue\",\n                    \"stroke-width\": \"1px\",\n                    \"fill\": function fill(d) {\n                        var dcolor = \"#c6dbef\";\n                        if (d._children) {\n                            dcolor = \"#fd8d3c\";\n                        } else if (d.children && d.children.length) {\n                            dcolor = \"#3182bd\";\n                        }\n                        return dcolor;\n                    }\n                });\n\n                nodeEnter.append('text').text(function (d) {\n                    var nodeName = d.name;\n                    if (showNodeLabel) {\n                        return nodeName.substr(0, 12);\n                    } else {\n                        return \"\";\n                    }\n                }).attr({\n                    \"text-anchor\": \"start\",\n                    \"transform\": function transform(d) {\n                        var trans = \"\";\n                        if (!isVertical) {\n                            trans = \"translate(15, 5)\";\n                        } else {\n                            trans = \"translate(-5, 15) rotate(90)\";\n                        }\n                        return trans;\n                    }\n                }).style({\n                    \"font-size\": \"14px\"\n                });\n            }\n\n            function renderNode() {\n                // clear graph;\n                pathGroup.selectAll(\"path.connect\").data([]).exit().remove();\n                nodeGroup.selectAll(\"g.node\").data([]).exit().remove();\n                // enable zoom effect;\n                isZoom = true;\n\n                // reset old data;\n                for (var i in sourceNodes) {\n                    if (!usePosCache) {\n                        sourceNodes[i].posX = null;\n                        sourceNodes[i].posY = null;\n                    }\n                    sourceNodes[i].isFocus = null;\n                    sourceNodes[i].parentId = null;\n                    sourceNodes[i].foundText = null;\n                    sourceNodes[i].hightlight = null;\n                }\n\n                estimateSize(rootCluster);\n\n                if (usePosCache) {\n                    if (!isVertical) {\n                        rootCluster.posX = rootCluster.size / 2;\n                        rootCluster.posY = 0;\n                    } else {\n                        rootCluster.posY = rootCluster.size / 2;\n                        rootCluster.posX = 0;\n                    }\n                } else {\n                    rootCluster.posX = 0;\n                    rootCluster.posY = 0;\n                }\n\n                // mouse over a node;\n                if (highlightNode) {\n                    hightlighting(rootCluster);\n                }\n\n                var nodes = [];\n                var links = [];\n                createConnect(rootCluster, nodes, links);\n                // console.log(\"rootCluster\", rootCluster, nodes, links);\n                // store current cluster;\n                rootCluster.isVertical = isVertical;\n                graphSetting.currentCluster = JSON.stringify(rootCluster);\n\n                var pathView = pathGroup.selectAll(\"path.connect\").data(links);\n                var pathEnter = pathView.enter().append(\"path\").attr(\"class\", \"connect\").attr({\n                    'd': function d(_d2) {\n                        var path = \"\";\n                        if (!isVertical) {\n                            path = [\"M\", _d2.source.x, _d2.source.y, \"L\", _d2.target.x, _d2.target.y].join(\" \");\n                        } else {\n                            path = [\"M\", -_d2.source.y, _d2.source.x, \"L\", -_d2.target.y, _d2.target.x].join(\" \");\n                        }\n                        return path;\n                    },\n                    'fill': 'none',\n                    'stroke': function stroke(d) {\n                        var childName = d.childName.join(\"::\").toLowerCase();\n                        if (textSearch && childName.indexOf(textSearch) > -1 || d.foundText) {\n                            return \"#fd8d3c\";\n                        } else {\n                            // hightlight state;\n                            if (d.hightlight) {\n                                return \"#5B5BF5\";\n                            } else {\n                                return \"#CCCCCC\";\n                            }\n                        }\n                    },\n                    'stroke-width': \"2px\"\n                }).style({\n                    \"opacity\": function opacity(d) {\n                        var childName = d.childName.join(\"::\").toLowerCase();\n                        if (textSearch && childName.indexOf(textSearch) > -1 || d.hightlight) {\n                            return 1;\n                        } else if (!textSearch && !highlightNode || d.foundText) {\n                            return 1;\n                        } else {\n                            return 0.2;\n                        }\n                    }\n                });\n\n                var nodeView = nodeGroup.selectAll(\"g.node\").data(nodes);\n                var nodeEnter = nodeView.enter().append(\"g\").attr({\n                    \"class\": \"node\",\n                    \"size\": function size(d) {\n                        return d.size;\n                    }\n                }).attr(\"transform\", function (d) {\n                    maxX = Math.max(maxX, d.posX);\n                    maxY = Math.max(maxY, d.posY);\n\n                    minX = Math.min(minX, d.posX);\n                    minY = Math.min(minY, d.posY);\n\n                    var gPos = \"\";\n                    if (!isVertical) {\n                        gPos = \"translate(\" + d.posX + \",\" + d.posY + \")\";\n                    } else {\n                        gPos = \"translate(\" + -d.posY + \",\" + d.posX + \")\";\n                    }\n                    return gPos;\n                });\n\n                nodeEnter.append(\"circle\").attr({\n                    \"id\": function id(d) {\n                        return d.id;\n                    },\n                    \"r\": function r(d) {\n                        // hightlight state;\n                        if (d.isFocus) {\n                            return 10;\n                        } else {\n                            return 6;\n                        }\n                    },\n                    \"stroke\": function stroke(d) {\n                        // hightlight state;\n                        if (highlightNode && d.hightlight) {\n                            return \"#5B5BF5\";\n                        } else if (d.isFocus) {\n                            return \"#fd8d3c\";\n                        } else {\n                            return \"lightsteelblue\";\n                        }\n                    },\n                    \"stroke-width\": function strokeWidth(d) {\n                        if (highlightNode && d.hightlight) {\n                            return \"3px\";\n                        } else if (d.isFocus) {\n                            return \"2px\";\n                        } else {\n                            return \"1px\";\n                        }\n                    },\n                    \"posX\": function posX(d) {\n                        return d.posX;\n                    },\n                    \"posY\": function posY(d) {\n                        return d.posY;\n                    },\n                    \"fill\": function fill(d) {\n                        var dcolor = \"#c6dbef\";\n                        if (d._children) {\n                            dcolor = \"#fd8d3c\";\n                        } else if (d.children && d.children.length) {\n                            dcolor = \"#3182bd\";\n                        }\n                        return dcolor;\n                    }\n                }).style({\n                    \"opacity\": function opacity(d) {\n                        var childName = d.childName.join(\"::\").toLowerCase();\n                        if (textSearch && childName.indexOf(textSearch) > -1 || d.hightlight) {\n                            return 1;\n                        } else if (!textSearch && !highlightNode || d.foundText) {\n                            return 1;\n                        } else {\n                            return 0.2;\n                        }\n                    }\n                }).call(dragListener).on(\"click\", function (d) {\n                    d3.event.stopPropagation();\n                    clearTimeout(timer);\n                    clickNum += 1;\n                    isZoom = false; // disable zoom effect when double click;\n                    if (clickNum == 2) {\n                        d.isRadial = !d.isRadial;\n                        clickNum = 0;\n                        selectedNode = d;\n                        showNodeOption(renderNode);\n                    } else {\n                        timer = setTimeout(function () {\n                            clickNum = 0;\n                            //toggle node child;\n                            if (d.children) {\n                                d._children = d.children;\n                                d.children = null;\n                            } else {\n                                d.children = d._children;\n                                d._children = null;\n                            }\n                            renderNode();\n                        }, 333);\n                    }\n                }).on(\"mouseover\", function (d) {\n                    //toggle node child;\n                    if (!d3.event.defaultPrevented) {\n                        if (!highlightNode) {\n                            highlightNode = d;\n                            renderNode();\n                        }\n                    }\n                    d3.event.stopPropagation();\n                });\n\n                nodeEnter.append('text').text(function (d) {\n                    var nodeName = d.name;\n                    if (showNodeLabel || d.hightlight) {\n                        return nodeName.substr(0, 12);\n                    } else {\n                        return \"\";\n                    }\n                }).attr({\n                    \"text-anchor\": \"start\",\n                    \"transform\": function transform(d) {\n                        var trans = \"\";\n                        if (!isVertical) {\n                            trans = \"translate(15, 5)\";\n                        } else {\n                            trans = \"translate(-5, 15) rotate(90)\";\n                        }\n                        return trans;\n                    }\n                }).style({\n                    \"font-size\": function fontSize(d) {\n                        if (d.isFocus) {\n                            return \"20px\";\n                        } else {\n                            return \"14px\";\n                        }\n                    },\n                    \"opacity\": function opacity(d) {\n                        var childName = d.childName.join(\"::\").toLowerCase();\n                        if (textSearch && childName.indexOf(textSearch) > -1 || d.hightlight) {\n                            return 1;\n                        } else if (!textSearch && !highlightNode || d.foundText) {\n                            return 1;\n                        } else {\n                            return 0.2;\n                        }\n                    }\n                });\n\n                // update svg size;\n                contentWidth = !isVertical ? maxX - minX : maxY - minY;\n                contentHeight = !isVertical ? maxY - minY : maxX - minX;\n\n                baseSvg.attr(\"width\", Math.max(svgWidth, contentWidth));\n                baseSvg.attr(\"height\", Math.max(svgHeight, contentHeight));\n\n                $(\"#scroll-box .scroll-content\").width(Math.max(svgWidth, contentWidth)).height(Math.max(svgHeight, contentHeight));\n            }\n\n            renderNode();\n            centerNode(rootCluster);\n        }\n    }]);\n\n    return TreeView;\n}();\n\nexports.default = TreeView;\n\n//# sourceURL=webpack:///./app/graph/tree-view.js?");

/***/ })

/******/ });