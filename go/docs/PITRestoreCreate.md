# PITRestoreCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForStageSite** | Pointer to **bool** |  | [optional] [default to false]
**RestorePoint** | **time.Time** |  | 

## Methods

### NewPITRestoreCreate

`func NewPITRestoreCreate(restorePoint time.Time, ) *PITRestoreCreate`

NewPITRestoreCreate instantiates a new PITRestoreCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPITRestoreCreateWithDefaults

`func NewPITRestoreCreateWithDefaults() *PITRestoreCreate`

NewPITRestoreCreateWithDefaults instantiates a new PITRestoreCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForStageSite

`func (o *PITRestoreCreate) GetForStageSite() bool`

GetForStageSite returns the ForStageSite field if non-nil, zero value otherwise.

### GetForStageSiteOk

`func (o *PITRestoreCreate) GetForStageSiteOk() (*bool, bool)`

GetForStageSiteOk returns a tuple with the ForStageSite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForStageSite

`func (o *PITRestoreCreate) SetForStageSite(v bool)`

SetForStageSite sets ForStageSite field to given value.

### HasForStageSite

`func (o *PITRestoreCreate) HasForStageSite() bool`

HasForStageSite returns a boolean if a field has been set.

### GetRestorePoint

`func (o *PITRestoreCreate) GetRestorePoint() time.Time`

GetRestorePoint returns the RestorePoint field if non-nil, zero value otherwise.

### GetRestorePointOk

`func (o *PITRestoreCreate) GetRestorePointOk() (*time.Time, bool)`

GetRestorePointOk returns a tuple with the RestorePoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestorePoint

`func (o *PITRestoreCreate) SetRestorePoint(v time.Time)`

SetRestorePoint sets RestorePoint field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


