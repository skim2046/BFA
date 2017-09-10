angular
  .module("buyApp")
  .service("productsService", function ($http) {
    var _products = [];

    this.getProduct = function (callback) {
      $http.get("./data/products.json")
        .success(function (response) {

          callback(response)
        })
        .error(function () {

        })
    }
  });