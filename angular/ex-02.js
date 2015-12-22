angular.module('ex-02-app', []);

angular.module('ex-02-app')
  .controller(
    'GreetingController',
    function($scope) {
      $scope.name = 'Default';
      $scope.names = [];

      $scope.submit = function() {
        $scope.names.push($scope.name);
        $scope.name = "";
      };
    }
);