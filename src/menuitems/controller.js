(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemController', MenuItemController);

// Version with resolving to 1 item based on $stateParams in route config
MenuItemController.$inject = ['$stateParams','items'];
function MenuItemController( $stateParams ,items) {
   var menuItem = this;
  menuItem.items =items;
}

})();
