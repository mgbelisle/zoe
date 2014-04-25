var Controller = function($scope, contentService, urlService) { // TODO: Remove urlService
    $scope.content = contentService.getContent();
    $scope.$on('$routeChangeSuccess', function () {
        $scope.content = contentService.getContent();
    });
};

Controller.$inject = ['$scope', 'contentService', 'urlService'];

module.exports = Controller;
