// Display today's day date and time with lowercase am/pm using moment.js
var currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
$("#currentDay").append(currentDate);

// Using moment.js for current hour
function currentTime() {
  var currentHour = moment().hour();

  $(".time-block").each(function () {
    var plannerTime = parseInt($(this).attr("id").split("hour")[1]);
    // Console log hours working
    console.log(plannerTime, currentHour);

    // Adding colour to planner using if/else statments and jquery
    if (plannerTime < currentHour) {
      $(this).addClass("past");
    } else if (plannerTime == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
//Run function
currentTime();
