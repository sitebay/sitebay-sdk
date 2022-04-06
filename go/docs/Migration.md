# Migration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrentUrl** | **string** |  | 
**Extra** | Pointer to **string** |  | [optional] 
**FtpAddress** | Pointer to **string** |  | [optional] 
**FtpPassword** | Pointer to **string** |  | [optional] 
**FtpUser** | Pointer to **string** |  | [optional] 
**Host** | Pointer to **string** |  | [optional] 
**HostPassword** | Pointer to **string** |  | [optional] 
**HostUser** | Pointer to **string** |  | [optional] 
**MigrationType** | Pointer to **string** |  | [optional] 
**WordpressPassword** | **string** |  | 
**WordpressUser** | **string** |  | 
**ZipFileName** | Pointer to **string** |  | [optional] 

## Methods

### NewMigration

`func NewMigration(currentUrl string, wordpressPassword string, wordpressUser string, ) *Migration`

NewMigration instantiates a new Migration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMigrationWithDefaults

`func NewMigrationWithDefaults() *Migration`

NewMigrationWithDefaults instantiates a new Migration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrentUrl

`func (o *Migration) GetCurrentUrl() string`

GetCurrentUrl returns the CurrentUrl field if non-nil, zero value otherwise.

### GetCurrentUrlOk

`func (o *Migration) GetCurrentUrlOk() (*string, bool)`

GetCurrentUrlOk returns a tuple with the CurrentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentUrl

`func (o *Migration) SetCurrentUrl(v string)`

SetCurrentUrl sets CurrentUrl field to given value.


### GetExtra

`func (o *Migration) GetExtra() string`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *Migration) GetExtraOk() (*string, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *Migration) SetExtra(v string)`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *Migration) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### GetFtpAddress

`func (o *Migration) GetFtpAddress() string`

GetFtpAddress returns the FtpAddress field if non-nil, zero value otherwise.

### GetFtpAddressOk

`func (o *Migration) GetFtpAddressOk() (*string, bool)`

GetFtpAddressOk returns a tuple with the FtpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFtpAddress

`func (o *Migration) SetFtpAddress(v string)`

SetFtpAddress sets FtpAddress field to given value.

### HasFtpAddress

`func (o *Migration) HasFtpAddress() bool`

HasFtpAddress returns a boolean if a field has been set.

### GetFtpPassword

`func (o *Migration) GetFtpPassword() string`

GetFtpPassword returns the FtpPassword field if non-nil, zero value otherwise.

### GetFtpPasswordOk

`func (o *Migration) GetFtpPasswordOk() (*string, bool)`

GetFtpPasswordOk returns a tuple with the FtpPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFtpPassword

`func (o *Migration) SetFtpPassword(v string)`

SetFtpPassword sets FtpPassword field to given value.

### HasFtpPassword

`func (o *Migration) HasFtpPassword() bool`

HasFtpPassword returns a boolean if a field has been set.

### GetFtpUser

`func (o *Migration) GetFtpUser() string`

GetFtpUser returns the FtpUser field if non-nil, zero value otherwise.

### GetFtpUserOk

`func (o *Migration) GetFtpUserOk() (*string, bool)`

GetFtpUserOk returns a tuple with the FtpUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFtpUser

`func (o *Migration) SetFtpUser(v string)`

SetFtpUser sets FtpUser field to given value.

### HasFtpUser

`func (o *Migration) HasFtpUser() bool`

HasFtpUser returns a boolean if a field has been set.

### GetHost

`func (o *Migration) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *Migration) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *Migration) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *Migration) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetHostPassword

`func (o *Migration) GetHostPassword() string`

GetHostPassword returns the HostPassword field if non-nil, zero value otherwise.

### GetHostPasswordOk

`func (o *Migration) GetHostPasswordOk() (*string, bool)`

GetHostPasswordOk returns a tuple with the HostPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostPassword

`func (o *Migration) SetHostPassword(v string)`

SetHostPassword sets HostPassword field to given value.

### HasHostPassword

`func (o *Migration) HasHostPassword() bool`

HasHostPassword returns a boolean if a field has been set.

### GetHostUser

`func (o *Migration) GetHostUser() string`

GetHostUser returns the HostUser field if non-nil, zero value otherwise.

### GetHostUserOk

`func (o *Migration) GetHostUserOk() (*string, bool)`

GetHostUserOk returns a tuple with the HostUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHostUser

`func (o *Migration) SetHostUser(v string)`

SetHostUser sets HostUser field to given value.

### HasHostUser

`func (o *Migration) HasHostUser() bool`

HasHostUser returns a boolean if a field has been set.

### GetMigrationType

`func (o *Migration) GetMigrationType() string`

GetMigrationType returns the MigrationType field if non-nil, zero value otherwise.

### GetMigrationTypeOk

`func (o *Migration) GetMigrationTypeOk() (*string, bool)`

GetMigrationTypeOk returns a tuple with the MigrationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMigrationType

`func (o *Migration) SetMigrationType(v string)`

SetMigrationType sets MigrationType field to given value.

### HasMigrationType

`func (o *Migration) HasMigrationType() bool`

HasMigrationType returns a boolean if a field has been set.

### GetWordpressPassword

`func (o *Migration) GetWordpressPassword() string`

GetWordpressPassword returns the WordpressPassword field if non-nil, zero value otherwise.

### GetWordpressPasswordOk

`func (o *Migration) GetWordpressPasswordOk() (*string, bool)`

GetWordpressPasswordOk returns a tuple with the WordpressPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressPassword

`func (o *Migration) SetWordpressPassword(v string)`

SetWordpressPassword sets WordpressPassword field to given value.


### GetWordpressUser

`func (o *Migration) GetWordpressUser() string`

GetWordpressUser returns the WordpressUser field if non-nil, zero value otherwise.

### GetWordpressUserOk

`func (o *Migration) GetWordpressUserOk() (*string, bool)`

GetWordpressUserOk returns a tuple with the WordpressUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWordpressUser

`func (o *Migration) SetWordpressUser(v string)`

SetWordpressUser sets WordpressUser field to given value.


### GetZipFileName

`func (o *Migration) GetZipFileName() string`

GetZipFileName returns the ZipFileName field if non-nil, zero value otherwise.

### GetZipFileNameOk

`func (o *Migration) GetZipFileNameOk() (*string, bool)`

GetZipFileNameOk returns a tuple with the ZipFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZipFileName

`func (o *Migration) SetZipFileName(v string)`

SetZipFileName sets ZipFileName field to given value.

### HasZipFileName

`func (o *Migration) HasZipFileName() bool`

HasZipFileName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


