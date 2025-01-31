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
 * The OutputGetFilterChanges model module.
 * @module qan/qan/OutputGetFilterChanges
 * @version 0.0.2
 */
class OutputGetFilterChanges {
    /**
     * Constructs a new <code>OutputGetFilterChanges</code>.
     * @alias module:qan/qan/OutputGetFilterChanges
     * @param result {Object} 
     */
    constructor(result) { 
        
        OutputGetFilterChanges.initialize(this, result);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, result) { 
        obj['Result'] = result;
    }

    /**
     * Constructs a <code>OutputGetFilterChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/OutputGetFilterChanges} obj Optional instance to populate.
     * @return {module:qan/qan/OutputGetFilterChanges} The populated <code>OutputGetFilterChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputGetFilterChanges();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('Result')) {
                obj['Result'] = ApiClient.convertToType(data['Result'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputGetFilterChanges</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputGetFilterChanges</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputGetFilterChanges.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }

        return true;
    }


}

OutputGetFilterChanges.RequiredProperties = ["Result"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputGetFilterChanges.prototype['$schema'] = undefined;

/**
 * @member {Object} Result
 */
OutputGetFilterChanges.prototype['Result'] = undefined;






export default OutputGetFilterChanges;

