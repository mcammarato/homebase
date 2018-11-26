app.controller('todoController', ['$scope', 'toDoService', '$http', function($scope, toDoService, $http){

    $scope.loadTodos = function(){
      $scope.todoTest = toDoService.get()
    }


    // Return todos
    $http.get('/api/todos').then(function(response){
      $scope.allTodos = response.data
    })


    //loadTodos
    $scope.loadData = function(){
      $http.get('/api/todos').then(function(response){
        $scope.allTodos = response.data
        //console.log($scope.allTodos)              
      })   
    }

    // Delete Todo
    $scope.deleteTodo = function(todoId){
      
      var deletedTodoId = todoId

      var data = {id: todoId};

      // Does deletedTodoId need to be JSON???
      $http.post('/api/deleteTodo', data).then(function(response){
       
        // Update todos array
        //$scope.allTodos = response.data
        $scope.loadData();
      })
    }


  // Add new todo
  $scope.addTodo = function(){
    $scope.toDos = [
      //{'title': 'first task', 'done': false}
    ]; 
    $scope.toDos.push({'title': $scope.newTodo})
    
    $scope.newTodo = '';
    var addedToto = $scope.toDos;
    var addedToDoJson = angular.toJson(addedToto);    
    var todo = $scope.toDos

    $http.post('/api/todo', addedToDoJson).then(function (response) {

      if (response.data) {

        //console.log('log ' + response.data);

        // Update scope with new todo
         $scope.loadData();

      }

      }, function (response) {

      $scope.msg = "Service not Exists";
      $scope.statusval = response.status;
      $scope.statustext = response.statusText;
      $scope.headers = response.headers();

    })
  }
}])
