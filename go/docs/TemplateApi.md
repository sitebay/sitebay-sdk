# \TemplateApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTemplate**](TemplateApi.md#GetTemplate) | **Get** /api/v1/template/{template_name} | Get Templates
[**GetTemplates**](TemplateApi.md#GetTemplates) | **Get** /api/v1/template | Get Templates
[**SubmitTemplate**](TemplateApi.md#SubmitTemplate) | **Post** /api/v1/template | Create Template



## GetTemplate

> Template GetTemplate(ctx, templateName).Execute()

Get Templates



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
    templateName := "templateName_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TemplateApi.GetTemplate(context.Background(), templateName).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TemplateApi.GetTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplate`: Template
    fmt.Fprintf(os.Stdout, "Response from `TemplateApi.GetTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**templateName** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplates

> []Template GetTemplates(ctx).Execute()

Get Templates



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
    resp, r, err := apiClient.TemplateApi.GetTemplates(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TemplateApi.GetTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplates`: []Template
    fmt.Fprintf(os.Stdout, "Response from `TemplateApi.GetTemplates`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplatesRequest struct via the builder pattern


### Return type

[**[]Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitTemplate

> Template SubmitTemplate(ctx).TemplateCreate(templateCreate).Execute()

Create Template



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
    templateCreate := *openapiclient.NewTemplateCreate("FullDescription_example", "Name_example", "Plugins_example", "Quickstart_example", "ShortDescription_example", "Tag_example", "WpressUrl_example") // TemplateCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TemplateApi.SubmitTemplate(context.Background()).TemplateCreate(templateCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TemplateApi.SubmitTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitTemplate`: Template
    fmt.Fprintf(os.Stdout, "Response from `TemplateApi.SubmitTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateCreate** | [**TemplateCreate**](TemplateCreate.md) |  | 

### Return type

[**Template**](Template.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

