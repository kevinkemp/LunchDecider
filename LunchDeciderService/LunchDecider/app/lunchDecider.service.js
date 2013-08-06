lunchDecider.factory("RestaurantsService", function ($resource) {
    return $resource(
        "/api/Restaurants/:Id",
        { Id: "@Id" },
        { "update": { method: "PUT" } }
   );
});


lunchDecider.factory("voteSessionsApi", function ($resource) {
    return $resource(
        "/api/VoteSessions/:Id",
        { Id: "@voteSessionId" },
        { "update": { method: "PUT", params: { voteSessionId: "@Id" } } }
   );
});

lunchDecider.factory("voteSessionsService", ['voteSessionsApi', function (voteSessionsApi) {
    var result = {};
    result.createVoteSession = function (newVoteSession, success, error) {
        voteSessionsApi.save(newVoteSession,
            function(foo) {
                success();
                if (console) {
                    console.log('success!');
                }
            },
            function (foo) {
                error();
                if (console) {
                    console.log('error!');
                }
            });
    };
    return result;
}]);