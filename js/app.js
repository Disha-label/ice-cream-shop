const products = [
  {
    id: 1,
    name: "Dilkush",
    price: 160,
    description: "A sweet, flaky pastry filled with a blend of coconut, sugar, and dried fruits. Popular in South Indian bakeries, it's a delightful treat for any occasion.",
    image: "./assets/images/Dilkush.jpg",
  },
  {
    id: 2,
    name: "Waffles",
    price: 120,
    description: "A golden, crispy breakfast dish made from a batter cooked in a waffle iron. Often served with syrup, fruits, or ice cream for added sweetness.",
    image: "./assets/images/waffle.jpg",
  },
  {
    id: 3,
    name: "Cone",
    price: 50,
    description: "A crisp, edible container typically made of wafer, used to hold scoops of ice cream. Its pointed shape makes it perfect for enjoying frozen treats on the go.",
    image: "./assets/images/cone.jpg",
  },
  {
    id: 4,
    name: "Gadbad",
    price: 150,
    description: "A famous layered ice cream dessert from coastal Karnataka, India, featuring scoops of different flavors mixed with jelly, nuts, and fresh fruit.",
    image: "./assets/images/gadbad.jpg",
  },
  {
    id: 5,
    name: "Tiramisu",
    price: 110,
    description: " An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and a dusting of cocoa powder. Known for its rich, creamy texture and espresso flavor.",
    image: "./assets/images/Tiramisu.jpg",
  },
  {
    id: 6,
    name: "Parfait",
    price: 130,
    description: "A layered dessert made with yogurt or whipped cream, granola, and fresh fruits. It's a light, refreshing treat that's both healthy and delicious.",
    image: "./assets/images/fruitparfait.jpg",
  },
];

/**
 * Creates an HTML element and appends it to the specified parent element
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span', 'a')
 * @param {Object} attributes An object containing the attributes to set on the element
 * @param {string} content The inner HTML content of the element
 * @param {string} parentSelector The CSS selector of the parent element to append the created element to
 * @param {boolean} bold Whether the content should be wrapped in a bold element (<b>)
 */

function createAndAppendElement(tagName, attributes = {}, content = "", parentSelector = "body", bold = false) {
  
  // Create the HTML element with a specified tag name
  const element = document.createElement(tagName);

  // Set the attributes of the element
  for (let key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }

  // Set the inner content of the element, wrapping in <b> if bold is true
  if (bold) {
    const boldElement = document.createElement("b");
    boldElement.textContent = content;
    element.appendChild(boldElement); // Append <b> to the main element
  } else {
    element.textContent = content;
  }

  // Find the parent element by selector, or default to body if not found
  const parentElement = document.querySelector(parentSelector) || document.body;
  parentElement.appendChild(element); // Append the new element to the parent
}

// Loop over each product and generate HTML elements to display them
products.forEach((product) => {
  // Create column div
  createAndAppendElement(
    "div",
    { class: "col-md-4 mb-4", id: `column-${product.id}` }, // Product-specific ID for column div
    "",
    "#products"
  );

  // Create card div for each product
  createAndAppendElement(
    "div",
    { class: "card h-100", id: `products-${product.id}` }, 
    "",
    `#column-${product.id}`
  );

  // Add product image inside the card
  createAndAppendElement(
    "img",
    { src: product.image, class: "card-img-top", alt: product.name }, 
    "",
    `#products-${product.id}`
  );

  // Create card body for text and button content
  createAndAppendElement(
    "div",
    { class: "card-body" }, 
    "",
    `#products-${product.id}`
  );

  // Add product title
  createAndAppendElement(
    "h5",
    { class: "card-title" }, 
    product.name,
    `#products-${product.id} > .card-body`
  );

  // Add product description
  createAndAppendElement(
    "p",
    { class: "card-text" }, 
    product.description,
    `#products-${product.id} > .card-body`
  );

  // Add product price
  createAndAppendElement(
    "p",
    { class: "card-text" }, 
    `Price: ${product.price}`,
    `#products-${product.id} > .card-body`
  );

  // Create a container for buttons
  createAndAppendElement(
    "div",
    { class: `d-flex buttonGroup-${product.id} justify-content-end` }, 
    "",
    `#products-${product.id} > .card-body`
  );

  // Add View details button
  createAndAppendElement(
    "a",
    { class: "btn btn-primary me-2", href: "#" }, 
    "View details",
    `.buttonGroup-${product.id}`
  );

  // Add Add to cart button
  createAndAppendElement(
    "a",
    { class: "btn btn-primary", href: "#" }, // Button class and href for cart
    "Add to cart",
    `.buttonGroup-${product.id}`
  );
});

const enquiryForm = document.getElementById("enquiryForm");

/**
 * Validates the input values from the form
 * @param {Object} formValues Contains form fields (firstName, lastName, etc.)
 * @returns {boolean} isValid Whether the form is valid
 */

function validation({ firstName, lastName, mobile, email, iceCreamProduct, enquiryMessage }) {
  let isValid = true;
  let errorMessages = [];
  document.getElementById("errorMessages").innerHTML = ""; // Clear error messages

  // First name validation (2-20 characters)
  if (firstName.length < 2 || firstName.length > 20) {
    isValid = false;
    errorMessages.push("First name must be between 2 and 20 characters long.");
  }

  // Last name validation (2-20 characters)
  if (lastName.length < 2 || lastName.length > 20) {
    isValid = false;
    errorMessages.push("Last name must be between 2 and 20 characters long.");
  }

  // Mobile number validation (starts with 6-9, 10 digits)
  const mobilePattern = /^[6-9]\d{9}$/;
  if (!mobilePattern.test(mobile)) {
    isValid = false;
    errorMessages.push("Invalid mobile number.");
  }

  // Email validation (
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessages.push("Invalid email address.");
  }

  // Check if selected product is valid
  const productOptions = ["Dilkush", "Waffles", "Cone", "Gadbad", "Tiramisu", "Parfait"];
  if (!productOptions.includes(iceCreamProduct)) {
    isValid = false;
    errorMessages.push("Please select a valid product.");
  }

  // Enquiry message length validation (10-1024 characters)
  if (enquiryMessage.length < 10 || enquiryMessage.length >= 1024) {
    isValid = false;
    errorMessages.push("Enquiry message should be between 10 and 1024 characters.");
  }

  // Display error message if valdiation fails
  if (!isValid) {
    errorMessages.forEach((message) => {
      const li = document.createElement("li");
      li.textContent = message;
      document.getElementById("errorMessages").appendChild(li);
    });
  }

  return isValid;
}

// Event listener for form submission
enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form values
  const firstName = event.target.elements.firstName.value.trim();
  const lastName = event.target.elements.lastName.value.trim();
  const mobile = event.target.elements.mobile.value.trim();
  const email = event.target.elements.email.value.trim();
  const iceCreamProduct = event.target.elements.iceCreamProduct.value.trim();
  const enquiryMessage = event.target.elements.enquiryMessage.value.trim();

  // Log form values to the console
  console.log(firstName, lastName, mobile, email, iceCreamProduct, enquiryMessage);

  // Perform validation and submit form if valid
  if (validation({ firstName, lastName, mobile, email, iceCreamProduct, enquiryMessage })) {
    // Send form data request to a webhook
    fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZkMDYzMzA0MzE1MjY4NTUzMzUxM2Ii_pc", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        mobile,
        email,
        iceCreamProduct,
        enquiryMessage,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("Enquiry submitted successfully");
        // Display success message
        createAndAppendElement(
          "div",
          { class: "alert alert-success", role: "alert" },
          "Successfully submitted. Thank you for your enquiry. We will get back soon!",
          "#successMessage"
        );
        enquiryForm.reset(); // Reset form after successful submission
      } else {
        console.error("Failed to submit enquiry");
        alert("Failed to submit enquiry. Please try again later.");
      }
    });
  }
});
