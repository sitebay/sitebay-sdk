# \AccountApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeletePaymentMethod**](AccountApi.md#DeletePaymentMethod) | **Delete** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
[**DeletePaymentMethod_0**](AccountApi.md#DeletePaymentMethod_0) | **Delete** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
[**GetPaymentMethods**](AccountApi.md#GetPaymentMethods) | **Get** /api/v1/account/payment_method | Get payment methods
[**GetPaymentMethods_0**](AccountApi.md#GetPaymentMethods_0) | **Get** /api/v1/account/payment_method | Get payment methods
[**GetTax**](AccountApi.md#GetTax) | **Get** /api/v1/account/get_tax | Get tax
[**GetTax_0**](AccountApi.md#GetTax_0) | **Get** /api/v1/account/get_tax | Get tax
[**GetUserMe**](AccountApi.md#GetUserMe) | **Get** /api/v1/account | Get own user
[**GetUserMe_0**](AccountApi.md#GetUserMe_0) | **Get** /api/v1/account | Get own user
[**RevokeOauth**](AccountApi.md#RevokeOauth) | **Delete** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
[**RevokeOauth_0**](AccountApi.md#RevokeOauth_0) | **Delete** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
[**UpdatePaymentMethod**](AccountApi.md#UpdatePaymentMethod) | **Put** /api/v1/account/payment_method/{payment_method_id} | Update payment method
[**UpdatePaymentMethod_0**](AccountApi.md#UpdatePaymentMethod_0) | **Put** /api/v1/account/payment_method/{payment_method_id} | Update payment method
[**UpdateUser**](AccountApi.md#UpdateUser) | **Put** /api/v1/account | Update user
[**UpdateUser_0**](AccountApi.md#UpdateUser_0) | **Put** /api/v1/account | Update user



## DeletePaymentMethod

> interface{} DeletePaymentMethod(ctx, paymentMethodId).Execute()

Delete payment method



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
    paymentMethodId := "paymentMethodId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountApi.DeletePaymentMethod(context.Background(), paymentMethodId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.DeletePaymentMethod``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePaymentMethod`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.DeletePaymentMethod`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentMethodId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePaymentMethodRequest struct via the builder pattern


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


## DeletePaymentMethod_0

> interface{} DeletePaymentMethod_0(ctx, paymentMethodId).Execute()

Delete payment method



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
    paymentMethodId := "paymentMethodId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountApi.DeletePaymentMethod_0(context.Background(), paymentMethodId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.DeletePaymentMethod_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePaymentMethod_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.DeletePaymentMethod_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentMethodId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePaymentMethod_1Request struct via the builder pattern


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


## GetPaymentMethods

> interface{} GetPaymentMethods(ctx).Execute()

Get payment methods



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
    resp, r, err := apiClient.AccountApi.GetPaymentMethods(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.GetPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPaymentMethods`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.GetPaymentMethods`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentMethodsRequest struct via the builder pattern


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


## GetPaymentMethods_0

> interface{} GetPaymentMethods_0(ctx).Execute()

Get payment methods



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
    resp, r, err := apiClient.AccountApi.GetPaymentMethods_0(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.GetPaymentMethods_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPaymentMethods_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.GetPaymentMethods_0`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentMethods_2Request struct via the builder pattern


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


## GetTax

> interface{} GetTax(ctx).Execute()

Get tax



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
    resp, r, err := apiClient.AccountApi.GetTax(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.GetTax``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTax`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.GetTax`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaxRequest struct via the builder pattern


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


## GetTax_0

> interface{} GetTax_0(ctx).Execute()

Get tax



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
    resp, r, err := apiClient.AccountApi.GetTax_0(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.GetTax_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTax_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.GetTax_0`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTax_3Request struct via the builder pattern


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


## GetUserMe

> interface{} GetUserMe(ctx).Execute()

Get own user



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
    resp, r, err := apiClient.AccountApi.GetUserMe(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.GetUserMe``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUserMe`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.GetUserMe`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserMeRequest struct via the builder pattern


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


## GetUserMe_0

> interface{} GetUserMe_0(ctx).Execute()

Get own user



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
    resp, r, err := apiClient.AccountApi.GetUserMe_0(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.GetUserMe_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUserMe_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.GetUserMe_0`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserMe_4Request struct via the builder pattern


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


## RevokeOauth

> interface{} RevokeOauth(ctx, provider).Execute()

Revoke OAuth



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
    provider := "provider_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountApi.RevokeOauth(context.Background(), provider).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.RevokeOauth``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RevokeOauth`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.RevokeOauth`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**provider** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRevokeOauthRequest struct via the builder pattern


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


## RevokeOauth_0

> interface{} RevokeOauth_0(ctx, provider).Execute()

Revoke OAuth



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
    provider := "provider_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountApi.RevokeOauth_0(context.Background(), provider).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.RevokeOauth_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RevokeOauth_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.RevokeOauth_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**provider** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRevokeOauth_5Request struct via the builder pattern


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


## UpdatePaymentMethod

> interface{} UpdatePaymentMethod(ctx, paymentMethodId).Execute()

Update payment method



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
    paymentMethodId := "paymentMethodId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountApi.UpdatePaymentMethod(context.Background(), paymentMethodId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.UpdatePaymentMethod``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdatePaymentMethod`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.UpdatePaymentMethod`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentMethodId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePaymentMethodRequest struct via the builder pattern


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


## UpdatePaymentMethod_0

> interface{} UpdatePaymentMethod_0(ctx, paymentMethodId).Execute()

Update payment method



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
    paymentMethodId := "paymentMethodId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountApi.UpdatePaymentMethod_0(context.Background(), paymentMethodId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.UpdatePaymentMethod_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdatePaymentMethod_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.UpdatePaymentMethod_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**paymentMethodId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePaymentMethod_6Request struct via the builder pattern


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


## UpdateUser

> interface{} UpdateUser(ctx).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()

Update user



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
    resp, r, err := apiClient.AccountApi.UpdateUser(context.Background()).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.UpdateUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateUser`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.UpdateUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | 

### Return type

**interface{}**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUser_0

> interface{} UpdateUser_0(ctx).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()

Update user



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
    resp, r, err := apiClient.AccountApi.UpdateUser_0(context.Background()).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.UpdateUser_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateUser_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.UpdateUser_0`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUser_7Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | 

### Return type

**interface{}**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

