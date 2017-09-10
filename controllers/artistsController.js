angular
  .module("buyApp")
  .controller("artistsController", function ($scope, $state, artistsService, productsService, $stateParams) {
    $scope.type = $stateParams.type;
    $scope.artists = [];
    $scope.currentArtist = {};

    artistsService.getArtist(function (r) {
      $scope.artists = r;
      for (var i = 0; i < $scope.artists.length; i++) {
        if ($scope.artists[i].Id == $stateParams.id) {
          $scope.currentArtist = $scope.artists[i];
        }
      }
    })

    $scope.linkArtist = function (artist) {
      $state.go("artist", { 'id': artist.Id })
    }

    $scope.linkProduct = function (product) {
      $state.go("product", { 'id': product.Id })
    }

    $scope.products = [];
    $scope.currentProduct = {};

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
  });