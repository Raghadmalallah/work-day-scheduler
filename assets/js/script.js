displayEvent() || [];

$("#currentDay").text(moment().format("dddd, MMMM Do"));

savebtn.click(function ()) {
  var event = preventDefault;
  var hourValue = $(this).preventDefault().hourValue();
  localStorage.setItem(hourValue, JSON.stringify(eventEntered));
};

var currentHour = moment().houre();
var plannerInput = $(".row input[type=text]");

$(plannerInput).each(function() {
var inputNumber = parseInt($(this).attr("data-hour"));
if (inputNumber =< plannerInput) {
  $(this).addClass("past")
}
else if (inputNumber == plannerInput) {
  $(this).addClass("present")
}
else (inputNumber >= plannerInput) {
  $(this).addClass("future")
}
}
)

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