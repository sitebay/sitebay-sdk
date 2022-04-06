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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TicketApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TicketApi apiInstance = new TicketApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = {"description":"Help me set up an agency","domain":"example.com","subject":"Agency"}; // UNKNOWN_BASE_TYPE | 
    try {
      Ticket result = apiInstance.createTicket(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TicketApi#createTicket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="createTicketReply"></a>
# **createTicketReply**
> TicketReply createTicketReply(ticketId, UNKNOWN_BASE_TYPE)

Create Ticket Reply

Reply to a support ticket request

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TicketApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TicketApi apiInstance = new TicketApi(defaultClient);
    Integer ticketId = 56; // Integer | 
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = {"description":"Thanks for the help","resolve":true}; // UNKNOWN_BASE_TYPE | 
    try {
      TicketReply result = apiInstance.createTicketReply(ticketId, UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TicketApi#createTicketReply");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **Integer**|  |
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**TicketReply**](TicketReply.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="deleteTicket"></a>
# **deleteTicket**
> Object deleteTicket(ticketId)

Delete Ticket

Delete a support ticket request by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TicketApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TicketApi apiInstance = new TicketApi(defaultClient);
    Integer ticketId = 56; // Integer | 
    try {
      Object result = apiInstance.deleteTicket(ticketId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TicketApi#deleteTicket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **Integer**|  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getTicket"></a>
# **getTicket**
> Ticket getTicket(ticketId)

Get Ticket

Get a support ticket request by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TicketApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TicketApi apiInstance = new TicketApi(defaultClient);
    Integer ticketId = 56; // Integer | 
    try {
      Ticket result = apiInstance.getTicket(ticketId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TicketApi#getTicket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **Integer**|  |

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getTickets"></a>
# **getTickets**
> List&lt;Ticket&gt; getTickets()

Get Tickets

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TicketApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TicketApi apiInstance = new TicketApi(defaultClient);
    try {
      List<Ticket> result = apiInstance.getTickets();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TicketApi#getTickets");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Ticket&gt;**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

<a name="updateTicket"></a>
# **updateTicket**
> Ticket updateTicket(ticketId, ticketUpdate)

Update Ticket

Update a support ticket request

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TicketApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TicketApi apiInstance = new TicketApi(defaultClient);
    Integer ticketId = 56; // Integer | 
    TicketUpdate ticketUpdate = new TicketUpdate(); // TicketUpdate | 
    try {
      Ticket result = apiInstance.updateTicket(ticketId, ticketUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TicketApi#updateTicket");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **Integer**|  |
 **ticketUpdate** | [**TicketUpdate**](TicketUpdate.md)|  |

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

