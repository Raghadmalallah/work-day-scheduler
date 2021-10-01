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
   event.preventDefault();

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
// Given a time block element

// let currentHour = get the current hour
// let blockHour = get time block hour

// IF currentHour < blockHour
//    add "future" class to block element
// ELSE IF currentHour > blockHour
//    add "past" class to block element
// ELSE
//    add "present" class to block element




// currentHour = 9
// blockHour = 9

// result adds "past" class to time block to make gray