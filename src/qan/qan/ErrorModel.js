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
import ErrorDetail from './ErrorDetail';

/**
 * The ErrorModel model module.
 * @module qan/qan/ErrorModel
 * @version 0.0.2
 */
class ErrorModel {
    /**
     * Constructs a new <code>ErrorModel</code>.
     * @alias module:qan/qan/ErrorModel
     */
    constructor() { 
        
        ErrorModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['type'] = 'about:blank';
    }

    /**
     * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:qan/qan/ErrorModel} obj Optional instance to populate.
     * @return {module:qan/qan/ErrorModel} The populated <code>ErrorModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorModel();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorDetail]);
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is a string
        if (data['detail'] && !(typeof data['detail'] === 'string' || data['detail'] instanceof String)) {
            throw new Error("Expected the field `detail` to be a primitive type in the JSON string but got " + data['detail']);
        }
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                ErrorDetail.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['instance'] && !(typeof data['instance'] === 'string' || data['instance'] instanceof String)) {
            throw new Error("Expected the field `instance` to be a primitive type in the JSON string but got " + data['instance']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
ErrorModel.prototype['$schema'] = undefined;

/**
 * A human-readable explanation specific to this occurrence of the problem.
 * @member {String} detail
 */
ErrorModel.prototype['detail'] = undefined;

/**
 * Optional list of individual error details
 * @member {Array.<module:qan/qan/ErrorDetail>} errors
 */
ErrorModel.prototype['errors'] = undefined;

/**
 * A URI reference that identifies the specific occurrence of the problem.
 * @member {String} instance
 */
ErrorModel.prototype['instance'] = undefined;

/**
 * HTTP status code
 * @member {Number} status
 */
ErrorModel.prototype['status'] = undefined;

/**
 * A short, human-readable summary of the problem type. This value should not change between occurrences of the error.
 * @member {String} title
 */
ErrorModel.prototype['title'] = undefined;

/**
 * A URI reference to human-readable documentation for the error.
 * @member {String} type
 * @default 'about:blank'
 */
ErrorModel.prototype['type'] = 'about:blank';






export default ErrorModel;

