displayEvent() || [];

$("#currentDay").text(moment().format("dddd, MMMM Do"));

savebtn.click(function ()) {
  var event = preventDefault;
  var hourValue = $(this).preventDefault().hourValue();
  localStorage.setItem(hourValue, JSON.stringify(eventEntered));
};
var plannerInput = $(".row input[type=text]");

$(plannerInput).each(function() {
var inputNumber = parseInt($(this).attr("data-hour"));
}
)