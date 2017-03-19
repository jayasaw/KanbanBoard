var kanban = angular.module('kanban', []);
kanban.controller('myCtrl', function(dataService) {
    var vm = this;
    vm.submitted = false;

    vm.listData = dataService.getDataFromSBI()

    vm.taskList = dataService.getDataFromIci();

    vm.priorities = [1, 2, 3, 4, 5];

    vm.menuData = function(listName) {

        var newList = vm.listData.map(function(item) {

            if (item.name !== listName) {
                return item;
            }
        })

        return newList;
    }

    vm.addList = function() {
        if (vm.listName !== '' && vm.listName !== undefined) {
            dataService.addNewList(vm.listName);
            vm.submitted = false;
        } else {
            vm.submitted = true;
        }

    }
    vm.editList = function(index) {
        dataService.editListName(index);
    }

    vm.addTask = function(status) {
        var dueDate = new Date(vm.dueDate).toDateString()
        dataService.addNewTask(vm.taskName, dueDate, vm.priority, status);
    }
    vm.moveTo = function(_moveToList, index) {

        dataService.updatetask(_moveToList, index);
        console.log(_moveToList, index);
    }
    vm.removeTask = function(index) {
        dataService.removeTaskList(index)
    }


})