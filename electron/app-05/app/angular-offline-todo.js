(function () {
  'use strict';

  angular.module('todoApp', [])
    .controller('todoListController', [TodoListController]);

  function TodoListController() {
    var todoList = this;

    todoList.todos = [];
    var low = require('lowdb');
    var storage = require('lowdb/file-sync');
    todoList.db = low('app-05/app/db.json', { storage });

    getAllTodos();
 
    todoList.addTodo = function() {
      var varid = todoList.db('todos').size();
      while(todoList.db('todos').find({ id: varid })) { varid += 1; }

      var data = { id: varid, text: todoList.todoText, done:false};
      todoList.db('todos').push(data);

      todoList.todos.push(data);
      todoList.todoText = '';
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

    todoList.updDone = function(idx){ 
      var data = todoList.db('todos')
                         .chain()
                         .find({ id: todoList.todos[idx].id })
                         .assign({ done: todoList.todos[idx].done})
                         .value();
      //data.done = todoList.todos[idx].done;
    };

    function getAllTodos() {
      todoList.todos = todoList.db('todos').cloneDeep();
    };
  }

})();