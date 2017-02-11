
(function () {
'use strict';

angular.module('MenuApp')
.service('MenuItemService', MenuItemService);

MenuItemService.$inject = ['$http','$q', 'UrlPath' ];

  function MenuItemService($http,$q, UrlPath ) {
    var service = this;

   var items = [];
    service.getItems = function (shortName) {
            items = service.getJsonData(shortName)
            var deferred = $q.defer();
            deferred.resolve(items);

            return deferred.promise;
        };
    service.getJsonData = function (sName) {
      var response = $http({
        method: "GET",
        url: (UrlPath + "/menu_items.json"),
         params: {
           category: sName
         }
      });

      return response;
    };
  }




})();
