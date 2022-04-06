# TicketApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTicket**](TicketApi.md#createTicket) | **POST** /api/v1/ticket | Create Ticket
[**createTicketReply**](TicketApi.md#createTicketReply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
[**deleteTicket**](TicketApi.md#deleteTicket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
[**getTicket**](TicketApi.md#getTicket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
[**getTickets**](TicketApi.md#getTickets) | **GET** /api/v1/ticket | Get Tickets
[**updateTicket**](TicketApi.md#updateTicket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket


<a name="createTicket"></a>
# **createTicket**
> Ticket createTicket(UNKNOWN_BASE_TYPE)

Create Ticket

Create a support ticket request

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TicketApi()
val UNKNOWN_BASE_TYPE : UNKNOWN_BASE_TYPE = {"description":"Help me set up an agency","domain":"example.com","subject":"Agency"} // UNKNOWN_BASE_TYPE | 
try {
    val result : Ticket = apiInstance.createTicket(UNKNOWN_BASE_TYPE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TicketApi#createTicket")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TicketApi#createTicket")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**Ticket**](Ticket.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTicketReply"></a>
# **createTicketReply**
> TicketReply createTicketReply(ticketId, UNKNOWN_BASE_TYPE)

Create Ticket Reply

Reply to a support ticket request

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TicketApi()
val ticketId : kotlin.Int = 56 // kotlin.Int | 
val UNKNOWN_BASE_TYPE : UNKNOWN_BASE_TYPE = {"description":"Thanks for the help","resolve":true} // UNKNOWN_BASE_TYPE | 
try {
    val result : TicketReply = apiInstance.createTicketReply(ticketId, UNKNOWN_BASE_TYPE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TicketApi#createTicketReply")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TicketApi#createTicketReply")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **kotlin.Int**|  |
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**TicketReply**](TicketReply.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicket"></a>
# **deleteTicket**
> kotlin.Any deleteTicket(ticketId)

Delete Ticket

Delete a support ticket request by its ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TicketApi()
val ticketId : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : kotlin.Any = apiInstance.deleteTicket(ticketId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TicketApi#deleteTicket")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TicketApi#deleteTicket")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **kotlin.Int**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTicket"></a>
# **getTicket**
> Ticket getTicket(ticketId)

Get Ticket

Get a support ticket request by its ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TicketApi()
val ticketId : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : Ticket = apiInstance.getTicket(ticketId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TicketApi#getTicket")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TicketApi#getTicket")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **kotlin.Int**|  |

### Return type

[**Ticket**](Ticket.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTickets"></a>
# **getTickets**
> kotlin.collections.List&lt;Ticket&gt; getTickets()

Get Tickets

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TicketApi()
try {
    val result : kotlin.collections.List<Ticket> = apiInstance.getTickets()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TicketApi#getTickets")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TicketApi#getTickets")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;Ticket&gt;**](Ticket.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTicket"></a>
# **updateTicket**
> Ticket updateTicket(ticketId, ticketUpdate)

Update Ticket

Update a support ticket request

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TicketApi()
val ticketId : kotlin.Int = 56 // kotlin.Int | 
val ticketUpdate : TicketUpdate =  // TicketUpdate | 
try {
    val result : Ticket = apiInstance.updateTicket(ticketId, ticketUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TicketApi#updateTicket")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TicketApi#updateTicket")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **kotlin.Int**|  |
 **ticketUpdate** | [**TicketUpdate**](TicketUpdate.md)|  |

### Return type

[**Ticket**](Ticket.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

