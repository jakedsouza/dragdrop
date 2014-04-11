'use strict';

describe('Controller: DropdownctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dragdropApp'));

  var DropdownctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropdownctrlCtrl = $controller('DropdownctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
