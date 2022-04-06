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

// TagCreate struct for TagCreate
type TagCreate struct {
	Name string `json:"name"`
}

// NewTagCreate instantiates a new TagCreate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTagCreate(name string) *TagCreate {
	this := TagCreate{}
	this.Name = name
	return &this
}

// NewTagCreateWithDefaults instantiates a new TagCreate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTagCreateWithDefaults() *TagCreate {
	this := TagCreate{}
	return &this
}

// GetName returns the Name field value
func (o *TagCreate) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *TagCreate) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *TagCreate) SetName(v string) {
	o.Name = v
}

func (o TagCreate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["name"] = o.Name
	}
	return json.Marshal(toSerialize)
}

type NullableTagCreate struct {
	value *TagCreate
	isSet bool
}

func (v NullableTagCreate) Get() *TagCreate {
	return v.value
}

func (v *NullableTagCreate) Set(val *TagCreate) {
	v.value = val
	v.isSet = true
}

func (v NullableTagCreate) IsSet() bool {
	return v.isSet
}

func (v *NullableTagCreate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTagCreate(val *TagCreate) *NullableTagCreate {
	return &NullableTagCreate{value: val, isSet: true}
}

func (v NullableTagCreate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTagCreate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


