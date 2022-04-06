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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamId = "teamId_example"; // String | 
    try {
      Team result = apiInstance.getTeam(teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeam");
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
 **teamId** | **String**|  |

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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getTeamMember"></a>
# **getTeamMember**
> TeamMember getTeamMember(teamMemberId, teamId)

Get Team Member

Get a Team Member by their UUID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamMemberId = "teamMemberId_example"; // String | 
    String teamId = "teamId_example"; // String | 
    try {
      TeamMember result = apiInstance.getTeamMember(teamMemberId, teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeamMember");
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
 **teamMemberId** | **String**|  |
 **teamId** | **String**|  |

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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getTeamMember_0"></a>
# **getTeamMember_0**
> TeamMember getTeamMember_0(teamMemberId, teamId)

Get Team Member

Get a Team Member by their UUID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamMemberId = "teamMemberId_example"; // String | 
    String teamId = "teamId_example"; // String | 
    try {
      TeamMember result = apiInstance.getTeamMember_0(teamMemberId, teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeamMember_0");
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
 **teamMemberId** | **String**|  |
 **teamId** | **String**|  |

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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getTeamMembers"></a>
# **getTeamMembers**
> List&lt;TeamMember&gt; getTeamMembers(teamId)

Get a team&#39;s members

Get a list of Team Members

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamId = "teamId_example"; // String | 
    try {
      List<TeamMember> result = apiInstance.getTeamMembers(teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeamMembers");
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
 **teamId** | **String**|  |

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
**200** | Your teams members |  -  |
**422** | Validation Error |  -  |

<a name="getTeamMembers_0"></a>
# **getTeamMembers_0**
> List&lt;TeamMember&gt; getTeamMembers_0(teamId)

Get a team&#39;s members

Get a list of Team Members

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamId = "teamId_example"; // String | 
    try {
      List<TeamMember> result = apiInstance.getTeamMembers_0(teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeamMembers_0");
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
 **teamId** | **String**|  |

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
**200** | Your teams members |  -  |
**422** | Validation Error |  -  |

<a name="getTeam_0"></a>
# **getTeam_0**
> Team getTeam_0(teamId)

Get a team

Get details about an owned team team by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamId = "teamId_example"; // String | 
    try {
      Team result = apiInstance.getTeam_0(teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeam_0");
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
 **teamId** | **String**|  |

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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="getTeams"></a>
# **getTeams**
> List&lt;Team&gt; getTeams()

Get your owned teams

Get details about all of your owned teams

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    try {
      List<Team> result = apiInstance.getTeams();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeams");
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

[**List&lt;Team&gt;**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

<a name="getTeams_0"></a>
# **getTeams_0**
> List&lt;Team&gt; getTeams_0()

Get your owned teams

Get details about all of your owned teams

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    try {
      List<Team> result = apiInstance.getTeams_0();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#getTeams_0");
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

[**List&lt;Team&gt;**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

<a name="removeTeamMember"></a>
# **removeTeamMember**
> Object removeTeamMember(teamMemberId, teamId)

Remove Team Member

Remove a team member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamMemberId = "teamMemberId_example"; // String | 
    String teamId = "teamId_example"; // String | 
    try {
      Object result = apiInstance.removeTeamMember(teamMemberId, teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#removeTeamMember");
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
 **teamMemberId** | **String**|  |
 **teamId** | **String**|  |

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

<a name="removeTeamMember_0"></a>
# **removeTeamMember_0**
> Object removeTeamMember_0(teamMemberId, teamId)

Remove Team Member

Remove a team member

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamMemberId = "teamMemberId_example"; // String | 
    String teamId = "teamId_example"; // String | 
    try {
      Object result = apiInstance.removeTeamMember_0(teamMemberId, teamId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#removeTeamMember_0");
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
 **teamMemberId** | **String**|  |
 **teamId** | **String**|  |

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

<a name="updateTeam"></a>
# **updateTeam**
> Team updateTeam(teamId, teamUpdate)

Update a Team

Adjust your team&#39;s settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamId = "teamId_example"; // String | 
    TeamUpdate teamUpdate = new TeamUpdate(); // TeamUpdate | 
    try {
      Team result = apiInstance.updateTeam(teamId, teamUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#updateTeam");
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
 **teamId** | **String**|  |
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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

<a name="updateTeam_0"></a>
# **updateTeam_0**
> Team updateTeam_0(teamId, teamUpdate)

Update a Team

Adjust your team&#39;s settings

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TeamApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://my.sitebay.org");
    
    // Configure OAuth2 access token for authorization: OAuth2PasswordBearer
    OAuth OAuth2PasswordBearer = (OAuth) defaultClient.getAuthentication("OAuth2PasswordBearer");
    OAuth2PasswordBearer.setAccessToken("YOUR ACCESS TOKEN");

    TeamApi apiInstance = new TeamApi(defaultClient);
    String teamId = "teamId_example"; // String | 
    TeamUpdate teamUpdate = new TeamUpdate(); // TeamUpdate | 
    try {
      Team result = apiInstance.updateTeam_0(teamId, teamUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TeamApi#updateTeam_0");
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
 **teamId** | **String**|  |
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
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

