# PlanCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalSites** | Pointer to **int32** |  | [optional] [default to 0]
**Interval** | **string** |  | 
**NewTeamName** | Pointer to **string** |  | [optional] [default to "Personal"]
**PlanTypeName** | **string** |  | 

## Methods

### NewPlanCreate

`func NewPlanCreate(interval string, planTypeName string, ) *PlanCreate`

NewPlanCreate instantiates a new PlanCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanCreateWithDefaults

`func NewPlanCreateWithDefaults() *PlanCreate`

NewPlanCreateWithDefaults instantiates a new PlanCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalSites

`func (o *PlanCreate) GetAdditionalSites() int32`

GetAdditionalSites returns the AdditionalSites field if non-nil, zero value otherwise.

### GetAdditionalSitesOk

`func (o *PlanCreate) GetAdditionalSitesOk() (*int32, bool)`

GetAdditionalSitesOk returns a tuple with the AdditionalSites field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalSites

`func (o *PlanCreate) SetAdditionalSites(v int32)`

SetAdditionalSites sets AdditionalSites field to given value.

### HasAdditionalSites

`func (o *PlanCreate) HasAdditionalSites() bool`

HasAdditionalSites returns a boolean if a field has been set.

### GetInterval

`func (o *PlanCreate) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PlanCreate) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PlanCreate) SetInterval(v string)`

SetInterval sets Interval field to given value.


### GetNewTeamName

`func (o *PlanCreate) GetNewTeamName() string`

GetNewTeamName returns the NewTeamName field if non-nil, zero value otherwise.

### GetNewTeamNameOk

`func (o *PlanCreate) GetNewTeamNameOk() (*string, bool)`

GetNewTeamNameOk returns a tuple with the NewTeamName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTeamName

`func (o *PlanCreate) SetNewTeamName(v string)`

SetNewTeamName sets NewTeamName field to given value.

### HasNewTeamName

`func (o *PlanCreate) HasNewTeamName() bool`

HasNewTeamName returns a boolean if a field has been set.

### GetPlanTypeName

`func (o *PlanCreate) GetPlanTypeName() string`

GetPlanTypeName returns the PlanTypeName field if non-nil, zero value otherwise.

### GetPlanTypeNameOk

`func (o *PlanCreate) GetPlanTypeNameOk() (*string, bool)`

GetPlanTypeNameOk returns a tuple with the PlanTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanTypeName

`func (o *PlanCreate) SetPlanTypeName(v string)`

SetPlanTypeName sets PlanTypeName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


