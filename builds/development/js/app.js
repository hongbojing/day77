angular
    .module('myApp', [])
    .controller('myController', myController)
    .directive('myDirective', myDirective);

function myController(){
    var vm = this;
    vm.days = ['M', 'T', 'W', 'T', 'F', 'S'];
    vm.periods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

function myDirective(){
    return {
        redirect:'EA',
        templateUrl:'/partials/test-page.html',
        controller:'myController',
        controllerAs:'myCtrl'
    };
}