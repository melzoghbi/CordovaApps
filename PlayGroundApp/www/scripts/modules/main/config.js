angular.module('mainApp')
.config(       
function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',
    {        
        controller: 'RouteCtrl',
        templateUrl: 'uirouter.html'
    }
        )
      // if not match with any route config then send to home page
     .otherwise({
         redirectTo: '/home'
     });
});

// create the controller and inject Angular's $scope

// set for Route Controller
mainApp.controller('RouteCtrl', function ($scope) {

    /** create $scope.template **/
    $scope.template = {

        "home": "home.html",
        "about": "aboutus.html",
        "contact": "contactus.html"

    }

    $scope.message = {

        "home": "Message from home template",
        "about": "Message from about template",
        "contact": "Message from contact template"

    }


    /** now after this ng-include in uirouter.html set and take template from their respective path **/

});