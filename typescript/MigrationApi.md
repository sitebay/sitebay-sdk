# .MigrationApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMigration**](MigrationApi.md#createMigration) | **POST** /api/v1/migration | Create a migration
[**deleteMigration**](MigrationApi.md#deleteMigration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
[**getMigrations**](MigrationApi.md#getMigrations) | **GET** /api/v1/migration | Get Migrations


# **createMigration**
> Migration createMigration()

Request a new site migration by providing your old host's domain and your site's login details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MigrationApi(configuration);

let body:.MigrationApiCreateMigrationRequest = {
  // string
  currentUrl: "currentUrl_example",
  // string
  wordpressPassword: "wordpressPassword_example",
  // string
  wordpressUser: "wordpressUser_example",
  // string (optional)
  extra: "extra_example",
  // string (optional)
  ftpAddress: "ftpAddress_example",
  // string (optional)
  ftpPassword: "ftpPassword_example",
  // string (optional)
  ftpUser: "ftpUser_example",
  // string (optional)
  host: "host_example",
  // string (optional)
  hostPassword: "hostPassword_example",
  // string (optional)
  hostUser: "hostUser_example",
  // string (optional)
  migrationType: "migrationType_example",
  // HttpFile (optional)
  zipFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // string (optional)
  zipFileName: "zipFileName_example",
};

apiInstance.createMigration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentUrl** | [**string**] |  | defaults to undefined
 **wordpressPassword** | [**string**] |  | defaults to undefined
 **wordpressUser** | [**string**] |  | defaults to undefined
 **extra** | [**string**] |  | (optional) defaults to undefined
 **ftpAddress** | [**string**] |  | (optional) defaults to undefined
 **ftpPassword** | [**string**] |  | (optional) defaults to undefined
 **ftpUser** | [**string**] |  | (optional) defaults to undefined
 **host** | [**string**] |  | (optional) defaults to undefined
 **hostPassword** | [**string**] |  | (optional) defaults to undefined
 **hostUser** | [**string**] |  | (optional) defaults to undefined
 **migrationType** | [**string**] |  | (optional) defaults to undefined
 **zipFile** | [**HttpFile**] |  | (optional) defaults to undefined
 **zipFileName** | [**string**] |  | (optional) defaults to undefined


### Return type

**Migration**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new migration&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMigration**
> any deleteMigration()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MigrationApi(configuration);

let body:.MigrationApiDeleteMigrationRequest = {
  // number
  migrationId: 1,
};

apiInstance.deleteMigration(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrationId** | [**number**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMigrations**
> Array<Migration> getMigrations()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MigrationApi(configuration);

let body:any = {};

apiInstance.getMigrations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Migration>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


