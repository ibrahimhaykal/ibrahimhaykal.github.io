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
      
      document.addEventListener("DOMContentLoaded", function() {
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
            if (i < text.text.length) {
              text.element.innerHTML += text.text.charAt(i);
              i++;
            } else {
              clearInterval(interval);
              setTimeout(() => {
                text.element.innerHTML = ''; // Hapus teks sebelum memulai kembali
                typewriter(texts[(index + 1) % texts.length], (index + 1) % texts.length); // Start again
              }, 2000); // Tunggu 2 detik sebelum memulai kembali
            }
          }, text.delay);
        }
      
        typewriter(texts[0], 0);
      });
      