app.controller('pocketCtrl', function($scope, $http){
  var url = 'http://localhost:5000/api/pocketController';
  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var data = response.data;

    $scope.res = response.data;

  }, function(response) {
    console.log(response.statusText);
  });
});
