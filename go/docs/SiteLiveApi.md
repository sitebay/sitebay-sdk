# \SiteLiveApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddMailDns**](SiteLiveApi.md#AddMailDns) | **Post** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**AddMailDns_0**](SiteLiveApi.md#AddMailDns_0) | **Post** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**ChangeDevMode**](SiteLiveApi.md#ChangeDevMode) | **Patch** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**ChangeDevMode_0**](SiteLiveApi.md#ChangeDevMode_0) | **Patch** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**ClearCache**](SiteLiveApi.md#ClearCache) | **Post** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**ClearCache_0**](SiteLiveApi.md#ClearCache_0) | **Post** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**CommitSiteStage**](SiteLiveApi.md#CommitSiteStage) | **Post** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**CommitSiteStage_0**](SiteLiveApi.md#CommitSiteStage_0) | **Post** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**CreateEmail**](SiteLiveApi.md#CreateEmail) | **Post** /api/v1/site_live/{fqdn}/email | Create Email
[**CreateEmail_0**](SiteLiveApi.md#CreateEmail_0) | **Post** /api/v1/site_live/{fqdn}/email | Create Email
[**CreateExternalPath**](SiteLiveApi.md#CreateExternalPath) | **Post** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**CreateExternalPath_0**](SiteLiveApi.md#CreateExternalPath_0) | **Post** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**CreateSiteLive**](SiteLiveApi.md#CreateSiteLive) | **Post** /api/v1/site_live | Create a site
[**CreateSiteLive_0**](SiteLiveApi.md#CreateSiteLive_0) | **Post** /api/v1/site_live | Create a site
[**CreateSiteStage**](SiteLiveApi.md#CreateSiteStage) | **Post** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**CreateSiteStage_0**](SiteLiveApi.md#CreateSiteStage_0) | **Post** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**CreateTag**](SiteLiveApi.md#CreateTag) | **Post** /api/v1/site_live/{fqdn}/tag | Create tag
[**CreateTag_0**](SiteLiveApi.md#CreateTag_0) | **Post** /api/v1/site_live/{fqdn}/tag | Create tag
[**DeleteDnsRecord**](SiteLiveApi.md#DeleteDnsRecord) | **Delete** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**DeleteDnsRecord_0**](SiteLiveApi.md#DeleteDnsRecord_0) | **Delete** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**DeleteEmail**](SiteLiveApi.md#DeleteEmail) | **Delete** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**DeleteEmail_0**](SiteLiveApi.md#DeleteEmail_0) | **Delete** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**DeleteExternalPath**](SiteLiveApi.md#DeleteExternalPath) | **Delete** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**DeleteExternalPath_0**](SiteLiveApi.md#DeleteExternalPath_0) | **Delete** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**DeleteSiteLive**](SiteLiveApi.md#DeleteSiteLive) | **Delete** /api/v1/site_live/{fqdn} | Delete your live site
[**DeleteSiteLive_0**](SiteLiveApi.md#DeleteSiteLive_0) | **Delete** /api/v1/site_live/{fqdn} | Delete your live site
[**DeleteSiteStage**](SiteLiveApi.md#DeleteSiteStage) | **Delete** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**DeleteSiteStage_0**](SiteLiveApi.md#DeleteSiteStage_0) | **Delete** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**DeleteTag**](SiteLiveApi.md#DeleteTag) | **Delete** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**DeleteTag_0**](SiteLiveApi.md#DeleteTag_0) | **Delete** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**DisableFirewall**](SiteLiveApi.md#DisableFirewall) | **Delete** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**DisableFirewall_0**](SiteLiveApi.md#DisableFirewall_0) | **Delete** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**EnableFirewall**](SiteLiveApi.md#EnableFirewall) | **Post** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**EnableFirewall_0**](SiteLiveApi.md#EnableFirewall_0) | **Post** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**GetDnsRecords**](SiteLiveApi.md#GetDnsRecords) | **Get** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**GetDnsRecords_0**](SiteLiveApi.md#GetDnsRecords_0) | **Get** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**GetEmails**](SiteLiveApi.md#GetEmails) | **Get** /api/v1/site_live/{fqdn}/email | Get Emails
[**GetEmails_0**](SiteLiveApi.md#GetEmails_0) | **Get** /api/v1/site_live/{fqdn}/email | Get Emails
[**GetExternalPaths**](SiteLiveApi.md#GetExternalPaths) | **Get** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**GetExternalPaths_0**](SiteLiveApi.md#GetExternalPaths_0) | **Get** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**GetFilesAtPoint**](SiteLiveApi.md#GetFilesAtPoint) | **Get** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**GetFilesAtPoint_0**](SiteLiveApi.md#GetFilesAtPoint_0) | **Get** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**GetMailDns**](SiteLiveApi.md#GetMailDns) | **Get** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**GetMailDns_0**](SiteLiveApi.md#GetMailDns_0) | **Get** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**GetPitRestore**](SiteLiveApi.md#GetPitRestore) | **Get** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**GetPitRestore_0**](SiteLiveApi.md#GetPitRestore_0) | **Get** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**GetPitRestores**](SiteLiveApi.md#GetPitRestores) | **Get** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**GetPitRestores_0**](SiteLiveApi.md#GetPitRestores_0) | **Get** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**GetSiteLive**](SiteLiveApi.md#GetSiteLive) | **Get** /api/v1/site_live/{fqdn} | Get your live site
[**GetSiteLive_0**](SiteLiveApi.md#GetSiteLive_0) | **Get** /api/v1/site_live/{fqdn} | Get your live site
[**GetSitePlanUsage**](SiteLiveApi.md#GetSitePlanUsage) | **Get** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**GetSitePlanUsage_0**](SiteLiveApi.md#GetSitePlanUsage_0) | **Get** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**GetSitesLive**](SiteLiveApi.md#GetSitesLive) | **Get** /api/v1/site_live | Get your sites
[**GetSitesLive_0**](SiteLiveApi.md#GetSitesLive_0) | **Get** /api/v1/site_live | Get your sites
[**GetTags**](SiteLiveApi.md#GetTags) | **Get** /api/v1/site_live/{fqdn}/tag | Get tags
[**GetTags_0**](SiteLiveApi.md#GetTags_0) | **Get** /api/v1/site_live/{fqdn}/tag | Get tags
[**ModifyFirewall**](SiteLiveApi.md#ModifyFirewall) | **Put** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**ModifyFirewall_0**](SiteLiveApi.md#ModifyFirewall_0) | **Put** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**RestoreSite**](SiteLiveApi.md#RestoreSite) | **Post** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**RestoreSite_0**](SiteLiveApi.md#RestoreSite_0) | **Post** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**ShellCmdSiteLive**](SiteLiveApi.md#ShellCmdSiteLive) | **Put** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**ShellCmdSiteLive_0**](SiteLiveApi.md#ShellCmdSiteLive_0) | **Put** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**UpdateDnsRecord**](SiteLiveApi.md#UpdateDnsRecord) | **Put** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**UpdateDnsRecord_0**](SiteLiveApi.md#UpdateDnsRecord_0) | **Put** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**UpdateEmail**](SiteLiveApi.md#UpdateEmail) | **Patch** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**UpdateEmail_0**](SiteLiveApi.md#UpdateEmail_0) | **Patch** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**UpdateSiteLive**](SiteLiveApi.md#UpdateSiteLive) | **Put** /api/v1/site_live/{fqdn} | Update a site
[**UpdateSiteLive_0**](SiteLiveApi.md#UpdateSiteLive_0) | **Put** /api/v1/site_live/{fqdn} | Update a site
[**ValidateMxRecords**](SiteLiveApi.md#ValidateMxRecords) | **Get** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
[**ValidateMxRecords_0**](SiteLiveApi.md#ValidateMxRecords_0) | **Get** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation



## AddMailDns

> interface{} AddMailDns(ctx, fqdn).Execute()

Create Email DNS records



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
    resp, r, err := apiClient.SiteLiveApi.AddMailDns(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.AddMailDns``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddMailDns`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.AddMailDns`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddMailDnsRequest struct via the builder pattern


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


## AddMailDns_0

> interface{} AddMailDns_0(ctx, fqdn).Execute()

Create Email DNS records



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
    resp, r, err := apiClient.SiteLiveApi.AddMailDns_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.AddMailDns_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddMailDns_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.AddMailDns_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddMailDns_1Request struct via the builder pattern


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


## ChangeDevMode

> interface{} ChangeDevMode(ctx, fqdn).Value(value).Execute()

Change HTTP Auth



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
    value := "value_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.ChangeDevMode(context.Background(), fqdn).Value(value).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ChangeDevMode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeDevMode`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ChangeDevMode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeDevModeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **value** | **string** |  | 

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


## ChangeDevMode_0

> interface{} ChangeDevMode_0(ctx, fqdn).Value(value).Execute()

Change HTTP Auth



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
    value := "value_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.ChangeDevMode_0(context.Background(), fqdn).Value(value).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ChangeDevMode_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeDevMode_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ChangeDevMode_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeDevMode_2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **value** | **string** |  | 

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


## ClearCache

> interface{} ClearCache(ctx, fqdn).Execute()

Clear the cache



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
    resp, r, err := apiClient.SiteLiveApi.ClearCache(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ClearCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClearCache`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ClearCache`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClearCacheRequest struct via the builder pattern


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


## ClearCache_0

> interface{} ClearCache_0(ctx, fqdn).Execute()

Clear the cache



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
    resp, r, err := apiClient.SiteLiveApi.ClearCache_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ClearCache_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClearCache_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ClearCache_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiClearCache_3Request struct via the builder pattern


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


## CommitSiteStage

> interface{} CommitSiteStage(ctx, fqdn).Execute()

Commit Stage Site



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
    resp, r, err := apiClient.SiteLiveApi.CommitSiteStage(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CommitSiteStage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CommitSiteStage`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CommitSiteStage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCommitSiteStageRequest struct via the builder pattern


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


## CommitSiteStage_0

> interface{} CommitSiteStage_0(ctx, fqdn).Execute()

Commit Stage Site



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
    resp, r, err := apiClient.SiteLiveApi.CommitSiteStage_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CommitSiteStage_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CommitSiteStage_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CommitSiteStage_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCommitSiteStage_4Request struct via the builder pattern


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


## CreateEmail

> map[string]interface{} CreateEmail(ctx, fqdn).UserEmailCreate(userEmailCreate).Execute()

Create Email



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
    userEmailCreate := *openapiclient.NewUserEmailCreate("LocalPart_example") // UserEmailCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateEmail(context.Background(), fqdn).UserEmailCreate(userEmailCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateEmail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateEmail`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateEmail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateEmailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **userEmailCreate** | [**UserEmailCreate**](UserEmailCreate.md) |  | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateEmail_0

> map[string]interface{} CreateEmail_0(ctx, fqdn).UserEmailCreate(userEmailCreate).Execute()

Create Email



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
    userEmailCreate := *openapiclient.NewUserEmailCreate("LocalPart_example") // UserEmailCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateEmail_0(context.Background(), fqdn).UserEmailCreate(userEmailCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateEmail_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateEmail_0`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateEmail_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateEmail_5Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **userEmailCreate** | [**UserEmailCreate**](UserEmailCreate.md) |  | 

### Return type

**map[string]interface{}**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateExternalPath

> interface{} CreateExternalPath(ctx, fqdn).ExternalPathCreate(externalPathCreate).Execute()

Create External Path



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
    externalPathCreate := *openapiclient.NewExternalPathCreate("ExternalName_example", "Path_example") // ExternalPathCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateExternalPath(context.Background(), fqdn).ExternalPathCreate(externalPathCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateExternalPath``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateExternalPath`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateExternalPath`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateExternalPathRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **externalPathCreate** | [**ExternalPathCreate**](ExternalPathCreate.md) |  | 

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


## CreateExternalPath_0

> interface{} CreateExternalPath_0(ctx, fqdn).ExternalPathCreate(externalPathCreate).Execute()

Create External Path



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
    externalPathCreate := *openapiclient.NewExternalPathCreate("ExternalName_example", "Path_example") // ExternalPathCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateExternalPath_0(context.Background(), fqdn).ExternalPathCreate(externalPathCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateExternalPath_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateExternalPath_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateExternalPath_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateExternalPath_6Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **externalPathCreate** | [**ExternalPathCreate**](ExternalPathCreate.md) |  | 

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


## CreateSiteLive

> SiteLive CreateSiteLive(ctx).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()

Create a site



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
    resp, r, err := apiClient.SiteLiveApi.CreateSiteLive(context.Background()).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateSiteLive``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSiteLive`: SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateSiteLive`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSiteLiveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | 

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateSiteLive_0

> SiteLive CreateSiteLive_0(ctx).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()

Create a site



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
    resp, r, err := apiClient.SiteLiveApi.CreateSiteLive_0(context.Background()).UNKNOWNBASETYPE(uNKNOWNBASETYPE).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateSiteLive_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSiteLive_0`: SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateSiteLive_0`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSiteLive_7Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uNKNOWNBASETYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | 

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateSiteStage

> interface{} CreateSiteStage(ctx, fqdn).SiteStageCreate(siteStageCreate).Execute()

Create a Staging site



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
    siteStageCreate := *openapiclient.NewSiteStageCreate("Subdomain_example") // SiteStageCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateSiteStage(context.Background(), fqdn).SiteStageCreate(siteStageCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateSiteStage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSiteStage`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateSiteStage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSiteStageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **siteStageCreate** | [**SiteStageCreate**](SiteStageCreate.md) |  | 

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


## CreateSiteStage_0

> interface{} CreateSiteStage_0(ctx, fqdn).SiteStageCreate(siteStageCreate).Execute()

Create a Staging site



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
    siteStageCreate := *openapiclient.NewSiteStageCreate("Subdomain_example") // SiteStageCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateSiteStage_0(context.Background(), fqdn).SiteStageCreate(siteStageCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateSiteStage_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSiteStage_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateSiteStage_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSiteStage_8Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **siteStageCreate** | [**SiteStageCreate**](SiteStageCreate.md) |  | 

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


## CreateTag

> Tag CreateTag(ctx, fqdn).TagCreate(tagCreate).Execute()

Create tag



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
    tagCreate := *openapiclient.NewTagCreate("Name_example") // TagCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateTag(context.Background(), fqdn).TagCreate(tagCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateTag``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateTag`: Tag
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateTag`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateTagRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **tagCreate** | [**TagCreate**](TagCreate.md) |  | 

### Return type

[**Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTag_0

> Tag CreateTag_0(ctx, fqdn).TagCreate(tagCreate).Execute()

Create tag



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
    tagCreate := *openapiclient.NewTagCreate("Name_example") // TagCreate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.CreateTag_0(context.Background(), fqdn).TagCreate(tagCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.CreateTag_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateTag_0`: Tag
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.CreateTag_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateTag_9Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **tagCreate** | [**TagCreate**](TagCreate.md) |  | 

### Return type

[**Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDnsRecord

> interface{} DeleteDnsRecord(ctx, dnsId, fqdn).Execute()

Delete DNS record



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
    dnsId := "dnsId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteDnsRecord(context.Background(), dnsId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteDnsRecord``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDnsRecord`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteDnsRecord`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dnsId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDnsRecordRequest struct via the builder pattern


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


## DeleteDnsRecord_0

> interface{} DeleteDnsRecord_0(ctx, dnsId, fqdn).Execute()

Delete DNS record



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
    dnsId := "dnsId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteDnsRecord_0(context.Background(), dnsId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteDnsRecord_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDnsRecord_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteDnsRecord_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**dnsId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDnsRecord_10Request struct via the builder pattern


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


## DeleteEmail

> interface{} DeleteEmail(ctx, fqdn, userEmailAddress).Execute()

Delete Email



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
    userEmailAddress := "userEmailAddress_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteEmail(context.Background(), fqdn, userEmailAddress).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteEmail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteEmail`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteEmail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 
**userEmailAddress** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEmailRequest struct via the builder pattern


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


## DeleteEmail_0

> interface{} DeleteEmail_0(ctx, fqdn, userEmailAddress).Execute()

Delete Email



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
    userEmailAddress := "userEmailAddress_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteEmail_0(context.Background(), fqdn, userEmailAddress).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteEmail_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteEmail_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteEmail_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 
**userEmailAddress** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEmail_11Request struct via the builder pattern


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


## DeleteExternalPath

> interface{} DeleteExternalPath(ctx, externalPathId, fqdn).Execute()

Delete External Path



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
    externalPathId := "externalPathId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteExternalPath(context.Background(), externalPathId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteExternalPath``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExternalPath`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteExternalPath`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**externalPathId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExternalPathRequest struct via the builder pattern


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


## DeleteExternalPath_0

> interface{} DeleteExternalPath_0(ctx, externalPathId, fqdn).Execute()

Delete External Path



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
    externalPathId := "externalPathId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteExternalPath_0(context.Background(), externalPathId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteExternalPath_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExternalPath_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteExternalPath_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**externalPathId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExternalPath_12Request struct via the builder pattern


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


## DeleteSiteLive

> interface{} DeleteSiteLive(ctx, fqdn).Execute()

Delete your live site



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
    resp, r, err := apiClient.SiteLiveApi.DeleteSiteLive(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteSiteLive``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSiteLive`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteSiteLive`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSiteLiveRequest struct via the builder pattern


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


## DeleteSiteLive_0

> interface{} DeleteSiteLive_0(ctx, fqdn).Execute()

Delete your live site



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
    resp, r, err := apiClient.SiteLiveApi.DeleteSiteLive_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteSiteLive_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSiteLive_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteSiteLive_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSiteLive_13Request struct via the builder pattern


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


## DeleteSiteStage

> interface{} DeleteSiteStage(ctx, fqdn).Execute()

Delete Stage Site



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
    resp, r, err := apiClient.SiteLiveApi.DeleteSiteStage(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteSiteStage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSiteStage`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteSiteStage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSiteStageRequest struct via the builder pattern


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


## DeleteSiteStage_0

> interface{} DeleteSiteStage_0(ctx, fqdn).Execute()

Delete Stage Site



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
    resp, r, err := apiClient.SiteLiveApi.DeleteSiteStage_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteSiteStage_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSiteStage_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteSiteStage_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSiteStage_14Request struct via the builder pattern


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


## DeleteTag

> []Tag DeleteTag(ctx, tagId, fqdn).Execute()

Get a tag



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
    tagId := "tagId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteTag(context.Background(), tagId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteTag``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTag`: []Tag
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteTag`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tagId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTagRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTag_0

> []Tag DeleteTag_0(ctx, tagId, fqdn).Execute()

Get a tag



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
    tagId := "tagId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.DeleteTag_0(context.Background(), tagId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DeleteTag_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTag_0`: []Tag
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DeleteTag_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tagId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTag_15Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**[]Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisableFirewall

> interface{} DisableFirewall(ctx, fqdn).Execute()

Disable the firewall



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
    resp, r, err := apiClient.SiteLiveApi.DisableFirewall(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DisableFirewall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisableFirewall`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DisableFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisableFirewallRequest struct via the builder pattern


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


## DisableFirewall_0

> interface{} DisableFirewall_0(ctx, fqdn).Execute()

Disable the firewall



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
    resp, r, err := apiClient.SiteLiveApi.DisableFirewall_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.DisableFirewall_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisableFirewall_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.DisableFirewall_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisableFirewall_16Request struct via the builder pattern


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


## EnableFirewall

> interface{} EnableFirewall(ctx, fqdn).Execute()

Enable the firewall



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
    resp, r, err := apiClient.SiteLiveApi.EnableFirewall(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.EnableFirewall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnableFirewall`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.EnableFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnableFirewallRequest struct via the builder pattern


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


## EnableFirewall_0

> interface{} EnableFirewall_0(ctx, fqdn).Execute()

Enable the firewall



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
    resp, r, err := apiClient.SiteLiveApi.EnableFirewall_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.EnableFirewall_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnableFirewall_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.EnableFirewall_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnableFirewall_17Request struct via the builder pattern


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


## GetDnsRecords

> interface{} GetDnsRecords(ctx, fqdn).Execute()

Get DNS records



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
    resp, r, err := apiClient.SiteLiveApi.GetDnsRecords(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetDnsRecords``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDnsRecords`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetDnsRecords`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDnsRecordsRequest struct via the builder pattern


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


## GetDnsRecords_0

> interface{} GetDnsRecords_0(ctx, fqdn).Execute()

Get DNS records



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
    resp, r, err := apiClient.SiteLiveApi.GetDnsRecords_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetDnsRecords_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDnsRecords_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetDnsRecords_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDnsRecords_18Request struct via the builder pattern


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


## GetEmails

> interface{} GetEmails(ctx, fqdn).Execute()

Get Emails



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
    resp, r, err := apiClient.SiteLiveApi.GetEmails(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetEmails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEmails`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetEmails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEmailsRequest struct via the builder pattern


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


## GetEmails_0

> interface{} GetEmails_0(ctx, fqdn).Execute()

Get Emails



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
    resp, r, err := apiClient.SiteLiveApi.GetEmails_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetEmails_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEmails_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetEmails_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEmails_19Request struct via the builder pattern


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


## GetExternalPaths

> interface{} GetExternalPaths(ctx, fqdn).Execute()

Get External Paths



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
    resp, r, err := apiClient.SiteLiveApi.GetExternalPaths(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetExternalPaths``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalPaths`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetExternalPaths`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalPathsRequest struct via the builder pattern


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


## GetExternalPaths_0

> interface{} GetExternalPaths_0(ctx, fqdn).Execute()

Get External Paths



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
    resp, r, err := apiClient.SiteLiveApi.GetExternalPaths_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetExternalPaths_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalPaths_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetExternalPaths_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalPaths_20Request struct via the builder pattern


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


## GetFilesAtPoint

> interface{} GetFilesAtPoint(ctx, fqdn).RestorePoint(restorePoint).Execute()

PIT Files



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    fqdn := "fqdn_example" // string | 
    restorePoint := time.Now() // time.Time | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.GetFilesAtPoint(context.Background(), fqdn).RestorePoint(restorePoint).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetFilesAtPoint``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFilesAtPoint`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetFilesAtPoint`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFilesAtPointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **restorePoint** | **time.Time** |  | 

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


## GetFilesAtPoint_0

> interface{} GetFilesAtPoint_0(ctx, fqdn).RestorePoint(restorePoint).Execute()

PIT Files



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    fqdn := "fqdn_example" // string | 
    restorePoint := time.Now() // time.Time | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.GetFilesAtPoint_0(context.Background(), fqdn).RestorePoint(restorePoint).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetFilesAtPoint_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFilesAtPoint_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetFilesAtPoint_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFilesAtPoint_21Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **restorePoint** | **time.Time** |  | 

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


## GetMailDns

> interface{} GetMailDns(ctx, fqdn).Execute()

Get Required mail DNS records



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
    resp, r, err := apiClient.SiteLiveApi.GetMailDns(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetMailDns``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMailDns`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetMailDns`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMailDnsRequest struct via the builder pattern


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


## GetMailDns_0

> interface{} GetMailDns_0(ctx, fqdn).Execute()

Get Required mail DNS records



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
    resp, r, err := apiClient.SiteLiveApi.GetMailDns_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetMailDns_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMailDns_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetMailDns_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMailDns_22Request struct via the builder pattern


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


## GetPitRestore

> interface{} GetPitRestore(ctx, pitRestoreId, fqdn).Execute()

Get PIT Restore



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
    pitRestoreId := "pitRestoreId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.GetPitRestore(context.Background(), pitRestoreId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetPitRestore``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPitRestore`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetPitRestore`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pitRestoreId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPitRestoreRequest struct via the builder pattern


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


## GetPitRestore_0

> interface{} GetPitRestore_0(ctx, pitRestoreId, fqdn).Execute()

Get PIT Restore



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
    pitRestoreId := "pitRestoreId_example" // string | 
    fqdn := "fqdn_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.GetPitRestore_0(context.Background(), pitRestoreId, fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetPitRestore_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPitRestore_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetPitRestore_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pitRestoreId** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPitRestore_23Request struct via the builder pattern


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


## GetPitRestores

> interface{} GetPitRestores(ctx, fqdn).Execute()

Get PIT Restores



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
    resp, r, err := apiClient.SiteLiveApi.GetPitRestores(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetPitRestores``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPitRestores`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetPitRestores`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPitRestoresRequest struct via the builder pattern


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


## GetPitRestores_0

> interface{} GetPitRestores_0(ctx, fqdn).Execute()

Get PIT Restores



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
    resp, r, err := apiClient.SiteLiveApi.GetPitRestores_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetPitRestores_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPitRestores_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetPitRestores_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPitRestores_24Request struct via the builder pattern


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


## GetSiteLive

> SiteLive GetSiteLive(ctx, fqdn).Execute()

Get your live site



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
    resp, r, err := apiClient.SiteLiveApi.GetSiteLive(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetSiteLive``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSiteLive`: SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetSiteLive`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSiteLiveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSiteLive_0

> SiteLive GetSiteLive_0(ctx, fqdn).Execute()

Get your live site



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
    resp, r, err := apiClient.SiteLiveApi.GetSiteLive_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetSiteLive_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSiteLive_0`: SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetSiteLive_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSiteLive_25Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSitePlanUsage

> interface{} GetSitePlanUsage(ctx, fqdn).Start(start).End(end).Execute()

Get Site Plan Usage



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    fqdn := "fqdn_example" // string | 
    start := time.Now() // time.Time | 
    end := time.Now() // time.Time | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.GetSitePlanUsage(context.Background(), fqdn).Start(start).End(end).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetSitePlanUsage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSitePlanUsage`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetSitePlanUsage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSitePlanUsageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **start** | **time.Time** |  | 
 **end** | **time.Time** |  | 

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


## GetSitePlanUsage_0

> interface{} GetSitePlanUsage_0(ctx, fqdn).Start(start).End(end).Execute()

Get Site Plan Usage



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    fqdn := "fqdn_example" // string | 
    start := time.Now() // time.Time | 
    end := time.Now() // time.Time | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.GetSitePlanUsage_0(context.Background(), fqdn).Start(start).End(end).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetSitePlanUsage_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSitePlanUsage_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetSitePlanUsage_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSitePlanUsage_26Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **start** | **time.Time** |  | 
 **end** | **time.Time** |  | 

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


## GetSitesLive

> []SiteLive GetSitesLive(ctx).Execute()

Get your sites



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
    resp, r, err := apiClient.SiteLiveApi.GetSitesLive(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetSitesLive``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSitesLive`: []SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetSitesLive`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSitesLiveRequest struct via the builder pattern


### Return type

[**[]SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSitesLive_0

> []SiteLive GetSitesLive_0(ctx).Execute()

Get your sites



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
    resp, r, err := apiClient.SiteLiveApi.GetSitesLive_0(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetSitesLive_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSitesLive_0`: []SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetSitesLive_0`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSitesLive_27Request struct via the builder pattern


### Return type

[**[]SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTags

> []Tag GetTags(ctx, fqdn).Execute()

Get tags



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
    resp, r, err := apiClient.SiteLiveApi.GetTags(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetTags``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTags`: []Tag
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetTags`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTagsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTags_0

> []Tag GetTags_0(ctx, fqdn).Execute()

Get tags



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
    resp, r, err := apiClient.SiteLiveApi.GetTags_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.GetTags_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTags_0`: []Tag
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.GetTags_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTags_28Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Tag**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ModifyFirewall

> interface{} ModifyFirewall(ctx, fqdn).IpAddress(ipAddress).AddOrDel(addOrDel).Execute()

Modify the firewall



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
    ipAddress := "ipAddress_example" // string | 
    addOrDel := "addOrDel_example" // string |  (optional) (default to "add")

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.ModifyFirewall(context.Background(), fqdn).IpAddress(ipAddress).AddOrDel(addOrDel).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ModifyFirewall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ModifyFirewall`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ModifyFirewall`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiModifyFirewallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ipAddress** | **string** |  | 
 **addOrDel** | **string** |  | [default to &quot;add&quot;]

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


## ModifyFirewall_0

> interface{} ModifyFirewall_0(ctx, fqdn).IpAddress(ipAddress).AddOrDel(addOrDel).Execute()

Modify the firewall



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
    ipAddress := "ipAddress_example" // string | 
    addOrDel := "addOrDel_example" // string |  (optional) (default to "add")

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.ModifyFirewall_0(context.Background(), fqdn).IpAddress(ipAddress).AddOrDel(addOrDel).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ModifyFirewall_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ModifyFirewall_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ModifyFirewall_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiModifyFirewall_29Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ipAddress** | **string** |  | 
 **addOrDel** | **string** |  | [default to &quot;add&quot;]

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


## RestoreSite

> interface{} RestoreSite(ctx, fqdn).PITRestoreCreate(pITRestoreCreate).Execute()

Create PIT Restore



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    fqdn := "fqdn_example" // string | 
    pITRestoreCreate := *openapiclient.NewPITRestoreCreate(time.Now()) // PITRestoreCreate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.RestoreSite(context.Background(), fqdn).PITRestoreCreate(pITRestoreCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.RestoreSite``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RestoreSite`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.RestoreSite`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRestoreSiteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pITRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md) |  | 

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


## RestoreSite_0

> interface{} RestoreSite_0(ctx, fqdn).PITRestoreCreate(pITRestoreCreate).Execute()

Create PIT Restore



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "./openapi"
)

func main() {
    fqdn := "fqdn_example" // string | 
    pITRestoreCreate := *openapiclient.NewPITRestoreCreate(time.Now()) // PITRestoreCreate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.RestoreSite_0(context.Background(), fqdn).PITRestoreCreate(pITRestoreCreate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.RestoreSite_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RestoreSite_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.RestoreSite_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRestoreSite_30Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pITRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md) |  | 

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


## ShellCmdSiteLive

> interface{} ShellCmdSiteLive(ctx, fqdn).Cmd(cmd).Cwd(cwd).AutoTrackDir(autoTrackDir).Stage(stage).Execute()

Execute shell command



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
    cmd := "cmd_example" // string | 
    cwd := "cwd_example" // string |  (optional) (default to "/bitnami/wordpress/wp-content")
    autoTrackDir := true // bool |  (optional) (default to false)
    stage := true // bool |  (optional) (default to false)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.ShellCmdSiteLive(context.Background(), fqdn).Cmd(cmd).Cwd(cwd).AutoTrackDir(autoTrackDir).Stage(stage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ShellCmdSiteLive``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShellCmdSiteLive`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ShellCmdSiteLive`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiShellCmdSiteLiveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cmd** | **string** |  | 
 **cwd** | **string** |  | [default to &quot;/bitnami/wordpress/wp-content&quot;]
 **autoTrackDir** | **bool** |  | [default to false]
 **stage** | **bool** |  | [default to false]

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


## ShellCmdSiteLive_0

> interface{} ShellCmdSiteLive_0(ctx, fqdn).Cmd(cmd).Cwd(cwd).AutoTrackDir(autoTrackDir).Stage(stage).Execute()

Execute shell command



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
    cmd := "cmd_example" // string | 
    cwd := "cwd_example" // string |  (optional) (default to "/bitnami/wordpress/wp-content")
    autoTrackDir := true // bool |  (optional) (default to false)
    stage := true // bool |  (optional) (default to false)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.ShellCmdSiteLive_0(context.Background(), fqdn).Cmd(cmd).Cwd(cwd).AutoTrackDir(autoTrackDir).Stage(stage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ShellCmdSiteLive_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShellCmdSiteLive_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ShellCmdSiteLive_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiShellCmdSiteLive_31Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cmd** | **string** |  | 
 **cwd** | **string** |  | [default to &quot;/bitnami/wordpress/wp-content&quot;]
 **autoTrackDir** | **bool** |  | [default to false]
 **stage** | **bool** |  | [default to false]

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


## UpdateDnsRecord

> interface{} UpdateDnsRecord(ctx, fqdn).DnsType(dnsType).DnsHostname(dnsHostname).DnsContent(dnsContent).DnsId(dnsId).DnsPriority(dnsPriority).DnsTtl(dnsTtl).Execute()

Update DNS record



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
    dnsType := "dnsType_example" // string | 
    dnsHostname := "dnsHostname_example" // string | 
    dnsContent := "dnsContent_example" // string | 
    dnsId := "dnsId_example" // string |  (optional)
    dnsPriority := int32(56) // int32 |  (optional) (default to 0)
    dnsTtl := int32(56) // int32 |  (optional) (default to 1)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.UpdateDnsRecord(context.Background(), fqdn).DnsType(dnsType).DnsHostname(dnsHostname).DnsContent(dnsContent).DnsId(dnsId).DnsPriority(dnsPriority).DnsTtl(dnsTtl).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.UpdateDnsRecord``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateDnsRecord`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.UpdateDnsRecord`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDnsRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dnsType** | **string** |  | 
 **dnsHostname** | **string** |  | 
 **dnsContent** | **string** |  | 
 **dnsId** | **string** |  | 
 **dnsPriority** | **int32** |  | [default to 0]
 **dnsTtl** | **int32** |  | [default to 1]

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


## UpdateDnsRecord_0

> interface{} UpdateDnsRecord_0(ctx, fqdn).DnsType(dnsType).DnsHostname(dnsHostname).DnsContent(dnsContent).DnsId(dnsId).DnsPriority(dnsPriority).DnsTtl(dnsTtl).Execute()

Update DNS record



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
    dnsType := "dnsType_example" // string | 
    dnsHostname := "dnsHostname_example" // string | 
    dnsContent := "dnsContent_example" // string | 
    dnsId := "dnsId_example" // string |  (optional)
    dnsPriority := int32(56) // int32 |  (optional) (default to 0)
    dnsTtl := int32(56) // int32 |  (optional) (default to 1)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.UpdateDnsRecord_0(context.Background(), fqdn).DnsType(dnsType).DnsHostname(dnsHostname).DnsContent(dnsContent).DnsId(dnsId).DnsPriority(dnsPriority).DnsTtl(dnsTtl).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.UpdateDnsRecord_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateDnsRecord_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.UpdateDnsRecord_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDnsRecord_32Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dnsType** | **string** |  | 
 **dnsHostname** | **string** |  | 
 **dnsContent** | **string** |  | 
 **dnsId** | **string** |  | 
 **dnsPriority** | **int32** |  | [default to 0]
 **dnsTtl** | **int32** |  | [default to 1]

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


## UpdateEmail

> interface{} UpdateEmail(ctx, userEmailAddress, fqdn).UserEmailUpdate(userEmailUpdate).Execute()

Update Email



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
    userEmailAddress := "userEmailAddress_example" // string | 
    fqdn := "fqdn_example" // string | 
    userEmailUpdate := *openapiclient.NewUserEmailUpdate() // UserEmailUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.UpdateEmail(context.Background(), userEmailAddress, fqdn).UserEmailUpdate(userEmailUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.UpdateEmail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEmail`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.UpdateEmail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userEmailAddress** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEmailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **userEmailUpdate** | [**UserEmailUpdate**](UserEmailUpdate.md) |  | 

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


## UpdateEmail_0

> interface{} UpdateEmail_0(ctx, userEmailAddress, fqdn).UserEmailUpdate(userEmailUpdate).Execute()

Update Email



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
    userEmailAddress := "userEmailAddress_example" // string | 
    fqdn := "fqdn_example" // string | 
    userEmailUpdate := *openapiclient.NewUserEmailUpdate() // UserEmailUpdate |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.UpdateEmail_0(context.Background(), userEmailAddress, fqdn).UserEmailUpdate(userEmailUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.UpdateEmail_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEmail_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.UpdateEmail_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**userEmailAddress** | **string** |  | 
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEmail_33Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **userEmailUpdate** | [**UserEmailUpdate**](UserEmailUpdate.md) |  | 

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


## UpdateSiteLive

> SiteLive UpdateSiteLive(ctx, fqdn).SiteLiveUpdate(siteLiveUpdate).Execute()

Update a site



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
    siteLiveUpdate := *openapiclient.NewSiteLiveUpdate() // SiteLiveUpdate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.UpdateSiteLive(context.Background(), fqdn).SiteLiveUpdate(siteLiveUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.UpdateSiteLive``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSiteLive`: SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.UpdateSiteLive`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSiteLiveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **siteLiveUpdate** | [**SiteLiveUpdate**](SiteLiveUpdate.md) |  | 

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSiteLive_0

> SiteLive UpdateSiteLive_0(ctx, fqdn).SiteLiveUpdate(siteLiveUpdate).Execute()

Update a site



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
    siteLiveUpdate := *openapiclient.NewSiteLiveUpdate() // SiteLiveUpdate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.SiteLiveApi.UpdateSiteLive_0(context.Background(), fqdn).SiteLiveUpdate(siteLiveUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.UpdateSiteLive_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateSiteLive_0`: SiteLive
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.UpdateSiteLive_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSiteLive_34Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **siteLiveUpdate** | [**SiteLiveUpdate**](SiteLiveUpdate.md) |  | 

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateMxRecords

> interface{} ValidateMxRecords(ctx, fqdn).Execute()

MX Validation



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
    resp, r, err := apiClient.SiteLiveApi.ValidateMxRecords(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ValidateMxRecords``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateMxRecords`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ValidateMxRecords`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateMxRecordsRequest struct via the builder pattern


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


## ValidateMxRecords_0

> interface{} ValidateMxRecords_0(ctx, fqdn).Execute()

MX Validation



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
    resp, r, err := apiClient.SiteLiveApi.ValidateMxRecords_0(context.Background(), fqdn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SiteLiveApi.ValidateMxRecords_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateMxRecords_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `SiteLiveApi.ValidateMxRecords_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fqdn** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateMxRecords_35Request struct via the builder pattern


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

