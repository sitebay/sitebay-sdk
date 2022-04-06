# SiteLiveCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Fqdn** | **string** |  | 
**GitUrl** | Pointer to **string** |  | [optional] 
**RegionId** | Pointer to **int32** |  | [optional] [default to 1]
**TeamId** | **string** |  | 
**TemplateName** | Pointer to **string** |  | [optional] 
**WordpressBlogName** | **string** |  | 
**WordpressEmail** | **string** |  | 
**WordpressFirstName** | **string** |  | 
**WordpressLastName** | **string** |  | 
**WordpressPassword** | **string** |  | 
**WordpressUsername** | **string** |  | 

## Methods

### NewSiteLiveCreate

`func NewSiteLiveCreate(fqdn string, teamId string, wordpressBlogName string, wordpressEmail string, wordpressFirstName string, wordpressLastName string, wordpressPassword string, wordpressUsername string, ) *SiteLiveCreate`

NewSiteLiveCreate instantiates a new SiteLiveCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSiteLiveCreateWithDefaults

`func NewSiteLiveCreateWithDefaults() *SiteLiveCreate`

NewSiteLiveCreateWithDefaults instantiates a new SiteLiveCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFqdn

`func (o *SiteLiveCreate) GetFqdn() string`

GetFqdn returns the Fqdn field if non-nil, zero value otherwise.

### GetFqdnOk

`func (o *SiteLiveCreate) GetFqdnOk() (*string, bool)`

GetFqdnOk returns a tuple with the Fqdn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFqdn

`func (o *SiteLiveCreate) SetFqdn(v string)`

SetFqdn sets Fqdn field to given value.


### GetGitUrl

`func (o *SiteLiveCreate) GetGitUrl() string`

GetGitUrl returns the GitUrl field if non-nil, zero value otherwise.

### GetGitUrlOk

`func (o *SiteLiveCreate) GetGitUrlOk() (*string, bool)`

GetGitUrlOk returns a tuple with the GitUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGitUrl

`func (o *SiteLiveCreate) SetGitUrl(v string)`

SetGitUrl sets GitUrl field to given value.

### HasGitUrl

`func (o *SiteLiveCreate) HasGitUrl() bool`

HasGitUrl returns a boolean if a field has been set.

### GetRegionId

`func (o *SiteLiveCreate) GetRegionId() int32`

GetRegionId returns the RegionId field if non-nil, zero value otherwise.

### GetRegionIdOk

`func (o *SiteLiveCreate) GetRegionIdOk() (*int32, bool)`

GetRegionIdOk returns a tuple with the RegionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionId

`func (o *SiteLiveCreate) SetRegionId(v int32)`

SetRegionId sets RegionId field to given value.

### HasRegionId

`func (o *SiteLiveCreate) HasRegionId() bool`

HasRegionId returns a boolean if a field has been set.

### GetTeamId

`func (o *SiteLiveCreate) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *SiteLiveCreate) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *SiteLiveCreate) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.


### GetTemplateName

`func (o *SiteLiveCreate) GetTemplateName() string`

GetTemplateName returns the TemplateName field if non-nil, zero value otherwise.

### GetTemplateNameOk

`func (o *SiteLiveCreate) GetTemplateNameOk() (*string, bool)`

GetTemplateNameOk returns a tuple with the TemplateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateName

`func (o *SiteLiveCreate) SetTemplateName(v string)`

SetTemplateName sets TemplateName field to given value.

### HasTemplateName

`func (o *SiteLiveCreate) HasTemplateName() bool`

HasTemplateName returns a boolean if a field has been set.

### GetWordpressBlogName

`func (o *SiteLiveCreate) GetWordpressBlogName() string`

GetWordpressBlogName returns the WordpressBlogName field if non-nil, zero value otherwise.

### GetWordpressBlogNameOk

`func (o *SiteLiveCreate) GetWordpressBlogNameOk() (*string, bool)`

GetWordpressBlogNameOk returns a tuple with the WordpressBlogName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressBlogName

`func (o *SiteLiveCreate) SetWordpressBlogName(v string)`

SetWordpressBlogName sets WordpressBlogName field to given value.


### GetWordpressEmail

`func (o *SiteLiveCreate) GetWordpressEmail() string`

GetWordpressEmail returns the WordpressEmail field if non-nil, zero value otherwise.

### GetWordpressEmailOk

`func (o *SiteLiveCreate) GetWordpressEmailOk() (*string, bool)`

GetWordpressEmailOk returns a tuple with the WordpressEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressEmail

`func (o *SiteLiveCreate) SetWordpressEmail(v string)`

SetWordpressEmail sets WordpressEmail field to given value.


### GetWordpressFirstName

`func (o *SiteLiveCreate) GetWordpressFirstName() string`

GetWordpressFirstName returns the WordpressFirstName field if non-nil, zero value otherwise.

### GetWordpressFirstNameOk

`func (o *SiteLiveCreate) GetWordpressFirstNameOk() (*string, bool)`

GetWordpressFirstNameOk returns a tuple with the WordpressFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressFirstName

`func (o *SiteLiveCreate) SetWordpressFirstName(v string)`

SetWordpressFirstName sets WordpressFirstName field to given value.


### GetWordpressLastName

`func (o *SiteLiveCreate) GetWordpressLastName() string`

GetWordpressLastName returns the WordpressLastName field if non-nil, zero value otherwise.

### GetWordpressLastNameOk

`func (o *SiteLiveCreate) GetWordpressLastNameOk() (*string, bool)`

GetWordpressLastNameOk returns a tuple with the WordpressLastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressLastName

`func (o *SiteLiveCreate) SetWordpressLastName(v string)`

SetWordpressLastName sets WordpressLastName field to given value.


### GetWordpressPassword

`func (o *SiteLiveCreate) GetWordpressPassword() string`

GetWordpressPassword returns the WordpressPassword field if non-nil, zero value otherwise.

### GetWordpressPasswordOk

`func (o *SiteLiveCreate) GetWordpressPasswordOk() (*string, bool)`

GetWordpressPasswordOk returns a tuple with the WordpressPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressPassword

`func (o *SiteLiveCreate) SetWordpressPassword(v string)`

SetWordpressPassword sets WordpressPassword field to given value.


### GetWordpressUsername

`func (o *SiteLiveCreate) GetWordpressUsername() string`

GetWordpressUsername returns the WordpressUsername field if non-nil, zero value otherwise.

### GetWordpressUsernameOk

`func (o *SiteLiveCreate) GetWordpressUsernameOk() (*string, bool)`

GetWordpressUsernameOk returns a tuple with the WordpressUsername field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressUsername

`func (o *SiteLiveCreate) SetWordpressUsername(v string)`

SetWordpressUsername sets WordpressUsername field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


