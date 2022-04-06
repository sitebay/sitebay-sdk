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
> Object cancelPlan(planId)

Cancel Plan

Cancel your plan, which will delete it at the end of your cycle

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PlanApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    PlanApi apiInstance = new PlanApi(defaultClient);
    String planId = "planId_example"; // String | 
    try {
      Object result = apiInstance.cancelPlan(planId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlanApi#cancelPlan");
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
 **planId** | **String**|  |

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

<a name="createPlan"></a>
# **createPlan**
> Plan createPlan(UNKNOWN_BASE_TYPE)

Create a Plan

Buy a new plan/team

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PlanApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    PlanApi apiInstance = new PlanApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = {"additional_sites":1,"interval":"month","new_team_name":"Jane's WordPress Design Team","plan_type_name":"business"}; // UNKNOWN_BASE_TYPE | 
    try {
      Plan result = apiInstance.createPlan(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlanApi#createPlan");
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getPlan"></a>
# **getPlan**
> Plan getPlan(planId)

Get Plan

Get a plan by its UUID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PlanApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    PlanApi apiInstance = new PlanApi(defaultClient);
    String planId = "planId_example"; // String | 
    try {
      Plan result = apiInstance.getPlan(planId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlanApi#getPlan");
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
 **planId** | **String**|  |

### Return type

[**Plan**](Plan.md)

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

<a name="getPlans"></a>
# **getPlans**
> List&lt;Plan&gt; getPlans()

Get Plans

Get all your active plans

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PlanApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    PlanApi apiInstance = new PlanApi(defaultClient);
    try {
      List<Plan> result = apiInstance.getPlans();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlanApi#getPlans");
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

[**List&lt;Plan&gt;**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

<a name="previewChange"></a>
# **previewChange**
> Object previewChange(planId, newPlanTypeName, additionalSites)

Preview Plan

Preview the proration change before you upgrade or downgrade your plan

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PlanApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    PlanApi apiInstance = new PlanApi(defaultClient);
    String planId = "planId_example"; // String | 
    String newPlanTypeName = "newPlanTypeName_example"; // String | 
    Integer additionalSites = 56; // Integer | 
    try {
      Object result = apiInstance.previewChange(planId, newPlanTypeName, additionalSites);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlanApi#previewChange");
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
 **planId** | **String**|  |
 **newPlanTypeName** | **String**|  |
 **additionalSites** | **Integer**|  |

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

<a name="uncancelPlan"></a>
# **uncancelPlan**
> Object uncancelPlan(planId)

Uncancel Plan

Uncancel your cancelled plan

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PlanApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    PlanApi apiInstance = new PlanApi(defaultClient);
    String planId = "planId_example"; // String | 
    try {
      Object result = apiInstance.uncancelPlan(planId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlanApi#uncancelPlan");
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
 **planId** | **String**|  |

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

<a name="updatePlan"></a>
# **updatePlan**
> Plan updatePlan(planId, planUpdate)

Update a Plan

Upgrade or downgrade your plan

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PlanApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    PlanApi apiInstance = new PlanApi(defaultClient);
    String planId = "planId_example"; // String | 
    PlanUpdate planUpdate = new PlanUpdate(); // PlanUpdate | 
    try {
      Plan result = apiInstance.updatePlan(planId, planUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PlanApi#updatePlan");
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
 **planId** | **String**|  |
 **planUpdate** | [**PlanUpdate**](PlanUpdate.md)|  |

### Return type

[**Plan**](Plan.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

