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
  for(var i=9;i<=17;i++) {
    //Apply the IDs based on the hour
    elementId = 'hour-'+i;
    //Apply the correct time
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
    } else {
      textAreaText = '';
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
  //Event listener for the save buttons
  $('.saveBtn').on('click', function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).prev().val());
  });

  // Add code to display the current date in the header of the page.
  $('#currentDay').html(dayjs().format('dddd, MMMM Do'));

});
