# Org.OpenAPITools.Api.AccountApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeletePaymentMethod**](AccountApi.md#deletepaymentmethod) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
[**DeletePaymentMethod_0**](AccountApi.md#deletepaymentmethod_0) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
[**GetPaymentMethods**](AccountApi.md#getpaymentmethods) | **GET** /api/v1/account/payment_method | Get payment methods
[**GetPaymentMethods_0**](AccountApi.md#getpaymentmethods_0) | **GET** /api/v1/account/payment_method | Get payment methods
[**GetTax**](AccountApi.md#gettax) | **GET** /api/v1/account/get_tax | Get tax
[**GetTax_0**](AccountApi.md#gettax_0) | **GET** /api/v1/account/get_tax | Get tax
[**GetUserMe**](AccountApi.md#getuserme) | **GET** /api/v1/account | Get own user
[**GetUserMe_0**](AccountApi.md#getuserme_0) | **GET** /api/v1/account | Get own user
[**RevokeOauth**](AccountApi.md#revokeoauth) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
[**RevokeOauth_0**](AccountApi.md#revokeoauth_0) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
[**UpdatePaymentMethod**](AccountApi.md#updatepaymentmethod) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
[**UpdatePaymentMethod_0**](AccountApi.md#updatepaymentmethod_0) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
[**UpdateUser**](AccountApi.md#updateuser) | **PUT** /api/v1/account | Update user
[**UpdateUser_0**](AccountApi.md#updateuser_0) | **PUT** /api/v1/account | Update user



## DeletePaymentMethod

> Object DeletePaymentMethod (string paymentMethodId)

Delete payment method

Delete a non-default payment method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeletePaymentMethodExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var paymentMethodId = "paymentMethodId_example";  // string | 

            try
            {
                // Delete payment method
                Object result = apiInstance.DeletePaymentMethod(paymentMethodId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.DeletePaymentMethod: " + e.Message );
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
 **paymentMethodId** | **string**|  | 

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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeletePaymentMethod_0

> Object DeletePaymentMethod_0 (string paymentMethodId)

Delete payment method

Delete a non-default payment method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeletePaymentMethod_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var paymentMethodId = "paymentMethodId_example";  // string | 

            try
            {
                // Delete payment method
                Object result = apiInstance.DeletePaymentMethod_0(paymentMethodId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.DeletePaymentMethod_0: " + e.Message );
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
 **paymentMethodId** | **string**|  | 

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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPaymentMethods

> Object GetPaymentMethods ()

Get payment methods

Get your payment methods

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetPaymentMethodsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);

            try
            {
                // Get payment methods
                Object result = apiInstance.GetPaymentMethods();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.GetPaymentMethods: " + e.Message );
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON list of your payment methods |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPaymentMethods_0

> Object GetPaymentMethods_0 ()

Get payment methods

Get your payment methods

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetPaymentMethods_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);

            try
            {
                // Get payment methods
                Object result = apiInstance.GetPaymentMethods_0();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.GetPaymentMethods_0: " + e.Message );
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON list of your payment methods |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTax

> Object GetTax ()

Get tax

Get your default card's sales tax percentage

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTaxExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);

            try
            {
                // Get tax
                Object result = apiInstance.GetTax();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.GetTax: " + e.Message );
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTax_0

> Object GetTax_0 ()

Get tax

Get your default card's sales tax percentage

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTax_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);

            try
            {
                // Get tax
                Object result = apiInstance.GetTax_0();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.GetTax_0: " + e.Message );
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | JSON |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserMe

> Object GetUserMe ()

Get own user

Get your user data

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetUserMeExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);

            try
            {
                // Get own user
                Object result = apiInstance.GetUserMe();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.GetUserMe: " + e.Message );
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Your API token&#39;s user details |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserMe_0

> Object GetUserMe_0 ()

Get own user

Get your user data

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetUserMe_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);

            try
            {
                // Get own user
                Object result = apiInstance.GetUserMe_0();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.GetUserMe_0: " + e.Message );
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

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Your API token&#39;s user details |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RevokeOauth

> Object RevokeOauth (string provider)

Revoke OAuth

Revoke your Git OAuth permission

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RevokeOauthExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var provider = "provider_example";  // string | 

            try
            {
                // Revoke OAuth
                Object result = apiInstance.RevokeOauth(provider);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.RevokeOauth: " + e.Message );
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
 **provider** | **string**|  | 

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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RevokeOauth_0

> Object RevokeOauth_0 (string provider)

Revoke OAuth

Revoke your Git OAuth permission

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RevokeOauth_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var provider = "provider_example";  // string | 

            try
            {
                // Revoke OAuth
                Object result = apiInstance.RevokeOauth_0(provider);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.RevokeOauth_0: " + e.Message );
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
 **provider** | **string**|  | 

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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePaymentMethod

> Object UpdatePaymentMethod (string paymentMethodId)

Update payment method

Select your default payment method to charge every billing cycle

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdatePaymentMethodExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var paymentMethodId = "paymentMethodId_example";  // string | 

            try
            {
                // Update payment method
                Object result = apiInstance.UpdatePaymentMethod(paymentMethodId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.UpdatePaymentMethod: " + e.Message );
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
 **paymentMethodId** | **string**|  | 

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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePaymentMethod_0

> Object UpdatePaymentMethod_0 (string paymentMethodId)

Update payment method

Select your default payment method to charge every billing cycle

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdatePaymentMethod_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var paymentMethodId = "paymentMethodId_example";  // string | 

            try
            {
                // Update payment method
                Object result = apiInstance.UpdatePaymentMethod_0(paymentMethodId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.UpdatePaymentMethod_0: " + e.Message );
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
 **paymentMethodId** | **string**|  | 

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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUser

> Object UpdateUser (UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null)

Update user

Update your user data

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateUserExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE |  (optional) 

            try
            {
                // Update user
                Object result = apiInstance.UpdateUser(UNKNOWN_BASE_TYPE);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.UpdateUser: " + e.Message );
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Your updated user details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUser_0

> Object UpdateUser_0 (UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null)

Update user

Update your user data

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateUser_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountApi(Configuration.Default);
            var UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE |  (optional) 

            try
            {
                // Update user
                Object result = apiInstance.UpdateUser_0(UNKNOWN_BASE_TYPE);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountApi.UpdateUser_0: " + e.Message );
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Your updated user details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

