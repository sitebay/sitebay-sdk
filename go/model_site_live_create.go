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

// SiteLiveCreate struct for SiteLiveCreate
type SiteLiveCreate struct {
	Fqdn string `json:"fqdn"`
	GitUrl *string `json:"git_url,omitempty"`
	RegionId *int32 `json:"region_id,omitempty"`
	TeamId string `json:"team_id"`
	TemplateName *string `json:"template_name,omitempty"`
	WordpressBlogName string `json:"wordpressBlogName"`
	WordpressEmail string `json:"wordpressEmail"`
	WordpressFirstName string `json:"wordpressFirstName"`
	WordpressLastName string `json:"wordpressLastName"`
	WordpressPassword string `json:"wordpressPassword"`
	WordpressUsername string `json:"wordpressUsername"`
}

// NewSiteLiveCreate instantiates a new SiteLiveCreate object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSiteLiveCreate(fqdn string, teamId string, wordpressBlogName string, wordpressEmail string, wordpressFirstName string, wordpressLastName string, wordpressPassword string, wordpressUsername string) *SiteLiveCreate {
	this := SiteLiveCreate{}
	this.Fqdn = fqdn
	var regionId int32 = 1
	this.RegionId = &regionId
	this.TeamId = teamId
	this.WordpressBlogName = wordpressBlogName
	this.WordpressEmail = wordpressEmail
	this.WordpressFirstName = wordpressFirstName
	this.WordpressLastName = wordpressLastName
	this.WordpressPassword = wordpressPassword
	this.WordpressUsername = wordpressUsername
	return &this
}

// NewSiteLiveCreateWithDefaults instantiates a new SiteLiveCreate object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSiteLiveCreateWithDefaults() *SiteLiveCreate {
	this := SiteLiveCreate{}
	var regionId int32 = 1
	this.RegionId = &regionId
	return &this
}

// GetFqdn returns the Fqdn field value
func (o *SiteLiveCreate) GetFqdn() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Fqdn
}

// GetFqdnOk returns a tuple with the Fqdn field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetFqdnOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Fqdn, true
}

// SetFqdn sets field value
func (o *SiteLiveCreate) SetFqdn(v string) {
	o.Fqdn = v
}

// GetGitUrl returns the GitUrl field value if set, zero value otherwise.
func (o *SiteLiveCreate) GetGitUrl() string {
	if o == nil || o.GitUrl == nil {
		var ret string
		return ret
	}
	return *o.GitUrl
}

// GetGitUrlOk returns a tuple with the GitUrl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetGitUrlOk() (*string, bool) {
	if o == nil || o.GitUrl == nil {
		return nil, false
	}
	return o.GitUrl, true
}

// HasGitUrl returns a boolean if a field has been set.
func (o *SiteLiveCreate) HasGitUrl() bool {
	if o != nil && o.GitUrl != nil {
		return true
	}

	return false
}

// SetGitUrl gets a reference to the given string and assigns it to the GitUrl field.
func (o *SiteLiveCreate) SetGitUrl(v string) {
	o.GitUrl = &v
}

// GetRegionId returns the RegionId field value if set, zero value otherwise.
func (o *SiteLiveCreate) GetRegionId() int32 {
	if o == nil || o.RegionId == nil {
		var ret int32
		return ret
	}
	return *o.RegionId
}

// GetRegionIdOk returns a tuple with the RegionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetRegionIdOk() (*int32, bool) {
	if o == nil || o.RegionId == nil {
		return nil, false
	}
	return o.RegionId, true
}

// HasRegionId returns a boolean if a field has been set.
func (o *SiteLiveCreate) HasRegionId() bool {
	if o != nil && o.RegionId != nil {
		return true
	}

	return false
}

// SetRegionId gets a reference to the given int32 and assigns it to the RegionId field.
func (o *SiteLiveCreate) SetRegionId(v int32) {
	o.RegionId = &v
}

// GetTeamId returns the TeamId field value
func (o *SiteLiveCreate) GetTeamId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.TeamId
}

// GetTeamIdOk returns a tuple with the TeamId field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetTeamIdOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TeamId, true
}

// SetTeamId sets field value
func (o *SiteLiveCreate) SetTeamId(v string) {
	o.TeamId = v
}

// GetTemplateName returns the TemplateName field value if set, zero value otherwise.
func (o *SiteLiveCreate) GetTemplateName() string {
	if o == nil || o.TemplateName == nil {
		var ret string
		return ret
	}
	return *o.TemplateName
}

// GetTemplateNameOk returns a tuple with the TemplateName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetTemplateNameOk() (*string, bool) {
	if o == nil || o.TemplateName == nil {
		return nil, false
	}
	return o.TemplateName, true
}

// HasTemplateName returns a boolean if a field has been set.
func (o *SiteLiveCreate) HasTemplateName() bool {
	if o != nil && o.TemplateName != nil {
		return true
	}

	return false
}

// SetTemplateName gets a reference to the given string and assigns it to the TemplateName field.
func (o *SiteLiveCreate) SetTemplateName(v string) {
	o.TemplateName = &v
}

// GetWordpressBlogName returns the WordpressBlogName field value
func (o *SiteLiveCreate) GetWordpressBlogName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.WordpressBlogName
}

// GetWordpressBlogNameOk returns a tuple with the WordpressBlogName field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetWordpressBlogNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.WordpressBlogName, true
}

// SetWordpressBlogName sets field value
func (o *SiteLiveCreate) SetWordpressBlogName(v string) {
	o.WordpressBlogName = v
}

// GetWordpressEmail returns the WordpressEmail field value
func (o *SiteLiveCreate) GetWordpressEmail() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.WordpressEmail
}

// GetWordpressEmailOk returns a tuple with the WordpressEmail field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetWordpressEmailOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.WordpressEmail, true
}

// SetWordpressEmail sets field value
func (o *SiteLiveCreate) SetWordpressEmail(v string) {
	o.WordpressEmail = v
}

// GetWordpressFirstName returns the WordpressFirstName field value
func (o *SiteLiveCreate) GetWordpressFirstName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.WordpressFirstName
}

// GetWordpressFirstNameOk returns a tuple with the WordpressFirstName field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetWordpressFirstNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.WordpressFirstName, true
}

// SetWordpressFirstName sets field value
func (o *SiteLiveCreate) SetWordpressFirstName(v string) {
	o.WordpressFirstName = v
}

// GetWordpressLastName returns the WordpressLastName field value
func (o *SiteLiveCreate) GetWordpressLastName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.WordpressLastName
}

// GetWordpressLastNameOk returns a tuple with the WordpressLastName field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetWordpressLastNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.WordpressLastName, true
}

// SetWordpressLastName sets field value
func (o *SiteLiveCreate) SetWordpressLastName(v string) {
	o.WordpressLastName = v
}

// GetWordpressPassword returns the WordpressPassword field value
func (o *SiteLiveCreate) GetWordpressPassword() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.WordpressPassword
}

// GetWordpressPasswordOk returns a tuple with the WordpressPassword field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetWordpressPasswordOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.WordpressPassword, true
}

// SetWordpressPassword sets field value
func (o *SiteLiveCreate) SetWordpressPassword(v string) {
	o.WordpressPassword = v
}

// GetWordpressUsername returns the WordpressUsername field value
func (o *SiteLiveCreate) GetWordpressUsername() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.WordpressUsername
}

// GetWordpressUsernameOk returns a tuple with the WordpressUsername field value
// and a boolean to check if the value has been set.
func (o *SiteLiveCreate) GetWordpressUsernameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.WordpressUsername, true
}

// SetWordpressUsername sets field value
func (o *SiteLiveCreate) SetWordpressUsername(v string) {
	o.WordpressUsername = v
}

func (o SiteLiveCreate) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["fqdn"] = o.Fqdn
	}
	if o.GitUrl != nil {
		toSerialize["git_url"] = o.GitUrl
	}
	if o.RegionId != nil {
		toSerialize["region_id"] = o.RegionId
	}
	if true {
		toSerialize["team_id"] = o.TeamId
	}
	if o.TemplateName != nil {
		toSerialize["template_name"] = o.TemplateName
	}
	if true {
		toSerialize["wordpressBlogName"] = o.WordpressBlogName
	}
	if true {
		toSerialize["wordpressEmail"] = o.WordpressEmail
	}
	if true {
		toSerialize["wordpressFirstName"] = o.WordpressFirstName
	}
	if true {
		toSerialize["wordpressLastName"] = o.WordpressLastName
	}
	if true {
		toSerialize["wordpressPassword"] = o.WordpressPassword
	}
	if true {
		toSerialize["wordpressUsername"] = o.WordpressUsername
	}
	return json.Marshal(toSerialize)
}

type NullableSiteLiveCreate struct {
	value *SiteLiveCreate
	isSet bool
}

func (v NullableSiteLiveCreate) Get() *SiteLiveCreate {
	return v.value
}

func (v *NullableSiteLiveCreate) Set(val *SiteLiveCreate) {
	v.value = val
	v.isSet = true
}

func (v NullableSiteLiveCreate) IsSet() bool {
	return v.isSet
}

func (v *NullableSiteLiveCreate) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSiteLiveCreate(val *SiteLiveCreate) *NullableSiteLiveCreate {
	return &NullableSiteLiveCreate{value: val, isSet: true}
}

func (v NullableSiteLiveCreate) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSiteLiveCreate) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


