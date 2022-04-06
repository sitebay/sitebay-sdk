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
> Object addMailDns(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.addMailDns(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#addMailDns");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="addMailDns_0"></a>
# **addMailDns_0**
> Object addMailDns_0(fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.addMailDns_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#addMailDns_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="changeDevMode"></a>
# **changeDevMode**
> Object changeDevMode(fqdn, value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String value = "value_example"; // String | 
    try {
      Object result = apiInstance.changeDevMode(fqdn, value);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#changeDevMode");
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
 **fqdn** | **String**|  |
 **value** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="changeDevMode_0"></a>
# **changeDevMode_0**
> Object changeDevMode_0(fqdn, value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String value = "value_example"; // String | 
    try {
      Object result = apiInstance.changeDevMode_0(fqdn, value);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#changeDevMode_0");
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
 **fqdn** | **String**|  |
 **value** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="clearCache"></a>
# **clearCache**
> Object clearCache(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.clearCache(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#clearCache");
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
 **fqdn** | **String**|  |

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

<a name="clearCache_0"></a>
# **clearCache_0**
> Object clearCache_0(fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.clearCache_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#clearCache_0");
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
 **fqdn** | **String**|  |

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

<a name="commitSiteStage"></a>
# **commitSiteStage**
> Object commitSiteStage(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.commitSiteStage(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#commitSiteStage");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="commitSiteStage_0"></a>
# **commitSiteStage_0**
> Object commitSiteStage_0(fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.commitSiteStage_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#commitSiteStage_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="createEmail"></a>
# **createEmail**
> Object createEmail(fqdn, userEmailCreate)

Create Email

Create a custom email account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    UserEmailCreate userEmailCreate = new UserEmailCreate(); // UserEmailCreate | 
    try {
      Object result = apiInstance.createEmail(fqdn, userEmailCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createEmail");
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
 **fqdn** | **String**|  |
 **userEmailCreate** | [**UserEmailCreate**](UserEmailCreate.md)|  | [optional]

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
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="createEmail_0"></a>
# **createEmail_0**
> Object createEmail_0(fqdn, userEmailCreate)

Create Email

Create a custom email account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    UserEmailCreate userEmailCreate = new UserEmailCreate(); // UserEmailCreate | 
    try {
      Object result = apiInstance.createEmail_0(fqdn, userEmailCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createEmail_0");
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
 **fqdn** | **String**|  |
 **userEmailCreate** | [**UserEmailCreate**](UserEmailCreate.md)|  | [optional]

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
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="createExternalPath"></a>
# **createExternalPath**
> Object createExternalPath(fqdn, externalPathCreate)

Create External Path

Connect an external URL to your site on a subpath

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    ExternalPathCreate externalPathCreate = new ExternalPathCreate(); // ExternalPathCreate | 
    try {
      Object result = apiInstance.createExternalPath(fqdn, externalPathCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createExternalPath");
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
 **fqdn** | **String**|  |
 **externalPathCreate** | [**ExternalPathCreate**](ExternalPathCreate.md)|  | [optional]

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
**200** | ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

<a name="createExternalPath_0"></a>
# **createExternalPath_0**
> Object createExternalPath_0(fqdn, externalPathCreate)

Create External Path

Connect an external URL to your site on a subpath

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    ExternalPathCreate externalPathCreate = new ExternalPathCreate(); // ExternalPathCreate | 
    try {
      Object result = apiInstance.createExternalPath_0(fqdn, externalPathCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createExternalPath_0");
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
 **fqdn** | **String**|  |
 **externalPathCreate** | [**ExternalPathCreate**](ExternalPathCreate.md)|  | [optional]

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
**200** | ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

<a name="createSiteLive"></a>
# **createSiteLive**
> SiteLive createSiteLive(UNKNOWN_BASE_TYPE)

Create a site

Create a new site by providing your domain and your site&#39;s WordPress details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = {"fqdn":"www.example.org","team_id":"$MY_TEAM_UUID","wordpressBlogName":"Bob Law's Dog Blog","wordpressEmail":"admin@example.org","wordpressFirstName":"Bob","wordpressLastName":"Law","wordpressPassword":"A strong password","wordpressUsername":"bob2002"}; // UNKNOWN_BASE_TYPE | 
    try {
      SiteLive result = apiInstance.createSiteLive(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createSiteLive");
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

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new site&#39;s details |  -  |
**422** | Validation Error |  -  |

<a name="createSiteLive_0"></a>
# **createSiteLive_0**
> SiteLive createSiteLive_0(UNKNOWN_BASE_TYPE)

Create a site

Create a new site by providing your domain and your site&#39;s WordPress details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = {"fqdn":"www.example.org","team_id":"$MY_TEAM_UUID","wordpressBlogName":"Bob Law's Dog Blog","wordpressEmail":"admin@example.org","wordpressFirstName":"Bob","wordpressLastName":"Law","wordpressPassword":"A strong password","wordpressUsername":"bob2002"}; // UNKNOWN_BASE_TYPE | 
    try {
      SiteLive result = apiInstance.createSiteLive_0(UNKNOWN_BASE_TYPE);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createSiteLive_0");
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

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new site&#39;s details |  -  |
**422** | Validation Error |  -  |

<a name="createSiteStage"></a>
# **createSiteStage**
> Object createSiteStage(fqdn, siteStageCreate)

Create a Staging site

Create a staging site on which you can test changes

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    SiteStageCreate siteStageCreate = new SiteStageCreate(); // SiteStageCreate | 
    try {
      Object result = apiInstance.createSiteStage(fqdn, siteStageCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createSiteStage");
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
 **fqdn** | **String**|  |
 **siteStageCreate** | [**SiteStageCreate**](SiteStageCreate.md)|  | [optional]

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
**200** | SiteStageSchema |  -  |
**422** | Validation Error |  -  |

<a name="createSiteStage_0"></a>
# **createSiteStage_0**
> Object createSiteStage_0(fqdn, siteStageCreate)

Create a Staging site

Create a staging site on which you can test changes

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    SiteStageCreate siteStageCreate = new SiteStageCreate(); // SiteStageCreate | 
    try {
      Object result = apiInstance.createSiteStage_0(fqdn, siteStageCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createSiteStage_0");
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
 **fqdn** | **String**|  |
 **siteStageCreate** | [**SiteStageCreate**](SiteStageCreate.md)|  | [optional]

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
**200** | SiteStageSchema |  -  |
**422** | Validation Error |  -  |

<a name="createTag"></a>
# **createTag**
> Tag createTag(fqdn, tagCreate)

Create tag

Create a tag for organizational purposes for your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    TagCreate tagCreate = new TagCreate(); // TagCreate | 
    try {
      Tag result = apiInstance.createTag(fqdn, tagCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createTag");
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
 **fqdn** | **String**|  |
 **tagCreate** | [**TagCreate**](TagCreate.md)|  | [optional]

### Return type

[**Tag**](Tag.md)

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

<a name="createTag_0"></a>
# **createTag_0**
> Tag createTag_0(fqdn, tagCreate)

Create tag

Create a tag for organizational purposes for your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    TagCreate tagCreate = new TagCreate(); // TagCreate | 
    try {
      Tag result = apiInstance.createTag_0(fqdn, tagCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#createTag_0");
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
 **fqdn** | **String**|  |
 **tagCreate** | [**TagCreate**](TagCreate.md)|  | [optional]

### Return type

[**Tag**](Tag.md)

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

<a name="deleteDnsRecord"></a>
# **deleteDnsRecord**
> Object deleteDnsRecord(dnsId, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String dnsId = "dnsId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteDnsRecord(dnsId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteDnsRecord");
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
 **dnsId** | **String**|  |
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteDnsRecord_0"></a>
# **deleteDnsRecord_0**
> Object deleteDnsRecord_0(dnsId, fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String dnsId = "dnsId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteDnsRecord_0(dnsId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteDnsRecord_0");
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
 **dnsId** | **String**|  |
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteEmail"></a>
# **deleteEmail**
> Object deleteEmail(fqdn, userEmailAddress)

Delete Email

Delete a custom email account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String userEmailAddress = "userEmailAddress_example"; // String | 
    try {
      Object result = apiInstance.deleteEmail(fqdn, userEmailAddress);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteEmail");
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
 **fqdn** | **String**|  |
 **userEmailAddress** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteEmail_0"></a>
# **deleteEmail_0**
> Object deleteEmail_0(fqdn, userEmailAddress)

Delete Email

Delete a custom email account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String userEmailAddress = "userEmailAddress_example"; // String | 
    try {
      Object result = apiInstance.deleteEmail_0(fqdn, userEmailAddress);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteEmail_0");
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
 **fqdn** | **String**|  |
 **userEmailAddress** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteExternalPath"></a>
# **deleteExternalPath**
> Object deleteExternalPath(externalPathId, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String externalPathId = "externalPathId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteExternalPath(externalPathId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteExternalPath");
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
 **externalPathId** | **String**|  |
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteExternalPath_0"></a>
# **deleteExternalPath_0**
> Object deleteExternalPath_0(externalPathId, fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String externalPathId = "externalPathId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteExternalPath_0(externalPathId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteExternalPath_0");
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
 **externalPathId** | **String**|  |
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteSiteLive"></a>
# **deleteSiteLive**
> Object deleteSiteLive(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteSiteLive(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteSiteLive");
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
 **fqdn** | **String**|  |

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

<a name="deleteSiteLive_0"></a>
# **deleteSiteLive_0**
> Object deleteSiteLive_0(fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteSiteLive_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteSiteLive_0");
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
 **fqdn** | **String**|  |

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

<a name="deleteSiteStage"></a>
# **deleteSiteStage**
> Object deleteSiteStage(fqdn)

Delete Stage Site

Delete your staging site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteSiteStage(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteSiteStage");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteSiteStage_0"></a>
# **deleteSiteStage_0**
> Object deleteSiteStage_0(fqdn)

Delete Stage Site

Delete your staging site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.deleteSiteStage_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteSiteStage_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="deleteTag"></a>
# **deleteTag**
> List&lt;Tag&gt; deleteTag(tagId, fqdn)

Get a tag

Get a tag by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String tagId = "tagId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      List<Tag> result = apiInstance.deleteTag(tagId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteTag");
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
 **tagId** | **String**|  |
 **fqdn** | **String**|  |

### Return type

[**List&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="deleteTag_0"></a>
# **deleteTag_0**
> List&lt;Tag&gt; deleteTag_0(tagId, fqdn)

Get a tag

Get a tag by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String tagId = "tagId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      List<Tag> result = apiInstance.deleteTag_0(tagId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#deleteTag_0");
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
 **tagId** | **String**|  |
 **fqdn** | **String**|  |

### Return type

[**List&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="disableFirewall"></a>
# **disableFirewall**
> Object disableFirewall(fqdn)

Disable the firewall

Disable wp-login firewall

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.disableFirewall(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#disableFirewall");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="disableFirewall_0"></a>
# **disableFirewall_0**
> Object disableFirewall_0(fqdn)

Disable the firewall

Disable wp-login firewall

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.disableFirewall_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#disableFirewall_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="enableFirewall"></a>
# **enableFirewall**
> Object enableFirewall(fqdn)

Enable the firewall

Enable the wp-login firewall

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.enableFirewall(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#enableFirewall");
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
 **fqdn** | **String**|  |

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
**200** | JSON list of allowed IPs |  -  |
**422** | Validation Error |  -  |

<a name="enableFirewall_0"></a>
# **enableFirewall_0**
> Object enableFirewall_0(fqdn)

Enable the firewall

Enable the wp-login firewall

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.enableFirewall_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#enableFirewall_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON list of allowed IPs |  -  |
**422** | Validation Error |  -  |

<a name="getDnsRecords"></a>
# **getDnsRecords**
> Object getDnsRecords(fqdn)

Get DNS records

Get a nameserver configured site&#39;s DNS records

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getDnsRecords(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getDnsRecords");
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
 **fqdn** | **String**|  |

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
**200** | JSON list of DNS records |  -  |
**422** | Validation Error |  -  |

<a name="getDnsRecords_0"></a>
# **getDnsRecords_0**
> Object getDnsRecords_0(fqdn)

Get DNS records

Get a nameserver configured site&#39;s DNS records

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getDnsRecords_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getDnsRecords_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON list of DNS records |  -  |
**422** | Validation Error |  -  |

<a name="getEmails"></a>
# **getEmails**
> Object getEmails(fqdn)

Get Emails

Get all custom email accounts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getEmails(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getEmails");
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
 **fqdn** | **String**|  |

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
**200** | List of UserEmailSchema |  -  |
**422** | Validation Error |  -  |

<a name="getEmails_0"></a>
# **getEmails_0**
> Object getEmails_0(fqdn)

Get Emails

Get all custom email accounts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getEmails_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getEmails_0");
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
 **fqdn** | **String**|  |

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
**200** | List of UserEmailSchema |  -  |
**422** | Validation Error |  -  |

<a name="getExternalPaths"></a>
# **getExternalPaths**
> Object getExternalPaths(fqdn)

Get External Paths

Get details about your site&#39;s external path configs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getExternalPaths(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getExternalPaths");
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
 **fqdn** | **String**|  |

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
**200** | List of ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

<a name="getExternalPaths_0"></a>
# **getExternalPaths_0**
> Object getExternalPaths_0(fqdn)

Get External Paths

Get details about your site&#39;s external path configs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getExternalPaths_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getExternalPaths_0");
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
 **fqdn** | **String**|  |

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
**200** | List of ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

<a name="getFilesAtPoint"></a>
# **getFilesAtPoint**
> Object getFilesAtPoint(fqdn, restorePoint)

PIT Files

Get a list of wp-content files at a point in time

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    OffsetDateTime restorePoint = OffsetDateTime.now(); // OffsetDateTime | 
    try {
      Object result = apiInstance.getFilesAtPoint(fqdn, restorePoint);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getFilesAtPoint");
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
 **fqdn** | **String**|  |
 **restorePoint** | **OffsetDateTime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="getFilesAtPoint_0"></a>
# **getFilesAtPoint_0**
> Object getFilesAtPoint_0(fqdn, restorePoint)

PIT Files

Get a list of wp-content files at a point in time

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    OffsetDateTime restorePoint = OffsetDateTime.now(); // OffsetDateTime | 
    try {
      Object result = apiInstance.getFilesAtPoint_0(fqdn, restorePoint);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getFilesAtPoint_0");
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
 **fqdn** | **String**|  |
 **restorePoint** | **OffsetDateTime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="getMailDns"></a>
# **getMailDns**
> Object getMailDns(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getMailDns(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getMailDns");
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
 **fqdn** | **String**|  |

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
**200** | JSON list of requisite DNS records |  -  |
**422** | Validation Error |  -  |

<a name="getMailDns_0"></a>
# **getMailDns_0**
> Object getMailDns_0(fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getMailDns_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getMailDns_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON list of requisite DNS records |  -  |
**422** | Validation Error |  -  |

<a name="getPitRestore"></a>
# **getPitRestore**
> Object getPitRestore(pitRestoreId, fqdn)

Get PIT Restore

Get the results of a site&#39;s restore to a previous point in time

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String pitRestoreId = "pitRestoreId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getPitRestore(pitRestoreId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getPitRestore");
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
 **pitRestoreId** | **String**|  |
 **fqdn** | **String**|  |

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
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

<a name="getPitRestore_0"></a>
# **getPitRestore_0**
> Object getPitRestore_0(pitRestoreId, fqdn)

Get PIT Restore

Get the results of a site&#39;s restore to a previous point in time

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String pitRestoreId = "pitRestoreId_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getPitRestore_0(pitRestoreId, fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getPitRestore_0");
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
 **pitRestoreId** | **String**|  |
 **fqdn** | **String**|  |

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
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

<a name="getPitRestores"></a>
# **getPitRestores**
> Object getPitRestores(fqdn)

Get PIT Restores

Get all the results of a site&#39;s restores to a previous point in time

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getPitRestores(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getPitRestores");
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
 **fqdn** | **String**|  |

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
**200** | PIT Restores details |  -  |
**422** | Validation Error |  -  |

<a name="getPitRestores_0"></a>
# **getPitRestores_0**
> Object getPitRestores_0(fqdn)

Get PIT Restores

Get all the results of a site&#39;s restores to a previous point in time

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.getPitRestores_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getPitRestores_0");
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
 **fqdn** | **String**|  |

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
**200** | PIT Restores details |  -  |
**422** | Validation Error |  -  |

<a name="getSiteLive"></a>
# **getSiteLive**
> SiteLive getSiteLive(fqdn)

Get your live site

Get details about your live site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      SiteLive result = apiInstance.getSiteLive(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getSiteLive");
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
 **fqdn** | **String**|  |

### Return type

[**SiteLive**](SiteLive.md)

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

<a name="getSiteLive_0"></a>
# **getSiteLive_0**
> SiteLive getSiteLive_0(fqdn)

Get your live site

Get details about your live site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      SiteLive result = apiInstance.getSiteLive_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getSiteLive_0");
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
 **fqdn** | **String**|  |

### Return type

[**SiteLive**](SiteLive.md)

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

<a name="getSitePlanUsage"></a>
# **getSitePlanUsage**
> Object getSitePlanUsage(fqdn, start, end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    OffsetDateTime start = OffsetDateTime.now(); // OffsetDateTime | 
    OffsetDateTime end = OffsetDateTime.now(); // OffsetDateTime | 
    try {
      Object result = apiInstance.getSitePlanUsage(fqdn, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getSitePlanUsage");
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
 **fqdn** | **String**|  |
 **start** | **OffsetDateTime**|  |
 **end** | **OffsetDateTime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="getSitePlanUsage_0"></a>
# **getSitePlanUsage_0**
> Object getSitePlanUsage_0(fqdn, start, end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    OffsetDateTime start = OffsetDateTime.now(); // OffsetDateTime | 
    OffsetDateTime end = OffsetDateTime.now(); // OffsetDateTime | 
    try {
      Object result = apiInstance.getSitePlanUsage_0(fqdn, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getSitePlanUsage_0");
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
 **fqdn** | **String**|  |
 **start** | **OffsetDateTime**|  |
 **end** | **OffsetDateTime**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="getSitesLive"></a>
# **getSitesLive**
> List&lt;SiteLive&gt; getSitesLive()

Get your sites

Get details about all of your live sites

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    try {
      List<SiteLive> result = apiInstance.getSitesLive();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getSitesLive");
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

[**List&lt;SiteLive&gt;**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

<a name="getSitesLive_0"></a>
# **getSitesLive_0**
> List&lt;SiteLive&gt; getSitesLive_0()

Get your sites

Get details about all of your live sites

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    try {
      List<SiteLive> result = apiInstance.getSitesLive_0();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getSitesLive_0");
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

[**List&lt;SiteLive&gt;**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

<a name="getTags"></a>
# **getTags**
> List&lt;Tag&gt; getTags(fqdn)

Get tags

Get all the tags for your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      List<Tag> result = apiInstance.getTags(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getTags");
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
 **fqdn** | **String**|  |

### Return type

[**List&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getTags_0"></a>
# **getTags_0**
> List&lt;Tag&gt; getTags_0(fqdn)

Get tags

Get all the tags for your site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      List<Tag> result = apiInstance.getTags_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#getTags_0");
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
 **fqdn** | **String**|  |

### Return type

[**List&lt;Tag&gt;**](Tag.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="modifyFirewall"></a>
# **modifyFirewall**
> Object modifyFirewall(fqdn, ipAddress, addOrDel)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String ipAddress = "ipAddress_example"; // String | 
    String addOrDel = "add"; // String | 
    try {
      Object result = apiInstance.modifyFirewall(fqdn, ipAddress, addOrDel);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#modifyFirewall");
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
 **fqdn** | **String**|  |
 **ipAddress** | **String**|  |
 **addOrDel** | **String**|  | [optional] [default to add]

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="modifyFirewall_0"></a>
# **modifyFirewall_0**
> Object modifyFirewall_0(fqdn, ipAddress, addOrDel)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String ipAddress = "ipAddress_example"; // String | 
    String addOrDel = "add"; // String | 
    try {
      Object result = apiInstance.modifyFirewall_0(fqdn, ipAddress, addOrDel);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#modifyFirewall_0");
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
 **fqdn** | **String**|  |
 **ipAddress** | **String**|  |
 **addOrDel** | **String**|  | [optional] [default to add]

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="restoreSite"></a>
# **restoreSite**
> Object restoreSite(fqdn, piTRestoreCreate)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    PITRestoreCreate piTRestoreCreate = new PITRestoreCreate(); // PITRestoreCreate | 
    try {
      Object result = apiInstance.restoreSite(fqdn, piTRestoreCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#restoreSite");
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
 **fqdn** | **String**|  |
 **piTRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md)|  |

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
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

<a name="restoreSite_0"></a>
# **restoreSite_0**
> Object restoreSite_0(fqdn, piTRestoreCreate)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    PITRestoreCreate piTRestoreCreate = new PITRestoreCreate(); // PITRestoreCreate | 
    try {
      Object result = apiInstance.restoreSite_0(fqdn, piTRestoreCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#restoreSite_0");
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
 **fqdn** | **String**|  |
 **piTRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md)|  |

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
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

<a name="shellCmdSiteLive"></a>
# **shellCmdSiteLive**
> Object shellCmdSiteLive(fqdn, cmd, cwd, autoTrackDir, stage)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String cmd = "cmd_example"; // String | 
    String cwd = "/bitnami/wordpress/wp-content"; // String | 
    Boolean autoTrackDir = false; // Boolean | 
    Boolean stage = false; // Boolean | 
    try {
      Object result = apiInstance.shellCmdSiteLive(fqdn, cmd, cwd, autoTrackDir, stage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#shellCmdSiteLive");
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
 **fqdn** | **String**|  |
 **cmd** | **String**|  |
 **cwd** | **String**|  | [optional] [default to /bitnami/wordpress/wp-content]
 **autoTrackDir** | **Boolean**|  | [optional] [default to false]
 **stage** | **Boolean**|  | [optional] [default to false]

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

<a name="shellCmdSiteLive_0"></a>
# **shellCmdSiteLive_0**
> Object shellCmdSiteLive_0(fqdn, cmd, cwd, autoTrackDir, stage)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String cmd = "cmd_example"; // String | 
    String cwd = "/bitnami/wordpress/wp-content"; // String | 
    Boolean autoTrackDir = false; // Boolean | 
    Boolean stage = false; // Boolean | 
    try {
      Object result = apiInstance.shellCmdSiteLive_0(fqdn, cmd, cwd, autoTrackDir, stage);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#shellCmdSiteLive_0");
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
 **fqdn** | **String**|  |
 **cmd** | **String**|  |
 **cwd** | **String**|  | [optional] [default to /bitnami/wordpress/wp-content]
 **autoTrackDir** | **Boolean**|  | [optional] [default to false]
 **stage** | **Boolean**|  | [optional] [default to false]

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

<a name="updateDnsRecord"></a>
# **updateDnsRecord**
> Object updateDnsRecord(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String dnsType = "dnsType_example"; // String | 
    String dnsHostname = "dnsHostname_example"; // String | 
    String dnsContent = "dnsContent_example"; // String | 
    String dnsId = "dnsId_example"; // String | 
    Integer dnsPriority = 0; // Integer | 
    Integer dnsTtl = 1; // Integer | 
    try {
      Object result = apiInstance.updateDnsRecord(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#updateDnsRecord");
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
 **fqdn** | **String**|  |
 **dnsType** | **String**|  |
 **dnsHostname** | **String**|  |
 **dnsContent** | **String**|  |
 **dnsId** | **String**|  | [optional]
 **dnsPriority** | **Integer**|  | [optional] [default to 0]
 **dnsTtl** | **Integer**|  | [optional] [default to 1]

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="updateDnsRecord_0"></a>
# **updateDnsRecord_0**
> Object updateDnsRecord_0(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    String dnsType = "dnsType_example"; // String | 
    String dnsHostname = "dnsHostname_example"; // String | 
    String dnsContent = "dnsContent_example"; // String | 
    String dnsId = "dnsId_example"; // String | 
    Integer dnsPriority = 0; // Integer | 
    Integer dnsTtl = 1; // Integer | 
    try {
      Object result = apiInstance.updateDnsRecord_0(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#updateDnsRecord_0");
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
 **fqdn** | **String**|  |
 **dnsType** | **String**|  |
 **dnsHostname** | **String**|  |
 **dnsContent** | **String**|  |
 **dnsId** | **String**|  | [optional]
 **dnsPriority** | **Integer**|  | [optional] [default to 0]
 **dnsTtl** | **Integer**|  | [optional] [default to 1]

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="updateEmail"></a>
# **updateEmail**
> Object updateEmail(userEmailAddress, fqdn, userEmailUpdate)

Update Email

Update a custom email account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String userEmailAddress = "userEmailAddress_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    UserEmailUpdate userEmailUpdate = new UserEmailUpdate(); // UserEmailUpdate | 
    try {
      Object result = apiInstance.updateEmail(userEmailAddress, fqdn, userEmailUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#updateEmail");
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
 **userEmailAddress** | **String**|  |
 **fqdn** | **String**|  |
 **userEmailUpdate** | [**UserEmailUpdate**](UserEmailUpdate.md)|  | [optional]

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="updateEmail_0"></a>
# **updateEmail_0**
> Object updateEmail_0(userEmailAddress, fqdn, userEmailUpdate)

Update Email

Update a custom email account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String userEmailAddress = "userEmailAddress_example"; // String | 
    String fqdn = "fqdn_example"; // String | 
    UserEmailUpdate userEmailUpdate = new UserEmailUpdate(); // UserEmailUpdate | 
    try {
      Object result = apiInstance.updateEmail_0(userEmailAddress, fqdn, userEmailUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#updateEmail_0");
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
 **userEmailAddress** | **String**|  |
 **fqdn** | **String**|  |
 **userEmailUpdate** | [**UserEmailUpdate**](UserEmailUpdate.md)|  | [optional]

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="updateSiteLive"></a>
# **updateSiteLive**
> SiteLive updateSiteLive(fqdn, siteLiveUpdate)

Update a site

Update a site&#39;s details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    SiteLiveUpdate siteLiveUpdate = new SiteLiveUpdate(); // SiteLiveUpdate | 
    try {
      SiteLive result = apiInstance.updateSiteLive(fqdn, siteLiveUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#updateSiteLive");
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
 **fqdn** | **String**|  |
 **siteLiveUpdate** | [**SiteLiveUpdate**](SiteLiveUpdate.md)|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your site&#39;s details |  -  |
**422** | Validation Error |  -  |

<a name="updateSiteLive_0"></a>
# **updateSiteLive_0**
> SiteLive updateSiteLive_0(fqdn, siteLiveUpdate)

Update a site

Update a site&#39;s details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    SiteLiveUpdate siteLiveUpdate = new SiteLiveUpdate(); // SiteLiveUpdate | 
    try {
      SiteLive result = apiInstance.updateSiteLive_0(fqdn, siteLiveUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#updateSiteLive_0");
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
 **fqdn** | **String**|  |
 **siteLiveUpdate** | [**SiteLiveUpdate**](SiteLiveUpdate.md)|  |

### Return type

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your site&#39;s details |  -  |
**422** | Validation Error |  -  |

<a name="validateMxRecords"></a>
# **validateMxRecords**
> Object validateMxRecords(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.validateMxRecords(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#validateMxRecords");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

<a name="validateMxRecords_0"></a>
# **validateMxRecords_0**
> Object validateMxRecords_0(fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SiteLiveApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    SiteLiveApi apiInstance = new SiteLiveApi(defaultClient);
    String fqdn = "fqdn_example"; // String | 
    try {
      Object result = apiInstance.validateMxRecords_0(fqdn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SiteLiveApi#validateMxRecords_0");
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
 **fqdn** | **String**|  |

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
**200** | JSON |  -  |
**422** | Validation Error |  -  |

