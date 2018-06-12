app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html'
    })
    .when('/notes', {
      templateUrl: 'templates/notes.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
    $locationProvider.html5Mode(true);
});
