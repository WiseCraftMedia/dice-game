function diceRoll() {
  var rand1 = Math.floor(Math.random() * 6 + 1);
  var rand2 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".p1").setAttribute("src", `./images/dice${rand1}.png`);
  document.querySelector(".p2").setAttribute("src", `./images/dice${rand2}.png`);
  if (rand1 > rand2) {
    document.getElementById("winner").innerHTML = "&#128681 Player 1 Wins!";
  } else if (rand2 > rand1) {
    document.getElementById("winner").innerHTML = "Player 2 Wins! &#128681";
  } else {
    document.getElementById("winner").innerHTML = "&#127987Draw!&#127987";
  }
}
diceRoll();
