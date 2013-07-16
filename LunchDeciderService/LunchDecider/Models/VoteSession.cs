namespace LunchDecider.Models
{
    using System.Collections.Generic;
    using System.Linq;

    public class VoteSession
    {
        public string Name { get; set; }
        public IEnumerable<VoteOption> VoteOptions { get; set; }

        public void AddVote(Restaurant restaurant)
        {
            //TODO:handle error for invalid restaurant
            var matchingVote = VoteOptions.SingleOrDefault(x => x.Restaurant.Equals(restaurant));
            if (matchingVote != null)
            {
                matchingVote.IncrementVote();
            }
        }
    }

    public class VoteOption
    {
        public Restaurant Restaurant { get; set; }
        public int Count { get; set; }

        public void IncrementVote()
        {
            Count++;
        }
    }
}
