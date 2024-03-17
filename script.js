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
        let interval = setInterval(() => {
          text.element.innerHTML += text.text.charAt(i);
          i++;
          if (i > text.text.length) {
            clearInterval(interval);
            if (index + 1 < texts.length) {
              typewriter(texts[index + 1], index + 1);
            }
          }
        }, text.delay);
      }
      
      typewriter(texts[0], 0);
      