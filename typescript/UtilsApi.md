# .UtilsApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainCheck**](UtilsApi.md#domainCheck) | **GET** /api/v1/domain_check | Domain check
[**verifyGitSyncDirectories**](UtilsApi.md#verifyGitSyncDirectories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


# **domainCheck**
> any domainCheck()

Returns success if a given FQDN's DNS records are correctly set up

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UtilsApi(configuration);

let body:.UtilsApiDomainCheckRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.domainCheck(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


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

# **verifyGitSyncDirectories**
> any verifyGitSyncDirectories()

Returns success Git Repo's root folder is correctly set up

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UtilsApi(configuration);

let body:.UtilsApiVerifyGitSyncDirectoriesRequest = {
  // string
  gitUrl: "git_url_example",
  // string (optional)
  gitBranch: "git_branch_example",
};

apiInstance.verifyGitSyncDirectories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gitUrl** | [**string**] |  | defaults to undefined
 **gitBranch** | [**string**] |  | (optional) defaults to undefined


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


