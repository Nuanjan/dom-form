// var result4 = document.querySelector("#result4");
// var result5 = document.querySelector("#result5");
function logger() {
  console.log(" you click me from script");
}

function changeButton(buttonElement) {
  buttonElement.innerText = "you clicked me!";
}

function messager(element) {
  if (element == result4) element.innerText = "You clicked me with button 4";
  else element.innerText = "You clicked me with button 5";
}

// var message = document.querySelector("#message");
function messagePrint(el) {
  console.log(el.value);
}
