window.lunchDecider = angular.module('lunchDecider', ['ngResource']);

lunchDecider.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', { templateUrl: 'app/voteSessions.view.html', controller:'VoteSessionsController'}).
        when('/selectRestaurant', { templateUrl: 'app/selectRestaurant.view.html', controller: 'RestaurantController' }).
        when('/voteSessionDetails', { templateUrl: 'app/voteSessionDetails.view.html', controller: 'VoteSessionsController' }).
        when('/voteSessionResultsList', { templateUrl: 'app/voteSessionResultsList.view.html', controller: 'VoteSessionsController' }).
        otherwise({ redirectTo: '/voteSessions' });
    $locationProvider.html5Mode(false);
}]);