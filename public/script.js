// Handle search button click
document.querySelector('.search-btn').addEventListener('click', function() {
    const query = document.querySelector('.search-bar .search-input').value;
    console.log("Searching for:", query);
});

// Handle focus and blur (focusout) events on the search bar
const searchContainer = document.querySelector('.search-bar');

searchContainer.addEventListener('focusin', () => {
    searchContainer.style.backgroundColor = "#e8e8e8";
});

searchContainer.addEventListener('focusout', () => {
    searchContainer.style.backgroundColor = "#f4f4f4";
});

// Check input for content and update button color
document.querySelector('.search-bar .search-input').addEventListener('input', function() {
    if (this.value.length > 0) {
        document.querySelector('.search-btn').classList.add('active');
    } else {
        document.querySelector('.search-btn').classList.remove('active');
    }
});

document.querySelector('.search-bar .search-input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        if (this.value.trim() === "") {
            return;
        }
        const btn = document.querySelector('.search-btn');
        btn.style.transform = 'scale(0.90)';
        setTimeout(function() {
            btn.style.transform = '';
        }, 100);
    }
});
