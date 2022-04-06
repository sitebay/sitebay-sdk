# OpenapiClient::TicketApi

All URIs are relative to *https://my.sitebay.org*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_ticket**](TicketApi.md#create_ticket) | **POST** /api/v1/ticket | Create Ticket |
| [**create_ticket_reply**](TicketApi.md#create_ticket_reply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply |
| [**delete_ticket**](TicketApi.md#delete_ticket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket |
| [**get_ticket**](TicketApi.md#get_ticket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket |
| [**get_tickets**](TicketApi.md#get_tickets) | **GET** /api/v1/ticket | Get Tickets |
| [**update_ticket**](TicketApi.md#update_ticket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket |


## create_ticket

> <Ticket> create_ticket(opts)

Create Ticket

Create a support ticket request

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TicketApi.new
opts = {
  unknown_base_type: TODO # UNKNOWN_BASE_TYPE | 
}

begin
  # Create Ticket
  result = api_instance.create_ticket(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->create_ticket: #{e}"
end
```

#### Using the create_ticket_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Ticket>, Integer, Hash)> create_ticket_with_http_info(opts)

```ruby
begin
  # Create Ticket
  data, status_code, headers = api_instance.create_ticket_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Ticket>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->create_ticket_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | [optional] |

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## create_ticket_reply

> <TicketReply> create_ticket_reply(ticket_id, opts)

Create Ticket Reply

Reply to a support ticket request

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TicketApi.new
ticket_id = 56 # Integer | 
opts = {
  unknown_base_type: TODO # UNKNOWN_BASE_TYPE | 
}

begin
  # Create Ticket Reply
  result = api_instance.create_ticket_reply(ticket_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->create_ticket_reply: #{e}"
end
```

#### Using the create_ticket_reply_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TicketReply>, Integer, Hash)> create_ticket_reply_with_http_info(ticket_id, opts)

```ruby
begin
  # Create Ticket Reply
  data, status_code, headers = api_instance.create_ticket_reply_with_http_info(ticket_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TicketReply>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->create_ticket_reply_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **ticket_id** | **Integer** |  |  |
| **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) |  | [optional] |

### Return type

[**TicketReply**](TicketReply.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## delete_ticket

> Object delete_ticket(ticket_id)

Delete Ticket

Delete a support ticket request by its ID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TicketApi.new
ticket_id = 56 # Integer | 

begin
  # Delete Ticket
  result = api_instance.delete_ticket(ticket_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->delete_ticket: #{e}"
end
```

#### Using the delete_ticket_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> delete_ticket_with_http_info(ticket_id)

```ruby
begin
  # Delete Ticket
  data, status_code, headers = api_instance.delete_ticket_with_http_info(ticket_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->delete_ticket_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **ticket_id** | **Integer** |  |  |

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_ticket

> <Ticket> get_ticket(ticket_id)

Get Ticket

Get a support ticket request by its ID

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TicketApi.new
ticket_id = 56 # Integer | 

begin
  # Get Ticket
  result = api_instance.get_ticket(ticket_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->get_ticket: #{e}"
end
```

#### Using the get_ticket_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Ticket>, Integer, Hash)> get_ticket_with_http_info(ticket_id)

```ruby
begin
  # Get Ticket
  data, status_code, headers = api_instance.get_ticket_with_http_info(ticket_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Ticket>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->get_ticket_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **ticket_id** | **Integer** |  |  |

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_tickets

> <Array<Ticket>> get_tickets

Get Tickets

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TicketApi.new

begin
  # Get Tickets
  result = api_instance.get_tickets
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->get_tickets: #{e}"
end
```

#### Using the get_tickets_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Ticket>>, Integer, Hash)> get_tickets_with_http_info

```ruby
begin
  # Get Tickets
  data, status_code, headers = api_instance.get_tickets_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Ticket>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->get_tickets_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Ticket&gt;**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update_ticket

> <Ticket> update_ticket(ticket_id, ticket_update)

Update Ticket

Update a support ticket request

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::TicketApi.new
ticket_id = 56 # Integer | 
ticket_update = OpenapiClient::TicketUpdate.new({subject: 'subject_example'}) # TicketUpdate | 

begin
  # Update Ticket
  result = api_instance.update_ticket(ticket_id, ticket_update)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->update_ticket: #{e}"
end
```

#### Using the update_ticket_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Ticket>, Integer, Hash)> update_ticket_with_http_info(ticket_id, ticket_update)

```ruby
begin
  # Update Ticket
  data, status_code, headers = api_instance.update_ticket_with_http_info(ticket_id, ticket_update)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Ticket>
rescue OpenapiClient::ApiError => e
  puts "Error when calling TicketApi->update_ticket_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **ticket_id** | **Integer** |  |  |
| **ticket_update** | [**TicketUpdate**](TicketUpdate.md) |  |  |

### Return type

[**Ticket**](Ticket.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

