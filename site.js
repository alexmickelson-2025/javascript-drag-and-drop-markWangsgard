import { AddToCart, CalculateCost, cart, products, RemoveFromCart } from "./products.js";

const allowDrop = (e) => {
  e.preventDefault();
};

const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
};

const createCard = (product) => {
  const cardElement = document.createElement("div");
  cardElement.id = product.title;
  cardElement.classList = "card";
  cardElement.draggable = true;
  cardElement.addEventListener("dragstart", (e) => {
    e.preventDefault;
    drag(e);
  });

  const imageElement = document.createElement("div");
  imageElement.classList = "card-img";
  imageElement.style.backgroundImage = `url(${product.image})`;

  const contentElement = document.createElement("div");
  contentElement.classList = "card-content";

  const cardTitleElement = document.createElement("div");
  cardTitleElement.classList = "card-title";
  cardTitleElement.textContent = product.title;

  const descriptionElement = document.createElement("div");
  descriptionElement.classList = "card-description";
  descriptionElement.textContent = product.description;

  const priceElement = document.createElement("div");
  priceElement.classList = "card-price";
  priceElement.textContent = `$${product.price}`;

  const quantityElement = document.createElement("div");
  quantityElement.classList = "card-quantity";
  quantityElement.textContent = `Quantity: ${product.quantity}`;

  contentElement.appendChild(cardTitleElement);
  contentElement.appendChild(descriptionElement);
  contentElement.appendChild(priceElement);
  contentElement.appendChild(quantityElement);

  cardElement.appendChild(imageElement);
  cardElement.appendChild(contentElement);

  return cardElement;
};

const generateAvailableProductsCards = () => {
  const productsContainerElement = document.getElementById("productsList");
  productsContainerElement.replaceChildren();

  products.forEach((product) => {
    const cardElement = createCard(product);
    productsContainerElement.appendChild(cardElement);
  });
};

const generateCartCards = () => {
  const cartContainerElement = document.getElementById("cartList");
  cartContainerElement.replaceChildren();

  cart.forEach((product) => {
    const cardElement = createCard(product);

    cartContainerElement.appendChild(cardElement);
  });
  const priceTotalElement = document.getElementById("amount");

  priceTotalElement.textContent = CalculateCost();
};

const productListContainerElement = document.getElementById("productsList");
productListContainerElement.addEventListener("dragover", (e) => {
  allowDrop(e);
});
productListContainerElement.addEventListener("drop", (e) => {
  e.preventDefault();
  const productId = e.dataTransfer.getData("text");
  RemoveFromCart(productId);
  generateAvailableProductsCards();
  generateCartCards();
});

const cartListContainerElement = document.getElementById("cartList");
cartListContainerElement.addEventListener("dragover", (e) => {
  allowDrop(e);
});
cartListContainerElement.addEventListener("drop", (e) => {
  e.preventDefault();
  const productId = e.dataTransfer.getData("text");
  AddToCart(productId);
  generateAvailableProductsCards();
  generateCartCards();
});

generateAvailableProductsCards();
generateCartCards();
