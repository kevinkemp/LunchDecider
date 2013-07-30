lunchDecider.directive('voteSessionResults', function () {
    var directiveDefinitionObject = {
        priority: 0,
        templateUrl: 'app/voteSessionResults.view.html',
        replace: false,//default
        transclude: false,//default
        restrict: 'E',
        scope: false,
        link: function (scope, element, attrs) {
            //$('table', element).css('background-color', 'red');
            scope.message = "hello world";
        }
        //compile: function compile(tElement, tAttrs, transclude) {
        //    return {
        //        pre: function preLink(scope, iElement, iAttrs, controller) {

        //        },
        //        post: function postLink(scope, iElement, iAttrs, controller) {

        //        }
        //    };
        //}
    };
    return directiveDefinitionObject;
});