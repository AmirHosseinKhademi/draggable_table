'use strict';

angular.module('myApp', [
    angularDragula(angular)
])

    .controller('MainCtrl', function ($scope, dragulaService) {

        // Variable Initialization
        $scope.right_table_items = [];
        $scope.left_table_items = [];


        // Filling Tables with Dummy Data for Demo
        $scope.right_table_items = [
            {
                id: 1,
                name: 'محمد جواد مسعودی',
                email: 'masoodi@gmail.com',
                age: 23,
                alive: true
            },
            {
                id: 2,
                name: 'زهرا طاهری',
                email: 'taheri@gmail.com',
                age: 24,
                alive: true
            },
            {
                id: 3,
                name: 'محمد عابدی',
                email: 'abedi@gmail.com',
                age: 56,
                alive: false
            },
            {
                id: 4,
                name: 'محمدرضا کلگار',
                email: 'golkar@gmail.com',
                age: 30,
                alive: true
            },
            {
                id: 5,
                name: 'ساره عیسایی',
                email: 'eesayii@gmail.com',
                age: 18,
                alive: true
            },
            {
                id: 6,
                name: 'کامران نصیری',
                email: 'nasiri@gmail.com',
                age: 65,
                alive: false
            }
        ];


        $scope.left_table_items = [
            {
                id: 1,
                name: 'هادی پیرحاجی',
                email: 'pirhaji@gmail.com',
                age: 25,
                alive: true
            }
        ];


        dragulaService.options($scope, 'drag-holder', {
            moves: function (el, source, handle, sibling) {
                return $(el).is('.positive');
            }
        });
    });
