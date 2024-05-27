




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


    document.getElementById('video1Button').addEventListener('click', function() {
        var video = document.getElementById('mainVideo');
        var source = document.getElementById('videoSource');
        source.src = './css/img/VID1.mp4';
        video.load();
        video.play();
    });

    document.getElementById('video2Button').addEventListener('click', function() {
        var video = document.getElementById('mainVideo');
        var source = document.getElementById('videoSource');
        source.src = './css/img/Projet portfolio .mov';
        video.load();
        video.play();
    });

