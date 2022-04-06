# OpenapiClient::TemplateApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_template**](TemplateApi.md#get_template) | **GET** /api/v1/template/{template_name} | Get Templates |
| [**get_templates**](TemplateApi.md#get_templates) | **GET** /api/v1/template | Get Templates |
| [**submit_template**](TemplateApi.md#submit_template) | **POST** /api/v1/template | Create Template |


## get_template

> <Template> get_template(template_name)

Get Templates

Get details of a ready-made template sites by its name

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::TemplateApi.new
template_name = 'template_name_example' # String | 

begin
  # Get Templates
  result = api_instance.get_template(template_name)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplateApi->get_template: #{e}"
end
```

#### Using the get_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Template>, Integer, Hash)> get_template_with_http_info(template_name)

```ruby
begin
  # Get Templates
  data, status_code, headers = api_instance.get_template_with_http_info(template_name)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Template>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplateApi->get_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template_name** | **String** |  |  |

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_templates

> <Array<Template>> get_templates

Get Templates

Returns a list of ready-made template sites

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::TemplateApi.new

begin
  # Get Templates
  result = api_instance.get_templates
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplateApi->get_templates: #{e}"
end
```

#### Using the get_templates_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Template>>, Integer, Hash)> get_templates_with_http_info

```ruby
begin
  # Get Templates
  data, status_code, headers = api_instance.get_templates_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Template>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplateApi->get_templates_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Template&gt;**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submit_template

> <Template> submit_template(opts)

Create Template

Create a new template by uploading a wpress file

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TemplateApi.new
opts = {
  template_create: OpenapiClient::TemplateCreate.new({full_description: 'full_description_example', name: 'name_example', plugins: 'plugins_example', quickstart: 'quickstart_example', short_description: 'short_description_example', tag: 'tag_example', wpress_url: 'wpress_url_example'}) # TemplateCreate | 
}

begin
  # Create Template
  result = api_instance.submit_template(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplateApi->submit_template: #{e}"
end
```

#### Using the submit_template_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Template>, Integer, Hash)> submit_template_with_http_info(opts)

```ruby
begin
  # Create Template
  data, status_code, headers = api_instance.submit_template_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Template>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TemplateApi->submit_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **template_create** | [**TemplateCreate**](TemplateCreate.md) |  | [optional] |

### Return type

[**Template**](Template.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

