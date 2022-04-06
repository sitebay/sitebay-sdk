# OpenAPI\Client\PlanApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPlan()**](PlanApi.md#cancelPlan) | **DELETE** /api/v1/plan/{plan_id} | Cancel Plan
[**createPlan()**](PlanApi.md#createPlan) | **POST** /api/v1/plan | Create a Plan
[**getPlan()**](PlanApi.md#getPlan) | **GET** /api/v1/plan/{plan_id} | Get Plan
[**getPlans()**](PlanApi.md#getPlans) | **GET** /api/v1/plan | Get Plans
[**previewChange()**](PlanApi.md#previewChange) | **GET** /api/v1/plan/{plan_id}/preview | Preview Plan
[**uncancelPlan()**](PlanApi.md#uncancelPlan) | **PATCH** /api/v1/plan/{plan_id} | Uncancel Plan
[**updatePlan()**](PlanApi.md#updatePlan) | **PUT** /api/v1/plan/{plan_id} | Update a Plan


## `cancelPlan()`

```php
cancelPlan($plan_id): mixed
```

Cancel Plan

Cancel your plan, which will delete it at the end of your cycle

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PlanApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$plan_id = 'plan_id_example'; // string

try {
    $result = $apiInstance->cancelPlan($plan_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlanApi->cancelPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **string**|  |

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createPlan()`

```php
createPlan($unknown_base_type): \OpenAPI\Client\Model\Plan
```

Create a Plan

Buy a new plan/team

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PlanApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unknown_base_type = {"additional_sites":1,"interval":"month","new_team_name":"Jane's WordPress Design Team","plan_type_name":"business"}; // \OpenAPI\Client\Model\UNKNOWN_BASE_TYPE

try {
    $result = $apiInstance->createPlan($unknown_base_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlanApi->createPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**\OpenAPI\Client\Model\UNKNOWN_BASE_TYPE**](../Model/UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Plan**](../Model/Plan.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPlan()`

```php
getPlan($plan_id): \OpenAPI\Client\Model\Plan
```

Get Plan

Get a plan by its UUID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PlanApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$plan_id = 'plan_id_example'; // string

try {
    $result = $apiInstance->getPlan($plan_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlanApi->getPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Plan**](../Model/Plan.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPlans()`

```php
getPlans(): \OpenAPI\Client\Model\Plan[]
```

Get Plans

Get all your active plans

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PlanApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getPlans();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlanApi->getPlans: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Plan[]**](../Model/Plan.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `previewChange()`

```php
previewChange($plan_id, $new_plan_type_name, $additional_sites): mixed
```

Preview Plan

Preview the proration change before you upgrade or downgrade your plan

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PlanApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$plan_id = 'plan_id_example'; // string
$new_plan_type_name = 'new_plan_type_name_example'; // string
$additional_sites = 56; // int

try {
    $result = $apiInstance->previewChange($plan_id, $new_plan_type_name, $additional_sites);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlanApi->previewChange: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **string**|  |
 **new_plan_type_name** | **string**|  |
 **additional_sites** | **int**|  |

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `uncancelPlan()`

```php
uncancelPlan($plan_id): mixed
```

Uncancel Plan

Uncancel your cancelled plan

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PlanApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$plan_id = 'plan_id_example'; // string

try {
    $result = $apiInstance->uncancelPlan($plan_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlanApi->uncancelPlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **string**|  |

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updatePlan()`

```php
updatePlan($plan_id, $plan_update): \OpenAPI\Client\Model\Plan
```

Update a Plan

Upgrade or downgrade your plan

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PlanApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$plan_id = 'plan_id_example'; // string
$plan_update = new \OpenAPI\Client\Model\PlanUpdate(); // \OpenAPI\Client\Model\PlanUpdate

try {
    $result = $apiInstance->updatePlan($plan_id, $plan_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PlanApi->updatePlan: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **plan_id** | **string**|  |
 **plan_update** | [**\OpenAPI\Client\Model\PlanUpdate**](../Model/PlanUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\Plan**](../Model/Plan.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
