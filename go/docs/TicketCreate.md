# TicketCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Resolved** | Pointer to **bool** |  | [optional] [default to false]
**S3Object** | Pointer to **string** |  | [optional] 
**SiteLiveId** | Pointer to **string** |  | [optional] 
**Subject** | **string** |  | 

## Methods

### NewTicketCreate

`func NewTicketCreate(subject string, ) *TicketCreate`

NewTicketCreate instantiates a new TicketCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTicketCreateWithDefaults

`func NewTicketCreateWithDefaults() *TicketCreate`

NewTicketCreateWithDefaults instantiates a new TicketCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *TicketCreate) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *TicketCreate) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *TicketCreate) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *TicketCreate) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetDescription

`func (o *TicketCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TicketCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TicketCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TicketCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetResolved

`func (o *TicketCreate) GetResolved() bool`

GetResolved returns the Resolved field if non-nil, zero value otherwise.

### GetResolvedOk

`func (o *TicketCreate) GetResolvedOk() (*bool, bool)`

GetResolvedOk returns a tuple with the Resolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolved

`func (o *TicketCreate) SetResolved(v bool)`

SetResolved sets Resolved field to given value.

### HasResolved

`func (o *TicketCreate) HasResolved() bool`

HasResolved returns a boolean if a field has been set.

### GetS3Object

`func (o *TicketCreate) GetS3Object() string`

GetS3Object returns the S3Object field if non-nil, zero value otherwise.

### GetS3ObjectOk

`func (o *TicketCreate) GetS3ObjectOk() (*string, bool)`

GetS3ObjectOk returns a tuple with the S3Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetS3Object

`func (o *TicketCreate) SetS3Object(v string)`

SetS3Object sets S3Object field to given value.

### HasS3Object

`func (o *TicketCreate) HasS3Object() bool`

HasS3Object returns a boolean if a field has been set.

### GetSiteLiveId

`func (o *TicketCreate) GetSiteLiveId() string`

GetSiteLiveId returns the SiteLiveId field if non-nil, zero value otherwise.

### GetSiteLiveIdOk

`func (o *TicketCreate) GetSiteLiveIdOk() (*string, bool)`

GetSiteLiveIdOk returns a tuple with the SiteLiveId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSiteLiveId

`func (o *TicketCreate) SetSiteLiveId(v string)`

SetSiteLiveId sets SiteLiveId field to given value.

### HasSiteLiveId

`func (o *TicketCreate) HasSiteLiveId() bool`

HasSiteLiveId returns a boolean if a field has been set.

### GetSubject

`func (o *TicketCreate) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *TicketCreate) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *TicketCreate) SetSubject(v string)`

SetSubject sets Subject field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


