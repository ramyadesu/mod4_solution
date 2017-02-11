(function () {
'use strict';

angular.module('MenuApp',[])
.constant('UrlPath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;


  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 1500);

    return deferred.promise;
  };
  service.getAllCategories =function(){};
  service.getItemsForCategory=function(categoryShortName){};
  service.getCategory = function () {
      var response = $http({
        method: "GET",
        url: (UrlPath + "/categories.json")
      });

      return response;
    };
 service.getMenuItems = function () {
      var response = $http({
        method: "GET",
        url: (UrlPath + "/menu_items.json"),
        params: {
          category: shortName
        }
      });

      return response;
    };
}

})();
