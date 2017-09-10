angular
  .module("buyApp")
  .controller("cartController", function ($scope, $state, productsService, cartService, $stateParams) {

    $scope.cart = cartService.getCart()
    $scope.products = [];
    $scope.currentProduct = {};
    $scope.total = cartService.getCart()

    productsService.getProduct(function (r) {
      $scope.products = r
      for (var i = 0; i < $scope.products.length; i++) {
        $scope.products[i].orderNumber = 0.5 - Math.random();
      }
      for (var i = 0; i < $scope.products.length; i++) {
        if ($scope.products[i].Id == $stateParams.id) {
          $scope.currentProduct = $scope.products[i];
        }
      }
    })

    $scope.linkProduct = function (product) {
      $state.go("product", { 'id': product.Id })
    }

    $scope.updateTotal = function () {
      $scope.total = 0;
      for (var i = 0; i < $scope.cart.length; i++) {
        $scope.total += $scope.cart[i].Price
      }
      return $scope.total;
    }

    $scope.removeItemCart = function (productId) {
      for (var i = 0; i < $scope.cart.length; i++) {
        if ($scope.cart[i].Id == productId) {
          $scope.cart.splice(i, 1)
        }
      }
    }
  })