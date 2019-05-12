var app = angular.module('demo', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      template: "hello shiva"
    })
 .when('/link3', {
      template: "link3.html"
    })
	 .when('/link1', {
      templateUrl: "link.html",
      controller: 'Ctrl'
    })
    .when('/link2', {
      templateUrl: "link2.html",
      controller: 'Ctrl'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);

app.controller("Ctrl", function($scope, $routeParams) {
  $scope.id = $routeParams.id;
  $scope.name = $routeParams.name;
  $scope.myName="Aravind";
  // do other stuff
});