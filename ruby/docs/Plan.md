# OpenapiClient::Plan

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **additional_sites** | **Integer** |  | [optional][default to 0] |
| **created** | **Time** |  |  |
| **currency** | **String** |  | [optional] |
| **ends** | **Time** |  |  |
| **id** | **String** |  |  |
| **interval** | **String** |  | [optional] |
| **plan_type_name** | **String** |  |  |
| **team** | [**Team**](Team.md) |  | [optional] |
| **team_id** | **String** |  | [optional] |
| **user_id** | **String** |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Plan.new(
  additional_sites: null,
  created: null,
  currency: null,
  ends: null,
  id: null,
  interval: null,
  plan_type_name: null,
  team: null,
  team_id: null,
  user_id: null
)
```

