using System.Collections.Generic;
using LunchDecider.Models;

namespace LunchDecider.Data {
    public static class VoteOptions {
        public static IEnumerable<VoteOption> All() {
            var result = new List<VoteOption>();
            foreach (var restaurant in Restaurants.All) {
                result.Add(new VoteOption
                {
                    Count = 0,
                    Restaurant = restaurant
                });
            }
            return result;
        }
    }
}