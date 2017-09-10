angular
  .module("buyApp")
  .controller("productsController", function ($scope, $state, productsService, cartService, $stateParams) {

    $scope.products = [];
    $scope.cart = [];
    $scope.currentProduct = {};

    productsService.getProduct(function (r) {
      $scope.products = r
      for (var i = 0; i < $scope.products.length; i++) {
        if ($scope.products[i].Id == $stateParams.id) {
          $scope.currentProduct = $scope.products[i];
        }
      }
      for (var i = 0; i < $scope.products.length; i++) {
        $scope.products[i].orderNumber = 0.5 - Math.random();
      }
    })

    $scope.linkProduct = function (product) {
      $state.go("product", { 'id': product.Id })
    }

    $scope.linkCart = function (product) {
      cartService.addToCart(product)
      $state.go("cart")
    }
  });