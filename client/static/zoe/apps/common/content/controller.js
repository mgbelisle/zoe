var Controller = function($scope, contentService) {
    $scope.content = contentService.getContent();
    $scope.$on('$routeChangeSuccess', function () {
        $scope.content = contentService.getContent();
    });
};

Controller.$inject = ['$scope', 'contentService'];

module.exports = Controller;
