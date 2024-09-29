// Form submission event
const contactForm = document.getElementById("contactForm");

function validation({ name, email, message }) {
    let isValid = true;
    let errorMessages = [];
    document.getElementById("errorMessages").innerHTML = ""; // Clear previous error messages

    // Validate name length (2-20 characters)
    if (name.length < 2 || name.length > 20) {
        isValid = false;
        errorMessages.push("Name must be between 2 and 20 characters long.");
    }

    // Email validation 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessages.push("Invalid email address");
    }

    // Validate message length
    if (message.length < 10) {
        isValid = false;
        errorMessages.push("Message should be at least 10 characters");
    }
    if (message.length >= 1024) {
        isValid = false;
        errorMessages.push("Message should be less than 1024 characters");
    }

    // Display error messages if validation fails
    if (!isValid) {
        errorMessages.forEach((msg) => {
            const li = document.createElement("li");
            li.textContent = msg;
            document.getElementById("errorMessages").appendChild(li);
        });
    }
    return isValid; // Return the validation result
}

// Function to create and append an element
function createAndAppendElement(tag, attributes, text, parentSelector) {
    const element = document.createElement(tag);

   
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    element.textContent = text;

    // Append to the specified parent element
    const parent = document.querySelector(parentSelector);
    if (parent) {
        parent.appendChild(element);
    }
}

// Add event listener for form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    console.log(name, email, message); // Log the entered values

    // Validate the form input
    if (validation({ name, email, message })) {

        // Send a POST request
        fetch(
            "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZkMDYzMzA0M2Q1MjY1NTUzMzUxMzQi_pc",
            {
                method: "POST",
                body: JSON.stringify({
                    name, 
                    email,
                    message,
                }),
            }
        )
            .then((response) => {
                if (response.ok) {
                    console.log("Enquiry submitted successfully");
                    createAndAppendElement(
                        "div",
                        { class: "alert alert-success", role: "alert" },
                        "Successfully submitted. Thank you for your enquiry. We will get back soon!",
                        "#successMessage"
                    );
                    contactForm.reset(); // Reset the form after submission
                } else {
                    console.error("Failed to submit enquiry");
                    alert("Failed to submit enquiry. Please try again later.");
                }
            })
            .catch((error) => {
                console.error("Error during fetch:", error); 
            });
    }
});
