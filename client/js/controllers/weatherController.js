app.controller('weatherCtrl', function($scope, $http){

  var url = 'https://cammobase.azurewebsites.net/api/weatherController';

  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var weatherConditions = response.data.current_observation;
    var weatherLocations = response.data.current_observation.display_location;
    $scope.temp_f = weatherConditions.temp_f;
    $scope.city = weatherLocations.city;



  }, function(response) {
    $scope.data = response.statusText;
  });
});
