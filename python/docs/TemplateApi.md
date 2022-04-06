# openapi_client.TemplateApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_template**](TemplateApi.md#get_template) | **GET** /api/v1/template/{template_name} | Get Templates
[**get_templates**](TemplateApi.md#get_templates) | **GET** /api/v1/template | Get Templates
[**submit_template**](TemplateApi.md#submit_template) | **POST** /api/v1/template | Create Template


# **get_template**
> Template get_template(template_name)

Get Templates

Get details of a ready-made template sites by its name

### Example


```python
import time
import openapi_client
from openapi_client.api import template_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.template import Template
from pprint import pprint
# Defining the host is optional and defaults to https://my.sitebay.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = template_api.TemplateApi(api_client)
    template_name = "template_name_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Templates
        api_response = api_instance.get_template(template_name)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TemplateApi->get_template: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_name** | **str**|  |

### Return type

[**Template**](Template.md)

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

# **get_templates**
> [Template] get_templates()

Get Templates

Returns a list of ready-made template sites

### Example


```python
import time
import openapi_client
from openapi_client.api import template_api
from openapi_client.model.template import Template
from pprint import pprint
# Defining the host is optional and defaults to https://my.sitebay.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://my.sitebay.org"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = template_api.TemplateApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Templates
        api_response = api_instance.get_templates()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TemplateApi->get_templates: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Template]**](Template.md)

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

# **submit_template**
> Template submit_template()

Create Template

Create a new template by uploading a wpress file

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import template_api
from openapi_client.model.template_create import TemplateCreate
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.template import Template
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
    api_instance = template_api.TemplateApi(api_client)
    template_create = TemplateCreate(
        full_description="full_description_example",
        name="name_example",
        plugins="plugins_example",
        quickstart="quickstart_example",
        short_description="short_description_example",
        tag="tag_example",
        wpress_url="wpress_url_example",
    ) # TemplateCreate |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create Template
        api_response = api_instance.submit_template(template_create=template_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TemplateApi->submit_template: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_create** | [**TemplateCreate**](TemplateCreate.md)|  | [optional]

### Return type

[**Template**](Template.md)

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

