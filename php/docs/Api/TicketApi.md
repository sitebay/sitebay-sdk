# OpenAPI\Client\TicketApi

All URIs are relative to https://my.sitebay.org.

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTicket()**](TicketApi.md#createTicket) | **POST** /api/v1/ticket | Create Ticket
[**createTicketReply()**](TicketApi.md#createTicketReply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
[**deleteTicket()**](TicketApi.md#deleteTicket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
[**getTicket()**](TicketApi.md#getTicket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
[**getTickets()**](TicketApi.md#getTickets) | **GET** /api/v1/ticket | Get Tickets
[**updateTicket()**](TicketApi.md#updateTicket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket


## `createTicket()`

```php
createTicket($unknown_base_type): \OpenAPI\Client\Model\Ticket
```

Create Ticket

Create a support ticket request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TicketApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$unknown_base_type = {"description":"Help me set up an agency","domain":"example.com","subject":"Agency"}; // \OpenAPI\Client\Model\UNKNOWN_BASE_TYPE

try {
    $result = $apiInstance->createTicket($unknown_base_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TicketApi->createTicket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**\OpenAPI\Client\Model\UNKNOWN_BASE_TYPE**](../Model/UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\Ticket**](../Model/Ticket.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTicketReply()`

```php
createTicketReply($ticket_id, $unknown_base_type): \OpenAPI\Client\Model\TicketReply
```

Create Ticket Reply

Reply to a support ticket request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TicketApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ticket_id = 56; // int
$unknown_base_type = {"description":"Thanks for the help","resolve":true}; // \OpenAPI\Client\Model\UNKNOWN_BASE_TYPE

try {
    $result = $apiInstance->createTicketReply($ticket_id, $unknown_base_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TicketApi->createTicketReply: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |
 **unknown_base_type** | [**\OpenAPI\Client\Model\UNKNOWN_BASE_TYPE**](../Model/UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**\OpenAPI\Client\Model\TicketReply**](../Model/TicketReply.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteTicket()`

```php
deleteTicket($ticket_id): mixed
```

Delete Ticket

Delete a support ticket request by its ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TicketApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ticket_id = 56; // int

try {
    $result = $apiInstance->deleteTicket($ticket_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TicketApi->deleteTicket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |

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

## `getTicket()`

```php
getTicket($ticket_id): \OpenAPI\Client\Model\Ticket
```

Get Ticket

Get a support ticket request by its ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TicketApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ticket_id = 56; // int

try {
    $result = $apiInstance->getTicket($ticket_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TicketApi->getTicket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |

### Return type

[**\OpenAPI\Client\Model\Ticket**](../Model/Ticket.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTickets()`

```php
getTickets(): \OpenAPI\Client\Model\Ticket[]
```

Get Tickets

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TicketApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getTickets();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TicketApi->getTickets: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Ticket[]**](../Model/Ticket.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateTicket()`

```php
updateTicket($ticket_id, $ticket_update): \OpenAPI\Client\Model\Ticket
```

Update Ticket

Update a support ticket request

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TicketApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$ticket_id = 56; // int
$ticket_update = new \OpenAPI\Client\Model\TicketUpdate(); // \OpenAPI\Client\Model\TicketUpdate

try {
    $result = $apiInstance->updateTicket($ticket_id, $ticket_update);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TicketApi->updateTicket: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticket_id** | **int**|  |
 **ticket_update** | [**\OpenAPI\Client\Model\TicketUpdate**](../Model/TicketUpdate.md)|  |

### Return type

[**\OpenAPI\Client\Model\Ticket**](../Model/Ticket.md)

### Authorization

[OAuth2PasswordBearer](../../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
