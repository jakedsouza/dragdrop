'use strict';

describe('Controller: H5dragdropCtrl', function () {

  // load the controller's module
  beforeEach(module('dragdropApp'));

  var H5dragdropCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    H5dragdropCtrl = $controller('H5dragdropCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
