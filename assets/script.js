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


