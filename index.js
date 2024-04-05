function sendMail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.emailAddr.value))
    {
      emailjs.init("fZtOnSTeaLmAHsULx")
      emailjs.send("service_yivyy9j","template_7n7vkdj",{
      send_to: "evalumeproject@gmail.com",
      subject: mail.emailAddr.value.toString(),
      message: "Email is subject, add it to a excel list or something",
      });

      emailjs.send("service_yivyy9j","template_7n7vkdj",{
      send_to: mail.emailAddr.value.toString(),
      subject: "Welcome to zombo.com",
      message: "everything is possible at zombo dot com",
      });
    }
    else{
      mail.emailAddr.style.color = "red";
    }   
  }
