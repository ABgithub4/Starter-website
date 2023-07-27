//assign 0 to the score variable
let score=0
//assign the quiz elements to the quiz variable: 
quiz = document.forms.Quiz.elements;
//define function:
// function checkAnswers(){
//assign the score variable to 10
    //var score = 10

    //alert("Well done, your score is " + score );

    function checkAnswers(){
        let score = 0
        quiz = document.forms.Quiz.elements;
        answer1 = quiz.Colour.value;
        if(answer1=="White") {
            score = score + 1;
        }
        answer2 = quiz.pattern.value;    
        if(answer2=="spotted"){
            score = score + 1;
        }   
          alert("Well done you got " + score +" out of 2");
    } 
