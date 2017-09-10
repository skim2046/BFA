angular
  .module("buyApp")
  .controller("emailController", function ($scope, emailService, $state, $stateParams) {

    $scope.commission = [];
    $scope.isFilledIn = true;

    $scope.submitCommission = function (commission) {
      if (commission.artistName == null) {
        $scope.isFilledIn = false;
      }
      else {
        $scope.isSubmitted = true;
        $scope.commissionForms.dateRequested.$touched = false;
        $scope.commissionForms.artistName.$touched = false;
        $scope.commissionForms.firstName.$touched = false;
        $scope.commissionForms.lastName.$touched = false;
        $scope.commissionForms.phone.$touched = false;
        $scope.commissionForms.email.$touched = false;
        $scope.commissionForms.message.$touched = false;
        emailService.addInfo(commission.dateRequested, commission.artistName, commission.firstName, commission.lastName, commission.phone, commission.email, commission.message, function (r) {
          $scope.commission = r;
        })
      }
    }
  });