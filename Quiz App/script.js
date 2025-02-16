function finishFunction()
{
    const nickname=document.quiz.nickname.value
    const a1=document.quiz.answerq1.value
    const a2=document.quiz.answerq2.value
    const a3=document.quiz.answerq3.value
    const a4=document.quiz.answerq4.value
    const a5=document.quiz.answerq5.value
    var score=0
    if(a1=='A'){
      score++
    }
    if(a2=='B'){
      score++
    }
    if(a3=='D'){
      score++
    }
    if(a4=='True'){
      score++
    }
    if(a5=='C'){
      score++
    }

    alert("score"+score+" "+nickname+"Thank you for completing the quiz.");

}
