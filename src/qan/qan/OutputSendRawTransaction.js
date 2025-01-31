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
 * The OutputSendRawTransaction model module.
 * @module qan/qan/OutputSendRawTransaction
 * @version 0.0.2
 */
class OutputSendRawTransaction {
    /**
     * Constructs a new <code>OutputSendRawTransaction</code>.
     * @alias module:qan/qan/OutputSendRawTransaction
     * @param transactionHash {String} The transaction hash, or the zero hash if the transaction is not yet available
     */
    constructor(transactionHash) { 
        
        OutputSendRawTransaction.initialize(this, transactionHash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionHash) { 
        obj['TransactionHash'] = transactionHash;
    }

    /**
     * Constructs a <code>OutputSendRawTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/OutputSendRawTransaction} obj Optional instance to populate.
     * @return {module:qan/qan/OutputSendRawTransaction} The populated <code>OutputSendRawTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputSendRawTransaction();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('TransactionHash')) {
                obj['TransactionHash'] = ApiClient.convertToType(data['TransactionHash'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputSendRawTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputSendRawTransaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputSendRawTransaction.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is a string
        if (data['TransactionHash'] && !(typeof data['TransactionHash'] === 'string' || data['TransactionHash'] instanceof String)) {
            throw new Error("Expected the field `TransactionHash` to be a primitive type in the JSON string but got " + data['TransactionHash']);
        }

        return true;
    }


}

OutputSendRawTransaction.RequiredProperties = ["TransactionHash"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputSendRawTransaction.prototype['$schema'] = undefined;

/**
 * The transaction hash, or the zero hash if the transaction is not yet available
 * @member {String} TransactionHash
 */
OutputSendRawTransaction.prototype['TransactionHash'] = undefined;






export default OutputSendRawTransaction;

