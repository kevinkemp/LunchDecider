using System;
using LunchDecider.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using LunchDecider.Models;

namespace LunchDecider.Controllers
{
    public class VoteSessionsController : ApiController
    {
        static readonly List<VoteSession> VoteSessions = new List<VoteSession>();

        public IEnumerable<VoteSession> Get()
        {
            return VoteSessions;
        }

        public VoteSession Get(string name)
        {
            return VoteSessions.SingleOrDefault(x => x.Name.Equals(name));
        }

        public void Post([FromBody]VoteSession voteSession) {
            if (VoteSessions.All(x => x.Name != voteSession.Name)) {
                voteSession.VoteOptions = VoteOptions.All();
                VoteSessions.Add(voteSession);
            } else {
                throw new Exception("Vote session with that name already exists");
            }
        }

        public void Put(string voteSessionId, [FromBody]Restaurant restaurant)
        {
            var matchingVoteSession = VoteSessions.FirstOrDefault(x => x.Name == voteSessionId);
            if (matchingVoteSession != null) {
                matchingVoteSession.AddVote(restaurant);
            }
        }

        public void Delete(int id)
        {
        }
    }
}