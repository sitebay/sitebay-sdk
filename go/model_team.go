/*
Site Bay

OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// Team struct for Team
type Team struct {
	Created time.Time `json:"created"`
	Id string `json:"id"`
	Name string `json:"name"`
	PlanId string `json:"plan_id"`
	Timezone string `json:"timezone"`
}

// NewTeam instantiates a new Team object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTeam(created time.Time, id string, name string, planId string, timezone string) *Team {
	this := Team{}
	this.Created = created
	this.Id = id
	this.Name = name
	this.PlanId = planId
	this.Timezone = timezone
	return &this
}

// NewTeamWithDefaults instantiates a new Team object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTeamWithDefaults() *Team {
	this := Team{}
	return &this
}

// GetCreated returns the Created field value
func (o *Team) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *Team) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *Team) SetCreated(v time.Time) {
	o.Created = v
}

// GetId returns the Id field value
func (o *Team) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *Team) GetIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *Team) SetId(v string) {
	o.Id = v
}

// GetName returns the Name field value
func (o *Team) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *Team) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *Team) SetName(v string) {
	o.Name = v
}

// GetPlanId returns the PlanId field value
func (o *Team) GetPlanId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.PlanId
}

// GetPlanIdOk returns a tuple with the PlanId field value
// and a boolean to check if the value has been set.
func (o *Team) GetPlanIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.PlanId, true
}

// SetPlanId sets field value
func (o *Team) SetPlanId(v string) {
	o.PlanId = v
}

// GetTimezone returns the Timezone field value
func (o *Team) GetTimezone() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Timezone
}

// GetTimezoneOk returns a tuple with the Timezone field value
// and a boolean to check if the value has been set.
func (o *Team) GetTimezoneOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Timezone, true
}

// SetTimezone sets field value
func (o *Team) SetTimezone(v string) {
	o.Timezone = v
}

func (o Team) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["created"] = o.Created
	}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if true {
		toSerialize["plan_id"] = o.PlanId
	}
	if true {
		toSerialize["timezone"] = o.Timezone
	}
	return json.Marshal(toSerialize)
}

type NullableTeam struct {
	value *Team
	isSet bool
}

func (v NullableTeam) Get() *Team {
	return v.value
}

func (v *NullableTeam) Set(val *Team) {
	v.value = val
	v.isSet = true
}

func (v NullableTeam) IsSet() bool {
	return v.isSet
}

func (v *NullableTeam) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTeam(val *Team) *NullableTeam {
	return &NullableTeam{value: val, isSet: true}
}

func (v NullableTeam) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTeam) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

