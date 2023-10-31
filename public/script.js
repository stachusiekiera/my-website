// Handle search button click
document.querySelector('.search-btn').addEventListener('click', async function() {
    const query = document.querySelector('.search-bar input').value;
    if(query.trim() !== "") {
        const response = await fetch('/.netlify/functions/askGPT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: query })
        });
        const data = await response.json();
        console.log(data.answer);  // You can display this answer on your webpage
    }
});

// ... rest of your code ...


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
document.querySelector('.search-bar input').addEventListener('input', function() {
    if (this.value.length > 0) {
        document.querySelector('.search-btn').classList.add('active');
    } else {
        document.querySelector('.search-btn').classList.remove('active');
    }
});

document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    const question = document.getElementById("searchInput").value;
    if (!question) return;  // Do nothing if the input is empty

    const response = await fetch("/.netlify/functions/askGPT", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: question })
    });

    const data = await response.json();
    document.getElementById("gptResponse").innerText = data.response;
});


document.querySelector('.search-bar input').addEventListener('keydown', function(e) {
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
