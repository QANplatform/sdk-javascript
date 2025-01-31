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
import ResponseTransaction from './ResponseTransaction';

/**
 * The OutputGetTransactionByBlockHashAndIndex model module.
 * @module qan/qan/OutputGetTransactionByBlockHashAndIndex
 * @version 0.0.2
 */
class OutputGetTransactionByBlockHashAndIndex {
    /**
     * Constructs a new <code>OutputGetTransactionByBlockHashAndIndex</code>.
     * @alias module:qan/qan/OutputGetTransactionByBlockHashAndIndex
     * @param transaction {module:qan/qan/ResponseTransaction} The transaction response object, or null if no transaction is found
     */
    constructor(transaction) { 
        
        OutputGetTransactionByBlockHashAndIndex.initialize(this, transaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transaction) { 
        obj['Transaction'] = transaction;
    }

    /**
     * Constructs a <code>OutputGetTransactionByBlockHashAndIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/OutputGetTransactionByBlockHashAndIndex} obj Optional instance to populate.
     * @return {module:qan/qan/OutputGetTransactionByBlockHashAndIndex} The populated <code>OutputGetTransactionByBlockHashAndIndex</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputGetTransactionByBlockHashAndIndex();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('Transaction')) {
                obj['Transaction'] = ResponseTransaction.constructFromObject(data['Transaction']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputGetTransactionByBlockHashAndIndex</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputGetTransactionByBlockHashAndIndex</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputGetTransactionByBlockHashAndIndex.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // validate the optional field `Transaction`
        if (data['Transaction']) { // data not null
          ResponseTransaction.validateJSON(data['Transaction']);
        }

        return true;
    }


}

OutputGetTransactionByBlockHashAndIndex.RequiredProperties = ["Transaction"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputGetTransactionByBlockHashAndIndex.prototype['$schema'] = undefined;

/**
 * The transaction response object, or null if no transaction is found
 * @member {module:qan/qan/ResponseTransaction} Transaction
 */
OutputGetTransactionByBlockHashAndIndex.prototype['Transaction'] = undefined;






export default OutputGetTransactionByBlockHashAndIndex;

