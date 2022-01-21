// Display today's day date and time with lowercase am/pm using moment.js
var currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
$("#currentDay").append(currentDate);

// Using moment.js for current hour
function currentTime() {
  var currentHour = moment().hour();
  // Using each() method in jQuery
  $(".time-block").each(function () {
    var plannerTime = parseInt($(this).attr("id").split("hour")[1]);
    // console.log(plannerTime, currentHour);

    // Adding colour to planner using if/else statments and jquery
    if (plannerTime < currentHour) {
      $(this).addClass("past");
    } else if (plannerTime === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
//Call function
currentTime();

// Local storage from
//jQuery save button, click listener
$(".saveBtn").on("click", function () {
  var inputText = $(this).siblings(".description").val(); // use of the sibling html description attribute
  var plannerTime = $(this).parent().attr("id"); // use of the parent html id attribute

  //set items in local storage key and value
  localStorage.setItem(plannerTime, inputText);
});

// getitems from local storage for saved events to persist after user refresh
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
// alert(localStorage.getItem("test"));
