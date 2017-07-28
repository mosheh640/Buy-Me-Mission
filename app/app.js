/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('myApp', []);

app.controller('tasksController', function ($scope, $http) {
    getTask(); // Load all available tasks 
    $scope.tasks = [];
            
    function getTask() {
        $http.post("ajax/getTask.php").success(function (data) {
            $scope.tasks = data;
            
        });
    }
    ;
    $scope.addTask = function (task) {
        $http.post("ajax/addTask.php?task=" + task).success(function (data) {
            getTask();
            $scope.taskInput = "";
        });
    };
      $scope.changeTask = function (task, newText) {
        $http.post("ajax/changeTask.php?taskID=" + task + "&text=" + newText).success(function (data) {
        });
    };
    $scope.deleteTask = function (task) {
        if (confirm("Are you sure to delete this line?")) {
            $http.post("ajax/deleteTask.php?taskID=" + task).success(function (data) {
                getTask();
            });
        }
    };

    $scope.toggleStatus = function (item, status, task) {
        if (status == '2') {
            status = '0';
        } else {
            status = '2';
        }
        $http.post("ajax/updateTask.php?taskID=" + item + "&status=" + status).success(function (data) {
            getTask();
        });
    };
    
    $scope.countUndone = function () {
        var i = 0;
        angular.forEach($scope.tasks, function (val) {
            if (val.STATUS === '0') {
                i++;
            }
        });
        return i;
    };

});
