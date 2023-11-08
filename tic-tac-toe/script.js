const container = document.getElementById("container");
const content = document.getElementById("container");
const box = document.querySelectorAll(".box");
const title = document.getElementById("title");
const clearBtn = document.getElementById("btn");

let previousValue = "";
let currentValue = "";
let isFinish = false;
let hasWinner = false;
let clearBtnHasListner = false;
let boardItems = [];

function isVictory() { // haxtanak
  let combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < combos.length; i++) {
    let cell1 = combos[i][0];
    let cell2 = combos[i][1];
    let cell3 = combos[i][2];

    if (
      box[cell1].textContent === box[cell2].textContent &&
      box[cell2].textContent === box[cell3].textContent &&
      box[cell1].textContent !== ""
    ) {
      title.textContent = `Winner ${currentValue} 🙂`;
      isFinish = true;
      hasWinner = true;
      return;
    }
  
  }
}

function clearBoard() { // parz taxtak
  clearBtnHasListner = true;
  previousValue = "";
  currentValue = "";
  isFinish = false;
  boardItems = [];
  title.textContent = "Tic Tac Toe";
  box.forEach((elem) => {
    elem.textContent = "";
 
  });
}

function checkBoard(elem) { // stugel taxtake
  if (clearBtnHasListner) {
    console.log(clearBtnHasListner)

    // clearBtn.removeEventListener("click", clearBoard);
    clearBtnHasListner = false;
  }
  if (isFinish) {
    return;
  }
  if (!elem.textContent) {
    boardItems.push(elem)
  }
  if(boardItems.length === 9 && !isFinish){
    title.textContent = "No won 🤨 ";
    
  }
  if (!elem.textContent && !currentValue) {
    currentValue = "X";
    elem.textContent = currentValue;
  } else if (!elem.textContent && currentValue === "X") {
    previousValue = "X";
    currentValue = "0";
    elem.textContent = currentValue;
  } else if (!elem.textContent && currentValue === "0") {
    previousValue = "0";
    currentValue = "X";
    elem.textContent = currentValue;
  }

  isVictory();
  
}

function initBoard() { // skzbnakan taxtake
  box.forEach((elem) => {
    elem.addEventListener("click", () => checkBoard(elem));
  });
}

initBoard();

clearBtn.addEventListener("click", clearBoard);