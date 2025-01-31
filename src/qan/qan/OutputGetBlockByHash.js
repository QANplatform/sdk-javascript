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
import ResponseBlock from './ResponseBlock';

/**
 * The OutputGetBlockByHash model module.
 * @module qan/qan/OutputGetBlockByHash
 * @version 0.0.2
 */
class OutputGetBlockByHash {
    /**
     * Constructs a new <code>OutputGetBlockByHash</code>.
     * @alias module:qan/qan/OutputGetBlockByHash
     * @param block {module:qan/qan/ResponseBlock} A block object, or null when no block was found
     */
    constructor(block) { 
        
        OutputGetBlockByHash.initialize(this, block);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, block) { 
        obj['Block'] = block;
    }

    /**
     * Constructs a <code>OutputGetBlockByHash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/OutputGetBlockByHash} obj Optional instance to populate.
     * @return {module:qan/qan/OutputGetBlockByHash} The populated <code>OutputGetBlockByHash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputGetBlockByHash();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('Block')) {
                obj['Block'] = ResponseBlock.constructFromObject(data['Block']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputGetBlockByHash</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputGetBlockByHash</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputGetBlockByHash.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // validate the optional field `Block`
        if (data['Block']) { // data not null
          ResponseBlock.validateJSON(data['Block']);
        }

        return true;
    }


}

OutputGetBlockByHash.RequiredProperties = ["Block"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputGetBlockByHash.prototype['$schema'] = undefined;

/**
 * A block object, or null when no block was found
 * @member {module:qan/qan/ResponseBlock} Block
 */
OutputGetBlockByHash.prototype['Block'] = undefined;






export default OutputGetBlockByHash;

