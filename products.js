export var products = [
  {
    title: "Water Bottle",
    description: "A 500ml reusable water bottle.",
    price: 10.99,
    quantity: 3,
    image: "/images/waterbottle.jpg",
  },
  {
    title: "Toothbrush",
    description: "A standard toothbrush with soft bristles.",
    price: 2.49,
    quantity: 2,
    image: "/images/toothbrush.jpg",
  },
  {
    title: "White T-shirt",
    description: "A plain white tee made from cotton.",
    price: 14.5,
    quantity: 5,
    image: "/images/tshirt.jpg",
  },
  {
    title: "Leather Wallet",
    description: "A classic wallet made from genuine leather.",
    price: 20.0,
    quantity: 4,
    image: "/images/wallet.jpg",
  },
  {
    title: "Soap Bar",
    description: "A fragrant soap bar for daily use.",
    price: 3.75,
    quantity: 1,
    image: "/images/soap.jpg",
  },
  {
    title: "Notebook",
    description: "A standard notebook for writing and note-taking.",
    price: 6.99,
    quantity: 3,
    image: "/images/notebook.jpg",
  },
  {
    title: "Lantern",
    description: "A portable lantern suitable for indoor and outdoor use.",
    price: 18.49,
    quantity: 2,
    image: "/images/lantern.jpg",
  },
  {
    title: "Shopping Bag",
    description: "A reusable shopping bag in a neutral color.",
    price: 2.5,
    quantity: 5,
    image: "/images/shopping-bag.jpg",
  },
  {
    title: "Straw Set",
    description: "A set of 4 drinking straws with a cleaning brush.",
    price: 7.99,
    quantity: 4,
    image: "/images/straws.jpg",
  },
  {
    title: "Yerba Maté ",
    description: "A 1kg bag of Yerba Maté.",
    price: 12.25,
    quantity: 2,
    image: "/images/yerba.jpg",
  },
];

export var cart = [];

export const AddToCart = (item) => {
  const product = products.find((product) => product.title === item.title);
  if (product) {
    product.quantity--;
    const productInCart = cart.find((product) => product.title === item.title);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      const newProduct = { ...product };
      newProduct.quantity = 1;
      cart = [...cart, newProduct];
    }
  }
  if (product.quantity === 0) {
    const productIndex = products.findIndex((value) => value.quantity === 0);
    products.splice(productIndex, 1);
  }
};

export const RemoveFromCart = (item) => {
  const product = cart.find((product) => product.title === item.title);
  if (product) {
    product.quantity--;
    const productInCart = products.find(
      (product) => product.title === item.title
    );
    if (productInCart) {
      productInCart.quantity++;
    } else {
      const newProduct = { ...product };
      newProduct.quantity = 1;
      products = [...products, newProduct];
    }
  }
  if (product.quantity === 0) {
    const productIndex = cart.findIndex((value) => value.quantity === 0);
    cart.splice(productIndex, 1);
  }
};
