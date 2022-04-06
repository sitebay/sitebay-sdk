# AccountApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePaymentMethod**](AccountApi.md#deletePaymentMethod) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
[**deletePaymentMethod_0**](AccountApi.md#deletePaymentMethod_0) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
[**getPaymentMethods**](AccountApi.md#getPaymentMethods) | **GET** /api/v1/account/payment_method | Get payment methods
[**getPaymentMethods_0**](AccountApi.md#getPaymentMethods_0) | **GET** /api/v1/account/payment_method | Get payment methods
[**getTax**](AccountApi.md#getTax) | **GET** /api/v1/account/get_tax | Get tax
[**getTax_0**](AccountApi.md#getTax_0) | **GET** /api/v1/account/get_tax | Get tax
[**getUserMe**](AccountApi.md#getUserMe) | **GET** /api/v1/account | Get own user
[**getUserMe_0**](AccountApi.md#getUserMe_0) | **GET** /api/v1/account | Get own user
[**revokeOauth**](AccountApi.md#revokeOauth) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
[**revokeOauth_0**](AccountApi.md#revokeOauth_0) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
[**updatePaymentMethod**](AccountApi.md#updatePaymentMethod) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
[**updatePaymentMethod_0**](AccountApi.md#updatePaymentMethod_0) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
[**updateUser**](AccountApi.md#updateUser) | **PUT** /api/v1/account | Update user
[**updateUser_0**](AccountApi.md#updateUser_0) | **PUT** /api/v1/account | Update user


<a name="deletePaymentMethod"></a>
# **deletePaymentMethod**
> kotlin.Any deletePaymentMethod(paymentMethodId)

Delete payment method

Delete a non-default payment method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val paymentMethodId : kotlin.String = paymentMethodId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deletePaymentMethod(paymentMethodId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#deletePaymentMethod")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#deletePaymentMethod")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePaymentMethod_0"></a>
# **deletePaymentMethod_0**
> kotlin.Any deletePaymentMethod_0(paymentMethodId)

Delete payment method

Delete a non-default payment method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val paymentMethodId : kotlin.String = paymentMethodId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deletePaymentMethod_0(paymentMethodId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#deletePaymentMethod_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#deletePaymentMethod_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPaymentMethods"></a>
# **getPaymentMethods**
> kotlin.Any getPaymentMethods()

Get payment methods

Get your payment methods

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
try {
    val result : kotlin.Any = apiInstance.getPaymentMethods()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#getPaymentMethods")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#getPaymentMethods")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPaymentMethods_0"></a>
# **getPaymentMethods_0**
> kotlin.Any getPaymentMethods_0()

Get payment methods

Get your payment methods

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
try {
    val result : kotlin.Any = apiInstance.getPaymentMethods_0()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#getPaymentMethods_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#getPaymentMethods_0")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTax"></a>
# **getTax**
> kotlin.Any getTax()

Get tax

Get your default card&#39;s sales tax percentage

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
try {
    val result : kotlin.Any = apiInstance.getTax()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#getTax")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#getTax")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTax_0"></a>
# **getTax_0**
> kotlin.Any getTax_0()

Get tax

Get your default card&#39;s sales tax percentage

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
try {
    val result : kotlin.Any = apiInstance.getTax_0()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#getTax_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#getTax_0")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserMe"></a>
# **getUserMe**
> kotlin.Any getUserMe()

Get own user

Get your user data

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
try {
    val result : kotlin.Any = apiInstance.getUserMe()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#getUserMe")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#getUserMe")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserMe_0"></a>
# **getUserMe_0**
> kotlin.Any getUserMe_0()

Get own user

Get your user data

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
try {
    val result : kotlin.Any = apiInstance.getUserMe_0()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#getUserMe_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#getUserMe_0")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="revokeOauth"></a>
# **revokeOauth**
> kotlin.Any revokeOauth(provider)

Revoke OAuth

Revoke your Git OAuth permission

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val provider : kotlin.String = provider_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.revokeOauth(provider)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#revokeOauth")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#revokeOauth")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="revokeOauth_0"></a>
# **revokeOauth_0**
> kotlin.Any revokeOauth_0(provider)

Revoke OAuth

Revoke your Git OAuth permission

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val provider : kotlin.String = provider_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.revokeOauth_0(provider)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#revokeOauth_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#revokeOauth_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePaymentMethod"></a>
# **updatePaymentMethod**
> kotlin.Any updatePaymentMethod(paymentMethodId)

Update payment method

Select your default payment method to charge every billing cycle

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val paymentMethodId : kotlin.String = paymentMethodId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.updatePaymentMethod(paymentMethodId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#updatePaymentMethod")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#updatePaymentMethod")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePaymentMethod_0"></a>
# **updatePaymentMethod_0**
> kotlin.Any updatePaymentMethod_0(paymentMethodId)

Update payment method

Select your default payment method to charge every billing cycle

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val paymentMethodId : kotlin.String = paymentMethodId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.updatePaymentMethod_0(paymentMethodId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#updatePaymentMethod_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#updatePaymentMethod_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentMethodId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> kotlin.Any updateUser(UNKNOWN_BASE_TYPE)

Update user

Update your user data

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val UNKNOWN_BASE_TYPE : UNKNOWN_BASE_TYPE = {"address":"string","address2":"string","city":"string","country":"string","default_region_id":1,"full_name":"string","password":"a very strong password","phone_number":"string","post_code":"string","state":"string","tfa":0} // UNKNOWN_BASE_TYPE | 
try {
    val result : kotlin.Any = apiInstance.updateUser(UNKNOWN_BASE_TYPE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#updateUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#updateUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser_0"></a>
# **updateUser_0**
> kotlin.Any updateUser_0(UNKNOWN_BASE_TYPE)

Update user

Update your user data

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AccountApi()
val UNKNOWN_BASE_TYPE : UNKNOWN_BASE_TYPE = {"address":"string","address2":"string","city":"string","country":"string","default_region_id":1,"full_name":"string","password":"a very strong password","phone_number":"string","post_code":"string","state":"string","tfa":0} // UNKNOWN_BASE_TYPE | 
try {
    val result : kotlin.Any = apiInstance.updateUser_0(UNKNOWN_BASE_TYPE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AccountApi#updateUser_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AccountApi#updateUser_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

