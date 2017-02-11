(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/menuitems/template.list.html',
  bindings: {
    items: '<'
  }
});

})();
