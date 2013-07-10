namespace LunchDecider.Models
{
    using System.Collections.Generic;
    using System.Linq;

    public class VoteSession
    {
        public string Name { get; set; }
        public IEnumerable<Vote> Votes { get; set; }

        public void AddVote(Restaurant restaurant)
        {
            //TODO:handle error for invalid restaurant
            var matchingVote = Votes.SingleOrDefault(x => x.Restaurant.Equals(restaurant));
            if (matchingVote != null)
            {
                matchingVote.IncrementVote();
            }
        }
    }

    public class Vote
    {
        public Restaurant Restaurant { get; set; }
        public int Count { get; set; }

        public void IncrementVote()
        {
            Count++;
        }
    }
}
