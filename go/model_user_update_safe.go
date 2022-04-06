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

// UserUpdateSafe struct for UserUpdateSafe
type UserUpdateSafe struct {
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address2,omitempty"`
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	DefaultRegionId *int32 `json:"default_region_id,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Password *string `json:"password,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
	PostCode *string `json:"post_code,omitempty"`
	State *string `json:"state,omitempty"`
	Tfa *int32 `json:"tfa,omitempty"`
}

// NewUserUpdateSafe instantiates a new UserUpdateSafe object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUserUpdateSafe() *UserUpdateSafe {
	this := UserUpdateSafe{}
	var defaultRegionId int32 = 1
	this.DefaultRegionId = &defaultRegionId
	return &this
}

// NewUserUpdateSafeWithDefaults instantiates a new UserUpdateSafe object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUserUpdateSafeWithDefaults() *UserUpdateSafe {
	this := UserUpdateSafe{}
	var defaultRegionId int32 = 1
	this.DefaultRegionId = &defaultRegionId
	return &this
}

// GetAddress returns the Address field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetAddress() string {
	if o == nil || o.Address == nil {
		var ret string
		return ret
	}
	return *o.Address
}

// GetAddressOk returns a tuple with the Address field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetAddressOk() (*string, bool) {
	if o == nil || o.Address == nil {
		return nil, false
	}
	return o.Address, true
}

// HasAddress returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasAddress() bool {
	if o != nil && o.Address != nil {
		return true
	}

	return false
}

// SetAddress gets a reference to the given string and assigns it to the Address field.
func (o *UserUpdateSafe) SetAddress(v string) {
	o.Address = &v
}

// GetAddress2 returns the Address2 field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetAddress2() string {
	if o == nil || o.Address2 == nil {
		var ret string
		return ret
	}
	return *o.Address2
}

// GetAddress2Ok returns a tuple with the Address2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetAddress2Ok() (*string, bool) {
	if o == nil || o.Address2 == nil {
		return nil, false
	}
	return o.Address2, true
}

// HasAddress2 returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasAddress2() bool {
	if o != nil && o.Address2 != nil {
		return true
	}

	return false
}

// SetAddress2 gets a reference to the given string and assigns it to the Address2 field.
func (o *UserUpdateSafe) SetAddress2(v string) {
	o.Address2 = &v
}

// GetCity returns the City field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetCity() string {
	if o == nil || o.City == nil {
		var ret string
		return ret
	}
	return *o.City
}

// GetCityOk returns a tuple with the City field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetCityOk() (*string, bool) {
	if o == nil || o.City == nil {
		return nil, false
	}
	return o.City, true
}

// HasCity returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasCity() bool {
	if o != nil && o.City != nil {
		return true
	}

	return false
}

// SetCity gets a reference to the given string and assigns it to the City field.
func (o *UserUpdateSafe) SetCity(v string) {
	o.City = &v
}

// GetCountry returns the Country field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetCountry() string {
	if o == nil || o.Country == nil {
		var ret string
		return ret
	}
	return *o.Country
}

// GetCountryOk returns a tuple with the Country field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetCountryOk() (*string, bool) {
	if o == nil || o.Country == nil {
		return nil, false
	}
	return o.Country, true
}

// HasCountry returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasCountry() bool {
	if o != nil && o.Country != nil {
		return true
	}

	return false
}

// SetCountry gets a reference to the given string and assigns it to the Country field.
func (o *UserUpdateSafe) SetCountry(v string) {
	o.Country = &v
}

// GetDefaultRegionId returns the DefaultRegionId field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetDefaultRegionId() int32 {
	if o == nil || o.DefaultRegionId == nil {
		var ret int32
		return ret
	}
	return *o.DefaultRegionId
}

// GetDefaultRegionIdOk returns a tuple with the DefaultRegionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetDefaultRegionIdOk() (*int32, bool) {
	if o == nil || o.DefaultRegionId == nil {
		return nil, false
	}
	return o.DefaultRegionId, true
}

// HasDefaultRegionId returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasDefaultRegionId() bool {
	if o != nil && o.DefaultRegionId != nil {
		return true
	}

	return false
}

// SetDefaultRegionId gets a reference to the given int32 and assigns it to the DefaultRegionId field.
func (o *UserUpdateSafe) SetDefaultRegionId(v int32) {
	o.DefaultRegionId = &v
}

// GetFullName returns the FullName field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetFullName() string {
	if o == nil || o.FullName == nil {
		var ret string
		return ret
	}
	return *o.FullName
}

// GetFullNameOk returns a tuple with the FullName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetFullNameOk() (*string, bool) {
	if o == nil || o.FullName == nil {
		return nil, false
	}
	return o.FullName, true
}

// HasFullName returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasFullName() bool {
	if o != nil && o.FullName != nil {
		return true
	}

	return false
}

// SetFullName gets a reference to the given string and assigns it to the FullName field.
func (o *UserUpdateSafe) SetFullName(v string) {
	o.FullName = &v
}

// GetPassword returns the Password field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetPassword() string {
	if o == nil || o.Password == nil {
		var ret string
		return ret
	}
	return *o.Password
}

// GetPasswordOk returns a tuple with the Password field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetPasswordOk() (*string, bool) {
	if o == nil || o.Password == nil {
		return nil, false
	}
	return o.Password, true
}

// HasPassword returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasPassword() bool {
	if o != nil && o.Password != nil {
		return true
	}

	return false
}

// SetPassword gets a reference to the given string and assigns it to the Password field.
func (o *UserUpdateSafe) SetPassword(v string) {
	o.Password = &v
}

// GetPhoneNumber returns the PhoneNumber field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetPhoneNumber() string {
	if o == nil || o.PhoneNumber == nil {
		var ret string
		return ret
	}
	return *o.PhoneNumber
}

// GetPhoneNumberOk returns a tuple with the PhoneNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetPhoneNumberOk() (*string, bool) {
	if o == nil || o.PhoneNumber == nil {
		return nil, false
	}
	return o.PhoneNumber, true
}

// HasPhoneNumber returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasPhoneNumber() bool {
	if o != nil && o.PhoneNumber != nil {
		return true
	}

	return false
}

// SetPhoneNumber gets a reference to the given string and assigns it to the PhoneNumber field.
func (o *UserUpdateSafe) SetPhoneNumber(v string) {
	o.PhoneNumber = &v
}

// GetPostCode returns the PostCode field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetPostCode() string {
	if o == nil || o.PostCode == nil {
		var ret string
		return ret
	}
	return *o.PostCode
}

// GetPostCodeOk returns a tuple with the PostCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetPostCodeOk() (*string, bool) {
	if o == nil || o.PostCode == nil {
		return nil, false
	}
	return o.PostCode, true
}

// HasPostCode returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasPostCode() bool {
	if o != nil && o.PostCode != nil {
		return true
	}

	return false
}

// SetPostCode gets a reference to the given string and assigns it to the PostCode field.
func (o *UserUpdateSafe) SetPostCode(v string) {
	o.PostCode = &v
}

// GetState returns the State field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetState() string {
	if o == nil || o.State == nil {
		var ret string
		return ret
	}
	return *o.State
}

// GetStateOk returns a tuple with the State field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetStateOk() (*string, bool) {
	if o == nil || o.State == nil {
		return nil, false
	}
	return o.State, true
}

// HasState returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasState() bool {
	if o != nil && o.State != nil {
		return true
	}

	return false
}

// SetState gets a reference to the given string and assigns it to the State field.
func (o *UserUpdateSafe) SetState(v string) {
	o.State = &v
}

// GetTfa returns the Tfa field value if set, zero value otherwise.
func (o *UserUpdateSafe) GetTfa() int32 {
	if o == nil || o.Tfa == nil {
		var ret int32
		return ret
	}
	return *o.Tfa
}

// GetTfaOk returns a tuple with the Tfa field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserUpdateSafe) GetTfaOk() (*int32, bool) {
	if o == nil || o.Tfa == nil {
		return nil, false
	}
	return o.Tfa, true
}

// HasTfa returns a boolean if a field has been set.
func (o *UserUpdateSafe) HasTfa() bool {
	if o != nil && o.Tfa != nil {
		return true
	}

	return false
}

// SetTfa gets a reference to the given int32 and assigns it to the Tfa field.
func (o *UserUpdateSafe) SetTfa(v int32) {
	o.Tfa = &v
}

func (o UserUpdateSafe) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Address != nil {
		toSerialize["address"] = o.Address
	}
	if o.Address2 != nil {
		toSerialize["address2"] = o.Address2
	}
	if o.City != nil {
		toSerialize["city"] = o.City
	}
	if o.Country != nil {
		toSerialize["country"] = o.Country
	}
	if o.DefaultRegionId != nil {
		toSerialize["default_region_id"] = o.DefaultRegionId
	}
	if o.FullName != nil {
		toSerialize["full_name"] = o.FullName
	}
	if o.Password != nil {
		toSerialize["password"] = o.Password
	}
	if o.PhoneNumber != nil {
		toSerialize["phone_number"] = o.PhoneNumber
	}
	if o.PostCode != nil {
		toSerialize["post_code"] = o.PostCode
	}
	if o.State != nil {
		toSerialize["state"] = o.State
	}
	if o.Tfa != nil {
		toSerialize["tfa"] = o.Tfa
	}
	return json.Marshal(toSerialize)
}

type NullableUserUpdateSafe struct {
	value *UserUpdateSafe
	isSet bool
}

func (v NullableUserUpdateSafe) Get() *UserUpdateSafe {
	return v.value
}

func (v *NullableUserUpdateSafe) Set(val *UserUpdateSafe) {
	v.value = val
	v.isSet = true
}

func (v NullableUserUpdateSafe) IsSet() bool {
	return v.isSet
}

func (v *NullableUserUpdateSafe) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUserUpdateSafe(val *UserUpdateSafe) *NullableUserUpdateSafe {
	return &NullableUserUpdateSafe{value: val, isSet: true}
}

func (v NullableUserUpdateSafe) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUserUpdateSafe) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


