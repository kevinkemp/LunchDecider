window.lunchDecider = angular.module('lunchDecider', ['ngResource']);

lunchDecider.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', { templateUrl: 'app/selectRestaurant.view.html', controller: 'RestaurantController' }).
        otherwise({ redirectTo: '/' });
}]);