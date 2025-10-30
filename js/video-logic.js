document.addEventListener('DOMContentLoaded', function() {
    const videoModal = document.getElementById('videoModal');
    const introVideo = document.getElementById('introVideo');

    // --- Configuration ---
    const redirectToUrl = 'home.html'; 
    
    // THIS LINE MUST BE 'true' to ensure auto-launch on page load
    const autoShowModalOnLoad = true; 
    
    // ... (rest of the code) ...

    // --- Auto-Launch Modal on Page Load ---
    if (autoShowModalOnLoad) {
        // This command creates and immediately shows the modal.
        const modalInstance = new bootstrap.Modal(videoModal);
        modalInstance.show();
    }
});