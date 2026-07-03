// FACECHAT APP INTERACTIONS
document.addEventListener("DOMContentLoaded", () => {
    const ownerCard = document.querySelector(".owner-card");
    const friendCards = document.querySelectorAll(".friend-card");
    const mediaSelectBtn = document.getElementById("mediaSelectBtn");
    const hiddenFileInput = document.getElementById("hiddenFileInput");
    const openPostModal = document.getElementById("openPostModel");

    // CLICK TO CREATE OWNERS STORY
    if (ownerCard) {
        ownerCard.addEventListener("click", () => {
            alert("Opening creation tool to upload a new story...");
        });
    }

    // VIEWER ALERTS FOR FRIEND STORY
    if (friendCards) {
        friendCards.forEach((card) => {
            card.addEventListener("click", () => {
                const friendName = card.querySelector(".story-name")?.textContent || "a friend";
                const avatar = card.querySelector(".friend-avatar");

                alert(`Viewing ${friendName}'s story...`);

    // UPDATE THE BORDER ONCE STORY VIEWED (GRAY BORDER)
                if (avatar) {
                    avatar.style.borderColor = "#e4e6eb";
                }
            });
        });
    }

    // MEDIA SELECTOR ALERTS FOR POST CREATION
    if (mediaSelectBtn && hiddenFileInput) {
        mediaSelectBtn.addEventListener("click", () => {
            hiddenFileInput.click();
        });

        hiddenFileInput.addEventListener("change", (event) => {
            const selectedFiles = event.target.files;
            if (selectedFiles && selectedFiles.length > 0) {
                const file = selectedFiles[0];
                alert(`Successfully target selected media file: ${file.name}\nType: ${file.type}`);
            }
        });
    }

    // OWNER UPLOAD STORY ALERT
    if (openPostModal) {
        openPostModal.addEventListener("click", () => {
            alert("Opening interactive modal overlay to write text status...");
        });
    }
});
