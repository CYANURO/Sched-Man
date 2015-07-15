(function(){

    'use strict';

    angular
        .module("schedClient")
        .controller("LoginCtrl",
                    [ctrl]);

    function ctrl() {
        
        var vm = this,
            _password = 123;



        vm.userName = '';
        vm.password = '';

        vm.signIn = function(){

            // login service
            

        };

    }

}());