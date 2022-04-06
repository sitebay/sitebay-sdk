# UtilsApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainCheck**](UtilsApi.md#domainCheck) | **GET** /api/v1/domain_check | Domain check
[**verifyGitSyncDirectories**](UtilsApi.md#verifyGitSyncDirectories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


<a name="domainCheck"></a>
# **domainCheck**
> kotlin.Any domainCheck(fqdn)

Domain check

Returns success if a given FQDN&#39;s DNS records are correctly set up

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UtilsApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.domainCheck(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UtilsApi#domainCheck")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UtilsApi#domainCheck")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyGitSyncDirectories"></a>
# **verifyGitSyncDirectories**
> kotlin.Any verifyGitSyncDirectories(gitUrl, gitBranch)

Verify Git Sync Directories

Returns success Git Repo&#39;s root folder is correctly set up

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UtilsApi()
val gitUrl : kotlin.String = gitUrl_example // kotlin.String | 
val gitBranch : kotlin.String = gitBranch_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.verifyGitSyncDirectories(gitUrl, gitBranch)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UtilsApi#verifyGitSyncDirectories")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UtilsApi#verifyGitSyncDirectories")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gitUrl** | **kotlin.String**|  |
 **gitBranch** | **kotlin.String**|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

