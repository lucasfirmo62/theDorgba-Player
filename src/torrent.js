window.webtor = window.webtor || [];
window.webtor.push({
    id: 'player',
    baseUrl: 'https://webtor.io',
    // baseUrl: 'http://192.168.0.100:4000',
    magnet: '',
    // magnet: 'magnet:?xt=urn:btih:ca540adb8d37eb222d75aeca6954486842f72765',
    width: '100%',
    height: '100%',
    features: {
        p2pProgress: false,
        title:       false,
        settings:    false,
        fullscreen:  false,
        subtitles:   false,
        continue:    false,
        playpause:   false,
        currentTime: false,
        timeline:    false,
        duration:    false,
        volume:      false,
        chromecast:  false,
        browse:      false,
        download:    false,
    },
    on: function(e) {
        if (e.name == window.webtor.TORRENT_FETCHED) {
            console.log('Torrent fetched!', e.data.files);
            var p = e.player;
            var files = document.getElementById('files');
            for (const f of e.data.files) {
                if (!f.name.endsWith('.mp4')) continue;
                var a = document.createElement('a');
                a.setAttribute('href', f.path);
                a.innerText = f.name;
                files.appendChild(a);
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    p.open(e.target.getAttribute('href'));
                    return false;
                });
            }
        }
        if (e.name == window.webtor.TORRENT_ERROR) {
            console.log('Torrent error!')
        }
        if (e.name == window.webtor.INITED) {
            var p = e.player;
            document.getElementById('pause').addEventListener('click', function(ev) {
                p.play();
            });
            document.getElementById('pause').addEventListener('click', function(ev) {
                p.pause();
            });
            document.getElementById('moveto1min').addEventListener('click', function(ev) {
                p.setPosition(60);
            });
            document.getElementById('movetostart').addEventListener('click', function(ev) {
                p.setPosition(0);
            });
        }
        if (e.name == window.webtor.PLAYER_STATUS) {
            document.getElementById('player-status').innerHTML = e.data;
        }
        if (e.name == window.webtor.OPEN) {
            console.log(e.data);
        }
        if (e.name == window.webtor.CURRENT_TIME) {
            document.getElementById('current-time').innerHTML = parseInt(e.data);
        }
        if (e.name == window.webtor.DURATION) {
            document.getElementById('duration').innerHTML = parseInt(e.data);
        }
        if (e.name == window.webtor.OPEN_SUBTITLES) {
            console.log(e.data);
        }
    },
});