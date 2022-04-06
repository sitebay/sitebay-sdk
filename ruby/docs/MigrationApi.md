# OpenapiClient::MigrationApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_migration**](MigrationApi.md#create_migration) | **POST** /api/v1/migration | Create a migration |
| [**delete_migration**](MigrationApi.md#delete_migration) | **GET** /api/v1/migration/{migration_id} | Delete Migration |
| [**get_migrations**](MigrationApi.md#get_migrations) | **GET** /api/v1/migration | Get Migrations |


## create_migration

> <Migration> create_migration(current_url, wordpress_password, wordpress_user, opts)

Create a migration

Request a new site migration by providing your old host's domain and your site's login details

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::MigrationApi.new
current_url = 'current_url_example' # String | 
wordpress_password = 'wordpress_password_example' # String | 
wordpress_user = 'wordpress_user_example' # String | 
opts = {
  extra: 'extra_example', # String | 
  ftp_address: 'ftp_address_example', # String | 
  ftp_password: 'ftp_password_example', # String | 
  ftp_user: 'ftp_user_example', # String | 
  host: 'host_example', # String | 
  host_password: 'host_password_example', # String | 
  host_user: 'host_user_example', # String | 
  migration_type: 'migration_type_example', # String | 
  zip_file: File.new('/path/to/some/file'), # File | 
  zip_file_name: 'zip_file_name_example' # String | 
}

begin
  # Create a migration
  result = api_instance.create_migration(current_url, wordpress_password, wordpress_user, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling MigrationApi->create_migration: #{e}"
end
```

#### Using the create_migration_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Migration>, Integer, Hash)> create_migration_with_http_info(current_url, wordpress_password, wordpress_user, opts)

```ruby
begin
  # Create a migration
  data, status_code, headers = api_instance.create_migration_with_http_info(current_url, wordpress_password, wordpress_user, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Migration>
rescue OpenapiClient::ApiError => e
  puts "Error when calling MigrationApi->create_migration_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **current_url** | **String** |  |  |
| **wordpress_password** | **String** |  |  |
| **wordpress_user** | **String** |  |  |
| **extra** | **String** |  | [optional] |
| **ftp_address** | **String** |  | [optional] |
| **ftp_password** | **String** |  | [optional] |
| **ftp_user** | **String** |  | [optional] |
| **host** | **String** |  | [optional] |
| **host_password** | **String** |  | [optional] |
| **host_user** | **String** |  | [optional] |
| **migration_type** | **String** |  | [optional] |
| **zip_file** | **File** |  | [optional] |
| **zip_file_name** | **String** |  | [optional] |

### Return type

[**Migration**](Migration.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## delete_migration

> Object delete_migration(migration_id)

Delete Migration

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::MigrationApi.new
migration_id = 56 # Integer | 

begin
  # Delete Migration
  result = api_instance.delete_migration(migration_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling MigrationApi->delete_migration: #{e}"
end
```

#### Using the delete_migration_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_migration_with_http_info(migration_id)

```ruby
begin
  # Delete Migration
  data, status_code, headers = api_instance.delete_migration_with_http_info(migration_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling MigrationApi->delete_migration_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **migration_id** | **Integer** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_migrations

> <Array<Migration>> get_migrations

Get Migrations

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::MigrationApi.new

begin
  # Get Migrations
  result = api_instance.get_migrations
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling MigrationApi->get_migrations: #{e}"
end
```

#### Using the get_migrations_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Migration>>, Integer, Hash)> get_migrations_with_http_info

```ruby
begin
  # Get Migrations
  data, status_code, headers = api_instance.get_migrations_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Migration>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling MigrationApi->get_migrations_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Migration&gt;**](Migration.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

