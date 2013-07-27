var scope;

lunchDecider.controller('RestaurantController', ['$scope', 'VoteSessionsService', '$location', function ($scope, VoteSessionsService, $location) {
    var voteSessionName = $location.search().voteSession;
    $scope.voteSessionName = voteSessionName;
    scope = $scope;
    VoteSessionsService.get({ Name: voteSessionName }, function (voteSession) {
        $scope.restaurants = _.map(voteSession.voteOptions, function (voteOption) { return voteOption.restaurant; });
        $scope.voteOptions = voteSession.voteOptions;
    });
    
    $scope.vote = function() {
        _.each($scope.restaurants, function(restaurant) {
            if (restaurant.isSelected) {
                VoteSessionsService.update({ voteSessionId: voteSessionName }, restaurant);
                window.location = "/#/voteSessionDetails?voteSession=" + voteSessionName;
            }
        });
    };
}]);

lunchDecider.controller('VoteSessionsController', ['$scope', 'VoteSessionsService', function ($scope, VoteSessionsService) {
    $scope.voteSessions = VoteSessionsService.query();
    //$scope.addVoteSession = function (name) {
    //    VoteSessionsService.update({ Name: name, Restaurant:  });
    //};
}]);