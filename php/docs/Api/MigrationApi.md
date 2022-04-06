# OpenAPI\Client\MigrationApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMigration()**](MigrationApi.md#createMigration) | **POST** /api/v1/migration | Create a migration
[**deleteMigration()**](MigrationApi.md#deleteMigration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
[**getMigrations()**](MigrationApi.md#getMigrations) | **GET** /api/v1/migration | Get Migrations


## `createMigration()`

```php
createMigration($current_url, $wordpress_password, $wordpress_user, $extra, $ftp_address, $ftp_password, $ftp_user, $host, $host_password, $host_user, $migration_type, $zip_file, $zip_file_name): \OpenAPI\Client\Model\Migration
```

Create a migration

Request a new site migration by providing your old host's domain and your site's login details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\MigrationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$current_url = 'current_url_example'; // string
$wordpress_password = 'wordpress_password_example'; // string
$wordpress_user = 'wordpress_user_example'; // string
$extra = 'extra_example'; // string
$ftp_address = 'ftp_address_example'; // string
$ftp_password = 'ftp_password_example'; // string
$ftp_user = 'ftp_user_example'; // string
$host = 'host_example'; // string
$host_password = 'host_password_example'; // string
$host_user = 'host_user_example'; // string
$migration_type = 'migration_type_example'; // string
$zip_file = "/path/to/file.txt"; // \SplFileObject
$zip_file_name = 'zip_file_name_example'; // string

try {
    $result = $apiInstance->createMigration($current_url, $wordpress_password, $wordpress_user, $extra, $ftp_address, $ftp_password, $ftp_user, $host, $host_password, $host_user, $migration_type, $zip_file, $zip_file_name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MigrationApi->createMigration: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **current_url** | **string**|  |
 **wordpress_password** | **string**|  |
 **wordpress_user** | **string**|  |
 **extra** | **string**|  | [optional]
 **ftp_address** | **string**|  | [optional]
 **ftp_password** | **string**|  | [optional]
 **ftp_user** | **string**|  | [optional]
 **host** | **string**|  | [optional]
 **host_password** | **string**|  | [optional]
 **host_user** | **string**|  | [optional]
 **migration_type** | **string**|  | [optional]
 **zip_file** | **\SplFileObject****\SplFileObject**|  | [optional]
 **zip_file_name** | **string**|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Migration**](../Model/Migration.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteMigration()`

```php
deleteMigration($migration_id): mixed
```

Delete Migration

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\MigrationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$migration_id = 56; // int

try {
    $result = $apiInstance->deleteMigration($migration_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MigrationApi->deleteMigration: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migration_id** | **int**|  |

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

## `getMigrations()`

```php
getMigrations(): \OpenAPI\Client\Model\Migration[]
```

Get Migrations

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\MigrationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getMigrations();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MigrationApi->getMigrations: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Migration[]**](../Model/Migration.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
