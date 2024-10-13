document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    // Get the name from the input field
    const name = document.getElementById("nameInput").value;
    document.getElementById("displayName").textContent = name;  // 

    // Show the thank you message
    document.getElementById("thankYouMessage").classList.remove("hidden");

    // Show the thank you image
    const thankYouImage = document.getElementById("thankYouImage");
    thankYouImage.classList.remove("hidden");  // 

    // Optionally, hide the form after submission
    document.getElementById("nameForm").classList.add("hidden");
});


