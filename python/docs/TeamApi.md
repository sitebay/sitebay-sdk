# openapi_client.TeamApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_team**](TeamApi.md#get_team) | **GET** /api/v1/team/{team_id} | Get a team
[**get_team_0**](TeamApi.md#get_team_0) | **GET** /api/v1/team/{team_id} | Get a team
[**get_team_member**](TeamApi.md#get_team_member) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**get_team_member_0**](TeamApi.md#get_team_member_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**get_team_members**](TeamApi.md#get_team_members) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**get_team_members_0**](TeamApi.md#get_team_members_0) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**get_teams**](TeamApi.md#get_teams) | **GET** /api/v1/team | Get your owned teams
[**get_teams_0**](TeamApi.md#get_teams_0) | **GET** /api/v1/team | Get your owned teams
[**remove_team_member**](TeamApi.md#remove_team_member) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**remove_team_member_0**](TeamApi.md#remove_team_member_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**update_team**](TeamApi.md#update_team) | **PUT** /api/v1/team/{team_id} | Update a Team
[**update_team_0**](TeamApi.md#update_team_0) | **PUT** /api/v1/team/{team_id} | Update a Team


# **get_team**
> Team get_team(team_id)

Get a team

Get details about an owned team team by its ID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team import Team
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
    api_instance = team_api.TeamApi(api_client)
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get a team
        api_response = api_instance.get_team(team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_team: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  |

### Return type

[**Team**](Team.md)

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

# **get_team_0**
> Team get_team_0(team_id)

Get a team

Get details about an owned team team by its ID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team import Team
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
    api_instance = team_api.TeamApi(api_client)
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get a team
        api_response = api_instance.get_team_0(team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_team_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  |

### Return type

[**Team**](Team.md)

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

# **get_team_member**
> TeamMember get_team_member(team_member_id, team_id)

Get Team Member

Get a Team Member by their UUID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team_member import TeamMember
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
    api_instance = team_api.TeamApi(api_client)
    team_member_id = "team_member_id_example" # str | 
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Team Member
        api_response = api_instance.get_team_member(team_member_id, team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_team_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **str**|  |
 **team_id** | **str**|  |

### Return type

[**TeamMember**](TeamMember.md)

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

# **get_team_member_0**
> TeamMember get_team_member_0(team_member_id, team_id)

Get Team Member

Get a Team Member by their UUID

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team_member import TeamMember
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
    api_instance = team_api.TeamApi(api_client)
    team_member_id = "team_member_id_example" # str | 
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get Team Member
        api_response = api_instance.get_team_member_0(team_member_id, team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_team_member_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **str**|  |
 **team_id** | **str**|  |

### Return type

[**TeamMember**](TeamMember.md)

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

# **get_team_members**
> [TeamMember] get_team_members(team_id)

Get a team's members

Get a list of Team Members

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team_member import TeamMember
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
    api_instance = team_api.TeamApi(api_client)
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get a team's members
        api_response = api_instance.get_team_members(team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_team_members: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  |

### Return type

[**[TeamMember]**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your teams members |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_team_members_0**
> [TeamMember] get_team_members_0(team_id)

Get a team's members

Get a list of Team Members

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team_member import TeamMember
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
    api_instance = team_api.TeamApi(api_client)
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get a team's members
        api_response = api_instance.get_team_members_0(team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_team_members_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  |

### Return type

[**[TeamMember]**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your teams members |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_teams**
> [Team] get_teams()

Get your owned teams

Get details about all of your owned teams

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team import Team
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
    api_instance = team_api.TeamApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get your owned teams
        api_response = api_instance.get_teams()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_teams: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Team]**](Team.md)

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

# **get_teams_0**
> [Team] get_teams_0()

Get your owned teams

Get details about all of your owned teams

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team import Team
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
    api_instance = team_api.TeamApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get your owned teams
        api_response = api_instance.get_teams_0()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->get_teams_0: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Team]**](Team.md)

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

# **remove_team_member**
> bool, date, datetime, dict, float, int, list, str, none_type remove_team_member(team_member_id, team_id)

Remove Team Member

Remove a team member

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
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
    api_instance = team_api.TeamApi(api_client)
    team_member_id = "team_member_id_example" # str | 
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Remove Team Member
        api_response = api_instance.remove_team_member(team_member_id, team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->remove_team_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **str**|  |
 **team_id** | **str**|  |

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

# **remove_team_member_0**
> bool, date, datetime, dict, float, int, list, str, none_type remove_team_member_0(team_member_id, team_id)

Remove Team Member

Remove a team member

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
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
    api_instance = team_api.TeamApi(api_client)
    team_member_id = "team_member_id_example" # str | 
    team_id = "team_id_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Remove Team Member
        api_response = api_instance.remove_team_member_0(team_member_id, team_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->remove_team_member_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **str**|  |
 **team_id** | **str**|  |

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

# **update_team**
> Team update_team(team_id, team_update)

Update a Team

Adjust your team's settings

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team_update import TeamUpdate
from openapi_client.model.team import Team
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
    api_instance = team_api.TeamApi(api_client)
    team_id = "team_id_example" # str | 
    team_update = TeamUpdate(
        name="name_example",
        timezone="timezone_example",
    ) # TeamUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Update a Team
        api_response = api_instance.update_team(team_id, team_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->update_team: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  |
 **team_update** | [**TeamUpdate**](TeamUpdate.md)|  |

### Return type

[**Team**](Team.md)

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

# **update_team_0**
> Team update_team_0(team_id, team_update)

Update a Team

Adjust your team's settings

### Example

* OAuth Authentication (OAuth2PasswordBearer):

```python
import time
import openapi_client
from openapi_client.api import team_api
from openapi_client.model.team_update import TeamUpdate
from openapi_client.model.team import Team
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
    api_instance = team_api.TeamApi(api_client)
    team_id = "team_id_example" # str | 
    team_update = TeamUpdate(
        name="name_example",
        timezone="timezone_example",
    ) # TeamUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Update a Team
        api_response = api_instance.update_team_0(team_id, team_update)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TeamApi->update_team_0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  |
 **team_update** | [**TeamUpdate**](TeamUpdate.md)|  |

### Return type

[**Team**](Team.md)

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

