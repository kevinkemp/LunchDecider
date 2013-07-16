namespace LunchDecider.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;
    using Models;

    public class VoteSessionsController : ApiController
    {
        static readonly IEnumerable<VoteSession> voteSessions = new List<VoteSession>
                                                             {
                                                                 new VoteSession
                                                                     {
                                                                         Name = "Team1",
                                                                         VoteOptions = new List<VoteOption> {
                                                                             new VoteOption {Restaurant = new Restaurant {Name = RestaurantOptions.McDonalds,
                                                                                                                    Distance = 4.2}},
                                                                             new VoteOption {Restaurant = new Restaurant {Name = RestaurantOptions.BurgerKing,
                                                                                                                    Distance = 5.7}}
                                                                         }
                                                                     },
                                                                 new VoteSession
                                                                     {
                                                                         Name = "Team2",
                                                                         VoteOptions = new List<VoteOption> {
                                                                             new VoteOption {Restaurant = new Restaurant {Name = RestaurantOptions.McDonalds,
                                                                                                                    Distance = 4.2}},
                                                                             new VoteOption {Restaurant = new Restaurant {Name = RestaurantOptions.BurgerKing,
                                                                                                                    Distance = 5.7}}
                                                                     }
                                                                 }
                                                             };
        // GET api/restaurants
        public IEnumerable<VoteSession> Get()
        {
            return voteSessions;
        }

        // GET api/values/5
        public VoteSession Get(string Name)
        {
            return voteSessions.SingleOrDefault(x => x.Name.Equals(Name));
        }

        // POST api/values
        public void Post(string name, [FromBody]Restaurant value)
        {
            
        }

        // PUT api/values/5
        public void Put(string voteSessionId, [FromBody]Restaurant restaurant)
        {
            var matchingVoteSession = voteSessions.FirstOrDefault(x => x.Name == voteSessionId);
            if (matchingVoteSession != null) {
                matchingVoteSession.AddVote(restaurant);
            }
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }

    public static class RestaurantOptions
    {
        public static string McDonalds = "McDonalds";
        public static string BurgerKing = "Burger King";
    }
}