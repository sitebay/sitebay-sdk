# MigrationApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMigration**](MigrationApi.md#createMigration) | **POST** /api/v1/migration | Create a migration
[**deleteMigration**](MigrationApi.md#deleteMigration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
[**getMigrations**](MigrationApi.md#getMigrations) | **GET** /api/v1/migration | Get Migrations


<a name="createMigration"></a>
# **createMigration**
> Migration createMigration(currentUrl, wordpressPassword, wordpressUser, extra, ftpAddress, ftpPassword, ftpUser, host, hostPassword, hostUser, migrationType, zipFile, zipFileName)

Create a migration

Request a new site migration by providing your old host&#39;s domain and your site&#39;s login details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.MigrationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    MigrationApi apiInstance = new MigrationApi(defaultClient);
    String currentUrl = "currentUrl_example"; // String | 
    String wordpressPassword = "wordpressPassword_example"; // String | 
    String wordpressUser = "wordpressUser_example"; // String | 
    String extra = "extra_example"; // String | 
    String ftpAddress = "ftpAddress_example"; // String | 
    String ftpPassword = "ftpPassword_example"; // String | 
    String ftpUser = "ftpUser_example"; // String | 
    String host = "host_example"; // String | 
    String hostPassword = "hostPassword_example"; // String | 
    String hostUser = "hostUser_example"; // String | 
    String migrationType = "migrationType_example"; // String | 
    File zipFile = new File("/path/to/file"); // File | 
    String zipFileName = "zipFileName_example"; // String | 
    try {
      Migration result = apiInstance.createMigration(currentUrl, wordpressPassword, wordpressUser, extra, ftpAddress, ftpPassword, ftpUser, host, hostPassword, hostUser, migrationType, zipFile, zipFileName);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MigrationApi#createMigration");
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
 **currentUrl** | **String**|  |
 **wordpressPassword** | **String**|  |
 **wordpressUser** | **String**|  |
 **extra** | **String**|  | [optional]
 **ftpAddress** | **String**|  | [optional]
 **ftpPassword** | **String**|  | [optional]
 **ftpUser** | **String**|  | [optional]
 **host** | **String**|  | [optional]
 **hostPassword** | **String**|  | [optional]
 **hostUser** | **String**|  | [optional]
 **migrationType** | **String**|  | [optional]
 **zipFile** | **File**|  | [optional]
 **zipFileName** | **String**|  | [optional]

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
**201** | Your new migration&#39;s details |  -  |
**422** | Validation Error |  -  |

<a name="deleteMigration"></a>
# **deleteMigration**
> Object deleteMigration(migrationId)

Delete Migration

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.MigrationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    MigrationApi apiInstance = new MigrationApi(defaultClient);
    Integer migrationId = 56; // Integer | 
    try {
      Object result = apiInstance.deleteMigration(migrationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MigrationApi#deleteMigration");
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
 **migrationId** | **Integer**|  |

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

<a name="getMigrations"></a>
# **getMigrations**
> List&lt;Migration&gt; getMigrations()

Get Migrations

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.MigrationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    MigrationApi apiInstance = new MigrationApi(defaultClient);
    try {
      List<Migration> result = apiInstance.getMigrations();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling MigrationApi#getMigrations");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
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
**200** | Successful Response |  -  |

