// Select all videos inside our reel modules
const videos = document.querySelectorAll('.reel-video');

// 1. Intersection Observer to manage Auto-Play/Pause on Scroll
const observerOptions = {
  root: document.querySelector('.video-feed-container'), // Observes within scroll container
  threshold: 0.6 // Video must be 60% visible to trigger play
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    const playBtnIcon = video.closest('.reel').querySelector('.play-pause-btn span');

    if (entry.isIntersecting) {
      // Try to auto-play (must be muted due to browser policy)
      video.play()
        .then(() => {
          playBtnIcon.textContent = 'pause';
        })
        .catch(err => {
          console.log("Autoplay failed/blocked by browser. Waiting for interaction.", err);
          playBtnIcon.textContent = 'play_arrow';
        });
    } else {
      video.pause();
      playBtnIcon.textContent = 'play_arrow';
    }
  });
}, observerOptions);

// Attach observer to each video
videos.forEach(video => {
  observer.observe(video);
});


// 2. Play/Pause Manual Click Button Toggle
function togglePlay(button) {
  const reel = button.closest('.reel');
  const video = reel.querySelector('.reel-video');
  const icon = button.querySelector('.material-symbols-outlined');

  if (video.paused) {
    // Optional: Pause all other active reels first
    videos.forEach(v => {
      if (v !== video) v.pause();
    });
    
    video.play()
      .then(() => {
        icon.textContent = 'pause';
      })
      .catch(err => console.log("Play failed: ", err));
  } else {
    video.pause();
    icon.textContent = 'play_arrow';
  }
}


// 3. User Actions (Like/Share Demonstration)
function handleLike(btn) {
  const icon = btn.querySelector('.material-symbols-outlined');
  const textVal = btn.querySelector('.action-text');
  
  if (btn.classList.contains('liked')) {
    btn.classList.remove('liked');
    icon.style.color = '#fff';
    // Dummy decrement logic
    textVal.textContent = (parseFloat(textVal.textContent) - 0.1).toFixed(1) + 'K';
  } else {
    btn.classList.add('liked');
    icon.style.color = '#ff2b55'; // Heart red color
    // Dummy increment logic
    textVal.textContent = (parseFloat(textVal.textContent) + 0.1).toFixed(1) + 'K';
  }
}

function handleShare() {
  if (navigator.share) {
    navigator.share({
      title: 'Check out this Reel!',
      url: window.location.href
    }).catch(console.error);
  } else {
    alert("Share functionality copied to clipboard!");
  }
}
