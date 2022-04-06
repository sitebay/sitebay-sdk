# OpenAPI\Client\UtilsApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainCheck()**](UtilsApi.md#domainCheck) | **GET** /api/v1/domain_check | Domain check
[**verifyGitSyncDirectories()**](UtilsApi.md#verifyGitSyncDirectories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


## `domainCheck()`

```php
domainCheck($fqdn): mixed
```

Domain check

Returns success if a given FQDN's DNS records are correctly set up

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UtilsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->domainCheck($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UtilsApi->domainCheck: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |

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

## `verifyGitSyncDirectories()`

```php
verifyGitSyncDirectories($git_url, $git_branch): mixed
```

Verify Git Sync Directories

Returns success Git Repo's root folder is correctly set up

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UtilsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$git_url = 'git_url_example'; // string
$git_branch = 'git_branch_example'; // string

try {
    $result = $apiInstance->verifyGitSyncDirectories($git_url, $git_branch);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UtilsApi->verifyGitSyncDirectories: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_url** | **string**|  |
 **git_branch** | **string**|  | [optional]

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
