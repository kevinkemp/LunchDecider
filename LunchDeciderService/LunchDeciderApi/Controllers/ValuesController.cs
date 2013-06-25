using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LunchDeciderApi.Controllers {
    public class RestaurantsController : ApiController {
        readonly IEnumerable<Restaurant> Restaurants = new List<Restaurant>
        {
            new Restaurant
            {
                Name = "McDonalds"
            },
            new Restaurant
            {
                Name = "Burger King"
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
        public void Post([FromBody]string value) {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/values/5
        public void Delete(int id) {
        }
    }

    public class Restaurant {
        public string Name { get; set; }
    }
}