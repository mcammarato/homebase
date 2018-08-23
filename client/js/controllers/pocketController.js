app.controller('pocketCtrl', function($scope, $http){
  var url = 'http://localhost:5000/api/pocketController';
  $http({
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
    $scope.pocketResult = pocketResult;

  }, function(response) {

  });
});
