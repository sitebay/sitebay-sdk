# openapi_client.SiteLiveApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_mail_dns**](SiteLiveApi.md#add_mail_dns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**add_mail_dns_0**](SiteLiveApi.md#add_mail_dns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**change_dev_mode**](SiteLiveApi.md#change_dev_mode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**change_dev_mode_0**](SiteLiveApi.md#change_dev_mode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**clear_cache**](SiteLiveApi.md#clear_cache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**clear_cache_0**](SiteLiveApi.md#clear_cache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**commit_site_stage**](SiteLiveApi.md#commit_site_stage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**commit_site_stage_0**](SiteLiveApi.md#commit_site_stage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**create_email**](SiteLiveApi.md#create_email) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**create_email_0**](SiteLiveApi.md#create_email_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**create_external_path**](SiteLiveApi.md#create_external_path) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**create_external_path_0**](SiteLiveApi.md#create_external_path_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**create_site_live**](SiteLiveApi.md#create_site_live) | **POST** /api/v1/site_live | Create a site
[**create_site_live_0**](SiteLiveApi.md#create_site_live_0) | **POST** /api/v1/site_live | Create a site
[**create_site_stage**](SiteLiveApi.md#create_site_stage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**create_site_stage_0**](SiteLiveApi.md#create_site_stage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**create_tag**](SiteLiveApi.md#create_tag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**create_tag_0**](SiteLiveApi.md#create_tag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**delete_dns_record**](SiteLiveApi.md#delete_dns_record) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**delete_dns_record_0**](SiteLiveApi.md#delete_dns_record_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**delete_email**](SiteLiveApi.md#delete_email) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**delete_email_0**](SiteLiveApi.md#delete_email_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**delete_external_path**](SiteLiveApi.md#delete_external_path) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**delete_external_path_0**](SiteLiveApi.md#delete_external_path_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**delete_site_live**](SiteLiveApi.md#delete_site_live) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**delete_site_live_0**](SiteLiveApi.md#delete_site_live_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**delete_site_stage**](SiteLiveApi.md#delete_site_stage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**delete_site_stage_0**](SiteLiveApi.md#delete_site_stage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**delete_tag**](SiteLiveApi.md#delete_tag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**delete_tag_0**](SiteLiveApi.md#delete_tag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**disable_firewall**](SiteLiveApi.md#disable_firewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**disable_firewall_0**](SiteLiveApi.md#disable_firewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**enable_firewall**](SiteLiveApi.md#enable_firewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**enable_firewall_0**](SiteLiveApi.md#enable_firewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**get_dns_records**](SiteLiveApi.md#get_dns_records) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**get_dns_records_0**](SiteLiveApi.md#get_dns_records_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**get_emails**](SiteLiveApi.md#get_emails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**get_emails_0**](SiteLiveApi.md#get_emails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**get_external_paths**](SiteLiveApi.md#get_external_paths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**get_external_paths_0**](SiteLiveApi.md#get_external_paths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**get_files_at_point**](SiteLiveApi.md#get_files_at_point) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**get_files_at_point_0**](SiteLiveApi.md#get_files_at_point_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**get_mail_dns**](SiteLiveApi.md#get_mail_dns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**get_mail_dns_0**](SiteLiveApi.md#get_mail_dns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**get_pit_restore**](SiteLiveApi.md#get_pit_restore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**get_pit_restore_0**](SiteLiveApi.md#get_pit_restore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**get_pit_restores**](SiteLiveApi.md#get_pit_restores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**get_pit_restores_0**](SiteLiveApi.md#get_pit_restores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**get_site_live**](SiteLiveApi.md#get_site_live) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**get_site_live_0**](SiteLiveApi.md#get_site_live_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**get_site_plan_usage**](SiteLiveApi.md#get_site_plan_usage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**get_site_plan_usage_0**](SiteLiveApi.md#get_site_plan_usage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**get_sites_live**](SiteLiveApi.md#get_sites_live) | **GET** /api/v1/site_live | Get your sites
[**get_sites_live_0**](SiteLiveApi.md#get_sites_live_0) | **GET** /api/v1/site_live | Get your sites
[**get_tags**](SiteLiveApi.md#get_tags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**get_tags_0**](SiteLiveApi.md#get_tags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**modify_firewall**](SiteLiveApi.md#modify_firewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**modify_firewall_0**](SiteLiveApi.md#modify_firewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**restore_site**](SiteLiveApi.md#restore_site) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**restore_site_0**](SiteLiveApi.md#restore_site_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**shell_cmd_site_live**](SiteLiveApi.md#shell_cmd_site_live) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**shell_cmd_site_live_0**](SiteLiveApi.md#shell_cmd_site_live_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**update_dns_record**](SiteLiveApi.md#update_dns_record) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**update_dns_record_0**](SiteLiveApi.md#update_dns_record_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**update_email**](SiteLiveApi.md#update_email) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**update_email_0**](SiteLiveApi.md#update_email_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**update_site_live**](SiteLiveApi.md#update_site_live) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**update_site_live_0**](SiteLiveApi.md#update_site_live_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**validate_mx_records**](SiteLiveApi.md#validate_mx_records) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
[**validate_mx_records_0**](SiteLiveApi.md#validate_mx_records_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation


# **add_mail_dns**
> bool, date, datetime, dict, float, int, list, str, none_type add_mail_dns(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Create Email DNS records
        api_response = api_instance.add_mail_dns(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->add_mail_dns: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_mail_dns_0**
> bool, date, datetime, dict, float, int, list, str, none_type add_mail_dns_0(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Create Email DNS records
        api_response = api_instance.add_mail_dns_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->add_mail_dns_0: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **change_dev_mode**
> bool, date, datetime, dict, float, int, list, str, none_type change_dev_mode(fqdn, value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    value = "value_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Change HTTP Auth
        api_response = api_instance.change_dev_mode(fqdn, value)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->change_dev_mode: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **value** | **str**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **change_dev_mode_0**
> bool, date, datetime, dict, float, int, list, str, none_type change_dev_mode_0(fqdn, value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    value = "value_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Change HTTP Auth
        api_response = api_instance.change_dev_mode_0(fqdn, value)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->change_dev_mode_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **value** | **str**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clear_cache**
> bool, date, datetime, dict, float, int, list, str, none_type clear_cache(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Clear the cache
        api_response = api_instance.clear_cache(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->clear_cache: %s\n" % e)
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

# **clear_cache_0**
> bool, date, datetime, dict, float, int, list, str, none_type clear_cache_0(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Clear the cache
        api_response = api_instance.clear_cache_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->clear_cache_0: %s\n" % e)
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

# **commit_site_stage**
> bool, date, datetime, dict, float, int, list, str, none_type commit_site_stage(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Commit Stage Site
        api_response = api_instance.commit_site_stage(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->commit_site_stage: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commit_site_stage_0**
> bool, date, datetime, dict, float, int, list, str, none_type commit_site_stage_0(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Commit Stage Site
        api_response = api_instance.commit_site_stage_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->commit_site_stage_0: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_email**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} create_email(fqdn)

Create Email

Create a custom email account

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.user_email_create import UserEmailCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    user_email_create = UserEmailCreate(
        forward_to_email="forward_to_email_example",
        local_part="local_part_example",
        password="password_example",
    ) # UserEmailCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create Email
        api_response = api_instance.create_email(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_email: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create Email
        api_response = api_instance.create_email(fqdn, user_email_create=user_email_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_email: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **user_email_create** | [**UserEmailCreate**](UserEmailCreate.md)|  | [optional]

### Return type

**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}**

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

# **create_email_0**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} create_email_0(fqdn)

Create Email

Create a custom email account

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.user_email_create import UserEmailCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    user_email_create = UserEmailCreate(
        forward_to_email="forward_to_email_example",
        local_part="local_part_example",
        password="password_example",
    ) # UserEmailCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create Email
        api_response = api_instance.create_email_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_email_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create Email
        api_response = api_instance.create_email_0(fqdn, user_email_create=user_email_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_email_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **user_email_create** | [**UserEmailCreate**](UserEmailCreate.md)|  | [optional]

### Return type

**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}**

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

# **create_external_path**
> bool, date, datetime, dict, float, int, list, str, none_type create_external_path(fqdn)

Create External Path

Connect an external URL to your site on a subpath

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.external_path_create import ExternalPathCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    external_path_create = ExternalPathCreate(
        external_name="external_name_example",
        path="path_example",
    ) # ExternalPathCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create External Path
        api_response = api_instance.create_external_path(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_external_path: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create External Path
        api_response = api_instance.create_external_path(fqdn, external_path_create=external_path_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_external_path: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **external_path_create** | [**ExternalPathCreate**](ExternalPathCreate.md)|  | [optional]

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_external_path_0**
> bool, date, datetime, dict, float, int, list, str, none_type create_external_path_0(fqdn)

Create External Path

Connect an external URL to your site on a subpath

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.external_path_create import ExternalPathCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    external_path_create = ExternalPathCreate(
        external_name="external_name_example",
        path="path_example",
    ) # ExternalPathCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create External Path
        api_response = api_instance.create_external_path_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_external_path_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create External Path
        api_response = api_instance.create_external_path_0(fqdn, external_path_create=external_path_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_external_path_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **external_path_create** | [**ExternalPathCreate**](ExternalPathCreate.md)|  | [optional]

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_site_live**
> SiteLive create_site_live()

Create a site

Create a new site by providing your domain and your site's WordPress details

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.unknownbasetype import UNKNOWNBASETYPE
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.site_live import SiteLive
from openapi_client.model.site_live_create import SiteLiveCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    unknown_base_type = None # UNKNOWN_BASE_TYPE |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a site
        api_response = api_instance.create_site_live(unknown_base_type=unknown_base_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_site_live: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_site_live_0**
> SiteLive create_site_live_0()

Create a site

Create a new site by providing your domain and your site's WordPress details

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.unknownbasetype import UNKNOWNBASETYPE
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.site_live import SiteLive
from openapi_client.model.site_live_create import SiteLiveCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    unknown_base_type = None # UNKNOWN_BASE_TYPE |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a site
        api_response = api_instance.create_site_live_0(unknown_base_type=unknown_base_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_site_live_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_site_stage**
> bool, date, datetime, dict, float, int, list, str, none_type create_site_stage(fqdn)

Create a Staging site

Create a staging site on which you can test changes

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.site_stage_create import SiteStageCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    site_stage_create = SiteStageCreate(
        git_branch="git_branch_example",
        restore_point=dateutil_parser('1970-01-01T00:00:00.00Z'),
        subdomain="subdomain_example",
    ) # SiteStageCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create a Staging site
        api_response = api_instance.create_site_stage(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_site_stage: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a Staging site
        api_response = api_instance.create_site_stage(fqdn, site_stage_create=site_stage_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_site_stage: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **site_stage_create** | [**SiteStageCreate**](SiteStageCreate.md)|  | [optional]

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SiteStageSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_site_stage_0**
> bool, date, datetime, dict, float, int, list, str, none_type create_site_stage_0(fqdn)

Create a Staging site

Create a staging site on which you can test changes

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.site_stage_create import SiteStageCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    site_stage_create = SiteStageCreate(
        git_branch="git_branch_example",
        restore_point=dateutil_parser('1970-01-01T00:00:00.00Z'),
        subdomain="subdomain_example",
    ) # SiteStageCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create a Staging site
        api_response = api_instance.create_site_stage_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_site_stage_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a Staging site
        api_response = api_instance.create_site_stage_0(fqdn, site_stage_create=site_stage_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_site_stage_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **site_stage_create** | [**SiteStageCreate**](SiteStageCreate.md)|  | [optional]

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SiteStageSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tag**
> Tag create_tag(fqdn)

Create tag

Create a tag for organizational purposes for your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.tag import Tag
from openapi_client.model.tag_create import TagCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    tag_create = TagCreate(
        name="name_example",
    ) # TagCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create tag
        api_response = api_instance.create_tag(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_tag: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create tag
        api_response = api_instance.create_tag(fqdn, tag_create=tag_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_tag: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **tag_create** | [**TagCreate**](TagCreate.md)|  | [optional]

### Return type

[**Tag**](Tag.md)

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

# **create_tag_0**
> Tag create_tag_0(fqdn)

Create tag

Create a tag for organizational purposes for your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.tag import Tag
from openapi_client.model.tag_create import TagCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    tag_create = TagCreate(
        name="name_example",
    ) # TagCreate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create tag
        api_response = api_instance.create_tag_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_tag_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create tag
        api_response = api_instance.create_tag_0(fqdn, tag_create=tag_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->create_tag_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **tag_create** | [**TagCreate**](TagCreate.md)|  | [optional]

### Return type

[**Tag**](Tag.md)

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

# **delete_dns_record**
> bool, date, datetime, dict, float, int, list, str, none_type delete_dns_record(dns_id, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    dns_id = "dns_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete DNS record
        api_response = api_instance.delete_dns_record(dns_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_dns_record: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dns_id** | **str**|  |
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_dns_record_0**
> bool, date, datetime, dict, float, int, list, str, none_type delete_dns_record_0(dns_id, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    dns_id = "dns_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete DNS record
        api_response = api_instance.delete_dns_record_0(dns_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_dns_record_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dns_id** | **str**|  |
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_email**
> bool, date, datetime, dict, float, int, list, str, none_type delete_email(fqdn, user_email_address)

Delete Email

Delete a custom email account

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    user_email_address = "user_email_address_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Email
        api_response = api_instance.delete_email(fqdn, user_email_address)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_email: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **user_email_address** | **str**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_email_0**
> bool, date, datetime, dict, float, int, list, str, none_type delete_email_0(fqdn, user_email_address)

Delete Email

Delete a custom email account

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    user_email_address = "user_email_address_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Email
        api_response = api_instance.delete_email_0(fqdn, user_email_address)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_email_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **user_email_address** | **str**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_external_path**
> bool, date, datetime, dict, float, int, list, str, none_type delete_external_path(external_path_id, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    external_path_id = "external_path_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete External Path
        api_response = api_instance.delete_external_path(external_path_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_external_path: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_path_id** | **str**|  |
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_external_path_0**
> bool, date, datetime, dict, float, int, list, str, none_type delete_external_path_0(external_path_id, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    external_path_id = "external_path_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete External Path
        api_response = api_instance.delete_external_path_0(external_path_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_external_path_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_path_id** | **str**|  |
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_site_live**
> bool, date, datetime, dict, float, int, list, str, none_type delete_site_live(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete your live site
        api_response = api_instance.delete_site_live(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_site_live: %s\n" % e)
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

# **delete_site_live_0**
> bool, date, datetime, dict, float, int, list, str, none_type delete_site_live_0(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete your live site
        api_response = api_instance.delete_site_live_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_site_live_0: %s\n" % e)
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

# **delete_site_stage**
> bool, date, datetime, dict, float, int, list, str, none_type delete_site_stage(fqdn)

Delete Stage Site

Delete your staging site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Stage Site
        api_response = api_instance.delete_site_stage(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_site_stage: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_site_stage_0**
> bool, date, datetime, dict, float, int, list, str, none_type delete_site_stage_0(fqdn)

Delete Stage Site

Delete your staging site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete Stage Site
        api_response = api_instance.delete_site_stage_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_site_stage_0: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tag**
> [Tag] delete_tag(tag_id, fqdn)

Get a tag

Get a tag by its ID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.tag import Tag
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    tag_id = "tag_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get a tag
        api_response = api_instance.delete_tag(tag_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_tag: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**|  |
 **fqdn** | **str**|  |

### Return type

[**[Tag]**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tag_0**
> [Tag] delete_tag_0(tag_id, fqdn)

Get a tag

Get a tag by its ID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.tag import Tag
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    tag_id = "tag_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get a tag
        api_response = api_instance.delete_tag_0(tag_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->delete_tag_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **str**|  |
 **fqdn** | **str**|  |

### Return type

[**[Tag]**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_firewall**
> bool, date, datetime, dict, float, int, list, str, none_type disable_firewall(fqdn)

Disable the firewall

Disable wp-login firewall

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Disable the firewall
        api_response = api_instance.disable_firewall(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->disable_firewall: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_firewall_0**
> bool, date, datetime, dict, float, int, list, str, none_type disable_firewall_0(fqdn)

Disable the firewall

Disable wp-login firewall

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Disable the firewall
        api_response = api_instance.disable_firewall_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->disable_firewall_0: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_firewall**
> bool, date, datetime, dict, float, int, list, str, none_type enable_firewall(fqdn)

Enable the firewall

Enable the wp-login firewall

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Enable the firewall
        api_response = api_instance.enable_firewall(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->enable_firewall: %s\n" % e)
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
**200** | JSON list of allowed IPs |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_firewall_0**
> bool, date, datetime, dict, float, int, list, str, none_type enable_firewall_0(fqdn)

Enable the firewall

Enable the wp-login firewall

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Enable the firewall
        api_response = api_instance.enable_firewall_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->enable_firewall_0: %s\n" % e)
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
**200** | JSON list of allowed IPs |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dns_records**
> bool, date, datetime, dict, float, int, list, str, none_type get_dns_records(fqdn)

Get DNS records

Get a nameserver configured site's DNS records

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get DNS records
        api_response = api_instance.get_dns_records(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_dns_records: %s\n" % e)
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
**200** | JSON list of DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dns_records_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_dns_records_0(fqdn)

Get DNS records

Get a nameserver configured site's DNS records

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get DNS records
        api_response = api_instance.get_dns_records_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_dns_records_0: %s\n" % e)
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
**200** | JSON list of DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_emails**
> bool, date, datetime, dict, float, int, list, str, none_type get_emails(fqdn)

Get Emails

Get all custom email accounts

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Emails
        api_response = api_instance.get_emails(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_emails: %s\n" % e)
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
**200** | List of UserEmailSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_emails_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_emails_0(fqdn)

Get Emails

Get all custom email accounts

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Emails
        api_response = api_instance.get_emails_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_emails_0: %s\n" % e)
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
**200** | List of UserEmailSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_external_paths**
> bool, date, datetime, dict, float, int, list, str, none_type get_external_paths(fqdn)

Get External Paths

Get details about your site's external path configs

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get External Paths
        api_response = api_instance.get_external_paths(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_external_paths: %s\n" % e)
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
**200** | List of ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_external_paths_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_external_paths_0(fqdn)

Get External Paths

Get details about your site's external path configs

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get External Paths
        api_response = api_instance.get_external_paths_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_external_paths_0: %s\n" % e)
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
**200** | List of ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_files_at_point**
> bool, date, datetime, dict, float, int, list, str, none_type get_files_at_point(fqdn, restore_point)

PIT Files

Get a list of wp-content files at a point in time

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    restore_point = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 

    # example passing only required values which don't have defaults set
    try:
        # PIT Files
        api_response = api_instance.get_files_at_point(fqdn, restore_point)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_files_at_point: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **restore_point** | **datetime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_files_at_point_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_files_at_point_0(fqdn, restore_point)

PIT Files

Get a list of wp-content files at a point in time

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    restore_point = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 

    # example passing only required values which don't have defaults set
    try:
        # PIT Files
        api_response = api_instance.get_files_at_point_0(fqdn, restore_point)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_files_at_point_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **restore_point** | **datetime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mail_dns**
> bool, date, datetime, dict, float, int, list, str, none_type get_mail_dns(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Required mail DNS records
        api_response = api_instance.get_mail_dns(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_mail_dns: %s\n" % e)
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
**200** | JSON list of requisite DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mail_dns_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_mail_dns_0(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Required mail DNS records
        api_response = api_instance.get_mail_dns_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_mail_dns_0: %s\n" % e)
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
**200** | JSON list of requisite DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pit_restore**
> bool, date, datetime, dict, float, int, list, str, none_type get_pit_restore(pit_restore_id, fqdn)

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    pit_restore_id = "pit_restore_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get PIT Restore
        api_response = api_instance.get_pit_restore(pit_restore_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_pit_restore: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pit_restore_id** | **str**|  |
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
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pit_restore_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_pit_restore_0(pit_restore_id, fqdn)

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    pit_restore_id = "pit_restore_id_example" # str | 
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get PIT Restore
        api_response = api_instance.get_pit_restore_0(pit_restore_id, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_pit_restore_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pit_restore_id** | **str**|  |
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
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pit_restores**
> bool, date, datetime, dict, float, int, list, str, none_type get_pit_restores(fqdn)

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get PIT Restores
        api_response = api_instance.get_pit_restores(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_pit_restores: %s\n" % e)
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
**200** | PIT Restores details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pit_restores_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_pit_restores_0(fqdn)

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get PIT Restores
        api_response = api_instance.get_pit_restores_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_pit_restores_0: %s\n" % e)
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
**200** | PIT Restores details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_site_live**
> SiteLive get_site_live(fqdn)

Get your live site

Get details about your live site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.site_live import SiteLive
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get your live site
        api_response = api_instance.get_site_live(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_site_live: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |

### Return type

[**SiteLive**](SiteLive.md)

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

# **get_site_live_0**
> SiteLive get_site_live_0(fqdn)

Get your live site

Get details about your live site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.site_live import SiteLive
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get your live site
        api_response = api_instance.get_site_live_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_site_live_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |

### Return type

[**SiteLive**](SiteLive.md)

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

# **get_site_plan_usage**
> bool, date, datetime, dict, float, int, list, str, none_type get_site_plan_usage(fqdn, start, end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    start = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 
    end = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 

    # example passing only required values which don't have defaults set
    try:
        # Get Site Plan Usage
        api_response = api_instance.get_site_plan_usage(fqdn, start, end)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_site_plan_usage: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **start** | **datetime**|  |
 **end** | **datetime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_site_plan_usage_0**
> bool, date, datetime, dict, float, int, list, str, none_type get_site_plan_usage_0(fqdn, start, end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    start = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 
    end = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime | 

    # example passing only required values which don't have defaults set
    try:
        # Get Site Plan Usage
        api_response = api_instance.get_site_plan_usage_0(fqdn, start, end)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_site_plan_usage_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **start** | **datetime**|  |
 **end** | **datetime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sites_live**
> [SiteLive] get_sites_live()

Get your sites

Get details about all of your live sites

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.site_live import SiteLive
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
    api_instance = site_live_api.SiteLiveApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get your sites
        api_response = api_instance.get_sites_live()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_sites_live: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[SiteLive]**](SiteLive.md)

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

# **get_sites_live_0**
> [SiteLive] get_sites_live_0()

Get your sites

Get details about all of your live sites

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.site_live import SiteLive
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
    api_instance = site_live_api.SiteLiveApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get your sites
        api_response = api_instance.get_sites_live_0()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_sites_live_0: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[SiteLive]**](SiteLive.md)

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

# **get_tags**
> [Tag] get_tags(fqdn)

Get tags

Get all the tags for your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.tag import Tag
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get tags
        api_response = api_instance.get_tags(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_tags: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |

### Return type

[**[Tag]**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tags_0**
> [Tag] get_tags_0(fqdn)

Get tags

Get all the tags for your site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.tag import Tag
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get tags
        api_response = api_instance.get_tags_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->get_tags_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |

### Return type

[**[Tag]**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modify_firewall**
> bool, date, datetime, dict, float, int, list, str, none_type modify_firewall(fqdn, ip_address)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    ip_address = "ip_address_example" # str | 
    add_or_del = "add" # str |  (optional) if omitted the server will use the default value of "add"

    # example passing only required values which don't have defaults set
    try:
        # Modify the firewall
        api_response = api_instance.modify_firewall(fqdn, ip_address)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->modify_firewall: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Modify the firewall
        api_response = api_instance.modify_firewall(fqdn, ip_address, add_or_del=add_or_del)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->modify_firewall: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **ip_address** | **str**|  |
 **add_or_del** | **str**|  | [optional] if omitted the server will use the default value of "add"

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modify_firewall_0**
> bool, date, datetime, dict, float, int, list, str, none_type modify_firewall_0(fqdn, ip_address)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    ip_address = "ip_address_example" # str | 
    add_or_del = "add" # str |  (optional) if omitted the server will use the default value of "add"

    # example passing only required values which don't have defaults set
    try:
        # Modify the firewall
        api_response = api_instance.modify_firewall_0(fqdn, ip_address)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->modify_firewall_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Modify the firewall
        api_response = api_instance.modify_firewall_0(fqdn, ip_address, add_or_del=add_or_del)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->modify_firewall_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **ip_address** | **str**|  |
 **add_or_del** | **str**|  | [optional] if omitted the server will use the default value of "add"

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_site**
> bool, date, datetime, dict, float, int, list, str, none_type restore_site(fqdn, pit_restore_create)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.pit_restore_create import PITRestoreCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    pit_restore_create = PITRestoreCreate(
        for_stage_site=False,
        restore_point=dateutil_parser('1970-01-01T00:00:00.00Z'),
    ) # PITRestoreCreate | 

    # example passing only required values which don't have defaults set
    try:
        # Create PIT Restore
        api_response = api_instance.restore_site(fqdn, pit_restore_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->restore_site: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **pit_restore_create** | [**PITRestoreCreate**](PITRestoreCreate.md)|  |

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_site_0**
> bool, date, datetime, dict, float, int, list, str, none_type restore_site_0(fqdn, pit_restore_create)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.pit_restore_create import PITRestoreCreate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    pit_restore_create = PITRestoreCreate(
        for_stage_site=False,
        restore_point=dateutil_parser('1970-01-01T00:00:00.00Z'),
    ) # PITRestoreCreate | 

    # example passing only required values which don't have defaults set
    try:
        # Create PIT Restore
        api_response = api_instance.restore_site_0(fqdn, pit_restore_create)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->restore_site_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **pit_restore_create** | [**PITRestoreCreate**](PITRestoreCreate.md)|  |

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shell_cmd_site_live**
> bool, date, datetime, dict, float, int, list, str, none_type shell_cmd_site_live(fqdn, cmd)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    cmd = "cmd_example" # str | 
    cwd = "/bitnami/wordpress/wp-content" # str |  (optional) if omitted the server will use the default value of "/bitnami/wordpress/wp-content"
    auto_track_dir = False # bool |  (optional) if omitted the server will use the default value of False
    stage = False # bool |  (optional) if omitted the server will use the default value of False

    # example passing only required values which don't have defaults set
    try:
        # Execute shell command
        api_response = api_instance.shell_cmd_site_live(fqdn, cmd)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->shell_cmd_site_live: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Execute shell command
        api_response = api_instance.shell_cmd_site_live(fqdn, cmd, cwd=cwd, auto_track_dir=auto_track_dir, stage=stage)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->shell_cmd_site_live: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **cmd** | **str**|  |
 **cwd** | **str**|  | [optional] if omitted the server will use the default value of "/bitnami/wordpress/wp-content"
 **auto_track_dir** | **bool**|  | [optional] if omitted the server will use the default value of False
 **stage** | **bool**|  | [optional] if omitted the server will use the default value of False

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

# **shell_cmd_site_live_0**
> bool, date, datetime, dict, float, int, list, str, none_type shell_cmd_site_live_0(fqdn, cmd)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    cmd = "cmd_example" # str | 
    cwd = "/bitnami/wordpress/wp-content" # str |  (optional) if omitted the server will use the default value of "/bitnami/wordpress/wp-content"
    auto_track_dir = False # bool |  (optional) if omitted the server will use the default value of False
    stage = False # bool |  (optional) if omitted the server will use the default value of False

    # example passing only required values which don't have defaults set
    try:
        # Execute shell command
        api_response = api_instance.shell_cmd_site_live_0(fqdn, cmd)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->shell_cmd_site_live_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Execute shell command
        api_response = api_instance.shell_cmd_site_live_0(fqdn, cmd, cwd=cwd, auto_track_dir=auto_track_dir, stage=stage)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->shell_cmd_site_live_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **cmd** | **str**|  |
 **cwd** | **str**|  | [optional] if omitted the server will use the default value of "/bitnami/wordpress/wp-content"
 **auto_track_dir** | **bool**|  | [optional] if omitted the server will use the default value of False
 **stage** | **bool**|  | [optional] if omitted the server will use the default value of False

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

# **update_dns_record**
> bool, date, datetime, dict, float, int, list, str, none_type update_dns_record(fqdn, dns_type, dns_hostname, dns_content)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    dns_type = "dns_type_example" # str | 
    dns_hostname = "dns_hostname_example" # str | 
    dns_content = "dns_content_example" # str | 
    dns_id = "dns_id_example" # str |  (optional)
    dns_priority = 0 # int |  (optional) if omitted the server will use the default value of 0
    dns_ttl = 1 # int |  (optional) if omitted the server will use the default value of 1

    # example passing only required values which don't have defaults set
    try:
        # Update DNS record
        api_response = api_instance.update_dns_record(fqdn, dns_type, dns_hostname, dns_content)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_dns_record: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Update DNS record
        api_response = api_instance.update_dns_record(fqdn, dns_type, dns_hostname, dns_content, dns_id=dns_id, dns_priority=dns_priority, dns_ttl=dns_ttl)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_dns_record: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **dns_type** | **str**|  |
 **dns_hostname** | **str**|  |
 **dns_content** | **str**|  |
 **dns_id** | **str**|  | [optional]
 **dns_priority** | **int**|  | [optional] if omitted the server will use the default value of 0
 **dns_ttl** | **int**|  | [optional] if omitted the server will use the default value of 1

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_dns_record_0**
> bool, date, datetime, dict, float, int, list, str, none_type update_dns_record_0(fqdn, dns_type, dns_hostname, dns_content)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    dns_type = "dns_type_example" # str | 
    dns_hostname = "dns_hostname_example" # str | 
    dns_content = "dns_content_example" # str | 
    dns_id = "dns_id_example" # str |  (optional)
    dns_priority = 0 # int |  (optional) if omitted the server will use the default value of 0
    dns_ttl = 1 # int |  (optional) if omitted the server will use the default value of 1

    # example passing only required values which don't have defaults set
    try:
        # Update DNS record
        api_response = api_instance.update_dns_record_0(fqdn, dns_type, dns_hostname, dns_content)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_dns_record_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Update DNS record
        api_response = api_instance.update_dns_record_0(fqdn, dns_type, dns_hostname, dns_content, dns_id=dns_id, dns_priority=dns_priority, dns_ttl=dns_ttl)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_dns_record_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **dns_type** | **str**|  |
 **dns_hostname** | **str**|  |
 **dns_content** | **str**|  |
 **dns_id** | **str**|  | [optional]
 **dns_priority** | **int**|  | [optional] if omitted the server will use the default value of 0
 **dns_ttl** | **int**|  | [optional] if omitted the server will use the default value of 1

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_email**
> bool, date, datetime, dict, float, int, list, str, none_type update_email(user_email_address, fqdn)

Update Email

Update a custom email account

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.user_email_update import UserEmailUpdate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    user_email_address = "user_email_address_example" # str | 
    fqdn = "fqdn_example" # str | 
    user_email_update = UserEmailUpdate(
        is_catchall=True,
        password="password_example",
    ) # UserEmailUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Update Email
        api_response = api_instance.update_email(user_email_address, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_email: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Update Email
        api_response = api_instance.update_email(user_email_address, fqdn, user_email_update=user_email_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_email: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email_address** | **str**|  |
 **fqdn** | **str**|  |
 **user_email_update** | [**UserEmailUpdate**](UserEmailUpdate.md)|  | [optional]

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_email_0**
> bool, date, datetime, dict, float, int, list, str, none_type update_email_0(user_email_address, fqdn)

Update Email

Update a custom email account

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.user_email_update import UserEmailUpdate
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    user_email_address = "user_email_address_example" # str | 
    fqdn = "fqdn_example" # str | 
    user_email_update = UserEmailUpdate(
        is_catchall=True,
        password="password_example",
    ) # UserEmailUpdate |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Update Email
        api_response = api_instance.update_email_0(user_email_address, fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_email_0: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Update Email
        api_response = api_instance.update_email_0(user_email_address, fqdn, user_email_update=user_email_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_email_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email_address** | **str**|  |
 **fqdn** | **str**|  |
 **user_email_update** | [**UserEmailUpdate**](UserEmailUpdate.md)|  | [optional]

### Return type

**bool, date, datetime, dict, float, int, list, str, none_type**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_site_live**
> SiteLive update_site_live(fqdn, site_live_update)

Update a site

Update a site's details

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.site_live_update import SiteLiveUpdate
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.site_live import SiteLive
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    site_live_update = SiteLiveUpdate(
        fqdn="fqdn_example",
        git_url="git_url_example",
        http_auth_enabled=True,
        team_id="team_id_example",
    ) # SiteLiveUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Update a site
        api_response = api_instance.update_site_live(fqdn, site_live_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_site_live: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **site_live_update** | [**SiteLiveUpdate**](SiteLiveUpdate.md)|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_site_live_0**
> SiteLive update_site_live_0(fqdn, site_live_update)

Update a site

Update a site's details

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
from openapi_client.model.site_live_update import SiteLiveUpdate
from openapi_client.model.http_validation_error import HTTPValidationError
from openapi_client.model.site_live import SiteLive
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 
    site_live_update = SiteLiveUpdate(
        fqdn="fqdn_example",
        git_url="git_url_example",
        http_auth_enabled=True,
        team_id="team_id_example",
    ) # SiteLiveUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Update a site
        api_response = api_instance.update_site_live_0(fqdn, site_live_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->update_site_live_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **str**|  |
 **site_live_update** | [**SiteLiveUpdate**](SiteLiveUpdate.md)|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_mx_records**
> bool, date, datetime, dict, float, int, list, str, none_type validate_mx_records(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # MX Validation
        api_response = api_instance.validate_mx_records(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->validate_mx_records: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_mx_records_0**
> bool, date, datetime, dict, float, int, list, str, none_type validate_mx_records_0(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import site_live_api
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
    api_instance = site_live_api.SiteLiveApi(api_client)
    fqdn = "fqdn_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # MX Validation
        api_response = api_instance.validate_mx_records_0(fqdn)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SiteLiveApi->validate_mx_records_0: %s\n" % e)
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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

