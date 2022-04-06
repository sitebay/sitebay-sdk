# UserEmailCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForwardToEmail** | Pointer to **string** |  | [optional] 
**LocalPart** | **string** |  | 
**Password** | Pointer to **string** |  | [optional] 

## Methods

### NewUserEmailCreate

`func NewUserEmailCreate(localPart string, ) *UserEmailCreate`

NewUserEmailCreate instantiates a new UserEmailCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserEmailCreateWithDefaults

`func NewUserEmailCreateWithDefaults() *UserEmailCreate`

NewUserEmailCreateWithDefaults instantiates a new UserEmailCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForwardToEmail

`func (o *UserEmailCreate) GetForwardToEmail() string`

GetForwardToEmail returns the ForwardToEmail field if non-nil, zero value otherwise.

### GetForwardToEmailOk

`func (o *UserEmailCreate) GetForwardToEmailOk() (*string, bool)`

GetForwardToEmailOk returns a tuple with the ForwardToEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwardToEmail

`func (o *UserEmailCreate) SetForwardToEmail(v string)`

SetForwardToEmail sets ForwardToEmail field to given value.

### HasForwardToEmail

`func (o *UserEmailCreate) HasForwardToEmail() bool`

HasForwardToEmail returns a boolean if a field has been set.

### GetLocalPart

`func (o *UserEmailCreate) GetLocalPart() string`

GetLocalPart returns the LocalPart field if non-nil, zero value otherwise.

### GetLocalPartOk

`func (o *UserEmailCreate) GetLocalPartOk() (*string, bool)`

GetLocalPartOk returns a tuple with the LocalPart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalPart

`func (o *UserEmailCreate) SetLocalPart(v string)`

SetLocalPart sets LocalPart field to given value.


### GetPassword

`func (o *UserEmailCreate) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *UserEmailCreate) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *UserEmailCreate) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *UserEmailCreate) HasPassword() bool`

HasPassword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


