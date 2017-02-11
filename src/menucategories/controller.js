(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryController', MenuCategoryController);
MenuCategoryController.$inject = ['items'];
function MenuCategoryController(items) {
  var menuCategory = this;
menuCategory.items =items;
}
})();
