function play() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("play").innerHTML = "" + localStorage.clickcount + "";
    } else {
      document.getElementById("play").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }