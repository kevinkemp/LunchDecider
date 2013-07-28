lunchDecider.controller('RestaurantController', ['$scope', 'VoteSessionsService', '$location', function ($scope, VoteSessionsService, $location) {
    window.scope = $scope;
    var voteSessionName = $location.search().voteSession;
    $scope.voteSessionName = voteSessionName;
    VoteSessionsService.get({ name: voteSessionName }, function (voteSession) {
        $scope.restaurants = _.map(voteSession.voteOptions, function(voteOption) {
             return voteOption.restaurant;
        });
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
    window.scope = $scope;
    $scope.voteSessions = VoteSessionsService.query();
    $scope.createVoteSession = function () {
        VoteSessionsService.save({ Name: $scope.newVoteSessionName });
        $scope.voteSessions.push({ name: $scope.newVoteSessionName });
    };
}]);