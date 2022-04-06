# .TemplateApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTemplate**](TemplateApi.md#getTemplate) | **GET** /api/v1/template/{template_name} | Get Templates
[**getTemplates**](TemplateApi.md#getTemplates) | **GET** /api/v1/template | Get Templates
[**submitTemplate**](TemplateApi.md#submitTemplate) | **POST** /api/v1/template | Create Template


# **getTemplate**
> Template getTemplate()

Get details of a ready-made template sites by its name

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TemplateApi(configuration);

let body:.TemplateApiGetTemplateRequest = {
  // string
  templateName: "template_name_example",
};

apiInstance.getTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateName** | [**string**] |  | defaults to undefined


### Return type

**Template**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTemplates**
> Array<Template> getTemplates()

Returns a list of ready-made template sites

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TemplateApi(configuration);

let body:any = {};

apiInstance.getTemplates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Template>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **submitTemplate**
> Template submitTemplate()

Create a new template by uploading a wpress file

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TemplateApi(configuration);

let body:.TemplateApiSubmitTemplateRequest = {
  // TemplateCreate (optional)
  templateCreate: {
    fullDescription: "fullDescription_example",
    name: "name_example",
    plugins: "plugins_example",
    quickstart: "quickstart_example",
    shortDescription: "shortDescription_example",
    tag: "tag_example",
    wpressUrl: "wpressUrl_example",
  },
};

apiInstance.submitTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateCreate** | **TemplateCreate**|  |


### Return type

**Template**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


