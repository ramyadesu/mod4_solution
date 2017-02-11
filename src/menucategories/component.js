(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menucategories/template.list.html',
  bindings: {
    items: '<'
  }
});

})();
