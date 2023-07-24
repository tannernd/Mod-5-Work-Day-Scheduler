// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var elementId = '';
  var eleHour = '';
  var currHour = dayjs().format('H');
  var calElement = '';
  var eleClass = '';
  var textAreaText = '';
  for(var i=8;i<=17;i++) {
    //Apply the IDs based on the hour
    elementId = 'hour-'+i;
    switch (i) {
      case 12:
        eleHour = '12PM';
        break;
      case 13:
        eleHour = '1PM';
        break;
      case 14:
        eleHour = '2PM';
        break;
      case 15:
        eleHour = '3PM';
        break;
      case 16:
        eleHour = '4PM';
        break;
      case 17:
        eleHour = '5PM';
        break;
      default:
        eleHour = i+'AM'
    }
    //Apply the class based on the current hour
    if(i == currHour) {
      eleClass = 'present';
    } else if( i < currHour) {
      eleClass = 'past';
    } else {
      eleClass = 'future';
    }
    //Get the text area text from local storage
    if(localStorage.getItem(elementId) !== null) {
      textAreaText = localStorage.getItem(elementId)
    }
    //Create the elements 
    calElement = $('<div id="'+elementId+'" class="row time-block '+eleClass+'"> \
    <div class="col-2 col-md-1 hour text-center py-3">'+eleHour+'</div> \
    <textarea class="col-8 col-md-10 description" rows="3">'+textAreaText+'</textarea> \
    <button class="btn saveBtn col-2 col-md-1" aria-label="save"> \
      <i class="fas fa-save" aria-hidden="true"></i> \
    </button> \
  </div>');
  $('.container-lg').append(calElement);
  }
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').html(dayjs().format('dddd, MMMM Do'));

});
