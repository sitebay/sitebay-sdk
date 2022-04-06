# \TicketApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTicket**](TicketApi.md#CreateTicket) | **Post** /api/v1/ticket | Create Ticket
[**CreateTicketReply**](TicketApi.md#CreateTicketReply) | **Post** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
[**DeleteTicket**](TicketApi.md#DeleteTicket) | **Delete** /api/v1/ticket/{ticket_id} | Delete Ticket
[**GetTicket**](TicketApi.md#GetTicket) | **Get** /api/v1/ticket/{ticket_id} | Get Ticket
[**GetTickets**](TicketApi.md#GetTickets) | **Get** /api/v1/ticket | Get Tickets
[**UpdateTicket**](TicketApi.md#UpdateTicket) | **Put** /api/v1/ticket/{ticket_id} | Update Ticket



## CreateTicket

> Ticket CreateTicket(ctx).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()

Create Ticket



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    uNKNOWNBASETYPE := TODO // UNKNOWN_BASE_TYPE |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TicketApi.CreateTicket(context.Background()).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TicketApi.CreateTicket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateTicket`: Ticket
    fmt.Fprintf(os.Stdout, "Response from `TicketApi.CreateTicket`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateTicketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTicketReply

> TicketReply CreateTicketReply(ctx, ticketId).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()

Create Ticket Reply



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    ticketId := int32(56) // int32 | 
    uNKNOWNBASETYPE := TODO // UNKNOWN_BASE_TYPE |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TicketApi.CreateTicketReply(context.Background(), ticketId).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TicketApi.CreateTicketReply``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateTicketReply`: TicketReply
    fmt.Fprintf(os.Stdout, "Response from `TicketApi.CreateTicketReply`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ticketId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateTicketReplyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | 

### Return type

[**TicketReply**](TicketReply.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTicket

> interface{} DeleteTicket(ctx, ticketId).Execute()

Delete Ticket



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    ticketId := int32(56) // int32 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TicketApi.DeleteTicket(context.Background(), ticketId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TicketApi.DeleteTicket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTicket`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `TicketApi.DeleteTicket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ticketId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTicketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**interface{}**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTicket

> Ticket GetTicket(ctx, ticketId).Execute()

Get Ticket



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    ticketId := int32(56) // int32 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TicketApi.GetTicket(context.Background(), ticketId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TicketApi.GetTicket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTicket`: Ticket
    fmt.Fprintf(os.Stdout, "Response from `TicketApi.GetTicket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ticketId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTicketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTickets

> []Ticket GetTickets(ctx).Execute()

Get Tickets

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TicketApi.GetTickets(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TicketApi.GetTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTickets`: []Ticket
    fmt.Fprintf(os.Stdout, "Response from `TicketApi.GetTickets`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTicketsRequest struct via the builder pattern


### Return type

[**[]Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTicket

> Ticket UpdateTicket(ctx, ticketId).TicketUpdate(ticketUpdate).Execute()

Update Ticket



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    ticketId := int32(56) // int32 | 
    ticketUpdate := *openapiclient.NewTicketUpdate("Subject_example") // TicketUpdate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TicketApi.UpdateTicket(context.Background(), ticketId).TicketUpdate(ticketUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TicketApi.UpdateTicket``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateTicket`: Ticket
    fmt.Fprintf(os.Stdout, "Response from `TicketApi.UpdateTicket`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ticketId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTicketRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ticketUpdate** | [**TicketUpdate**](TicketUpdate.md) |  | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

