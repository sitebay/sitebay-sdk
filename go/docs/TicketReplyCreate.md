# TicketReplyCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Resolve** | Pointer to **bool** |  | [optional] 

## Methods

### NewTicketReplyCreate

`func NewTicketReplyCreate() *TicketReplyCreate`

NewTicketReplyCreate instantiates a new TicketReplyCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTicketReplyCreateWithDefaults

`func NewTicketReplyCreateWithDefaults() *TicketReplyCreate`

NewTicketReplyCreateWithDefaults instantiates a new TicketReplyCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TicketReplyCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TicketReplyCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TicketReplyCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TicketReplyCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetResolve

`func (o *TicketReplyCreate) GetResolve() bool`

GetResolve returns the Resolve field if non-nil, zero value otherwise.

### GetResolveOk

`func (o *TicketReplyCreate) GetResolveOk() (*bool, bool)`

GetResolveOk returns a tuple with the Resolve field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolve

`func (o *TicketReplyCreate) SetResolve(v bool)`

SetResolve sets Resolve field to given value.

### HasResolve

`func (o *TicketReplyCreate) HasResolve() bool`

HasResolve returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


