var Controller = function($scope, headerService) {
    $scope.navbarItems = headerService.getNavbarItems();
    $scope.$on('$routeChangeSuccess', function () {
        $scope.navbarItems = headerService.getNavbarItems();
    });
};

Controller.$inject = ['$scope', 'headerService'];

module.exports = Controller;
