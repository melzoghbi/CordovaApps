
// define all your modules
var module1 = angular.module("module1", []);
var module2 = angular.module("module2", []);

// Lastly, Add all other modules after defining the main module
var mainApp = angular.module("mainApp",
    [
        'module1',
        'module2',
        'ngRoute',
    ]
         
    );