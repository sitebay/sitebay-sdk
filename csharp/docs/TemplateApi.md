# Org.OpenAPITools.Api.TemplateApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTemplate**](TemplateApi.md#gettemplate) | **GET** /api/v1/template/{template_name} | Get Templates
[**GetTemplates**](TemplateApi.md#gettemplates) | **GET** /api/v1/template | Get Templates
[**SubmitTemplate**](TemplateApi.md#submittemplate) | **POST** /api/v1/template | Create Template



## GetTemplate

> Template GetTemplate (string templateName)

Get Templates

Get details of a ready-made template sites by its name

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTemplateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            var apiInstance = new TemplateApi(Configuration.Default);
            var templateName = "templateName_example";  // string | 

            try
            {
                // Get Templates
                Template result = apiInstance.GetTemplate(templateName);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TemplateApi.GetTemplate: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateName** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplates

> List&lt;Template&gt; GetTemplates ()

Get Templates

Returns a list of ready-made template sites

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTemplatesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            var apiInstance = new TemplateApi(Configuration.Default);

            try
            {
                // Get Templates
                List<Template> result = apiInstance.GetTemplates();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TemplateApi.GetTemplates: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
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
| **200** | Successful Response |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitTemplate

> Template SubmitTemplate (TemplateCreate templateCreate = null)

Create Template

Create a new template by uploading a wpress file

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class SubmitTemplateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TemplateApi(Configuration.Default);
            var templateCreate = new TemplateCreate(); // TemplateCreate |  (optional) 

            try
            {
                // Create Template
                Template result = apiInstance.SubmitTemplate(templateCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TemplateApi.SubmitTemplate: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

