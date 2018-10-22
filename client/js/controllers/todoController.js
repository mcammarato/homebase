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
        console.log($scope.allTodos)              
      })   
    }

    // Delete Todo

    $scope.deleteTodo = function(){
      $http.post()
    }


    $scope.toDos = [
      //{'title': 'first task', 'done': false}
    ]; 

  // Add new todo
  $scope.addTodo = function(){
    $scope.toDos.push({'title': $scope.newTodo, 'done': $scope.done})
    
    $scope.newTodo = '';

    var addedToto = $scope.toDos;

    var addedToDoJson = angular.toJson(addedToto);
    
    var todo = $scope.toDos

    $http.post('/api/todo', addedToDoJson).then(function (response) {

      if (response.data) {

        console.log('log ' + response.data);

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
 
  // clear todos  
  // $scope.clearCompleted = function(){
  //    $scope.toDos = $scope.toDos.filter(function(item){
  //     return !item.done
  //    });
  // }
}])
