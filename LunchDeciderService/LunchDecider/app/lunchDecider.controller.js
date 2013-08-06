lunchDecider.controller('RestaurantController', ['$scope', 'voteSessionsApi', '$location', function ($scope, voteSessionsApi, $location) {
    window.scope = $scope;
    var voteSessionName = $location.search().voteSession;
    $scope.voteSessionName = voteSessionName;
    voteSessionsApi.get({ name: voteSessionName }, function (voteSession) {
        $scope.restaurants = _.map(voteSession.VoteOptions, function(voteOption) {
             return voteOption.Restaurant;
        });
        $scope.voteOptions = voteSession.VoteOptions;
    });
    
    $scope.vote = function() {
        _.each($scope.restaurants, function(restaurant) {
            if (restaurant.isSelected) {
                voteSessionsApi.update({ voteSessionId: voteSessionName }, restaurant);
                window.location = "/#/voteSessionResultsList?voteSession=" + voteSessionName;
            }
        });
    };
}]);

lunchDecider.controller('VoteSessionsController', ['$scope', 'voteSessionsService', 'voteSessionsApi', '$location', function ($scope, voteSessionsService, voteSessionsApi, $location) {
    window.scope = $scope;
    $scope.testValue = voteSessionsService.testValue;
    $scope.voteSessions = voteSessionsApi.query();
    $scope.voteSessionFilter = function (voteSession) {
        var voteSessionQueryStringParameter = $location.search().voteSession;
        if (!_.isUndefined(voteSessionQueryStringParameter)) {
            return voteSession.Name == voteSessionQueryStringParameter;
        }
        return true;
    };
    $scope.createVoteSession = function () {
        var newVoteSession = { Name: $scope.newVoteSessionName };
        var matchingVoteSession = _.findWhere($scope.voteSessions, { Name: newVoteSession.Name });
        if (_.isUndefined(matchingVoteSession)) {
            var success = function(success) {
                $scope.voteSessions.push(newVoteSession);
            };
            var error = function(error) {
                toastr.error(error.data);
            };
            voteSessionsService.createVoteSession(newVoteSession, success, error);
            $('#newVoteSessionNameInput').focus();
        }
        else {
            toastr.error("Vote session with name " + newVoteSession.Name + " already exists");
        }
        $('#newVoteSessionNameInput').val('');
    };
}]);