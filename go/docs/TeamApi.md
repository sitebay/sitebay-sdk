# \TeamApi

All URIs are relative to *https://my.sitebay.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTeam**](TeamApi.md#GetTeam) | **Get** /api/v1/team/{team_id} | Get a team
[**GetTeamMember**](TeamApi.md#GetTeamMember) | **Get** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**GetTeamMember_0**](TeamApi.md#GetTeamMember_0) | **Get** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
[**GetTeamMembers**](TeamApi.md#GetTeamMembers) | **Get** /api/v1/team{team_id}/member | Get a team&#39;s members
[**GetTeamMembers_0**](TeamApi.md#GetTeamMembers_0) | **Get** /api/v1/team{team_id}/member | Get a team&#39;s members
[**GetTeam_0**](TeamApi.md#GetTeam_0) | **Get** /api/v1/team/{team_id} | Get a team
[**GetTeams**](TeamApi.md#GetTeams) | **Get** /api/v1/team | Get your owned teams
[**GetTeams_0**](TeamApi.md#GetTeams_0) | **Get** /api/v1/team | Get your owned teams
[**RemoveTeamMember**](TeamApi.md#RemoveTeamMember) | **Delete** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**RemoveTeamMember_0**](TeamApi.md#RemoveTeamMember_0) | **Delete** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
[**UpdateTeam**](TeamApi.md#UpdateTeam) | **Put** /api/v1/team/{team_id} | Update a Team
[**UpdateTeam_0**](TeamApi.md#UpdateTeam_0) | **Put** /api/v1/team/{team_id} | Update a Team



## GetTeam

> Team GetTeam(ctx, teamId).Execute()

Get a team



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeam(context.Background(), teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeam``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeam`: Team
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeam`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeamMember

> TeamMember GetTeamMember(ctx, teamMemberId, teamId).Execute()

Get Team Member



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamMemberId := "teamMemberId_example" // string | 
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeamMember(context.Background(), teamMemberId, teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeamMember``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeamMember`: TeamMember
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeamMember`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamMemberId** | **string** |  | 
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeamMemberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TeamMember**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeamMember_0

> TeamMember GetTeamMember_0(ctx, teamMemberId, teamId).Execute()

Get Team Member



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamMemberId := "teamMemberId_example" // string | 
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeamMember_0(context.Background(), teamMemberId, teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeamMember_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeamMember_0`: TeamMember
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeamMember_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamMemberId** | **string** |  | 
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeamMember_1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TeamMember**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeamMembers

> []TeamMember GetTeamMembers(ctx, teamId).Execute()

Get a team's members



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeamMembers(context.Background(), teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeamMembers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeamMembers`: []TeamMember
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeamMembers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeamMembersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]TeamMember**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeamMembers_0

> []TeamMember GetTeamMembers_0(ctx, teamId).Execute()

Get a team's members



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeamMembers_0(context.Background(), teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeamMembers_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeamMembers_0`: []TeamMember
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeamMembers_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeamMembers_2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]TeamMember**](TeamMember.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeam_0

> Team GetTeam_0(ctx, teamId).Execute()

Get a team



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeam_0(context.Background(), teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeam_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeam_0`: Team
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeam_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeam_3Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeams

> []Team GetTeams(ctx).Execute()

Get your owned teams



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeams(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeams``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeams`: []Team
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeams`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeamsRequest struct via the builder pattern


### Return type

[**[]Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTeams_0

> []Team GetTeams_0(ctx).Execute()

Get your owned teams



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.GetTeams_0(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.GetTeams_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTeams_0`: []Team
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.GetTeams_0`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTeams_4Request struct via the builder pattern


### Return type

[**[]Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTeamMember

> interface{} RemoveTeamMember(ctx, teamMemberId, teamId).Execute()

Remove Team Member



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamMemberId := "teamMemberId_example" // string | 
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.RemoveTeamMember(context.Background(), teamMemberId, teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.RemoveTeamMember``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTeamMember`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.RemoveTeamMember`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamMemberId** | **string** |  | 
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTeamMemberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**interface{}**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveTeamMember_0

> interface{} RemoveTeamMember_0(ctx, teamMemberId, teamId).Execute()

Remove Team Member



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamMemberId := "teamMemberId_example" // string | 
    teamId := "teamId_example" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.RemoveTeamMember_0(context.Background(), teamMemberId, teamId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.RemoveTeamMember_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTeamMember_0`: interface{}
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.RemoveTeamMember_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamMemberId** | **string** |  | 
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTeamMember_5Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**interface{}**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTeam

> Team UpdateTeam(ctx, teamId).TeamUpdate(teamUpdate).Execute()

Update a Team



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamId := "teamId_example" // string | 
    teamUpdate := *openapiclient.NewTeamUpdate() // TeamUpdate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.UpdateTeam(context.Background(), teamId).TeamUpdate(teamUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.UpdateTeam``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateTeam`: Team
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.UpdateTeam`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTeamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **teamUpdate** | [**TeamUpdate**](TeamUpdate.md) |  | 

### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTeam_0

> Team UpdateTeam_0(ctx, teamId).TeamUpdate(teamUpdate).Execute()

Update a Team



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    teamId := "teamId_example" // string | 
    teamUpdate := *openapiclient.NewTeamUpdate() // TeamUpdate | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.TeamApi.UpdateTeam_0(context.Background(), teamId).TeamUpdate(teamUpdate).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TeamApi.UpdateTeam_0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateTeam_0`: Team
    fmt.Fprintf(os.Stdout, "Response from `TeamApi.UpdateTeam_0`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTeam_6Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **teamUpdate** | [**TeamUpdate**](TeamUpdate.md) |  | 

### Return type

[**Team**](Team.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

