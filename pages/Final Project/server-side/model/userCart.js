const Product = require("./product");
let count = 0;

class UserCart {
  id;
  userId;
  product;
  dateAdded;
  quantity;
  total;

  constructor(userId, productId, quantity) {
    this.product = Product.findById(productId);
    this.quantity = quantity;
    this.dateAdded = new Date();
    this.userId = userId;
    this.total = quantity * this.product.price;
  }

  addToCart() {
    let previousOrder = UserCart.getParticularItemOrder(
      this.userId,
      this.product.id
    );
    if (previousOrder) {
      previousOrder.quantity += this.quantity;
      // previousOrder.product.sellProduct(this.quantity);
      previousOrder.price = previousOrder.quantity * this.product.price;
      return previousOrder;
    } else {
      this.id = ++count;
      // this.product.sellProduct(this.quantity);
      userCarts.push(this);
      return this;
    }
  }

  static removeFromCart(id) {
    const index = userCarts.findIndex((i) => i.id == id);
    const removedCart = userCarts[index];
    // removedCart.product.adjustProduct(removedCart.quantity);
    userCarts.splice(index, 1);
    return removedCart;
  }

  static confirmOrder(userId) {
    let items = this.getCart(userId);
    items.forEach((i) => {
      const index = userCarts.findIndex((item) => item.product.id == i.id);
      i.product.sellProduct(i.quantity);
      userCarts.splice(index, 1);
    });
  }

  static getCart(userId) {
    let userCart = userCarts.filter((uc) => uc.userId == userId);
    return userCart;
  }

  static getParticularItemOrder(userId, productId) {
    let userCart = this.getCart(userId);
    if (userCart) {
      const index = userCart.findIndex((i) => i.product.id == productId);
      return userCarts[index];
    }
    return;
  }
}

let userCarts = [];

module.exports = UserCart;
