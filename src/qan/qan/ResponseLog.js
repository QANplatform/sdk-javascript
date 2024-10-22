/**
 * QAN AutoApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ResponseLog model module.
 * @module qan/qan/ResponseLog
 * @version 0.0.2
 */
class ResponseLog {
    /**
     * Constructs a new <code>ResponseLog</code>.
     * @alias module:qan/qan/ResponseLog
     * @param address {String} An address from which this log originated
     * @param blockHash {String} The hash of the block where this log was in. null when its a pending log
     * @param blockNumber {String} The block number where this log was in. null when its a pending log
     * @param data {String} It contains one or more 32 Bytes non-indexed arguments of the log
     * @param logIndex {String} The integer of the log index position in the block. null when its a pending log
     * @param removed {Boolean} It is true when the log was removed due to a chain reorganization, and false if it's a valid log
     * @param topics {Array.<String>} An array of zero to four 32 Bytes DATA of indexed log arguments. In Solidity, the first topic is the hash of the signature of the event (e.g. Deposit(address, bytes32, uint256)), except you declare the event with the anonymous specifier
     * @param transactionHash {String} The hash of the transactions this log was created from. null when its a pending log
     * @param transactionIndex {String} The integer of the transaction's index position that the log was created from. null when it's a pending log
     */
    constructor(address, blockHash, blockNumber, data, logIndex, removed, topics, transactionHash, transactionIndex) { 
        
        ResponseLog.initialize(this, address, blockHash, blockNumber, data, logIndex, removed, topics, transactionHash, transactionIndex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, blockHash, blockNumber, data, logIndex, removed, topics, transactionHash, transactionIndex) { 
        obj['Address'] = address;
        obj['BlockHash'] = blockHash;
        obj['BlockNumber'] = blockNumber;
        obj['Data'] = data;
        obj['LogIndex'] = logIndex;
        obj['Removed'] = removed;
        obj['Topics'] = topics;
        obj['TransactionHash'] = transactionHash;
        obj['TransactionIndex'] = transactionIndex;
    }

    /**
     * Constructs a <code>ResponseLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/ResponseLog} obj Optional instance to populate.
     * @return {module:qan/qan/ResponseLog} The populated <code>ResponseLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseLog();

            if (data.hasOwnProperty('Address')) {
                obj['Address'] = ApiClient.convertToType(data['Address'], 'String');
            }
            if (data.hasOwnProperty('BlockHash')) {
                obj['BlockHash'] = ApiClient.convertToType(data['BlockHash'], 'String');
            }
            if (data.hasOwnProperty('BlockNumber')) {
                obj['BlockNumber'] = ApiClient.convertToType(data['BlockNumber'], 'String');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], 'String');
            }
            if (data.hasOwnProperty('LogIndex')) {
                obj['LogIndex'] = ApiClient.convertToType(data['LogIndex'], 'String');
            }
            if (data.hasOwnProperty('Removed')) {
                obj['Removed'] = ApiClient.convertToType(data['Removed'], 'Boolean');
            }
            if (data.hasOwnProperty('Topics')) {
                obj['Topics'] = ApiClient.convertToType(data['Topics'], ['String']);
            }
            if (data.hasOwnProperty('TransactionHash')) {
                obj['TransactionHash'] = ApiClient.convertToType(data['TransactionHash'], 'String');
            }
            if (data.hasOwnProperty('TransactionIndex')) {
                obj['TransactionIndex'] = ApiClient.convertToType(data['TransactionIndex'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseLog</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseLog</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ResponseLog.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Address'] && !(typeof data['Address'] === 'string' || data['Address'] instanceof String)) {
            throw new Error("Expected the field `Address` to be a primitive type in the JSON string but got " + data['Address']);
        }
        // ensure the json data is a string
        if (data['BlockHash'] && !(typeof data['BlockHash'] === 'string' || data['BlockHash'] instanceof String)) {
            throw new Error("Expected the field `BlockHash` to be a primitive type in the JSON string but got " + data['BlockHash']);
        }
        // ensure the json data is a string
        if (data['BlockNumber'] && !(typeof data['BlockNumber'] === 'string' || data['BlockNumber'] instanceof String)) {
            throw new Error("Expected the field `BlockNumber` to be a primitive type in the JSON string but got " + data['BlockNumber']);
        }
        // ensure the json data is a string
        if (data['Data'] && !(typeof data['Data'] === 'string' || data['Data'] instanceof String)) {
            throw new Error("Expected the field `Data` to be a primitive type in the JSON string but got " + data['Data']);
        }
        // ensure the json data is a string
        if (data['LogIndex'] && !(typeof data['LogIndex'] === 'string' || data['LogIndex'] instanceof String)) {
            throw new Error("Expected the field `LogIndex` to be a primitive type in the JSON string but got " + data['LogIndex']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Topics'])) {
            throw new Error("Expected the field `Topics` to be an array in the JSON data but got " + data['Topics']);
        }
        // ensure the json data is a string
        if (data['TransactionHash'] && !(typeof data['TransactionHash'] === 'string' || data['TransactionHash'] instanceof String)) {
            throw new Error("Expected the field `TransactionHash` to be a primitive type in the JSON string but got " + data['TransactionHash']);
        }
        // ensure the json data is a string
        if (data['TransactionIndex'] && !(typeof data['TransactionIndex'] === 'string' || data['TransactionIndex'] instanceof String)) {
            throw new Error("Expected the field `TransactionIndex` to be a primitive type in the JSON string but got " + data['TransactionIndex']);
        }

        return true;
    }


}

ResponseLog.RequiredProperties = ["Address", "BlockHash", "BlockNumber", "Data", "LogIndex", "Removed", "Topics", "TransactionHash", "TransactionIndex"];

/**
 * An address from which this log originated
 * @member {String} Address
 */
ResponseLog.prototype['Address'] = undefined;

/**
 * The hash of the block where this log was in. null when its a pending log
 * @member {String} BlockHash
 */
ResponseLog.prototype['BlockHash'] = undefined;

/**
 * The block number where this log was in. null when its a pending log
 * @member {String} BlockNumber
 */
ResponseLog.prototype['BlockNumber'] = undefined;

/**
 * It contains one or more 32 Bytes non-indexed arguments of the log
 * @member {String} Data
 */
ResponseLog.prototype['Data'] = undefined;

/**
 * The integer of the log index position in the block. null when its a pending log
 * @member {String} LogIndex
 */
ResponseLog.prototype['LogIndex'] = undefined;

/**
 * It is true when the log was removed due to a chain reorganization, and false if it's a valid log
 * @member {Boolean} Removed
 */
ResponseLog.prototype['Removed'] = undefined;

/**
 * An array of zero to four 32 Bytes DATA of indexed log arguments. In Solidity, the first topic is the hash of the signature of the event (e.g. Deposit(address, bytes32, uint256)), except you declare the event with the anonymous specifier
 * @member {Array.<String>} Topics
 */
ResponseLog.prototype['Topics'] = undefined;

/**
 * The hash of the transactions this log was created from. null when its a pending log
 * @member {String} TransactionHash
 */
ResponseLog.prototype['TransactionHash'] = undefined;

/**
 * The integer of the transaction's index position that the log was created from. null when it's a pending log
 * @member {String} TransactionIndex
 */
ResponseLog.prototype['TransactionIndex'] = undefined;






export default ResponseLog;

