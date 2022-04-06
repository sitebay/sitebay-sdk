# OpenapiClient::TicketCreate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **category** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **resolved** | **Boolean** |  | [optional][default to false] |
| **s3_object** | **String** |  | [optional] |
| **site_live_id** | **String** |  | [optional] |
| **subject** | **String** |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::TicketCreate.new(
  category: null,
  description: null,
  resolved: null,
  s3_object: null,
  site_live_id: null,
  subject: null
)
```

