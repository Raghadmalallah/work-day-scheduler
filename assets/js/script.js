// var currentDate = moment().format(
//   'dddd'); + " " + moment().format("Do MMM YYYY");
// var currentTime = moment().format('h:mm;dd a');

// var nineAm = $("#9am");

// var dateInterval = setInterval(function(){
//  var timeNow = moment();
//  $("currentDay").html(timeNow.format("YYYY MMMM DD") + '' + timeNow.format('dddd').substring(0,3).toUpperCase());
//  $('#currentDay').html(currentDate + " " +timeNow.format('hh:mm:ss A'));
// },100);

savebtn.click(function ()) {
  var event = preventDefault;
  var hourValue = $(this).preventDefault().hourValue();
  localStorage.setItem(hourValue, JSON.stringify(eventEntered));
};

// $('.sampleList > li > a').click(function() {
// 	$(this).parent().toggleClass('sampleClass');
// 	return false;
// });

// // moment().format("dddd, MMMM Do YYYY,
// // var msgInterval = setInterval(function () {
// //     // If there are no more words left in the message
// //     if (words[wordCount] === undefined) {
// //       // Use `clearInterval()` to stop the timer
// //       clearInterval(msgInterval);
// //     } else {
// //       // Display one word of the message
// //       mainEl.textContent = words[wordCount];
// //       wordCount++;
// //     }
// //   }, 1000);
// // }