var app = angular.module('Homebase', ['ngRoute']);

/* Weather */
app.directive('weatherTemplate', function(){
  return {
    templateUrl: 'templates/weather-template.html'
  };
});

/* NBA */
app.directive('nbaTemplate', function(){
  return {
    templateUrl: 'templates/nba-template.html'
  };
});

/* Pocket */
app.directive('pocketTemplate', function(){
  return {
    templateUrl: 'templates/pocket-template.html'
  };
});

/* Pocket Service - return last 10 articles */
app.service('pocketService', ['$http', function ($http) {
    var url = 'http://localhost:5000/api/pocketController';

    this.returnPocketResults = function() {
      return $http({
        method: 'GET',
        url: url,
      }).then(function(response) {

        var data = response.data;
        var pocketList = response.data.list;

        pocketJsonArray = [];

        angular.forEach(pocketList, function(value){
          item = {};
          var given_url = value.given_url;
          var resolved_title = value.resolved_title;
          var excerpt = value.excerpt;

          item['given_url'] = given_url;
          item['resolved_title'] = resolved_title;
          item['excerpt'] = excerpt;

          pocketJsonArray.push(item);
        });

        var pocketResult = pocketJsonArray.slice(-10);

        return pocketResult;

      }, function(response) {

      });
    }
}]);
