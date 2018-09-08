app.controller('pocketCtrl', ['pocketService', '$scope', function (pocketService, $scope){

  $scope.pocketResult = pocketService.returnPocketResults();

  var test = pocketService.returnPocketResults();
  console.log(test);
}]);
