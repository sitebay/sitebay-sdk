# Ticket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** |  | [optional] 
**Created** | **time.Time** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Id** | **int32** |  | 
**Resolved** | **bool** |  | 
**Subject** | **string** |  | 

## Methods

### NewTicket

`func NewTicket(created time.Time, id int32, resolved bool, subject string, ) *Ticket`

NewTicket instantiates a new Ticket object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTicketWithDefaults

`func NewTicketWithDefaults() *Ticket`

NewTicketWithDefaults instantiates a new Ticket object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *Ticket) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Ticket) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Ticket) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Ticket) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetCreated

`func (o *Ticket) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Ticket) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Ticket) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetDescription

`func (o *Ticket) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Ticket) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Ticket) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Ticket) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *Ticket) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Ticket) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Ticket) SetId(v int32)`

SetId sets Id field to given value.


### GetResolved

`func (o *Ticket) GetResolved() bool`

GetResolved returns the Resolved field if non-nil, zero value otherwise.

### GetResolvedOk

`func (o *Ticket) GetResolvedOk() (*bool, bool)`

GetResolvedOk returns a tuple with the Resolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolved

`func (o *Ticket) SetResolved(v bool)`

SetResolved sets Resolved field to given value.


### GetSubject

`func (o *Ticket) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *Ticket) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *Ticket) SetSubject(v string)`

SetSubject sets Subject field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


