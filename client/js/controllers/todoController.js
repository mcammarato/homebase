app.controller('todoController', ['$scope', '$http', function($scope, $http){
  $scope.toDos = [
    //{'title': 'first task', 'done': false}
  ];

  $scope.addTodo = function(){
    $scope.toDos.push({'title': $scope.newTodo, 'done': false})
    $scope.newTodo = '';

    var listOfTodos = $scope.toDos;
    var listOfTodosJson = angular.toJson(listOfTodos);
    console.log(listOfTodosJson);

    var todo = $scope.toDos

    $http.post('/api/todo', listOfTodosJson).then(function (response) {
      console.log(response);
      if (response.data)
        $scope.msg = "Post Data Submitted Successfully!";
      }, function (response) {

      $scope.msg = "Service not Exists";
      $scope.statusval = response.status;
      $scope.statustext = response.statusText;
      $scope.headers = response.headers();
    });

  }
  $scope.clearCompleted = function(){
     $scope.toDos = $scope.toDos.filter(function(item) {
      return !item.done
     });
  }
}])
