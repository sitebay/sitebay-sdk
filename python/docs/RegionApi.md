# openapi_client.RegionApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_region**](RegionApi.md#get_region) | **GET** /api/v1/region/{region_id} | Get a Region
[**get_regions**](RegionApi.md#get_regions) | **GET** /api/v1/region | Get Regions


# **get_region**
> Region get_region(region_id)

Get a Region

Get details of a region by its ID

### Example


```python
import time
import openapi_client
from openapi_client.api import region_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.region import Region
from pprint import pprint
# Defining the host is optional and defaults to https://my.sitebay.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = region_api.RegionApi(api_client)
    region_id = 1 # int | 

    # example passing only required values which don't have defaults set
    try:
        # Get a Region
        api_response = api_instance.get_region(region_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RegionApi->get_region: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region_id** | **int**|  |

### Return type

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_regions**
> [Region] get_regions()

Get Regions

Get details of all regions

### Example


```python
import time
import openapi_client
from openapi_client.api import region_api
from openapi_client.model.region import Region
from pprint import pprint
# Defining the host is optional and defaults to https://my.sitebay.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = region_api.RegionApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Regions
        api_response = api_instance.get_regions()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RegionApi->get_regions: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Region]**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

