/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleDropdown() {
  var topnav = document.querySelector('.topnav');
  topnav.classList.toggle('show');
}



$(document).ready(function() {
  if (window.location.hash) { 
      //bind to scroll function
      $(document).scroll( function() {
          var hash = window.location.hash
          var hashName = hash.substring(1, hash.length);
          var element;

          //if element has this id then scroll to it
          if ($(hash).length != 0) {
              element = $(hash);
          }
          //catch cases of links that use anchor name
          else if ($('a[name="' + hashName + '"]').length != 0)
          {
              //just use the first one in case there are multiples
              element = $('a[name="' + hashName + '"]:first');
          }

          //if we have a target then go to it
          if (element != undefined) {
              window.scrollTo(0, element.position().top);
          }
          //unbind the scroll event
          $(document).unbind("scroll");
      });
  }

});

