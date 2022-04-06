# Org.OpenAPITools.Api.TicketApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTicket**](TicketApi.md#createticket) | **POST** /api/v1/ticket | Create Ticket
[**CreateTicketReply**](TicketApi.md#createticketreply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
[**DeleteTicket**](TicketApi.md#deleteticket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
[**GetTicket**](TicketApi.md#getticket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
[**GetTickets**](TicketApi.md#gettickets) | **GET** /api/v1/ticket | Get Tickets
[**UpdateTicket**](TicketApi.md#updateticket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket



## CreateTicket

> Ticket CreateTicket (UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null)

Create Ticket

Create a support ticket request

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateTicketExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TicketApi(Configuration.Default);
            var UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE |  (optional) 

            try
            {
                // Create Ticket
                Ticket result = apiInstance.CreateTicket(UNKNOWN_BASE_TYPE);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TicketApi.CreateTicket: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTicketReply

> TicketReply CreateTicketReply (int ticketId, UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null)

Create Ticket Reply

Reply to a support ticket request

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateTicketReplyExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TicketApi(Configuration.Default);
            var ticketId = 56;  // int | 
            var UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE |  (optional) 

            try
            {
                // Create Ticket Reply
                TicketReply result = apiInstance.CreateTicketReply(ticketId, UNKNOWN_BASE_TYPE);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TicketApi.CreateTicketReply: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **int**|  | 
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTicket

> Object DeleteTicket (int ticketId)

Delete Ticket

Delete a support ticket request by its ID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTicketExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TicketApi(Configuration.Default);
            var ticketId = 56;  // int | 

            try
            {
                // Delete Ticket
                Object result = apiInstance.DeleteTicket(ticketId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TicketApi.DeleteTicket: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **int**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTicket

> Ticket GetTicket (int ticketId)

Get Ticket

Get a support ticket request by its ID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTicketExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TicketApi(Configuration.Default);
            var ticketId = 56;  // int | 

            try
            {
                // Get Ticket
                Ticket result = apiInstance.GetTicket(ticketId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TicketApi.GetTicket: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **int**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTickets

> List&lt;Ticket&gt; GetTickets ()

Get Tickets

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTicketsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TicketApi(Configuration.Default);

            try
            {
                // Get Tickets
                List<Ticket> result = apiInstance.GetTickets();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TicketApi.GetTickets: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
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
| **200** | Successful Response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTicket

> Ticket UpdateTicket (int ticketId, TicketUpdate ticketUpdate)

Update Ticket

Update a support ticket request

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateTicketExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TicketApi(Configuration.Default);
            var ticketId = 56;  // int | 
            var ticketUpdate = new TicketUpdate(); // TicketUpdate | 

            try
            {
                // Update Ticket
                Ticket result = apiInstance.UpdateTicket(ticketId, ticketUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TicketApi.UpdateTicket: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | **int**|  | 
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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

