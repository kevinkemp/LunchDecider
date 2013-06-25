lunchDecider.controller('RestaurantController', ['$scope', 'RestaurantsService', function ($scope, RestaurantsService) {
    $scope.restaurants = RestaurantsService.query();
}]);