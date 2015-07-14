

(function () {

    angular.module('myApp', [])
    .config([function () {
        // configuration
    }])
    .run([function () {
        // Running
    }])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.myname = "Mostafa Elzoghbi Demo!";

    }])

})();