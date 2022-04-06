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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TemplateApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");

    TemplateApi apiInstance = new TemplateApi(defaultClient);
    String templateName = "templateName_example"; // String | 
    try {
      Template result = apiInstance.getTemplate(templateName);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TemplateApi#getTemplate");
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
 **templateName** | **String**|  |

### Return type

[**Template**](Template.md)

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

<a name="getTemplates"></a>
# **getTemplates**
> List&lt;Template&gt; getTemplates()

Get Templates

Returns a list of ready-made template sites

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TemplateApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");

    TemplateApi apiInstance = new TemplateApi(defaultClient);
    try {
      List<Template> result = apiInstance.getTemplates();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TemplateApi#getTemplates");
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

[**List&lt;Template&gt;**](Template.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

<a name="submitTemplate"></a>
# **submitTemplate**
> Template submitTemplate(templateCreate)

Create Template

Create a new template by uploading a wpress file

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TemplateApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TemplateApi apiInstance = new TemplateApi(defaultClient);
    TemplateCreate templateCreate = new TemplateCreate(); // TemplateCreate | 
    try {
      Template result = apiInstance.submitTemplate(templateCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TemplateApi#submitTemplate");
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
 **templateCreate** | [**TemplateCreate**](TemplateCreate.md)|  | [optional]

### Return type

[**Template**](Template.md)

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

