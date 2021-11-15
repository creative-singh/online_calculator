const inputBtn = document.querySelectorAll(".inputBtn"),
  output = document.querySelector(".output"),
  btnClear = document.querySelector(".btnClear"),
  btnBack = document.querySelector(".btnBack"),
  btnEqual = document.querySelector(".btnEqual");

inputBtn.forEach((btn) => {
  btn.onclick = (event) => {
    output.value += event.target.textContent;
  }
})

function clear() {
  output.value = "";
}

function back() {
  const exp = output.value;
  output.value = exp.substring(0, exp.length - 1);
}

function equal() {
  const exp = output.value;
  output.value = eval(exp);
}

btnClear.addEventListener("click", clear);
btnBack.addEventListener("click", back);
btnEqual.addEventListener("click", equal);