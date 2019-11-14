'use strict';

/* Filters */

angular.module('altairs.filters', []).filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
