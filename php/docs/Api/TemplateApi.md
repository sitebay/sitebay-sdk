# OpenAPI\Client\TemplateApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTemplate()**](TemplateApi.md#getTemplate) | **GET** /api/v1/template/{template_name} | Get Templates
[**getTemplates()**](TemplateApi.md#getTemplates) | **GET** /api/v1/template | Get Templates
[**submitTemplate()**](TemplateApi.md#submitTemplate) | **POST** /api/v1/template | Create Template


## `getTemplate()`

```php
getTemplate($template_name): \OpenAPI\Client\Model\Template
```

Get Templates

Get details of a ready-made template sites by its name

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\TemplateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$template_name = 'template_name_example'; // string

try {
    $result = $apiInstance->getTemplate($template_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplateApi->getTemplate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_name** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Template**](../Model/Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTemplates()`

```php
getTemplates(): \OpenAPI\Client\Model\Template[]
```

Get Templates

Returns a list of ready-made template sites

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\TemplateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getTemplates();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplateApi->getTemplates: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Template[]**](../Model/Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `submitTemplate()`

```php
submitTemplate($template_create): \OpenAPI\Client\Model\Template
```

Create Template

Create a new template by uploading a wpress file

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TemplateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$template_create = {"full_description":"A clothing store template based on shopify and woocommerce","name":"my_ecommerce_template","plugins":"wordfence,woocommerce,elementor","quickstart":"https://github.com/wanda1987/mytemplate/README.md","short_description":"An easy way to launch a storefront quick.","tag":"business","wpress_url":"https://github.com/wanda1987/mytemplate/template.wpress"}; // \OpenAPI\Client\Model\TemplateCreate

try {
    $result = $apiInstance->submitTemplate($template_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TemplateApi->submitTemplate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_create** | [**\OpenAPI\Client\Model\TemplateCreate**](../Model/TemplateCreate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Template**](../Model/Template.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
