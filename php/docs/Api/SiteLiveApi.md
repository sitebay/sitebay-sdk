# OpenAPI\Client\SiteLiveApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMailDns()**](SiteLiveApi.md#addMailDns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**addMailDns_0()**](SiteLiveApi.md#addMailDns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**changeDevMode()**](SiteLiveApi.md#changeDevMode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**changeDevMode_0()**](SiteLiveApi.md#changeDevMode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**clearCache()**](SiteLiveApi.md#clearCache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**clearCache_0()**](SiteLiveApi.md#clearCache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**commitSiteStage()**](SiteLiveApi.md#commitSiteStage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**commitSiteStage_0()**](SiteLiveApi.md#commitSiteStage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**createEmail()**](SiteLiveApi.md#createEmail) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**createEmail_0()**](SiteLiveApi.md#createEmail_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**createExternalPath()**](SiteLiveApi.md#createExternalPath) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**createExternalPath_0()**](SiteLiveApi.md#createExternalPath_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**createSiteLive()**](SiteLiveApi.md#createSiteLive) | **POST** /api/v1/site_live | Create a site
[**createSiteLive_0()**](SiteLiveApi.md#createSiteLive_0) | **POST** /api/v1/site_live | Create a site
[**createSiteStage()**](SiteLiveApi.md#createSiteStage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**createSiteStage_0()**](SiteLiveApi.md#createSiteStage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**createTag()**](SiteLiveApi.md#createTag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**createTag_0()**](SiteLiveApi.md#createTag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**deleteDnsRecord()**](SiteLiveApi.md#deleteDnsRecord) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**deleteDnsRecord_0()**](SiteLiveApi.md#deleteDnsRecord_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**deleteEmail()**](SiteLiveApi.md#deleteEmail) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**deleteEmail_0()**](SiteLiveApi.md#deleteEmail_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**deleteExternalPath()**](SiteLiveApi.md#deleteExternalPath) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**deleteExternalPath_0()**](SiteLiveApi.md#deleteExternalPath_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**deleteSiteLive()**](SiteLiveApi.md#deleteSiteLive) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**deleteSiteLive_0()**](SiteLiveApi.md#deleteSiteLive_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**deleteSiteStage()**](SiteLiveApi.md#deleteSiteStage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**deleteSiteStage_0()**](SiteLiveApi.md#deleteSiteStage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**deleteTag()**](SiteLiveApi.md#deleteTag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**deleteTag_0()**](SiteLiveApi.md#deleteTag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**disableFirewall()**](SiteLiveApi.md#disableFirewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**disableFirewall_0()**](SiteLiveApi.md#disableFirewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**enableFirewall()**](SiteLiveApi.md#enableFirewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**enableFirewall_0()**](SiteLiveApi.md#enableFirewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**getDnsRecords()**](SiteLiveApi.md#getDnsRecords) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**getDnsRecords_0()**](SiteLiveApi.md#getDnsRecords_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**getEmails()**](SiteLiveApi.md#getEmails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**getEmails_0()**](SiteLiveApi.md#getEmails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**getExternalPaths()**](SiteLiveApi.md#getExternalPaths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**getExternalPaths_0()**](SiteLiveApi.md#getExternalPaths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**getFilesAtPoint()**](SiteLiveApi.md#getFilesAtPoint) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**getFilesAtPoint_0()**](SiteLiveApi.md#getFilesAtPoint_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**getMailDns()**](SiteLiveApi.md#getMailDns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**getMailDns_0()**](SiteLiveApi.md#getMailDns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**getPitRestore()**](SiteLiveApi.md#getPitRestore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**getPitRestore_0()**](SiteLiveApi.md#getPitRestore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**getPitRestores()**](SiteLiveApi.md#getPitRestores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**getPitRestores_0()**](SiteLiveApi.md#getPitRestores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**getSiteLive()**](SiteLiveApi.md#getSiteLive) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**getSiteLive_0()**](SiteLiveApi.md#getSiteLive_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**getSitePlanUsage()**](SiteLiveApi.md#getSitePlanUsage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**getSitePlanUsage_0()**](SiteLiveApi.md#getSitePlanUsage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**getSitesLive()**](SiteLiveApi.md#getSitesLive) | **GET** /api/v1/site_live | Get your sites
[**getSitesLive_0()**](SiteLiveApi.md#getSitesLive_0) | **GET** /api/v1/site_live | Get your sites
[**getTags()**](SiteLiveApi.md#getTags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**getTags_0()**](SiteLiveApi.md#getTags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**modifyFirewall()**](SiteLiveApi.md#modifyFirewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**modifyFirewall_0()**](SiteLiveApi.md#modifyFirewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**restoreSite()**](SiteLiveApi.md#restoreSite) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**restoreSite_0()**](SiteLiveApi.md#restoreSite_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**shellCmdSiteLive()**](SiteLiveApi.md#shellCmdSiteLive) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**shellCmdSiteLive_0()**](SiteLiveApi.md#shellCmdSiteLive_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**updateDnsRecord()**](SiteLiveApi.md#updateDnsRecord) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**updateDnsRecord_0()**](SiteLiveApi.md#updateDnsRecord_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**updateEmail()**](SiteLiveApi.md#updateEmail) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**updateEmail_0()**](SiteLiveApi.md#updateEmail_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**updateSiteLive()**](SiteLiveApi.md#updateSiteLive) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**updateSiteLive_0()**](SiteLiveApi.md#updateSiteLive_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**validateMxRecords()**](SiteLiveApi.md#validateMxRecords) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
[**validateMxRecords_0()**](SiteLiveApi.md#validateMxRecords_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation


## `addMailDns()`

```php
addMailDns($fqdn): mixed
```

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->addMailDns($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->addMailDns: ', $e->getMessage(), PHP_EOL;
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

## `addMailDns_0()`

```php
addMailDns_0($fqdn): mixed
```

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->addMailDns_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->addMailDns_0: ', $e->getMessage(), PHP_EOL;
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

## `changeDevMode()`

```php
changeDevMode($fqdn, $value): mixed
```

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$value = 'value_example'; // string

try {
    $result = $apiInstance->changeDevMode($fqdn, $value);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->changeDevMode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **value** | **string**|  |

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

## `changeDevMode_0()`

```php
changeDevMode_0($fqdn, $value): mixed
```

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$value = 'value_example'; // string

try {
    $result = $apiInstance->changeDevMode_0($fqdn, $value);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->changeDevMode_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **value** | **string**|  |

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

## `clearCache()`

```php
clearCache($fqdn): mixed
```

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->clearCache($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->clearCache: ', $e->getMessage(), PHP_EOL;
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

## `clearCache_0()`

```php
clearCache_0($fqdn): mixed
```

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->clearCache_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->clearCache_0: ', $e->getMessage(), PHP_EOL;
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

## `commitSiteStage()`

```php
commitSiteStage($fqdn): mixed
```

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->commitSiteStage($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->commitSiteStage: ', $e->getMessage(), PHP_EOL;
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

## `commitSiteStage_0()`

```php
commitSiteStage_0($fqdn): mixed
```

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->commitSiteStage_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->commitSiteStage_0: ', $e->getMessage(), PHP_EOL;
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

## `createEmail()`

```php
createEmail($fqdn, $user_email_create): object
```

Create Email

Create a custom email account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$user_email_create = {"forward_to_email":"boblaw1989_@gmail.com","local_part":"bob"}; // \OpenAPI\Client\Model\UserEmailCreate

try {
    $result = $apiInstance->createEmail($fqdn, $user_email_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createEmail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **user_email_create** | [**\OpenAPI\Client\Model\UserEmailCreate**](../Model/UserEmailCreate.md)|  | [optional]

### Return type

**object**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createEmail_0()`

```php
createEmail_0($fqdn, $user_email_create): object
```

Create Email

Create a custom email account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$user_email_create = {"forward_to_email":"boblaw1989_@gmail.com","local_part":"bob"}; // \OpenAPI\Client\Model\UserEmailCreate

try {
    $result = $apiInstance->createEmail_0($fqdn, $user_email_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createEmail_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **user_email_create** | [**\OpenAPI\Client\Model\UserEmailCreate**](../Model/UserEmailCreate.md)|  | [optional]

### Return type

**object**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createExternalPath()`

```php
createExternalPath($fqdn, $external_path_create): mixed
```

Create External Path

Connect an external URL to your site on a subpath

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$external_path_create = {"external_name":"sitebaydocsprod.sitebay.ca","path":"/support"}; // \OpenAPI\Client\Model\ExternalPathCreate

try {
    $result = $apiInstance->createExternalPath($fqdn, $external_path_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createExternalPath: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **external_path_create** | [**\OpenAPI\Client\Model\ExternalPathCreate**](../Model/ExternalPathCreate.md)|  | [optional]

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createExternalPath_0()`

```php
createExternalPath_0($fqdn, $external_path_create): mixed
```

Create External Path

Connect an external URL to your site on a subpath

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$external_path_create = {"external_name":"sitebaydocsprod.sitebay.ca","path":"/support"}; // \OpenAPI\Client\Model\ExternalPathCreate

try {
    $result = $apiInstance->createExternalPath_0($fqdn, $external_path_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createExternalPath_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **external_path_create** | [**\OpenAPI\Client\Model\ExternalPathCreate**](../Model/ExternalPathCreate.md)|  | [optional]

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createSiteLive()`

```php
createSiteLive($unknown_base_type): \OpenAPI\Client\Model\SiteLive
```

Create a site

Create a new site by providing your domain and your site's WordPress details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unknown_base_type = {"fqdn":"www.example.org","team_id":"$MY_TEAM_UUID","wordpressBlogName":"Bob Law's Dog Blog","wordpressEmail":"admin@example.org","wordpressFirstName":"Bob","wordpressLastName":"Law","wordpressPassword":"A strong password","wordpressUsername":"bob2002"}; // \OpenAPI\Client\Model\UNKNOWN_BASE_TYPE

try {
    $result = $apiInstance->createSiteLive($unknown_base_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createSiteLive: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**\OpenAPI\Client\Model\UNKNOWN_BASE_TYPE**](../Model/UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\SiteLive**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createSiteLive_0()`

```php
createSiteLive_0($unknown_base_type): \OpenAPI\Client\Model\SiteLive
```

Create a site

Create a new site by providing your domain and your site's WordPress details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unknown_base_type = {"fqdn":"www.example.org","team_id":"$MY_TEAM_UUID","wordpressBlogName":"Bob Law's Dog Blog","wordpressEmail":"admin@example.org","wordpressFirstName":"Bob","wordpressLastName":"Law","wordpressPassword":"A strong password","wordpressUsername":"bob2002"}; // \OpenAPI\Client\Model\UNKNOWN_BASE_TYPE

try {
    $result = $apiInstance->createSiteLive_0($unknown_base_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createSiteLive_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**\OpenAPI\Client\Model\UNKNOWN_BASE_TYPE**](../Model/UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\SiteLive**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createSiteStage()`

```php
createSiteStage($fqdn, $site_stage_create): mixed
```

Create a Staging site

Create a staging site on which you can test changes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$site_stage_create = {"restore_point":"2022-04-06T06:35:33.733141","subdomain":"staging"}; // \OpenAPI\Client\Model\SiteStageCreate

try {
    $result = $apiInstance->createSiteStage($fqdn, $site_stage_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createSiteStage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **site_stage_create** | [**\OpenAPI\Client\Model\SiteStageCreate**](../Model/SiteStageCreate.md)|  | [optional]

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createSiteStage_0()`

```php
createSiteStage_0($fqdn, $site_stage_create): mixed
```

Create a Staging site

Create a staging site on which you can test changes

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$site_stage_create = {"restore_point":"2022-04-06T06:35:33.733141","subdomain":"staging"}; // \OpenAPI\Client\Model\SiteStageCreate

try {
    $result = $apiInstance->createSiteStage_0($fqdn, $site_stage_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createSiteStage_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **site_stage_create** | [**\OpenAPI\Client\Model\SiteStageCreate**](../Model/SiteStageCreate.md)|  | [optional]

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTag()`

```php
createTag($fqdn, $tag_create): \OpenAPI\Client\Model\Tag
```

Create tag

Create a tag for organizational purposes for your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$tag_create = {"name":"customer_id_1251515"}; // \OpenAPI\Client\Model\TagCreate

try {
    $result = $apiInstance->createTag($fqdn, $tag_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createTag: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **tag_create** | [**\OpenAPI\Client\Model\TagCreate**](../Model/TagCreate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Tag**](../Model/Tag.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTag_0()`

```php
createTag_0($fqdn, $tag_create): \OpenAPI\Client\Model\Tag
```

Create tag

Create a tag for organizational purposes for your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$tag_create = {"name":"customer_id_1251515"}; // \OpenAPI\Client\Model\TagCreate

try {
    $result = $apiInstance->createTag_0($fqdn, $tag_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->createTag_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **tag_create** | [**\OpenAPI\Client\Model\TagCreate**](../Model/TagCreate.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Tag**](../Model/Tag.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteDnsRecord()`

```php
deleteDnsRecord($dns_id, $fqdn): mixed
```

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$dns_id = 'dns_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteDnsRecord($dns_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteDnsRecord: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dns_id** | **string**|  |
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

## `deleteDnsRecord_0()`

```php
deleteDnsRecord_0($dns_id, $fqdn): mixed
```

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$dns_id = 'dns_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteDnsRecord_0($dns_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteDnsRecord_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dns_id** | **string**|  |
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

## `deleteEmail()`

```php
deleteEmail($fqdn, $user_email_address): mixed
```

Delete Email

Delete a custom email account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$user_email_address = 'user_email_address_example'; // string

try {
    $result = $apiInstance->deleteEmail($fqdn, $user_email_address);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteEmail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **user_email_address** | **string**|  |

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

## `deleteEmail_0()`

```php
deleteEmail_0($fqdn, $user_email_address): mixed
```

Delete Email

Delete a custom email account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$user_email_address = 'user_email_address_example'; // string

try {
    $result = $apiInstance->deleteEmail_0($fqdn, $user_email_address);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteEmail_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **user_email_address** | **string**|  |

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

## `deleteExternalPath()`

```php
deleteExternalPath($external_path_id, $fqdn): mixed
```

Delete External Path

Delete the link between an external URL and your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$external_path_id = 'external_path_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteExternalPath($external_path_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteExternalPath: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_path_id** | **string**|  |
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

## `deleteExternalPath_0()`

```php
deleteExternalPath_0($external_path_id, $fqdn): mixed
```

Delete External Path

Delete the link between an external URL and your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$external_path_id = 'external_path_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteExternalPath_0($external_path_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteExternalPath_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_path_id** | **string**|  |
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

## `deleteSiteLive()`

```php
deleteSiteLive($fqdn): mixed
```

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteSiteLive($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteSiteLive: ', $e->getMessage(), PHP_EOL;
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

## `deleteSiteLive_0()`

```php
deleteSiteLive_0($fqdn): mixed
```

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteSiteLive_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteSiteLive_0: ', $e->getMessage(), PHP_EOL;
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

## `deleteSiteStage()`

```php
deleteSiteStage($fqdn): mixed
```

Delete Stage Site

Delete your staging site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteSiteStage($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteSiteStage: ', $e->getMessage(), PHP_EOL;
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

## `deleteSiteStage_0()`

```php
deleteSiteStage_0($fqdn): mixed
```

Delete Stage Site

Delete your staging site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteSiteStage_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteSiteStage_0: ', $e->getMessage(), PHP_EOL;
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

## `deleteTag()`

```php
deleteTag($tag_id, $fqdn): \OpenAPI\Client\Model\Tag[]
```

Get a tag

Get a tag by its ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$tag_id = 'tag_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteTag($tag_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteTag: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **string**|  |
 **fqdn** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Tag[]**](../Model/Tag.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteTag_0()`

```php
deleteTag_0($tag_id, $fqdn): \OpenAPI\Client\Model\Tag[]
```

Get a tag

Get a tag by its ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$tag_id = 'tag_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->deleteTag_0($tag_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->deleteTag_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **string**|  |
 **fqdn** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Tag[]**](../Model/Tag.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `disableFirewall()`

```php
disableFirewall($fqdn): mixed
```

Disable the firewall

Disable wp-login firewall

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->disableFirewall($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->disableFirewall: ', $e->getMessage(), PHP_EOL;
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

## `disableFirewall_0()`

```php
disableFirewall_0($fqdn): mixed
```

Disable the firewall

Disable wp-login firewall

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->disableFirewall_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->disableFirewall_0: ', $e->getMessage(), PHP_EOL;
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

## `enableFirewall()`

```php
enableFirewall($fqdn): mixed
```

Enable the firewall

Enable the wp-login firewall

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->enableFirewall($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->enableFirewall: ', $e->getMessage(), PHP_EOL;
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

## `enableFirewall_0()`

```php
enableFirewall_0($fqdn): mixed
```

Enable the firewall

Enable the wp-login firewall

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->enableFirewall_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->enableFirewall_0: ', $e->getMessage(), PHP_EOL;
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

## `getDnsRecords()`

```php
getDnsRecords($fqdn): mixed
```

Get DNS records

Get a nameserver configured site's DNS records

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getDnsRecords($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getDnsRecords: ', $e->getMessage(), PHP_EOL;
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

## `getDnsRecords_0()`

```php
getDnsRecords_0($fqdn): mixed
```

Get DNS records

Get a nameserver configured site's DNS records

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getDnsRecords_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getDnsRecords_0: ', $e->getMessage(), PHP_EOL;
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

## `getEmails()`

```php
getEmails($fqdn): mixed
```

Get Emails

Get all custom email accounts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getEmails($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getEmails: ', $e->getMessage(), PHP_EOL;
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

## `getEmails_0()`

```php
getEmails_0($fqdn): mixed
```

Get Emails

Get all custom email accounts

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getEmails_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getEmails_0: ', $e->getMessage(), PHP_EOL;
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

## `getExternalPaths()`

```php
getExternalPaths($fqdn): mixed
```

Get External Paths

Get details about your site's external path configs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getExternalPaths($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getExternalPaths: ', $e->getMessage(), PHP_EOL;
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

## `getExternalPaths_0()`

```php
getExternalPaths_0($fqdn): mixed
```

Get External Paths

Get details about your site's external path configs

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getExternalPaths_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getExternalPaths_0: ', $e->getMessage(), PHP_EOL;
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

## `getFilesAtPoint()`

```php
getFilesAtPoint($fqdn, $restore_point): mixed
```

PIT Files

Get a list of wp-content files at a point in time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$restore_point = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime

try {
    $result = $apiInstance->getFilesAtPoint($fqdn, $restore_point);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getFilesAtPoint: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **restore_point** | **\DateTime**|  |

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

## `getFilesAtPoint_0()`

```php
getFilesAtPoint_0($fqdn, $restore_point): mixed
```

PIT Files

Get a list of wp-content files at a point in time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$restore_point = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime

try {
    $result = $apiInstance->getFilesAtPoint_0($fqdn, $restore_point);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getFilesAtPoint_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **restore_point** | **\DateTime**|  |

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

## `getMailDns()`

```php
getMailDns($fqdn): mixed
```

Get Required mail DNS records

Get the required records for our custom email service

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getMailDns($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getMailDns: ', $e->getMessage(), PHP_EOL;
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

## `getMailDns_0()`

```php
getMailDns_0($fqdn): mixed
```

Get Required mail DNS records

Get the required records for our custom email service

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getMailDns_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getMailDns_0: ', $e->getMessage(), PHP_EOL;
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

## `getPitRestore()`

```php
getPitRestore($pit_restore_id, $fqdn): mixed
```

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pit_restore_id = 'pit_restore_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getPitRestore($pit_restore_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getPitRestore: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pit_restore_id** | **string**|  |
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

## `getPitRestore_0()`

```php
getPitRestore_0($pit_restore_id, $fqdn): mixed
```

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pit_restore_id = 'pit_restore_id_example'; // string
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getPitRestore_0($pit_restore_id, $fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getPitRestore_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pit_restore_id** | **string**|  |
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

## `getPitRestores()`

```php
getPitRestores($fqdn): mixed
```

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getPitRestores($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getPitRestores: ', $e->getMessage(), PHP_EOL;
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

## `getPitRestores_0()`

```php
getPitRestores_0($fqdn): mixed
```

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getPitRestores_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getPitRestores_0: ', $e->getMessage(), PHP_EOL;
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

## `getSiteLive()`

```php
getSiteLive($fqdn): \OpenAPI\Client\Model\SiteLive
```

Get your live site

Get details about your live site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getSiteLive($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getSiteLive: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\SiteLive**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSiteLive_0()`

```php
getSiteLive_0($fqdn): \OpenAPI\Client\Model\SiteLive
```

Get your live site

Get details about your live site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getSiteLive_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getSiteLive_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\SiteLive**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSitePlanUsage()`

```php
getSitePlanUsage($fqdn, $start, $end): mixed
```

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$start = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$end = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime

try {
    $result = $apiInstance->getSitePlanUsage($fqdn, $start, $end);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getSitePlanUsage: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **start** | **\DateTime**|  |
 **end** | **\DateTime**|  |

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

## `getSitePlanUsage_0()`

```php
getSitePlanUsage_0($fqdn, $start, $end): mixed
```

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$start = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime
$end = new \DateTime("2013-10-20T19:20:30+01:00"); // \DateTime

try {
    $result = $apiInstance->getSitePlanUsage_0($fqdn, $start, $end);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getSitePlanUsage_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **start** | **\DateTime**|  |
 **end** | **\DateTime**|  |

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

## `getSitesLive()`

```php
getSitesLive(): \OpenAPI\Client\Model\SiteLive[]
```

Get your sites

Get details about all of your live sites

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getSitesLive();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getSitesLive: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\SiteLive[]**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSitesLive_0()`

```php
getSitesLive_0(): \OpenAPI\Client\Model\SiteLive[]
```

Get your sites

Get details about all of your live sites

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getSitesLive_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getSitesLive_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\SiteLive[]**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTags()`

```php
getTags($fqdn): \OpenAPI\Client\Model\Tag[]
```

Get tags

Get all the tags for your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getTags($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getTags: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Tag[]**](../Model/Tag.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTags_0()`

```php
getTags_0($fqdn): \OpenAPI\Client\Model\Tag[]
```

Get tags

Get all the tags for your site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->getTags_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->getTags_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Tag[]**](../Model/Tag.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `modifyFirewall()`

```php
modifyFirewall($fqdn, $ip_address, $add_or_del): mixed
```

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$ip_address = 'ip_address_example'; // string
$add_or_del = 'add'; // string

try {
    $result = $apiInstance->modifyFirewall($fqdn, $ip_address, $add_or_del);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->modifyFirewall: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **ip_address** | **string**|  |
 **add_or_del** | **string**|  | [optional] [default to &#39;add&#39;]

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

## `modifyFirewall_0()`

```php
modifyFirewall_0($fqdn, $ip_address, $add_or_del): mixed
```

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$ip_address = 'ip_address_example'; // string
$add_or_del = 'add'; // string

try {
    $result = $apiInstance->modifyFirewall_0($fqdn, $ip_address, $add_or_del);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->modifyFirewall_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **ip_address** | **string**|  |
 **add_or_del** | **string**|  | [optional] [default to &#39;add&#39;]

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

## `restoreSite()`

```php
restoreSite($fqdn, $pit_restore_create): mixed
```

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$pit_restore_create = new \OpenAPI\Client\Model\PITRestoreCreate(); // \OpenAPI\Client\Model\PITRestoreCreate

try {
    $result = $apiInstance->restoreSite($fqdn, $pit_restore_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->restoreSite: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **pit_restore_create** | [**\OpenAPI\Client\Model\PITRestoreCreate**](../Model/PITRestoreCreate.md)|  |

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `restoreSite_0()`

```php
restoreSite_0($fqdn, $pit_restore_create): mixed
```

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$pit_restore_create = new \OpenAPI\Client\Model\PITRestoreCreate(); // \OpenAPI\Client\Model\PITRestoreCreate

try {
    $result = $apiInstance->restoreSite_0($fqdn, $pit_restore_create);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->restoreSite_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **pit_restore_create** | [**\OpenAPI\Client\Model\PITRestoreCreate**](../Model/PITRestoreCreate.md)|  |

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `shellCmdSiteLive()`

```php
shellCmdSiteLive($fqdn, $cmd, $cwd, $auto_track_dir, $stage): mixed
```

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$cmd = 'cmd_example'; // string
$cwd = '/bitnami/wordpress/wp-content'; // string
$auto_track_dir = false; // bool
$stage = false; // bool

try {
    $result = $apiInstance->shellCmdSiteLive($fqdn, $cmd, $cwd, $auto_track_dir, $stage);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->shellCmdSiteLive: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **cmd** | **string**|  |
 **cwd** | **string**|  | [optional] [default to &#39;/bitnami/wordpress/wp-content&#39;]
 **auto_track_dir** | **bool**|  | [optional] [default to false]
 **stage** | **bool**|  | [optional] [default to false]

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

## `shellCmdSiteLive_0()`

```php
shellCmdSiteLive_0($fqdn, $cmd, $cwd, $auto_track_dir, $stage): mixed
```

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$cmd = 'cmd_example'; // string
$cwd = '/bitnami/wordpress/wp-content'; // string
$auto_track_dir = false; // bool
$stage = false; // bool

try {
    $result = $apiInstance->shellCmdSiteLive_0($fqdn, $cmd, $cwd, $auto_track_dir, $stage);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->shellCmdSiteLive_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **cmd** | **string**|  |
 **cwd** | **string**|  | [optional] [default to &#39;/bitnami/wordpress/wp-content&#39;]
 **auto_track_dir** | **bool**|  | [optional] [default to false]
 **stage** | **bool**|  | [optional] [default to false]

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

## `updateDnsRecord()`

```php
updateDnsRecord($fqdn, $dns_type, $dns_hostname, $dns_content, $dns_id, $dns_priority, $dns_ttl): mixed
```

Update DNS record

Update a DNS record on your Nameserver configured site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$dns_type = 'dns_type_example'; // string
$dns_hostname = 'dns_hostname_example'; // string
$dns_content = 'dns_content_example'; // string
$dns_id = 'dns_id_example'; // string
$dns_priority = 0; // int
$dns_ttl = 1; // int

try {
    $result = $apiInstance->updateDnsRecord($fqdn, $dns_type, $dns_hostname, $dns_content, $dns_id, $dns_priority, $dns_ttl);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->updateDnsRecord: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **dns_type** | **string**|  |
 **dns_hostname** | **string**|  |
 **dns_content** | **string**|  |
 **dns_id** | **string**|  | [optional]
 **dns_priority** | **int**|  | [optional] [default to 0]
 **dns_ttl** | **int**|  | [optional] [default to 1]

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

## `updateDnsRecord_0()`

```php
updateDnsRecord_0($fqdn, $dns_type, $dns_hostname, $dns_content, $dns_id, $dns_priority, $dns_ttl): mixed
```

Update DNS record

Update a DNS record on your Nameserver configured site

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$dns_type = 'dns_type_example'; // string
$dns_hostname = 'dns_hostname_example'; // string
$dns_content = 'dns_content_example'; // string
$dns_id = 'dns_id_example'; // string
$dns_priority = 0; // int
$dns_ttl = 1; // int

try {
    $result = $apiInstance->updateDnsRecord_0($fqdn, $dns_type, $dns_hostname, $dns_content, $dns_id, $dns_priority, $dns_ttl);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->updateDnsRecord_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **dns_type** | **string**|  |
 **dns_hostname** | **string**|  |
 **dns_content** | **string**|  |
 **dns_id** | **string**|  | [optional]
 **dns_priority** | **int**|  | [optional] [default to 0]
 **dns_ttl** | **int**|  | [optional] [default to 1]

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

## `updateEmail()`

```php
updateEmail($user_email_address, $fqdn, $user_email_update): mixed
```

Update Email

Update a custom email account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_email_address = 'user_email_address_example'; // string
$fqdn = 'fqdn_example'; // string
$user_email_update = {"is_catchall":true,"password":"A very strong password"}; // \OpenAPI\Client\Model\UserEmailUpdate

try {
    $result = $apiInstance->updateEmail($user_email_address, $fqdn, $user_email_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->updateEmail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email_address** | **string**|  |
 **fqdn** | **string**|  |
 **user_email_update** | [**\OpenAPI\Client\Model\UserEmailUpdate**](../Model/UserEmailUpdate.md)|  | [optional]

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateEmail_0()`

```php
updateEmail_0($user_email_address, $fqdn, $user_email_update): mixed
```

Update Email

Update a custom email account

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$user_email_address = 'user_email_address_example'; // string
$fqdn = 'fqdn_example'; // string
$user_email_update = {"is_catchall":true,"password":"A very strong password"}; // \OpenAPI\Client\Model\UserEmailUpdate

try {
    $result = $apiInstance->updateEmail_0($user_email_address, $fqdn, $user_email_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->updateEmail_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_email_address** | **string**|  |
 **fqdn** | **string**|  |
 **user_email_update** | [**\OpenAPI\Client\Model\UserEmailUpdate**](../Model/UserEmailUpdate.md)|  | [optional]

### Return type

**mixed**

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSiteLive()`

```php
updateSiteLive($fqdn, $site_live_update): \OpenAPI\Client\Model\SiteLive
```

Update a site

Update a site's details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$site_live_update = new \OpenAPI\Client\Model\SiteLiveUpdate(); // \OpenAPI\Client\Model\SiteLiveUpdate

try {
    $result = $apiInstance->updateSiteLive($fqdn, $site_live_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->updateSiteLive: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **site_live_update** | [**\OpenAPI\Client\Model\SiteLiveUpdate**](../Model/SiteLiveUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\SiteLive**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateSiteLive_0()`

```php
updateSiteLive_0($fqdn, $site_live_update): \OpenAPI\Client\Model\SiteLive
```

Update a site

Update a site's details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string
$site_live_update = new \OpenAPI\Client\Model\SiteLiveUpdate(); // \OpenAPI\Client\Model\SiteLiveUpdate

try {
    $result = $apiInstance->updateSiteLive_0($fqdn, $site_live_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->updateSiteLive_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  |
 **site_live_update** | [**\OpenAPI\Client\Model\SiteLiveUpdate**](../Model/SiteLiveUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\SiteLive**](../Model/SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `validateMxRecords()`

```php
validateMxRecords($fqdn): mixed
```

MX Validation

Check if your mail related DNS records are set up correctly

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->validateMxRecords($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->validateMxRecords: ', $e->getMessage(), PHP_EOL;
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

## `validateMxRecords_0()`

```php
validateMxRecords_0($fqdn): mixed
```

MX Validation

Check if your mail related DNS records are set up correctly

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\SiteLiveApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$fqdn = 'fqdn_example'; // string

try {
    $result = $apiInstance->validateMxRecords_0($fqdn);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SiteLiveApi->validateMxRecords_0: ', $e->getMessage(), PHP_EOL;
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
