const products = [
  {
    id: 1,
    name: "Dilkush",
    price: 160,
    description: "A sweet, flaky pastry filled with a blend of coconut, sugar, and dried fruits. Popular in South Indian bakeries, it's a delightful treat for any occasion.",
    image:
      "./assets/images/Dilkush.jpg",
  },
  {
    id: 2,
    name: "Waffles",
    price: 120,
    description: "A golden, crispy breakfast dish made from a batter cooked in a waffle iron. Often served with syrup, fruits, or ice cream for added sweetness.",
    image:
      "./assets/images/waffle.jpg",
  },
  {
    id: 3,
    name: "Cone",
    price: 50,
    description: "A crisp, edible container typically made of wafer, used to hold scoops of ice cream. Its pointed shape makes it perfect for enjoying frozen treats on the go.",
    image:
      "./assets/images/cone.jpg",
  },
  {
    id: 4,
    name: "Gadbad",
    price: 150,
    description: "A famous layered ice cream dessert from coastal Karnataka, India, featuring scoops of different flavors mixed with jelly, nuts, and fresh fruit.",
    image:
      "./assets/images/gadbad.jpg",
  },
  {
    id: 5,
    name: "Tiramisu",
    price: 110,
    description: " An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and a dusting of cocoa powder. Known for its rich, creamy texture and espresso flavor.",
    image:
      "./assets/images/Tiramisu.jpg",
  },
  {
    id: 6,
    name: "Parfait",
    price: 130,
    description: "A layered dessert made with yogurt or whipped cream, granola, and fresh fruits. It's a light, refreshing treat that's both healthy and delicious.",
    image:
      "./assets/images/fruitparfait.jpg",
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
  // element.innerHTML = content;
  if (bold) {
    const boldElement = document.createElement("b");
    boldElement.textContent = content;
    element.appendChild(boldElement); // Append <b> to the main element (e.g., <h5>)
  } else {
    element.textContent = content; // Add content normally without bold
  }

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
    { class: "card h-100", id: `products-${product.id}` },
    "",
    `#column-${product.id}`
  );

  // Image element
  createAndAppendElement(
    "img",
    { src: product.image, class: "card-img-top", alt: product.name },
    "",
    `#products-${product.id}`
  );

  // Card body div
  createAndAppendElement(
    "div",
    { class: "card-body" },
    "",
    `#products-${product.id}`
  );

  // Product title
  createAndAppendElement(
    "h5",
    { class: "card-title" },
    product.name,
    `#products-${product.id} > .card-body`
  );

  // Product description
  createAndAppendElement(
    "p",
    { class: "card-text" },
    product.description,
    `#products-${product.id} > .card-body`
  );

  // Product price
  createAndAppendElement(
    "p",
    { class: "card-text" },
    `Price: ${product.price}`,
    `#products-${product.id} > .card-body`
  );

  // Button container
  createAndAppendElement(
    "div",
    { class: `d-flex buttonGroup-${product.id} justify-content-end` },
    "",
    `#products-${product.id} > .card-body`
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



// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <title>IceCream - Home</title>
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
//       crossorigin="anonymous"
//     />
//     <style>
//       .card-img-top{
//         object-fit: cover;
//         height: 250px;
//       }
//     </style>
//   </head>
//   <body>

//   <!--Navigation Starts-->
//   <nav class="navbar navbar-expand-lg bg-primary">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="">
//         <p class="fs-4 fw-bold">dhi-iceCream!!</p>
//       </a>


//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="/">
//               <p class="fs-5">Home</p>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="about.html">
//               <p class="fs-5">About</p>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link " href="contact.html">
//               <p class="fs-5">Contact</p>
//             </a>
//           </li>
//         </ul>
//         <form class="d-flex" role="search" data-bs-theme="dark">
//           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//           <button class="btn btn-light" type="submit">Search</button>
//         </form>
//       </div>
//     </div>
//   </nav>
//   <!--Navigation Ends-->

//     <!-- Hero section starts  -->

//     <div id="hero" class="carousel slide">
//       <div class="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#hero"
//           data-bs-slide-to="0"
//           class="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#hero"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#hero"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div class="carousel-inner">
//         <div class="carousel-item active">
//           <img
//             src="./assets/images/12istockphoto-1335564975-612x612.jpg" class="d-block w-100" alt="Dilkush Icecream"/>
         
//           <div class="carousel-caption d-none d-sm-block bg-dark">
//             <h2>Dilkush</h2>
//             <p>Share and Enjoy the Delicious Icecream.</p>
//           </div>
//         </div>
//         <div class="carousel-item">
//           <img
//             src="./assets/images/12-fudgy-waffle-brownies.jpg" class="d-block w-100 " alt="Waffle"/>
         
//           <div class="carousel-caption d-none d-sm-block bg-dark">
//             <h2>Delicious Waffle</h2>
//             <p> the Taste of Waffle.</p>
//           </div>
//         </div>
//         <div class="carousel-item">
//           <img
//             src="./assets/images/12-set-ice-cream-scoop-on-260nw-2441911947.jpg1.jpg" class="d-block w-100" alt="Cone Icecream"/>
             
//           <div class="carousel-caption d-none d-sm-block bg-dark">
//             <h2>Cone Icecream</h2>
//             <p>Bite the cone and enjoy The Delicious Icecream</p>
//           </div>
//         </div>
//       </div>
//       <button
//         class="carousel-control-prev"
//         type="button"
//         data-bs-target="#hero"
//         data-bs-slide="prev"
//       >
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button
//         class="carousel-control-next"
//         type="button"
//         data-bs-target="#hero"
//         data-bs-slide="next"
//       >
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>

//     <!-- Hero section ends  -->

//     <!-- Icecream products starts  -->
//        <!--product starts-->
//     <div class="container my-5">
//       <h2 class="text-center mb-4">Our Products</h2>
//       <div class="row">
//         <div id="products" class="row">
//           <noscript>
//             <div style="color: red; font-weight: bold;">
//                 JavaScript is disabled in your browser. Please enable JavaScript to view this site properly.
//             </div>
//         </noscript>
//         </div>
//       </div>
         
//          <!--product ends-->
   
//     <!-- Icecream products ends  -->

//     <!-- Enquiry form starts  -->
//     <div class="container-fluid mt-5 bg-primary-subtle p-5">
//       <h2 class="text-center mb-4">Enquiry Form</h2>
//       <div id="successMessage"></div>
//       <form class="container" method="POST" id="enquiryForm" netlify>
//         <div class="row">
//           <!-- First Name -->
//           <div class="form-group col-md-6">
//             <label for="firstName">First Name</label>
//             <input
//               type="text"
//               class="form-control"
//               id="firstName"
//               name="firstName"
//               placeholder="First Name"
//               required
//               aria-required="true"
              
//               maxlength="20"
//               title="Enter your first name"
//             />
//           </div>
//           <!-- Last Name -->
//           <div class="form-group col-md-6">
//             <label for="lastName">Last Name</label>
//             <input
//               type="text"
//               class="form-control"
//               id="lastName"
//               name="lastName"
//               placeholder="Last Name"
//               required
//               aria-required="true"
//               minlength="2"
//               maxlength="20"
//             />
//           </div>
//         </div>
//         <div class="row">
//           <!-- Mobile -->
//           <div class="form-group col-md-6">
//             <label for="mobile">Mobile</label>
//             <input
//               type="tel"
//               class="form-control"
//               id="mobile"
//               name="mobile"
//               placeholder="Mobile"
//             />
//           </div>
//           <!-- Email -->
//           <div class="form-group col-md-6">
//             <label for="email">Email Address</label>
//             <input
//               type="email"
//               class="form-control"
//               id="email"
//               name="email"
//               placeholder="Email Address"
//             />
//           </div>
//         </div>
//         <div class="row">
//           <!-- Ice Cream Products Dropdown -->
//           <div class="form-group col-md-12">
//             <label for="iceCreamProduct">Select Ice Cream Product</label>
//             <select id="iceCreamProduct" class="form-control" name="iceCreamProduct">
//               <option selected>Choose...</option>
//               <option>Dilkus</option>
//               <option>Waffles</option>
//               <option>Cone</option>
//               <option>Gadbad</option>
//               <option>Tiramisu</option>
//               <option>Parfait</option>
//             </select>
//           </div>
//         </div>
//         <!-- Enquiry Message Text Area -->
//         <div class="form-group">
//           <label for="enquiryMessage">Enquiry Message</label>
//           <textarea
//             class="form-control"
//             id="enquiryMessage"
//             rows="4"
//             name="enquiryMessage"
//             placeholder="Your message..."
//             required
//             minlength="10"
//             maxlength="1024"
//           ></textarea>
//         </div>
//         <div class="d-flex justify-content-end my-2">
//           <button type="submit" class="btn btn-primary">Submit</button>
//         </div>
//         <div id="errorMessages"></div>
//       </form>
//     </div>
//     <!-- Enquiry form ends  -->
// <!--footer section start-->
//     <footer class="bg-dark text-white py-5">
//       <div class="container">
//         <div class="row">
//           <div class="col-md-4">
//             <h5>About Us</h5>
//             <p>
//               We are a family-owned ice cream shop dedicated to bringing you the
//               most delicious and creamy treats.
//             </p>
//           </div>
//           <div class="col-md-4">
//             <h5>Quick Links</h5>
//             <ul class="list-unstyled">
//               <li><a href="#" class="text-white">Home</a></li>
//               <li><a href="#" class="text-white">About</a></li>
//               <li><a href="#" class="text-white">Products</a></li>
//               <li><a href="#" class="text-white">Contact</a></li>
//             </ul>
//           </div>
//           <div class="col-md-4">
//             <h5>Contact Us</h5>
//             <ul class="list-unstyled">
//               <li>
//                 <i class="bi bi-geo-alt-fill me-2"></i>123 Main Street, Anytown
//                 USA
//               </li>
//               <li><i class="bi bi-telephone-fill me-2"></i>6890773530</li>
//               <li>
//                 <i class="bi bi-envelope-fill me-2"></i>icecream@gmail.com
//               </li>
//             </ul>
//           </div>
//         </div>
//         <hr class="my-4" />
//         <div class="row">
//           <div class="col-md-6">
//             <p>&copy; 2023 Ice Cream Shop. All rights reserved.</p>
//           </div>
//           <div class="col-md-6 text-md-end">
//             <a href="#" class="text-white me-3"
//               ><i class="bi bi-facebook"></i
//             ></a>
//             <a href="#" class="text-white me-3"
//               ><i class="bi bi-twitter"></i
//             ></a>
//             <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
//           </div>
//         </div>
//       </div>
//     </footer>
// <!--footer section ends-->
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
// crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
// integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
// crossorigin="anonymous"></script>
// <script src="js/app.js"></script>
// <!-- Code injected by live-server -->

//   </body>
// </html>


// const products = [
//   {
//     id: 1,
//     name: "Dilkush",
//     price: 160,
//     description: "Dilkush Icecream",
//     image:
//       "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Dilkush",
//   },
//   {
//     id: 2,
//     name: "Waffles",
//     price: 120,
//     description: "Waffles",
//     image:
//       "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Waffle",
//   },
//   {
//     id: 3,
//     name: "Cone",
//     price: 50,
//     description: "Cone Icecream",
//     image:
//       "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Cone",
//   },
//   {
//     id: 4,
//     name: "Gadbad",
//     price: 150,
//     description: "Gadbad Icecream",
//     image:
//       "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Gadbad",
//   },
//   {
//     id: 5,
//     name: "Tiramisu",
//     price: 110,
//     description: "Tiramisu Icecream",
//     image:
//       "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Tiramisu",
//   },
//   {
//     id: 6,
//     name: "Parfait",
//     price: 130,
//     description: "Parfait Icecream",
//     image:
//       "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Parfait",
//   },
// ];
// /**
//  * Creatre an HTML element and append it to the specified parent element
//  * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span', 'a')
//  * @param {Object} attributes An object containing the attributes to set on the element
//  * @param {string} content The inner HTML content of the element
//  * @param {string} parentSelector The CSS selector of the parent element to append the created element to
//  */

// function createAndAppendElement(
//   tagName,
//   attributes = {},
//   content = "",
//   parentSelector = "body"
// ) {
//   // create the e  with a specified tag name
//   const element = document.createElement(tagName);
//   for (let key in attributes) {
//     if (attributes.hasOwnProperty(key)) {
//       element.setAttribute(key, attributes[key]);
//     }
//   }

//   // set the inner content of the element
//   element.innerHTML = content;

//   // find the parent element by selector, or default to body if not found
//   const parentElement = document.querySelector(parentSelector) || document.body;
//   parentElement.appendChild(element);
// }

// products.forEach((product) => {
//   // Create column div
//   createAndAppendElement(
//     "div",
//     { class: "col-md-4 mb-4", id: `column-${product.id}` },
//     "",
//     "#products"
//   );

//   // Create card div
//   createAndAppendElement(
//     "div",
//     { class: "card h-100", id: `product-${product.id}` },
//     "",
//     `#column-${product.id}`
//   );

//   // Image element
//   createAndAppendElement(
//     "img",
//     { src: product.image, class: "card-img-top", alt: product.name },
//     "",
//     `#product-${product.id}`
//   );

//   // Card body div
//   createAndAppendElement(
//     "div",
//     { class: "card-body" },
//     "",
//     `#product-${product.id}`
//   );

//   // Product title
//   createAndAppendElement(
//     "h5",
//     { class: "card-title" },
//     product.name,
//     `#product-${product.id} > .card-body`
//   );

//   // Product description
//   createAndAppendElement(
//     "p",
//     { class: "card-text" },
//     product.description,
//     `#product-${product.id} > .card-body`
//   );

//   // Product price
//   createAndAppendElement(
//     "p",
//     { class: "card-text" },
//     `Price: ${product.price}`,
//     `#product-${product.id} > .card-body`
//   );

//   // Button container
//   createAndAppendElement(
//     "div",
//     { class: `d-flex buttonGroup-${product.id} justify-content-end` },
//     "",
//     `#product-${product.id} > .card-body`
//   );

//   // View details button
//   createAndAppendElement(
//     "a",
//     { class: "btn btn-primary me-2", href: "#" },
//     "View details",
//     `.buttonGroup-${product.id}`
//   );

//   // Add to cart button
//   createAndAppendElement(
//     "a",
//     { class: "btn btn-primary", href: "#" },
//     "Add to cart",
//     `.buttonGroup-${product.id}`
//   );
// });

// const enquiryForm = document.getElementById("enquiryForm");

// function validation( {firstName,
//   lastName,
//   mobile,
//   email,
//   iceCreamProduct,
//   enquiryMessage}) {
//   let isValid = true;
//   let errorMessages = [];
//   document.getElementById("errorMessages").innerHTML = "";

//   if (firstName.length < 2 || firstName.length > 20) {
//     isValid = false;
//     errorMessages.push("First name must be between 2 and 20 characters long.");
//   }
//   if (lastName.length < 2 || lastName.length > 20) {
//     isValid = false;
//     errorMessages.push("Last name must be between 2 and 20 characters long.");
//   }

//   const mobilePattern = /^[6-9]\d{9}$/;
//   if (!mobilePattern.test(mobile)) {
//     isValid = false;
//     errorMessages.push("Invalid mobile number");
//   }

//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   if (!emailPattern.test(email)) {
//     isValid = false;
//     errorMessages.push("Invalid email address");
//   }
//   const productOptions = [
//     "Dilkus",
//     "Waffles",
//     "Cone",
//     "Gadbad",
//     "Tiramisu",
//     "Parfait",
//   ];
//   if (!productOptions.includes(iceCreamProduct)) {
//     inValid = false;
//     errorMessages.push("please select a product.");
//   }

//   // enquiryForm.reset();

//   if (enquiryMessage < 10) {
//     isValid = false;
//     errorMessages.push("enquiry Message should be atleast 10 characters");
//   }
//   if (enquiryMessage.length >= 1024) {
//     isValid = false;
//     errorMessages.push("enquiry Message should be less than 1024 characters");
//   }

//   if (!isValid) {
//     errorMessages.forEach((message) => {
//       const li = document.createElement("li");
//       li.textContent = message;
//       document.getElementById("errorMessages").appendChild(li);
//     });
//   }
//   return isValid;
// }
// enquiryForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const firstName = event.target.elements.firstName.value.trim();
//   const lastName = event.target.elements.lastName.value.trim();
//   const mobile = event.target.elements.mobile.value.trim();
//   const email = event.target.elements.email.value.trim();
//   const iceCreamProduct = event.target.elements.iceCreamProduct.value.trim();
//   const enquiryMessage = event.target.elements.enquiryMessage.value.trim();

//   console.log(
//     firstName,
//     lastName,
//     mobile,
//     email,
//     iceCreamProduct,
//     enquiryMessage
//   );

 

//   if (validation({ firstName,
//     lastName,
//     mobile,
//     email,
//     iceCreamProduct,
//     enquiryMessage})) {
//     // const formData = new FormData(enquiryForm);
//     // formData.append("firstName",firstName);
//     // formData.append("lastName", lastName);
//     // formData.append("mobile", mobile);
//     // formData.append("email", email);
//     // formData.append("iceCreamProduct", iceCreamProduct);
//     // formData.append("enquiryMessage", enquiryMessage);
//     fetch(
//       "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZkMDYzMzA0MzE1MjY4NTUzMzUxM2Ii_pc",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           firstName,
//           lastName,
//           mobile,
//           email,
//           iceCreamProduct,
//           enquiryMessage,
//         }),
//       }
//     ).then((response) => {
//       if (response.ok) {
//         console.log("Enquiry submitted successfully");
//         createAndAppendElement(
//           "div",
//           { class: "alert alert-success", role: "alert" },
//           " Successfully submitted.Thankyou for your enquiry.We will get back soon!!",
//           "#successMessage"
//         );
//         enquiryForm.reset();
//       } else {
//         console.error("Failed to submit enquiry");
//         alert("Failed to submit enquiry. Please try again later.");
//       }
//     });
//   }
//     // enquiryForm.reset();
  
// });

