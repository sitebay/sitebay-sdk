# Org.OpenAPITools.Api.TeamApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTeam**](TeamApi.md#getteam) | **GET** /api/v1/team/{team_id} | Get a team
[**GetTeamMember**](TeamApi.md#getteammember) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**GetTeamMember_0**](TeamApi.md#getteammember_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**GetTeamMembers**](TeamApi.md#getteammembers) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**GetTeamMembers_0**](TeamApi.md#getteammembers_0) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
[**GetTeam_0**](TeamApi.md#getteam_0) | **GET** /api/v1/team/{team_id} | Get a team
[**GetTeams**](TeamApi.md#getteams) | **GET** /api/v1/team | Get your owned teams
[**GetTeams_0**](TeamApi.md#getteams_0) | **GET** /api/v1/team | Get your owned teams
[**RemoveTeamMember**](TeamApi.md#removeteammember) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**RemoveTeamMember_0**](TeamApi.md#removeteammember_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**UpdateTeam**](TeamApi.md#updateteam) | **PUT** /api/v1/team/{team_id} | Update a Team
[**UpdateTeam_0**](TeamApi.md#updateteam_0) | **PUT** /api/v1/team/{team_id} | Update a Team



## GetTeam

> Team GetTeam (string teamId)

Get a team

Get details about an owned team team by its ID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeamExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamId = "teamId_example";  // string | 

            try
            {
                // Get a team
                Team result = apiInstance.GetTeam(teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeam: " + e.Message );
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
 **teamId** | **string**|  | 

### Return type

[**Team**](Team.md)

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


## GetTeamMember

> TeamMember GetTeamMember (string teamMemberId, string teamId)

Get Team Member

Get a Team Member by their UUID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeamMemberExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamMemberId = "teamMemberId_example";  // string | 
            var teamId = "teamId_example";  // string | 

            try
            {
                // Get Team Member
                TeamMember result = apiInstance.GetTeamMember(teamMemberId, teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeamMember: " + e.Message );
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
 **teamMemberId** | **string**|  | 
 **teamId** | **string**|  | 

### Return type

[**TeamMember**](TeamMember.md)

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


## GetTeamMember_0

> TeamMember GetTeamMember_0 (string teamMemberId, string teamId)

Get Team Member

Get a Team Member by their UUID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeamMember_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamMemberId = "teamMemberId_example";  // string | 
            var teamId = "teamId_example";  // string | 

            try
            {
                // Get Team Member
                TeamMember result = apiInstance.GetTeamMember_0(teamMemberId, teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeamMember_0: " + e.Message );
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
 **teamMemberId** | **string**|  | 
 **teamId** | **string**|  | 

### Return type

[**TeamMember**](TeamMember.md)

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


## GetTeamMembers

> List&lt;TeamMember&gt; GetTeamMembers (string teamId)

Get a team's members

Get a list of Team Members

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeamMembersExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamId = "teamId_example";  // string | 

            try
            {
                // Get a team's members
                List<TeamMember> result = apiInstance.GetTeamMembers(teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeamMembers: " + e.Message );
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
 **teamId** | **string**|  | 

### Return type

[**List&lt;TeamMember&gt;**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Your teams members |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeamMembers_0

> List&lt;TeamMember&gt; GetTeamMembers_0 (string teamId)

Get a team's members

Get a list of Team Members

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeamMembers_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamId = "teamId_example";  // string | 

            try
            {
                // Get a team's members
                List<TeamMember> result = apiInstance.GetTeamMembers_0(teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeamMembers_0: " + e.Message );
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
 **teamId** | **string**|  | 

### Return type

[**List&lt;TeamMember&gt;**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Your teams members |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeam_0

> Team GetTeam_0 (string teamId)

Get a team

Get details about an owned team team by its ID

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeam_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamId = "teamId_example";  // string | 

            try
            {
                // Get a team
                Team result = apiInstance.GetTeam_0(teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeam_0: " + e.Message );
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
 **teamId** | **string**|  | 

### Return type

[**Team**](Team.md)

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


## GetTeams

> List&lt;Team&gt; GetTeams ()

Get your owned teams

Get details about all of your owned teams

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeamsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);

            try
            {
                // Get your owned teams
                List<Team> result = apiInstance.GetTeams();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeams: " + e.Message );
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

[**List&lt;Team&gt;**](Team.md)

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


## GetTeams_0

> List&lt;Team&gt; GetTeams_0 ()

Get your owned teams

Get details about all of your owned teams

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetTeams_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);

            try
            {
                // Get your owned teams
                List<Team> result = apiInstance.GetTeams_0();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.GetTeams_0: " + e.Message );
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

[**List&lt;Team&gt;**](Team.md)

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


## RemoveTeamMember

> Object RemoveTeamMember (string teamMemberId, string teamId)

Remove Team Member

Remove a team member

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RemoveTeamMemberExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamMemberId = "teamMemberId_example";  // string | 
            var teamId = "teamId_example";  // string | 

            try
            {
                // Remove Team Member
                Object result = apiInstance.RemoveTeamMember(teamMemberId, teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.RemoveTeamMember: " + e.Message );
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
 **teamMemberId** | **string**|  | 
 **teamId** | **string**|  | 

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


## RemoveTeamMember_0

> Object RemoveTeamMember_0 (string teamMemberId, string teamId)

Remove Team Member

Remove a team member

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class RemoveTeamMember_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamMemberId = "teamMemberId_example";  // string | 
            var teamId = "teamId_example";  // string | 

            try
            {
                // Remove Team Member
                Object result = apiInstance.RemoveTeamMember_0(teamMemberId, teamId);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.RemoveTeamMember_0: " + e.Message );
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
 **teamMemberId** | **string**|  | 
 **teamId** | **string**|  | 

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


## UpdateTeam

> Team UpdateTeam (string teamId, TeamUpdate teamUpdate)

Update a Team

Adjust your team's settings

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateTeamExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamId = "teamId_example";  // string | 
            var teamUpdate = new TeamUpdate(); // TeamUpdate | 

            try
            {
                // Update a Team
                Team result = apiInstance.UpdateTeam(teamId, teamUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.UpdateTeam: " + e.Message );
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
 **teamId** | **string**|  | 
 **teamUpdate** | [**TeamUpdate**](TeamUpdate.md)|  | 

### Return type

[**Team**](Team.md)

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


## UpdateTeam_0

> Team UpdateTeam_0 (string teamId, TeamUpdate teamUpdate)

Update a Team

Adjust your team's settings

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateTeam_0Example
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://my.sitebay.org";
            // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new TeamApi(Configuration.Default);
            var teamId = "teamId_example";  // string | 
            var teamUpdate = new TeamUpdate(); // TeamUpdate | 

            try
            {
                // Update a Team
                Team result = apiInstance.UpdateTeam_0(teamId, teamUpdate);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling TeamApi.UpdateTeam_0: " + e.Message );
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
 **teamId** | **string**|  | 
 **teamUpdate** | [**TeamUpdate**](TeamUpdate.md)|  | 

### Return type

[**Team**](Team.md)

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

