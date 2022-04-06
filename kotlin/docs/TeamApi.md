# TeamApi

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


<a name="getTeam"></a>
# **getTeam**
> Team getTeam(teamId)

Get a team

Get details about an owned team team by its ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : Team = apiInstance.getTeam(teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeam")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeam")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **kotlin.String**|  |

### Return type

[**Team**](Team.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMember"></a>
# **getTeamMember**
> TeamMember getTeamMember(teamMemberId, teamId)

Get Team Member

Get a Team Member by their UUID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamMemberId : kotlin.String = teamMemberId_example // kotlin.String | 
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : TeamMember = apiInstance.getTeamMember(teamMemberId, teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeamMember")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeamMember")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **kotlin.String**|  |
 **teamId** | **kotlin.String**|  |

### Return type

[**TeamMember**](TeamMember.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMember_0"></a>
# **getTeamMember_0**
> TeamMember getTeamMember_0(teamMemberId, teamId)

Get Team Member

Get a Team Member by their UUID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamMemberId : kotlin.String = teamMemberId_example // kotlin.String | 
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : TeamMember = apiInstance.getTeamMember_0(teamMemberId, teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeamMember_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeamMember_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **kotlin.String**|  |
 **teamId** | **kotlin.String**|  |

### Return type

[**TeamMember**](TeamMember.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMembers"></a>
# **getTeamMembers**
> kotlin.collections.List&lt;TeamMember&gt; getTeamMembers(teamId)

Get a team&#39;s members

Get a list of Team Members

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : kotlin.collections.List<TeamMember> = apiInstance.getTeamMembers(teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeamMembers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeamMembers")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **kotlin.String**|  |

### Return type

[**kotlin.collections.List&lt;TeamMember&gt;**](TeamMember.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMembers_0"></a>
# **getTeamMembers_0**
> kotlin.collections.List&lt;TeamMember&gt; getTeamMembers_0(teamId)

Get a team&#39;s members

Get a list of Team Members

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : kotlin.collections.List<TeamMember> = apiInstance.getTeamMembers_0(teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeamMembers_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeamMembers_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **kotlin.String**|  |

### Return type

[**kotlin.collections.List&lt;TeamMember&gt;**](TeamMember.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeam_0"></a>
# **getTeam_0**
> Team getTeam_0(teamId)

Get a team

Get details about an owned team team by its ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : Team = apiInstance.getTeam_0(teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeam_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeam_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **kotlin.String**|  |

### Return type

[**Team**](Team.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeams"></a>
# **getTeams**
> kotlin.collections.List&lt;Team&gt; getTeams()

Get your owned teams

Get details about all of your owned teams

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
try {
    val result : kotlin.collections.List<Team> = apiInstance.getTeams()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeams")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeams")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;Team&gt;**](Team.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeams_0"></a>
# **getTeams_0**
> kotlin.collections.List&lt;Team&gt; getTeams_0()

Get your owned teams

Get details about all of your owned teams

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
try {
    val result : kotlin.collections.List<Team> = apiInstance.getTeams_0()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#getTeams_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#getTeams_0")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;Team&gt;**](Team.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeTeamMember"></a>
# **removeTeamMember**
> kotlin.Any removeTeamMember(teamMemberId, teamId)

Remove Team Member

Remove a team member

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamMemberId : kotlin.String = teamMemberId_example // kotlin.String | 
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.removeTeamMember(teamMemberId, teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#removeTeamMember")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#removeTeamMember")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **kotlin.String**|  |
 **teamId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removeTeamMember_0"></a>
# **removeTeamMember_0**
> kotlin.Any removeTeamMember_0(teamMemberId, teamId)

Remove Team Member

Remove a team member

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamMemberId : kotlin.String = teamMemberId_example // kotlin.String | 
val teamId : kotlin.String = teamId_example // kotlin.String | 
try {
    val result : kotlin.Any = apiInstance.removeTeamMember_0(teamMemberId, teamId)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#removeTeamMember_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#removeTeamMember_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **kotlin.String**|  |
 **teamId** | **kotlin.String**|  |

### Return type

[**kotlin.Any**](kotlin.Any.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTeam"></a>
# **updateTeam**
> Team updateTeam(teamId, teamUpdate)

Update a Team

Adjust your team&#39;s settings

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamId : kotlin.String = teamId_example // kotlin.String | 
val teamUpdate : TeamUpdate =  // TeamUpdate | 
try {
    val result : Team = apiInstance.updateTeam(teamId, teamUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#updateTeam")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#updateTeam")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **kotlin.String**|  |
 **teamUpdate** | [**TeamUpdate**](TeamUpdate.md)|  |

### Return type

[**Team**](Team.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTeam_0"></a>
# **updateTeam_0**
> Team updateTeam_0(teamId, teamUpdate)

Update a Team

Adjust your team&#39;s settings

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TeamApi()
val teamId : kotlin.String = teamId_example // kotlin.String | 
val teamUpdate : TeamUpdate =  // TeamUpdate | 
try {
    val result : Team = apiInstance.updateTeam_0(teamId, teamUpdate)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TeamApi#updateTeam_0")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TeamApi#updateTeam_0")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **kotlin.String**|  |
 **teamUpdate** | [**TeamUpdate**](TeamUpdate.md)|  |

### Return type

[**Team**](Team.md)

### Authorization


Configure OAuth2PasswordBearer:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

