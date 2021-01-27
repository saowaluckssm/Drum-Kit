// document.querySelector("button").addEventListener("click", handleClick)

// function handleClick() {
//   alert("i got clicked");
// }



// Detecting Botton press
var NumberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumberOfButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    // this.style.color="white";
    var bottonInnerHTML = this.innerHTML;

     
      makeSound(bottonInnerHTML);
      bottonAnimation(bottonInnerHTML);
      
  });


}


// Detecting Keyboard press

document.addEventListener("keydown", function(event) {
       
  makeSound(event.key);
  bottonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    default: console.log(buttonInnerHTML);


  }

}

function bottonAnimation(currentKey) {

   var activeBotton = document.querySelector("." + currentKey);

   activeBotton.classList.add("pressed");

   setTimeout(function() {
     activeBotton.classList.remove("pressed");
   }, 100);

}