# openapi_client.UtilsApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domain_check**](UtilsApi.md#domain_check) | **GET** /api/v1/domain_check | Domain check
[**verify_git_sync_directories**](UtilsApi.md#verify_git_sync_directories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


# **domain_check**
> bool, date, datetime, dict, float, int, list, str, none_type domain_check(fqdn)

Domain check

Returns success if a given FQDN's DNS records are correctly set up

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import utils_api
from openapi_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to https://my.sitebay.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2PasswordBearer
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = utils_api.UtilsApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Domain check
        api_response = api_instance.domain_check(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UtilsApi->domain_check: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_git_sync_directories**
> bool, date, datetime, dict, float, int, list, str, none_type verify_git_sync_directories(git_url)

Verify Git Sync Directories

Returns success Git Repo's root folder is correctly set up

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import utils_api
from openapi_client.model.http_validation_error import HTTPValidationError
from pprint import pprint
# Defining the host is optional and defaults to https://my.sitebay.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure OAuth2 access token for authorization: OAuth2PasswordBearer
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)
configuration.access_token = 'YOUR_ACCESS_TOKEN'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = utils_api.UtilsApi(api_client)
    git_url = "git_url_example" # str | 
    git_branch = "git_branch_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Verify Git Sync Directories
        api_response = api_instance.verify_git_sync_directories(git_url)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UtilsApi->verify_git_sync_directories: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Verify Git Sync Directories
        api_response = api_instance.verify_git_sync_directories(git_url, git_branch=git_branch)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling UtilsApi->verify_git_sync_directories: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_url** | **str**|  |
 **git_branch** | **str**|  | [optional]

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

