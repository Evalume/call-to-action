function sendMail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.emailAddr.value))
    {
      emailjs.init("fZtOnSTeaLmAHsULx")
      emailjs.send("service_yivyy9j","template_7n7vkdj",{
      subject: "This is test",
      message: "This is test message",
      });
    }
    else{
      mail.emailAddr.style.color = "red";
    }   
  }
