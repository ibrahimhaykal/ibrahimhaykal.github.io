      var txt = " | My Portfolio | Ibrahim Haykal ";
      var speed = 90;
      var refresh = null;
      function action() {
        document.title = txt;
        txt = txt.substring(1, txt.length) + txt.charAt();
        refresh = setTimeout("action()", speed);
      }
      action();
      var i = 0, text;
      text = "Hello";
      function typewriter()
      {
        if (i < text.length){
            document.getElementById ('hello').innerHTML += text.charAt(i);
            i++;
            setTimeout (typewriter, 50)
        }
      }
      typewriter()