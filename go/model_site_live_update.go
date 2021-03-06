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

// SiteLiveUpdate struct for SiteLiveUpdate
type SiteLiveUpdate struct {
	Fqdn *string `json:"fqdn,omitempty"`
	GitUrl *string `json:"git_url,omitempty"`
	HttpAuthEnabled *bool `json:"http_auth_enabled,omitempty"`
	TeamId *string `json:"team_id,omitempty"`
}

// NewSiteLiveUpdate instantiates a new SiteLiveUpdate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSiteLiveUpdate() *SiteLiveUpdate {
	this := SiteLiveUpdate{}
	return &this
}

// NewSiteLiveUpdateWithDefaults instantiates a new SiteLiveUpdate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSiteLiveUpdateWithDefaults() *SiteLiveUpdate {
	this := SiteLiveUpdate{}
	return &this
}

// GetFqdn returns the Fqdn field value if set, zero value otherwise.
func (o *SiteLiveUpdate) GetFqdn() string {
	if o == nil || o.Fqdn == nil {
		var ret string
		return ret
	}
	return *o.Fqdn
}

// GetFqdnOk returns a tuple with the Fqdn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SiteLiveUpdate) GetFqdnOk() (*string, bool) {
	if o == nil || o.Fqdn == nil {
		return nil, false
	}
	return o.Fqdn, true
}

// HasFqdn returns a boolean if a field has been set.
func (o *SiteLiveUpdate) HasFqdn() bool {
	if o != nil && o.Fqdn != nil {
		return true
	}

	return false
}

// SetFqdn gets a reference to the given string and assigns it to the Fqdn field.
func (o *SiteLiveUpdate) SetFqdn(v string) {
	o.Fqdn = &v
}

// GetGitUrl returns the GitUrl field value if set, zero value otherwise.
func (o *SiteLiveUpdate) GetGitUrl() string {
	if o == nil || o.GitUrl == nil {
		var ret string
		return ret
	}
	return *o.GitUrl
}

// GetGitUrlOk returns a tuple with the GitUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SiteLiveUpdate) GetGitUrlOk() (*string, bool) {
	if o == nil || o.GitUrl == nil {
		return nil, false
	}
	return o.GitUrl, true
}

// HasGitUrl returns a boolean if a field has been set.
func (o *SiteLiveUpdate) HasGitUrl() bool {
	if o != nil && o.GitUrl != nil {
		return true
	}

	return false
}

// SetGitUrl gets a reference to the given string and assigns it to the GitUrl field.
func (o *SiteLiveUpdate) SetGitUrl(v string) {
	o.GitUrl = &v
}

// GetHttpAuthEnabled returns the HttpAuthEnabled field value if set, zero value otherwise.
func (o *SiteLiveUpdate) GetHttpAuthEnabled() bool {
	if o == nil || o.HttpAuthEnabled == nil {
		var ret bool
		return ret
	}
	return *o.HttpAuthEnabled
}

// GetHttpAuthEnabledOk returns a tuple with the HttpAuthEnabled field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SiteLiveUpdate) GetHttpAuthEnabledOk() (*bool, bool) {
	if o == nil || o.HttpAuthEnabled == nil {
		return nil, false
	}
	return o.HttpAuthEnabled, true
}

// HasHttpAuthEnabled returns a boolean if a field has been set.
func (o *SiteLiveUpdate) HasHttpAuthEnabled() bool {
	if o != nil && o.HttpAuthEnabled != nil {
		return true
	}

	return false
}

// SetHttpAuthEnabled gets a reference to the given bool and assigns it to the HttpAuthEnabled field.
func (o *SiteLiveUpdate) SetHttpAuthEnabled(v bool) {
	o.HttpAuthEnabled = &v
}

// GetTeamId returns the TeamId field value if set, zero value otherwise.
func (o *SiteLiveUpdate) GetTeamId() string {
	if o == nil || o.TeamId == nil {
		var ret string
		return ret
	}
	return *o.TeamId
}

// GetTeamIdOk returns a tuple with the TeamId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SiteLiveUpdate) GetTeamIdOk() (*string, bool) {
	if o == nil || o.TeamId == nil {
		return nil, false
	}
	return o.TeamId, true
}

// HasTeamId returns a boolean if a field has been set.
func (o *SiteLiveUpdate) HasTeamId() bool {
	if o != nil && o.TeamId != nil {
		return true
	}

	return false
}

// SetTeamId gets a reference to the given string and assigns it to the TeamId field.
func (o *SiteLiveUpdate) SetTeamId(v string) {
	o.TeamId = &v
}

func (o SiteLiveUpdate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Fqdn != nil {
		toSerialize["fqdn"] = o.Fqdn
	}
	if o.GitUrl != nil {
		toSerialize["git_url"] = o.GitUrl
	}
	if o.HttpAuthEnabled != nil {
		toSerialize["http_auth_enabled"] = o.HttpAuthEnabled
	}
	if o.TeamId != nil {
		toSerialize["team_id"] = o.TeamId
	}
	return json.Marshal(toSerialize)
}

type NullableSiteLiveUpdate struct {
	value *SiteLiveUpdate
	isSet bool
}

func (v NullableSiteLiveUpdate) Get() *SiteLiveUpdate {
	return v.value
}

func (v *NullableSiteLiveUpdate) Set(val *SiteLiveUpdate) {
	v.value = val
	v.isSet = true
}

func (v NullableSiteLiveUpdate) IsSet() bool {
	return v.isSet
}

func (v *NullableSiteLiveUpdate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSiteLiveUpdate(val *SiteLiveUpdate) *NullableSiteLiveUpdate {
	return &NullableSiteLiveUpdate{value: val, isSet: true}
}

func (v NullableSiteLiveUpdate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSiteLiveUpdate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


