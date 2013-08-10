lunchDecider.factory("voteSessionsService", ['$resource', '$log', function ($resource, $log) {
    var voteSessionsApi = $resource(
        "/api/VoteSessions/:Id",
        { Id: "@voteSessionId" },
        { "update": { method: "PUT", params: { voteSessionId: "@Id" } } }
    );
    var result = {};
    result.getVoteSessions = function(success, error) {
        return voteSessionsApi.query(function() {
            if (success) success();
            $log.info('fetched all vote sessions!');
        });
    };
    result.getVoteSession = function(params, success) {
        return voteSessionsApi.get(params, function() {
            if (success) success();
            $log.info('fetched vote session!');
        });
    };
    result.vote = function(params, restaurant, success) {
        return voteSessionsApi.update(params, restaurant, function() {
            if (success) success();
            $log.info('updated restaurant vote count!');
        });
    };
    result.createVoteSession = function (newVoteSession, success, error) {
        return voteSessionsApi.save(newVoteSession,
            function(foo) {
                if (success) success();
                $log.info("saved vote session!");
            },
            function (foo) {
                if (error) error();
                $log.info('failed to save vote session!');
            });
    };
    return result;
}]);