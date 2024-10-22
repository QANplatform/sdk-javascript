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
 * The OutputGetBlockTransactionCountByHash model module.
 * @module qan/qan/OutputGetBlockTransactionCountByHash
 * @version 0.0.2
 */
class OutputGetBlockTransactionCountByHash {
    /**
     * Constructs a new <code>OutputGetBlockTransactionCountByHash</code>.
     * @alias module:qan/qan/OutputGetBlockTransactionCountByHash
     * @param transactionCount {String} The number of transactions associated with a specific block, in decimal value
     */
    constructor(transactionCount) { 
        
        OutputGetBlockTransactionCountByHash.initialize(this, transactionCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionCount) { 
        obj['TransactionCount'] = transactionCount;
    }

    /**
     * Constructs a <code>OutputGetBlockTransactionCountByHash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/OutputGetBlockTransactionCountByHash} obj Optional instance to populate.
     * @return {module:qan/qan/OutputGetBlockTransactionCountByHash} The populated <code>OutputGetBlockTransactionCountByHash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputGetBlockTransactionCountByHash();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('TransactionCount')) {
                obj['TransactionCount'] = ApiClient.convertToType(data['TransactionCount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputGetBlockTransactionCountByHash</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputGetBlockTransactionCountByHash</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputGetBlockTransactionCountByHash.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is a string
        if (data['TransactionCount'] && !(typeof data['TransactionCount'] === 'string' || data['TransactionCount'] instanceof String)) {
            throw new Error("Expected the field `TransactionCount` to be a primitive type in the JSON string but got " + data['TransactionCount']);
        }

        return true;
    }


}

OutputGetBlockTransactionCountByHash.RequiredProperties = ["TransactionCount"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputGetBlockTransactionCountByHash.prototype['$schema'] = undefined;

/**
 * The number of transactions associated with a specific block, in decimal value
 * @member {String} TransactionCount
 */
OutputGetBlockTransactionCountByHash.prototype['TransactionCount'] = undefined;






export default OutputGetBlockTransactionCountByHash;

