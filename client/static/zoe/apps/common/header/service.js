var service = function($scope) {
    return {
        get navbarItems() {
            return $scope.navbarItems;
        },
        set navbarItems(value) {
            console.log('setter');
            $scope.navbarItems = items;
        }
    };
};

service.$inject = ['$scope'];

module.exports = service;
