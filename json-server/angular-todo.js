angular.module('todoApp', [])
  .controller('TodoListController', [ '$http', function($http) {
    var todoList = this;
    
    todoList.todos = [];

    $http.get('http://localhost:3000/todos')
      .success(function(data) {
        todoList.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    todoList.addTodo = function() {
      $http.post('http://localhost:3000/todos', JSON.stringify({text:todoList.todoText, done:false}))
        .success(function(data) {
          //todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todos.push({text:data.text, done:data.done, id: data.id});
          todoList.todoText = '';
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    todoList.updDone = function(idx){ 
      $http.patch('http://localhost:3000/todos/' + todoList.todos[idx].id, JSON.stringify({done:todoList.todos[idx].done}))
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  }]);