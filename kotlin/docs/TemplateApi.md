# TemplateApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTemplate**](TemplateApi.md#getTemplate) | **GET** /api/v1/template/{template_name} | Get Templates
[**getTemplates**](TemplateApi.md#getTemplates) | **GET** /api/v1/template | Get Templates
[**submitTemplate**](TemplateApi.md#submitTemplate) | **POST** /api/v1/template | Create Template


<a name="getTemplate"></a>
# **getTemplate**
> Template getTemplate(templateName)

Get Templates

Get details of a ready-made template sites by its name

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TemplateApi()
val templateName : kotlin.String = templateName_example // kotlin.String | 
try {
    val result : Template = apiInstance.getTemplate(templateName)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TemplateApi#getTemplate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TemplateApi#getTemplate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateName** | **kotlin.String**|  |

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemplates"></a>
# **getTemplates**
> kotlin.collections.List&lt;Template&gt; getTemplates()

Get Templates

Returns a list of ready-made template sites

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TemplateApi()
try {
    val result : kotlin.collections.List<Template> = apiInstance.getTemplates()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TemplateApi#getTemplates")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TemplateApi#getTemplates")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;Template&gt;**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submitTemplate"></a>
# **submitTemplate**
> Template submitTemplate(templateCreate)

Create Template

Create a new template by uploading a wpress file

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TemplateApi()
val templateCreate : TemplateCreate = {"full_description":"A clothing store template based on shopify and woocommerce","name":"my_ecommerce_template","plugins":"wordfence,woocommerce,elementor","quickstart":"https://github.com/wanda1987/mytemplate/README.md","short_description":"An easy way to launch a storefront quick.","tag":"business","wpress_url":"https://github.com/wanda1987/mytemplate/template.wpress"} // TemplateCreate | 
try {
    val result : Template = apiInstance.submitTemplate(templateCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TemplateApi#submitTemplate")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TemplateApi#submitTemplate")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateCreate** | [**TemplateCreate**](TemplateCreate.md)|  | [optional]

### Return type

[**Template**](Template.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

