# PlanApi

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


<a name="cancelPlan"></a>
# **cancelPlan**
> kotlin.Any cancelPlan(planId)

Cancel Plan

Cancel your plan, which will delete it at the end of your cycle

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PlanApi()
val planId : kotlin.String = planId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.cancelPlan(planId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlanApi#cancelPlan")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlanApi#cancelPlan")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createPlan"></a>
# **createPlan**
> Plan createPlan(UNKNOWN_BASE_TYPE)

Create a Plan

Buy a new plan/team

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PlanApi()
val UNKNOWN_BASE_TYPE : UNKNOWN_BASE_TYPE = {"additional_sites":1,"interval":"month","new_team_name":"Jane's WordPress Design Team","plan_type_name":"business"} // UNKNOWN_BASE_TYPE | 
try {
    val result : Plan = apiInstance.createPlan(UNKNOWN_BASE_TYPE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlanApi#createPlan")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlanApi#createPlan")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**Plan**](Plan.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPlan"></a>
# **getPlan**
> Plan getPlan(planId)

Get Plan

Get a plan by its UUID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PlanApi()
val planId : kotlin.String = planId_example // kotlin.String | 
try {
    val result : Plan = apiInstance.getPlan(planId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlanApi#getPlan")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlanApi#getPlan")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **kotlin.String**|  |

### Return type

[**Plan**](Plan.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlans"></a>
# **getPlans**
> kotlin.collections.List&lt;Plan&gt; getPlans()

Get Plans

Get all your active plans

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PlanApi()
try {
    val result : kotlin.collections.List<Plan> = apiInstance.getPlans()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlanApi#getPlans")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlanApi#getPlans")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;Plan&gt;**](Plan.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="previewChange"></a>
# **previewChange**
> kotlin.Any previewChange(planId, newPlanTypeName, additionalSites)

Preview Plan

Preview the proration change before you upgrade or downgrade your plan

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PlanApi()
val planId : kotlin.String = planId_example // kotlin.String | 
val newPlanTypeName : kotlin.String = newPlanTypeName_example // kotlin.String | 
val additionalSites : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : kotlin.Any = apiInstance.previewChange(planId, newPlanTypeName, additionalSites)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlanApi#previewChange")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlanApi#previewChange")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **kotlin.String**|  |
 **newPlanTypeName** | **kotlin.String**|  |
 **additionalSites** | **kotlin.Int**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="uncancelPlan"></a>
# **uncancelPlan**
> kotlin.Any uncancelPlan(planId)

Uncancel Plan

Uncancel your cancelled plan

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PlanApi()
val planId : kotlin.String = planId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.uncancelPlan(planId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlanApi#uncancelPlan")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlanApi#uncancelPlan")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePlan"></a>
# **updatePlan**
> Plan updatePlan(planId, planUpdate)

Update a Plan

Upgrade or downgrade your plan

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = PlanApi()
val planId : kotlin.String = planId_example // kotlin.String | 
val planUpdate : PlanUpdate =  // PlanUpdate | 
try {
    val result : Plan = apiInstance.updatePlan(planId, planUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PlanApi#updatePlan")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PlanApi#updatePlan")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planId** | **kotlin.String**|  |
 **planUpdate** | [**PlanUpdate**](PlanUpdate.md)|  |

### Return type

[**Plan**](Plan.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

