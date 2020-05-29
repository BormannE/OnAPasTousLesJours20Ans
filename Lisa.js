document.getElementById('MyVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        document.getElementById("musiques").style.display = "block";
        document.getElementById('MyVideo').style.width = "50vw"
    }

    document.getElementById("surprise").addEventListener("click",apparait)
function apparait()
{
    document.getElementById("Video").style.display = "block";
    document.getElementById("surprise").style.display = "none";
    document.getElementById("debut").style.display = "none";
}

document.getElementById("musiques").addEventListener("click",apparait2)
function apparait2()
{
    var music = document.getElementById("musique");
    music.setAttribute("style","display:flex");
    music.setAttribute("style","flex-direction:column");
}
$(document).ready(function (){
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }
});
