var myApp = angular.module('myApp',['ui.router']);

myApp.controller('MyController', function MyController($scope, $http) {

    $scope.project = {
        'name'          : 'Pixie Book',
        'description'   : 'This module was all about creating a visual book for chilren',
        'school'        : 'KEA'
    }
    
    $http.get("http://apis.is/cyclecounter")
    .then(function(response) {
        $scope.bicyclecounter = response.data;
        //console.log(response);
    });
    
});

//ui-router
myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/about");
  
  $stateProvider
    
      .state('about', {
      url: "/about",
      templateUrl: "partials/about.html"
    })
      
      .state('bicyclecounter', {
      url: "/education",
      templateUrl: "partials/education.html"
    }) 
      
      .state('portfolio', {
      url: "/portfolio",
      templateUrl: "partials/portfolio.html"
    })
      
      .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact.html"
    })
    
    
});

