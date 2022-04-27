# Benchmarking Ethereum Smart Contract using Hyperledger Caliper

Steps involved: 

1. Run "truffle compile" from /home/as1001/RP/Ethereum Benchmark then
   smart contracts under /home/as1001/RP/Ethereum Benchmark/contracts will be compiled and their respective json files
   will be created under /home/as1001/RP/Ethereum Benchmark/build/contracts

2. Record_Keeper.json ---> add "gas: 3000000" at the end

3. benchconfig.yaml

4. networkconfig.jason

5. recordkeeper.js ---> This is the worker module (/home/as1001/RP/Ethereum Benchmark/caliper/recordkeeper.js)

6. npm init -y

7. npm i @hyperledger/caliper-cli  and then npx caliper bind \ --caliper-bind-sut ethereum: 1.2.1

8. check installation usig npx caliper --version

9. Run ganache and modify required files.
    i. add "gas": 3000000 in Record_Keeper.jason (created after compiling)
    ii. networkconfig.json
    iii. benchconfig.json --> add workload

10. Command to run:
   npx caliper launch manager --caliper-workspace ./caliper/ --caliper-benchconfig benchconfig.yaml --caliper-networkconfig networkconfig.json 
