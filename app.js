const container = document.querySelector(".container");

for (let i=0;i<9;i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");

const score = document.querySelector(".score");
const time = document.querySelector(".time");

boxes = Array.from(boxes);

let result = 0;
let currentTime = 60;
let randomPos;
let clickedPos;

function setMole () {
    for (let i = 0;i < boxes.length;i++){
        boxes[i].classList.remove("mole");
    }
    randomPos = Math.floor(Math.random() * 9);
    boxes[randomPos].classList.add("mole");
}

function check () {

    if (clickedPos === randomPos){
        result++;
        score.textContent = result;
    }else{
        return;
    }
}

function timer () {
    if (currentTime <= 0){
        clearInterval(interval);
        for (let i = 0;i < boxes.length; i++){
            boxes[i].classList.remove("mole");
        }
        return;
    }
    currentTime--;
    time.textContent = currentTime;
}

for (let i = 0;i < boxes.length; i++){
    boxes[i].addEventListener("click", () => {
        clickedPos = i;
        check();
    });
}

let interval = setInterval (setMole , 750);
let interval1 = setInterval (timer , 1000);