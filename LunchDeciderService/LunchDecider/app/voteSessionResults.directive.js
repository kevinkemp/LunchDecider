﻿lunchDecider.directive('voteSessionResults', function () {
    var result = {
        priority: 0,
        templateUrl: 'app/voteSessionResults.view.html',
        replace: false,//default
        transclude: false,//default
        restrict: 'E',
        scope: true,
        link: function (scope, element, attrs) {
            var counts = _.map(scope.voteSession.VoteOptions, function(voteOption) {
                return voteOption.Count;
            });
            var restaurantNames = _.map(scope.voteSession.VoteOptions, function(voteOption) {
                return voteOption.Restaurant.Name;
            });
            var data = {
                labels: restaurantNames,
                datasets: [
                    {
                        fillColor: "rgba(85,107,47,1)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        data: counts
                    }
                ]
            };
            var options = {
                //Boolean - If we show the scale above the chart data			
                scaleOverlay: false,

                //Boolean - If we want to override with a hard coded scale
                scaleOverride: true,

                //** Required if scaleOverride is true **
                //Number - The number of steps in a hard coded scale
                scaleSteps: _.max(counts) + 1,
                //Number - The value jump in the hard coded scale
                scaleStepWidth: 1,
                //Number - The scale starting value
                scaleStartValue: 0,

                //String - Colour of the scale line	
                scaleLineColor: "rgba(0,0,0,.5)",

                //Number - Pixel width of the scale line	
                scaleLineWidth: 1,

                //Boolean - Whether to show labels on the scale	
                scaleShowLabels: true,

                //Interpolated JS string - can access value
                scaleLabel: "<%=value%>",

                //String - Scale label font declaration for the scale label
                scaleFontFamily: "'Arial'",

                //Number - Scale label font size in pixels	
                scaleFontSize: 12,

                //String - Scale label font weight style	
                scaleFontStyle: "normal",

                //String - Scale label font colour	
                scaleFontColor: "#666",

                ///Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,

                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.2)",

                //Number - Width of the grid lines
                scaleGridLineWidth: 1,

                //Boolean - If there is a stroke on each bar	
                barShowStroke: true,

                //Number - Pixel width of the bar stroke	
                barStrokeWidth: 2,

                //Number - Spacing between each of the X value sets
                barValueSpacing: 5,

                //Number - Spacing between data sets within X values
                barDatasetSpacing: 1,

                //Boolean - Whether to animate the chart
                animation: true,

                //Number - Number of animation steps
                animationSteps: 60,

                //String - Animation easing effect
                animationEasing: "easeOutQuart",

                //Function - Fires when the animation is complete
                onAnimationComplete: null,
                
                //controls alignment... hopefully 
                //align: 'h'
            };
            var ctx = $('canvas', element)[0].getContext("2d");
            var myNewChart = new Chart(ctx).Bar(data, options);
        }
    };
    return result;
});