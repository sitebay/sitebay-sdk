# OpenAPI\Client\TeamApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeam()**](TeamApi.md#getTeam) | **GET** /api/v1/team/{team_id} | Get a team
[**getTeamMember()**](TeamApi.md#getTeamMember) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**getTeamMember_0()**](TeamApi.md#getTeamMember_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**getTeamMembers()**](TeamApi.md#getTeamMembers) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**getTeamMembers_0()**](TeamApi.md#getTeamMembers_0) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**getTeam_0()**](TeamApi.md#getTeam_0) | **GET** /api/v1/team/{team_id} | Get a team
[**getTeams()**](TeamApi.md#getTeams) | **GET** /api/v1/team | Get your owned teams
[**getTeams_0()**](TeamApi.md#getTeams_0) | **GET** /api/v1/team | Get your owned teams
[**removeTeamMember()**](TeamApi.md#removeTeamMember) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**removeTeamMember_0()**](TeamApi.md#removeTeamMember_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**updateTeam()**](TeamApi.md#updateTeam) | **PUT** /api/v1/team/{team_id} | Update a Team
[**updateTeam_0()**](TeamApi.md#updateTeam_0) | **PUT** /api/v1/team/{team_id} | Update a Team


## `getTeam()`

```php
getTeam($team_id): \OpenAPI\Client\Model\Team
```

Get a team

Get details about an owned team team by its ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->getTeam($team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeam: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Team**](../Model/Team.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTeamMember()`

```php
getTeamMember($team_member_id, $team_id): \OpenAPI\Client\Model\TeamMember
```

Get Team Member

Get a Team Member by their UUID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_member_id = 'team_member_id_example'; // string
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->getTeamMember($team_member_id, $team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeamMember: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **string**|  |
 **team_id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\TeamMember**](../Model/TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTeamMember_0()`

```php
getTeamMember_0($team_member_id, $team_id): \OpenAPI\Client\Model\TeamMember
```

Get Team Member

Get a Team Member by their UUID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_member_id = 'team_member_id_example'; // string
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->getTeamMember_0($team_member_id, $team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeamMember_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **string**|  |
 **team_id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\TeamMember**](../Model/TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTeamMembers()`

```php
getTeamMembers($team_id): \OpenAPI\Client\Model\TeamMember[]
```

Get a team's members

Get a list of Team Members

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->getTeamMembers($team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeamMembers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\TeamMember[]**](../Model/TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTeamMembers_0()`

```php
getTeamMembers_0($team_id): \OpenAPI\Client\Model\TeamMember[]
```

Get a team's members

Get a list of Team Members

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->getTeamMembers_0($team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeamMembers_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\TeamMember[]**](../Model/TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTeam_0()`

```php
getTeam_0($team_id): \OpenAPI\Client\Model\Team
```

Get a team

Get details about an owned team team by its ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->getTeam_0($team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeam_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **string**|  |

### Return type

[**\OpenAPI\Client\Model\Team**](../Model/Team.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTeams()`

```php
getTeams(): \OpenAPI\Client\Model\Team[]
```

Get your owned teams

Get details about all of your owned teams

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getTeams();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeams: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Team[]**](../Model/Team.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTeams_0()`

```php
getTeams_0(): \OpenAPI\Client\Model\Team[]
```

Get your owned teams

Get details about all of your owned teams

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getTeams_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->getTeams_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Team[]**](../Model/Team.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeTeamMember()`

```php
removeTeamMember($team_member_id, $team_id): mixed
```

Remove Team Member

Remove a team member

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_member_id = 'team_member_id_example'; // string
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->removeTeamMember($team_member_id, $team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->removeTeamMember: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **string**|  |
 **team_id** | **string**|  |

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

## `removeTeamMember_0()`

```php
removeTeamMember_0($team_member_id, $team_id): mixed
```

Remove Team Member

Remove a team member

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_member_id = 'team_member_id_example'; // string
$team_id = 'team_id_example'; // string

try {
    $result = $apiInstance->removeTeamMember_0($team_member_id, $team_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->removeTeamMember_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_member_id** | **string**|  |
 **team_id** | **string**|  |

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

## `updateTeam()`

```php
updateTeam($team_id, $team_update): \OpenAPI\Client\Model\Team
```

Update a Team

Adjust your team's settings

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_id = 'team_id_example'; // string
$team_update = new \OpenAPI\Client\Model\TeamUpdate(); // \OpenAPI\Client\Model\TeamUpdate

try {
    $result = $apiInstance->updateTeam($team_id, $team_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->updateTeam: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **string**|  |
 **team_update** | [**\OpenAPI\Client\Model\TeamUpdate**](../Model/TeamUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\Team**](../Model/Team.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateTeam_0()`

```php
updateTeam_0($team_id, $team_update): \OpenAPI\Client\Model\Team
```

Update a Team

Adjust your team's settings

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TeamApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$team_id = 'team_id_example'; // string
$team_update = new \OpenAPI\Client\Model\TeamUpdate(); // \OpenAPI\Client\Model\TeamUpdate

try {
    $result = $apiInstance->updateTeam_0($team_id, $team_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TeamApi->updateTeam_0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **string**|  |
 **team_update** | [**\OpenAPI\Client\Model\TeamUpdate**](../Model/TeamUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\Team**](../Model/Team.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
