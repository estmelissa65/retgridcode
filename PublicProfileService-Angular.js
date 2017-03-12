(function () {
    "use strict";

    angular.module(Retgrid)
        .factory('agentService', AgentServiceFactory);

    AgentServiceFactory.$inject = ['$baseService', '$rg'];

    function AgentServiceFactory($baseService, $rg) {

        var aRetgridServiceObject = rg.services.agent;

        var newService = $baseService.merge(true, {}, aRetgridServiceObject, $baseService);

        return newService;
    }

})();
