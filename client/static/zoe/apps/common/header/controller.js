var Controller = function($scope, headerService) {
    console.log($scope);
    $scope.$on('$routeChangeSuccess', function () {
        console.log('foo');
        $scope.navbarItems = headerService.getNavbarItems();
    });
};

Controller.$inject = ['$scope', 'headerService'];

module.exports = Controller;
