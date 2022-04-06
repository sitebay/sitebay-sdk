# OpenapiClient::SiteLiveApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**add_mail_dns**](SiteLiveApi.md#add_mail_dns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records |
| [**add_mail_dns_0**](SiteLiveApi.md#add_mail_dns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records |
| [**change_dev_mode**](SiteLiveApi.md#change_dev_mode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth |
| [**change_dev_mode_0**](SiteLiveApi.md#change_dev_mode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth |
| [**clear_cache**](SiteLiveApi.md#clear_cache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache |
| [**clear_cache_0**](SiteLiveApi.md#clear_cache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache |
| [**commit_site_stage**](SiteLiveApi.md#commit_site_stage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site |
| [**commit_site_stage_0**](SiteLiveApi.md#commit_site_stage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site |
| [**create_email**](SiteLiveApi.md#create_email) | **POST** /api/v1/site_live/{fqdn}/email | Create Email |
| [**create_email_0**](SiteLiveApi.md#create_email_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email |
| [**create_external_path**](SiteLiveApi.md#create_external_path) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path |
| [**create_external_path_0**](SiteLiveApi.md#create_external_path_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path |
| [**create_site_live**](SiteLiveApi.md#create_site_live) | **POST** /api/v1/site_live | Create a site |
| [**create_site_live_0**](SiteLiveApi.md#create_site_live_0) | **POST** /api/v1/site_live | Create a site |
| [**create_site_stage**](SiteLiveApi.md#create_site_stage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site |
| [**create_site_stage_0**](SiteLiveApi.md#create_site_stage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site |
| [**create_tag**](SiteLiveApi.md#create_tag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag |
| [**create_tag_0**](SiteLiveApi.md#create_tag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag |
| [**delete_dns_record**](SiteLiveApi.md#delete_dns_record) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record |
| [**delete_dns_record_0**](SiteLiveApi.md#delete_dns_record_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record |
| [**delete_email**](SiteLiveApi.md#delete_email) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email |
| [**delete_email_0**](SiteLiveApi.md#delete_email_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email |
| [**delete_external_path**](SiteLiveApi.md#delete_external_path) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path |
| [**delete_external_path_0**](SiteLiveApi.md#delete_external_path_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path |
| [**delete_site_live**](SiteLiveApi.md#delete_site_live) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site |
| [**delete_site_live_0**](SiteLiveApi.md#delete_site_live_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site |
| [**delete_site_stage**](SiteLiveApi.md#delete_site_stage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site |
| [**delete_site_stage_0**](SiteLiveApi.md#delete_site_stage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site |
| [**delete_tag**](SiteLiveApi.md#delete_tag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag |
| [**delete_tag_0**](SiteLiveApi.md#delete_tag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag |
| [**disable_firewall**](SiteLiveApi.md#disable_firewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall |
| [**disable_firewall_0**](SiteLiveApi.md#disable_firewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall |
| [**enable_firewall**](SiteLiveApi.md#enable_firewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall |
| [**enable_firewall_0**](SiteLiveApi.md#enable_firewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall |
| [**get_dns_records**](SiteLiveApi.md#get_dns_records) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records |
| [**get_dns_records_0**](SiteLiveApi.md#get_dns_records_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records |
| [**get_emails**](SiteLiveApi.md#get_emails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails |
| [**get_emails_0**](SiteLiveApi.md#get_emails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails |
| [**get_external_paths**](SiteLiveApi.md#get_external_paths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths |
| [**get_external_paths_0**](SiteLiveApi.md#get_external_paths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths |
| [**get_files_at_point**](SiteLiveApi.md#get_files_at_point) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files |
| [**get_files_at_point_0**](SiteLiveApi.md#get_files_at_point_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files |
| [**get_mail_dns**](SiteLiveApi.md#get_mail_dns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records |
| [**get_mail_dns_0**](SiteLiveApi.md#get_mail_dns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records |
| [**get_pit_restore**](SiteLiveApi.md#get_pit_restore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore |
| [**get_pit_restore_0**](SiteLiveApi.md#get_pit_restore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore |
| [**get_pit_restores**](SiteLiveApi.md#get_pit_restores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores |
| [**get_pit_restores_0**](SiteLiveApi.md#get_pit_restores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores |
| [**get_site_live**](SiteLiveApi.md#get_site_live) | **GET** /api/v1/site_live/{fqdn} | Get your live site |
| [**get_site_live_0**](SiteLiveApi.md#get_site_live_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site |
| [**get_site_plan_usage**](SiteLiveApi.md#get_site_plan_usage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage |
| [**get_site_plan_usage_0**](SiteLiveApi.md#get_site_plan_usage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage |
| [**get_sites_live**](SiteLiveApi.md#get_sites_live) | **GET** /api/v1/site_live | Get your sites |
| [**get_sites_live_0**](SiteLiveApi.md#get_sites_live_0) | **GET** /api/v1/site_live | Get your sites |
| [**get_tags**](SiteLiveApi.md#get_tags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags |
| [**get_tags_0**](SiteLiveApi.md#get_tags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags |
| [**modify_firewall**](SiteLiveApi.md#modify_firewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall |
| [**modify_firewall_0**](SiteLiveApi.md#modify_firewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall |
| [**restore_site**](SiteLiveApi.md#restore_site) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore |
| [**restore_site_0**](SiteLiveApi.md#restore_site_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore |
| [**shell_cmd_site_live**](SiteLiveApi.md#shell_cmd_site_live) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command |
| [**shell_cmd_site_live_0**](SiteLiveApi.md#shell_cmd_site_live_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command |
| [**update_dns_record**](SiteLiveApi.md#update_dns_record) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record |
| [**update_dns_record_0**](SiteLiveApi.md#update_dns_record_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record |
| [**update_email**](SiteLiveApi.md#update_email) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email |
| [**update_email_0**](SiteLiveApi.md#update_email_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email |
| [**update_site_live**](SiteLiveApi.md#update_site_live) | **PUT** /api/v1/site_live/{fqdn} | Update a site |
| [**update_site_live_0**](SiteLiveApi.md#update_site_live_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site |
| [**validate_mx_records**](SiteLiveApi.md#validate_mx_records) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation |
| [**validate_mx_records_0**](SiteLiveApi.md#validate_mx_records_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation |


## add_mail_dns

> Object add_mail_dns(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Create Email DNS records
  result = api_instance.add_mail_dns(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->add_mail_dns: #{e}"
end
```

#### Using the add_mail_dns_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> add_mail_dns_with_http_info(fqdn)

```ruby
begin
  # Create Email DNS records
  data, status_code, headers = api_instance.add_mail_dns_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->add_mail_dns_with_http_info: #{e}"
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


## add_mail_dns_0

> Object add_mail_dns_0(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Create Email DNS records
  result = api_instance.add_mail_dns_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->add_mail_dns_0: #{e}"
end
```

#### Using the add_mail_dns_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> add_mail_dns_0_with_http_info(fqdn)

```ruby
begin
  # Create Email DNS records
  data, status_code, headers = api_instance.add_mail_dns_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->add_mail_dns_0_with_http_info: #{e}"
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


## change_dev_mode

> Object change_dev_mode(fqdn, value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
value = 'value_example' # String | 

begin
  # Change HTTP Auth
  result = api_instance.change_dev_mode(fqdn, value)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->change_dev_mode: #{e}"
end
```

#### Using the change_dev_mode_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> change_dev_mode_with_http_info(fqdn, value)

```ruby
begin
  # Change HTTP Auth
  data, status_code, headers = api_instance.change_dev_mode_with_http_info(fqdn, value)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->change_dev_mode_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **value** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## change_dev_mode_0

> Object change_dev_mode_0(fqdn, value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
value = 'value_example' # String | 

begin
  # Change HTTP Auth
  result = api_instance.change_dev_mode_0(fqdn, value)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->change_dev_mode_0: #{e}"
end
```

#### Using the change_dev_mode_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> change_dev_mode_0_with_http_info(fqdn, value)

```ruby
begin
  # Change HTTP Auth
  data, status_code, headers = api_instance.change_dev_mode_0_with_http_info(fqdn, value)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->change_dev_mode_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **value** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clear_cache

> Object clear_cache(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Clear the cache
  result = api_instance.clear_cache(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->clear_cache: #{e}"
end
```

#### Using the clear_cache_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> clear_cache_with_http_info(fqdn)

```ruby
begin
  # Clear the cache
  data, status_code, headers = api_instance.clear_cache_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->clear_cache_with_http_info: #{e}"
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


## clear_cache_0

> Object clear_cache_0(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Clear the cache
  result = api_instance.clear_cache_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->clear_cache_0: #{e}"
end
```

#### Using the clear_cache_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> clear_cache_0_with_http_info(fqdn)

```ruby
begin
  # Clear the cache
  data, status_code, headers = api_instance.clear_cache_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->clear_cache_0_with_http_info: #{e}"
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


## commit_site_stage

> Object commit_site_stage(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Commit Stage Site
  result = api_instance.commit_site_stage(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->commit_site_stage: #{e}"
end
```

#### Using the commit_site_stage_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> commit_site_stage_with_http_info(fqdn)

```ruby
begin
  # Commit Stage Site
  data, status_code, headers = api_instance.commit_site_stage_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->commit_site_stage_with_http_info: #{e}"
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


## commit_site_stage_0

> Object commit_site_stage_0(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Commit Stage Site
  result = api_instance.commit_site_stage_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->commit_site_stage_0: #{e}"
end
```

#### Using the commit_site_stage_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> commit_site_stage_0_with_http_info(fqdn)

```ruby
begin
  # Commit Stage Site
  data, status_code, headers = api_instance.commit_site_stage_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->commit_site_stage_0_with_http_info: #{e}"
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


## create_email

> Object create_email(fqdn, opts)

Create Email

Create a custom email account

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  user_email_create: OpenapiClient::UserEmailCreate.new({local_part: 'local_part_example'}) # UserEmailCreate | 
}

begin
  # Create Email
  result = api_instance.create_email(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_email: #{e}"
end
```

#### Using the create_email_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_email_with_http_info(fqdn, opts)

```ruby
begin
  # Create Email
  data, status_code, headers = api_instance.create_email_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_email_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **user_email_create** | [**UserEmailCreate**](UserEmailCreate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_email_0

> Object create_email_0(fqdn, opts)

Create Email

Create a custom email account

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  user_email_create: OpenapiClient::UserEmailCreate.new({local_part: 'local_part_example'}) # UserEmailCreate | 
}

begin
  # Create Email
  result = api_instance.create_email_0(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_email_0: #{e}"
end
```

#### Using the create_email_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_email_0_with_http_info(fqdn, opts)

```ruby
begin
  # Create Email
  data, status_code, headers = api_instance.create_email_0_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_email_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **user_email_create** | [**UserEmailCreate**](UserEmailCreate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_external_path

> Object create_external_path(fqdn, opts)

Create External Path

Connect an external URL to your site on a subpath

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  external_path_create: OpenapiClient::ExternalPathCreate.new({external_name: 'external_name_example', path: 'path_example'}) # ExternalPathCreate | 
}

begin
  # Create External Path
  result = api_instance.create_external_path(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_external_path: #{e}"
end
```

#### Using the create_external_path_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_external_path_with_http_info(fqdn, opts)

```ruby
begin
  # Create External Path
  data, status_code, headers = api_instance.create_external_path_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_external_path_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **external_path_create** | [**ExternalPathCreate**](ExternalPathCreate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_external_path_0

> Object create_external_path_0(fqdn, opts)

Create External Path

Connect an external URL to your site on a subpath

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  external_path_create: OpenapiClient::ExternalPathCreate.new({external_name: 'external_name_example', path: 'path_example'}) # ExternalPathCreate | 
}

begin
  # Create External Path
  result = api_instance.create_external_path_0(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_external_path_0: #{e}"
end
```

#### Using the create_external_path_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_external_path_0_with_http_info(fqdn, opts)

```ruby
begin
  # Create External Path
  data, status_code, headers = api_instance.create_external_path_0_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_external_path_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **external_path_create** | [**ExternalPathCreate**](ExternalPathCreate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_site_live

> <SiteLive> create_site_live(opts)

Create a site

Create a new site by providing your domain and your site's WordPress details

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
opts = {
  unknown_base_type: TODO # UNKNOWN_BASE_TYPE | 
}

begin
  # Create a site
  result = api_instance.create_site_live(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_live: #{e}"
end
```

#### Using the create_site_live_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SiteLive>, Integer, Hash)> create_site_live_with_http_info(opts)

```ruby
begin
  # Create a site
  data, status_code, headers = api_instance.create_site_live_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SiteLive>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_live_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | [optional] |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_site_live_0

> <SiteLive> create_site_live_0(opts)

Create a site

Create a new site by providing your domain and your site's WordPress details

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
opts = {
  unknown_base_type: TODO # UNKNOWN_BASE_TYPE | 
}

begin
  # Create a site
  result = api_instance.create_site_live_0(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_live_0: #{e}"
end
```

#### Using the create_site_live_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SiteLive>, Integer, Hash)> create_site_live_0_with_http_info(opts)

```ruby
begin
  # Create a site
  data, status_code, headers = api_instance.create_site_live_0_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SiteLive>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_live_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | [optional] |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_site_stage

> Object create_site_stage(fqdn, opts)

Create a Staging site

Create a staging site on which you can test changes

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  site_stage_create: OpenapiClient::SiteStageCreate.new({subdomain: 'subdomain_example'}) # SiteStageCreate | 
}

begin
  # Create a Staging site
  result = api_instance.create_site_stage(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_stage: #{e}"
end
```

#### Using the create_site_stage_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_site_stage_with_http_info(fqdn, opts)

```ruby
begin
  # Create a Staging site
  data, status_code, headers = api_instance.create_site_stage_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_stage_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **site_stage_create** | [**SiteStageCreate**](SiteStageCreate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_site_stage_0

> Object create_site_stage_0(fqdn, opts)

Create a Staging site

Create a staging site on which you can test changes

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  site_stage_create: OpenapiClient::SiteStageCreate.new({subdomain: 'subdomain_example'}) # SiteStageCreate | 
}

begin
  # Create a Staging site
  result = api_instance.create_site_stage_0(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_stage_0: #{e}"
end
```

#### Using the create_site_stage_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> create_site_stage_0_with_http_info(fqdn, opts)

```ruby
begin
  # Create a Staging site
  data, status_code, headers = api_instance.create_site_stage_0_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_site_stage_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **site_stage_create** | [**SiteStageCreate**](SiteStageCreate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_tag

> <Tag> create_tag(fqdn, opts)

Create tag

Create a tag for organizational purposes for your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  tag_create: OpenapiClient::TagCreate.new({name: 'name_example'}) # TagCreate | 
}

begin
  # Create tag
  result = api_instance.create_tag(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_tag: #{e}"
end
```

#### Using the create_tag_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Tag>, Integer, Hash)> create_tag_with_http_info(fqdn, opts)

```ruby
begin
  # Create tag
  data, status_code, headers = api_instance.create_tag_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Tag>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_tag_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **tag_create** | [**TagCreate**](TagCreate.md) |  | [optional] |

### Return type

[**Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_tag_0

> <Tag> create_tag_0(fqdn, opts)

Create tag

Create a tag for organizational purposes for your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
opts = {
  tag_create: OpenapiClient::TagCreate.new({name: 'name_example'}) # TagCreate | 
}

begin
  # Create tag
  result = api_instance.create_tag_0(fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_tag_0: #{e}"
end
```

#### Using the create_tag_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Tag>, Integer, Hash)> create_tag_0_with_http_info(fqdn, opts)

```ruby
begin
  # Create tag
  data, status_code, headers = api_instance.create_tag_0_with_http_info(fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Tag>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->create_tag_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **tag_create** | [**TagCreate**](TagCreate.md) |  | [optional] |

### Return type

[**Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## delete_dns_record

> Object delete_dns_record(dns_id, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
dns_id = 'dns_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Delete DNS record
  result = api_instance.delete_dns_record(dns_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_dns_record: #{e}"
end
```

#### Using the delete_dns_record_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_dns_record_with_http_info(dns_id, fqdn)

```ruby
begin
  # Delete DNS record
  data, status_code, headers = api_instance.delete_dns_record_with_http_info(dns_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_dns_record_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dns_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_dns_record_0

> Object delete_dns_record_0(dns_id, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
dns_id = 'dns_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Delete DNS record
  result = api_instance.delete_dns_record_0(dns_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_dns_record_0: #{e}"
end
```

#### Using the delete_dns_record_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_dns_record_0_with_http_info(dns_id, fqdn)

```ruby
begin
  # Delete DNS record
  data, status_code, headers = api_instance.delete_dns_record_0_with_http_info(dns_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_dns_record_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dns_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_email

> Object delete_email(fqdn, user_email_address)

Delete Email

Delete a custom email account

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
user_email_address = 'user_email_address_example' # String | 

begin
  # Delete Email
  result = api_instance.delete_email(fqdn, user_email_address)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_email: #{e}"
end
```

#### Using the delete_email_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_email_with_http_info(fqdn, user_email_address)

```ruby
begin
  # Delete Email
  data, status_code, headers = api_instance.delete_email_with_http_info(fqdn, user_email_address)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_email_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **user_email_address** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_email_0

> Object delete_email_0(fqdn, user_email_address)

Delete Email

Delete a custom email account

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
user_email_address = 'user_email_address_example' # String | 

begin
  # Delete Email
  result = api_instance.delete_email_0(fqdn, user_email_address)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_email_0: #{e}"
end
```

#### Using the delete_email_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_email_0_with_http_info(fqdn, user_email_address)

```ruby
begin
  # Delete Email
  data, status_code, headers = api_instance.delete_email_0_with_http_info(fqdn, user_email_address)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_email_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **user_email_address** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_external_path

> Object delete_external_path(external_path_id, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
external_path_id = 'external_path_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Delete External Path
  result = api_instance.delete_external_path(external_path_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_external_path: #{e}"
end
```

#### Using the delete_external_path_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_external_path_with_http_info(external_path_id, fqdn)

```ruby
begin
  # Delete External Path
  data, status_code, headers = api_instance.delete_external_path_with_http_info(external_path_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_external_path_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **external_path_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_external_path_0

> Object delete_external_path_0(external_path_id, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
external_path_id = 'external_path_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Delete External Path
  result = api_instance.delete_external_path_0(external_path_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_external_path_0: #{e}"
end
```

#### Using the delete_external_path_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_external_path_0_with_http_info(external_path_id, fqdn)

```ruby
begin
  # Delete External Path
  data, status_code, headers = api_instance.delete_external_path_0_with_http_info(external_path_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_external_path_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **external_path_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_site_live

> Object delete_site_live(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Delete your live site
  result = api_instance.delete_site_live(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_live: #{e}"
end
```

#### Using the delete_site_live_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_site_live_with_http_info(fqdn)

```ruby
begin
  # Delete your live site
  data, status_code, headers = api_instance.delete_site_live_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_live_with_http_info: #{e}"
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


## delete_site_live_0

> Object delete_site_live_0(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Delete your live site
  result = api_instance.delete_site_live_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_live_0: #{e}"
end
```

#### Using the delete_site_live_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_site_live_0_with_http_info(fqdn)

```ruby
begin
  # Delete your live site
  data, status_code, headers = api_instance.delete_site_live_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_live_0_with_http_info: #{e}"
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


## delete_site_stage

> Object delete_site_stage(fqdn)

Delete Stage Site

Delete your staging site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Delete Stage Site
  result = api_instance.delete_site_stage(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_stage: #{e}"
end
```

#### Using the delete_site_stage_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_site_stage_with_http_info(fqdn)

```ruby
begin
  # Delete Stage Site
  data, status_code, headers = api_instance.delete_site_stage_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_stage_with_http_info: #{e}"
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


## delete_site_stage_0

> Object delete_site_stage_0(fqdn)

Delete Stage Site

Delete your staging site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Delete Stage Site
  result = api_instance.delete_site_stage_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_stage_0: #{e}"
end
```

#### Using the delete_site_stage_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_site_stage_0_with_http_info(fqdn)

```ruby
begin
  # Delete Stage Site
  data, status_code, headers = api_instance.delete_site_stage_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_site_stage_0_with_http_info: #{e}"
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


## delete_tag

> <Array<Tag>> delete_tag(tag_id, fqdn)

Get a tag

Get a tag by its ID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
tag_id = 'tag_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Get a tag
  result = api_instance.delete_tag(tag_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_tag: #{e}"
end
```

#### Using the delete_tag_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Tag>>, Integer, Hash)> delete_tag_with_http_info(tag_id, fqdn)

```ruby
begin
  # Get a tag
  data, status_code, headers = api_instance.delete_tag_with_http_info(tag_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Tag>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_tag_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tag_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

[**Array&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## delete_tag_0

> <Array<Tag>> delete_tag_0(tag_id, fqdn)

Get a tag

Get a tag by its ID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
tag_id = 'tag_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Get a tag
  result = api_instance.delete_tag_0(tag_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_tag_0: #{e}"
end
```

#### Using the delete_tag_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Tag>>, Integer, Hash)> delete_tag_0_with_http_info(tag_id, fqdn)

```ruby
begin
  # Get a tag
  data, status_code, headers = api_instance.delete_tag_0_with_http_info(tag_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Tag>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->delete_tag_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tag_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

[**Array&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disable_firewall

> Object disable_firewall(fqdn)

Disable the firewall

Disable wp-login firewall

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Disable the firewall
  result = api_instance.disable_firewall(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->disable_firewall: #{e}"
end
```

#### Using the disable_firewall_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> disable_firewall_with_http_info(fqdn)

```ruby
begin
  # Disable the firewall
  data, status_code, headers = api_instance.disable_firewall_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->disable_firewall_with_http_info: #{e}"
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


## disable_firewall_0

> Object disable_firewall_0(fqdn)

Disable the firewall

Disable wp-login firewall

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Disable the firewall
  result = api_instance.disable_firewall_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->disable_firewall_0: #{e}"
end
```

#### Using the disable_firewall_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> disable_firewall_0_with_http_info(fqdn)

```ruby
begin
  # Disable the firewall
  data, status_code, headers = api_instance.disable_firewall_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->disable_firewall_0_with_http_info: #{e}"
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


## enable_firewall

> Object enable_firewall(fqdn)

Enable the firewall

Enable the wp-login firewall

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Enable the firewall
  result = api_instance.enable_firewall(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->enable_firewall: #{e}"
end
```

#### Using the enable_firewall_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> enable_firewall_with_http_info(fqdn)

```ruby
begin
  # Enable the firewall
  data, status_code, headers = api_instance.enable_firewall_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->enable_firewall_with_http_info: #{e}"
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


## enable_firewall_0

> Object enable_firewall_0(fqdn)

Enable the firewall

Enable the wp-login firewall

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Enable the firewall
  result = api_instance.enable_firewall_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->enable_firewall_0: #{e}"
end
```

#### Using the enable_firewall_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> enable_firewall_0_with_http_info(fqdn)

```ruby
begin
  # Enable the firewall
  data, status_code, headers = api_instance.enable_firewall_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->enable_firewall_0_with_http_info: #{e}"
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


## get_dns_records

> Object get_dns_records(fqdn)

Get DNS records

Get a nameserver configured site's DNS records

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get DNS records
  result = api_instance.get_dns_records(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_dns_records: #{e}"
end
```

#### Using the get_dns_records_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_dns_records_with_http_info(fqdn)

```ruby
begin
  # Get DNS records
  data, status_code, headers = api_instance.get_dns_records_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_dns_records_with_http_info: #{e}"
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


## get_dns_records_0

> Object get_dns_records_0(fqdn)

Get DNS records

Get a nameserver configured site's DNS records

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get DNS records
  result = api_instance.get_dns_records_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_dns_records_0: #{e}"
end
```

#### Using the get_dns_records_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_dns_records_0_with_http_info(fqdn)

```ruby
begin
  # Get DNS records
  data, status_code, headers = api_instance.get_dns_records_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_dns_records_0_with_http_info: #{e}"
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


## get_emails

> Object get_emails(fqdn)

Get Emails

Get all custom email accounts

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get Emails
  result = api_instance.get_emails(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_emails: #{e}"
end
```

#### Using the get_emails_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_emails_with_http_info(fqdn)

```ruby
begin
  # Get Emails
  data, status_code, headers = api_instance.get_emails_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_emails_with_http_info: #{e}"
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


## get_emails_0

> Object get_emails_0(fqdn)

Get Emails

Get all custom email accounts

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get Emails
  result = api_instance.get_emails_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_emails_0: #{e}"
end
```

#### Using the get_emails_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_emails_0_with_http_info(fqdn)

```ruby
begin
  # Get Emails
  data, status_code, headers = api_instance.get_emails_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_emails_0_with_http_info: #{e}"
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


## get_external_paths

> Object get_external_paths(fqdn)

Get External Paths

Get details about your site's external path configs

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get External Paths
  result = api_instance.get_external_paths(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_external_paths: #{e}"
end
```

#### Using the get_external_paths_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_external_paths_with_http_info(fqdn)

```ruby
begin
  # Get External Paths
  data, status_code, headers = api_instance.get_external_paths_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_external_paths_with_http_info: #{e}"
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


## get_external_paths_0

> Object get_external_paths_0(fqdn)

Get External Paths

Get details about your site's external path configs

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get External Paths
  result = api_instance.get_external_paths_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_external_paths_0: #{e}"
end
```

#### Using the get_external_paths_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_external_paths_0_with_http_info(fqdn)

```ruby
begin
  # Get External Paths
  data, status_code, headers = api_instance.get_external_paths_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_external_paths_0_with_http_info: #{e}"
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


## get_files_at_point

> Object get_files_at_point(fqdn, restore_point)

PIT Files

Get a list of wp-content files at a point in time

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
restore_point = Time.parse('2013-10-20T19:20:30+01:00') # Time | 

begin
  # PIT Files
  result = api_instance.get_files_at_point(fqdn, restore_point)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_files_at_point: #{e}"
end
```

#### Using the get_files_at_point_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_files_at_point_with_http_info(fqdn, restore_point)

```ruby
begin
  # PIT Files
  data, status_code, headers = api_instance.get_files_at_point_with_http_info(fqdn, restore_point)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_files_at_point_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **restore_point** | **Time** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_files_at_point_0

> Object get_files_at_point_0(fqdn, restore_point)

PIT Files

Get a list of wp-content files at a point in time

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
restore_point = Time.parse('2013-10-20T19:20:30+01:00') # Time | 

begin
  # PIT Files
  result = api_instance.get_files_at_point_0(fqdn, restore_point)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_files_at_point_0: #{e}"
end
```

#### Using the get_files_at_point_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_files_at_point_0_with_http_info(fqdn, restore_point)

```ruby
begin
  # PIT Files
  data, status_code, headers = api_instance.get_files_at_point_0_with_http_info(fqdn, restore_point)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_files_at_point_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **restore_point** | **Time** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_mail_dns

> Object get_mail_dns(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get Required mail DNS records
  result = api_instance.get_mail_dns(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_mail_dns: #{e}"
end
```

#### Using the get_mail_dns_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_mail_dns_with_http_info(fqdn)

```ruby
begin
  # Get Required mail DNS records
  data, status_code, headers = api_instance.get_mail_dns_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_mail_dns_with_http_info: #{e}"
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


## get_mail_dns_0

> Object get_mail_dns_0(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get Required mail DNS records
  result = api_instance.get_mail_dns_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_mail_dns_0: #{e}"
end
```

#### Using the get_mail_dns_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_mail_dns_0_with_http_info(fqdn)

```ruby
begin
  # Get Required mail DNS records
  data, status_code, headers = api_instance.get_mail_dns_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_mail_dns_0_with_http_info: #{e}"
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


## get_pit_restore

> Object get_pit_restore(pit_restore_id, fqdn)

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
pit_restore_id = 'pit_restore_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Get PIT Restore
  result = api_instance.get_pit_restore(pit_restore_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restore: #{e}"
end
```

#### Using the get_pit_restore_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_pit_restore_with_http_info(pit_restore_id, fqdn)

```ruby
begin
  # Get PIT Restore
  data, status_code, headers = api_instance.get_pit_restore_with_http_info(pit_restore_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restore_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pit_restore_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_pit_restore_0

> Object get_pit_restore_0(pit_restore_id, fqdn)

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
pit_restore_id = 'pit_restore_id_example' # String | 
fqdn = 'fqdn_example' # String | 

begin
  # Get PIT Restore
  result = api_instance.get_pit_restore_0(pit_restore_id, fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restore_0: #{e}"
end
```

#### Using the get_pit_restore_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_pit_restore_0_with_http_info(pit_restore_id, fqdn)

```ruby
begin
  # Get PIT Restore
  data, status_code, headers = api_instance.get_pit_restore_0_with_http_info(pit_restore_id, fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restore_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pit_restore_id** | **String** |  |  |
| **fqdn** | **String** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_pit_restores

> Object get_pit_restores(fqdn)

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get PIT Restores
  result = api_instance.get_pit_restores(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restores: #{e}"
end
```

#### Using the get_pit_restores_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_pit_restores_with_http_info(fqdn)

```ruby
begin
  # Get PIT Restores
  data, status_code, headers = api_instance.get_pit_restores_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restores_with_http_info: #{e}"
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


## get_pit_restores_0

> Object get_pit_restores_0(fqdn)

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get PIT Restores
  result = api_instance.get_pit_restores_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restores_0: #{e}"
end
```

#### Using the get_pit_restores_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_pit_restores_0_with_http_info(fqdn)

```ruby
begin
  # Get PIT Restores
  data, status_code, headers = api_instance.get_pit_restores_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_pit_restores_0_with_http_info: #{e}"
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


## get_site_live

> <SiteLive> get_site_live(fqdn)

Get your live site

Get details about your live site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get your live site
  result = api_instance.get_site_live(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_live: #{e}"
end
```

#### Using the get_site_live_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SiteLive>, Integer, Hash)> get_site_live_with_http_info(fqdn)

```ruby
begin
  # Get your live site
  data, status_code, headers = api_instance.get_site_live_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SiteLive>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_live_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_site_live_0

> <SiteLive> get_site_live_0(fqdn)

Get your live site

Get details about your live site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get your live site
  result = api_instance.get_site_live_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_live_0: #{e}"
end
```

#### Using the get_site_live_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SiteLive>, Integer, Hash)> get_site_live_0_with_http_info(fqdn)

```ruby
begin
  # Get your live site
  data, status_code, headers = api_instance.get_site_live_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SiteLive>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_live_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_site_plan_usage

> Object get_site_plan_usage(fqdn, start, _end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
start = Time.parse('2013-10-20T19:20:30+01:00') # Time | 
_end = Time.parse('2013-10-20T19:20:30+01:00') # Time | 

begin
  # Get Site Plan Usage
  result = api_instance.get_site_plan_usage(fqdn, start, _end)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_plan_usage: #{e}"
end
```

#### Using the get_site_plan_usage_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_site_plan_usage_with_http_info(fqdn, start, _end)

```ruby
begin
  # Get Site Plan Usage
  data, status_code, headers = api_instance.get_site_plan_usage_with_http_info(fqdn, start, _end)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_plan_usage_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **start** | **Time** |  |  |
| **_end** | **Time** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_site_plan_usage_0

> Object get_site_plan_usage_0(fqdn, start, _end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
start = Time.parse('2013-10-20T19:20:30+01:00') # Time | 
_end = Time.parse('2013-10-20T19:20:30+01:00') # Time | 

begin
  # Get Site Plan Usage
  result = api_instance.get_site_plan_usage_0(fqdn, start, _end)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_plan_usage_0: #{e}"
end
```

#### Using the get_site_plan_usage_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> get_site_plan_usage_0_with_http_info(fqdn, start, _end)

```ruby
begin
  # Get Site Plan Usage
  data, status_code, headers = api_instance.get_site_plan_usage_0_with_http_info(fqdn, start, _end)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_site_plan_usage_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **start** | **Time** |  |  |
| **_end** | **Time** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_sites_live

> <Array<SiteLive>> get_sites_live

Get your sites

Get details about all of your live sites

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new

begin
  # Get your sites
  result = api_instance.get_sites_live
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_sites_live: #{e}"
end
```

#### Using the get_sites_live_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<SiteLive>>, Integer, Hash)> get_sites_live_with_http_info

```ruby
begin
  # Get your sites
  data, status_code, headers = api_instance.get_sites_live_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<SiteLive>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_sites_live_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;SiteLive&gt;**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_sites_live_0

> <Array<SiteLive>> get_sites_live_0

Get your sites

Get details about all of your live sites

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new

begin
  # Get your sites
  result = api_instance.get_sites_live_0
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_sites_live_0: #{e}"
end
```

#### Using the get_sites_live_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<SiteLive>>, Integer, Hash)> get_sites_live_0_with_http_info

```ruby
begin
  # Get your sites
  data, status_code, headers = api_instance.get_sites_live_0_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<SiteLive>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_sites_live_0_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;SiteLive&gt;**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_tags

> <Array<Tag>> get_tags(fqdn)

Get tags

Get all the tags for your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get tags
  result = api_instance.get_tags(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_tags: #{e}"
end
```

#### Using the get_tags_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Tag>>, Integer, Hash)> get_tags_with_http_info(fqdn)

```ruby
begin
  # Get tags
  data, status_code, headers = api_instance.get_tags_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Tag>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_tags_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |

### Return type

[**Array&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_tags_0

> <Array<Tag>> get_tags_0(fqdn)

Get tags

Get all the tags for your site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # Get tags
  result = api_instance.get_tags_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_tags_0: #{e}"
end
```

#### Using the get_tags_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Tag>>, Integer, Hash)> get_tags_0_with_http_info(fqdn)

```ruby
begin
  # Get tags
  data, status_code, headers = api_instance.get_tags_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Tag>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->get_tags_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |

### Return type

[**Array&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modify_firewall

> Object modify_firewall(fqdn, ip_address, opts)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
ip_address = 'ip_address_example' # String | 
opts = {
  add_or_del: 'add_or_del_example' # String | 
}

begin
  # Modify the firewall
  result = api_instance.modify_firewall(fqdn, ip_address, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->modify_firewall: #{e}"
end
```

#### Using the modify_firewall_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> modify_firewall_with_http_info(fqdn, ip_address, opts)

```ruby
begin
  # Modify the firewall
  data, status_code, headers = api_instance.modify_firewall_with_http_info(fqdn, ip_address, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->modify_firewall_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **ip_address** | **String** |  |  |
| **add_or_del** | **String** |  | [optional][default to &#39;add&#39;] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modify_firewall_0

> Object modify_firewall_0(fqdn, ip_address, opts)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
ip_address = 'ip_address_example' # String | 
opts = {
  add_or_del: 'add_or_del_example' # String | 
}

begin
  # Modify the firewall
  result = api_instance.modify_firewall_0(fqdn, ip_address, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->modify_firewall_0: #{e}"
end
```

#### Using the modify_firewall_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> modify_firewall_0_with_http_info(fqdn, ip_address, opts)

```ruby
begin
  # Modify the firewall
  data, status_code, headers = api_instance.modify_firewall_0_with_http_info(fqdn, ip_address, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->modify_firewall_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **ip_address** | **String** |  |  |
| **add_or_del** | **String** |  | [optional][default to &#39;add&#39;] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restore_site

> Object restore_site(fqdn, pit_restore_create)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
pit_restore_create = OpenapiClient::PITRestoreCreate.new({restore_point: Time.now}) # PITRestoreCreate | 

begin
  # Create PIT Restore
  result = api_instance.restore_site(fqdn, pit_restore_create)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->restore_site: #{e}"
end
```

#### Using the restore_site_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> restore_site_with_http_info(fqdn, pit_restore_create)

```ruby
begin
  # Create PIT Restore
  data, status_code, headers = api_instance.restore_site_with_http_info(fqdn, pit_restore_create)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->restore_site_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **pit_restore_create** | [**PITRestoreCreate**](PITRestoreCreate.md) |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restore_site_0

> Object restore_site_0(fqdn, pit_restore_create)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
pit_restore_create = OpenapiClient::PITRestoreCreate.new({restore_point: Time.now}) # PITRestoreCreate | 

begin
  # Create PIT Restore
  result = api_instance.restore_site_0(fqdn, pit_restore_create)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->restore_site_0: #{e}"
end
```

#### Using the restore_site_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> restore_site_0_with_http_info(fqdn, pit_restore_create)

```ruby
begin
  # Create PIT Restore
  data, status_code, headers = api_instance.restore_site_0_with_http_info(fqdn, pit_restore_create)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->restore_site_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **pit_restore_create** | [**PITRestoreCreate**](PITRestoreCreate.md) |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## shell_cmd_site_live

> Object shell_cmd_site_live(fqdn, cmd, opts)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
cmd = 'cmd_example' # String | 
opts = {
  cwd: 'cwd_example', # String | 
  auto_track_dir: true, # Boolean | 
  stage: true # Boolean | 
}

begin
  # Execute shell command
  result = api_instance.shell_cmd_site_live(fqdn, cmd, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->shell_cmd_site_live: #{e}"
end
```

#### Using the shell_cmd_site_live_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> shell_cmd_site_live_with_http_info(fqdn, cmd, opts)

```ruby
begin
  # Execute shell command
  data, status_code, headers = api_instance.shell_cmd_site_live_with_http_info(fqdn, cmd, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->shell_cmd_site_live_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **cmd** | **String** |  |  |
| **cwd** | **String** |  | [optional][default to &#39;/bitnami/wordpress/wp-content&#39;] |
| **auto_track_dir** | **Boolean** |  | [optional][default to false] |
| **stage** | **Boolean** |  | [optional][default to false] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## shell_cmd_site_live_0

> Object shell_cmd_site_live_0(fqdn, cmd, opts)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
cmd = 'cmd_example' # String | 
opts = {
  cwd: 'cwd_example', # String | 
  auto_track_dir: true, # Boolean | 
  stage: true # Boolean | 
}

begin
  # Execute shell command
  result = api_instance.shell_cmd_site_live_0(fqdn, cmd, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->shell_cmd_site_live_0: #{e}"
end
```

#### Using the shell_cmd_site_live_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> shell_cmd_site_live_0_with_http_info(fqdn, cmd, opts)

```ruby
begin
  # Execute shell command
  data, status_code, headers = api_instance.shell_cmd_site_live_0_with_http_info(fqdn, cmd, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->shell_cmd_site_live_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **cmd** | **String** |  |  |
| **cwd** | **String** |  | [optional][default to &#39;/bitnami/wordpress/wp-content&#39;] |
| **auto_track_dir** | **Boolean** |  | [optional][default to false] |
| **stage** | **Boolean** |  | [optional][default to false] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_dns_record

> Object update_dns_record(fqdn, dns_type, dns_hostname, dns_content, opts)

Update DNS record

Update a DNS record on your Nameserver configured site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
dns_type = 'dns_type_example' # String | 
dns_hostname = 'dns_hostname_example' # String | 
dns_content = 'dns_content_example' # String | 
opts = {
  dns_id: 'dns_id_example', # String | 
  dns_priority: 56, # Integer | 
  dns_ttl: 56 # Integer | 
}

begin
  # Update DNS record
  result = api_instance.update_dns_record(fqdn, dns_type, dns_hostname, dns_content, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_dns_record: #{e}"
end
```

#### Using the update_dns_record_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_dns_record_with_http_info(fqdn, dns_type, dns_hostname, dns_content, opts)

```ruby
begin
  # Update DNS record
  data, status_code, headers = api_instance.update_dns_record_with_http_info(fqdn, dns_type, dns_hostname, dns_content, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_dns_record_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **dns_type** | **String** |  |  |
| **dns_hostname** | **String** |  |  |
| **dns_content** | **String** |  |  |
| **dns_id** | **String** |  | [optional] |
| **dns_priority** | **Integer** |  | [optional][default to 0] |
| **dns_ttl** | **Integer** |  | [optional][default to 1] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_dns_record_0

> Object update_dns_record_0(fqdn, dns_type, dns_hostname, dns_content, opts)

Update DNS record

Update a DNS record on your Nameserver configured site

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
dns_type = 'dns_type_example' # String | 
dns_hostname = 'dns_hostname_example' # String | 
dns_content = 'dns_content_example' # String | 
opts = {
  dns_id: 'dns_id_example', # String | 
  dns_priority: 56, # Integer | 
  dns_ttl: 56 # Integer | 
}

begin
  # Update DNS record
  result = api_instance.update_dns_record_0(fqdn, dns_type, dns_hostname, dns_content, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_dns_record_0: #{e}"
end
```

#### Using the update_dns_record_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_dns_record_0_with_http_info(fqdn, dns_type, dns_hostname, dns_content, opts)

```ruby
begin
  # Update DNS record
  data, status_code, headers = api_instance.update_dns_record_0_with_http_info(fqdn, dns_type, dns_hostname, dns_content, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_dns_record_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **dns_type** | **String** |  |  |
| **dns_hostname** | **String** |  |  |
| **dns_content** | **String** |  |  |
| **dns_id** | **String** |  | [optional] |
| **dns_priority** | **Integer** |  | [optional][default to 0] |
| **dns_ttl** | **Integer** |  | [optional][default to 1] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_email

> Object update_email(user_email_address, fqdn, opts)

Update Email

Update a custom email account

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
user_email_address = 'user_email_address_example' # String | 
fqdn = 'fqdn_example' # String | 
opts = {
  user_email_update: OpenapiClient::UserEmailUpdate.new # UserEmailUpdate | 
}

begin
  # Update Email
  result = api_instance.update_email(user_email_address, fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_email: #{e}"
end
```

#### Using the update_email_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_email_with_http_info(user_email_address, fqdn, opts)

```ruby
begin
  # Update Email
  data, status_code, headers = api_instance.update_email_with_http_info(user_email_address, fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_email_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_email_address** | **String** |  |  |
| **fqdn** | **String** |  |  |
| **user_email_update** | [**UserEmailUpdate**](UserEmailUpdate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update_email_0

> Object update_email_0(user_email_address, fqdn, opts)

Update Email

Update a custom email account

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
user_email_address = 'user_email_address_example' # String | 
fqdn = 'fqdn_example' # String | 
opts = {
  user_email_update: OpenapiClient::UserEmailUpdate.new # UserEmailUpdate | 
}

begin
  # Update Email
  result = api_instance.update_email_0(user_email_address, fqdn, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_email_0: #{e}"
end
```

#### Using the update_email_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> update_email_0_with_http_info(user_email_address, fqdn, opts)

```ruby
begin
  # Update Email
  data, status_code, headers = api_instance.update_email_0_with_http_info(user_email_address, fqdn, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_email_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_email_address** | **String** |  |  |
| **fqdn** | **String** |  |  |
| **user_email_update** | [**UserEmailUpdate**](UserEmailUpdate.md) |  | [optional] |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update_site_live

> <SiteLive> update_site_live(fqdn, site_live_update)

Update a site

Update a site's details

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
site_live_update = OpenapiClient::SiteLiveUpdate.new # SiteLiveUpdate | 

begin
  # Update a site
  result = api_instance.update_site_live(fqdn, site_live_update)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_site_live: #{e}"
end
```

#### Using the update_site_live_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SiteLive>, Integer, Hash)> update_site_live_with_http_info(fqdn, site_live_update)

```ruby
begin
  # Update a site
  data, status_code, headers = api_instance.update_site_live_with_http_info(fqdn, site_live_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SiteLive>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_site_live_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **site_live_update** | [**SiteLiveUpdate**](SiteLiveUpdate.md) |  |  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## update_site_live_0

> <SiteLive> update_site_live_0(fqdn, site_live_update)

Update a site

Update a site's details

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 
site_live_update = OpenapiClient::SiteLiveUpdate.new # SiteLiveUpdate | 

begin
  # Update a site
  result = api_instance.update_site_live_0(fqdn, site_live_update)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_site_live_0: #{e}"
end
```

#### Using the update_site_live_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SiteLive>, Integer, Hash)> update_site_live_0_with_http_info(fqdn, site_live_update)

```ruby
begin
  # Update a site
  data, status_code, headers = api_instance.update_site_live_0_with_http_info(fqdn, site_live_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SiteLive>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->update_site_live_0_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **site_live_update** | [**SiteLiveUpdate**](SiteLiveUpdate.md) |  |  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validate_mx_records

> Object validate_mx_records(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # MX Validation
  result = api_instance.validate_mx_records(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->validate_mx_records: #{e}"
end
```

#### Using the validate_mx_records_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> validate_mx_records_with_http_info(fqdn)

```ruby
begin
  # MX Validation
  data, status_code, headers = api_instance.validate_mx_records_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->validate_mx_records_with_http_info: #{e}"
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


## validate_mx_records_0

> Object validate_mx_records_0(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::SiteLiveApi.new
fqdn = 'fqdn_example' # String | 

begin
  # MX Validation
  result = api_instance.validate_mx_records_0(fqdn)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->validate_mx_records_0: #{e}"
end
```

#### Using the validate_mx_records_0_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> validate_mx_records_0_with_http_info(fqdn)

```ruby
begin
  # MX Validation
  data, status_code, headers = api_instance.validate_mx_records_0_with_http_info(fqdn)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling SiteLiveApi->validate_mx_records_0_with_http_info: #{e}"
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

