function startcountdown() {
  var start = parseInt(document.getElementById("start").value);
  //   console.log( start);
  var countdownElem = document.getElementById("countdown");

  countdownElem.innerHTML = start;
  var countdownInterval = setInterval(function () {
    start--;
    countdownElem.innerHTML = start;
    if (start <= 0) {
      clearInterval(countdownInterval);
      countdownElem.innerHTML = "countdown finished!";
    }
  }, 1000);
}
const btn = document.getElementById("button");
btn.addEventListener("click", startcountdown);

// function stopcountdown() {
//   //   clearInterval(countdownInterval);
//   countdownElem.innerHTML = clearInterval(countdownInterval);
// }

// const btn1 = document.getElementById("button1");
// btn1.addEventListener("click", stopcountdown);
