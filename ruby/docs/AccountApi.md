# OpenapiClient::AccountApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**delete_payment_method**](AccountApi.md#delete_payment_method) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method |
| [**delete_payment_method_0**](AccountApi.md#delete_payment_method_0) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method |
| [**get_payment_methods**](AccountApi.md#get_payment_methods) | **GET** /api/v1/account/payment_method | Get payment methods |
| [**get_payment_methods_0**](AccountApi.md#get_payment_methods_0) | **GET** /api/v1/account/payment_method | Get payment methods |
| [**get_tax**](AccountApi.md#get_tax) | **GET** /api/v1/account/get_tax | Get tax |
| [**get_tax_0**](AccountApi.md#get_tax_0) | **GET** /api/v1/account/get_tax | Get tax |
| [**get_user_me**](AccountApi.md#get_user_me) | **GET** /api/v1/account | Get own user |
| [**get_user_me_0**](AccountApi.md#get_user_me_0) | **GET** /api/v1/account | Get own user |
| [**revoke_oauth**](AccountApi.md#revoke_oauth) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth |
| [**revoke_oauth_0**](AccountApi.md#revoke_oauth_0) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth |
| [**update_payment_method**](AccountApi.md#update_payment_method) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method |
| [**update_payment_method_0**](AccountApi.md#update_payment_method_0) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method |
| [**update_user**](AccountApi.md#update_user) | **PUT** /api/v1/account | Update user |
| [**update_user_0**](AccountApi.md#update_user_0) | **PUT** /api/v1/account | Update user |


## delete_payment_method

> Object delete_payment_method(payment_method_id)

Delete payment method

Delete a non-default payment method

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
payment_method_id = 'payment_method_id_example' # String | 

begin
  # Delete payment method
  result = api_instance.delete_payment_method(payment_method_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->delete_payment_method: #{e}"
end
```

#### Using the delete_payment_method_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_payment_method_with_http_info(payment_method_id)

```ruby
begin
  # Delete payment method
  data, status_code, headers = api_instance.delete_payment_method_with_http_info(payment_method_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->delete_payment_method_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_method_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_payment_method_0

> Object delete_payment_method_0(payment_method_id)

Delete payment method

Delete a non-default payment method

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
payment_method_id = 'payment_method_id_example' # String | 

begin
  # Delete payment method
  result = api_instance.delete_payment_method_0(payment_method_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->delete_payment_method_0: #{e}"
end
```

#### Using the delete_payment_method_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_payment_method_0_with_http_info(payment_method_id)

```ruby
begin
  # Delete payment method
  data, status_code, headers = api_instance.delete_payment_method_0_with_http_info(payment_method_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->delete_payment_method_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_method_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_payment_methods

> Object get_payment_methods

Get payment methods

Get your payment methods

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new

begin
  # Get payment methods
  result = api_instance.get_payment_methods
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_payment_methods: #{e}"
end
```

#### Using the get_payment_methods_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_payment_methods_with_http_info

```ruby
begin
  # Get payment methods
  data, status_code, headers = api_instance.get_payment_methods_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_payment_methods_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_payment_methods_0

> Object get_payment_methods_0

Get payment methods

Get your payment methods

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new

begin
  # Get payment methods
  result = api_instance.get_payment_methods_0
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_payment_methods_0: #{e}"
end
```

#### Using the get_payment_methods_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_payment_methods_0_with_http_info

```ruby
begin
  # Get payment methods
  data, status_code, headers = api_instance.get_payment_methods_0_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_payment_methods_0_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_tax

> Object get_tax

Get tax

Get your default card's sales tax percentage

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new

begin
  # Get tax
  result = api_instance.get_tax
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_tax: #{e}"
end
```

#### Using the get_tax_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_tax_with_http_info

```ruby
begin
  # Get tax
  data, status_code, headers = api_instance.get_tax_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_tax_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_tax_0

> Object get_tax_0

Get tax

Get your default card's sales tax percentage

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new

begin
  # Get tax
  result = api_instance.get_tax_0
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_tax_0: #{e}"
end
```

#### Using the get_tax_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_tax_0_with_http_info

```ruby
begin
  # Get tax
  data, status_code, headers = api_instance.get_tax_0_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_tax_0_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_me

> Object get_user_me

Get own user

Get your user data

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new

begin
  # Get own user
  result = api_instance.get_user_me
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_user_me: #{e}"
end
```

#### Using the get_user_me_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_user_me_with_http_info

```ruby
begin
  # Get own user
  data, status_code, headers = api_instance.get_user_me_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_user_me_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_me_0

> Object get_user_me_0

Get own user

Get your user data

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new

begin
  # Get own user
  result = api_instance.get_user_me_0
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_user_me_0: #{e}"
end
```

#### Using the get_user_me_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_user_me_0_with_http_info

```ruby
begin
  # Get own user
  data, status_code, headers = api_instance.get_user_me_0_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->get_user_me_0_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revoke_oauth

> Object revoke_oauth(provider)

Revoke OAuth

Revoke your Git OAuth permission

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
provider = 'provider_example' # String | 

begin
  # Revoke OAuth
  result = api_instance.revoke_oauth(provider)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->revoke_oauth: #{e}"
end
```

#### Using the revoke_oauth_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> revoke_oauth_with_http_info(provider)

```ruby
begin
  # Revoke OAuth
  data, status_code, headers = api_instance.revoke_oauth_with_http_info(provider)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->revoke_oauth_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **provider** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revoke_oauth_0

> Object revoke_oauth_0(provider)

Revoke OAuth

Revoke your Git OAuth permission

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
provider = 'provider_example' # String | 

begin
  # Revoke OAuth
  result = api_instance.revoke_oauth_0(provider)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->revoke_oauth_0: #{e}"
end
```

#### Using the revoke_oauth_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> revoke_oauth_0_with_http_info(provider)

```ruby
begin
  # Revoke OAuth
  data, status_code, headers = api_instance.revoke_oauth_0_with_http_info(provider)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->revoke_oauth_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **provider** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_payment_method

> Object update_payment_method(payment_method_id)

Update payment method

Select your default payment method to charge every billing cycle

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
payment_method_id = 'payment_method_id_example' # String | 

begin
  # Update payment method
  result = api_instance.update_payment_method(payment_method_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_payment_method: #{e}"
end
```

#### Using the update_payment_method_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_payment_method_with_http_info(payment_method_id)

```ruby
begin
  # Update payment method
  data, status_code, headers = api_instance.update_payment_method_with_http_info(payment_method_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_payment_method_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_method_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_payment_method_0

> Object update_payment_method_0(payment_method_id)

Update payment method

Select your default payment method to charge every billing cycle

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
payment_method_id = 'payment_method_id_example' # String | 

begin
  # Update payment method
  result = api_instance.update_payment_method_0(payment_method_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_payment_method_0: #{e}"
end
```

#### Using the update_payment_method_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_payment_method_0_with_http_info(payment_method_id)

```ruby
begin
  # Update payment method
  data, status_code, headers = api_instance.update_payment_method_0_with_http_info(payment_method_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_payment_method_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_method_id** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_user

> Object update_user(opts)

Update user

Update your user data

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
opts = {
  unknown_base_type: TODO # UNKNOWN_BASE_TYPE | 
}

begin
  # Update user
  result = api_instance.update_user(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_user: #{e}"
end
```

#### Using the update_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_user_with_http_info(opts)

```ruby
begin
  # Update user
  data, status_code, headers = api_instance.update_user_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update_user_0

> Object update_user_0(opts)

Update user

Update your user data

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
opts = {
  unknown_base_type: TODO # UNKNOWN_BASE_TYPE | 
}

begin
  # Update user
  result = api_instance.update_user_0(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_user_0: #{e}"
end
```

#### Using the update_user_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_user_0_with_http_info(opts)

```ruby
begin
  # Update user
  data, status_code, headers = api_instance.update_user_0_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling AccountApi->update_user_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

