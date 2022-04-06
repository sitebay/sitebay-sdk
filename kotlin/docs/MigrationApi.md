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
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = MigrationApi()
val currentUrl : kotlin.String = currentUrl_example // kotlin.String | 
val wordpressPassword : kotlin.String = wordpressPassword_example // kotlin.String | 
val wordpressUser : kotlin.String = wordpressUser_example // kotlin.String | 
val extra : kotlin.String = extra_example // kotlin.String | 
val ftpAddress : kotlin.String = ftpAddress_example // kotlin.String | 
val ftpPassword : kotlin.String = ftpPassword_example // kotlin.String | 
val ftpUser : kotlin.String = ftpUser_example // kotlin.String | 
val host : kotlin.String = host_example // kotlin.String | 
val hostPassword : kotlin.String = hostPassword_example // kotlin.String | 
val hostUser : kotlin.String = hostUser_example // kotlin.String | 
val migrationType : kotlin.String = migrationType_example // kotlin.String | 
val zipFile : java.io.File = BINARY_DATA_HERE // java.io.File | 
val zipFileName : kotlin.String = zipFileName_example // kotlin.String | 
try {
    val result : Migration = apiInstance.createMigration(currentUrl, wordpressPassword, wordpressUser, extra, ftpAddress, ftpPassword, ftpUser, host, hostPassword, hostUser, migrationType, zipFile, zipFileName)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MigrationApi#createMigration")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MigrationApi#createMigration")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentUrl** | **kotlin.String**|  |
 **wordpressPassword** | **kotlin.String**|  |
 **wordpressUser** | **kotlin.String**|  |
 **extra** | **kotlin.String**|  | [optional]
 **ftpAddress** | **kotlin.String**|  | [optional]
 **ftpPassword** | **kotlin.String**|  | [optional]
 **ftpUser** | **kotlin.String**|  | [optional]
 **host** | **kotlin.String**|  | [optional]
 **hostPassword** | **kotlin.String**|  | [optional]
 **hostUser** | **kotlin.String**|  | [optional]
 **migrationType** | **kotlin.String**|  | [optional]
 **zipFile** | **java.io.File**|  | [optional]
 **zipFileName** | **kotlin.String**|  | [optional]

### Return type

[**Migration**](Migration.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteMigration"></a>
# **deleteMigration**
> kotlin.Any deleteMigration(migrationId)

Delete Migration

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = MigrationApi()
val migrationId : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : kotlin.Any = apiInstance.deleteMigration(migrationId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MigrationApi#deleteMigration")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MigrationApi#deleteMigration")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrationId** | **kotlin.Int**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMigrations"></a>
# **getMigrations**
> kotlin.collections.List&lt;Migration&gt; getMigrations()

Get Migrations

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = MigrationApi()
try {
    val result : kotlin.collections.List<Migration> = apiInstance.getMigrations()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MigrationApi#getMigrations")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MigrationApi#getMigrations")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;Migration&gt;**](Migration.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

