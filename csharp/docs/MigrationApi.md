# Org.OpenAPITools.Api.MigrationApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateMigration**](MigrationApi.md#createmigration) | **POST** /api/v1/migration | Create a migration
[**DeleteMigration**](MigrationApi.md#deletemigration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
[**GetMigrations**](MigrationApi.md#getmigrations) | **GET** /api/v1/migration | Get Migrations



## CreateMigration

> Migration CreateMigration (string currentUrl, string wordpressPassword, string wordpressUser, string extra = null, string ftpAddress = null, string ftpPassword = null, string ftpUser = null, string host = null, string hostPassword = null, string hostUser = null, string migrationType = null, System.IO.Stream zipFile = null, string zipFileName = null)

Create a migration

Request a new site migration by providing your old host's domain and your site's login details

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateMigrationExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new MigrationApi(Configuration.Default);
            var currentUrl = "currentUrl_example";  // string | 
            var wordpressPassword = "wordpressPassword_example";  // string | 
            var wordpressUser = "wordpressUser_example";  // string | 
            var extra = "extra_example";  // string |  (optional) 
            var ftpAddress = "ftpAddress_example";  // string |  (optional) 
            var ftpPassword = "ftpPassword_example";  // string |  (optional) 
            var ftpUser = "ftpUser_example";  // string |  (optional) 
            var host = "host_example";  // string |  (optional) 
            var hostPassword = "hostPassword_example";  // string |  (optional) 
            var hostUser = "hostUser_example";  // string |  (optional) 
            var migrationType = "migrationType_example";  // string |  (optional) 
            var zipFile = new System.IO.MemoryStream(System.IO.File.ReadAllBytes("/path/to/file.txt"));  // System.IO.Stream |  (optional) 
            var zipFileName = "zipFileName_example";  // string |  (optional) 

            try
            {
                // Create a migration
                Migration result = apiInstance.CreateMigration(currentUrl, wordpressPassword, wordpressUser, extra, ftpAddress, ftpPassword, ftpUser, host, hostPassword, hostUser, migrationType, zipFile, zipFileName);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling MigrationApi.CreateMigration: " + e.Message );
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
 **currentUrl** | **string**|  | 
 **wordpressPassword** | **string**|  | 
 **wordpressUser** | **string**|  | 
 **extra** | **string**|  | [optional] 
 **ftpAddress** | **string**|  | [optional] 
 **ftpPassword** | **string**|  | [optional] 
 **ftpUser** | **string**|  | [optional] 
 **host** | **string**|  | [optional] 
 **hostPassword** | **string**|  | [optional] 
 **hostUser** | **string**|  | [optional] 
 **migrationType** | **string**|  | [optional] 
 **zipFile** | **System.IO.Stream**|  | [optional] 
 **zipFileName** | **string**|  | [optional] 

### Return type

[**Migration**](Migration.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Your new migration&#39;s details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteMigration

> Object DeleteMigration (int migrationId)

Delete Migration

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteMigrationExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new MigrationApi(Configuration.Default);
            var migrationId = 56;  // int | 

            try
            {
                // Delete Migration
                Object result = apiInstance.DeleteMigration(migrationId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling MigrationApi.DeleteMigration: " + e.Message );
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
 **migrationId** | **int**|  | 

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


## GetMigrations

> List&lt;Migration&gt; GetMigrations ()

Get Migrations

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetMigrationsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new MigrationApi(Configuration.Default);

            try
            {
                // Get Migrations
                List<Migration> result = apiInstance.GetMigrations();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling MigrationApi.GetMigrations: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**List&lt;Migration&gt;**](Migration.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

