lunchDecider.controller('RestaurantController', ['$scope', 'VoteSessionsService', '$location', function ($scope, VoteSessionsService, $location) {
    window.scope = $scope;
    var voteSessionName = $location.search().voteSession;
    $scope.voteSessionName = voteSessionName;
    VoteSessionsService.get({ name: voteSessionName }, function (voteSession) {
        $scope.restaurants = _.map(voteSession.VoteOptions, function(voteOption) {
             return voteOption.Restaurant;
        });
        $scope.voteOptions = voteSession.VoteOptions;
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
        var matchingVoteSession = _.findWhere($scope.voteSessions, { Name: newVoteSession.Name });
        if (_.isUndefined(matchingVoteSession)) {
            $scope.voteSessions.push(newVoteSession);
            VoteSessionsService.save(newVoteSession,
                function(success) {
                    if (console) {
                        console.log('successfully saved vote session');
                    }
                }, function(error) {
                    //todo: fancy animation to show removal
                    $scope.voteSessions.pop(); //rollback the add
                    if (console) {
                        console.log('failed to save vote session');
                    }
                });
            //todo: wipe input from textbox
            //todo: set focus to input
        }
    };
}]);