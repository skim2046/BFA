var app = angular.module('buyApp', ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("homeView", {
    url: "/",
    templateUrl: "./views/home.html",
    controller: "homeController"
  })

    .state("artists", {
      url: "/artists?type",
      templateUrl: "./views/artists.html",
      controller: "artistsController"

    })

    .state("artist", {
      url: "/artist/:id",
      templateUrl: "./views/artist.html",
      controller: "artistsController"
    })

    .state("product", {
      url: "/product/:id",
      templateUrl: "./views/product.html",
      controller: "productsController"
    })

    .state("commissions", {
      url: "/commissions",
      templateUrl: "./views/commissions.html",
      controller: "emailController"
    })

    .state("cart", {
      url: "/cart",
      templateUrl: "./views/cart.html",
      controller: "cartController"
    })

    .state("register", {
      url: "/register",
      templateUrl: "./views/register.html",
      controller: "registerController"
    })
});