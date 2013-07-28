using System;
using System.Collections.Generic;
using LunchDecider.Controllers;
using LunchDecider.Models;

namespace LunchDecider.Data {
    public class Restaurants : StrongEnum<Restaurant> {
        static readonly Random Random = new Random();
        static double GetDistance() {
            return Random.NextDouble() * 10;
        }
        public static IEnumerable<Restaurant> All {
            get {
                return All(typeof(Restaurants));
            }
        }
        public static readonly Restaurant McDonalds = new Restaurant
        {
            Name = RestaurantOptions.McDonalds,
            Distance = GetDistance()
        };

        public static readonly Restaurant BurgerKing = new Restaurant
        {
            Name = RestaurantOptions.BurgerKing,
            Distance = GetDistance()
        };
        public static readonly Restaurant Lennys = new Restaurant
        {
            Name = RestaurantOptions.Lennys,
            Distance = GetDistance()
        };
        public static readonly Restaurant PandaExpress = new Restaurant
        {
            Name = RestaurantOptions.PandaExpress,
            Distance = GetDistance()
        };
        public static readonly Restaurant ButcherShop = new Restaurant
        {
            Name = RestaurantOptions.ButcherShop,
            Distance = GetDistance()
        };
        public static readonly Restaurant Moes = new Restaurant
        {
            Name = RestaurantOptions.Moes,
            Distance = GetDistance()
        };
        public static readonly Restaurant NewChina = new Restaurant
        {
            Name = RestaurantOptions.NewChina,
            Distance = GetDistance()
        };
        
    }
}