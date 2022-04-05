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
answers.forEach((currentAnswerElement)=>{
    if(currentAnswerElement.checkede){
        answer = currentAnswerElement.id;
    }
    
});

return answer;

};

const deselectAll=()=>{
    answers.forEach((currentAnswerElement)=> currentAnswerElement.checkedAnswer =false );
}
  

submit.addEventListener ('click',() => {
    const CheckedAnswer = getCheckAnswer();
    console.log(CheckedAnswer);

    if (CheckedAnswer == quiz [questionCount].ans){
        score++;
    };
    questionCount++;

    if (questionCount <quiz.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML= score;

        // <h3>you scored ${} /${quiz.length}</h3>
    }


    showscore.classList.remove('scoreArea');

});

function Timer()
    {
         alert("You are out of time!");
    }






// var words =["Surbhi", "Aryan", "Aarohi", "Sumit"]
// var choosenword=words[Math.floor(Math.random()*words.length)];
// choosenword = choosenword.split("")
// console.log("choosenword", choosenword)
// var userGuessarray=[];
// for (let i =0; i<choosenword.length;i++){
//     userGuessarray.push("")
// }
// console.log("userguess:" , userGuessarray)
// wordpara.textcontent = "us"

