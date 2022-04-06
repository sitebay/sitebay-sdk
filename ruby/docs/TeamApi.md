# OpenapiClient::TeamApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_team**](TeamApi.md#get_team) | **GET** /api/v1/team/{team_id} | Get a team |
| [**get_team_0**](TeamApi.md#get_team_0) | **GET** /api/v1/team/{team_id} | Get a team |
| [**get_team_member**](TeamApi.md#get_team_member) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member |
| [**get_team_member_0**](TeamApi.md#get_team_member_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member |
| [**get_team_members**](TeamApi.md#get_team_members) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members |
| [**get_team_members_0**](TeamApi.md#get_team_members_0) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members |
| [**get_teams**](TeamApi.md#get_teams) | **GET** /api/v1/team | Get your owned teams |
| [**get_teams_0**](TeamApi.md#get_teams_0) | **GET** /api/v1/team | Get your owned teams |
| [**remove_team_member**](TeamApi.md#remove_team_member) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member |
| [**remove_team_member_0**](TeamApi.md#remove_team_member_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member |
| [**update_team**](TeamApi.md#update_team) | **PUT** /api/v1/team/{team_id} | Update a Team |
| [**update_team_0**](TeamApi.md#update_team_0) | **PUT** /api/v1/team/{team_id} | Update a Team |


## get_team

> <Team> get_team(team_id)

Get a team

Get details about an owned team team by its ID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_id = 'team_id_example' # String | 

begin
  # Get a team
  result = api_instance.get_team(team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team: #{e}"
end
```

#### Using the get_team_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Team>, Integer, Hash)> get_team_with_http_info(team_id)

```ruby
begin
  # Get a team
  data, status_code, headers = api_instance.get_team_with_http_info(team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Team>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_id** | **String** |  |  |

### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_team_0

> <Team> get_team_0(team_id)

Get a team

Get details about an owned team team by its ID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_id = 'team_id_example' # String | 

begin
  # Get a team
  result = api_instance.get_team_0(team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_0: #{e}"
end
```

#### Using the get_team_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Team>, Integer, Hash)> get_team_0_with_http_info(team_id)

```ruby
begin
  # Get a team
  data, status_code, headers = api_instance.get_team_0_with_http_info(team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Team>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_id** | **String** |  |  |

### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_team_member

> <TeamMember> get_team_member(team_member_id, team_id)

Get Team Member

Get a Team Member by their UUID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_member_id = 'team_member_id_example' # String | 
team_id = 'team_id_example' # String | 

begin
  # Get Team Member
  result = api_instance.get_team_member(team_member_id, team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_member: #{e}"
end
```

#### Using the get_team_member_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TeamMember>, Integer, Hash)> get_team_member_with_http_info(team_member_id, team_id)

```ruby
begin
  # Get Team Member
  data, status_code, headers = api_instance.get_team_member_with_http_info(team_member_id, team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TeamMember>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_member_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_member_id** | **String** |  |  |
| **team_id** | **String** |  |  |

### Return type

[**TeamMember**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_team_member_0

> <TeamMember> get_team_member_0(team_member_id, team_id)

Get Team Member

Get a Team Member by their UUID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_member_id = 'team_member_id_example' # String | 
team_id = 'team_id_example' # String | 

begin
  # Get Team Member
  result = api_instance.get_team_member_0(team_member_id, team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_member_0: #{e}"
end
```

#### Using the get_team_member_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TeamMember>, Integer, Hash)> get_team_member_0_with_http_info(team_member_id, team_id)

```ruby
begin
  # Get Team Member
  data, status_code, headers = api_instance.get_team_member_0_with_http_info(team_member_id, team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TeamMember>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_member_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_member_id** | **String** |  |  |
| **team_id** | **String** |  |  |

### Return type

[**TeamMember**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_team_members

> <Array<TeamMember>> get_team_members(team_id)

Get a team's members

Get a list of Team Members

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_id = 'team_id_example' # String | 

begin
  # Get a team's members
  result = api_instance.get_team_members(team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_members: #{e}"
end
```

#### Using the get_team_members_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<TeamMember>>, Integer, Hash)> get_team_members_with_http_info(team_id)

```ruby
begin
  # Get a team's members
  data, status_code, headers = api_instance.get_team_members_with_http_info(team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<TeamMember>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_members_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_id** | **String** |  |  |

### Return type

[**Array&lt;TeamMember&gt;**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_team_members_0

> <Array<TeamMember>> get_team_members_0(team_id)

Get a team's members

Get a list of Team Members

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_id = 'team_id_example' # String | 

begin
  # Get a team's members
  result = api_instance.get_team_members_0(team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_members_0: #{e}"
end
```

#### Using the get_team_members_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<TeamMember>>, Integer, Hash)> get_team_members_0_with_http_info(team_id)

```ruby
begin
  # Get a team's members
  data, status_code, headers = api_instance.get_team_members_0_with_http_info(team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<TeamMember>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_team_members_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_id** | **String** |  |  |

### Return type

[**Array&lt;TeamMember&gt;**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_teams

> <Array<Team>> get_teams

Get your owned teams

Get details about all of your owned teams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new

begin
  # Get your owned teams
  result = api_instance.get_teams
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_teams: #{e}"
end
```

#### Using the get_teams_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Team>>, Integer, Hash)> get_teams_with_http_info

```ruby
begin
  # Get your owned teams
  data, status_code, headers = api_instance.get_teams_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Team>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_teams_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Team&gt;**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_teams_0

> <Array<Team>> get_teams_0

Get your owned teams

Get details about all of your owned teams

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new

begin
  # Get your owned teams
  result = api_instance.get_teams_0
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_teams_0: #{e}"
end
```

#### Using the get_teams_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Team>>, Integer, Hash)> get_teams_0_with_http_info

```ruby
begin
  # Get your owned teams
  data, status_code, headers = api_instance.get_teams_0_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Team>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->get_teams_0_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Team&gt;**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## remove_team_member

> Object remove_team_member(team_member_id, team_id)

Remove Team Member

Remove a team member

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_member_id = 'team_member_id_example' # String | 
team_id = 'team_id_example' # String | 

begin
  # Remove Team Member
  result = api_instance.remove_team_member(team_member_id, team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->remove_team_member: #{e}"
end
```

#### Using the remove_team_member_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> remove_team_member_with_http_info(team_member_id, team_id)

```ruby
begin
  # Remove Team Member
  data, status_code, headers = api_instance.remove_team_member_with_http_info(team_member_id, team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->remove_team_member_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_member_id** | **String** |  |  |
| **team_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## remove_team_member_0

> Object remove_team_member_0(team_member_id, team_id)

Remove Team Member

Remove a team member

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_member_id = 'team_member_id_example' # String | 
team_id = 'team_id_example' # String | 

begin
  # Remove Team Member
  result = api_instance.remove_team_member_0(team_member_id, team_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->remove_team_member_0: #{e}"
end
```

#### Using the remove_team_member_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> remove_team_member_0_with_http_info(team_member_id, team_id)

```ruby
begin
  # Remove Team Member
  data, status_code, headers = api_instance.remove_team_member_0_with_http_info(team_member_id, team_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->remove_team_member_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_member_id** | **String** |  |  |
| **team_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_team

> <Team> update_team(team_id, team_update)

Update a Team

Adjust your team's settings

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_id = 'team_id_example' # String | 
team_update = OpenapiClient::TeamUpdate.new # TeamUpdate | 

begin
  # Update a Team
  result = api_instance.update_team(team_id, team_update)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->update_team: #{e}"
end
```

#### Using the update_team_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Team>, Integer, Hash)> update_team_with_http_info(team_id, team_update)

```ruby
begin
  # Update a Team
  data, status_code, headers = api_instance.update_team_with_http_info(team_id, team_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Team>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->update_team_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_id** | **String** |  |  |
| **team_update** | [**TeamUpdate**](TeamUpdate.md) |  |  |

### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update_team_0

> <Team> update_team_0(team_id, team_update)

Update a Team

Adjust your team's settings

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TeamApi.new
team_id = 'team_id_example' # String | 
team_update = OpenapiClient::TeamUpdate.new # TeamUpdate | 

begin
  # Update a Team
  result = api_instance.update_team_0(team_id, team_update)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->update_team_0: #{e}"
end
```

#### Using the update_team_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Team>, Integer, Hash)> update_team_0_with_http_info(team_id, team_update)

```ruby
begin
  # Update a Team
  data, status_code, headers = api_instance.update_team_0_with_http_info(team_id, team_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Team>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TeamApi->update_team_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **team_id** | **String** |  |  |
| **team_update** | [**TeamUpdate**](TeamUpdate.md) |  |  |

### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

