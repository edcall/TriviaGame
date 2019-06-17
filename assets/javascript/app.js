

function check() {

   var question1 = document.quiz.question1.value;
   var question2 = document.quiz.question2.value;
   var question3 = document.quiz.question3.value;
   var question4 = document.quiz.question4.value;
   var correct = 0;

   if (question1 == "true") {
      correct++;
   }
   if (question1 == "false") {
      correct++;
   }
   if (question1 == "false") {
      correct++;
   }
   if (question1 == "true") {
      correct++;
   }

   document.getElementById("afterclick").style.visibility = "visible";
   document.getElementById("correct_number").innerHTML = "you got" + correct + " correct.";
}

var mymessage = document.getElementById("message");

function showMessage(){
   mymessage.className = "show";
}

setTimeout(showMessage,30000);