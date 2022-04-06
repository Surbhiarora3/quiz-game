
const quiz=[
 {   
question:"Question1: What is HTML?",
a: "Hello to some language",
b: "helium toy made language",
c: "Hypertext Makeup Language",
d: "Hypertext Markup Language",

ans: "ans4"
 },
{
question:"Question2: what is CSS?",
a: "Camel Style Casing",
b: "Cascading Style Sheet",
c: "Camel Style Sheet",
d: "Case Study Sheet",

ans: "ans2"
},
 
{
 question:"Question3: Which heading size is the largest?",
a: "h1",
b: "h2",
c: "h3",
d: "h4",

ans: "ans1"
},

{
    question:"Question4: h1 and h3 are examples of what?",
a: "Heading",
b: "paragraph  ",
c: "Address",
d: "styling",

ans: "ans1"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const click = document.querySelectorAll('.click');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

const init = document.querySelector('#inName');
let questionCount= 0;
let score = 0;

const loadQuestion = () => {
    

    const questionList = quiz[questionCount];

  question.innerHTML=  questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;

}

loadQuestion();


const getCheckAnswer = () => {
let answer;

answers.forEach((currentAnswerElement) => {
    if(currentAnswerElement.checked) {
        answer = currentAnswerElement.id;
    }
    
});
 return answer;
};



const deselectAll=()=>{
    answers.forEach((currentAnswerElement)=> currentAnswerElement.checkedAnswer =false );
}
submit.addEventListener ('click',() => {
    

    var answer;
    const CheckedAnswer = getCheckAnswer();
    console.log(CheckedAnswer);

    if (CheckedAnswer == quiz[questionCount].ans){
        score++;
        // reviewAnswer.innerHTML= "Correct"
        answer="Correct";

    }
    else
    {
        // reviewAnswer.innerHTML= "Wrong"
        answer="Wrong";
    }
    
   

    questionCount++;

    // if (questionCount <quiz.length ){
        if (questionCount <quiz.length ){

        loadQuestion();
        reviewAnswer.innerHTML=answer;
    }
    else{
        //SS
        finalResult.innerHTML="Final Results: "
        //SS
        showscore.innerHTML= score;  

    initials = document.createElement("input"); 
    initials.setAttribute("id", "initails-input"); 
    initials.setAttribute("type", "text"); 
    initials.setAttribute("name", "iniatials"); 
    initials.setAttribute("placeholder", "Enter Initials here"); 
    init.appendChild(initials);
        //reviewAnswer.innerHTML=answer;
        
        
    // create save button elemetn
    saveButtonEl = document.createElement("button");
    saveButtonEl.setAttribute("id" , "save-btn");
    saveButtonEl.setAttribute("class" ,"save-btn");
    saveButtonEl.setAttribute("type" , "submit");
    saveButtonEl.textContent = "Save Score";

    init.appendChild(saveButtonEl);

    init.addEventListener("submit", viewHighScores);
    }
    function savedScores(){
    e.preventDefault();
    var name = document.querySelector("#initails-input").value;
    savedInit(name);
    loadSaveScores();
    }   
    var savedInit = function(initails) {
        localStorage.setItem("initails", JSON.stringify(initails));
    }
    var savedScore = function() {
        localStorage.setItem("", JSON.stringify(score));
    }
function loadSaveScores() {
    
    var savedInit = localStorage.getItem("initails");

   
    savedInit = JSON.parse(savedInit);

    document.getElementById("highScores").innerHTML = savedInit + " - " + savedScore;
   

  
}   

});

