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
      for (j = i - 1; source[j] > temp && j >= 0; --j) {
        source[j + 1] = source[j];
        step += 1; // measure
      }
      source[j + 1] = temp;
      step += 1; // measure
    }

    console.log(step);
    return source;
  });


  setup("Merge Sort", function(source) {
    var step = 0;

    function work(arr) {
      var merge = [];
      if (arr.length == 1) {
        merge = arr;
      } else {
        // split;
        var point = Math.floor(arr.length / 2);
        var leftArr = arr.slice(0, point);
        var rightArr = arr.slice(point);

        leftArr = work(leftArr); // left soft;
        rightArr = work(rightArr); // right soft;
        // merge;
        while (leftArr.length || rightArr.length) {
          var firstLeft = leftArr[0];
          var firstRight = rightArr[0];
          step += 1; // measure
          if (firstLeft != null && firstRight != null) {
            merge.push(firstLeft < firstRight ? leftArr.shift() : rightArr.shift());
          } else {
            merge.push(leftArr.shift() || rightArr.shift());
          }
        }
      }
      return merge; // sorted array;
    }

    console.log(step);
    return work(source);
  });
})();