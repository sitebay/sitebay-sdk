# RegionApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRegion**](RegionApi.md#getRegion) | **GET** /api/v1/region/{region_id} | Get a Region
[**getRegions**](RegionApi.md#getRegions) | **GET** /api/v1/region | Get Regions


<a name="getRegion"></a>
# **getRegion**
> Region getRegion(regionId)

Get a Region

Get details of a region by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RegionApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");

    RegionApi apiInstance = new RegionApi(defaultClient);
    Integer regionId = 56; // Integer | 
    try {
      Region result = apiInstance.getRegion(regionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RegionApi#getRegion");
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
 **regionId** | **Integer**|  |

### Return type

[**Region**](Region.md)

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

<a name="getRegions"></a>
# **getRegions**
> List&lt;Region&gt; getRegions()

Get Regions

Get details of all regions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RegionApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");

    RegionApi apiInstance = new RegionApi(defaultClient);
    try {
      List<Region> result = apiInstance.getRegions();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RegionApi#getRegions");
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

[**List&lt;Region&gt;**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

