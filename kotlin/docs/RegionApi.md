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
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RegionApi()
val regionId : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : Region = apiInstance.getRegion(regionId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RegionApi#getRegion")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RegionApi#getRegion")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionId** | **kotlin.Int**|  |

### Return type

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRegions"></a>
# **getRegions**
> kotlin.collections.List&lt;Region&gt; getRegions()

Get Regions

Get details of all regions

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = RegionApi()
try {
    val result : kotlin.collections.List<Region> = apiInstance.getRegions()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling RegionApi#getRegions")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling RegionApi#getRegions")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;Region&gt;**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

