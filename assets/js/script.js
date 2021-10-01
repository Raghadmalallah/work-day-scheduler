displayEvent() || [];

$("#currentDay").text(moment().format("dddd, MMMM Do"));

const currentHour = moment().hour();
var plannerInput = $(".row input[type=text]");

$(plannerInput).each(function() {

var inputNumber = parseInt($(this).attr("data-hour"));

if (inputNumber < currentHour) {
  $(this).addClass("past")
}
else if (inputNumber == currentHour) {
  $(this).addClass("present")
}
else if (inputNumber > currentHour) {
  $(this).addClass("future")
}
});

$(".savebtn").click(function() {
   preventDefault();

    var hourValue = $(this).attr("data-value")
    var eventEntered = $(this).prev().val();

    localStorage.setItem(hourValue, JSON.stringify(eventEntered));
});

var keys = Object.keys(localStorage);
keys.forEach(displayEvent);

function displayEvent(item) {
  $("")
}

$("#clearSchedule").click(function() {
  localStorage.clear();
  window.location.assign("./index.html");
})
