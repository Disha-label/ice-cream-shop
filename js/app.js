const products = [
  {
    id: 1,
    name: "Dilkush",
    price: 160,
    description: "Dilkush Icecream",
    image:
      "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Dilkush",
  },
  {
    id: 2,
    name: "Waffles",
    price: 120,
    description: "Waffles",
    image:
      "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Waffle",
  },
  {
    id: 3,
    name: "Cone",
    price: 50,
    description: "Cone Icecream",
    image:
      "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Cone",
  },
  {
    id: 4,
    name: "Gadbad",
    price: 150,
    description: "Gadbad Icecream",
    image:
      "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Gadbad",
  },
  {
    id: 5,
    name: "Tiramisu",
    price: 110,
    description: "Tiramisu Icecream",
    image:
      "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Tiramisu",
  },
  {
    id: 6,
    name: "Parfait",
    price: 130,
    description: "Parfait Icecream",
    image:
      "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Parfait",
  },
];
/**
 * Creatre an HTML element and append it to the specified parent element
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span', 'a')
 * @param {Object} attributes An object containing the attributes to set on the element
 * @param {string} content The inner HTML content of the element
 * @param {string} parentSelector The CSS selector of the parent element to append the created element to
 */

function createAndAppendElement(
  tagName,
  attributes = {},
  content = "",
  parentSelector = "body"
) {
  // create the e  with a specified tag name
  const element = document.createElement(tagName);
  for (let key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }

  // set the inner content of the element
  element.innerHTML = content;

  // find the parent element by selector, or default to body if not found
  const parentElement = document.querySelector(parentSelector) || document.body;
  parentElement.appendChild(element);
}

products.forEach((product) => {
  // Create column div
  createAndAppendElement(
    "div",
    { class: "col-md-4 mb-4", id: `column-${product.id}` },
    "",
    "#products"
  );

  // Create card div
  createAndAppendElement(
    "div",
    { class: "card h-100", id: `product-${product.id}` },
    "",
    `#column-${product.id}`
  );

  // Image element
  createAndAppendElement(
    "img",
    { src: product.image, class: "card-img-top", alt: product.name },
    "",
    `#product-${product.id}`
  );

  // Card body div
  createAndAppendElement(
    "div",
    { class: "card-body" },
    "",
    `#product-${product.id}`
  );

  // Product title
  createAndAppendElement(
    "h5",
    { class: "card-title" },
    product.name,
    `#product-${product.id} > .card-body`
  );

  // Product description
  createAndAppendElement(
    "p",
    { class: "card-text" },
    product.description,
    `#product-${product.id} > .card-body`
  );

  // Product price
  createAndAppendElement(
    "p",
    { class: "card-text" },
    `Price: ${product.price}`,
    `#product-${product.id} > .card-body`
  );

  // Button container
  createAndAppendElement(
    "div",
    { class: `d-flex buttonGroup-${product.id} justify-content-end` },
    "",
    `#product-${product.id} > .card-body`
  );

  // View details button
  createAndAppendElement(
    "a",
    { class: "btn btn-primary me-2", href: "#" },
    "View details",
    `.buttonGroup-${product.id}`
  );

  // Add to cart button
  createAndAppendElement(
    "a",
    { class: "btn btn-primary", href: "#" },
    "Add to cart",
    `.buttonGroup-${product.id}`
  );
});

const enquiryForm = document.getElementById("enquiryForm");

function validation( {firstName,
  lastName,
  mobile,
  email,
  iceCreamProduct,
  enquiryMessage}) {
  let isValid = true;
  let errorMessages = [];
  document.getElementById("errorMessages").innerHTML = "";

  if (firstName.length < 2 || firstName.length > 20) {
    isValid = false;
    errorMessages.push("First name must be between 2 and 20 characters long.");
  }
  if (lastName.length < 2 || lastName.length > 20) {
    isValid = false;
    errorMessages.push("Last name must be between 2 and 20 characters long.");
  }

  const mobilePattern = /^[6-9]\d{9}$/;
  if (!mobilePattern.test(mobile)) {
    isValid = false;
    errorMessages.push("Invalid mobile number");
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessages.push("Invalid email address");
  }
  const productOptions = [
    "Dilkus",
    "Waffles",
    "Cone",
    "Gadbad",
    "Tiramisu",
    "Parfait",
  ];
  if (!productOptions.includes(iceCreamProduct)) {
    inValid = false;
    errorMessages.push("please select a product.");
  }

  // enquiryForm.reset();

  if (enquiryMessage < 10) {
    isValid = false;
    errorMessages.push("enquiry Message should be atleast 10 characters");
  }
  if (enquiryMessage.length >= 1024) {
    isValid = false;
    errorMessages.push("enquiry Message should be less than 1024 characters");
  }

  if (!isValid) {
    errorMessages.forEach((message) => {
      const li = document.createElement("li");
      li.textContent = message;
      document.getElementById("errorMessages").appendChild(li);
    });
  }
  return isValid;
}
enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = event.target.elements.firstName.value.trim();
  const lastName = event.target.elements.lastName.value.trim();
  const mobile = event.target.elements.mobile.value.trim();
  const email = event.target.elements.email.value.trim();
  const iceCreamProduct = event.target.elements.iceCreamProduct.value.trim();
  const enquiryMessage = event.target.elements.enquiryMessage.value.trim();

  console.log(
    firstName,
    lastName,
    mobile,
    email,
    iceCreamProduct,
    enquiryMessage
  );

 

  if (validation({ firstName,
    lastName,
    mobile,
    email,
    iceCreamProduct,
    enquiryMessage})) {
    // const formData = new FormData(enquiryForm);
    // formData.append("firstName",firstName);
    // formData.append("lastName", lastName);
    // formData.append("mobile", mobile);
    // formData.append("email", email);
    // formData.append("iceCreamProduct", iceCreamProduct);
    // formData.append("enquiryMessage", enquiryMessage);
    fetch(
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZkMDYzMzA0MzE1MjY4NTUzMzUxM2Ii_pc",
      {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          mobile,
          email,
          iceCreamProduct,
          enquiryMessage,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        console.log("Enquiry submitted successfully");
        createAndAppendElement(
          "div",
          { class: "alert alert-success", role: "alert" },
          " Successfully submitted.Thankyou for your enquiry.We will get back soon!!",
          "#successMessage"
        );
        enquiryForm.reset();
      } else {
        console.error("Failed to submit enquiry");
        alert("Failed to submit enquiry. Please try again later.");
      }
    });
  }
    // enquiryForm.reset();
  
});
