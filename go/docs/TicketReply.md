# TicketReply

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | **time.Time** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Resolve** | Pointer to **bool** |  | [optional] 

## Methods

### NewTicketReply

`func NewTicketReply(created time.Time, ) *TicketReply`

NewTicketReply instantiates a new TicketReply object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTicketReplyWithDefaults

`func NewTicketReplyWithDefaults() *TicketReply`

NewTicketReplyWithDefaults instantiates a new TicketReply object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *TicketReply) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TicketReply) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TicketReply) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetDescription

`func (o *TicketReply) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TicketReply) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TicketReply) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TicketReply) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetResolve

`func (o *TicketReply) GetResolve() bool`

GetResolve returns the Resolve field if non-nil, zero value otherwise.

### GetResolveOk

`func (o *TicketReply) GetResolveOk() (*bool, bool)`

GetResolveOk returns a tuple with the Resolve field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolve

`func (o *TicketReply) SetResolve(v bool)`

SetResolve sets Resolve field to given value.

### HasResolve

`func (o *TicketReply) HasResolve() bool`

HasResolve returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


