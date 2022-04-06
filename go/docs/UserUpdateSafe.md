# UserUpdateSafe

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to **string** |  | [optional] 
**Address2** | Pointer to **string** |  | [optional] 
**City** | Pointer to **string** |  | [optional] 
**Country** | Pointer to **string** |  | [optional] 
**DefaultRegionId** | Pointer to **int32** |  | [optional] [default to 1]
**FullName** | Pointer to **string** |  | [optional] 
**Password** | Pointer to **string** |  | [optional] 
**PhoneNumber** | Pointer to **string** |  | [optional] 
**PostCode** | Pointer to **string** |  | [optional] 
**State** | Pointer to **string** |  | [optional] 
**Tfa** | Pointer to **int32** |  | [optional] 

## Methods

### NewUserUpdateSafe

`func NewUserUpdateSafe() *UserUpdateSafe`

NewUserUpdateSafe instantiates a new UserUpdateSafe object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserUpdateSafeWithDefaults

`func NewUserUpdateSafeWithDefaults() *UserUpdateSafe`

NewUserUpdateSafeWithDefaults instantiates a new UserUpdateSafe object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *UserUpdateSafe) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *UserUpdateSafe) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *UserUpdateSafe) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *UserUpdateSafe) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAddress2

`func (o *UserUpdateSafe) GetAddress2() string`

GetAddress2 returns the Address2 field if non-nil, zero value otherwise.

### GetAddress2Ok

`func (o *UserUpdateSafe) GetAddress2Ok() (*string, bool)`

GetAddress2Ok returns a tuple with the Address2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress2

`func (o *UserUpdateSafe) SetAddress2(v string)`

SetAddress2 sets Address2 field to given value.

### HasAddress2

`func (o *UserUpdateSafe) HasAddress2() bool`

HasAddress2 returns a boolean if a field has been set.

### GetCity

`func (o *UserUpdateSafe) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *UserUpdateSafe) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *UserUpdateSafe) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *UserUpdateSafe) HasCity() bool`

HasCity returns a boolean if a field has been set.

### GetCountry

`func (o *UserUpdateSafe) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *UserUpdateSafe) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *UserUpdateSafe) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *UserUpdateSafe) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetDefaultRegionId

`func (o *UserUpdateSafe) GetDefaultRegionId() int32`

GetDefaultRegionId returns the DefaultRegionId field if non-nil, zero value otherwise.

### GetDefaultRegionIdOk

`func (o *UserUpdateSafe) GetDefaultRegionIdOk() (*int32, bool)`

GetDefaultRegionIdOk returns a tuple with the DefaultRegionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultRegionId

`func (o *UserUpdateSafe) SetDefaultRegionId(v int32)`

SetDefaultRegionId sets DefaultRegionId field to given value.

### HasDefaultRegionId

`func (o *UserUpdateSafe) HasDefaultRegionId() bool`

HasDefaultRegionId returns a boolean if a field has been set.

### GetFullName

`func (o *UserUpdateSafe) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *UserUpdateSafe) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *UserUpdateSafe) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *UserUpdateSafe) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetPassword

`func (o *UserUpdateSafe) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *UserUpdateSafe) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *UserUpdateSafe) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *UserUpdateSafe) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *UserUpdateSafe) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *UserUpdateSafe) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *UserUpdateSafe) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *UserUpdateSafe) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetPostCode

`func (o *UserUpdateSafe) GetPostCode() string`

GetPostCode returns the PostCode field if non-nil, zero value otherwise.

### GetPostCodeOk

`func (o *UserUpdateSafe) GetPostCodeOk() (*string, bool)`

GetPostCodeOk returns a tuple with the PostCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostCode

`func (o *UserUpdateSafe) SetPostCode(v string)`

SetPostCode sets PostCode field to given value.

### HasPostCode

`func (o *UserUpdateSafe) HasPostCode() bool`

HasPostCode returns a boolean if a field has been set.

### GetState

`func (o *UserUpdateSafe) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *UserUpdateSafe) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *UserUpdateSafe) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *UserUpdateSafe) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTfa

`func (o *UserUpdateSafe) GetTfa() int32`

GetTfa returns the Tfa field if non-nil, zero value otherwise.

### GetTfaOk

`func (o *UserUpdateSafe) GetTfaOk() (*int32, bool)`

GetTfaOk returns a tuple with the Tfa field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTfa

`func (o *UserUpdateSafe) SetTfa(v int32)`

SetTfa sets Tfa field to given value.

### HasTfa

`func (o *UserUpdateSafe) HasTfa() bool`

HasTfa returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


