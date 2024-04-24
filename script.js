function elements(tagname, content, attrname, attrvalue) {
  const ele = document.createElement(tagname);
  ele.innerHTML = content;
  ele.setAttribute(attrname, attrvalue);
  return ele;
}
const header = elements("h1", "CALCULATOR", "id", "title");
const description = elements(
  "p",
  " Empower your calculations with DOM calculator. <br>Fast, reliable, and user-friendly. Perform math operations effortlessly.",
   "id",
  "description"
);


const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "result");
input.setAttribute("readonly", "readonly");
input.setAttribute("placeholder", "0");

const main = elements("main", "", "class", "main");
const div = elements("div", "", "class", "container");
const clear = elements("button", "c", "id", "clear");
const backspace = elements("button", "&#8592", "id", "backspace");
const dot = elements("button", ".", "id", "dot");
const multiply = elements("button", "&#10005;", "id", "multiply");
const seven = elements("button", "7", "id", "7");
const eight = elements("button", "8", "id", "8");
const nine = elements("button", "9", "id", "9");
const division = elements("button", "/", "id", "division");
const four = elements("button", "4", "id", "4");
const five = elements("button", "5", "id", "5");
const six = elements("button", "6", "id", "6");
const subtract = elements("button", "-", "id", "subtract");
const one = elements("button", "1", "id", "1");
const two = elements("button", "2", "id", "2");
const three = elements("button", "3", "id", "3");
const add = elements("button", "+", "id", "add");
const zero = elements("button", "0", "id", "0");
const doublezero = elements("button", "00", "id", "00");
const equal = elements("button", "=", "id", "equal");

div.append(
  input,
  clear,
  backspace,
  dot,
  multiply,
  seven,
  eight,
  nine,
  division,
  four,
  five,
  six,
  subtract,
  one,
  two,
  three,
  add,
  zero,
  doublezero,
  equal
);
main.append(div);
document.body.append(header,description,main);

document.addEventListener("keydown", (enternum) => {
  const allowedKeys = /[0-9\.\+\-\*\/]/;
  if (allowedKeys.test(enternum.key)) {
    input.value += enternum.key;
  } else if (enternum.key === "enter") {
    input.value = eval(input.value);
  } else if (enternum.key === "backspace") {
    input.value = input.value.slice(0, -1);
  } else if (enternum.key === "delete") {
    input.value = "";
  } else {
    alert("Only number are allowed");
  }
});

function buttonClick(value) {
  input.value += value;
}
clear.addEventListener("click", function () {
  input.value = "";
});
backspace.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});
dot.addEventListener("click", function () {
  buttonClick(".");
});
multiply.addEventListener("click", function () {
  buttonClick("*");
});
seven.addEventListener("click", function () {
  buttonClick("7");
});
eight.addEventListener("click", function () {
  buttonClick("8");
});
nine.addEventListener("click", function () {
  buttonClick("9");
});
division.addEventListener("click", function () {
  buttonClick("/");
});
four.addEventListener("click", function () {
  buttonClick("4");
});
five.addEventListener("click", function () {
  buttonClick("5");
});
six.addEventListener("click", function () {
  buttonClick("6");
});
subtract.addEventListener("click", function () {
  buttonClick("-");
});
one.addEventListener("click", function () {
  buttonClick("1");
});
two.addEventListener("click", function () {
  buttonClick("2");
});

three.addEventListener("click", function () {
  buttonClick("3");
});

add.addEventListener("click", function () {
  buttonClick("+");
});

zero.addEventListener("click", function () {
  buttonClick("0");
});

doublezero.addEventListener("click", function () {
  buttonClick("00");
});
equal.addEventListener("click", function () {
  input.value = eval(input.value);
});
