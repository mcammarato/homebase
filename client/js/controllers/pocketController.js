app.controller('pocketCtrl', function($scope, $http){
  var url = 'http://localhost:5000/api/pocketController';
  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var data = response.data;

    // $.each(data.list, function(i){
    //   data.list[i].given_url
    //   $scope.given_url = data.list[i].given_url;
    // });

    $scope.limitNumber = 10;

    $scope.pocketData = response.data.list;


  }, function(response) {
    console.log(response.statusText);
  });
});
