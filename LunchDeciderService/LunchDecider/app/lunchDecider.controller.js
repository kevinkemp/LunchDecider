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
        var newVoteSession = { Name: $scope.newVoteSessionName };
        $scope.voteSessions.push({ name: newVoteSession.Name });
        VoteSessionsService.save(newVoteSession,
        function (success) {
            if (console) {
                console.log('successfully saved vote session');
            }
        }, function (error) {
            $scope.voteSessions.pop();
            if (console) {
                console.log('failed to save vote session');
            }
        });
    };
}]);