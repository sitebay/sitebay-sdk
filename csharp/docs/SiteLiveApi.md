# Org.OpenAPITools.Api.SiteLiveApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddMailDns**](SiteLiveApi.md#addmaildns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**AddMailDns_0**](SiteLiveApi.md#addmaildns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
[**ChangeDevMode**](SiteLiveApi.md#changedevmode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**ChangeDevMode_0**](SiteLiveApi.md#changedevmode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
[**ClearCache**](SiteLiveApi.md#clearcache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**ClearCache_0**](SiteLiveApi.md#clearcache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
[**CommitSiteStage**](SiteLiveApi.md#commitsitestage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**CommitSiteStage_0**](SiteLiveApi.md#commitsitestage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
[**CreateEmail**](SiteLiveApi.md#createemail) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**CreateEmail_0**](SiteLiveApi.md#createemail_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
[**CreateExternalPath**](SiteLiveApi.md#createexternalpath) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**CreateExternalPath_0**](SiteLiveApi.md#createexternalpath_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
[**CreateSiteLive**](SiteLiveApi.md#createsitelive) | **POST** /api/v1/site_live | Create a site
[**CreateSiteLive_0**](SiteLiveApi.md#createsitelive_0) | **POST** /api/v1/site_live | Create a site
[**CreateSiteStage**](SiteLiveApi.md#createsitestage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**CreateSiteStage_0**](SiteLiveApi.md#createsitestage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
[**CreateTag**](SiteLiveApi.md#createtag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**CreateTag_0**](SiteLiveApi.md#createtag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
[**DeleteDnsRecord**](SiteLiveApi.md#deletednsrecord) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**DeleteDnsRecord_0**](SiteLiveApi.md#deletednsrecord_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
[**DeleteEmail**](SiteLiveApi.md#deleteemail) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**DeleteEmail_0**](SiteLiveApi.md#deleteemail_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
[**DeleteExternalPath**](SiteLiveApi.md#deleteexternalpath) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**DeleteExternalPath_0**](SiteLiveApi.md#deleteexternalpath_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
[**DeleteSiteLive**](SiteLiveApi.md#deletesitelive) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**DeleteSiteLive_0**](SiteLiveApi.md#deletesitelive_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
[**DeleteSiteStage**](SiteLiveApi.md#deletesitestage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**DeleteSiteStage_0**](SiteLiveApi.md#deletesitestage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
[**DeleteTag**](SiteLiveApi.md#deletetag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**DeleteTag_0**](SiteLiveApi.md#deletetag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
[**DisableFirewall**](SiteLiveApi.md#disablefirewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**DisableFirewall_0**](SiteLiveApi.md#disablefirewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
[**EnableFirewall**](SiteLiveApi.md#enablefirewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**EnableFirewall_0**](SiteLiveApi.md#enablefirewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
[**GetDnsRecords**](SiteLiveApi.md#getdnsrecords) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**GetDnsRecords_0**](SiteLiveApi.md#getdnsrecords_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
[**GetEmails**](SiteLiveApi.md#getemails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**GetEmails_0**](SiteLiveApi.md#getemails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
[**GetExternalPaths**](SiteLiveApi.md#getexternalpaths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**GetExternalPaths_0**](SiteLiveApi.md#getexternalpaths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
[**GetFilesAtPoint**](SiteLiveApi.md#getfilesatpoint) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**GetFilesAtPoint_0**](SiteLiveApi.md#getfilesatpoint_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
[**GetMailDns**](SiteLiveApi.md#getmaildns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**GetMailDns_0**](SiteLiveApi.md#getmaildns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
[**GetPitRestore**](SiteLiveApi.md#getpitrestore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**GetPitRestore_0**](SiteLiveApi.md#getpitrestore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
[**GetPitRestores**](SiteLiveApi.md#getpitrestores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**GetPitRestores_0**](SiteLiveApi.md#getpitrestores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
[**GetSiteLive**](SiteLiveApi.md#getsitelive) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**GetSiteLive_0**](SiteLiveApi.md#getsitelive_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site
[**GetSitePlanUsage**](SiteLiveApi.md#getsiteplanusage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**GetSitePlanUsage_0**](SiteLiveApi.md#getsiteplanusage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
[**GetSitesLive**](SiteLiveApi.md#getsiteslive) | **GET** /api/v1/site_live | Get your sites
[**GetSitesLive_0**](SiteLiveApi.md#getsiteslive_0) | **GET** /api/v1/site_live | Get your sites
[**GetTags**](SiteLiveApi.md#gettags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**GetTags_0**](SiteLiveApi.md#gettags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
[**ModifyFirewall**](SiteLiveApi.md#modifyfirewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**ModifyFirewall_0**](SiteLiveApi.md#modifyfirewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
[**RestoreSite**](SiteLiveApi.md#restoresite) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**RestoreSite_0**](SiteLiveApi.md#restoresite_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
[**ShellCmdSiteLive**](SiteLiveApi.md#shellcmdsitelive) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**ShellCmdSiteLive_0**](SiteLiveApi.md#shellcmdsitelive_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
[**UpdateDnsRecord**](SiteLiveApi.md#updatednsrecord) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**UpdateDnsRecord_0**](SiteLiveApi.md#updatednsrecord_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
[**UpdateEmail**](SiteLiveApi.md#updateemail) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**UpdateEmail_0**](SiteLiveApi.md#updateemail_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
[**UpdateSiteLive**](SiteLiveApi.md#updatesitelive) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**UpdateSiteLive_0**](SiteLiveApi.md#updatesitelive_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site
[**ValidateMxRecords**](SiteLiveApi.md#validatemxrecords) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
[**ValidateMxRecords_0**](SiteLiveApi.md#validatemxrecords_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation



## AddMailDns

> Object AddMailDns (string fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class AddMailDnsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Create Email DNS records
                Object result = apiInstance.AddMailDns(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.AddMailDns: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## AddMailDns_0

> Object AddMailDns_0 (string fqdn)

Create Email DNS records

Automatically add the DNS records to your Nameserver configured site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class AddMailDns_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Create Email DNS records
                Object result = apiInstance.AddMailDns_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.AddMailDns_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## ChangeDevMode

> Object ChangeDevMode (string fqdn, string value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ChangeDevModeExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var value = "value_example";  // string | 

            try
            {
                // Change HTTP Auth
                Object result = apiInstance.ChangeDevMode(fqdn, value);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ChangeDevMode: " + e.Message );
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
 **fqdn** | **string**|  | 
 **value** | **string**|  | 

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


## ChangeDevMode_0

> Object ChangeDevMode_0 (string fqdn, string value)

Change HTTP Auth

Enable or disable HTTP Basic Authentication

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ChangeDevMode_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var value = "value_example";  // string | 

            try
            {
                // Change HTTP Auth
                Object result = apiInstance.ChangeDevMode_0(fqdn, value);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ChangeDevMode_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **value** | **string**|  | 

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


## ClearCache

> Object ClearCache (string fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ClearCacheExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Clear the cache
                Object result = apiInstance.ClearCache(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ClearCache: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClearCache_0

> Object ClearCache_0 (string fqdn)

Clear the cache

Purges the Cloudflare CDN cache for your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ClearCache_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Clear the cache
                Object result = apiInstance.ClearCache_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ClearCache_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CommitSiteStage

> Object CommitSiteStage (string fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CommitSiteStageExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Commit Stage Site
                Object result = apiInstance.CommitSiteStage(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CommitSiteStage: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## CommitSiteStage_0

> Object CommitSiteStage_0 (string fqdn)

Commit Stage Site

Sync the wp-content and database from your staging site to your live site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CommitSiteStage_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Commit Stage Site
                Object result = apiInstance.CommitSiteStage_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CommitSiteStage_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## CreateEmail

> Object CreateEmail (string fqdn, UserEmailCreate userEmailCreate = null)

Create Email

Create a custom email account

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateEmailExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var userEmailCreate = new UserEmailCreate(); // UserEmailCreate |  (optional) 

            try
            {
                // Create Email
                Object result = apiInstance.CreateEmail(fqdn, userEmailCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateEmail: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateEmail_0

> Object CreateEmail_0 (string fqdn, UserEmailCreate userEmailCreate = null)

Create Email

Create a custom email account

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateEmail_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var userEmailCreate = new UserEmailCreate(); // UserEmailCreate |  (optional) 

            try
            {
                // Create Email
                Object result = apiInstance.CreateEmail_0(fqdn, userEmailCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateEmail_0: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateExternalPath

> Object CreateExternalPath (string fqdn, ExternalPathCreate externalPathCreate = null)

Create External Path

Connect an external URL to your site on a subpath

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateExternalPathExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var externalPathCreate = new ExternalPathCreate(); // ExternalPathCreate |  (optional) 

            try
            {
                // Create External Path
                Object result = apiInstance.CreateExternalPath(fqdn, externalPathCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateExternalPath: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **200** | ExternalPathSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateExternalPath_0

> Object CreateExternalPath_0 (string fqdn, ExternalPathCreate externalPathCreate = null)

Create External Path

Connect an external URL to your site on a subpath

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateExternalPath_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var externalPathCreate = new ExternalPathCreate(); // ExternalPathCreate |  (optional) 

            try
            {
                // Create External Path
                Object result = apiInstance.CreateExternalPath_0(fqdn, externalPathCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateExternalPath_0: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **200** | ExternalPathSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateSiteLive

> SiteLive CreateSiteLive (UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null)

Create a site

Create a new site by providing your domain and your site's WordPress details

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateSiteLiveExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE |  (optional) 

            try
            {
                // Create a site
                SiteLive result = apiInstance.CreateSiteLive(UNKNOWN_BASE_TYPE);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateSiteLive: " + e.Message );
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

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Your new site&#39;s details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateSiteLive_0

> SiteLive CreateSiteLive_0 (UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null)

Create a site

Create a new site by providing your domain and your site's WordPress details

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateSiteLive_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var UNKNOWN_BASE_TYPE = new UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE |  (optional) 

            try
            {
                // Create a site
                SiteLive result = apiInstance.CreateSiteLive_0(UNKNOWN_BASE_TYPE);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateSiteLive_0: " + e.Message );
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

[**SiteLive**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Your new site&#39;s details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateSiteStage

> Object CreateSiteStage (string fqdn, SiteStageCreate siteStageCreate = null)

Create a Staging site

Create a staging site on which you can test changes

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateSiteStageExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var siteStageCreate = new SiteStageCreate(); // SiteStageCreate |  (optional) 

            try
            {
                // Create a Staging site
                Object result = apiInstance.CreateSiteStage(fqdn, siteStageCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateSiteStage: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **200** | SiteStageSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateSiteStage_0

> Object CreateSiteStage_0 (string fqdn, SiteStageCreate siteStageCreate = null)

Create a Staging site

Create a staging site on which you can test changes

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateSiteStage_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var siteStageCreate = new SiteStageCreate(); // SiteStageCreate |  (optional) 

            try
            {
                // Create a Staging site
                Object result = apiInstance.CreateSiteStage_0(fqdn, siteStageCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateSiteStage_0: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **200** | SiteStageSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTag

> Tag CreateTag (string fqdn, TagCreate tagCreate = null)

Create tag

Create a tag for organizational purposes for your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateTagExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var tagCreate = new TagCreate(); // TagCreate |  (optional) 

            try
            {
                // Create tag
                Tag result = apiInstance.CreateTag(fqdn, tagCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateTag: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateTag_0

> Tag CreateTag_0 (string fqdn, TagCreate tagCreate = null)

Create tag

Create a tag for organizational purposes for your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateTag_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var tagCreate = new TagCreate(); // TagCreate |  (optional) 

            try
            {
                // Create tag
                Tag result = apiInstance.CreateTag_0(fqdn, tagCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.CreateTag_0: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDnsRecord

> Object DeleteDnsRecord (string dnsId, string fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteDnsRecordExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var dnsId = "dnsId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete DNS record
                Object result = apiInstance.DeleteDnsRecord(dnsId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteDnsRecord: " + e.Message );
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
 **dnsId** | **string**|  | 
 **fqdn** | **string**|  | 

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


## DeleteDnsRecord_0

> Object DeleteDnsRecord_0 (string dnsId, string fqdn)

Delete DNS record

Delete a DNS record on your Nameserver configured site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteDnsRecord_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var dnsId = "dnsId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete DNS record
                Object result = apiInstance.DeleteDnsRecord_0(dnsId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteDnsRecord_0: " + e.Message );
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
 **dnsId** | **string**|  | 
 **fqdn** | **string**|  | 

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


## DeleteEmail

> Object DeleteEmail (string fqdn, string userEmailAddress)

Delete Email

Delete a custom email account

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteEmailExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var userEmailAddress = "userEmailAddress_example";  // string | 

            try
            {
                // Delete Email
                Object result = apiInstance.DeleteEmail(fqdn, userEmailAddress);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteEmail: " + e.Message );
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
 **fqdn** | **string**|  | 
 **userEmailAddress** | **string**|  | 

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


## DeleteEmail_0

> Object DeleteEmail_0 (string fqdn, string userEmailAddress)

Delete Email

Delete a custom email account

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteEmail_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var userEmailAddress = "userEmailAddress_example";  // string | 

            try
            {
                // Delete Email
                Object result = apiInstance.DeleteEmail_0(fqdn, userEmailAddress);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteEmail_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **userEmailAddress** | **string**|  | 

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


## DeleteExternalPath

> Object DeleteExternalPath (string externalPathId, string fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteExternalPathExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var externalPathId = "externalPathId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete External Path
                Object result = apiInstance.DeleteExternalPath(externalPathId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteExternalPath: " + e.Message );
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
 **externalPathId** | **string**|  | 
 **fqdn** | **string**|  | 

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


## DeleteExternalPath_0

> Object DeleteExternalPath_0 (string externalPathId, string fqdn)

Delete External Path

Delete the link between an external URL and your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteExternalPath_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var externalPathId = "externalPathId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete External Path
                Object result = apiInstance.DeleteExternalPath_0(externalPathId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteExternalPath_0: " + e.Message );
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
 **externalPathId** | **string**|  | 
 **fqdn** | **string**|  | 

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


## DeleteSiteLive

> Object DeleteSiteLive (string fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteSiteLiveExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete your live site
                Object result = apiInstance.DeleteSiteLive(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteSiteLive: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteSiteLive_0

> Object DeleteSiteLive_0 (string fqdn)

Delete your live site

This permanently deletes your site, and its stage site if one exists

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteSiteLive_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete your live site
                Object result = apiInstance.DeleteSiteLive_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteSiteLive_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteSiteStage

> Object DeleteSiteStage (string fqdn)

Delete Stage Site

Delete your staging site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteSiteStageExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete Stage Site
                Object result = apiInstance.DeleteSiteStage(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteSiteStage: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## DeleteSiteStage_0

> Object DeleteSiteStage_0 (string fqdn)

Delete Stage Site

Delete your staging site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteSiteStage_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Delete Stage Site
                Object result = apiInstance.DeleteSiteStage_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteSiteStage_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## DeleteTag

> List&lt;Tag&gt; DeleteTag (string tagId, string fqdn)

Get a tag

Get a tag by its ID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTagExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var tagId = "tagId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get a tag
                List<Tag> result = apiInstance.DeleteTag(tagId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteTag: " + e.Message );
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
 **tagId** | **string**|  | 
 **fqdn** | **string**|  | 

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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTag_0

> List&lt;Tag&gt; DeleteTag_0 (string tagId, string fqdn)

Get a tag

Get a tag by its ID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DeleteTag_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var tagId = "tagId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get a tag
                List<Tag> result = apiInstance.DeleteTag_0(tagId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DeleteTag_0: " + e.Message );
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
 **tagId** | **string**|  | 
 **fqdn** | **string**|  | 

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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DisableFirewall

> Object DisableFirewall (string fqdn)

Disable the firewall

Disable wp-login firewall

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DisableFirewallExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Disable the firewall
                Object result = apiInstance.DisableFirewall(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DisableFirewall: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## DisableFirewall_0

> Object DisableFirewall_0 (string fqdn)

Disable the firewall

Disable wp-login firewall

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class DisableFirewall_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Disable the firewall
                Object result = apiInstance.DisableFirewall_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.DisableFirewall_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## EnableFirewall

> Object EnableFirewall (string fqdn)

Enable the firewall

Enable the wp-login firewall

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class EnableFirewallExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Enable the firewall
                Object result = apiInstance.EnableFirewall(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.EnableFirewall: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | JSON list of allowed IPs |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EnableFirewall_0

> Object EnableFirewall_0 (string fqdn)

Enable the firewall

Enable the wp-login firewall

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class EnableFirewall_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Enable the firewall
                Object result = apiInstance.EnableFirewall_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.EnableFirewall_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | JSON list of allowed IPs |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDnsRecords

> Object GetDnsRecords (string fqdn)

Get DNS records

Get a nameserver configured site's DNS records

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetDnsRecordsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get DNS records
                Object result = apiInstance.GetDnsRecords(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetDnsRecords: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | JSON list of DNS records |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDnsRecords_0

> Object GetDnsRecords_0 (string fqdn)

Get DNS records

Get a nameserver configured site's DNS records

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetDnsRecords_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get DNS records
                Object result = apiInstance.GetDnsRecords_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetDnsRecords_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | JSON list of DNS records |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEmails

> Object GetEmails (string fqdn)

Get Emails

Get all custom email accounts

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetEmailsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get Emails
                Object result = apiInstance.GetEmails(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetEmails: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | List of UserEmailSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEmails_0

> Object GetEmails_0 (string fqdn)

Get Emails

Get all custom email accounts

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetEmails_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get Emails
                Object result = apiInstance.GetEmails_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetEmails_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | List of UserEmailSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExternalPaths

> Object GetExternalPaths (string fqdn)

Get External Paths

Get details about your site's external path configs

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetExternalPathsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get External Paths
                Object result = apiInstance.GetExternalPaths(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetExternalPaths: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | List of ExternalPathSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExternalPaths_0

> Object GetExternalPaths_0 (string fqdn)

Get External Paths

Get details about your site's external path configs

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetExternalPaths_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get External Paths
                Object result = apiInstance.GetExternalPaths_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetExternalPaths_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | List of ExternalPathSchema |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFilesAtPoint

> Object GetFilesAtPoint (string fqdn, DateTime restorePoint)

PIT Files

Get a list of wp-content files at a point in time

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetFilesAtPointExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var restorePoint = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | 

            try
            {
                // PIT Files
                Object result = apiInstance.GetFilesAtPoint(fqdn, restorePoint);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetFilesAtPoint: " + e.Message );
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
 **fqdn** | **string**|  | 
 **restorePoint** | **DateTime**|  | 

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


## GetFilesAtPoint_0

> Object GetFilesAtPoint_0 (string fqdn, DateTime restorePoint)

PIT Files

Get a list of wp-content files at a point in time

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetFilesAtPoint_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var restorePoint = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | 

            try
            {
                // PIT Files
                Object result = apiInstance.GetFilesAtPoint_0(fqdn, restorePoint);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetFilesAtPoint_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **restorePoint** | **DateTime**|  | 

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


## GetMailDns

> Object GetMailDns (string fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetMailDnsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get Required mail DNS records
                Object result = apiInstance.GetMailDns(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetMailDns: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | JSON list of requisite DNS records |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMailDns_0

> Object GetMailDns_0 (string fqdn)

Get Required mail DNS records

Get the required records for our custom email service

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetMailDns_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get Required mail DNS records
                Object result = apiInstance.GetMailDns_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetMailDns_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | JSON list of requisite DNS records |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPitRestore

> Object GetPitRestore (string pitRestoreId, string fqdn)

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetPitRestoreExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var pitRestoreId = "pitRestoreId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get PIT Restore
                Object result = apiInstance.GetPitRestore(pitRestoreId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetPitRestore: " + e.Message );
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
 **pitRestoreId** | **string**|  | 
 **fqdn** | **string**|  | 

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
| **200** | PIT Restore details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPitRestore_0

> Object GetPitRestore_0 (string pitRestoreId, string fqdn)

Get PIT Restore

Get the results of a site's restore to a previous point in time

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetPitRestore_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var pitRestoreId = "pitRestoreId_example";  // string | 
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get PIT Restore
                Object result = apiInstance.GetPitRestore_0(pitRestoreId, fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetPitRestore_0: " + e.Message );
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
 **pitRestoreId** | **string**|  | 
 **fqdn** | **string**|  | 

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
| **200** | PIT Restore details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPitRestores

> Object GetPitRestores (string fqdn)

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetPitRestoresExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get PIT Restores
                Object result = apiInstance.GetPitRestores(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetPitRestores: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | PIT Restores details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPitRestores_0

> Object GetPitRestores_0 (string fqdn)

Get PIT Restores

Get all the results of a site's restores to a previous point in time

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetPitRestores_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get PIT Restores
                Object result = apiInstance.GetPitRestores_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetPitRestores_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | PIT Restores details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSiteLive

> SiteLive GetSiteLive (string fqdn)

Get your live site

Get details about your live site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetSiteLiveExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get your live site
                SiteLive result = apiInstance.GetSiteLive(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetSiteLive: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSiteLive_0

> SiteLive GetSiteLive_0 (string fqdn)

Get your live site

Get details about your live site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetSiteLive_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get your live site
                SiteLive result = apiInstance.GetSiteLive_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetSiteLive_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSitePlanUsage

> Object GetSitePlanUsage (string fqdn, DateTime start, DateTime end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetSitePlanUsageExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var start = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | 
            var end = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | 

            try
            {
                // Get Site Plan Usage
                Object result = apiInstance.GetSitePlanUsage(fqdn, start, end);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetSitePlanUsage: " + e.Message );
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
 **fqdn** | **string**|  | 
 **start** | **DateTime**|  | 
 **end** | **DateTime**|  | 

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


## GetSitePlanUsage_0

> Object GetSitePlanUsage_0 (string fqdn, DateTime start, DateTime end)

Get Site Plan Usage

Get your visits and storage for a site at a given interval

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetSitePlanUsage_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var start = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | 
            var end = DateTime.Parse("2013-10-20T19:20:30+01:00");  // DateTime | 

            try
            {
                // Get Site Plan Usage
                Object result = apiInstance.GetSitePlanUsage_0(fqdn, start, end);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetSitePlanUsage_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **start** | **DateTime**|  | 
 **end** | **DateTime**|  | 

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


## GetSitesLive

> List&lt;SiteLive&gt; GetSitesLive ()

Get your sites

Get details about all of your live sites

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetSitesLiveExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);

            try
            {
                // Get your sites
                List<SiteLive> result = apiInstance.GetSitesLive();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetSitesLive: " + e.Message );
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

[**List&lt;SiteLive&gt;**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

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


## GetSitesLive_0

> List&lt;SiteLive&gt; GetSitesLive_0 ()

Get your sites

Get details about all of your live sites

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetSitesLive_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);

            try
            {
                // Get your sites
                List<SiteLive> result = apiInstance.GetSitesLive_0();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetSitesLive_0: " + e.Message );
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

[**List&lt;SiteLive&gt;**](SiteLive.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

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


## GetTags

> List&lt;Tag&gt; GetTags (string fqdn)

Get tags

Get all the tags for your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTagsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get tags
                List<Tag> result = apiInstance.GetTags(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetTags: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTags_0

> List&lt;Tag&gt; GetTags_0 (string fqdn)

Get tags

Get all the tags for your site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTags_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // Get tags
                List<Tag> result = apiInstance.GetTags_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.GetTags_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ModifyFirewall

> Object ModifyFirewall (string fqdn, string ipAddress, string addOrDel = null)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ModifyFirewallExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var ipAddress = "ipAddress_example";  // string | 
            var addOrDel = "\"add\"";  // string |  (optional)  (default to "add")

            try
            {
                // Modify the firewall
                Object result = apiInstance.ModifyFirewall(fqdn, ipAddress, addOrDel);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ModifyFirewall: " + e.Message );
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
 **fqdn** | **string**|  | 
 **ipAddress** | **string**|  | 
 **addOrDel** | **string**|  | [optional] [default to &quot;add&quot;]

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


## ModifyFirewall_0

> Object ModifyFirewall_0 (string fqdn, string ipAddress, string addOrDel = null)

Modify the firewall

Add/Delete an IP from the wp-login firewall

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ModifyFirewall_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var ipAddress = "ipAddress_example";  // string | 
            var addOrDel = "\"add\"";  // string |  (optional)  (default to "add")

            try
            {
                // Modify the firewall
                Object result = apiInstance.ModifyFirewall_0(fqdn, ipAddress, addOrDel);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ModifyFirewall_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **ipAddress** | **string**|  | 
 **addOrDel** | **string**|  | [optional] [default to &quot;add&quot;]

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


## RestoreSite

> Object RestoreSite (string fqdn, PITRestoreCreate pITRestoreCreate)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RestoreSiteExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var pITRestoreCreate = new PITRestoreCreate(); // PITRestoreCreate | 

            try
            {
                // Create PIT Restore
                Object result = apiInstance.RestoreSite(fqdn, pITRestoreCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.RestoreSite: " + e.Message );
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
 **fqdn** | **string**|  | 
 **pITRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md)|  | 

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
| **200** | PIT Restore details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RestoreSite_0

> Object RestoreSite_0 (string fqdn, PITRestoreCreate pITRestoreCreate)

Create PIT Restore

Restore your site to a previous point in time, down to the minute

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RestoreSite_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var pITRestoreCreate = new PITRestoreCreate(); // PITRestoreCreate | 

            try
            {
                // Create PIT Restore
                Object result = apiInstance.RestoreSite_0(fqdn, pITRestoreCreate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.RestoreSite_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **pITRestoreCreate** | [**PITRestoreCreate**](PITRestoreCreate.md)|  | 

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
| **200** | PIT Restore details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ShellCmdSiteLive

> Object ShellCmdSiteLive (string fqdn, string cmd, string cwd = null, bool? autoTrackDir = null, bool? stage = null)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ShellCmdSiteLiveExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var cmd = "cmd_example";  // string | 
            var cwd = "\"/bitnami/wordpress/wp-content\"";  // string |  (optional)  (default to "/bitnami/wordpress/wp-content")
            var autoTrackDir = false;  // bool? |  (optional)  (default to false)
            var stage = false;  // bool? |  (optional)  (default to false)

            try
            {
                // Execute shell command
                Object result = apiInstance.ShellCmdSiteLive(fqdn, cmd, cwd, autoTrackDir, stage);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ShellCmdSiteLive: " + e.Message );
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
 **fqdn** | **string**|  | 
 **cmd** | **string**|  | 
 **cwd** | **string**|  | [optional] [default to &quot;/bitnami/wordpress/wp-content&quot;]
 **autoTrackDir** | **bool?**|  | [optional] [default to false]
 **stage** | **bool?**|  | [optional] [default to false]

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ShellCmdSiteLive_0

> Object ShellCmdSiteLive_0 (string fqdn, string cmd, string cwd = null, bool? autoTrackDir = null, bool? stage = null)

Execute shell command

Send a bash shell command to your site, such as a WP-CLI command

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ShellCmdSiteLive_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var cmd = "cmd_example";  // string | 
            var cwd = "\"/bitnami/wordpress/wp-content\"";  // string |  (optional)  (default to "/bitnami/wordpress/wp-content")
            var autoTrackDir = false;  // bool? |  (optional)  (default to false)
            var stage = false;  // bool? |  (optional)  (default to false)

            try
            {
                // Execute shell command
                Object result = apiInstance.ShellCmdSiteLive_0(fqdn, cmd, cwd, autoTrackDir, stage);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ShellCmdSiteLive_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **cmd** | **string**|  | 
 **cwd** | **string**|  | [optional] [default to &quot;/bitnami/wordpress/wp-content&quot;]
 **autoTrackDir** | **bool?**|  | [optional] [default to false]
 **stage** | **bool?**|  | [optional] [default to false]

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
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDnsRecord

> Object UpdateDnsRecord (string fqdn, string dnsType, string dnsHostname, string dnsContent, string dnsId = null, int? dnsPriority = null, int? dnsTtl = null)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateDnsRecordExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var dnsType = "dnsType_example";  // string | 
            var dnsHostname = "dnsHostname_example";  // string | 
            var dnsContent = "dnsContent_example";  // string | 
            var dnsId = "dnsId_example";  // string |  (optional) 
            var dnsPriority = 0;  // int? |  (optional)  (default to 0)
            var dnsTtl = 1;  // int? |  (optional)  (default to 1)

            try
            {
                // Update DNS record
                Object result = apiInstance.UpdateDnsRecord(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.UpdateDnsRecord: " + e.Message );
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
 **fqdn** | **string**|  | 
 **dnsType** | **string**|  | 
 **dnsHostname** | **string**|  | 
 **dnsContent** | **string**|  | 
 **dnsId** | **string**|  | [optional] 
 **dnsPriority** | **int?**|  | [optional] [default to 0]
 **dnsTtl** | **int?**|  | [optional] [default to 1]

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


## UpdateDnsRecord_0

> Object UpdateDnsRecord_0 (string fqdn, string dnsType, string dnsHostname, string dnsContent, string dnsId = null, int? dnsPriority = null, int? dnsTtl = null)

Update DNS record

Update a DNS record on your Nameserver configured site

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateDnsRecord_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var dnsType = "dnsType_example";  // string | 
            var dnsHostname = "dnsHostname_example";  // string | 
            var dnsContent = "dnsContent_example";  // string | 
            var dnsId = "dnsId_example";  // string |  (optional) 
            var dnsPriority = 0;  // int? |  (optional)  (default to 0)
            var dnsTtl = 1;  // int? |  (optional)  (default to 1)

            try
            {
                // Update DNS record
                Object result = apiInstance.UpdateDnsRecord_0(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.UpdateDnsRecord_0: " + e.Message );
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
 **fqdn** | **string**|  | 
 **dnsType** | **string**|  | 
 **dnsHostname** | **string**|  | 
 **dnsContent** | **string**|  | 
 **dnsId** | **string**|  | [optional] 
 **dnsPriority** | **int?**|  | [optional] [default to 0]
 **dnsTtl** | **int?**|  | [optional] [default to 1]

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


## UpdateEmail

> Object UpdateEmail (string userEmailAddress, string fqdn, UserEmailUpdate userEmailUpdate = null)

Update Email

Update a custom email account

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateEmailExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var userEmailAddress = "userEmailAddress_example";  // string | 
            var fqdn = "fqdn_example";  // string | 
            var userEmailUpdate = new UserEmailUpdate(); // UserEmailUpdate |  (optional) 

            try
            {
                // Update Email
                Object result = apiInstance.UpdateEmail(userEmailAddress, fqdn, userEmailUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.UpdateEmail: " + e.Message );
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
 **userEmailAddress** | **string**|  | 
 **fqdn** | **string**|  | 
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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateEmail_0

> Object UpdateEmail_0 (string userEmailAddress, string fqdn, UserEmailUpdate userEmailUpdate = null)

Update Email

Update a custom email account

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateEmail_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var userEmailAddress = "userEmailAddress_example";  // string | 
            var fqdn = "fqdn_example";  // string | 
            var userEmailUpdate = new UserEmailUpdate(); // UserEmailUpdate |  (optional) 

            try
            {
                // Update Email
                Object result = apiInstance.UpdateEmail_0(userEmailAddress, fqdn, userEmailUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.UpdateEmail_0: " + e.Message );
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
 **userEmailAddress** | **string**|  | 
 **fqdn** | **string**|  | 
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
| **200** | JSON |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSiteLive

> SiteLive UpdateSiteLive (string fqdn, SiteLiveUpdate siteLiveUpdate)

Update a site

Update a site's details

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateSiteLiveExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var siteLiveUpdate = new SiteLiveUpdate(); // SiteLiveUpdate | 

            try
            {
                // Update a site
                SiteLive result = apiInstance.UpdateSiteLive(fqdn, siteLiveUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.UpdateSiteLive: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **200** | Your site&#39;s details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSiteLive_0

> SiteLive UpdateSiteLive_0 (string fqdn, SiteLiveUpdate siteLiveUpdate)

Update a site

Update a site's details

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateSiteLive_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 
            var siteLiveUpdate = new SiteLiveUpdate(); // SiteLiveUpdate | 

            try
            {
                // Update a site
                SiteLive result = apiInstance.UpdateSiteLive_0(fqdn, siteLiveUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.UpdateSiteLive_0: " + e.Message );
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
 **fqdn** | **string**|  | 
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
| **200** | Your site&#39;s details |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateMxRecords

> Object ValidateMxRecords (string fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ValidateMxRecordsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // MX Validation
                Object result = apiInstance.ValidateMxRecords(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ValidateMxRecords: " + e.Message );
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
 **fqdn** | **string**|  | 

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


## ValidateMxRecords_0

> Object ValidateMxRecords_0 (string fqdn)

MX Validation

Check if your mail related DNS records are set up correctly

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ValidateMxRecords_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SiteLiveApi(Configuration.Default);
            var fqdn = "fqdn_example";  // string | 

            try
            {
                // MX Validation
                Object result = apiInstance.ValidateMxRecords_0(fqdn);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling SiteLiveApi.ValidateMxRecords_0: " + e.Message );
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
 **fqdn** | **string**|  | 

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

