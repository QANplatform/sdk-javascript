# QAN JavaScript SDK

This repository is guaranteed up-to-date with the upstream QAN API definitions, and leverages OpenAPI technology to stay consistent.

Versioning is based on SEMVER, meaning:

- Stable releases guarantee backwards compatibility for the same major versions.
- Minor releases will not contain breaking changes.
- Patch releases only focus on fixing issues.

## Documentation for API Endpoints

All URIs are relative to *https://rpc-testnet.qanplatform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**qanBlockNumber**](docs/QANApi.md#qanBlockNumber) | **GET** /blockNumber/ | Returns the latest block number of the blockchain.
[**qanCall**](docs/QANApi.md#qanCall) | **POST** /call/ | Executes a new message call immediately without creating a transaction on the block chain.
[**qanChainId**](docs/QANApi.md#qanChainId) | **GET** /chainId/ | Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP-155.
[**qanEstimateGas**](docs/QANApi.md#qanEstimateGas) | **POST** /estimateGas/ | Returns an estimation of gas for a given transaction.
[**qanFeeHistory**](docs/QANApi.md#qanFeeHistory) | **POST** /feeHistory/ | Returns the collection of historical gas information.
[**qanGasPrice**](docs/QANApi.md#qanGasPrice) | **GET** /gasPrice/ | Returns the current gas price on the network in wei.
[**qanGetBalance**](docs/QANApi.md#qanGetBalance) | **GET** /getBalance/{Address}/ | Returns the balance of the account of given address.
[**qanGetBlockByHash**](docs/QANApi.md#qanGetBlockByHash) | **GET** /getBlockByHash/{Hash}/{TransactionDetailFlag}/ | Returns information of the block matching the given block hash.
[**qanGetBlockByNumber**](docs/QANApi.md#qanGetBlockByNumber) | **GET** /getBlockByNumber/{BlockNumber}/{TransactionDetailFlag}/ | Returns information of the block matching the given block number.
[**qanGetBlockReceipts**](docs/QANApi.md#qanGetBlockReceipts) | **GET** /getBlockReceipts/{BlockNumber}/ | Returns all transaction receipts for a given block.
[**qanGetBlockTransactionCountByHash**](docs/QANApi.md#qanGetBlockTransactionCountByHash) | **GET** /getBlockTransactionCountByHash/{Hash}/ | Returns the number of transactions for the block matching the given block hash.
[**qanGetBlockTransactionCountByNumber**](docs/QANApi.md#qanGetBlockTransactionCountByNumber) | **GET** /getBlockTransactionCountByNumber/{BlockNumber}/ | Returns the number of transactions for the block matching the given block number.
[**qanGetCode**](docs/QANApi.md#qanGetCode) | **GET** /getCode/{Address}/ | Returns the compiled bytecode of a smart contract.
[**qanGetFilterChanges**](docs/QANApi.md#qanGetFilterChanges) | **GET** /getFilterChanges/{FilterId}/ | Polling method for a filter, which returns an array of events that have occurred since the last poll.
[**qanGetFilterLogs**](docs/QANApi.md#qanGetFilterLogs) | **GET** /getFilterLogs/{Id}/ | Returns an array of all logs matching filter with given id.
[**qanGetLogs**](docs/QANApi.md#qanGetLogs) | **POST** /getLogs/ | Returns an array of all logs matching a given filter object.
[**qanGetProof**](docs/QANApi.md#qanGetProof) | **POST** /getProof/ | Returns the account and storage values of the specified account including the Merkle-proof.
[**qanGetStorageAt**](docs/QANApi.md#qanGetStorageAt) | **POST** /getStorageAt/ | Returns the value from a storage position at a given address.
[**qanGetTransactionByBlockHashAndIndex**](docs/QANApi.md#qanGetTransactionByBlockHashAndIndex) | **GET** /getTransactionByBlockHashAndIndex/{blockHash}/{index}/ | Returns information about a transaction given a blockhash and transaction index position.
[**qanGetTransactionByBlockNumberAndIndex**](docs/QANApi.md#qanGetTransactionByBlockNumberAndIndex) | **GET** /getTransactionByBlockNumberAndIndex/{blockNumber}/{index}/ | Returns information about a transaction given a block number and transaction index position.
[**qanGetTransactionByHash**](docs/QANApi.md#qanGetTransactionByHash) | **GET** /getTransactionByHash/{hash}/ | Returns the information about a transaction from a transaction hash.
[**qanGetTransactionCount**](docs/QANApi.md#qanGetTransactionCount) | **GET** /getTransactionCount/{Address}/{BlockNumber}/ | Returns the number of transactions sent from an address.
[**qanGetTransactionReceipt**](docs/QANApi.md#qanGetTransactionReceipt) | **GET** /getTransactionReceipt/{Hash}/ | Returns the receipt of a transaction by transaction hash.
[**qanMaxPriorityFeePerGas**](docs/QANApi.md#qanMaxPriorityFeePerGas) | **GET** /maxPriorityFeePerGas/ | Get the priority fee needed to be included in a block.
[**qanNewBlockFilter**](docs/QANApi.md#qanNewBlockFilter) | **GET** /newBlockFilter/ | Creates a filter in the node, to notify when a new block arrives.
[**qanNewFilter**](docs/QANApi.md#qanNewFilter) | **POST** /newFilter/ | Creates a filter object, based on filter options, to notify when the state changes (logs).
[**qanNewPendingTransactionFilter**](docs/QANApi.md#qanNewPendingTransactionFilter) | **GET** /newPendingTransactionFilter/ | Creates a filter in the node to notify when new pending transactions arrive.
[**qanSendRawTransaction**](docs/QANApi.md#qanSendRawTransaction) | **POST** /sendRawTransaction/ | Creates new message call transaction or a contract creation for signed transactions.
[**qanSyncing**](docs/QANApi.md#qanSyncing) | **GET** /syncing/ | Returns an object with the sync status of the node if the node is out-of-sync and is syncing. Returns null when the node is already in sync.
[**qanUninstallFilter**](docs/QANApi.md#qanUninstallFilter) | **GET** /uninstallFilter/{FilterId}/ | Uninstalls a filter with the given filter id.
[**qanXlinkValid**](docs/QANApi.md#qanXlinkValid) | **GET** /xlinkValid/{Address}/ | Returns the xlink validity time of the account of given address.


## Documentation for Models

 - [QanAutoApi.ErrorDetail](docs/ErrorDetail.md)
 - [QanAutoApi.ErrorModel](docs/ErrorModel.md)
 - [QanAutoApi.EstimateGasObject](docs/EstimateGasObject.md)
 - [QanAutoApi.FilterObject](docs/FilterObject.md)
 - [QanAutoApi.InputCall](docs/InputCall.md)
 - [QanAutoApi.InputEstimateGas](docs/InputEstimateGas.md)
 - [QanAutoApi.InputFeeHistory](docs/InputFeeHistory.md)
 - [QanAutoApi.InputGetLogs](docs/InputGetLogs.md)
 - [QanAutoApi.InputGetProof](docs/InputGetProof.md)
 - [QanAutoApi.InputGetStorageAt](docs/InputGetStorageAt.md)
 - [QanAutoApi.InputNewFilter](docs/InputNewFilter.md)
 - [QanAutoApi.InputSendRawTransaction](docs/InputSendRawTransaction.md)
 - [QanAutoApi.InputSubscribe](docs/InputSubscribe.md)
 - [QanAutoApi.OutputAccounts](docs/OutputAccounts.md)
 - [QanAutoApi.OutputBlobBaseFee](docs/OutputBlobBaseFee.md)
 - [QanAutoApi.OutputBlockNumber](docs/OutputBlockNumber.md)
 - [QanAutoApi.OutputCall](docs/OutputCall.md)
 - [QanAutoApi.OutputChainId](docs/OutputChainId.md)
 - [QanAutoApi.OutputEstimateGas](docs/OutputEstimateGas.md)
 - [QanAutoApi.OutputFeeHistory](docs/OutputFeeHistory.md)
 - [QanAutoApi.OutputGasPrice](docs/OutputGasPrice.md)
 - [QanAutoApi.OutputGetAccount](docs/OutputGetAccount.md)
 - [QanAutoApi.OutputGetBalance](docs/OutputGetBalance.md)
 - [QanAutoApi.OutputGetBlockByHash](docs/OutputGetBlockByHash.md)
 - [QanAutoApi.OutputGetBlockByNumber](docs/OutputGetBlockByNumber.md)
 - [QanAutoApi.OutputGetBlockReceipts](docs/OutputGetBlockReceipts.md)
 - [QanAutoApi.OutputGetBlockTransactionCountByHash](docs/OutputGetBlockTransactionCountByHash.md)
 - [QanAutoApi.OutputGetBlockTransactionCountByNumber](docs/OutputGetBlockTransactionCountByNumber.md)
 - [QanAutoApi.OutputGetCode](docs/OutputGetCode.md)
 - [QanAutoApi.OutputGetFilterChanges](docs/OutputGetFilterChanges.md)
 - [QanAutoApi.OutputGetFilterLogs](docs/OutputGetFilterLogs.md)
 - [QanAutoApi.OutputGetLogs](docs/OutputGetLogs.md)
 - [QanAutoApi.OutputGetProof](docs/OutputGetProof.md)
 - [QanAutoApi.OutputGetStorageAt](docs/OutputGetStorageAt.md)
 - [QanAutoApi.OutputGetTransactionByBlockHashAndIndex](docs/OutputGetTransactionByBlockHashAndIndex.md)
 - [QanAutoApi.OutputGetTransactionByBlockNumberAndIndex](docs/OutputGetTransactionByBlockNumberAndIndex.md)
 - [QanAutoApi.OutputGetTransactionByHash](docs/OutputGetTransactionByHash.md)
 - [QanAutoApi.OutputGetTransactionCount](docs/OutputGetTransactionCount.md)
 - [QanAutoApi.OutputGetTransactionReceipt](docs/OutputGetTransactionReceipt.md)
 - [QanAutoApi.OutputGetUncleCountByBlockHash](docs/OutputGetUncleCountByBlockHash.md)
 - [QanAutoApi.OutputGetUncleCountByBlockNumber](docs/OutputGetUncleCountByBlockNumber.md)
 - [QanAutoApi.OutputMaxPriorityFeePerGas](docs/OutputMaxPriorityFeePerGas.md)
 - [QanAutoApi.OutputNewBlockFilter](docs/OutputNewBlockFilter.md)
 - [QanAutoApi.OutputNewFilter](docs/OutputNewFilter.md)
 - [QanAutoApi.OutputNewPendingTransactionFilter](docs/OutputNewPendingTransactionFilter.md)
 - [QanAutoApi.OutputSendRawTransaction](docs/OutputSendRawTransaction.md)
 - [QanAutoApi.OutputSubscribe](docs/OutputSubscribe.md)
 - [QanAutoApi.OutputSyncing](docs/OutputSyncing.md)
 - [QanAutoApi.OutputUninstallFilter](docs/OutputUninstallFilter.md)
 - [QanAutoApi.OutputUnsubscribe](docs/OutputUnsubscribe.md)
 - [QanAutoApi.ParamsTransaction](docs/ParamsTransaction.md)
 - [QanAutoApi.QanXlinkValidResponse](docs/QanXlinkValidResponse.md)
 - [QanAutoApi.ResponseBlock](docs/ResponseBlock.md)
 - [QanAutoApi.ResponseLog](docs/ResponseLog.md)
 - [QanAutoApi.ResponseStorageEntry](docs/ResponseStorageEntry.md)
 - [QanAutoApi.ResponseTransaction](docs/ResponseTransaction.md)
 - [QanAutoApi.ResponseTransactionReceipt](docs/ResponseTransactionReceipt.md)
 - [QanAutoApi.ResponseWithdrawals](docs/ResponseWithdrawals.md)
 - [QanAutoApi.SyncStatus](docs/SyncStatus.md)

## Acknowledgements

We would like to thank Smartbear and OpenAPITools tech for making building declarative APIs possible.
A huge benefit for the whole industry!
