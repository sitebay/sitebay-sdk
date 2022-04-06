# .PlanApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPlan**](PlanApi.md#cancelPlan) | **DELETE** /api/v1/plan/{plan_id} | Cancel Plan
[**createPlan**](PlanApi.md#createPlan) | **POST** /api/v1/plan | Create a Plan
[**getPlan**](PlanApi.md#getPlan) | **GET** /api/v1/plan/{plan_id} | Get Plan
[**getPlans**](PlanApi.md#getPlans) | **GET** /api/v1/plan | Get Plans
[**previewChange**](PlanApi.md#previewChange) | **GET** /api/v1/plan/{plan_id}/preview | Preview Plan
[**uncancelPlan**](PlanApi.md#uncancelPlan) | **PATCH** /api/v1/plan/{plan_id} | Uncancel Plan
[**updatePlan**](PlanApi.md#updatePlan) | **PUT** /api/v1/plan/{plan_id} | Update a Plan


# **cancelPlan**
> any cancelPlan()

Cancel your plan, which will delete it at the end of your cycle

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlanApi(configuration);

let body:.PlanApiCancelPlanRequest = {
  // string
  planId: "plan_id_example",
};

apiInstance.cancelPlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] |  | defaults to undefined


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

# **createPlan**
> Plan createPlan()

Buy a new plan/team

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlanApi(configuration);

let body:.PlanApiCreatePlanRequest = {
  // UNKNOWN_BASE_TYPE (optional)
  UNKNOWN_BASE_TYPE: null,
};

apiInstance.createPlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | **UNKNOWN_BASE_TYPE**|  |


### Return type

**Plan**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPlan**
> Plan getPlan()

Get a plan by its UUID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlanApi(configuration);

let body:.PlanApiGetPlanRequest = {
  // string
  planId: "plan_id_example",
};

apiInstance.getPlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] |  | defaults to undefined


### Return type

**Plan**

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

# **getPlans**
> Array<Plan> getPlans()

Get all your active plans

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlanApi(configuration);

let body:any = {};

apiInstance.getPlans(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Plan>**

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

# **previewChange**
> any previewChange()

Preview the proration change before you upgrade or downgrade your plan

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlanApi(configuration);

let body:.PlanApiPreviewChangeRequest = {
  // string
  planId: "plan_id_example",
  // string
  newPlanTypeName: "new_plan_type_name_example",
  // number
  additionalSites: 1,
};

apiInstance.previewChange(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] |  | defaults to undefined
 **newPlanTypeName** | [**string**] |  | defaults to undefined
 **additionalSites** | [**number**] |  | defaults to undefined


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

# **uncancelPlan**
> any uncancelPlan()

Uncancel your cancelled plan

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlanApi(configuration);

let body:.PlanApiUncancelPlanRequest = {
  // string
  planId: "plan_id_example",
};

apiInstance.uncancelPlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | [**string**] |  | defaults to undefined


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

# **updatePlan**
> Plan updatePlan(planUpdate)

Upgrade or downgrade your plan

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlanApi(configuration);

let body:.PlanApiUpdatePlanRequest = {
  // string
  planId: "plan_id_example",
  // PlanUpdate
  planUpdate: {
    additionalSites: 1,
    planTypeName: "planTypeName_example",
  },
};

apiInstance.updatePlan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planUpdate** | **PlanUpdate**|  |
 **planId** | [**string**] |  | defaults to undefined


### Return type

**Plan**

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


