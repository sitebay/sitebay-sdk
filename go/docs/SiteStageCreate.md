# SiteStageCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GitBranch** | Pointer to **string** |  | [optional] 
**RestorePoint** | Pointer to **time.Time** |  | [optional] 
**Subdomain** | **string** |  | 

## Methods

### NewSiteStageCreate

`func NewSiteStageCreate(subdomain string, ) *SiteStageCreate`

NewSiteStageCreate instantiates a new SiteStageCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSiteStageCreateWithDefaults

`func NewSiteStageCreateWithDefaults() *SiteStageCreate`

NewSiteStageCreateWithDefaults instantiates a new SiteStageCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGitBranch

`func (o *SiteStageCreate) GetGitBranch() string`

GetGitBranch returns the GitBranch field if non-nil, zero value otherwise.

### GetGitBranchOk

`func (o *SiteStageCreate) GetGitBranchOk() (*string, bool)`

GetGitBranchOk returns a tuple with the GitBranch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGitBranch

`func (o *SiteStageCreate) SetGitBranch(v string)`

SetGitBranch sets GitBranch field to given value.

### HasGitBranch

`func (o *SiteStageCreate) HasGitBranch() bool`

HasGitBranch returns a boolean if a field has been set.

### GetRestorePoint

`func (o *SiteStageCreate) GetRestorePoint() time.Time`

GetRestorePoint returns the RestorePoint field if non-nil, zero value otherwise.

### GetRestorePointOk

`func (o *SiteStageCreate) GetRestorePointOk() (*time.Time, bool)`

GetRestorePointOk returns a tuple with the RestorePoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestorePoint

`func (o *SiteStageCreate) SetRestorePoint(v time.Time)`

SetRestorePoint sets RestorePoint field to given value.

### HasRestorePoint

`func (o *SiteStageCreate) HasRestorePoint() bool`

HasRestorePoint returns a boolean if a field has been set.

### GetSubdomain

`func (o *SiteStageCreate) GetSubdomain() string`

GetSubdomain returns the Subdomain field if non-nil, zero value otherwise.

### GetSubdomainOk

`func (o *SiteStageCreate) GetSubdomainOk() (*string, bool)`

GetSubdomainOk returns a tuple with the Subdomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubdomain

`func (o *SiteStageCreate) SetSubdomain(v string)`

SetSubdomain sets Subdomain field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


