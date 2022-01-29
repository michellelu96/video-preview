var x = document.getElementById("flowerVid");
document.getElementById("flowerVid").onmouseover = function() {mouseOver()};
document.getElementById("flowerVid").onmouseout = function() {mouseOut()};

flowerVid.controls = true;
function playPause() { 
    if (x.paused){ 
    x.play();
    }
    else {
    x.pause(); 
    } 
}

document.querySelectorAll('#flowerVid').forEach(function(vid) {
    vid.onmouseover = function() {
      this.play();
    }
    vid.onmouseout = function() {
      this.load();
    }
  })