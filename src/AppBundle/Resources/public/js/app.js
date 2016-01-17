/**
 * Created by andrzej on 08.12.15.
 */

angular
    .module('appModule', ['ui.bootstrap'])
    .config(function ($httpProvider, $provide) {
        $provide.factory('httpInterceptor', function ($q, $rootScope, Console) {
            return {
                'request': function (config) {
                    // intercept and change config: e.g. change the URL
                    // config.url += '?nocache=' + (new Date()).getTime();
                    // broadcasting 'httpRequest' event
                    $rootScope.$broadcast('httpRequest', config);
                    if (!angular.isDefined(config.cache))
                        Console.echo('Request: ' + config.url);

                    return config || $q.when(config);
                },
                'response': function (response) {
                    // we can intercept and change response here...
                    // broadcasting 'httpResponse' event
                    $rootScope.$broadcast('httpResponse', response);
                    return response || $q.when(response);
                },
                'requestError': function (rejection) {
                    // broadcasting 'httpRequestError' event
                    $rootScope.$broadcast('httpRequestError', rejection);
                    return $q.reject(rejection);
                },
                'responseError': function (rejection) {
                    // broadcasting 'httpResponseError' event
                    $rootScope.$broadcast('httpResponseError', rejection);
                    return $q.reject(rejection);
                }
            };
        });
        $httpProvider.interceptors.push('httpInterceptor');
    });;