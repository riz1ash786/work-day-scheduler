// Display today's day and date
var currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
$("#currentDay").append(currentDate);

for (var i = 9; i < 18; i++) {
  if (i > currentHour) {
    $("#hour-" + i).addClass("future");
  } else if (i === currentHour) {
    $("#hour-" + i).addClass("past");
  } else if (i < currentHour) {
    $("#hour-" + i).addClass("past");
  }
}
