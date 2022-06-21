var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() { // 유튜브 라이브러리 이므로 수정 , 삭제 하면 안됨,
    new YT.Player('player', {
        videoId: 'D32reoeJtos',  // 최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: true, //자동 재생 유무
            loop: true, //반복 재생 유무
            playlist: 'D32reoeJtos' //반복 재생할 유튜브 영상  ID목록
        },
        events: {
            onReady: function (event) {
                event.target.mute() // 음소거 
            }
        }
    });
}