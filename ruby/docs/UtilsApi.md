# OpenapiClient::UtilsApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**domain_check**](UtilsApi.md#domain_check) | **GET** /api/v1/domain_check | Domain check |
| [**verify_git_sync_directories**](UtilsApi.md#verify_git_sync_directories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories |


## domain_check

> Object domain_check(fqdn)

Domain check

Returns success if a given FQDN's DNS records are correctly set up

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::UtilsApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Domain check
  result = api_instance.domain_check(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling UtilsApi->domain_check: #{e}"
end
```

#### Using the domain_check_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> domain_check_with_http_info(fqdn)

```ruby
begin
  # Domain check
  data, status_code, headers = api_instance.domain_check_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling UtilsApi->domain_check_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verify_git_sync_directories

> Object verify_git_sync_directories(git_url, opts)

Verify Git Sync Directories

Returns success Git Repo's root folder is correctly set up

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::UtilsApi.new
git_url = 'git_url_example' # String | 
opts = {
  git_branch: 'git_branch_example' # String | 
}

begin
  # Verify Git Sync Directories
  result = api_instance.verify_git_sync_directories(git_url, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling UtilsApi->verify_git_sync_directories: #{e}"
end
```

#### Using the verify_git_sync_directories_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> verify_git_sync_directories_with_http_info(git_url, opts)

```ruby
begin
  # Verify Git Sync Directories
  data, status_code, headers = api_instance.verify_git_sync_directories_with_http_info(git_url, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling UtilsApi->verify_git_sync_directories_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **git_url** | **String** |  |  |
| **git_branch** | **String** |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

