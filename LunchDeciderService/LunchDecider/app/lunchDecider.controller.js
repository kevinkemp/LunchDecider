lunchDecider.controller('RestaurantController', ['$scope', 'RestaurantsService', function ($scope, RestaurantsService) {
    $scope.restaurants = RestaurantsService.query();
    $scope.vote = function() {
        _.each($scope.restaurants, function(restaurant) {
            if (restaurant.isSelected) {
                RestaurantsService.save(restaurant);
            }
        });
    };
}]);