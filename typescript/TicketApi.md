# .TicketApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTicket**](TicketApi.md#createTicket) | **POST** /api/v1/ticket | Create Ticket
[**createTicketReply**](TicketApi.md#createTicketReply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
[**deleteTicket**](TicketApi.md#deleteTicket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
[**getTicket**](TicketApi.md#getTicket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
[**getTickets**](TicketApi.md#getTickets) | **GET** /api/v1/ticket | Get Tickets
[**updateTicket**](TicketApi.md#updateTicket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket


# **createTicket**
> Ticket createTicket()

Create a support ticket request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TicketApi(configuration);

let body:.TicketApiCreateTicketRequest = {
  // UNKNOWN_BASE_TYPE (optional)
  UNKNOWN_BASE_TYPE: null,
};

apiInstance.createTicket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | **UNKNOWN_BASE_TYPE**|  |


### Return type

**Ticket**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTicketReply**
> TicketReply createTicketReply()

Reply to a support ticket request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TicketApi(configuration);

let body:.TicketApiCreateTicketReplyRequest = {
  // number
  ticketId: 1,
  // UNKNOWN_BASE_TYPE (optional)
  UNKNOWN_BASE_TYPE: null,
};

apiInstance.createTicketReply(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | **UNKNOWN_BASE_TYPE**|  |
 **ticketId** | [**number**] |  | defaults to undefined


### Return type

**TicketReply**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTicket**
> any deleteTicket()

Delete a support ticket request by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TicketApi(configuration);

let body:.TicketApiDeleteTicketRequest = {
  // number
  ticketId: 1,
};

apiInstance.deleteTicket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**number**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTicket**
> Ticket getTicket()

Get a support ticket request by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TicketApi(configuration);

let body:.TicketApiGetTicketRequest = {
  // number
  ticketId: 1,
};

apiInstance.getTicket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**number**] |  | defaults to undefined


### Return type

**Ticket**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTickets**
> Array<Ticket> getTickets()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TicketApi(configuration);

let body:any = {};

apiInstance.getTickets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Ticket>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTicket**
> Ticket updateTicket(ticketUpdate)

Update a support ticket request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TicketApi(configuration);

let body:.TicketApiUpdateTicketRequest = {
  // number
  ticketId: 1,
  // TicketUpdate
  ticketUpdate: {
    subject: "subject_example",
  },
};

apiInstance.updateTicket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketUpdate** | **TicketUpdate**|  |
 **ticketId** | [**number**] |  | defaults to undefined


### Return type

**Ticket**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


