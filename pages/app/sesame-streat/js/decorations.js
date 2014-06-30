$(function() {
  var choiceFoods = [
    [true, false, false],
    [false, false, true],
    [false, true, false]
  ];
  var currentNum = book.currentNum;
  var foods = $("#page-0" + String(currentNum) + " .choiceFood div img");

/*
  foods.each(function() {
    var self = $(this);
    $(this).on("mouseup tap", function() {
      console.log(self.attr("src"));
    });
  });
 */

});


/* Section 3 Game */

/*
$(function() {
	$("#page-05 .star1").on("mouseup tap", function() {
		$("#page-05 .num1").show();
		alert('aa');
	});
});
*/

var count = 1;
$(function() {
	$("#prevButton").on("mouseup tap", function() {
		count = 1;
	});
	$("#nextButton").on("mouseup tap", function() {
		count = 1;
	});
});

// 星の数を数えようぜ！
var starcount = function(num) {
	if(num == count) {
		$("#page-05 .num"+count).show();
		$("#page-05 .star"+count).removeClass("zooming");
		count++;
		$("#page-05 .star"+count).addClass("zooming");
		$("#page-05 .star"+count).css("cursor","pointer");
	}
	if(count == 4)
		$("#page-05 .clear").show();
}

// 椅子の数を数えようぜ！
var chaircount = function(num,page) {
	if(num == count) {
		$("#page-06 .num"+count).show();
		$("#page-06 .chair"+count).removeClass("zooming");
		count++;
		$("#page-06 .chair"+count).addClass("zooming");
		$("#page-06 .chair"+count).css("cursor","pointer");
	}
	if(count == 5)
		$("#page-06 .clear").show();
}

// 椅子の数を数えようぜ！2
var chaircount2 = function(num) {
	if(num == count) {
		$("#page-07 .num"+count).show();
		$("#page-07 .chair"+count).removeClass("zooming");
		count++;
		$("#page-07 .chair"+count).addClass("zooming");
		$("#page-07 .chair"+count).css("cursor","pointer");
	}
	if(count == 8)
		$("#page-07 .clear").show();
}

// 椅子の数を数えようぜ！3
var chaircount3 = function(num) {
	if(num == count) {
		$("#page-08 .num"+count).show();
		$("#page-08 .chair"+count).removeClass("zooming");
		count++;
		$("#page-08 .chair"+count).addClass("zooming");
		$("#page-08 .chair"+count).css("cursor","pointer");
	}
	if(count == 6)
		$("#page-08 .clear").show();
}

// 椅子の数を数えようぜ！4
var chaircount4 = function(num) {
	if(num == count) {
		$("#page-09 .num"+count).show();
		$("#page-09 .chair"+count).removeClass("zooming");
		count++;
		$("#page-09 .chair"+count).addClass("zooming");
		$("#page-09 .chair"+count).css("cursor","pointer");
	}
	if(count == 6)
		$("#page-09 .clear").show();
}
