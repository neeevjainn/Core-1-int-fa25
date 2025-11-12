// Get the elements
const videoIntro = document.getElementById('video-intro');
const mainContent = document.getElementById('main-content');
const video = document.getElementById('intro-video');
const skipButton = document.getElementById('skip-btn');

/**
 * This function handles fading out the video
 * and showing the main website content.
 */
function showMainContent() {
    // 1. Add the .fade-out class to start the CSS transition
    videoIntro.classList.add('fade-out');

    // 2. Show the main content so it appears behind the fade
    mainContent.style.display = 'block';

    // 3. After the fade animation finishes (1000ms = 1s),
    //    set the video container to display:none so it
    //    doesn't block clicks on the main content.
    setTimeout(() => {
        videoIntro.style.display = 'none';
    }, 1000); // This time MUST match your CSS transition time
}

// 1. Show content when the video ends
video.addEventListener('ended', showMainContent);

// 2. Show content if the user clicks 'Skip'
skipButton.addEventListener('click', showMainContent);

// 3. Optional: Handle video loading errors
video.addEventListener('error', () => {
    console.error("Error loading the intro video.");
    // If video fails, just show the main content immediately
    // (skipping the fade)
    videoIntro.style.display = 'none';
    mainContent.style.display = 'block';
});