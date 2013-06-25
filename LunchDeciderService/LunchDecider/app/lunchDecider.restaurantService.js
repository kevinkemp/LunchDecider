lunchDecider.factory("RestaurantsService", function ($resource) {
    return $resource(
        "/api/Restaurants/:Id",
        { Id: "@Id" },
        { "update": { method: "PUT" } }
   );
});