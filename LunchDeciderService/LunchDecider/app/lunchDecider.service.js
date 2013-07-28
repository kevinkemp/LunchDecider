lunchDecider.factory("RestaurantsService", function ($resource) {
    return $resource(
        "/api/Restaurants/:Id",
        { Id: "@Id" },
        { "update": { method: "PUT" } }
   );
});


lunchDecider.factory("VoteSessionsService", function ($resource) {
    return $resource(
        "/api/VoteSessions/:Id",
        { Id: "@voteSessionId" },
        { "update": { method: "PUT", params: { voteSessionId: "@Id" } } }
   );
});