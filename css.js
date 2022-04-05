// let button= document.querySelector("button")
// console.log= "button"

// button.addEventListener("click",()=> {
//     alert("lets start the Game")

// });


//  var question1 = document.getElementById("p");
// // var question1 = document.createElement("ready for first question");
// document.body.appendchild(question1);
// {/* <p id="p"> what is your answer
// </p>; */}




// // let button = document.querySelector("button")
// // console.log (button);
var words =["Surbhi", "Aryan", "Aarohi", "Sumit"]
var choosenword=words[Math.floor(Math.random()*words.length)];
choosenword = choosenword.split("")
console.log("choosenword", choosenword)
var userGuessarray=[];
for (let i =0; i<choosenword.length;i++){
    userGuessarray.push("")
}
console.log("userguess:" , userGuessarray)
wordpara.textcontent = "us"

