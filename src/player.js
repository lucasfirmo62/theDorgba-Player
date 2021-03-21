

var player = 0;

var f = document.getElementById("forward");
var p = document.getElementById("pause");

var full;

const progress = document.getElementById("progress");
const video = document.getElementById("player1");
const timer = document.getElementById("timer");


video.onended = function() {
  video.onpause;
};

function onclickFull(){
  if(full === 1){
    full = 0;
  }else{
    full = 1;
  }
}

function progressLoop() {
  setInterval(function () {
    progress.value = Math.round((video.currentTime / video.duration) * 100);
    document.getElementById("timer").style.color = " #f2f2f2";
  });
}

video.addEventListener("play", progressLoop);

progress.addEventListener('click', function(e) {
  var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
  video.currentTime = pos * video.duration;
});

var clickedValue;

document.getElementById('progress').addEventListener('click', function (e) {
  var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
      y = e.pageY - this.offsetTop,  // or e.offsetY
      clickedValue = x * this.max / this.offsetWidth,
      isClicked = clickedValue <= this.value;
  
  if (isClicked) {
  }
});

function openFullscreen() {
  if(goFF == 0){
    goFF = 1;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }else{
    goFF = 0;
      if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
}

$(window).keypress(function(e) {
  var video = document.getElementById("player1");
  if (e.which == 32) {
    if (video.paused)
      video.play();
    else
      video.pause();
  }
});

var time = 0;
var running = 0;

function reset(){
    running = 0;
    time = 0;

}

function playPause() {
  
    if (running == 0){
        running = 1;
        increment();
    }else if (running == 1){
        running = 0;
    }

}


var s = 0;
var m = 0;
var h = 0;
var times = 0;


var duraction = video.duration / 60;
var dur_faltante;
var increments;

function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            var hour = Math.floor(time/10/3600);
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var tenths = time % 10;
            if (hour < 10) {
              hour = "0" + hour;
            } 
            if (mins < 10) {
              mins = "0" + mins;
            } 
            if (secs < 10) {
              secs = "0" + secs;
            }

            h = Math.floor(video.duration / 3600);
            h = (h >= 10) ? h : "0" + h;
            m = Math.floor(video.duration / 60);
            m = (m >= 10) ? m : "0" + m;
            s = Math.floor(video.duration % 60);
            s = (s >= 10) ? s : "0" + s;
            times = h + ":" + m + ":" + s;
            dur_faltante = times;

              document.getElementById("position").innerHTML = hour + ":" + mins + ":" + secs + "/" + (dur_faltante);
              increment();

              // this.back = function back_current{
              //   document.getElementById("position").innerHTML = hour + ":" + mins + ":" + (secs - 10) + "/" + (dur_faltante);
              //   increment();
              // }
              // this.advanced = function advanced_current{
              //   document.getElementById("position").innerHTML = hour + ":" + mins + ":" + (secs + 10) + "/" + (dur_faltante);
              //   increment();
              // }
              // document.getElementById("position").innerHTML = 00 + ":" + 00 + ":" + 00 + "/" + (dur_faltante);
              // increment();

              
        },100);
    }
}

var thetiming = new increment();


var space; 
var grid = $('#grid');
grid.bind('mousemove touchmove tap swipeleft swipeup swipedown swiperight', function(e) { 
    var circle= $('.circle-button');
    if (space) clearTimeout(space);
    if (!circle.is(":visible")) {
        circle.fadeIn('slow');
    }    
    space = setTimeout(function(){ circle.fadeOut('slow') }, 5000);
}); 

$(document).on("change", ".file_multi_video", function(evt) {
  var $source = $('#player1');
  $source[0].src = URL.createObjectURL(this.files[0]);
  $source.parent()[0].load();
});


document.getElementById("loadFile").style.display = "block";


function loadF() {
  var x = document.getElementById("loadFile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function close_config(){
  var x = document.getElementById("loadFile");
  x.style.display = "none";
}

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}

document.getElementById("player1").style.display = "none";

function file_read_video(){
  document.getElementById("player1").style.display = "block";
}

function go_link_video(){
  document.getElementById("player1").style.display = "block";
  var link_mp4;
  link_mp4 =  document.getElementById("link").value;
  document.getElementById("player1").src = link_mp4;
}

var magnet_link;

function go_torrent_video(){
  document.getElementById("player").style.display = "block";
  var link_magnet;
  link_magnet =  document.getElementById("link_magnet").value;
  magnet_link = link_magnet;
}

document.getElementById("users_names").style.display = "none";


function users_names(){
  var x = document.getElementById("users_names");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function close_users(){
  var x = document.getElementById("users_names");
  x.style.display = "none";
}