var currentDate = moment().format(
  'dddd'); + " " + moment().format("Do MMM YYYY");
var currentTime = moment().format('h:mm;dd a');

var nineAm = $("#9am");

var dateInterval = setInterval(function(){
    if ("#currentDay").momentNow.format("dddd, MMMM Do YYYY") ++ ""
     + momentNow.format("dddd");
     $("currentDate").html(currentDate + "" + momentNow.format("hh:mm:ss A"));
})1000;


// moment().format("dddd, MMMM Do YYYY,
// var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }