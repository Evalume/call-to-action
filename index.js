
var cindex = 0
var rindex = 0
let listOfArrays = [
    ["Anonymity options for submitting ideas", "Integration with social media platforms for broader feedback", "More detailed analytics on the feedback received"],
    ["They are clear, intuitive, and visually appealing", "They are somewhat confusing and could be more intuitive", "They lack visual appeal but seem functional"],
  ];

let titels = ["Based on our presentation, what additional feature would you suggest for Evalume?", "What is your initial impression of the UI mockups presented?"]

var answers = []

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
      subject: "Welcome to Evalume",
      message: "Hello you, \n
                \n
                We're thrilled to welcome you aboard Evalume – your newest companion on the path to insightful and effective evaluations. By choosing Evalume, you’ve taken a significant step towards unlocking comprehensive analysis and streamlined evaluations like never before.
                \n
                We're Here for You \n
                Got questions? Our support team is just an email away at evalumeproject@gmail.com.
        ",
      });
    }
    else{
      mail.emailAddr.style.color = "red";
    }   
  }

function test(button){

    var secondDiv = button.querySelectorAll('div')[1];
    answers.push(secondDiv.textContent + "\n");

    if(rindex == 2){
        let survey = document.getElementsByClassName("div-14")
        survey[0].innerHTML = "Thank you for participating <br> in our survey your feedback <br> is essential.";
        survey[0].style.paddingTop = "38px"
        
        emailjs.init("fZtOnSTeaLmAHsULx")
              emailjs.send("service_yivyy9j","template_7n7vkdj",{
              send_to: "evalumeproject@gmail.com",
              subject: "New Results!",
              message: answers.toString(),
              });
    }

    let titel = document.getElementsByClassName('div-17')
    titel[0].innerHTML = titels[rindex]

    let question = document.getElementsByClassName('question')
    console.log(question)
    for (let i = 0; i < question.length; i++) {
        question[i].textContent = listOfArrays[rindex][cindex]
        cindex++;
    }
    rindex++;
    cindex=0;

    let bar = document.getElementById("survey")
    bar.value += 33;
}
