angular
  .module("buyApp")
  .service("artistsService", function ($http) {
    var _artists = [];

    this.getArtist = function (callback) {
      $http.get("./data/artists.json")
        .success(function (response) {

          callback(response)
        })
        .error(function () {

        })
    }
  });