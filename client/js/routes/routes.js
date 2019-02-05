app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html'
  })
  $locationProvider.html5Mode({
    enabled:true
});
});
