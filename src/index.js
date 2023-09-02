const article = document.getElementById('article');
const customMenu = document.getElementById('custom-menu');
const twitterShareButton = document.getElementById('twitter-share');
const closeMenuButton = document.getElementById('close-menu');

// Function to show the custom menu near the selected text
function showCustomMenu(e) {
    const selection = window.getSelection();

    if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const top = rect.top + window.scrollY + 20;
        const left = rect.left + window.scrollX;

        customMenu.style.display = 'block';
        customMenu.style.top = `${top}px`;
        customMenu.style.left = `${left}px`;
    }
}

// Event listener for text selection
document.addEventListener('mouseup', showCustomMenu);

// Event listener to close the custom menu
closeMenuButton.addEventListener('click', () => {
    customMenu.style.display = 'none';
});

// Event listener for sharing on Twitter
twitterShareButton.addEventListener('click', () => {
    const selection = window.getSelection().toString();

    if (selection.length > 0) {
        const tweetText = encodeURIComponent(selection);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(twitterUrl, '_blank');
    }
});
