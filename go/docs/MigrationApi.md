# \MigrationApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateMigration**](MigrationApi.md#CreateMigration) | **Post** /api/v1/migration | Create a migration
[**DeleteMigration**](MigrationApi.md#DeleteMigration) | **Get** /api/v1/migration/{migration_id} | Delete Migration
[**GetMigrations**](MigrationApi.md#GetMigrations) | **Get** /api/v1/migration | Get Migrations



## CreateMigration

> Migration CreateMigration(ctx).CurrentUrl(currentUrl).WordpressPassword(wordpressPassword).WordpressUser(wordpressUser).Extra(extra).FtpAddress(ftpAddress).FtpPassword(ftpPassword).FtpUser(ftpUser).Host(host).HostPassword(hostPassword).HostUser(hostUser).MigrationType(migrationType).ZipFile(zipFile).ZipFileName(zipFileName).Execute()

Create a migration



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
    currentUrl := "currentUrl_example" // string | 
    wordpressPassword := "wordpressPassword_example" // string | 
    wordpressUser := "wordpressUser_example" // string | 
    extra := "extra_example" // string |  (optional)
    ftpAddress := "ftpAddress_example" // string |  (optional)
    ftpPassword := "ftpPassword_example" // string |  (optional)
    ftpUser := "ftpUser_example" // string |  (optional)
    host := "host_example" // string |  (optional)
    hostPassword := "hostPassword_example" // string |  (optional)
    hostUser := "hostUser_example" // string |  (optional)
    migrationType := "migrationType_example" // string |  (optional)
    zipFile := os.NewFile(1234, "some_file") // *os.File |  (optional)
    zipFileName := "zipFileName_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MigrationApi.CreateMigration(context.Background()).CurrentUrl(currentUrl).WordpressPassword(wordpressPassword).WordpressUser(wordpressUser).Extra(extra).FtpAddress(ftpAddress).FtpPassword(ftpPassword).FtpUser(ftpUser).Host(host).HostPassword(hostPassword).HostUser(hostUser).MigrationType(migrationType).ZipFile(zipFile).ZipFileName(zipFileName).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MigrationApi.CreateMigration``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMigration`: Migration
    fmt.Fprintf(os.Stdout, "Response from `MigrationApi.CreateMigration`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMigrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentUrl** | **string** |  | 
 **wordpressPassword** | **string** |  | 
 **wordpressUser** | **string** |  | 
 **extra** | **string** |  | 
 **ftpAddress** | **string** |  | 
 **ftpPassword** | **string** |  | 
 **ftpUser** | **string** |  | 
 **host** | **string** |  | 
 **hostPassword** | **string** |  | 
 **hostUser** | **string** |  | 
 **migrationType** | **string** |  | 
 **zipFile** | ***os.File** |  | 
 **zipFileName** | **string** |  | 

### Return type

[**Migration**](Migration.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteMigration

> interface{} DeleteMigration(ctx, migrationId).Execute()

Delete Migration

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
    migrationId := int32(56) // int32 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.MigrationApi.DeleteMigration(context.Background(), migrationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MigrationApi.DeleteMigration``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMigration`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `MigrationApi.DeleteMigration`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**migrationId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMigrationRequest struct via the builder pattern


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


## GetMigrations

> []Migration GetMigrations(ctx).Execute()

Get Migrations

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
    resp, r, err := apiClient.MigrationApi.GetMigrations(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MigrationApi.GetMigrations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMigrations`: []Migration
    fmt.Fprintf(os.Stdout, "Response from `MigrationApi.GetMigrations`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMigrationsRequest struct via the builder pattern


### Return type

[**[]Migration**](Migration.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

