app.controller('weatherCtrl', function($scope, $http){

  var url = 'https://cammobase.azurewebsites.net/api/weatherController';
  //var url = 'http://localhost:5000/api/weathercontroller';

  var geoLocationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.84093,-74.301815&key=AIzaSyBlS1hXhwR2pmGd2lmRqtCwZ7Zt90rRR5M';

  $http({
    method: 'GET',
    url: geoLocationUrl,
  }).then(function(response) {

    $scope.city = response.data.plus_code.compound_code; 
  }, function(response) {
    $scope.data = response.statusText;
  });

  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var weather = response.data;

    $scope.temp_f = weather.currently.temperature;
    $scope.feelslike_f = weather.currently.apparentTemperature;
    $scope.conditions = weather.currently.summary;
    $scope.icon_url = weather.currently.icon;

    var iconType = 'svg';
    var iconColor = 'white';
    var iconSize = '128';
    var iconTime = '';
    var icon_url = weather.currently.icon;

    var hours = new Date().getHours()
    var isDayTime = hours > 6 && hours < 20

    if (isDayTime) {
      iconTime = 'day'
    }
    else {
      iconTime = 'night'
    }

     $scope.className = 'wu wu-' + iconColor + ' ' + icon_url + ' wu-' + iconSize + ' wu-' + iconTime
  
  }, function(response) {
    $scope.data = response.statusText;
  });
});
