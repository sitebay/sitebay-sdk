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

// PITRestoreCreate struct for PITRestoreCreate
type PITRestoreCreate struct {
	ForStageSite *bool `json:"for_stage_site,omitempty"`
	RestorePoint time.Time `json:"restore_point"`
}

// NewPITRestoreCreate instantiates a new PITRestoreCreate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPITRestoreCreate(restorePoint time.Time) *PITRestoreCreate {
	this := PITRestoreCreate{}
	var forStageSite bool = false
	this.ForStageSite = &forStageSite
	this.RestorePoint = restorePoint
	return &this
}

// NewPITRestoreCreateWithDefaults instantiates a new PITRestoreCreate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPITRestoreCreateWithDefaults() *PITRestoreCreate {
	this := PITRestoreCreate{}
	var forStageSite bool = false
	this.ForStageSite = &forStageSite
	return &this
}

// GetForStageSite returns the ForStageSite field value if set, zero value otherwise.
func (o *PITRestoreCreate) GetForStageSite() bool {
	if o == nil || o.ForStageSite == nil {
		var ret bool
		return ret
	}
	return *o.ForStageSite
}

// GetForStageSiteOk returns a tuple with the ForStageSite field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PITRestoreCreate) GetForStageSiteOk() (*bool, bool) {
	if o == nil || o.ForStageSite == nil {
		return nil, false
	}
	return o.ForStageSite, true
}

// HasForStageSite returns a boolean if a field has been set.
func (o *PITRestoreCreate) HasForStageSite() bool {
	if o != nil && o.ForStageSite != nil {
		return true
	}

	return false
}

// SetForStageSite gets a reference to the given bool and assigns it to the ForStageSite field.
func (o *PITRestoreCreate) SetForStageSite(v bool) {
	o.ForStageSite = &v
}

// GetRestorePoint returns the RestorePoint field value
func (o *PITRestoreCreate) GetRestorePoint() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.RestorePoint
}

// GetRestorePointOk returns a tuple with the RestorePoint field value
// and a boolean to check if the value has been set.
func (o *PITRestoreCreate) GetRestorePointOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.RestorePoint, true
}

// SetRestorePoint sets field value
func (o *PITRestoreCreate) SetRestorePoint(v time.Time) {
	o.RestorePoint = v
}

func (o PITRestoreCreate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.ForStageSite != nil {
		toSerialize["for_stage_site"] = o.ForStageSite
	}
	if true {
		toSerialize["restore_point"] = o.RestorePoint
	}
	return json.Marshal(toSerialize)
}

type NullablePITRestoreCreate struct {
	value *PITRestoreCreate
	isSet bool
}

func (v NullablePITRestoreCreate) Get() *PITRestoreCreate {
	return v.value
}

func (v *NullablePITRestoreCreate) Set(val *PITRestoreCreate) {
	v.value = val
	v.isSet = true
}

func (v NullablePITRestoreCreate) IsSet() bool {
	return v.isSet
}

func (v *NullablePITRestoreCreate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePITRestoreCreate(val *PITRestoreCreate) *NullablePITRestoreCreate {
	return &NullablePITRestoreCreate{value: val, isSet: true}
}

func (v NullablePITRestoreCreate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePITRestoreCreate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


