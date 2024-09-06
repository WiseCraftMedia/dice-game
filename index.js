document.querySelector("button").addEventListener("click", function () {
  location.reload();
});

function diceRoll() {
  var rand1 = Math.floor(Math.random() * 6 + 1);
  var rand2 = Math.floor(Math.random() * 6 + 1);

  document.querySelector(".p1").setAttribute("src", `./images/dice${rand1}.png`);
  document.querySelector(".p2").setAttribute("src", `./images/dice${rand2}.png`);

  if (rand1 > rand2) {
    document.getElementById("winner").innerHTML = "&#128681 Player 1<br> Wins!";
  } else if (rand2 > rand1) {
    document.getElementById("winner").innerHTML = "Player 2 &#128681<br> Wins! ";
  } else {
    document.getElementById("winner").innerHTML = "&#127987 Draw! &#127987";
  }
}
diceRoll();
