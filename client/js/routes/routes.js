app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'pages/home.html'
    })
    .when('/notes', {
      templateUrl: 'pages/notes.html'
    });
    // .otherwise({
    //   redirectTo: '/home'
    // });
    $locationProvider.html5Mode(true);
});
