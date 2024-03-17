      var txt = " | My Portfolio | Ibrahim Haykal ";
      var speed = 90;
      var refresh = null;
      function action() {
        document.title = txt;
        txt = txt.substring(1, txt.length) + txt.charAt();
        refresh = setTimeout("action()", speed);
      }
      action();

      function typewriter(element, text, delay) {
        let i = 0;
        let interval = setInterval(() => {
          element.innerHTML += text.charAt(i);
          i++;
          if (i > text.length) {
            clearInterval(interval);
          }
        }, delay);
      }
      
      typewriter(document.getElementById('hello'), 'Hello,', 100);
      typewriter(document.getElementById('name'), 'I am Ibrahim Haykal<br>Alatas', 100);
      typewriter(document.getElementById('description'), 'Web Developer || IT Enthusiast<br>Student || Cyber Security Learner', 100);      