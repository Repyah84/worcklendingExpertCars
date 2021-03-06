import YouTubePlayer from 'youtube-player';


export default function (){
    let player;
 
    player = YouTubePlayer('youtube-player');
     
    // 'loadVideoById' is queued until the player is ready to receive API calls.
    player.loadVideoById('BICc7Y3udD0');
     
    // 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
    player.playVideo();
     
    // 'stopVideo' is queued after 'playVideo'.
    player
        .stopVideo()
        .then(() => {
            // Every function returns a promise that is resolved after the target function has been executed.
        });

}