(function () {
    'use strict';

    var app = angular.module('SampleApp', ['materialAvatar', 'ngMaterial']);

    app.controller('MainController', function ($scope) {

        $scope.name = "Gowrisankar Anandhan";
    });
} ());
