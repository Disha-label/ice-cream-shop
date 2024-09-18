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

// Get the container element
const productElement = document.querySelector("#Products");

/**
 * Creates an HTML element with the specified tag name, attributes, and content,
 * and appends it to the specified parent element or the document body.
 *
 * @param {string} tagName - The tag name of the element to be created
 * @param {Object} [attributes={}]  - The attributes to be set for the element
 * @param {string} [content =""] - The inner content of the element
 * @param {string} [selector="body"] - The selector of the parent element where the element should be appended
 * @returns {HTMLElement} The created element
 */

function createAndAppendElement(
  tagName,
  attributes = {},
  content = "",
  selector = "body"
){
  const element = document.createElement(tagName); //div

  //Set the attribute of the element
  // for (const [key, value] of Object.entries(attributes)) {  //{class:"card h-100",id:'product-${product.id}
  //   element.setAttribute(key, value);
  // }
  for(let key in attributes){
    //class
    if(attributes.hasOwnProperty(key)){ 
      //check lass
    element.setAttribute(key,attributes[key]);
    //class,card h-100
}
}

  // Set the  inner content of the element
  element.innerHTML = content;

 //Find the parent element based on the selector and appendd the enw element to it
  const parenElement = document.querySelector(parentSelector);
  parenElement.appendChild(element);
  return element;
}

// Loop through each product and create the corresponding HTML elements
products.forEach((product) => {

  // Column div
 createAndAppendElement(
    "div",
    { class: "col-md-4 mb-4" ,id:'column-${product.id}'},
    "",
    '#Products'
  );

  // Card div
  const divCardElement = createAndAppendElement(
    "div",
    { class: "card h-100", id: `product-${product.id}` },
    "",
    '#column-${product.id}'
  );

  // Image element
  createAndAppendElement(
    "img",
    { class: "card-img-top", src: product.image, alt: product.name },
    "",
    `#product-${product.id}`
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
    `#product-${product.id} >.card-body`
  );

  // Product description
  createAndAppendElement(
    "p",
    { class: "card-text" },
    product.description,
    `#product-${product.id} >.card-body`
  );

  // Product price
  createAndAppendElement(
    "p",
    { class: "card-text" },
    `Price: ${product.price}`,
    `#product-${product.id} >.card-body`
  );

  // Button container
  const buttonGroup = createAndAppendElement(
    "div",
    { class: `d-flex buttonGroup-${product.id} justify-content-end` },
    "",
    `#product-${product.id} >.card-body`
  );

  // View details button
  createAndAppendElement(
    "a",
    { class: "btn btn-primary me-2", href: "#" },
    "View Details",
    `.buttonGroup-${product.id} `
  );

  // Add to cart button
  createAndAppendElement(
    "a",
    { class: "btn btn-primary", href: "#" },
    "Add to Cart",
    `.buttonGroup-${product.id} `
  );
});




// const divCardElement = document.createElement("div");
  // divCardElement.classList.add("card", "h-100");
  // divCardElement.id = `${product.id}`; // Fixed string interpolation

  // divColumnelement.appendChild(divCardElement); // const imageElement = document.createElement("img"); 
  //imageElement.classList.add("card-img-top");
  //imageElement.src = product.image;
  //imageElement.alt = product.name; // Corrected to use the product's name for alt

  //divCardElement.appendChild(imageElement);//const divCardBodyElement = document.createElement('div'); 
//divCardBodyElement.classList.add("card-body");//divCardElement.appendChild(divCardBodyElement);

//const cardTitleElement = document.createElement("h5");
//cardTitleElement.classList.add("card-title");
//cardTitleElement.textContent = product.name;

//divCardBodyElement.appendChild(cardTitleElement);

//const cardTextElement = document.createElement("p");
//cardTextElement.classList.add("card-text");
//cardTextElement.textContent = product.description;

//divCardBodyElement.appendChild(cardTextElement);

//const PriceElement = document.createElement("p");
//PriceElement.classList.add("card-text");
//PriceElement.textContent = `Price: ${product.price}`;

//divCardBodyElement.appendChild(PriceElement);

//const buttonGroupElement = document.createElement("div");
//buttonGroupElement.classList.add("d-flex");
//buttonGroupElement.classList.add(`buttonGroup-${product.id}`);
//buttonGroupElement.classList.add("justify-content-end");

//divCardBodyElement.appendChild(buttonGroupElement);
