// the wave gang
var wave = document.getElementById("wave");
var mw = document.getElementById("mw");

mw.onclick = function(){
  if(wave.paused){
    wave.play();
  } else {
    wave.pause();
  }
}
// ine ndi ghetto
var seven = document.getElementById("seven");
var more = document.getElementById("more");

more.onclick = function(){
  if(seven.paused){
    seven.play();
  } else {
    seven.pause();
  }
}

// fumbi gwamba
var fumbi = document.getElementById("fumbi");
var gwamba = document.getElementById("gwamba");

gwamba.onclick = function(){
  if(fumbi.paused){
    fumbi.play();
  } else {
    fumbi.pause();
  }
}

