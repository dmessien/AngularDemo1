
var p14App = angular.module('p14App', []);

p14App.directive('slideIn', function(){
    return function(scope, element, attrs){
        $(element).slideDown(attrs.slideIn);
    };
});

p14App.directive('slideRight', function(){
    return function(scope, element, attrs){
        $(element).show('slide',{direction:'right'},1000);
    }
})

p14App.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
                templateUrl : 'pages/p14home.html',
                controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
                templateUrl : 'pages/p14about.html',
                controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
                templateUrl : 'pages/p14contact.html',
                controller  : 'contactController'
        });
});

p14App.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'This is the home page';
    $scope.items = [
        {'name': 'Client #1',
         'company': 'Company #1',
         'message':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ligula accumsan, pharetra nibh nec, facilisis nulla. In pretium semper venenatis. In adipiscing augue elit, at venenatis enim suscipit a. Fusce vitae justo tristique, ultrices mi metus.'},
        {'name': 'Client #2',
         'company': 'Company #2',
         'message':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ligula accumsan, pharetra nibh nec, facilisis nulla. In pretium semper venenatis. In adipiscing augue elit, at venenatis enim suscipit a. Fusce vitae justo tristique, ultrices mi metus.'},
        {'name': 'Client #3',
         'company': 'Company #3',
         'message':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ligula accumsan, pharetra nibh nec, facilisis nulla. In pretium semper venenatis. In adipiscing augue elit, at venenatis enim suscipit a. Fusce vitae justo tristique, ultrices mi metus.'},
        {'name': 'Client #4',
        'company': 'Company #4',
        'message':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ligula accumsan, pharetra nibh nec, facilisis nulla. In pretium semper venenatis. In adipiscing augue elit, at venenatis enim suscipit a. Fusce vitae justo tristique, ultrices mi metus.'},
        {'name': 'Client #5',
        'company': 'Company #5',
        'message':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ligula accumsan, pharetra nibh nec, facilisis nulla. In pretium semper venenatis. In adipiscing augue elit, at venenatis enim suscipit a. Fusce vitae justo tristique, ultrices mi metus.'}
    ];
});

p14App.controller('aboutController', function($scope) {
        $scope.message = 'This is the about page';
});

p14App.controller('contactController', function($scope) {
    $scope.message = 'This is the contact page';
    $scope.groups = [
        {
            'name':'Eric',
            'email':'eric@name.com',
            'message':'Hi, its Eric.'
        },
        {
            'name':'Stacy',
            'email':'stacy@name.com',
            'message':'Hey, its Stacy.'
        }
    ];
    $scope.update = function(user){
            var newGroup = angular.copy(user);
            $scope.groups.push({ name: $scope.user.name, email: $scope.user.email, message: $scope.user.message });
            $scope.grabUser(user);
            $scope.newGroup.url = '';
            $scope.reset();
          //$scope.groups = angular.copy(user);
    };
    $scope.reset = function(){
      $scope.user = angular.copy($scope.groups);  
    };
    $scope.reset();
});

p14App.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
