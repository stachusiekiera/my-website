// Handle search button click
document.querySelector('.search-btn').addEventListener('click', function() {
    const query = document.querySelector('.search-bar .search-input').value;
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
// Check input for content and update button color
document.querySelector('.search-bar .search-input').addEventListener('input', function() {
    if (this.value.length > 0) {
        document.querySelector('.search-btn').classList.add('active');
    } else {
        document.querySelector('.search-btn').classList.remove('active');
    }
});

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Your desired action here
    // For example, if you want to emulate a button click, you can do:
    document.querySelector('.search-btn').click();
});

document.querySelector('.search-bar .search-input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) { // 13 is the key code for Enter
        e.preventDefault(); // Prevent the default behavior

        // Check if the input is empty or contains only whitespace
        if (this.value.trim() === "") {
            return; // Exit the function without doing anything
        }

        const btn = document.getElementById('searchButton');
        
        // Simulate the active state
        btn.style.transform = 'scale(0.90)';
        
        // Return to normal state after 100ms
        setTimeout(function() {
            btn.style.transform = '';
        }, 100);
        
        // Here, you can add the code for the actual search functionality
    }
});
document.querySelector('.search-bar .search-input').addEventListener('input', function() {
    this.rows = 1; // reset rows
    this.rows = (this.scrollHeight / 20); // assuming 20 is the height per row, adjust as necessary
});
