window.lunchDecider = angular.module('lunchDecider', []);

lunchDecider.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', { templateUrl: 'app/selectRestaurant.view.html', controller: 'RestaurantController' }).
        otherwise({ redirectTo: '/' });
}]);