let rollDice = () => {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let randomNumber2 = Math.floor(Math.random() * 6 + 1);
    
    let randonImage1 = "images/dice" + randomNumber1 + ".png";
    let randonImage2 = "images/dice" + randomNumber2 + ".png";
    
    let imgElements = document.querySelectorAll("img");

    if (imgElements.length >= 2) {
        imgElements[0].setAttribute("src", randonImage1);
        imgElements[1].setAttribute("src", randonImage2);
      }
      
      if (randomNumber1 === randomNumber2) {
          document.querySelector("h1").innerHTML = "Draw!"
      } else if (randomNumber1 > randomNumber2){
          document.querySelector("h1").innerHTML = "🚩 Player 1 Wins "
      } else {
          document.querySelector("h1").innerHTML = "Player 2 Win 🚩"
      }
      
}
