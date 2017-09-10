angular
  .module("buyApp")
  .controller("registerController", function ($scope, registerService, $state, $stateParams) {
    $scope.register = [];
    $scope.isFilledIn = true;

    $scope.submitRegister = function (register) {
      if (register.email == null) {
        $scope.isFilledIn = false;
      }
      else {
        $scope.isSubmitted = true;
        $scope.registerForm.firstName.$touched = false;
        $scope.registerForm.lastName.$touched = false;
        $scope.registerForm.email.$touched = false;
        $scope.registerForm.username.$touched = false;
        $scope.registerForm.phone.$touched = false;
        $scope.registerForm.address.$touched = false;
        $scope.registerForm.city.$touched = false;
        $scope.registerForm.state.$touched = false;
        $scope.registerForm.zipcode.$touched = false;
        $scope.registerForm.password.$touched = false;
        registerService.addRegisterInfo(register.firstName, register.lastName, register.phone, register.email, register.address, register.city, register.state, register.zipcode, register.username, function (r) {
          $scope.register = r;
        })
      }
    }
  })