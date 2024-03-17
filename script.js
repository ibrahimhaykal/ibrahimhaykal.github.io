      var txt = " | My Portfolio | Ibrahim Haykal ";
      var speed = 90;
      var refresh = null;
      function action() {
        document.title = txt;
        txt = txt.substring(1, txt.length) + txt.charAt();
        refresh = setTimeout("action()", speed);
      }
      action();

      const texts = [
        { element: document.getElementById('hello'), text: 'Hello,', delay: 100 },
        { element: document.getElementById('name'), text: 'I am Ibrahim Haykal', delay: 100 },
        { element: document.getElementById('lastname'), text: 'Alatas', delay: 100 },
        { element: document.getElementById('description1'), text: 'Web Developer || IT Enthusiast', delay: 100 },
        { element: document.getElementById('description2'), text: 'Student || Cyber Security Learner', delay: 100 }
      ];
      
      function typewriter(text, index) {
        let i = 0;
        let isDeleting = false; // Variable to track whether the text is being deleted
      
        let interval = setInterval(() => {
          if (i < text.text.length && !isDeleting) {
            text.element.innerHTML += text.text.charAt(i);
            i++;
          } else if (i > 0 && isDeleting) {
            text.element.innerHTML = text.element.innerHTML.slice(0, -1); // Delete one character at a time
            i--;
          } else {
            isDeleting = !isDeleting; // Toggle the isDeleting variable
            if (isDeleting) {
              clearInterval(interval); // Stop interval briefly before starting again
              setTimeout(() => {
                typewriter(texts[(index + 1) % texts.length], (index + 1) % texts.length);
              }, 1000); // Wait for 1 second before starting again
            } else {
              i = 0; // Reset index for the next cycle
            }
          }
        }, text.delay);
      }
      