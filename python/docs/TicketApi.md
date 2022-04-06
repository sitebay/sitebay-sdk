# openapi_client.TicketApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_ticket**](TicketApi.md#create_ticket) | **POST** /api/v1/ticket | Create Ticket
[**create_ticket_reply**](TicketApi.md#create_ticket_reply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
[**delete_ticket**](TicketApi.md#delete_ticket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
[**get_ticket**](TicketApi.md#get_ticket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
[**get_tickets**](TicketApi.md#get_tickets) | **GET** /api/v1/ticket | Get Tickets
[**update_ticket**](TicketApi.md#update_ticket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket


# **create_ticket**
> Ticket create_ticket()

Create Ticket

Create a support ticket request

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import ticket_api
from openapi_client.model.ticket_create import TicketCreate
from openapi_client.model.unknownbasetype import UNKNOWNBASETYPE
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.ticket import Ticket
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
    api_instance = ticket_api.TicketApi(api_client)
    unknown_base_type = None # UNKNOWN_BASE_TYPE |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create Ticket
        api_response = api_instance.create_ticket(unknown_base_type=unknown_base_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TicketApi->create_ticket: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**Ticket**](Ticket.md)

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

# **create_ticket_reply**
> TicketReply create_ticket_reply(ticket_id)

Create Ticket Reply

Reply to a support ticket request

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import ticket_api
from openapi_client.model.unknownbasetype import UNKNOWNBASETYPE
from openapi_client.model.ticket_reply import TicketReply
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.ticket_reply_create import TicketReplyCreate
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
    api_instance = ticket_api.TicketApi(api_client)
    ticket_id = 1 # int | 
    unknown_base_type = None # UNKNOWN_BASE_TYPE |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create Ticket Reply
        api_response = api_instance.create_ticket_reply(ticket_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TicketApi->create_ticket_reply: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create Ticket Reply
        api_response = api_instance.create_ticket_reply(ticket_id, unknown_base_type=unknown_base_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TicketApi->create_ticket_reply: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**TicketReply**](TicketReply.md)

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

# **delete_ticket**
> bool, date, datetime, dict, float, int, list, str, none_type delete_ticket(ticket_id)

Delete Ticket

Delete a support ticket request by its ID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import ticket_api
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
    api_instance = ticket_api.TicketApi(api_client)
    ticket_id = 1 # int | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Ticket
        api_response = api_instance.delete_ticket(ticket_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TicketApi->delete_ticket: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |

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

# **get_ticket**
> Ticket get_ticket(ticket_id)

Get Ticket

Get a support ticket request by its ID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import ticket_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.ticket import Ticket
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
    api_instance = ticket_api.TicketApi(api_client)
    ticket_id = 1 # int | 

    # example passing only required values which don't have defaults set
    try:
        # Get Ticket
        api_response = api_instance.get_ticket(ticket_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TicketApi->get_ticket: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |

### Return type

[**Ticket**](Ticket.md)

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

# **get_tickets**
> [Ticket] get_tickets()

Get Tickets

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import ticket_api
from openapi_client.model.ticket import Ticket
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
    api_instance = ticket_api.TicketApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Tickets
        api_response = api_instance.get_tickets()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TicketApi->get_tickets: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ticket]**](Ticket.md)

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

# **update_ticket**
> Ticket update_ticket(ticket_id, ticket_update)

Update Ticket

Update a support ticket request

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import ticket_api
from openapi_client.model.ticket_update import TicketUpdate
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.ticket import Ticket
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
    api_instance = ticket_api.TicketApi(api_client)
    ticket_id = 1 # int | 
    ticket_update = TicketUpdate(
        subject="subject_example",
    ) # TicketUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Update Ticket
        api_response = api_instance.update_ticket(ticket_id, ticket_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TicketApi->update_ticket: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |
 **ticket_update** | [**TicketUpdate**](TicketUpdate.md)|  |

### Return type

[**Ticket**](Ticket.md)

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

