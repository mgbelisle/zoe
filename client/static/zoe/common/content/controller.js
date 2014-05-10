var Controller = function($scope, contentService) {
    $scope.template = contentService.getTemplate();
    $scope.$on('$routeChangeSuccess', function () {
        $scope.template = contentService.getTemplate();
    });
};

Controller.$inject = ['$scope', 'contentService'];

module.exports = Controller;
