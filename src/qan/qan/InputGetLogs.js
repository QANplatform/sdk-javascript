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
 * The InputGetLogs model module.
 * @module qan/qan/InputGetLogs
 * @version 0.0.2
 */
class InputGetLogs {
    /**
     * Constructs a new <code>InputGetLogs</code>.
     * @alias module:qan/qan/InputGetLogs
     */
    constructor() { 
        
        InputGetLogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InputGetLogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/InputGetLogs} obj Optional instance to populate.
     * @return {module:qan/qan/InputGetLogs} The populated <code>InputGetLogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InputGetLogs();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('Address')) {
                obj['Address'] = ApiClient.convertToType(data['Address'], 'String');
            }
            if (data.hasOwnProperty('BlockHash')) {
                obj['BlockHash'] = ApiClient.convertToType(data['BlockHash'], 'String');
            }
            if (data.hasOwnProperty('FromBlock')) {
                obj['FromBlock'] = ApiClient.convertToType(data['FromBlock'], 'String');
            }
            if (data.hasOwnProperty('ToBlock')) {
                obj['ToBlock'] = ApiClient.convertToType(data['ToBlock'], 'String');
            }
            if (data.hasOwnProperty('Topics')) {
                obj['Topics'] = ApiClient.convertToType(data['Topics'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InputGetLogs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InputGetLogs</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
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
        if (data['FromBlock'] && !(typeof data['FromBlock'] === 'string' || data['FromBlock'] instanceof String)) {
            throw new Error("Expected the field `FromBlock` to be a primitive type in the JSON string but got " + data['FromBlock']);
        }
        // ensure the json data is a string
        if (data['ToBlock'] && !(typeof data['ToBlock'] === 'string' || data['ToBlock'] instanceof String)) {
            throw new Error("Expected the field `ToBlock` to be a primitive type in the JSON string but got " + data['ToBlock']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Topics'])) {
            throw new Error("Expected the field `Topics` to be an array in the JSON data but got " + data['Topics']);
        }

        return true;
    }


}



/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
InputGetLogs.prototype['$schema'] = undefined;

/**
 * The contract address or a list of addresses from which logs should originate
 * @member {String} Address
 */
InputGetLogs.prototype['Address'] = undefined;

/**
 * With the addition of EIP-234, blockHash is a new filter option that restricts the logs returned to the block number referenced in the blockHash. Using the blockHash field is equivalent to setting the fromBlock and toBlock to the block number the blockHash references. If blockHash is present in the filter criteria, neither fromBlock nor toBlock is allowed
 * @member {String} BlockHash
 */
InputGetLogs.prototype['BlockHash'] = undefined;

/**
 * The block number as a string in decimal format or tags. The supported tag values include earliest for the earliest/genesis block, latest for the latest mined block, pending for the pending state/transactions.
 * @member {String} FromBlock
 */
InputGetLogs.prototype['FromBlock'] = undefined;

/**
 * The block number as a string in decimal format or tags. The supported tag values include earliest for the earliest/genesis block, latest for the latest mined block, pending for the pending state/transactions.
 * @member {String} ToBlock
 */
InputGetLogs.prototype['ToBlock'] = undefined;

/**
 * An array of DATA topics and also, the topics are order-dependent. Visit this official page to learn more about topics
 * @member {Array.<String>} Topics
 */
InputGetLogs.prototype['Topics'] = undefined;






export default InputGetLogs;

