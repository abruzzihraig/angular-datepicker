'use strict';

var Module = angular.module('datePicker');

Module.directive('dropdownDatepicker', ['$document', function($document) {
  return {
    restrict: 'ACE',
    link: function(scope, element) {
      element.bind('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        element.addClass('open');
      });
      scope.$on('hidePicker', function() {
        element.removeClass('open');
      });
      $document.bind('click', function() {
        element.removeClass('open');
      });
    }
  };
}]);
