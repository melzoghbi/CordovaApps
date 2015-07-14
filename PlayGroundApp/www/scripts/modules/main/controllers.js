module1.controller("MainCtrl", function ($scope, $route, $routeParams, $location) {

    $scope.Test = "This is a test message...";


    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

});