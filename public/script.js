// Handle search button click
document.querySelector('.search-btn').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value;
    console.log("Searching for:", query);
    // You can replace the above line with any functionality you want.
});

// Handle focus and blur (focusout) events on the search bar
const searchContainer = document.querySelector('.search-bar');

searchContainer.addEventListener('focusin', () => {
    searchContainer.style.width = "320px";
    searchContainer.style.backgroundColor = "#e8e8e8";
});

searchContainer.addEventListener('focusout', () => {
    searchContainer.style.width = "300px";
    searchContainer.style.backgroundColor = "#f5f5f5";
});
