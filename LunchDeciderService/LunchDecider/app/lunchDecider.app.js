window.lunchDecider = angular.module('lunchDecider', ['ngResource']);

lunchDecider.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    "use strict";
    $routeProvider.
        when('/', { templateUrl: 'app/voteSessions.view.html', controller:'VoteSessionsController'}).
        when('/selectRestaurant', { templateUrl: 'app/selectRestaurant.view.html', controller: 'RestaurantController' }).
        when('/restaurantDetails', { templateUrl: 'app/restaurantDetails.view.html' }).
        otherwise({ redirectTo: '/voteSessions' });
    $locationProvider.html5Mode(true);
}]);