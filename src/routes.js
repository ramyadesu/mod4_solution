(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/home/template.html'
  })

  // menu category
  .state('menuCategory', {
    url: '/menu-category',
    templateUrl: 'src/menucategories/template.html',
    controller: 'MenuCategoryController as menuCategory',
    resolve: {
      items: ['MenuCategoryService', function (MenuCategoryService) {
        return MenuCategoryService.getItems();
      }]
    }
  })

  // menu Item detail
  .state('menuCategory.menuItem', {
    url: '/menu-item/{shortName}',
    templateUrl: 'src/menuitems/template.html',
    controller: 'MenuItemController as menuItem',
    resolve: {
      items: ['$stateParams', 'MenuItemService',
              function ($stateParams, MenuItemService){
               return MenuItemService.getItems($stateParams.shortName) ;

            }]
    }
  });

}

})();
