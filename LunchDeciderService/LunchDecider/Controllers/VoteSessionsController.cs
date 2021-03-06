﻿using LunchDecider.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using LunchDecider.Helpers;
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
            if (VoteSessions.Select(x => x.Name).Contains(voteSession.Name)) {
                RestErrorHandler.ThrowRestException(string.Format("Name ({0}) already exists", voteSession.Name));
            }
            voteSession.VoteOptions = VoteOptions.All();
            VoteSessions.Add(voteSession);
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