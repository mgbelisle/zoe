var Controller = function($scope, headerService, urlService) {
    $scope.navItems = headerService.getNavItems();
    $scope.$on('$routeChangeSuccess', function () {
        $scope.navItems = headerService.getNavItems();
    });
    $scope.matchesCurrentParams = urlService.matchesCurrentParams;
};

Controller.$inject = ['$scope', 'headerService', 'urlService'];

module.exports = Controller;
