app.controller('pocketCtrl', ['pocketService', '$scope', function (pocketService, $scope){

  $scope.pocketResult = pocketService.returnPocketResults();

  var pocketPromise = pocketService.returnPocketResults();
  var pocketResult = '';
  pocketPromise.then(function(data){
    $scope.pocketResult = data;
  })
}]);
