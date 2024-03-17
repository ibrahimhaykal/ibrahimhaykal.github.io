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
      let isDeleting = false;
    
      function typeWriterHello() {
        const helloElement = document.getElementById("hello");
        if (!isDeleting && helloIndex < helloText.length) {
          helloElement.innerHTML += helloText.charAt(helloIndex);
          helloIndex++;
        } else if (isDeleting && helloIndex > 0) {
          helloElement.innerHTML = helloElement.innerHTML.slice(0, -1);
          helloIndex--;
        } else if (!isDeleting && helloIndex === helloText.length) {
          isDeleting = true;
          setTimeout(typeWriterHello, 500);
          return;
        } else if (isDeleting && helloIndex === 0) {
          isDeleting = false;
        }
        setTimeout(typeWriterHello, 100);
      }
    
      function typeWriterName() {
        const nameElement = document.getElementById("name");
        if (!isDeleting && nameIndex < nameText.length) {
          nameElement.innerHTML += nameText.charAt(nameIndex);
          nameIndex++;
        } else if (isDeleting && nameIndex > 0) {
          nameElement.innerHTML = nameElement.innerHTML.slice(0, -1);
          nameIndex--;
        } else if (!isDeleting && nameIndex === nameText.length) {
          isDeleting = true;
          setTimeout(typeWriterName, 500);
          return;
        } else if (isDeleting && nameIndex === 0) {
          isDeleting = false;
        }
        setTimeout(typeWriterName, 100);
      }
    
      function typeWriterDescription() {
        const descriptionElement = document.getElementById("description");
        if (!isDeleting && descriptionIndex < descriptionText.length) {
          descriptionElement.innerHTML += descriptionText.charAt(descriptionIndex);
          descriptionIndex++;
        } else if (isDeleting && descriptionIndex > 0) {
          descriptionElement.innerHTML = descriptionElement.innerHTML.slice(0, -1);
          descriptionIndex--;
        } else if (!isDeleting && descriptionIndex === descriptionText.length) {
          isDeleting = true;
          setTimeout(typeWriterDescription, 500);
          return;
        } else if (isDeleting && descriptionIndex === 0) {
          isDeleting = false;
        }
        setTimeout(typeWriterDescription, 100);
      }
    
      // Panggil fungsi untuk memulai efek mesin tik
      typeWriterHello();
      setTimeout(typeWriterName, helloText.length * 100);
      setTimeout(typeWriterDescription, (helloText.length + nameText.length) * 100);