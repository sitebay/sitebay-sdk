# \PlanApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelPlan**](PlanApi.md#CancelPlan) | **Delete** /api/v1/plan/{plan_id} | Cancel Plan
[**CreatePlan**](PlanApi.md#CreatePlan) | **Post** /api/v1/plan | Create a Plan
[**GetPlan**](PlanApi.md#GetPlan) | **Get** /api/v1/plan/{plan_id} | Get Plan
[**GetPlans**](PlanApi.md#GetPlans) | **Get** /api/v1/plan | Get Plans
[**PreviewChange**](PlanApi.md#PreviewChange) | **Get** /api/v1/plan/{plan_id}/preview | Preview Plan
[**UncancelPlan**](PlanApi.md#UncancelPlan) | **Patch** /api/v1/plan/{plan_id} | Uncancel Plan
[**UpdatePlan**](PlanApi.md#UpdatePlan) | **Put** /api/v1/plan/{plan_id} | Update a Plan



## CancelPlan

> interface{} CancelPlan(ctx, planId).Execute()

Cancel Plan



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
    planId := "planId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanApi.CancelPlan(context.Background(), planId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanApi.CancelPlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelPlan`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `PlanApi.CancelPlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**planId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelPlanRequest struct via the builder pattern


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


## CreatePlan

> Plan CreatePlan(ctx).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()

Create a Plan



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
    resp, r, err := apiClient.PlanApi.CreatePlan(context.Background()).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanApi.CreatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePlan`: Plan
    fmt.Fprintf(os.Stdout, "Response from `PlanApi.CreatePlan`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePlanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | 

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPlan

> Plan GetPlan(ctx, planId).Execute()

Get Plan



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
    planId := "planId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanApi.GetPlan(context.Background(), planId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanApi.GetPlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPlan`: Plan
    fmt.Fprintf(os.Stdout, "Response from `PlanApi.GetPlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**planId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPlanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPlans

> []Plan GetPlans(ctx).Execute()

Get Plans



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
    resp, r, err := apiClient.PlanApi.GetPlans(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanApi.GetPlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPlans`: []Plan
    fmt.Fprintf(os.Stdout, "Response from `PlanApi.GetPlans`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPlansRequest struct via the builder pattern


### Return type

[**[]Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PreviewChange

> interface{} PreviewChange(ctx, planId).NewPlanTypeName(newPlanTypeName).AdditionalSites(additionalSites).Execute()

Preview Plan



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
    planId := "planId_example" // string | 
    newPlanTypeName := "newPlanTypeName_example" // string | 
    additionalSites := int32(56) // int32 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanApi.PreviewChange(context.Background(), planId).NewPlanTypeName(newPlanTypeName).AdditionalSites(additionalSites).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanApi.PreviewChange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PreviewChange`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `PlanApi.PreviewChange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**planId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPreviewChangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **newPlanTypeName** | **string** |  | 
 **additionalSites** | **int32** |  | 

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


## UncancelPlan

> interface{} UncancelPlan(ctx, planId).Execute()

Uncancel Plan



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
    planId := "planId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanApi.UncancelPlan(context.Background(), planId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanApi.UncancelPlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UncancelPlan`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `PlanApi.UncancelPlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**planId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUncancelPlanRequest struct via the builder pattern


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


## UpdatePlan

> Plan UpdatePlan(ctx, planId).PlanUpdate(planUpdate).Execute()

Update a Plan



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
    planId := "planId_example" // string | 
    planUpdate := *openapiclient.NewPlanUpdate(int32(123), "PlanTypeName_example") // PlanUpdate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.PlanApi.UpdatePlan(context.Background(), planId).PlanUpdate(planUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PlanApi.UpdatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdatePlan`: Plan
    fmt.Fprintf(os.Stdout, "Response from `PlanApi.UpdatePlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**planId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePlanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **planUpdate** | [**PlanUpdate**](PlanUpdate.md) |  | 

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

