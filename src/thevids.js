var run = function (timingProvider) {

    // timing object
    var to = new TIMINGSRC.TimingObject({provider:timingProvider, range:[0,100]});

    var vel05 = 0.5;
    var vel2 = 2.0;
    var vel3 = 3.0;

    var justplay = 0;
    
    var buttonsElem = document.getElementById("buttons");

    buttonsElem.onclick = function (e) {
      var x = document.getElementById("pause");
      var y = document.getElementById("play");

      var elem, evt = e ? e:event;
      if (evt.srcElement)  elem = evt.srcElement;
      else if (evt.target) elem = evt.target;
      if (elem.id === "pause") {
        if(justplay == 1){
          running = 1;
          justplay = 0;
          document.getElementById("pause").innerHTML = "&#10074;&#10074;";
        var v = to.query();
        if (v.position === 100 && v.velocity === 0) {
          to.update({position:0.0, velocity: 1.0});
        } else to.update({velocity:1.0});
        }else if(justplay == 0){
          running = 0;
          justplay = 1;
          document.getElementById("pause").innerHTML = "&#9658;";
          to.update({velocity:0.0});
        }
      } else if (elem.id === "centerPlay") {
        if(justplay == 1){
          running = 1;
          justplay = 0;
          document.getElementById("pause").innerHTML = "&#10074;&#10074;";
        var v = to.query();
        if (v.position === 100 && v.velocity === 0) {
          to.update({position:0.0, velocity: 1.0});
        } else to.update({velocity:1.0});
        }else if(justplay == 0){
          running = 0;
          justplay = 1;
          document.getElementById("pause").innerHTML = "&#9658;";
          to.update({velocity:0.0});
        }
      }
      else if (elem.id === "tostart") { 
        to.update({position:0.0});
      } 
      else if (elem.id === "progress") {
        to.update({position: to.query().position = isClicked});
      } 
      else if (elem.id === "return") {
        to.update({position: to.query().position - 10});
      }
      else if (elem.id === "advance") {
        to.update({position: to.query().position + 10});
      }  
      else if (elem.id === "velocity") {
        to.update({velocity:3.0});
      } 
      else if (elem.id === "forward") {
        var v = to.query();
        if (v.position === 100 && v.velocity === 0) {
          to.update({position:0.0, velocity: 1.0});
        } else to.update({velocity:1.0});
      }
      else if (elem.id === "toend") {
        to.update({position:100.0});
      }
    }          

    to.on("timeupdate", function () {
      var timering = to.query().position.toFixed(2);

      var hour = Math.floor(timering/10/3600);
      var mins = Math.floor(timering/1/60);
      var secs = Math.floor(timering/1 % 60);
      var tenths = timering % 1;
      if (hour < 10) {
        hour = "0" + hour;
      } 
      if (mins < 10) {
        mins = "0" + mins;
      } 
      if (secs < 10) {
        secs = "0" + secs;
      }
      if (tenths < 10) {
        tenths = "0" + tenths;
      } 

      console.log(video.duration);

      // h = Math.floor(video.duration / 3600);
      // h = (h >= 10) ? h : "0" + h;
      // m = Math.floor(video.duration / 1);
      // m = (m >= 10) ? m : "0" + m;
      // s = Math.floor(video.duration % 60);
      // s = (s >= 10) ? s : "0" + s;
      // times = h + ":" + m + ":" + s;
      // dur_faltante = times;

var horas = Math.floor(video.duration / 3600);
var minutos = Math.floor((video.duration - (horas * 3600)) / 60);
var segundos = Math.floor(video.duration % 60);

if (horas < 10) horas = '0' + horas;
if (minutos < 10) minutos = '0' + minutos;
if (segundos < 10) segundos = '0' + segundos;

      document.getElementById("display_time").innerHTML = hour + ":" + mins + ":" + secs + "/" + (horas + ':' + minutos + ':' + segundos);
    });


    // set up video sync
    var sync1 = MCorp.mediaSync(document.getElementById('player1'), to);

};