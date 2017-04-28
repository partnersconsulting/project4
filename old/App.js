angular.module('App', [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
        'ngAnimate',
        "ngRoute",
        "ngResource",
        'ui.bootstrap',
        'ngCsv',
        'chart.js'
]).config(function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'HomeController'
        })
        .when('/cadastro_pedido', {
            templateUrl: 'view/pedido.html',
            controller: 'PedidosController'
        })
        .when('/cadastro_plano', {
            templateUrl: 'view/plano.html',
            controller: 'PlanoController'
        })


    .otherwise({ redirectTo: 'home' });

});
