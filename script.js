      var txt = " | My Portfolio | Ibrahim Haykal ";
      var speed = 90;
      var refresh = null;
      function action() {
        document.title = txt;
        txt = txt.substring(1, txt.length) + txt.charAt();
        refresh = setTimeout("action()", speed);
      }
      action();
      const helloText = "Hello,";
      const nameText = "I am Ibrahim Haykal Alatas";
      const descriptionText = "Web Developer || IT Enthusiast Student || Cyber Security Learner";
    
      let helloIndex = 0;
      let nameIndex = 0;
      let descriptionIndex = 0;
      let typingComplete = false;
    
      function typeWriterHello() {
        if (helloIndex < helloText.length) {
          document.getElementById("hello").innerHTML += helloText.charAt(helloIndex);
          helloIndex++;
          setTimeout(typeWriterHello, 100);
        } else if (helloIndex === helloText.length && !typingComplete) {
          setTimeout(eraseText, 1000);
          typingComplete = true;
        }
      }
    
      function typeWriterName() {
        if (nameIndex < nameText.length) {
          document.getElementById("name").innerHTML += nameText.charAt(nameIndex);
          nameIndex++;
          setTimeout(typeWriterName, 100);
        }
      }
    
      function typeWriterDescription() {
        if (descriptionIndex < descriptionText.length) {
          document.getElementById("description").innerHTML += descriptionText.charAt(descriptionIndex);
          descriptionIndex++;
          setTimeout(typeWriterDescription, 100);
        }
      }
    
      function eraseText() {
        const helloElement = document.getElementById("hello");
        const nameElement = document.getElementById("name");
        const descriptionElement = document.getElementById("description");
    
        const helloTextLength = helloElement.innerHTML.length;
        const nameTextLength = nameElement.innerHTML.length;
        const descriptionTextLength = descriptionElement.innerHTML.length;
    
        if (helloTextLength > 0) {
          helloElement.innerHTML = helloElement.innerHTML.slice(0, -1);
          setTimeout(eraseText, 100);
        } else if (nameTextLength > 0) {
          nameElement.innerHTML = nameElement.innerHTML.slice(0, -1);
          setTimeout(eraseText, 100);
        } else if (descriptionTextLength > 0) {
          descriptionElement.innerHTML = descriptionElement.innerHTML.slice(0, -1);
          setTimeout(eraseText, 100);
        } else {
          helloIndex = 0;
          nameIndex = 0;
          descriptionIndex = 0;
          typingComplete = false;
          setTimeout(typeWriterHello, 500);
        }
      }
    
      // Panggil fungsi untuk memulai efek mesin tik
      typeWriterHello();
      setTimeout(typeWriterName, helloText.length * 100);
      setTimeout(typeWriterDescription, (helloText.length + nameText.length) * 100);