# OpenapiClient::PlanApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cancel_plan**](PlanApi.md#cancel_plan) | **DELETE** /api/v1/plan/{plan_id} | Cancel Plan |
| [**create_plan**](PlanApi.md#create_plan) | **POST** /api/v1/plan | Create a Plan |
| [**get_plan**](PlanApi.md#get_plan) | **GET** /api/v1/plan/{plan_id} | Get Plan |
| [**get_plans**](PlanApi.md#get_plans) | **GET** /api/v1/plan | Get Plans |
| [**preview_change**](PlanApi.md#preview_change) | **GET** /api/v1/plan/{plan_id}/preview | Preview Plan |
| [**uncancel_plan**](PlanApi.md#uncancel_plan) | **PATCH** /api/v1/plan/{plan_id} | Uncancel Plan |
| [**update_plan**](PlanApi.md#update_plan) | **PUT** /api/v1/plan/{plan_id} | Update a Plan |


## cancel_plan

> Object cancel_plan(plan_id)

Cancel Plan

Cancel your plan, which will delete it at the end of your cycle

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::PlanApi.new
plan_id = 'plan_id_example' # String | 

begin
  # Cancel Plan
  result = api_instance.cancel_plan(plan_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->cancel_plan: #{e}"
end
```

#### Using the cancel_plan_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> cancel_plan_with_http_info(plan_id)

```ruby
begin
  # Cancel Plan
  data, status_code, headers = api_instance.cancel_plan_with_http_info(plan_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->cancel_plan_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **plan_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create_plan

> <Plan> create_plan(opts)

Create a Plan

Buy a new plan/team

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::PlanApi.new
opts = {
  unknown_base_type: TODO # UNKNOWN_BASE_TYPE | 
}

begin
  # Create a Plan
  result = api_instance.create_plan(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->create_plan: #{e}"
end
```

#### Using the create_plan_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Plan>, Integer, Hash)> create_plan_with_http_info(opts)

```ruby
begin
  # Create a Plan
  data, status_code, headers = api_instance.create_plan_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Plan>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->create_plan_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | [optional] |

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get_plan

> <Plan> get_plan(plan_id)

Get Plan

Get a plan by its UUID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::PlanApi.new
plan_id = 'plan_id_example' # String | 

begin
  # Get Plan
  result = api_instance.get_plan(plan_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->get_plan: #{e}"
end
```

#### Using the get_plan_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Plan>, Integer, Hash)> get_plan_with_http_info(plan_id)

```ruby
begin
  # Get Plan
  data, status_code, headers = api_instance.get_plan_with_http_info(plan_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Plan>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->get_plan_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **plan_id** | **String** |  |  |

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_plans

> <Array<Plan>> get_plans

Get Plans

Get all your active plans

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::PlanApi.new

begin
  # Get Plans
  result = api_instance.get_plans
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->get_plans: #{e}"
end
```

#### Using the get_plans_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Plan>>, Integer, Hash)> get_plans_with_http_info

```ruby
begin
  # Get Plans
  data, status_code, headers = api_instance.get_plans_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Plan>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->get_plans_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Plan&gt;**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## preview_change

> Object preview_change(plan_id, new_plan_type_name, additional_sites)

Preview Plan

Preview the proration change before you upgrade or downgrade your plan

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::PlanApi.new
plan_id = 'plan_id_example' # String | 
new_plan_type_name = 'new_plan_type_name_example' # String | 
additional_sites = 56 # Integer | 

begin
  # Preview Plan
  result = api_instance.preview_change(plan_id, new_plan_type_name, additional_sites)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->preview_change: #{e}"
end
```

#### Using the preview_change_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> preview_change_with_http_info(plan_id, new_plan_type_name, additional_sites)

```ruby
begin
  # Preview Plan
  data, status_code, headers = api_instance.preview_change_with_http_info(plan_id, new_plan_type_name, additional_sites)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->preview_change_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **plan_id** | **String** |  |  |
| **new_plan_type_name** | **String** |  |  |
| **additional_sites** | **Integer** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uncancel_plan

> Object uncancel_plan(plan_id)

Uncancel Plan

Uncancel your cancelled plan

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::PlanApi.new
plan_id = 'plan_id_example' # String | 

begin
  # Uncancel Plan
  result = api_instance.uncancel_plan(plan_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->uncancel_plan: #{e}"
end
```

#### Using the uncancel_plan_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> uncancel_plan_with_http_info(plan_id)

```ruby
begin
  # Uncancel Plan
  data, status_code, headers = api_instance.uncancel_plan_with_http_info(plan_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->uncancel_plan_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **plan_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_plan

> <Plan> update_plan(plan_id, plan_update)

Update a Plan

Upgrade or downgrade your plan

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::PlanApi.new
plan_id = 'plan_id_example' # String | 
plan_update = OpenapiClient::PlanUpdate.new({additional_sites: 37, plan_type_name: 'plan_type_name_example'}) # PlanUpdate | 

begin
  # Update a Plan
  result = api_instance.update_plan(plan_id, plan_update)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->update_plan: #{e}"
end
```

#### Using the update_plan_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Plan>, Integer, Hash)> update_plan_with_http_info(plan_id, plan_update)

```ruby
begin
  # Update a Plan
  data, status_code, headers = api_instance.update_plan_with_http_info(plan_id, plan_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Plan>
rescue OpenapiClient::ApiError => e
  puts "Error when calling PlanApi->update_plan_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **plan_id** | **String** |  |  |
| **plan_update** | [**PlanUpdate**](PlanUpdate.md) |  |  |

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

