# QanAutoApi.ErrorModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | **String** | A URL to the JSON Schema for this object. | [optional] [readonly] 
**detail** | **String** | A human-readable explanation specific to this occurrence of the problem. | [optional] 
**errors** | [**[ErrorDetail]**](ErrorDetail.md) | Optional list of individual error details | [optional] 
**instance** | **String** | A URI reference that identifies the specific occurrence of the problem. | [optional] 
**status** | **Number** | HTTP status code | [optional] 
**title** | **String** | A short, human-readable summary of the problem type. This value should not change between occurrences of the error. | [optional] 
**type** | **String** | A URI reference to human-readable documentation for the error. | [optional] [default to &#39;about:blank&#39;]


