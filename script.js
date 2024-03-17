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
    
      function typeWriterHello() {
        if (helloIndex < helloText.length) {
          document.getElementById("hello").innerHTML += helloText.charAt(helloIndex);
          helloIndex++;
          setTimeout(typeWriterHello, 100);
        } else {
          setTimeout(clearText, 3000);
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
    
      function clearText() {
        document.getElementById("hello").innerHTML = "";
        document.getElementById("name").innerHTML = "";
        document.getElementById("description").innerHTML = "";
        helloIndex = 0;
        nameIndex = 0;
        descriptionIndex = 0;
        setTimeout(typeWriterHello, 1000); // Restart the typing effect after 1 second
      }
    
      // Panggil fungsi untuk memulai efek mesin tik
      setTimeout(typeWriterHello, 1000); // Delay the typing effect by 1 second
      setTimeout(typeWriterName, helloText.length * 100 + 1000);
      setTimeout(typeWriterDescription, (helloText.length + nameText.length) * 100 + 1000);