# OpenapiClient::RegionApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_region**](RegionApi.md#get_region) | **GET** /api/v1/region/{region_id} | Get a Region |
| [**get_regions**](RegionApi.md#get_regions) | **GET** /api/v1/region | Get Regions |


## get_region

> <Region> get_region(region_id)

Get a Region

Get details of a region by its ID

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::RegionApi.new
region_id = 56 # Integer | 

begin
  # Get a Region
  result = api_instance.get_region(region_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RegionApi->get_region: #{e}"
end
```

#### Using the get_region_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Region>, Integer, Hash)> get_region_with_http_info(region_id)

```ruby
begin
  # Get a Region
  data, status_code, headers = api_instance.get_region_with_http_info(region_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Region>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RegionApi->get_region_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **region_id** | **Integer** |  |  |

### Return type

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_regions

> <Array<Region>> get_regions

Get Regions

Get details of all regions

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::RegionApi.new

begin
  # Get Regions
  result = api_instance.get_regions
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RegionApi->get_regions: #{e}"
end
```

#### Using the get_regions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Region>>, Integer, Hash)> get_regions_with_http_info

```ruby
begin
  # Get Regions
  data, status_code, headers = api_instance.get_regions_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Region>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RegionApi->get_regions_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Region&gt;**](Region.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

