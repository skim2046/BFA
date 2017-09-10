angular
  .module("buyApp")
  .service("emailService", function ($http) {

    var _commissions = [];

    function Commission(dateRequested, artistName, firstName, lastName, phone, email, message) {
      this.DateRequested = dateRequested;
      this.ArtistName = artistName;
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Phone = phone;
      this.Email = email;
      this.Message = message;
    }
    this.addInfo = function (dateRequested, artistName, firstName, lastName, phone, email, message, callback) {
      var newCommission = new Commission(dateRequested, artistName, firstName, lastName, phone, email, message)
      $http.post('http://localhost:55874/api/commissions', newCommission)
        .success(function () {
          callback()
        })
        .error(function () {
        })
    }
  })