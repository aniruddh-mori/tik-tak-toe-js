let boxE1 = document.querySelectorAll(".box");
let resetE1 = document.querySelector("#reset");
let newBtnE1 = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msgE1 = document.querySelector("#msg");
let turnO = true;
let color = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxE1.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "#b0413e";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const showWinner = (winner) => {
  for (let box of boxE1) {
    box.disabled = true;
  }
  msgE1.innerText = `Congratulations! winner is ${winner}`;
  msgContainer.classList.remove("hide");
};
const Draw = () => {
  msgE1.innerText = "This match is Draw. Please Play again!";
  msgContainer.classList.remove("hide");
};
const enable = () => {
  for (let box of boxE1) {
    turnO = true;
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};
const checkWinner = () => {
  let winner = false;
  for (let pattern of winPatterns) {
    let val1 = boxE1[pattern[0]].innerText;
    let val2 = boxE1[pattern[1]].innerText;
    let val3 = boxE1[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        winner = true;
        showWinner(val1);
        return;
      }
      let count = 0;
      boxE1.forEach((box) => {
        if (box.innerText !== "" && !winner) {
          count++;
        }
      });
      if (count === 9 && !winner) {
        Draw();
      }
    }
  }
};
resetE1.addEventListener("click", enable);
newBtnE1.addEventListener("click", enable);
