using LunchDecider.Data;

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
                                                                         VoteOptions = VoteOptions.All()
                                                                     },
                                                                 new VoteSession
                                                                     {
                                                                         Name = "Team2",
                                                                         VoteOptions = VoteOptions.All()
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
        public static readonly string McDonalds = "McDonalds";
        public static readonly string BurgerKing = "Burger King";
        public static readonly string Lennys = "Lenny's Sub Shop";
        public static readonly string PandaExpress = "Panda Express";
        public static readonly string Moes = "Moe's Southwest Grill";
        public static readonly string ButcherShop = "The Butcher Shop";
        public static readonly string NewChina = "New China";
    }
}