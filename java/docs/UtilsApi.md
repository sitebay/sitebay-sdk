# UtilsApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainCheck**](UtilsApi.md#domainCheck) | **GET** /api/v1/domain_check | Domain check
[**verifyGitSyncDirectories**](UtilsApi.md#verifyGitSyncDirectories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


<a name="domainCheck"></a>
# **domainCheck**
> Object domainCheck(fqdn)

Domain check

Returns success if a given FQDN&#39;s DNS records are correctly set up

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UtilsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    UtilsApi apiInstance = new UtilsApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.domainCheck(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilsApi#domainCheck");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **String**|  |

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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="verifyGitSyncDirectories"></a>
# **verifyGitSyncDirectories**
> Object verifyGitSyncDirectories(gitUrl, gitBranch)

Verify Git Sync Directories

Returns success Git Repo&#39;s root folder is correctly set up

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.UtilsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    UtilsApi apiInstance = new UtilsApi(defaultClient);
    String gitUrl = "gitUrl_example"; // String | 
    String gitBranch = "gitBranch_example"; // String | 
    try {
      Object result = apiInstance.verifyGitSyncDirectories(gitUrl, gitBranch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilsApi#verifyGitSyncDirectories");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gitUrl** | **String**|  |
 **gitBranch** | **String**|  | [optional]

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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

