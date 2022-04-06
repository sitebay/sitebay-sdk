# SiteLive

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** |  | 
**Busy** | Pointer to **string** |  | [optional] 
**DkimKey** | Pointer to **string** |  | [optional] 
**Fqdn** | **string** |  | 
**GitUrl** | Pointer to **string** |  | [optional] 
**Id** | **string** |  | 
**RegionId** | **int32** |  | 
**TeamId** | **string** |  | 
**UntrackedTables** | Pointer to **string** |  | [optional] 
**UserId** | **string** |  | 

## Methods

### NewSiteLive

`func NewSiteLive(active bool, fqdn string, id string, regionId int32, teamId string, userId string, ) *SiteLive`

NewSiteLive instantiates a new SiteLive object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSiteLiveWithDefaults

`func NewSiteLiveWithDefaults() *SiteLive`

NewSiteLiveWithDefaults instantiates a new SiteLive object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *SiteLive) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SiteLive) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SiteLive) SetActive(v bool)`

SetActive sets Active field to given value.


### GetBusy

`func (o *SiteLive) GetBusy() string`

GetBusy returns the Busy field if non-nil, zero value otherwise.

### GetBusyOk

`func (o *SiteLive) GetBusyOk() (*string, bool)`

GetBusyOk returns a tuple with the Busy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusy

`func (o *SiteLive) SetBusy(v string)`

SetBusy sets Busy field to given value.

### HasBusy

`func (o *SiteLive) HasBusy() bool`

HasBusy returns a boolean if a field has been set.

### GetDkimKey

`func (o *SiteLive) GetDkimKey() string`

GetDkimKey returns the DkimKey field if non-nil, zero value otherwise.

### GetDkimKeyOk

`func (o *SiteLive) GetDkimKeyOk() (*string, bool)`

GetDkimKeyOk returns a tuple with the DkimKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDkimKey

`func (o *SiteLive) SetDkimKey(v string)`

SetDkimKey sets DkimKey field to given value.

### HasDkimKey

`func (o *SiteLive) HasDkimKey() bool`

HasDkimKey returns a boolean if a field has been set.

### GetFqdn

`func (o *SiteLive) GetFqdn() string`

GetFqdn returns the Fqdn field if non-nil, zero value otherwise.

### GetFqdnOk

`func (o *SiteLive) GetFqdnOk() (*string, bool)`

GetFqdnOk returns a tuple with the Fqdn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFqdn

`func (o *SiteLive) SetFqdn(v string)`

SetFqdn sets Fqdn field to given value.


### GetGitUrl

`func (o *SiteLive) GetGitUrl() string`

GetGitUrl returns the GitUrl field if non-nil, zero value otherwise.

### GetGitUrlOk

`func (o *SiteLive) GetGitUrlOk() (*string, bool)`

GetGitUrlOk returns a tuple with the GitUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGitUrl

`func (o *SiteLive) SetGitUrl(v string)`

SetGitUrl sets GitUrl field to given value.

### HasGitUrl

`func (o *SiteLive) HasGitUrl() bool`

HasGitUrl returns a boolean if a field has been set.

### GetId

`func (o *SiteLive) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SiteLive) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SiteLive) SetId(v string)`

SetId sets Id field to given value.


### GetRegionId

`func (o *SiteLive) GetRegionId() int32`

GetRegionId returns the RegionId field if non-nil, zero value otherwise.

### GetRegionIdOk

`func (o *SiteLive) GetRegionIdOk() (*int32, bool)`

GetRegionIdOk returns a tuple with the RegionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionId

`func (o *SiteLive) SetRegionId(v int32)`

SetRegionId sets RegionId field to given value.


### GetTeamId

`func (o *SiteLive) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *SiteLive) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *SiteLive) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.


### GetUntrackedTables

`func (o *SiteLive) GetUntrackedTables() string`

GetUntrackedTables returns the UntrackedTables field if non-nil, zero value otherwise.

### GetUntrackedTablesOk

`func (o *SiteLive) GetUntrackedTablesOk() (*string, bool)`

GetUntrackedTablesOk returns a tuple with the UntrackedTables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUntrackedTables

`func (o *SiteLive) SetUntrackedTables(v string)`

SetUntrackedTables sets UntrackedTables field to given value.

### HasUntrackedTables

`func (o *SiteLive) HasUntrackedTables() bool`

HasUntrackedTables returns a boolean if a field has been set.

### GetUserId

`func (o *SiteLive) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *SiteLive) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *SiteLive) SetUserId(v string)`

SetUserId sets UserId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


