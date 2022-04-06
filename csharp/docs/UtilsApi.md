# Org.OpenAPITools.Api.UtilsApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DomainCheck**](UtilsApi.md#domaincheck) | **GET** /api/v1/domain_check | Domain check
[**VerifyGitSyncDirectories**](UtilsApi.md#verifygitsyncdirectories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories



## DomainCheck

> Object DomainCheck (string fqdn)

Domain check

Returns success if a given FQDN's DNS records are correctly set up

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DomainCheckExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UtilsApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Domain check
                Object result = apiInstance.DomainCheck(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UtilsApi.DomainCheck: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyGitSyncDirectories

> Object VerifyGitSyncDirectories (string gitUrl, string gitBranch = null)

Verify Git Sync Directories

Returns success Git Repo's root folder is correctly set up

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class VerifyGitSyncDirectoriesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UtilsApi(Configuration.Default);
            var gitUrl = "gitUrl_example";  // string | 
            var gitBranch = "gitBranch_example";  // string |  (optional) 

            try
            {
                // Verify Git Sync Directories
                Object result = apiInstance.VerifyGitSyncDirectories(gitUrl, gitBranch);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UtilsApi.VerifyGitSyncDirectories: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gitUrl** | **string**|  | 
 **gitBranch** | **string**|  | [optional] 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

