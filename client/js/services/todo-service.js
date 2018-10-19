/* Todo Service */
app.factory('toDoService', function($resource){
    return $resource('/api/todos')
})
