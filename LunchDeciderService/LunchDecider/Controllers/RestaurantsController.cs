using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace LunchDecider.Controllers {
    public class RestaurantsController : ApiController {
        readonly IEnumerable<Restaurant> Restaurants = new List<Restaurant>
        {
            new Restaurant
            {
                Name = "McDonalds",
                Distance = 3.2
            },
            new Restaurant
            {
                Name = "Burger King",
                Distance = 1.8
            }
        };
        // GET api/restaurants
        public IEnumerable<Restaurant> Get() {
            return Restaurants;
        }

        // GET api/values/5
        public string Get(int id) {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]Restaurant value) {
            var matchingRestaurant = Restaurants.FirstOrDefault(x => x.Name == value.Name);

        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Restaurant value) {
        }

        // DELETE api/values/5
        public void Delete(int id) {
        }
    }

    public class Restaurant {
        public string Name { get; set; }
        public double Distance { get; set; }
    }
}