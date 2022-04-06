# UserEmailUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsCatchall** | Pointer to **bool** |  | [optional] 
**Password** | Pointer to **string** |  | [optional] 

## Methods

### NewUserEmailUpdate

`func NewUserEmailUpdate() *UserEmailUpdate`

NewUserEmailUpdate instantiates a new UserEmailUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserEmailUpdateWithDefaults

`func NewUserEmailUpdateWithDefaults() *UserEmailUpdate`

NewUserEmailUpdateWithDefaults instantiates a new UserEmailUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsCatchall

`func (o *UserEmailUpdate) GetIsCatchall() bool`

GetIsCatchall returns the IsCatchall field if non-nil, zero value otherwise.

### GetIsCatchallOk

`func (o *UserEmailUpdate) GetIsCatchallOk() (*bool, bool)`

GetIsCatchallOk returns a tuple with the IsCatchall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCatchall

`func (o *UserEmailUpdate) SetIsCatchall(v bool)`

SetIsCatchall sets IsCatchall field to given value.

### HasIsCatchall

`func (o *UserEmailUpdate) HasIsCatchall() bool`

HasIsCatchall returns a boolean if a field has been set.

### GetPassword

`func (o *UserEmailUpdate) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *UserEmailUpdate) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *UserEmailUpdate) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *UserEmailUpdate) HasPassword() bool`

HasPassword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


