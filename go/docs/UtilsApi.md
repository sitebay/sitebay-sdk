# \UtilsApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DomainCheck**](UtilsApi.md#DomainCheck) | **Get** /api/v1/domain_check | Domain check
[**VerifyGitSyncDirectories**](UtilsApi.md#VerifyGitSyncDirectories) | **Get** /api/v1/verify_git_sync_directories | Verify Git Sync Directories



## DomainCheck

> interface{} DomainCheck(ctx).Fqdn(fqdn).Execute()

Domain check



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
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UtilsApi.DomainCheck(context.Background()).Fqdn(fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilsApi.DomainCheck``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DomainCheck`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `UtilsApi.DomainCheck`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDomainCheckRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string** |  | 

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


## VerifyGitSyncDirectories

> interface{} VerifyGitSyncDirectories(ctx).GitUrl(gitUrl).GitBranch(gitBranch).Execute()

Verify Git Sync Directories



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
    gitUrl := "gitUrl_example" // string | 
    gitBranch := "gitBranch_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.UtilsApi.VerifyGitSyncDirectories(context.Background()).GitUrl(gitUrl).GitBranch(gitBranch).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilsApi.VerifyGitSyncDirectories``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VerifyGitSyncDirectories`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `UtilsApi.VerifyGitSyncDirectories`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiVerifyGitSyncDirectoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gitUrl** | **string** |  | 
 **gitBranch** | **string** |  | 

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

