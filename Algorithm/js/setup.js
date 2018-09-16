function copy() {
  var arg = arguments,
    source = null;
  return {
    to: function(target) {
      target = target != null ? target : {};
      for (var i = 0; i < arg.length; ++i) {
        source = arg[i];
        for (var o in source) {
          // do not copy the static method;
          if (source.hasOwnProperty(o)) {
            if (source[o] && source[o].constructor == Object) {
              (target[o] && "object" === typeof target[o]) || (target[o] = {});
              copy(source[o]).to(target[o]);
            } else {
              // override;
              target[o] = source[o];
            }
          }
        }
      }
      return target;
    }
  }
}

(function() {
  var container = $(".container");
  var funcStore = {};

  function initSource(limit) {
    var source = [];
    var i = 0;
    var n = limit > 0 ? limit : 100;
    for (i = 0; i < n; ++i) {
      source.push(Math.round(Math.random() * 10 * limit));
    }
    return source;
  }
  var source = initSource(6000);
  $(".source").val(source.join(", "));
  var sourceTxt = [].concat(source);
  var sourceTxt = sourceTxt.sort(function(a, b) {
    return a - b;
  }).join(", ");

  window.setup = function(name, func) {
    funcStore[name] = func;
    var tiny = $("<div class='tiny-doc'><h5>" + name + "</h5></div>");
    var button = $("<button class='executive'>Run</button>");
    var result = $("<span class='result'></span>");

    button.click(function() {
      var input = [].concat(source);
      var start = Date.now();

      console.time(name);
      var ouput = func(input);
      console.timeEnd(name);

      var duration = Date.now() - start;
      var ouputTxt = ouput.join(", ");
      if (ouputTxt === sourceTxt) {
        result.html("Pass : " + duration + " ms;");
      } else {
        result.html("Failure");
      }
      tiny.append(result);
    });

    tiny.append(button).prependTo(container);
  }

})();