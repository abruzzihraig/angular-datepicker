'use strict';

var Module = angular.module('datePicker');

Module.directive('dropdownDatepicker', ['$document', function($document) {
  return {
    restrict: 'ACE',
    link: function(scope, element) {
      function hidePicker() {
        element.removeClass('open');
        $document.unbind('click', hidePicker);
      }

      element.bind('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        element.addClass('open');
        $document.bind('click', hidePicker);
      });
      scope.$on('hidePicker', hidePicker);
    }
  };
}]);
