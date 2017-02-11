(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuCategoryService', MenuCategoryService);


    MenuCategoryService.$inject = ['$http', '$q', 'UrlPath'];

    function MenuCategoryService($http, $q, UrlPath) {
        var service = this;

        var items = [];
        service.getItems = function () {
            items = service.getJsonData();
            var deferred = $q.defer();
            deferred.resolve(items);
            return deferred.promise;
        };

        service.getJsonData = function () {
            var response = $http({
                method: "GET",
                url: (UrlPath + "/categories.json")
            });
            return response;
        };

    }

})();
