# .TeamApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeam**](TeamApi.md#getTeam) | **GET** /api/v1/team/{team_id} | Get a team
[**getTeamMember**](TeamApi.md#getTeamMember) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**getTeamMember_0**](TeamApi.md#getTeamMember_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**getTeamMembers**](TeamApi.md#getTeamMembers) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**getTeamMembers_0**](TeamApi.md#getTeamMembers_0) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**getTeam_0**](TeamApi.md#getTeam_0) | **GET** /api/v1/team/{team_id} | Get a team
[**getTeams**](TeamApi.md#getTeams) | **GET** /api/v1/team | Get your owned teams
[**getTeams_0**](TeamApi.md#getTeams_0) | **GET** /api/v1/team | Get your owned teams
[**removeTeamMember**](TeamApi.md#removeTeamMember) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**removeTeamMember_0**](TeamApi.md#removeTeamMember_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**updateTeam**](TeamApi.md#updateTeam) | **PUT** /api/v1/team/{team_id} | Update a Team
[**updateTeam_0**](TeamApi.md#updateTeam_0) | **PUT** /api/v1/team/{team_id} | Update a Team


# **getTeam**
> Team getTeam()

Get details about an owned team team by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetTeamRequest = {
  // string
  teamId: "team_id_example",
};

apiInstance.getTeam(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**Team**

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

# **getTeamMember**
> TeamMember getTeamMember()

Get a Team Member by their UUID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetTeamMemberRequest = {
  // string
  teamMemberId: "team_member_id_example",
  // string
  teamId: "team_id_example",
};

apiInstance.getTeamMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | [**string**] |  | defaults to undefined
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**TeamMember**

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

# **getTeamMember_0**
> TeamMember getTeamMember_0()

Get a Team Member by their UUID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetTeamMember0Request = {
  // string
  teamMemberId: "team_member_id_example",
  // string
  teamId: "team_id_example",
};

apiInstance.getTeamMember_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | [**string**] |  | defaults to undefined
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**TeamMember**

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

# **getTeamMembers**
> Array<TeamMember> getTeamMembers()

Get a list of Team Members

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetTeamMembersRequest = {
  // string
  teamId: "team_id_example",
};

apiInstance.getTeamMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**Array<TeamMember>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your teams members |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTeamMembers_0**
> Array<TeamMember> getTeamMembers_0()

Get a list of Team Members

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetTeamMembers0Request = {
  // string
  teamId: "team_id_example",
};

apiInstance.getTeamMembers_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**Array<TeamMember>**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Your teams members |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTeam_0**
> Team getTeam_0()

Get details about an owned team team by its ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiGetTeam0Request = {
  // string
  teamId: "team_id_example",
};

apiInstance.getTeam_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**Team**

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

# **getTeams**
> Array<Team> getTeams()

Get details about all of your owned teams

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:any = {};

apiInstance.getTeams(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Team>**

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

# **getTeams_0**
> Array<Team> getTeams_0()

Get details about all of your owned teams

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:any = {};

apiInstance.getTeams_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Team>**

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

# **removeTeamMember**
> any removeTeamMember()

Remove a team member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiRemoveTeamMemberRequest = {
  // string
  teamMemberId: "team_member_id_example",
  // string
  teamId: "team_id_example",
};

apiInstance.removeTeamMember(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | [**string**] |  | defaults to undefined
 **teamId** | [**string**] |  | defaults to undefined


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

# **removeTeamMember_0**
> any removeTeamMember_0()

Remove a team member

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiRemoveTeamMember0Request = {
  // string
  teamMemberId: "team_member_id_example",
  // string
  teamId: "team_id_example",
};

apiInstance.removeTeamMember_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | [**string**] |  | defaults to undefined
 **teamId** | [**string**] |  | defaults to undefined


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

# **updateTeam**
> Team updateTeam(teamUpdate)

Adjust your team's settings

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiUpdateTeamRequest = {
  // string
  teamId: "team_id_example",
  // TeamUpdate
  teamUpdate: {
    name: "name_example",
    timezone: "timezone_example",
  },
};

apiInstance.updateTeam(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamUpdate** | **TeamUpdate**|  |
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**Team**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTeam_0**
> Team updateTeam_0(teamUpdate)

Adjust your team's settings

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamApi(configuration);

let body:.TeamApiUpdateTeam0Request = {
  // string
  teamId: "team_id_example",
  // TeamUpdate
  teamUpdate: {
    name: "name_example",
    timezone: "timezone_example",
  },
};

apiInstance.updateTeam_0(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamUpdate** | **TeamUpdate**|  |
 **teamId** | [**string**] |  | defaults to undefined


### Return type

**Team**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


