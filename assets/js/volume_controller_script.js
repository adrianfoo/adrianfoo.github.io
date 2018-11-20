var video = document.getElementById("video");
var volume = document.getElementById("vol-control");

volume.addEventListener("input", function(){
  video.volume = this.value / 100;
});

document.getElementById('opacity-slider').addEventListener('input', function (e) {
    document.body.style.opacity = this.value;
});