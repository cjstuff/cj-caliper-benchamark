'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }

    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
        
        for(let i = 0; i < this.roundArguments.assets; i++){
            let request = {
                contract: 'record_keeper',
                readOnly: false,
                verb: 'addTreatment',
                args: ["Malaria", "visit Doctor", "Paracetamol"]
            };  

            await this.sutAdapter.sendRequests(request);

        }
    }

    async submitTransaction() {
        for (let i = 0; i < this.roundArguments.assets; i++) {
            let request2 = {
                contract: 'record_keeper',
                readOnly: true,
                verb: 'viewHistory',
                args: []
            };

            await this.sutAdapter.sendRequests(request2);

        }
    }

    /*async cleanupWorkloadModule() {
        for (let i = 0; i < this.roundArguments.assets; i++) {
            let request3 = {
                contract: 'imovel',
                readOnly: false,
                verb: 'deleteImovel',
                args: [0]
            };

            await this.sutAdapter.sendRequests(request3);

        }
    }*/
}

function createWorkloadModule() {
    return new MyWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;