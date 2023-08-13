document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(event.target);
    
    // Convert Form Data to an object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    
    // Now you can send the formDataObject to the server using Fetch API
    fetch("./Users/xperiencedbum/Programming/Website-AG/HTML/PHP/server-script.php", { //maybe change file path?
        method: "POST",
        body: JSON.stringify(formDataObject),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server if needed
        console.log(data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
});
