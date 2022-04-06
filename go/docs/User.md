# User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to **string** |  | [optional] 
**Address2** | Pointer to **string** |  | [optional] 
**City** | Pointer to **string** |  | [optional] 
**Country** | Pointer to **string** |  | [optional] 
**DefaultRegionId** | Pointer to **int32** |  | [optional] [default to 1]
**Email** | **string** |  | 
**FullName** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**IsActive** | Pointer to **bool** |  | [optional] [default to true]
**IsSuperuser** | Pointer to **bool** |  | [optional] [default to false]
**IsVerified** | Pointer to **bool** |  | [optional] [default to false]
**PhoneNumber** | Pointer to **string** |  | [optional] 
**PostCode** | Pointer to **string** |  | [optional] 
**State** | Pointer to **string** |  | [optional] 
**Tfa** | Pointer to **int32** |  | [optional] 

## Methods

### NewUser

`func NewUser(email string, ) *User`

NewUser instantiates a new User object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserWithDefaults

`func NewUserWithDefaults() *User`

NewUserWithDefaults instantiates a new User object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *User) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *User) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *User) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *User) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAddress2

`func (o *User) GetAddress2() string`

GetAddress2 returns the Address2 field if non-nil, zero value otherwise.

### GetAddress2Ok

`func (o *User) GetAddress2Ok() (*string, bool)`

GetAddress2Ok returns a tuple with the Address2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress2

`func (o *User) SetAddress2(v string)`

SetAddress2 sets Address2 field to given value.

### HasAddress2

`func (o *User) HasAddress2() bool`

HasAddress2 returns a boolean if a field has been set.

### GetCity

`func (o *User) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *User) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *User) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *User) HasCity() bool`

HasCity returns a boolean if a field has been set.

### GetCountry

`func (o *User) GetCountry() string`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *User) GetCountryOk() (*string, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *User) SetCountry(v string)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *User) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetDefaultRegionId

`func (o *User) GetDefaultRegionId() int32`

GetDefaultRegionId returns the DefaultRegionId field if non-nil, zero value otherwise.

### GetDefaultRegionIdOk

`func (o *User) GetDefaultRegionIdOk() (*int32, bool)`

GetDefaultRegionIdOk returns a tuple with the DefaultRegionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultRegionId

`func (o *User) SetDefaultRegionId(v int32)`

SetDefaultRegionId sets DefaultRegionId field to given value.

### HasDefaultRegionId

`func (o *User) HasDefaultRegionId() bool`

HasDefaultRegionId returns a boolean if a field has been set.

### GetEmail

`func (o *User) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *User) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *User) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetFullName

`func (o *User) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *User) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *User) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *User) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetId

`func (o *User) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *User) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *User) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *User) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIsActive

`func (o *User) GetIsActive() bool`

GetIsActive returns the IsActive field if non-nil, zero value otherwise.

### GetIsActiveOk

`func (o *User) GetIsActiveOk() (*bool, bool)`

GetIsActiveOk returns a tuple with the IsActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsActive

`func (o *User) SetIsActive(v bool)`

SetIsActive sets IsActive field to given value.

### HasIsActive

`func (o *User) HasIsActive() bool`

HasIsActive returns a boolean if a field has been set.

### GetIsSuperuser

`func (o *User) GetIsSuperuser() bool`

GetIsSuperuser returns the IsSuperuser field if non-nil, zero value otherwise.

### GetIsSuperuserOk

`func (o *User) GetIsSuperuserOk() (*bool, bool)`

GetIsSuperuserOk returns a tuple with the IsSuperuser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSuperuser

`func (o *User) SetIsSuperuser(v bool)`

SetIsSuperuser sets IsSuperuser field to given value.

### HasIsSuperuser

`func (o *User) HasIsSuperuser() bool`

HasIsSuperuser returns a boolean if a field has been set.

### GetIsVerified

`func (o *User) GetIsVerified() bool`

GetIsVerified returns the IsVerified field if non-nil, zero value otherwise.

### GetIsVerifiedOk

`func (o *User) GetIsVerifiedOk() (*bool, bool)`

GetIsVerifiedOk returns a tuple with the IsVerified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVerified

`func (o *User) SetIsVerified(v bool)`

SetIsVerified sets IsVerified field to given value.

### HasIsVerified

`func (o *User) HasIsVerified() bool`

HasIsVerified returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *User) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *User) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *User) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *User) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetPostCode

`func (o *User) GetPostCode() string`

GetPostCode returns the PostCode field if non-nil, zero value otherwise.

### GetPostCodeOk

`func (o *User) GetPostCodeOk() (*string, bool)`

GetPostCodeOk returns a tuple with the PostCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostCode

`func (o *User) SetPostCode(v string)`

SetPostCode sets PostCode field to given value.

### HasPostCode

`func (o *User) HasPostCode() bool`

HasPostCode returns a boolean if a field has been set.

### GetState

`func (o *User) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *User) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *User) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *User) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTfa

`func (o *User) GetTfa() int32`

GetTfa returns the Tfa field if non-nil, zero value otherwise.

### GetTfaOk

`func (o *User) GetTfaOk() (*int32, bool)`

GetTfaOk returns a tuple with the Tfa field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTfa

`func (o *User) SetTfa(v int32)`

SetTfa sets Tfa field to given value.

### HasTfa

`func (o *User) HasTfa() bool`

HasTfa returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


