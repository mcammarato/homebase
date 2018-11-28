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
      })   
    }

    // Delete Todo
    $scope.deleteTodo = function(todoId){
      
      var deletedTodoId = todoId

      var data = {id: todoId};

      // Send todo id to be delted by server
      $http.post('/api/deleteTodo', data).then(function(response){

        // On success, reload list with updated todos
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
        // On success, reload list with updated todos
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
