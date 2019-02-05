app.controller('weatherCtrl', function($scope, $http){

  var url = 'https://cammobase.azurewebsites.net/api/weatherController';

  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var weatherConditions = response.data.current_observation;
    var weatherLocations = response.data.current_observation.display_location;

    $scope.temp_f       = weatherConditions.temp_f;
    $scope.feelslike_f  = weatherConditions.feelslike_f;
    $scope.forecast_url = weatherConditions.forecast_url;
    $scope.icon_url     = weatherConditions.icon_url;
    $scope.city         = weatherLocations.full;
    $scope.conditions    = weatherConditions.weather;

    var iconType = 'svg';
    var iconColor = 'white';
    var iconSize = '128';
    var iconTime = '';
    var condition = weatherConditions.icon;

    var hours = new Date().getHours()
    var isDayTime = hours > 6 && hours < 20

    if (isDayTime) {
      iconTime = 'day'
    }
    else {
      iconTime = 'night'
    }

    $scope.className = 'wu wu-' + iconColor + ' wu-' + condition + ' wu-' + iconSize + ' wu-' + iconTime
  
  }, function(response) {
    $scope.data = response.statusText;
  });
});
