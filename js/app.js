const products= [
  {
    id: 1,
    name: "Dilkush",
    price: 160,
    description: "Dilkush Icecream",
    image: "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Dilkush",
  },
  {
    id: 2,
    name: "Waffles",
    price: 120,
    description: "Waffles",
    image: "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Waffle",
  },
  {
    id: 3,
    name: "Cone",
    price: 50,
    description: "Cone Icecream",
    image: "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Cone",
  },
  {
    id: 4,
    name: "Gadbad",
    price: 150,
    description: "Gadbad Icecream",
    image: "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Gadbad",
  },
  {
    id: 5,
    name: "Tiramisu",
    price: 110,
    description: "Tiramisu Icecream",
    image: "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Tiramisu",
  },
  {
    id: 6,
    name: "Parfait",
    price: 130,
    description: "Parfait Icecream",
    image: "https://craftypixels.com/placeholder-image/300x300/1820ba/e8e8eb&text=Parfait",
  },
];
/**
 * Creatre an HTML element and append it to the specified parent element
 * @param {string} tagName The tag name of the element to create (e.g., 'div', 'span', 'a')
 * @param {Object} attributes An object containing the attributes to set on the element
 * @param {string} content The inner HTML content of the element
 * @param {string} parentSelector The CSS selector of the parent element to append the created element to
 */

function createAndAppendElement(tagName, attributes = {}, content = "", parentSelector = "body") {

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
  const parentElement = document.querySelector(parentSelector)  || document.body;
  parentElement.appendChild(element);
  
}

products.forEach((product) => {

  // Column div
  createAndAppendElement("div", { class: "col-md-4 mb-4", id: `column-${product.id}` }, "", "#products");

  // Card div
  const divCardElement = createAndAppendElement("div", { class: "card h-100", id: `product-${product.id}` }, "", `#column-${product.id}`);

  // Image element
  createAndAppendElement("img", { src: product.image, class: "card-img-top",src:product.image,alt: product.name }, "", `#product-${product.id}`);

  // Card body div
  createAndAppendElement("div", { class: "card-body" }, "", `#product-${product.id} `);

  // Product title
  createAndAppendElement("h5", { class: "card-title" }, product.name, `#product-${product.id} > .card-body`);

  // Product description
  createAndAppendElement("p", { class: "card-text" }, product.description, `#product-${product.id} > .card-body`);

  // Product price
  createAndAppendElement("p", { class: "card-text" }, `Price: ${product.price}`, `#product-${product.id} > .card-body`);

  // Button container
  createAndAppendElement('div', { class: `d-flex buttonGroup-${product.id} justify-content-end ` }, "", `${product.id}  > .card-body`);

  // View details button
  createAndAppendElement("a", { class: "btn btn-primary me-2", href: "#"}, "View details",`.buttonGroup-${product.id}` ); 
  

  // Add to cart button
  createAndAppendElement("a", { class: "btn btn-primary ", href: "#"}, "Add to cart",`.buttonGroup-${product.id}` ); 
  });






