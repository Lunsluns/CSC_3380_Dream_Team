[Preferences Page]
/This page will allow the user to edit their settings and preferences in their calendar when logged in
Preferences so far will include the ability to change 
1. notification settings -time of notification, type of notification 
2. aesthetic preferences - themed preferences that allow the user to change the color scheme of the given calendar
3. Date and time - allows user to change the time zone of the calendar
4. User settings - the user should also be able to control personal settings. I.e. changing username 
5. The user will also possibly have the option to import other calendars from google, apple, etc.

The preferences page wil allow the user to have control over the practical and aesthetic aspects of their calendar.

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}