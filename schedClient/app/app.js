(function(){

    'use strict';

    var app = angular.module("schedClient", ["ui.router", "ui.calendar"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/views/home2.html",
                    controller: "AdminCtrl as vm"
                })
                // Products
                .state("register", {
                    url: "/register",
                    templateUrl: "app/views/register.html",
                    controller: "RegisterCtrl as vm"
                })
                .state("login", {
                    url: "/login",
                    templateUrl: "app/views/login.html",
                    controller: "LoginCtrl as vm"
                })

        }]
    );

}());