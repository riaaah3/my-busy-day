// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 // function readProjectsFromStorage() {
   // var projects = localStorage.getItem('projects');
    //if (projects) {
  //     projects = JSON.parse(projects);
  //   } else {
  //     projects = [];
  //   }
  //   return projects;
  // }
  // function saveProjectsToStorage(projects) {
  //   localStorage.setItem('projects', JSON.stringify(projects));
  // }

  // readProjectsFromStorage();
  // saveProjectsToStorage();

  function handleProjectFormSubmit(event) {
    event.preventDefault();
  }
    //
    // TODO: Add code to display the current date in the header of the page.
    function displayTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeDisplayEl.text(rightNow);
    }
    displayTime();

    $(".saveBtn").on("click",function(event){
      event.preventDefault()
      var userEntry = $(this).siblings("textarea").val()
      var timeStamp = $(this).parent().attr("id")
      console.log(userEntry, timeStamp)
      localStorage.setItem(timeStamp, userEntry)

    })
    var currentHour = dayjs().hour()
    console.log(currentHour)
  for (i = 9; i <=17;i++){
    var id="hour-"+i
    var storedEntry = localStorage.getItem(id)
    console.log(storedEntry)
    $("#"+id).children("textarea").val(storedEntry)
    if(currentHour > i){
      $("#"+id).children("textarea").addClass("past")
    }else if(currentHour === i){
      $("#"+id).children("textarea").addClass("present")
    }else {
      $("#"+id).children("textarea").addClass("future")
    }
  }
});
