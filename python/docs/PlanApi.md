# openapi_client.PlanApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_plan**](PlanApi.md#cancel_plan) | **DELETE** /api/v1/plan/{plan_id} | Cancel Plan
[**create_plan**](PlanApi.md#create_plan) | **POST** /api/v1/plan | Create a Plan
[**get_plan**](PlanApi.md#get_plan) | **GET** /api/v1/plan/{plan_id} | Get Plan
[**get_plans**](PlanApi.md#get_plans) | **GET** /api/v1/plan | Get Plans
[**preview_change**](PlanApi.md#preview_change) | **GET** /api/v1/plan/{plan_id}/preview | Preview Plan
[**uncancel_plan**](PlanApi.md#uncancel_plan) | **PATCH** /api/v1/plan/{plan_id} | Uncancel Plan
[**update_plan**](PlanApi.md#update_plan) | **PUT** /api/v1/plan/{plan_id} | Update a Plan


# **cancel_plan**
> bool, date, datetime, dict, float, int, list, str, none_type cancel_plan(plan_id)

Cancel Plan

Cancel your plan, which will delete it at the end of your cycle

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import plan_api
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
    api_instance = plan_api.PlanApi(api_client)
    plan_id = "plan_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Cancel Plan
        api_response = api_instance.cancel_plan(plan_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlanApi->cancel_plan: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **str**|  |

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

# **create_plan**
> Plan create_plan()

Create a Plan

Buy a new plan/team

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import plan_api
from openapi_client.model.unknownbasetype import UNKNOWNBASETYPE
from openapi_client.model.plan import Plan
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.plan_create import PlanCreate
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
    api_instance = plan_api.PlanApi(api_client)
    unknown_base_type = None # UNKNOWN_BASE_TYPE |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a Plan
        api_response = api_instance.create_plan(unknown_base_type=unknown_base_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlanApi->create_plan: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_plan**
> Plan get_plan(plan_id)

Get Plan

Get a plan by its UUID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import plan_api
from openapi_client.model.plan import Plan
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
    api_instance = plan_api.PlanApi(api_client)
    plan_id = "plan_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Plan
        api_response = api_instance.get_plan(plan_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlanApi->get_plan: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **str**|  |

### Return type

[**Plan**](Plan.md)

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

# **get_plans**
> [Plan] get_plans()

Get Plans

Get all your active plans

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import plan_api
from openapi_client.model.plan import Plan
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
    api_instance = plan_api.PlanApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Plans
        api_response = api_instance.get_plans()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlanApi->get_plans: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Plan]**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **preview_change**
> bool, date, datetime, dict, float, int, list, str, none_type preview_change(plan_id, new_plan_type_name, additional_sites)

Preview Plan

Preview the proration change before you upgrade or downgrade your plan

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import plan_api
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
    api_instance = plan_api.PlanApi(api_client)
    plan_id = "plan_id_example" # str | 
    new_plan_type_name = "new_plan_type_name_example" # str | 
    additional_sites = 1 # int | 

    # example passing only required values which don't have defaults set
    try:
        # Preview Plan
        api_response = api_instance.preview_change(plan_id, new_plan_type_name, additional_sites)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlanApi->preview_change: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **str**|  |
 **new_plan_type_name** | **str**|  |
 **additional_sites** | **int**|  |

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

# **uncancel_plan**
> bool, date, datetime, dict, float, int, list, str, none_type uncancel_plan(plan_id)

Uncancel Plan

Uncancel your cancelled plan

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import plan_api
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
    api_instance = plan_api.PlanApi(api_client)
    plan_id = "plan_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Uncancel Plan
        api_response = api_instance.uncancel_plan(plan_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlanApi->uncancel_plan: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **str**|  |

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

# **update_plan**
> Plan update_plan(plan_id, plan_update)

Update a Plan

Upgrade or downgrade your plan

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import plan_api
from openapi_client.model.plan_update import PlanUpdate
from openapi_client.model.plan import Plan
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
    api_instance = plan_api.PlanApi(api_client)
    plan_id = "plan_id_example" # str | 
    plan_update = PlanUpdate(
        additional_sites=1,
        plan_type_name="plan_type_name_example",
    ) # PlanUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Update a Plan
        api_response = api_instance.update_plan(plan_id, plan_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling PlanApi->update_plan: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **str**|  |
 **plan_update** | [**PlanUpdate**](PlanUpdate.md)|  |

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

