(function () {
    "use strict";

    angular.module(Retgrid)
        .controller('agentProfileController', AgentProfileController);
    AgentProfileController.$inject = ['$scope', '$baseController', 
        'personService'];
    function AgentProfileController($scope, $baseController,
        personService) {

        var vm = this;
        vm.$scope = $scope;
        $baseController.merge(vm, $baseController);
        vm.personService = personService;
        vm.notify = vm.personService.getNotifier($scope);
        vm.currentUser = rg.page.Id;
        vm.selectedItem = {};

        render();
        function render() {
            vm.personService.selectAgentProfileById(vm.currentUser, _onSuccess, _onError);
        };
        function _onSuccess(data) {
            vm.notify(function () {
                vm.selectedItem = data.items[0];
            });
        };
        function _onError() {
        };
    }
})();
