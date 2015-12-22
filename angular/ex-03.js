angular.module('ex-03-app', []);

angular.module('ex-03-app')
  .controller(
    'GreetingController',
    function($scope) {
      $scope.name = '';
      $scope.names = ['Ujang', 'Otong', 'Dodo'];

      $scope.submit = function() {
        $scope.names.push($scope.name);
        console.log('submitting', $scope.name);
        $scope.name = "";
      };
    }
);

angular.module('ex-03-app')
  .filter('reverse', function() {
    return function(input) {
      return input.split("").reverse().join("");
    };
});