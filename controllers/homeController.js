angular
  .module("buyApp")
  .controller("homeController", function ($scope, $state, artistsService, productsService, cartService, $stateParams) {

    $scope.artists = [];
    artistsService.getArtist(function (r) {
      $scope.artists = r
    })
    $scope.products = [];
    productsService.getProduct(function (r) {
      $scope.products = r
      for (var i = 0; i < $scope.products.length; i++) {
        $scope.products[i].orderNumber = 0.5 - Math.random();
      }
    })
    $scope.linkArtist = function (artist) {
      $state.go("artist", { 'id': artist.Id })
    }
    $scope.linkProduct = function (product) {
      $state.go("product", { 'id': product.Id })
    }
    $scope.cart = cartService.getCart()
  });