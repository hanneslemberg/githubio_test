(function (angular) {
    var module = angular.module('Main', []);
    module.controller("MainController", function () {
        this.text = "HalloWelt. Included via normal binding";
    });
})(window.angular);

