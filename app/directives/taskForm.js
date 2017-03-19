kanban.directive('taskForm', function() {

        return {
            restrict: 'E',
            templateUrl: './app/directives/taskForm.html',
            controller: 'taskCtrl',
            controllerAs: 'taskCtrl',
            bindToController: true,
            scope: {
                addListFn: '&',
                index: '=',
                status: '@'
            }
        }
    })
    .controller('taskCtrl', function() {
        var vm = this;
        vm.priorities = [1, 2, 3, 4, 5];

        vm.addList = function() {
            vm.addListFn({ status: vm.status });
        }

    })