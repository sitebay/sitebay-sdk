# Plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalSites** | Pointer to **int32** |  | [optional] [default to 0]
**Created** | **time.Time** |  | 
**Currency** | Pointer to **string** |  | [optional] 
**Ends** | **time.Time** |  | 
**Id** | **string** |  | 
**Interval** | Pointer to **string** |  | [optional] 
**PlanTypeName** | **string** |  | 
**Team** | Pointer to [**Team**](Team.md) |  | [optional] 
**TeamId** | Pointer to **string** |  | [optional] 
**UserId** | **string** |  | 

## Methods

### NewPlan

`func NewPlan(created time.Time, ends time.Time, id string, planTypeName string, userId string, ) *Plan`

NewPlan instantiates a new Plan object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanWithDefaults

`func NewPlanWithDefaults() *Plan`

NewPlanWithDefaults instantiates a new Plan object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalSites

`func (o *Plan) GetAdditionalSites() int32`

GetAdditionalSites returns the AdditionalSites field if non-nil, zero value otherwise.

### GetAdditionalSitesOk

`func (o *Plan) GetAdditionalSitesOk() (*int32, bool)`

GetAdditionalSitesOk returns a tuple with the AdditionalSites field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalSites

`func (o *Plan) SetAdditionalSites(v int32)`

SetAdditionalSites sets AdditionalSites field to given value.

### HasAdditionalSites

`func (o *Plan) HasAdditionalSites() bool`

HasAdditionalSites returns a boolean if a field has been set.

### GetCreated

`func (o *Plan) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Plan) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Plan) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetCurrency

`func (o *Plan) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Plan) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Plan) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *Plan) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetEnds

`func (o *Plan) GetEnds() time.Time`

GetEnds returns the Ends field if non-nil, zero value otherwise.

### GetEndsOk

`func (o *Plan) GetEndsOk() (*time.Time, bool)`

GetEndsOk returns a tuple with the Ends field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnds

`func (o *Plan) SetEnds(v time.Time)`

SetEnds sets Ends field to given value.


### GetId

`func (o *Plan) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Plan) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Plan) SetId(v string)`

SetId sets Id field to given value.


### GetInterval

`func (o *Plan) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *Plan) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *Plan) SetInterval(v string)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *Plan) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetPlanTypeName

`func (o *Plan) GetPlanTypeName() string`

GetPlanTypeName returns the PlanTypeName field if non-nil, zero value otherwise.

### GetPlanTypeNameOk

`func (o *Plan) GetPlanTypeNameOk() (*string, bool)`

GetPlanTypeNameOk returns a tuple with the PlanTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanTypeName

`func (o *Plan) SetPlanTypeName(v string)`

SetPlanTypeName sets PlanTypeName field to given value.


### GetTeam

`func (o *Plan) GetTeam() Team`

GetTeam returns the Team field if non-nil, zero value otherwise.

### GetTeamOk

`func (o *Plan) GetTeamOk() (*Team, bool)`

GetTeamOk returns a tuple with the Team field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeam

`func (o *Plan) SetTeam(v Team)`

SetTeam sets Team field to given value.

### HasTeam

`func (o *Plan) HasTeam() bool`

HasTeam returns a boolean if a field has been set.

### GetTeamId

`func (o *Plan) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *Plan) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *Plan) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *Plan) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### GetUserId

`func (o *Plan) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *Plan) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *Plan) SetUserId(v string)`

SetUserId sets UserId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


