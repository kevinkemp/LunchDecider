﻿lunchDecider.controller('LayoutController', ['$scope', function($scope) {
    $scope.demoLayout = {
        headerUrl: '/app/layouts/demo/header.html',
        footerUrl: '/app/layouts/demo/footer.html'
    };
}]);

lunchDecider.controller('RestaurantController', ['$scope', 'voteSessionsService', '$location', function ($scope, voteSessionsService, $location) {
    window.scope = $scope;//for debugging
    
    $scope.voteSessionName = $location.search().voteSession;

    var voteSession = voteSessionsService.getVoteSession({ name: $scope.voteSessionName }, function () {
        $scope.restaurants = _.map(voteSession.VoteOptions, function (voteOption) {
            return voteOption.Restaurant;
        });
        $scope.selectedRestaurant = '';
    });
    
    $scope.vote = function () {
        var selectedRestaurant = _.findWhere($scope.restaurants, { Name: $scope.selectedRestaurant });
        voteSessionsService.vote({ voteSessionId: $scope.voteSessionName }, selectedRestaurant, function () {
            $location.path('/voteSessionResultsList').search({ voteSession: $scope.voteSessionName });
        });
    };
}]);

lunchDecider.controller('VoteSessionsController', ['$scope', 'voteSessionsService', '$location', function ($scope, voteSessionsService, $location) {
    window.scope = $scope;//for debugging

    $scope.voteSessions = voteSessionsService.getVoteSessions(function () {
        $scope.createVoteSession = function () {
            var newVoteSession = { Name: $scope.newVoteSessionName };
            var matchingVoteSession = _.findWhere($scope.voteSessions, { Name: newVoteSession.Name });
            if (_.isUndefined(matchingVoteSession)) {
                var success = function () {
                    $scope.voteSessions.push(newVoteSession);
                };
                var error = function () {
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
    });
    
    $scope.voteSessionFilter = function (voteSession) {
        var voteSessionQueryStringParameter = $location.search().voteSession;
        if (!_.isUndefined(voteSessionQueryStringParameter)) {
            return voteSession.Name == voteSessionQueryStringParameter;
        }
        return true;
    };
}]);