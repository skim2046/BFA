angular
  .module("buyApp")
  .service("registerService", function ($http) {
    var _register = [];

    function Register(firstName, lastName, phone, email, address, city, state, zipcode, username) {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Phone = phone;
      this.Email = email;
      this.Address = address;
      this.City = city;
      this.State = state;
      this.Zipcode = zipcode;
      this.Username = username;
    }
    this.addRegisterInfo = function (firstName, lastName, phone, email, address, city, state, zipcode, username, callback) {

      var newRegister = new Register(firstName, lastName, phone, email, address, city, state, zipcode, username)
      $http.post('http://localhost:55874/api/customers', newRegister)
        .success(function () {
          callback()
        })
        .error(function (response) {
           console.log('Error');
          console.log(response);
        })
    }
  })