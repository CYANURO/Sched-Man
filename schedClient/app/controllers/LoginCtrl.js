(function(){

    'use strict';

    angular
        .module("schedClient")
        .controller("LoginCtrl", ['LoginService', ctrl]);

    function ctrl() {
        
        var vm = this,
            _password = 123;



        vm.userName = '';
        vm.password = '';

        vm.userNameFieldMsg = 'Enter email';
        vm.passwordFieldMsg = 'Enter password';

        vm.login = function(){

            // var user = LoginService.GetUser(vm.userName, vm.password);
            
            if(user !== null) {

                console.log("Successful Login");
            }
            else {

                console.log("Falied login");
            }
            

        };

        return vm;

    }

}());