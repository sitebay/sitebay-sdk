# SiteLiveApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMailDns**](SiteLiveApi.md#addMailDns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**addMailDns_0**](SiteLiveApi.md#addMailDns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**changeDevMode**](SiteLiveApi.md#changeDevMode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**changeDevMode_0**](SiteLiveApi.md#changeDevMode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**clearCache**](SiteLiveApi.md#clearCache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**clearCache_0**](SiteLiveApi.md#clearCache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**commitSiteStage**](SiteLiveApi.md#commitSiteStage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**commitSiteStage_0**](SiteLiveApi.md#commitSiteStage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**createEmail**](SiteLiveApi.md#createEmail) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**createEmail_0**](SiteLiveApi.md#createEmail_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**createExternalPath**](SiteLiveApi.md#createExternalPath) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**createExternalPath_0**](SiteLiveApi.md#createExternalPath_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**createSiteLive**](SiteLiveApi.md#createSiteLive) | **POST** /api/v1/site_live | Create a site
[**createSiteLive_0**](SiteLiveApi.md#createSiteLive_0) | **POST** /api/v1/site_live | Create a site
[**createSiteStage**](SiteLiveApi.md#createSiteStage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**createSiteStage_0**](SiteLiveApi.md#createSiteStage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**createTag**](SiteLiveApi.md#createTag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**createTag_0**](SiteLiveApi.md#createTag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**deleteDnsRecord**](SiteLiveApi.md#deleteDnsRecord) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**deleteDnsRecord_0**](SiteLiveApi.md#deleteDnsRecord_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**deleteEmail**](SiteLiveApi.md#deleteEmail) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**deleteEmail_0**](SiteLiveApi.md#deleteEmail_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**deleteExternalPath**](SiteLiveApi.md#deleteExternalPath) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**deleteExternalPath_0**](SiteLiveApi.md#deleteExternalPath_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**deleteSiteLive**](SiteLiveApi.md#deleteSiteLive) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**deleteSiteLive_0**](SiteLiveApi.md#deleteSiteLive_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**deleteSiteStage**](SiteLiveApi.md#deleteSiteStage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**deleteSiteStage_0**](SiteLiveApi.md#deleteSiteStage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**deleteTag**](SiteLiveApi.md#deleteTag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**deleteTag_0**](SiteLiveApi.md#deleteTag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**disableFirewall**](SiteLiveApi.md#disableFirewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**disableFirewall_0**](SiteLiveApi.md#disableFirewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**enableFirewall**](SiteLiveApi.md#enableFirewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**enableFirewall_0**](SiteLiveApi.md#enableFirewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**getDnsRecords**](SiteLiveApi.md#getDnsRecords) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**getDnsRecords_0**](SiteLiveApi.md#getDnsRecords_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**getEmails**](SiteLiveApi.md#getEmails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**getEmails_0**](SiteLiveApi.md#getEmails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**getExternalPaths**](SiteLiveApi.md#getExternalPaths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**getExternalPaths_0**](SiteLiveApi.md#getExternalPaths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**getFilesAtPoint**](SiteLiveApi.md#getFilesAtPoint) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**getFilesAtPoint_0**](SiteLiveApi.md#getFilesAtPoint_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**getMailDns**](SiteLiveApi.md#getMailDns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**getMailDns_0**](SiteLiveApi.md#getMailDns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**getPitRestore**](SiteLiveApi.md#getPitRestore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**getPitRestore_0**](SiteLiveApi.md#getPitRestore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**getPitRestores**](SiteLiveApi.md#getPitRestores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**getPitRestores_0**](SiteLiveApi.md#getPitRestores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**getSiteLive**](SiteLiveApi.md#getSiteLive) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**getSiteLive_0**](SiteLiveApi.md#getSiteLive_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**getSitePlanUsage**](SiteLiveApi.md#getSitePlanUsage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**getSitePlanUsage_0**](SiteLiveApi.md#getSitePlanUsage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**getSitesLive**](SiteLiveApi.md#getSitesLive) | **GET** /api/v1/site_live | Get your sites
[**getSitesLive_0**](SiteLiveApi.md#getSitesLive_0) | **GET** /api/v1/site_live | Get your sites
[**getTags**](SiteLiveApi.md#getTags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**getTags_0**](SiteLiveApi.md#getTags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**modifyFirewall**](SiteLiveApi.md#modifyFirewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**modifyFirewall_0**](SiteLiveApi.md#modifyFirewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**restoreSite**](SiteLiveApi.md#restoreSite) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**restoreSite_0**](SiteLiveApi.md#restoreSite_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**shellCmdSiteLive**](SiteLiveApi.md#shellCmdSiteLive) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**shellCmdSiteLive_0**](SiteLiveApi.md#shellCmdSiteLive_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**updateDnsRecord**](SiteLiveApi.md#updateDnsRecord) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**updateDnsRecord_0**](SiteLiveApi.md#updateDnsRecord_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**updateEmail**](SiteLiveApi.md#updateEmail) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**updateEmail_0**](SiteLiveApi.md#updateEmail_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**updateSiteLive**](SiteLiveApi.md#updateSiteLive) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**updateSiteLive_0**](SiteLiveApi.md#updateSiteLive_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**validateMxRecords**](SiteLiveApi.md#validateMxRecords) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
[**validateMxRecords_0**](SiteLiveApi.md#validateMxRecords_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation


<a name="addMailDns"></a>
# **addMailDns**
> kotlin.Any addMailDns(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.addMailDns(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#addMailDns")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#addMailDns")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="addMailDns_0"></a>
# **addMailDns_0**
> kotlin.Any addMailDns_0(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.addMailDns_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#addMailDns_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#addMailDns_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="changeDevMode"></a>
# **changeDevMode**
> kotlin.Any changeDevMode(fqdn, `value`)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val `value` : kotlin.String = `value`_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.changeDevMode(fqdn, `value`)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#changeDevMode")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#changeDevMode")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **&#x60;value&#x60;** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="changeDevMode_0"></a>
# **changeDevMode_0**
> kotlin.Any changeDevMode_0(fqdn, `value`)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val `value` : kotlin.String = `value`_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.changeDevMode_0(fqdn, `value`)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#changeDevMode_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#changeDevMode_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **&#x60;value&#x60;** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clearCache"></a>
# **clearCache**
> kotlin.Any clearCache(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.clearCache(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#clearCache")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#clearCache")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clearCache_0"></a>
# **clearCache_0**
> kotlin.Any clearCache_0(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.clearCache_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#clearCache_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#clearCache_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="commitSiteStage"></a>
# **commitSiteStage**
> kotlin.Any commitSiteStage(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.commitSiteStage(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#commitSiteStage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#commitSiteStage")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="commitSiteStage_0"></a>
# **commitSiteStage_0**
> kotlin.Any commitSiteStage_0(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.commitSiteStage_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#commitSiteStage_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#commitSiteStage_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createEmail"></a>
# **createEmail**
> kotlin.Any createEmail(fqdn, userEmailCreate)

Create Email

Create a custom email account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val userEmailCreate : UserEmailCreate = {"forward_to_email":"boblaw1989_@gmail.com","local_part":"bob"} // UserEmailCreate | 
try {
    val result : kotlin.Any = apiInstance.createEmail(fqdn, userEmailCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createEmail")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createEmail")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **userEmailCreate** | [**UserEmailCreate**](UserEmailCreate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEmail_0"></a>
# **createEmail_0**
> kotlin.Any createEmail_0(fqdn, userEmailCreate)

Create Email

Create a custom email account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val userEmailCreate : UserEmailCreate = {"forward_to_email":"boblaw1989_@gmail.com","local_part":"bob"} // UserEmailCreate | 
try {
    val result : kotlin.Any = apiInstance.createEmail_0(fqdn, userEmailCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createEmail_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createEmail_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **userEmailCreate** | [**UserEmailCreate**](UserEmailCreate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createExternalPath"></a>
# **createExternalPath**
> kotlin.Any createExternalPath(fqdn, externalPathCreate)

Create External Path

Connect an external URL to your site on a subpath

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val externalPathCreate : ExternalPathCreate = {"external_name":"sitebaydocsprod.sitebay.ca","path":"/support"} // ExternalPathCreate | 
try {
    val result : kotlin.Any = apiInstance.createExternalPath(fqdn, externalPathCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createExternalPath")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createExternalPath")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **externalPathCreate** | [**ExternalPathCreate**](ExternalPathCreate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createExternalPath_0"></a>
# **createExternalPath_0**
> kotlin.Any createExternalPath_0(fqdn, externalPathCreate)

Create External Path

Connect an external URL to your site on a subpath

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val externalPathCreate : ExternalPathCreate = {"external_name":"sitebaydocsprod.sitebay.ca","path":"/support"} // ExternalPathCreate | 
try {
    val result : kotlin.Any = apiInstance.createExternalPath_0(fqdn, externalPathCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createExternalPath_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createExternalPath_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **externalPathCreate** | [**ExternalPathCreate**](ExternalPathCreate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSiteLive"></a>
# **createSiteLive**
> SiteLive createSiteLive(UNKNOWN_BASE_TYPE)

Create a site

Create a new site by providing your domain and your site&#39;s WordPress details

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val UNKNOWN_BASE_TYPE : UNKNOWN_BASE_TYPE = {"fqdn":"www.example.org","team_id":"$MY_TEAM_UUID","wordpressBlogName":"Bob Law's Dog Blog","wordpressEmail":"admin@example.org","wordpressFirstName":"Bob","wordpressLastName":"Law","wordpressPassword":"A strong password","wordpressUsername":"bob2002"} // UNKNOWN_BASE_TYPE | 
try {
    val result : SiteLive = apiInstance.createSiteLive(UNKNOWN_BASE_TYPE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createSiteLive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createSiteLive")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**SiteLive**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSiteLive_0"></a>
# **createSiteLive_0**
> SiteLive createSiteLive_0(UNKNOWN_BASE_TYPE)

Create a site

Create a new site by providing your domain and your site&#39;s WordPress details

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val UNKNOWN_BASE_TYPE : UNKNOWN_BASE_TYPE = {"fqdn":"www.example.org","team_id":"$MY_TEAM_UUID","wordpressBlogName":"Bob Law's Dog Blog","wordpressEmail":"admin@example.org","wordpressFirstName":"Bob","wordpressLastName":"Law","wordpressPassword":"A strong password","wordpressUsername":"bob2002"} // UNKNOWN_BASE_TYPE | 
try {
    val result : SiteLive = apiInstance.createSiteLive_0(UNKNOWN_BASE_TYPE)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createSiteLive_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createSiteLive_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional]

### Return type

[**SiteLive**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSiteStage"></a>
# **createSiteStage**
> kotlin.Any createSiteStage(fqdn, siteStageCreate)

Create a Staging site

Create a staging site on which you can test changes

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val siteStageCreate : SiteStageCreate = {"restore_point":"2022-04-06T06:35:33.733141","subdomain":"staging"} // SiteStageCreate | 
try {
    val result : kotlin.Any = apiInstance.createSiteStage(fqdn, siteStageCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createSiteStage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createSiteStage")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **siteStageCreate** | [**SiteStageCreate**](SiteStageCreate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSiteStage_0"></a>
# **createSiteStage_0**
> kotlin.Any createSiteStage_0(fqdn, siteStageCreate)

Create a Staging site

Create a staging site on which you can test changes

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val siteStageCreate : SiteStageCreate = {"restore_point":"2022-04-06T06:35:33.733141","subdomain":"staging"} // SiteStageCreate | 
try {
    val result : kotlin.Any = apiInstance.createSiteStage_0(fqdn, siteStageCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createSiteStage_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createSiteStage_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **siteStageCreate** | [**SiteStageCreate**](SiteStageCreate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTag"></a>
# **createTag**
> Tag createTag(fqdn, tagCreate)

Create tag

Create a tag for organizational purposes for your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val tagCreate : TagCreate = {"name":"customer_id_1251515"} // TagCreate | 
try {
    val result : Tag = apiInstance.createTag(fqdn, tagCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createTag")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **tagCreate** | [**TagCreate**](TagCreate.md)|  | [optional]

### Return type

[**Tag**](Tag.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTag_0"></a>
# **createTag_0**
> Tag createTag_0(fqdn, tagCreate)

Create tag

Create a tag for organizational purposes for your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val tagCreate : TagCreate = {"name":"customer_id_1251515"} // TagCreate | 
try {
    val result : Tag = apiInstance.createTag_0(fqdn, tagCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#createTag_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#createTag_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **tagCreate** | [**TagCreate**](TagCreate.md)|  | [optional]

### Return type

[**Tag**](Tag.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDnsRecord"></a>
# **deleteDnsRecord**
> kotlin.Any deleteDnsRecord(dnsId, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val dnsId : kotlin.String = dnsId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteDnsRecord(dnsId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteDnsRecord")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteDnsRecord")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDnsRecord_0"></a>
# **deleteDnsRecord_0**
> kotlin.Any deleteDnsRecord_0(dnsId, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val dnsId : kotlin.String = dnsId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteDnsRecord_0(dnsId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteDnsRecord_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteDnsRecord_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEmail"></a>
# **deleteEmail**
> kotlin.Any deleteEmail(fqdn, userEmailAddress)

Delete Email

Delete a custom email account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val userEmailAddress : kotlin.String = userEmailAddress_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteEmail(fqdn, userEmailAddress)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteEmail")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteEmail")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **userEmailAddress** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteEmail_0"></a>
# **deleteEmail_0**
> kotlin.Any deleteEmail_0(fqdn, userEmailAddress)

Delete Email

Delete a custom email account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val userEmailAddress : kotlin.String = userEmailAddress_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteEmail_0(fqdn, userEmailAddress)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteEmail_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteEmail_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **userEmailAddress** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteExternalPath"></a>
# **deleteExternalPath**
> kotlin.Any deleteExternalPath(externalPathId, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val externalPathId : kotlin.String = externalPathId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteExternalPath(externalPathId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteExternalPath")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteExternalPath")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalPathId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteExternalPath_0"></a>
# **deleteExternalPath_0**
> kotlin.Any deleteExternalPath_0(externalPathId, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val externalPathId : kotlin.String = externalPathId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteExternalPath_0(externalPathId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteExternalPath_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteExternalPath_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalPathId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSiteLive"></a>
# **deleteSiteLive**
> kotlin.Any deleteSiteLive(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteSiteLive(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteSiteLive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteSiteLive")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSiteLive_0"></a>
# **deleteSiteLive_0**
> kotlin.Any deleteSiteLive_0(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteSiteLive_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteSiteLive_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteSiteLive_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSiteStage"></a>
# **deleteSiteStage**
> kotlin.Any deleteSiteStage(fqdn)

Delete Stage Site

Delete your staging site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteSiteStage(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteSiteStage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteSiteStage")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteSiteStage_0"></a>
# **deleteSiteStage_0**
> kotlin.Any deleteSiteStage_0(fqdn)

Delete Stage Site

Delete your staging site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.deleteSiteStage_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteSiteStage_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteSiteStage_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTag"></a>
# **deleteTag**
> kotlin.collections.List&lt;Tag&gt; deleteTag(tagId, fqdn)

Get a tag

Get a tag by its ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val tagId : kotlin.String = tagId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.collections.List<Tag> = apiInstance.deleteTag(tagId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteTag")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteTag")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.collections.List&lt;Tag&gt;**](Tag.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTag_0"></a>
# **deleteTag_0**
> kotlin.collections.List&lt;Tag&gt; deleteTag_0(tagId, fqdn)

Get a tag

Get a tag by its ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val tagId : kotlin.String = tagId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.collections.List<Tag> = apiInstance.deleteTag_0(tagId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#deleteTag_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#deleteTag_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.collections.List&lt;Tag&gt;**](Tag.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="disableFirewall"></a>
# **disableFirewall**
> kotlin.Any disableFirewall(fqdn)

Disable the firewall

Disable wp-login firewall

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.disableFirewall(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#disableFirewall")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#disableFirewall")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="disableFirewall_0"></a>
# **disableFirewall_0**
> kotlin.Any disableFirewall_0(fqdn)

Disable the firewall

Disable wp-login firewall

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.disableFirewall_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#disableFirewall_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#disableFirewall_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="enableFirewall"></a>
# **enableFirewall**
> kotlin.Any enableFirewall(fqdn)

Enable the firewall

Enable the wp-login firewall

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.enableFirewall(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#enableFirewall")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#enableFirewall")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="enableFirewall_0"></a>
# **enableFirewall_0**
> kotlin.Any enableFirewall_0(fqdn)

Enable the firewall

Enable the wp-login firewall

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.enableFirewall_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#enableFirewall_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#enableFirewall_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDnsRecords"></a>
# **getDnsRecords**
> kotlin.Any getDnsRecords(fqdn)

Get DNS records

Get a nameserver configured site&#39;s DNS records

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getDnsRecords(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getDnsRecords")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getDnsRecords")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDnsRecords_0"></a>
# **getDnsRecords_0**
> kotlin.Any getDnsRecords_0(fqdn)

Get DNS records

Get a nameserver configured site&#39;s DNS records

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getDnsRecords_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getDnsRecords_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getDnsRecords_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmails"></a>
# **getEmails**
> kotlin.Any getEmails(fqdn)

Get Emails

Get all custom email accounts

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getEmails(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getEmails")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getEmails")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmails_0"></a>
# **getEmails_0**
> kotlin.Any getEmails_0(fqdn)

Get Emails

Get all custom email accounts

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getEmails_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getEmails_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getEmails_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalPaths"></a>
# **getExternalPaths**
> kotlin.Any getExternalPaths(fqdn)

Get External Paths

Get details about your site&#39;s external path configs

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getExternalPaths(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getExternalPaths")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getExternalPaths")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExternalPaths_0"></a>
# **getExternalPaths_0**
> kotlin.Any getExternalPaths_0(fqdn)

Get External Paths

Get details about your site&#39;s external path configs

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getExternalPaths_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getExternalPaths_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getExternalPaths_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFilesAtPoint"></a>
# **getFilesAtPoint**
> kotlin.Any getFilesAtPoint(fqdn, restorePoint)

PIT Files

Get a list of wp-content files at a point in time

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val restorePoint : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
try {
    val result : kotlin.Any = apiInstance.getFilesAtPoint(fqdn, restorePoint)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getFilesAtPoint")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getFilesAtPoint")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **restorePoint** | **java.time.OffsetDateTime**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFilesAtPoint_0"></a>
# **getFilesAtPoint_0**
> kotlin.Any getFilesAtPoint_0(fqdn, restorePoint)

PIT Files

Get a list of wp-content files at a point in time

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val restorePoint : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
try {
    val result : kotlin.Any = apiInstance.getFilesAtPoint_0(fqdn, restorePoint)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getFilesAtPoint_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getFilesAtPoint_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **restorePoint** | **java.time.OffsetDateTime**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMailDns"></a>
# **getMailDns**
> kotlin.Any getMailDns(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getMailDns(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getMailDns")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getMailDns")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMailDns_0"></a>
# **getMailDns_0**
> kotlin.Any getMailDns_0(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getMailDns_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getMailDns_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getMailDns_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPitRestore"></a>
# **getPitRestore**
> kotlin.Any getPitRestore(pitRestoreId, fqdn)

Get PIT Restore

Get the results of a site&#39;s restore to a previous point in time

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val pitRestoreId : kotlin.String = pitRestoreId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getPitRestore(pitRestoreId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getPitRestore")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getPitRestore")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pitRestoreId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPitRestore_0"></a>
# **getPitRestore_0**
> kotlin.Any getPitRestore_0(pitRestoreId, fqdn)

Get PIT Restore

Get the results of a site&#39;s restore to a previous point in time

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val pitRestoreId : kotlin.String = pitRestoreId_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getPitRestore_0(pitRestoreId, fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getPitRestore_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getPitRestore_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pitRestoreId** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPitRestores"></a>
# **getPitRestores**
> kotlin.Any getPitRestores(fqdn)

Get PIT Restores

Get all the results of a site&#39;s restores to a previous point in time

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getPitRestores(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getPitRestores")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getPitRestores")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPitRestores_0"></a>
# **getPitRestores_0**
> kotlin.Any getPitRestores_0(fqdn)

Get PIT Restores

Get all the results of a site&#39;s restores to a previous point in time

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.getPitRestores_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getPitRestores_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getPitRestores_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSiteLive"></a>
# **getSiteLive**
> SiteLive getSiteLive(fqdn)

Get your live site

Get details about your live site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : SiteLive = apiInstance.getSiteLive(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getSiteLive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getSiteLive")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSiteLive_0"></a>
# **getSiteLive_0**
> SiteLive getSiteLive_0(fqdn)

Get your live site

Get details about your live site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : SiteLive = apiInstance.getSiteLive_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getSiteLive_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getSiteLive_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSitePlanUsage"></a>
# **getSitePlanUsage**
> kotlin.Any getSitePlanUsage(fqdn, start, end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val start : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val end : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
try {
    val result : kotlin.Any = apiInstance.getSitePlanUsage(fqdn, start, end)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getSitePlanUsage")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getSitePlanUsage")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **start** | **java.time.OffsetDateTime**|  |
 **end** | **java.time.OffsetDateTime**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSitePlanUsage_0"></a>
# **getSitePlanUsage_0**
> kotlin.Any getSitePlanUsage_0(fqdn, start, end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val start : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
val end : java.time.OffsetDateTime = 2013-10-20T19:20:30+01:00 // java.time.OffsetDateTime | 
try {
    val result : kotlin.Any = apiInstance.getSitePlanUsage_0(fqdn, start, end)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getSitePlanUsage_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getSitePlanUsage_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **start** | **java.time.OffsetDateTime**|  |
 **end** | **java.time.OffsetDateTime**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSitesLive"></a>
# **getSitesLive**
> kotlin.collections.List&lt;SiteLive&gt; getSitesLive()

Get your sites

Get details about all of your live sites

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
try {
    val result : kotlin.collections.List<SiteLive> = apiInstance.getSitesLive()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getSitesLive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getSitesLive")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;SiteLive&gt;**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSitesLive_0"></a>
# **getSitesLive_0**
> kotlin.collections.List&lt;SiteLive&gt; getSitesLive_0()

Get your sites

Get details about all of your live sites

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
try {
    val result : kotlin.collections.List<SiteLive> = apiInstance.getSitesLive_0()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getSitesLive_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getSitesLive_0")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;SiteLive&gt;**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTags"></a>
# **getTags**
> kotlin.collections.List&lt;Tag&gt; getTags(fqdn)

Get tags

Get all the tags for your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.collections.List<Tag> = apiInstance.getTags(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getTags")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getTags")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.collections.List&lt;Tag&gt;**](Tag.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTags_0"></a>
# **getTags_0**
> kotlin.collections.List&lt;Tag&gt; getTags_0(fqdn)

Get tags

Get all the tags for your site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.collections.List<Tag> = apiInstance.getTags_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#getTags_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#getTags_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.collections.List&lt;Tag&gt;**](Tag.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyFirewall"></a>
# **modifyFirewall**
> kotlin.Any modifyFirewall(fqdn, ipAddress, addOrDel)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val ipAddress : kotlin.String = ipAddress_example // kotlin.String | 
val addOrDel : kotlin.String = addOrDel_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.modifyFirewall(fqdn, ipAddress, addOrDel)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#modifyFirewall")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#modifyFirewall")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **ipAddress** | **kotlin.String**|  |
 **addOrDel** | **kotlin.String**|  | [optional] [default to &quot;add&quot;]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyFirewall_0"></a>
# **modifyFirewall_0**
> kotlin.Any modifyFirewall_0(fqdn, ipAddress, addOrDel)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val ipAddress : kotlin.String = ipAddress_example // kotlin.String | 
val addOrDel : kotlin.String = addOrDel_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.modifyFirewall_0(fqdn, ipAddress, addOrDel)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#modifyFirewall_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#modifyFirewall_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **ipAddress** | **kotlin.String**|  |
 **addOrDel** | **kotlin.String**|  | [optional] [default to &quot;add&quot;]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="restoreSite"></a>
# **restoreSite**
> kotlin.Any restoreSite(fqdn, piTRestoreCreate)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val piTRestoreCreate : PITRestoreCreate =  // PITRestoreCreate | 
try {
    val result : kotlin.Any = apiInstance.restoreSite(fqdn, piTRestoreCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#restoreSite")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#restoreSite")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **piTRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md)|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="restoreSite_0"></a>
# **restoreSite_0**
> kotlin.Any restoreSite_0(fqdn, piTRestoreCreate)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val piTRestoreCreate : PITRestoreCreate =  // PITRestoreCreate | 
try {
    val result : kotlin.Any = apiInstance.restoreSite_0(fqdn, piTRestoreCreate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#restoreSite_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#restoreSite_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **piTRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md)|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="shellCmdSiteLive"></a>
# **shellCmdSiteLive**
> kotlin.Any shellCmdSiteLive(fqdn, cmd, cwd, autoTrackDir, stage)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val cmd : kotlin.String = cmd_example // kotlin.String | 
val cwd : kotlin.String = cwd_example // kotlin.String | 
val autoTrackDir : kotlin.Boolean = true // kotlin.Boolean | 
val stage : kotlin.Boolean = true // kotlin.Boolean | 
try {
    val result : kotlin.Any = apiInstance.shellCmdSiteLive(fqdn, cmd, cwd, autoTrackDir, stage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#shellCmdSiteLive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#shellCmdSiteLive")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **cmd** | **kotlin.String**|  |
 **cwd** | **kotlin.String**|  | [optional] [default to &quot;/bitnami/wordpress/wp-content&quot;]
 **autoTrackDir** | **kotlin.Boolean**|  | [optional] [default to false]
 **stage** | **kotlin.Boolean**|  | [optional] [default to false]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="shellCmdSiteLive_0"></a>
# **shellCmdSiteLive_0**
> kotlin.Any shellCmdSiteLive_0(fqdn, cmd, cwd, autoTrackDir, stage)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val cmd : kotlin.String = cmd_example // kotlin.String | 
val cwd : kotlin.String = cwd_example // kotlin.String | 
val autoTrackDir : kotlin.Boolean = true // kotlin.Boolean | 
val stage : kotlin.Boolean = true // kotlin.Boolean | 
try {
    val result : kotlin.Any = apiInstance.shellCmdSiteLive_0(fqdn, cmd, cwd, autoTrackDir, stage)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#shellCmdSiteLive_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#shellCmdSiteLive_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **cmd** | **kotlin.String**|  |
 **cwd** | **kotlin.String**|  | [optional] [default to &quot;/bitnami/wordpress/wp-content&quot;]
 **autoTrackDir** | **kotlin.Boolean**|  | [optional] [default to false]
 **stage** | **kotlin.Boolean**|  | [optional] [default to false]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDnsRecord"></a>
# **updateDnsRecord**
> kotlin.Any updateDnsRecord(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val dnsType : kotlin.String = dnsType_example // kotlin.String | 
val dnsHostname : kotlin.String = dnsHostname_example // kotlin.String | 
val dnsContent : kotlin.String = dnsContent_example // kotlin.String | 
val dnsId : kotlin.String = dnsId_example // kotlin.String | 
val dnsPriority : kotlin.Int = 56 // kotlin.Int | 
val dnsTtl : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : kotlin.Any = apiInstance.updateDnsRecord(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#updateDnsRecord")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#updateDnsRecord")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **dnsType** | **kotlin.String**|  |
 **dnsHostname** | **kotlin.String**|  |
 **dnsContent** | **kotlin.String**|  |
 **dnsId** | **kotlin.String**|  | [optional]
 **dnsPriority** | **kotlin.Int**|  | [optional] [default to 0]
 **dnsTtl** | **kotlin.Int**|  | [optional] [default to 1]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDnsRecord_0"></a>
# **updateDnsRecord_0**
> kotlin.Any updateDnsRecord_0(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val dnsType : kotlin.String = dnsType_example // kotlin.String | 
val dnsHostname : kotlin.String = dnsHostname_example // kotlin.String | 
val dnsContent : kotlin.String = dnsContent_example // kotlin.String | 
val dnsId : kotlin.String = dnsId_example // kotlin.String | 
val dnsPriority : kotlin.Int = 56 // kotlin.Int | 
val dnsTtl : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : kotlin.Any = apiInstance.updateDnsRecord_0(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#updateDnsRecord_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#updateDnsRecord_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **dnsType** | **kotlin.String**|  |
 **dnsHostname** | **kotlin.String**|  |
 **dnsContent** | **kotlin.String**|  |
 **dnsId** | **kotlin.String**|  | [optional]
 **dnsPriority** | **kotlin.Int**|  | [optional] [default to 0]
 **dnsTtl** | **kotlin.Int**|  | [optional] [default to 1]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateEmail"></a>
# **updateEmail**
> kotlin.Any updateEmail(userEmailAddress, fqdn, userEmailUpdate)

Update Email

Update a custom email account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val userEmailAddress : kotlin.String = userEmailAddress_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val userEmailUpdate : UserEmailUpdate = {"is_catchall":true,"password":"A very strong password"} // UserEmailUpdate | 
try {
    val result : kotlin.Any = apiInstance.updateEmail(userEmailAddress, fqdn, userEmailUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#updateEmail")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#updateEmail")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailAddress** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |
 **userEmailUpdate** | [**UserEmailUpdate**](UserEmailUpdate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmail_0"></a>
# **updateEmail_0**
> kotlin.Any updateEmail_0(userEmailAddress, fqdn, userEmailUpdate)

Update Email

Update a custom email account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val userEmailAddress : kotlin.String = userEmailAddress_example // kotlin.String | 
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val userEmailUpdate : UserEmailUpdate = {"is_catchall":true,"password":"A very strong password"} // UserEmailUpdate | 
try {
    val result : kotlin.Any = apiInstance.updateEmail_0(userEmailAddress, fqdn, userEmailUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#updateEmail_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#updateEmail_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailAddress** | **kotlin.String**|  |
 **fqdn** | **kotlin.String**|  |
 **userEmailUpdate** | [**UserEmailUpdate**](UserEmailUpdate.md)|  | [optional]

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSiteLive"></a>
# **updateSiteLive**
> SiteLive updateSiteLive(fqdn, siteLiveUpdate)

Update a site

Update a site&#39;s details

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val siteLiveUpdate : SiteLiveUpdate =  // SiteLiveUpdate | 
try {
    val result : SiteLive = apiInstance.updateSiteLive(fqdn, siteLiveUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#updateSiteLive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#updateSiteLive")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **siteLiveUpdate** | [**SiteLiveUpdate**](SiteLiveUpdate.md)|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSiteLive_0"></a>
# **updateSiteLive_0**
> SiteLive updateSiteLive_0(fqdn, siteLiveUpdate)

Update a site

Update a site&#39;s details

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
val siteLiveUpdate : SiteLiveUpdate =  // SiteLiveUpdate | 
try {
    val result : SiteLive = apiInstance.updateSiteLive_0(fqdn, siteLiveUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#updateSiteLive_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#updateSiteLive_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |
 **siteLiveUpdate** | [**SiteLiveUpdate**](SiteLiveUpdate.md)|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateMxRecords"></a>
# **validateMxRecords**
> kotlin.Any validateMxRecords(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.validateMxRecords(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#validateMxRecords")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#validateMxRecords")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validateMxRecords_0"></a>
# **validateMxRecords_0**
> kotlin.Any validateMxRecords_0(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = SiteLiveApi()
val fqdn : kotlin.String = fqdn_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.validateMxRecords_0(fqdn)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling SiteLiveApi#validateMxRecords_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling SiteLiveApi#validateMxRecords_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

