# .SiteLiveApi

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


# **addMailDns**
> any addMailDns()

Automatically add the DNS records to your Nameserver configured site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiAddMailDnsRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.addMailDns(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addMailDns_0**
> any addMailDns_0()

Automatically add the DNS records to your Nameserver configured site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiAddMailDns0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.addMailDns_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **changeDevMode**
> any changeDevMode()

Enable or disable HTTP Basic Authentication

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiChangeDevModeRequest = {
  // string
  fqdn: "fqdn_example",
  // string
  value: "value_example",
};

apiInstance.changeDevMode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **value** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **changeDevMode_0**
> any changeDevMode_0()

Enable or disable HTTP Basic Authentication

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiChangeDevMode0Request = {
  // string
  fqdn: "fqdn_example",
  // string
  value: "value_example",
};

apiInstance.changeDevMode_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **value** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **clearCache**
> any clearCache()

Purges the Cloudflare CDN cache for your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiClearCacheRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.clearCache(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **clearCache_0**
> any clearCache_0()

Purges the Cloudflare CDN cache for your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiClearCache0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.clearCache_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commitSiteStage**
> any commitSiteStage()

Sync the wp-content and database from your staging site to your live site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCommitSiteStageRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.commitSiteStage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commitSiteStage_0**
> any commitSiteStage_0()

Sync the wp-content and database from your staging site to your live site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCommitSiteStage0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.commitSiteStage_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmail**
> any createEmail()

Create a custom email account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateEmailRequest = {
  // string
  fqdn: "fqdn_example",
  // UserEmailCreate (optional)
  userEmailCreate: {
    forwardToEmail: "forwardToEmail_example",
    localPart: "localPart_example",
    password: "password_example",
  },
};

apiInstance.createEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailCreate** | **UserEmailCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEmail_0**
> any createEmail_0()

Create a custom email account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateEmail0Request = {
  // string
  fqdn: "fqdn_example",
  // UserEmailCreate (optional)
  userEmailCreate: {
    forwardToEmail: "forwardToEmail_example",
    localPart: "localPart_example",
    password: "password_example",
  },
};

apiInstance.createEmail_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailCreate** | **UserEmailCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createExternalPath**
> any createExternalPath()

Connect an external URL to your site on a subpath

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateExternalPathRequest = {
  // string
  fqdn: "fqdn_example",
  // ExternalPathCreate (optional)
  externalPathCreate: {
    externalName: "externalName_example",
    path: "path_example",
  },
};

apiInstance.createExternalPath(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalPathCreate** | **ExternalPathCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createExternalPath_0**
> any createExternalPath_0()

Connect an external URL to your site on a subpath

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateExternalPath0Request = {
  // string
  fqdn: "fqdn_example",
  // ExternalPathCreate (optional)
  externalPathCreate: {
    externalName: "externalName_example",
    path: "path_example",
  },
};

apiInstance.createExternalPath_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalPathCreate** | **ExternalPathCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSiteLive**
> SiteLive createSiteLive()

Create a new site by providing your domain and your site's WordPress details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateSiteLiveRequest = {
  // UNKNOWN_BASE_TYPE (optional)
  UNKNOWN_BASE_TYPE: null,
};

apiInstance.createSiteLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | **UNKNOWN_BASE_TYPE**|  |


### Return type

**SiteLive**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSiteLive_0**
> SiteLive createSiteLive_0()

Create a new site by providing your domain and your site's WordPress details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateSiteLive0Request = {
  // UNKNOWN_BASE_TYPE (optional)
  UNKNOWN_BASE_TYPE: null,
};

apiInstance.createSiteLive_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | **UNKNOWN_BASE_TYPE**|  |


### Return type

**SiteLive**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Your new site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSiteStage**
> any createSiteStage()

Create a staging site on which you can test changes

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateSiteStageRequest = {
  // string
  fqdn: "fqdn_example",
  // SiteStageCreate (optional)
  siteStageCreate: {
    gitBranch: "gitBranch_example",
    restorePoint: new Date('1970-01-01T00:00:00.00Z'),
    subdomain: "subdomain_example",
  },
};

apiInstance.createSiteStage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteStageCreate** | **SiteStageCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SiteStageSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSiteStage_0**
> any createSiteStage_0()

Create a staging site on which you can test changes

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateSiteStage0Request = {
  // string
  fqdn: "fqdn_example",
  // SiteStageCreate (optional)
  siteStageCreate: {
    gitBranch: "gitBranch_example",
    restorePoint: new Date('1970-01-01T00:00:00.00Z'),
    subdomain: "subdomain_example",
  },
};

apiInstance.createSiteStage_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteStageCreate** | **SiteStageCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | SiteStageSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTag**
> Tag createTag()

Create a tag for organizational purposes for your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateTagRequest = {
  // string
  fqdn: "fqdn_example",
  // TagCreate (optional)
  tagCreate: {
    name: "name_example",
  },
};

apiInstance.createTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCreate** | **TagCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**Tag**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTag_0**
> Tag createTag_0()

Create a tag for organizational purposes for your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiCreateTag0Request = {
  // string
  fqdn: "fqdn_example",
  // TagCreate (optional)
  tagCreate: {
    name: "name_example",
  },
};

apiInstance.createTag_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagCreate** | **TagCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**Tag**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDnsRecord**
> any deleteDnsRecord()

Delete a DNS record on your Nameserver configured site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteDnsRecordRequest = {
  // string
  dnsId: "dns_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteDnsRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDnsRecord_0**
> any deleteDnsRecord_0()

Delete a DNS record on your Nameserver configured site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteDnsRecord0Request = {
  // string
  dnsId: "dns_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteDnsRecord_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dnsId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmail**
> any deleteEmail()

Delete a custom email account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteEmailRequest = {
  // string
  fqdn: "fqdn_example",
  // string
  userEmailAddress: "user_email_address_example",
};

apiInstance.deleteEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **userEmailAddress** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEmail_0**
> any deleteEmail_0()

Delete a custom email account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteEmail0Request = {
  // string
  fqdn: "fqdn_example",
  // string
  userEmailAddress: "user_email_address_example",
};

apiInstance.deleteEmail_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **userEmailAddress** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteExternalPath**
> any deleteExternalPath()

Delete the link between an external URL and your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteExternalPathRequest = {
  // string
  externalPathId: "external_path_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteExternalPath(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalPathId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteExternalPath_0**
> any deleteExternalPath_0()

Delete the link between an external URL and your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteExternalPath0Request = {
  // string
  externalPathId: "external_path_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteExternalPath_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalPathId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSiteLive**
> any deleteSiteLive()

This permanently deletes your site, and its stage site if one exists

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteSiteLiveRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteSiteLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSiteLive_0**
> any deleteSiteLive_0()

This permanently deletes your site, and its stage site if one exists

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteSiteLive0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteSiteLive_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSiteStage**
> any deleteSiteStage()

Delete your staging site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteSiteStageRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteSiteStage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSiteStage_0**
> any deleteSiteStage_0()

Delete your staging site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteSiteStage0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteSiteStage_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTag**
> Array<Tag> deleteTag()

Get a tag by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteTagRequest = {
  // string
  tagId: "tag_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**Array<Tag>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTag_0**
> Array<Tag> deleteTag_0()

Get a tag by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDeleteTag0Request = {
  // string
  tagId: "tag_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.deleteTag_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**Array<Tag>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disableFirewall**
> any disableFirewall()

Disable wp-login firewall

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDisableFirewallRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.disableFirewall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disableFirewall_0**
> any disableFirewall_0()

Disable wp-login firewall

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiDisableFirewall0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.disableFirewall_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableFirewall**
> any enableFirewall()

Enable the wp-login firewall

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiEnableFirewallRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.enableFirewall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON list of allowed IPs |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableFirewall_0**
> any enableFirewall_0()

Enable the wp-login firewall

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiEnableFirewall0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.enableFirewall_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON list of allowed IPs |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDnsRecords**
> any getDnsRecords()

Get a nameserver configured site's DNS records

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetDnsRecordsRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getDnsRecords(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON list of DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDnsRecords_0**
> any getDnsRecords_0()

Get a nameserver configured site's DNS records

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetDnsRecords0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getDnsRecords_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON list of DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmails**
> any getEmails()

Get all custom email accounts

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetEmailsRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getEmails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of UserEmailSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEmails_0**
> any getEmails_0()

Get all custom email accounts

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetEmails0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getEmails_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of UserEmailSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExternalPaths**
> any getExternalPaths()

Get details about your site's external path configs

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetExternalPathsRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getExternalPaths(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExternalPaths_0**
> any getExternalPaths_0()

Get details about your site's external path configs

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetExternalPaths0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getExternalPaths_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of ExternalPathSchema |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFilesAtPoint**
> any getFilesAtPoint()

Get a list of wp-content files at a point in time

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetFilesAtPointRequest = {
  // string
  fqdn: "fqdn_example",
  // Date
  restorePoint: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getFilesAtPoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **restorePoint** | [**Date**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFilesAtPoint_0**
> any getFilesAtPoint_0()

Get a list of wp-content files at a point in time

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetFilesAtPoint0Request = {
  // string
  fqdn: "fqdn_example",
  // Date
  restorePoint: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getFilesAtPoint_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **restorePoint** | [**Date**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMailDns**
> any getMailDns()

Get the required records for our custom email service

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetMailDnsRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getMailDns(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON list of requisite DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMailDns_0**
> any getMailDns_0()

Get the required records for our custom email service

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetMailDns0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getMailDns_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON list of requisite DNS records |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPitRestore**
> any getPitRestore()

Get the results of a site's restore to a previous point in time

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetPitRestoreRequest = {
  // string
  pitRestoreId: "pit_restore_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.getPitRestore(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pitRestoreId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPitRestore_0**
> any getPitRestore_0()

Get the results of a site's restore to a previous point in time

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetPitRestore0Request = {
  // string
  pitRestoreId: "pit_restore_id_example",
  // string
  fqdn: "fqdn_example",
};

apiInstance.getPitRestore_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pitRestoreId** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPitRestores**
> any getPitRestores()

Get all the results of a site's restores to a previous point in time

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetPitRestoresRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getPitRestores(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restores details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPitRestores_0**
> any getPitRestores_0()

Get all the results of a site's restores to a previous point in time

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetPitRestores0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getPitRestores_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restores details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSiteLive**
> SiteLive getSiteLive()

Get details about your live site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetSiteLiveRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getSiteLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**SiteLive**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSiteLive_0**
> SiteLive getSiteLive_0()

Get details about your live site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetSiteLive0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getSiteLive_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**SiteLive**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSitePlanUsage**
> any getSitePlanUsage()

Get your visits and storage for a site at a given interval

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetSitePlanUsageRequest = {
  // string
  fqdn: "fqdn_example",
  // Date
  start: new Date('1970-01-01T00:00:00.00Z'),
  // Date
  end: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getSitePlanUsage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **start** | [**Date**] |  | defaults to undefined
 **end** | [**Date**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSitePlanUsage_0**
> any getSitePlanUsage_0()

Get your visits and storage for a site at a given interval

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetSitePlanUsage0Request = {
  // string
  fqdn: "fqdn_example",
  // Date
  start: new Date('1970-01-01T00:00:00.00Z'),
  // Date
  end: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getSitePlanUsage_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **start** | [**Date**] |  | defaults to undefined
 **end** | [**Date**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSitesLive**
> Array<SiteLive> getSitesLive()

Get details about all of your live sites

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:any = {};

apiInstance.getSitesLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SiteLive>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSitesLive_0**
> Array<SiteLive> getSitesLive_0()

Get details about all of your live sites

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:any = {};

apiInstance.getSitesLive_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<SiteLive>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTags**
> Array<Tag> getTags()

Get all the tags for your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetTagsRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**Array<Tag>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTags_0**
> Array<Tag> getTags_0()

Get all the tags for your site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiGetTags0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.getTags_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**Array<Tag>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **modifyFirewall**
> any modifyFirewall()

Add/Delete an IP from the wp-login firewall

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiModifyFirewallRequest = {
  // string
  fqdn: "fqdn_example",
  // string
  ipAddress: "ip_address_example",
  // string (optional)
  addOrDel: "add",
};

apiInstance.modifyFirewall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **ipAddress** | [**string**] |  | defaults to undefined
 **addOrDel** | [**string**] |  | (optional) defaults to 'add'


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **modifyFirewall_0**
> any modifyFirewall_0()

Add/Delete an IP from the wp-login firewall

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiModifyFirewall0Request = {
  // string
  fqdn: "fqdn_example",
  // string
  ipAddress: "ip_address_example",
  // string (optional)
  addOrDel: "add",
};

apiInstance.modifyFirewall_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **ipAddress** | [**string**] |  | defaults to undefined
 **addOrDel** | [**string**] |  | (optional) defaults to 'add'


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restoreSite**
> any restoreSite(pITRestoreCreate)

Restore your site to a previous point in time, down to the minute

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiRestoreSiteRequest = {
  // string
  fqdn: "fqdn_example",
  // PITRestoreCreate
  pITRestoreCreate: {
    forStageSite: false,
    restorePoint: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.restoreSite(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pITRestoreCreate** | **PITRestoreCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restoreSite_0**
> any restoreSite_0(pITRestoreCreate)

Restore your site to a previous point in time, down to the minute

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiRestoreSite0Request = {
  // string
  fqdn: "fqdn_example",
  // PITRestoreCreate
  pITRestoreCreate: {
    forStageSite: false,
    restorePoint: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.restoreSite_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pITRestoreCreate** | **PITRestoreCreate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PIT Restore details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **shellCmdSiteLive**
> any shellCmdSiteLive()

Send a bash shell command to your site, such as a WP-CLI command

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiShellCmdSiteLiveRequest = {
  // string
  fqdn: "fqdn_example",
  // string
  cmd: "cmd_example",
  // string (optional)
  cwd: "/bitnami/wordpress/wp-content",
  // boolean (optional)
  autoTrackDir: false,
  // boolean (optional)
  stage: false,
};

apiInstance.shellCmdSiteLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **cmd** | [**string**] |  | defaults to undefined
 **cwd** | [**string**] |  | (optional) defaults to '/bitnami/wordpress/wp-content'
 **autoTrackDir** | [**boolean**] |  | (optional) defaults to undefined
 **stage** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **shellCmdSiteLive_0**
> any shellCmdSiteLive_0()

Send a bash shell command to your site, such as a WP-CLI command

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiShellCmdSiteLive0Request = {
  // string
  fqdn: "fqdn_example",
  // string
  cmd: "cmd_example",
  // string (optional)
  cwd: "/bitnami/wordpress/wp-content",
  // boolean (optional)
  autoTrackDir: false,
  // boolean (optional)
  stage: false,
};

apiInstance.shellCmdSiteLive_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **cmd** | [**string**] |  | defaults to undefined
 **cwd** | [**string**] |  | (optional) defaults to '/bitnami/wordpress/wp-content'
 **autoTrackDir** | [**boolean**] |  | (optional) defaults to undefined
 **stage** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDnsRecord**
> any updateDnsRecord()

Update a DNS record on your Nameserver configured site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiUpdateDnsRecordRequest = {
  // string
  fqdn: "fqdn_example",
  // string
  dnsType: "dns_type_example",
  // string
  dnsHostname: "dns_hostname_example",
  // string
  dnsContent: "dns_content_example",
  // string (optional)
  dnsId: "dns_id_example",
  // number (optional)
  dnsPriority: 0,
  // number (optional)
  dnsTtl: 1,
};

apiInstance.updateDnsRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **dnsType** | [**string**] |  | defaults to undefined
 **dnsHostname** | [**string**] |  | defaults to undefined
 **dnsContent** | [**string**] |  | defaults to undefined
 **dnsId** | [**string**] |  | (optional) defaults to undefined
 **dnsPriority** | [**number**] |  | (optional) defaults to 0
 **dnsTtl** | [**number**] |  | (optional) defaults to 1


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDnsRecord_0**
> any updateDnsRecord_0()

Update a DNS record on your Nameserver configured site

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiUpdateDnsRecord0Request = {
  // string
  fqdn: "fqdn_example",
  // string
  dnsType: "dns_type_example",
  // string
  dnsHostname: "dns_hostname_example",
  // string
  dnsContent: "dns_content_example",
  // string (optional)
  dnsId: "dns_id_example",
  // number (optional)
  dnsPriority: 0,
  // number (optional)
  dnsTtl: 1,
};

apiInstance.updateDnsRecord_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined
 **dnsType** | [**string**] |  | defaults to undefined
 **dnsHostname** | [**string**] |  | defaults to undefined
 **dnsContent** | [**string**] |  | defaults to undefined
 **dnsId** | [**string**] |  | (optional) defaults to undefined
 **dnsPriority** | [**number**] |  | (optional) defaults to 0
 **dnsTtl** | [**number**] |  | (optional) defaults to 1


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmail**
> any updateEmail()

Update a custom email account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiUpdateEmailRequest = {
  // string
  userEmailAddress: "user_email_address_example",
  // string
  fqdn: "fqdn_example",
  // UserEmailUpdate (optional)
  userEmailUpdate: {
    isCatchall: true,
    password: "password_example",
  },
};

apiInstance.updateEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailUpdate** | **UserEmailUpdate**|  |
 **userEmailAddress** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEmail_0**
> any updateEmail_0()

Update a custom email account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiUpdateEmail0Request = {
  // string
  userEmailAddress: "user_email_address_example",
  // string
  fqdn: "fqdn_example",
  // UserEmailUpdate (optional)
  userEmailUpdate: {
    isCatchall: true,
    password: "password_example",
  },
};

apiInstance.updateEmail_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userEmailUpdate** | **UserEmailUpdate**|  |
 **userEmailAddress** | [**string**] |  | defaults to undefined
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSiteLive**
> SiteLive updateSiteLive(siteLiveUpdate)

Update a site's details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiUpdateSiteLiveRequest = {
  // string
  fqdn: "fqdn_example",
  // SiteLiveUpdate
  siteLiveUpdate: {
    fqdn: "fqdn_example",
    gitUrl: "gitUrl_example",
    httpAuthEnabled: true,
    teamId: "teamId_example",
  },
};

apiInstance.updateSiteLive(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteLiveUpdate** | **SiteLiveUpdate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**SiteLive**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSiteLive_0**
> SiteLive updateSiteLive_0(siteLiveUpdate)

Update a site's details

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiUpdateSiteLive0Request = {
  // string
  fqdn: "fqdn_example",
  // SiteLiveUpdate
  siteLiveUpdate: {
    fqdn: "fqdn_example",
    gitUrl: "gitUrl_example",
    httpAuthEnabled: true,
    teamId: "teamId_example",
  },
};

apiInstance.updateSiteLive_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteLiveUpdate** | **SiteLiveUpdate**|  |
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**SiteLive**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your site&#39;s details |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validateMxRecords**
> any validateMxRecords()

Check if your mail related DNS records are set up correctly

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiValidateMxRecordsRequest = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.validateMxRecords(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validateMxRecords_0**
> any validateMxRecords_0()

Check if your mail related DNS records are set up correctly

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SiteLiveApi(configuration);

let body:.SiteLiveApiValidateMxRecords0Request = {
  // string
  fqdn: "fqdn_example",
};

apiInstance.validateMxRecords_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdn** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | JSON |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


