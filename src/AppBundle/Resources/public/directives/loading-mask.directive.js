angular.module('appModule')
    .directive('loadingMask', LoadingMaskDirective);
	
	/** 
	 * @Class LoadingMaskDirective 
	 * @constructor
	 */
function LoadingMaskDirective ($http) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs)
        {

			/** 
			 * This function handling loading
			 * @method isLoading
			 */	
            scope.isLoading = function () {
                return ($http.pendingRequests.length > 0);
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if (v){
                    attrs.$set('class', 'loading');
                }else{
                    attrs.$set('class', '')
                }
            });
        }
    };
}