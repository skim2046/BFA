angular
  .module("buyApp")
  .service("cartService", function ($http) {
    var _cart = [];
    var _item = [];

    this.addToCart = function (product) {
      _cart.unshift(product)
    }

    this.getCart = function () {
      return _cart
    }
  });