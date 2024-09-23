let rollDice = () => {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  let randomImage1 = "images/dice" + randomNumber1 + ".png";
  let randomImage2 = "images/dice" + randomNumber2 + ".png";

  let imgElements = document.querySelectorAll("img");
  let imgAnimation = document.querySelectorAll(".img1, .img2");


  // after click random img event
    let intervalID = setInterval(() => {
        let newRndNbr1 = Math.floor(Math.random() * 6 + 1);
        let newRndNbr2 = Math.floor(Math.random() * 6 + 1);

        let randomImage1 = "images/dice" + newRndNbr1 + ".png";
        let randomImage2 = "images/dice" + newRndNbr2 + ".png";

        imgElements[0].setAttribute("src", randomImage1 )
        imgElements[1].setAttribute("src", randomImage2 )
    }, 200)



  if (imgElements.length >= 2) {
    imgAnimation.forEach((img) => {
      img.style.animation = "rotate 0.2s linear infinite";
      img.classList.add("filter-effect");
    });
    imgElements.forEach((elements) => {
      elements.setAttribute("src", randomImage1, randomImage2);
    });
  }


  setTimeout(() => {
    imgElements[0].setAttribute("src", randomImage1);
    imgElements[1].setAttribute("src", randomImage2);
    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins ";
    } else {
      document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
    }

    imgAnimation.forEach((img) => {
      img.style.animation = "none 0.5s linear infinite";
      img.classList.remove("filter-effect");
    });

    clearInterval(intervalID)
  }, 800);
};
