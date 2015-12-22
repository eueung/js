angular.module('ex-01-app', []);

angular.module('ex-01-app')
  .controller(
    'GreetingController',
    function($scope) {
      $scope.name = 'World';
    }
);