# openapi_client.MigrationApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_migration**](MigrationApi.md#create_migration) | **POST** /api/v1/migration | Create a migration
[**delete_migration**](MigrationApi.md#delete_migration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
[**get_migrations**](MigrationApi.md#get_migrations) | **GET** /api/v1/migration | Get Migrations


# **create_migration**
> Migration create_migration(current_url, wordpress_password, wordpress_user)

Create a migration

Request a new site migration by providing your old host's domain and your site's login details

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import migration_api
from openapi_client.model.migration import Migration
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
    api_instance = migration_api.MigrationApi(api_client)
    current_url = "current_url_example" # str | 
    wordpress_password = "wordpress_password_example" # str | 
    wordpress_user = "wordpress_user_example" # str | 
    extra = "extra_example" # str |  (optional)
    ftp_address = "ftp_address_example" # str |  (optional)
    ftp_password = "ftp_password_example" # str |  (optional)
    ftp_user = "ftp_user_example" # str |  (optional)
    host = "host_example" # str |  (optional)
    host_password = "host_password_example" # str |  (optional)
    host_user = "host_user_example" # str |  (optional)
    migration_type = "migration_type_example" # str |  (optional)
    zip_file = open('/path/to/file', 'rb') # file_type |  (optional)
    zip_file_name = "zip_file_name_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create a migration
        api_response = api_instance.create_migration(current_url, wordpress_password, wordpress_user)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MigrationApi->create_migration: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a migration
        api_response = api_instance.create_migration(current_url, wordpress_password, wordpress_user, extra=extra, ftp_address=ftp_address, ftp_password=ftp_password, ftp_user=ftp_user, host=host, host_password=host_password, host_user=host_user, migration_type=migration_type, zip_file=zip_file, zip_file_name=zip_file_name)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MigrationApi->create_migration: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_url** | **str**|  |
 **wordpress_password** | **str**|  |
 **wordpress_user** | **str**|  |
 **extra** | **str**|  | [optional]
 **ftp_address** | **str**|  | [optional]
 **ftp_password** | **str**|  | [optional]
 **ftp_user** | **str**|  | [optional]
 **host** | **str**|  | [optional]
 **host_password** | **str**|  | [optional]
 **host_user** | **str**|  | [optional]
 **migration_type** | **str**|  | [optional]
 **zip_file** | **file_type**|  | [optional]
 **zip_file_name** | **str**|  | [optional]

### Return type

[**Migration**](Migration.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new migration&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_migration**
> bool, date, datetime, dict, float, int, list, str, none_type delete_migration(migration_id)

Delete Migration

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import migration_api
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
    api_instance = migration_api.MigrationApi(api_client)
    migration_id = 1 # int | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Migration
        api_response = api_instance.delete_migration(migration_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MigrationApi->delete_migration: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migration_id** | **int**|  |

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

# **get_migrations**
> [Migration] get_migrations()

Get Migrations

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import migration_api
from openapi_client.model.migration import Migration
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
    api_instance = migration_api.MigrationApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get Migrations
        api_response = api_instance.get_migrations()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MigrationApi->get_migrations: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Migration]**](Migration.md)

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

