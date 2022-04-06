/*
Site Bay

OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// PlanCreate struct for PlanCreate
type PlanCreate struct {
	AdditionalSites *int32 `json:"additional_sites,omitempty"`
	Interval string `json:"interval"`
	NewTeamName *string `json:"new_team_name,omitempty"`
	PlanTypeName string `json:"plan_type_name"`
}

// NewPlanCreate instantiates a new PlanCreate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPlanCreate(interval string, planTypeName string) *PlanCreate {
	this := PlanCreate{}
	var additionalSites int32 = 0
	this.AdditionalSites = &additionalSites
	this.Interval = interval
	var newTeamName string = "Personal"
	this.NewTeamName = &newTeamName
	this.PlanTypeName = planTypeName
	return &this
}

// NewPlanCreateWithDefaults instantiates a new PlanCreate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPlanCreateWithDefaults() *PlanCreate {
	this := PlanCreate{}
	var additionalSites int32 = 0
	this.AdditionalSites = &additionalSites
	var newTeamName string = "Personal"
	this.NewTeamName = &newTeamName
	return &this
}

// GetAdditionalSites returns the AdditionalSites field value if set, zero value otherwise.
func (o *PlanCreate) GetAdditionalSites() int32 {
	if o == nil || o.AdditionalSites == nil {
		var ret int32
		return ret
	}
	return *o.AdditionalSites
}

// GetAdditionalSitesOk returns a tuple with the AdditionalSites field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanCreate) GetAdditionalSitesOk() (*int32, bool) {
	if o == nil || o.AdditionalSites == nil {
		return nil, false
	}
	return o.AdditionalSites, true
}

// HasAdditionalSites returns a boolean if a field has been set.
func (o *PlanCreate) HasAdditionalSites() bool {
	if o != nil && o.AdditionalSites != nil {
		return true
	}

	return false
}

// SetAdditionalSites gets a reference to the given int32 and assigns it to the AdditionalSites field.
func (o *PlanCreate) SetAdditionalSites(v int32) {
	o.AdditionalSites = &v
}

// GetInterval returns the Interval field value
func (o *PlanCreate) GetInterval() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Interval
}

// GetIntervalOk returns a tuple with the Interval field value
// and a boolean to check if the value has been set.
func (o *PlanCreate) GetIntervalOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Interval, true
}

// SetInterval sets field value
func (o *PlanCreate) SetInterval(v string) {
	o.Interval = v
}

// GetNewTeamName returns the NewTeamName field value if set, zero value otherwise.
func (o *PlanCreate) GetNewTeamName() string {
	if o == nil || o.NewTeamName == nil {
		var ret string
		return ret
	}
	return *o.NewTeamName
}

// GetNewTeamNameOk returns a tuple with the NewTeamName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanCreate) GetNewTeamNameOk() (*string, bool) {
	if o == nil || o.NewTeamName == nil {
		return nil, false
	}
	return o.NewTeamName, true
}

// HasNewTeamName returns a boolean if a field has been set.
func (o *PlanCreate) HasNewTeamName() bool {
	if o != nil && o.NewTeamName != nil {
		return true
	}

	return false
}

// SetNewTeamName gets a reference to the given string and assigns it to the NewTeamName field.
func (o *PlanCreate) SetNewTeamName(v string) {
	o.NewTeamName = &v
}

// GetPlanTypeName returns the PlanTypeName field value
func (o *PlanCreate) GetPlanTypeName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.PlanTypeName
}

// GetPlanTypeNameOk returns a tuple with the PlanTypeName field value
// and a boolean to check if the value has been set.
func (o *PlanCreate) GetPlanTypeNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PlanTypeName, true
}

// SetPlanTypeName sets field value
func (o *PlanCreate) SetPlanTypeName(v string) {
	o.PlanTypeName = v
}

func (o PlanCreate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.AdditionalSites != nil {
		toSerialize["additional_sites"] = o.AdditionalSites
	}
	if true {
		toSerialize["interval"] = o.Interval
	}
	if o.NewTeamName != nil {
		toSerialize["new_team_name"] = o.NewTeamName
	}
	if true {
		toSerialize["plan_type_name"] = o.PlanTypeName
	}
	return json.Marshal(toSerialize)
}

type NullablePlanCreate struct {
	value *PlanCreate
	isSet bool
}

func (v NullablePlanCreate) Get() *PlanCreate {
	return v.value
}

func (v *NullablePlanCreate) Set(val *PlanCreate) {
	v.value = val
	v.isSet = true
}

func (v NullablePlanCreate) IsSet() bool {
	return v.isSet
}

func (v *NullablePlanCreate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePlanCreate(val *PlanCreate) *NullablePlanCreate {
	return &NullablePlanCreate{value: val, isSet: true}
}

func (v NullablePlanCreate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePlanCreate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


