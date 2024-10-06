let gameResult=document.getElementById('gameResult');
let userInput=document.getElementById('userInput');
let winnerImg=document.getElementById('winner');

let randomNum=Math.ceil(Math.random()*100);
console.log(randomNum)
function checkGuess(){
userValue=userInput.value;
userValue=Number(userValue)
if(randomNum===userValue) {
    gameResult.innerHTML="Hey,You Won The Game"
    gameResult.style.backgroundColor="green"
    winnerImg.src="https://res.cloudinary.com/dxzynb5wu/image/upload/v1728212263/winner_gvrk4y.gif"
}
else if (userValue > randomNum){
    gameResult.innerHTML="Value is Too High"
     gameResult.style.backgroundColor="blue"
}
else if (userValue < randomNum){
    gameResult.innerHTML="Value is Too Low"
     gameResult.style.backgroundColor="yellow"
}
else {
    gameResult.innerHTML="Please Enter A Valid Input"
     gameResult.style.backgroundColor="red"
}
}
