(function(){

    'use strict';

    angular
        .module("schedClient")
        .controller("AdminCtrl",
                    ['$scope', 'uiCalendarConfig', ctrl]);

    function ctrl($scope, uiCalendarConfig) {

        var vm = this;

        // Temporary data
        vm.Employees = [

            {
                _id : "e0",
                FullName : "Whytee D'ville",
                Email : "elPingo@gamil.com",
                Phone : "8019186776",
                ImgUrl : "https://s3.amazonaws.com/uifaces/faces/twitter/dustinlamont/128.jpg",
                Shifts : [

                    {
                        _id : "e0s0",
                        TimeIn : new Date(2015, 5, 12, 1, 30),
                        TimeOut : new Date(2015, 5, 12, 3, 30),
                        AssignedBy : "mgmt",
                        AssignedTo : "e0",
                        Status : "OK"
                    },
                    {
                        _id : "e0s1",
                        TimeIn : new Date(2015, 5, 14, 10, 30),
                        TimeOut : new Date(2015, 5, 14, 12, 0),
                        AssignedBy : "mgmt",
                        AssignedTo : "e0",
                        Status : "OK"
                    },
                    {
                        _id : "e0s2",
                        TimeIn : new Date(2015, 5, 18, 16, 20),
                        TimeOut : new Date(2015, 5, 18, 18, 30),
                        AssignedBy : "mgmt",
                        AssignedTo : "e0",
                        Status : "OK"
                    }
                ]
            },
            {
                _id : "e1",
                FullName : "Slum Dogg",
                Email : "gambino@gamil.com",
                Phone : "8019199776",
                ImgUrl : "https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg",
                Shifts : [

                    {
                        _id : "e1e2s0",
                        TimeIn : new Date(2015, 5, 22, 8, 30),
                        TimeOut : new Date(2015, 5, 22, 10, 30),
                        AssignedBy : "mgmt",
                        AssignedTo : "e1",
                        Status : "OK"
                    },
                    {
                        _id : "e1e2s1",
                        TimeIn : new Date(2015, 5, 24, 10, 30),
                        TimeOut : new Date(2015, 5, 24, 12, 0),
                        AssignedBy : "mgmt",
                        AssignedTo : "e1",
                        Status : "OK"
                    },
                    {
                        _id : "e1e2s2",
                        TimeIn : new Date(2015, 5, 28, 16, 20),
                        TimeOut : new Date(2015, 5, 28, 18, 30),
                        AssignedBy : "mgmt",
                        AssignedTo : "e1",
                        Status : "OK"
                    }
                ]
            },
            {
                _id : "e2",
                FullName : "Maria Cobadonga",
                Email : "megan@gamil.com",
                Phone : "8019155776",
                ImgUrl : "https://s3.amazonaws.com/uifaces/faces/twitter/annapickard/128.jpg",
                Shifts : [

                    {
                        _id : "e2e2s0",
                        TimeIn : new Date(2015, 5, 2, 8, 30),
                        TimeOut : new Date(2015, 5, 2, 10, 30),
                        AssignedBy : "mgmt",
                        AssignedTo : "e1",
                        Status : "OK"
                    },
                    {
                        _id : "e2e2s1",
                        TimeIn : new Date(2015, 5, 4, 10, 30),
                        TimeOut : new Date(2015, 5, 4, 12, 0),
                        AssignedBy : "mgmt",
                        AssignedTo : "e1",
                        Status : "OK"
                    },
                    {
                        _id : "e2e2s2",
                        TimeIn : new Date(2015, 5, 8, 16, 20),
                        TimeOut : new Date(2015, 5, 8, 18, 30),
                        AssignedBy : "mgmt",
                        AssignedTo : "e1",
                        Status : "OK"
                    }
                ]
            }
        ];


        ///////////////////////////////////////////////////////////////////////////////

        vm.ActiveEmployee = vm.Employees[0];

        vm.EmployeeClick = function(index) {

            vm.ActiveEmployee = vm.Employees[index];

            highlightActiveEmployeeEvents(index);

            // uiCalendarConfig.calendars.schedCalendar('render');

        };


        function highlightActiveEmployeeEvents(index) {

            var newEvents = [];

            for(var evntIndex = 0; evntIndex < vm.Events[0].length; ++evntIndex) {

                var newEvent = {

                    id: vm.Events[0][evntIndex].id,
                    title: vm.Events[0][evntIndex].title,
                    start: vm.Events[0][evntIndex].start,
                    end : vm.Events[0][evntIndex].end,
                    editable: true
                };

                // Add the orange color to the events corresponding to the selected user.
                if(vm.Events[0][evntIndex].title === vm.Employees[index].FullName) {

                    newEvent.color = '#FFA500';               
                }
                
                newEvents.push(newEvent);
            }

            // replace the old events with the new one.
            vm.Events[0] = newEvents;
        }

        ///////////////////////////////////////// CAL ///////////////////////////////////////

        vm.CalendarConfig = {
            height : 450,
            editable: true,
            header : {

                left : 'month agendaWeek agendaDay',
                center : 'title',
                right : 'today prev,next'
            },
            defaultView : 'agendaDay',
            businessHours : true,
            dayClick : dayClick

        };


        function dayClick(date) {
           uiCalendarConfig.calendars.schedCalendar.fullCalendar('changeView', 'agendaDay');
           uiCalendarConfig.calendars.schedCalendar.fullCalendar('gotoDate', date);
        }


        var events = [];

        vm.Employees.forEach(function(employee, index, array){

            employee.Shifts.forEach(function(shift, index, array){

                events.push({
                    id: shift._id,
                    title: employee.FullName,
                    start: shift.TimeIn,
                    end : shift.TimeOut,
                    editable: true

                });
            });

        });

        vm.Events = [];
        vm.Events.push(events);

        return vm;
    }
    
}());