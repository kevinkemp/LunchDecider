var scope;
var voteSessionObj;

lunchDecider.controller('RestaurantController', ['$scope', 'VoteSessionsService', '$location', function ($scope, VoteSessionsService, $location) {
    "use strict";
    var voteSessionName = $location.search().voteSession;
    VoteSessionsService.get({ Name: voteSessionName }, function (voteSession) {
        voteSessionObj = voteSession;
        $scope.restaurants = _.map(voteSession.votes, function (vote) { return vote.restaurant; });
    });
    
    $scope.vote = function() {
        _.each($scope.restaurants, function(restaurant) {
            if (restaurant.isSelected) {
                VoteSessionsService.update({ Id: voteSessionName },restaurant);
                //, Restaurant: restaurant});
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