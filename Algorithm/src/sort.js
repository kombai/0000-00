(function() {

  setup("Bubble Sort", function(source) {
    var length = source.length;
    var step = 0;
    var i;
    var j;
    var temp;

    for (i = 0; i < length; ++i) {
      for (j = 0; j < length - 1 - i; ++j) {
        if (source[j] > source[j + 1]) {
          temp = source[j + 1];
          source[j + 1] = source[j];
          source[j] = temp;
          step += 1; // measure
        }
      }
    }

    console.log(step);
    return source;
  });

  setup("Insert Sort", function(source) {
    var length = source.length;
    var step = 0;
    var i;
    var j;
    var temp;

    for (i = 1; i < length; ++i) {
      temp = source[i];
      for (j = i - 1; j >= 0 && source[j] > temp; --j) {
        source[j + 1] = source[j];
        step += 1; // measure
      }
      source[j + 1] = temp;
      step += 1; // measure
    }

    console.log(step);
    return source;
  });

})();