
const observer = new Intersectionobserver((entries)) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry,isIntersecting && entry.intersectionRatio >= 0.8) {
            video.play().catch(err => console.og("autoplay blocked,err)))


function togglePlay(button) {
    const reel = button.closest('.reel');
    
    const video = reel.querySelector('video');
    
    const icon = button.querySelector('.material-symbols-outlined');

    if (video.paused) {
        video.play();
        icon.textContent = 'pause';
    } else {
        video.pause();
                icon.textContent = 'play_arrow';
    }
}
