let computerScore=0;
let userScore=0;
function computerChoice(){
    return Math.floor(3*Math.random());
}

function buttonOnClick(event){
    const buttonID=event.target.id;
    switch (buttonID){
        case "rock":determineWinner(0);break;
        case "paper":determineWinner(1);break;
        case "scissors":determineWinner(2);
    }
}
const links=["rock.jpg","paper.jpg","scissors.jpg"];
function setPictures(userChoice,computerChoice){
    const userImg=document.querySelector("#userImage");
    const computerImg=document.querySelector("#computerImage");
    userImg.src=links[userChoice];
    computerImg.src=links[computerChoice];
}

function determineWinner(userChoice){
    const computer=computerChoice();
    const links=["rock.jpg","paper.jpg","scissors.jpg"];
    setPictures(userChoice,computer);
    const userImg=document.querySelector("#userImageContainer");
    const computerImg=document.querySelector("#ComputerImageContainer");
    if (computer === userChoice){
        computerImg.style.transform='scale(1)';
        userImg.style.transform ='scale(1)';
    }
    else if (computer === (userChoice + 1) % 3)
    {
        computerScore++;
        const userText=document.querySelector("#computerText");
        computerImg.style.transform='scale(1.1)';
        userImg.style.transform ='scale(1)';
        userText.textContent=`Computer Score: ${computerScore}`;

    }
    else
    {
        userScore++;
        const userText=document.querySelector("#userText")
        computerImg.style.transform='scale(1)';
        userImg.style.transform ='scale(1.1)';
        userText.textContent=`User Score: ${userScore}`;
    }
}
function buttonMouseOver(event){
    const buttonID =event.target.id;
    const mousedOverButton=document.querySelector(`#${buttonID}`);
    mousedOverButton.style.transform = 'scale(1.1)';
}
function buttonMouseEnd(event){
    const buttonID =event.target.id;
    const mousedOverButton=document.querySelector(`#${buttonID}`);
    mousedOverButton.style.transform = 'scale(1)';
}
const buttons=document.querySelectorAll("button")
buttons.forEach((button)=>{
    button.addEventListener("click",buttonOnClick)
    button.addEventListener("mouseover",buttonMouseOver);
    button.addEventListener("mouseout",buttonMouseEnd);
});