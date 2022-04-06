# OpenAPI\Client\RegionApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRegion()**](RegionApi.md#getRegion) | **GET** /api/v1/region/{region_id} | Get a Region
[**getRegions()**](RegionApi.md#getRegions) | **GET** /api/v1/region | Get Regions


## `getRegion()`

```php
getRegion($region_id): \OpenAPI\Client\Model\Region
```

Get a Region

Get details of a region by its ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\RegionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$region_id = 56; // int

try {
    $result = $apiInstance->getRegion($region_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RegionApi->getRegion: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region_id** | **int**|  |

### Return type

[**\OpenAPI\Client\Model\Region**](../Model/Region.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getRegions()`

```php
getRegions(): \OpenAPI\Client\Model\Region[]
```

Get Regions

Get details of all regions

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\RegionApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getRegions();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RegionApi->getRegions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Region[]**](../Model/Region.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
