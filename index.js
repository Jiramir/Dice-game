var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// times by 6 for 6 numbers on the dice and add one so it will be bettween 1-6
// floor rounds it down and random makes the random decimal number

randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice" + [randomNumber1] + ".png");
document.querySelector(".img2").setAttribute("src", "dice" + [randomNumber2] + ".png");

// gets the image class and changes the src to the image associated with the random variable

if (randomNumber1 > randomNumber2) {

            document.querySelector("h1").textContent = "🚩 Player 1 Wins";

        } else if (randomNumber1 < randomNumber2) {

            document.querySelector("h1").textContent = "Player 2 Wins 🚩";

        } else {

            document.querySelector("h1").textContent = "Draw!";

          }


// why the fuck did it keep making me put semicolons it had me all fucked up and the shit didnt work

// if (randomnumber1 > randomnumber2); {
//   document.querySelector("h1").textContent = "Player 1 Wins!";
// } elseif (randomnumber1 < randomnumber2); {
//   document.querySelector("h1").textContent = "Player 2 Wins!";
//
//
// } else ;{
//
//     document.querySelector("h1").textContent = "Draw!";
//
//
// }
//
// img.setAttribute('src', 'imgs/' + imgs[i] + '.png');
