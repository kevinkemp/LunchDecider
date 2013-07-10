namespace LunchDecider.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;

    using LunchDecider.Models;

    public class VoteSessionsController : ApiController
    {
        readonly IEnumerable<VoteSession> voteSessions = new List<VoteSession>
                                                             {
                                                                 new VoteSession
                                                                     {
                                                                         Name = "Team 1",
                                                                         Votes = new List<Vote> {
                                                                             new Vote{Restaurant = new Restaurant {Name = RestaurantOptions.McDonalds}},
                                                                             new Vote {Restaurant = new Restaurant {Name = RestaurantOptions.BurgerKing}}
                                                                         }
                                                                     },
                                                                 new VoteSession
                                                                     {
                                                                         Name = "Team 2",
                                                                         Votes = new List<Vote> {
                                                                             new Vote{Restaurant = new Restaurant {Name = RestaurantOptions.McDonalds}},
                                                                             new Vote {Restaurant = new Restaurant {Name = RestaurantOptions.BurgerKing}
                                                                         }
                                                                     }
                                                                 }
                                                             };
        // GET api/restaurants
        public IEnumerable<VoteSession> Get()
        {
            return this.voteSessions;
        }

        // GET api/values/5
        public VoteSession Get(string Name)
        {
            return this.voteSessions.SingleOrDefault(x => x.Name.Equals(Name));
        }

        // POST api/values
        public void Post(string name, [FromBody]Restaurant value)
        {
            var matchingVoteSession = this.voteSessions.FirstOrDefault(x => x.Name == value.Name);
            matchingVoteSession.AddVote(value);
        }

        // PUT api/values/5
        public void Put(string Id, [FromBody]Restaurant restaurant)
        {
            var matchingVoteSession = this.voteSessions.FirstOrDefault(x => x.Name == Id);
            matchingVoteSession.AddVote(restaurant);
            
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }

    public class RestaurantOptions
    {
        public static string McDonalds = "McDonalds";
        public static string BurgerKing = "Burger King";
    }
}