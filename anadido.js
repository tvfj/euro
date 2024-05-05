document.addEventListener('DOMContentLoaded', function() {
    var videoBackground = document.createElement('div');
    videoBackground.id = 'video-background';

    var video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    var source = document.createElement('source');
    source.src = 'fondochat.mp4'; // Reemplaza 'tu_video.mp4' con la ruta de tu video
    source.type = 'video/mp4';

    video.appendChild(source);
    videoBackground.appendChild(video);
    document.body.appendChild(videoBackground);
});
