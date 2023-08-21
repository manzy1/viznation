
/**play section */
/**eli song */
var yabaya = document.getElementById("yabaya");
var eli = document.getElementById("eli");

eli.onclick = function(){
    if(yabaya.paused){
        yabaya.play();
        
    }else{
        yabaya.pause();
    }
}

/**eli song end */
/**zeze chule song */
var star = document.getElementById("star");
var butto = document.getElementById("butto");

butto.onclick = function(){
    if(star.paused){
        star.play();
    }
    else{
      star.pause();
    }
}
/**zeze end */
/**pop young*/
var mesa = document.getElementById("mesa");
var pop = document.getElementById("pop");

pop.onclick = function(){
    if (mesa.paused){
        mesa.play();
    }
    else{
      mesa.pause();
    }
}
/**rastaboy end */
/**Ceez start */
var ceez = document.getElementById("ceez");
var afana = document.getElementById("afana");

afana.onclick = function(){
   if (ceez.paused){
        ceez.play();
   }else{
      ceez.pause();
   }
}
/**afana ceez end */
/** sangapange*/
var wave = document.getElementById("wave");
var mw = document.getElementById("mw");

wave.onclick = function(){
    mw.play();
}
// for searchbar();
var searchbar = [eli,gwamba,wave,];
var keys = document.getElementById("wave")
var but = document.getElementById("sbtn")

function searchbar(){
  console.log(data)
}
but.addEventListener('click', searchbar);
//Download counter section//
  function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("message").innerHTML = "" + localStorage.clickcount + "";
    } else {
      document.getElementById("message").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
    /* responsive */
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav"){
        x.className += "4responsive";
      } else {
        x.className = "topnav";
      }
    }
  