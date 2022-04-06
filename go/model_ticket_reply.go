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

// TicketReply struct for TicketReply
type TicketReply struct {
	Created time.Time `json:"created"`
	Description *string `json:"description,omitempty"`
	Resolve *bool `json:"resolve,omitempty"`
}

// NewTicketReply instantiates a new TicketReply object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTicketReply(created time.Time) *TicketReply {
	this := TicketReply{}
	this.Created = created
	return &this
}

// NewTicketReplyWithDefaults instantiates a new TicketReply object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTicketReplyWithDefaults() *TicketReply {
	this := TicketReply{}
	return &this
}

// GetCreated returns the Created field value
func (o *TicketReply) GetCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.Created
}

// GetCreatedOk returns a tuple with the Created field value
// and a boolean to check if the value has been set.
func (o *TicketReply) GetCreatedOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Created, true
}

// SetCreated sets field value
func (o *TicketReply) SetCreated(v time.Time) {
	o.Created = v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TicketReply) GetDescription() string {
	if o == nil || o.Description == nil {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketReply) GetDescriptionOk() (*string, bool) {
	if o == nil || o.Description == nil {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TicketReply) HasDescription() bool {
	if o != nil && o.Description != nil {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TicketReply) SetDescription(v string) {
	o.Description = &v
}

// GetResolve returns the Resolve field value if set, zero value otherwise.
func (o *TicketReply) GetResolve() bool {
	if o == nil || o.Resolve == nil {
		var ret bool
		return ret
	}
	return *o.Resolve
}

// GetResolveOk returns a tuple with the Resolve field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TicketReply) GetResolveOk() (*bool, bool) {
	if o == nil || o.Resolve == nil {
		return nil, false
	}
	return o.Resolve, true
}

// HasResolve returns a boolean if a field has been set.
func (o *TicketReply) HasResolve() bool {
	if o != nil && o.Resolve != nil {
		return true
	}

	return false
}

// SetResolve gets a reference to the given bool and assigns it to the Resolve field.
func (o *TicketReply) SetResolve(v bool) {
	o.Resolve = &v
}

func (o TicketReply) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["created"] = o.Created
	}
	if o.Description != nil {
		toSerialize["description"] = o.Description
	}
	if o.Resolve != nil {
		toSerialize["resolve"] = o.Resolve
	}
	return json.Marshal(toSerialize)
}

type NullableTicketReply struct {
	value *TicketReply
	isSet bool
}

func (v NullableTicketReply) Get() *TicketReply {
	return v.value
}

func (v *NullableTicketReply) Set(val *TicketReply) {
	v.value = val
	v.isSet = true
}

func (v NullableTicketReply) IsSet() bool {
	return v.isSet
}

func (v *NullableTicketReply) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTicketReply(val *TicketReply) *NullableTicketReply {
	return &NullableTicketReply{value: val, isSet: true}
}

func (v NullableTicketReply) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTicketReply) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

