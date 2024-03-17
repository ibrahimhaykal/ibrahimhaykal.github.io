      var txt = " | My Portfolio | Ibrahim Haykal ";
      var speed = 90;
      var refresh = null;
      function action() {
        document.title = txt;
        txt = txt.substring(1, txt.length) + txt.charAt();
        refresh = setTimeout("action()", speed);
      }
      action();

      document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll(".nav-link");
    
        navLinks.forEach(function(navLink) {
          navLink.addEventListener("click", function() {
            navLinks.forEach(function(link) {
              link.classList.remove("active");
            });
            this.classList.add("active");
          });
        });
      });