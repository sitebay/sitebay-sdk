# OpenapiClient::PlanCreate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **additional_sites** | **Integer** |  | [optional][default to 0] |
| **interval** | **String** |  |  |
| **new_team_name** | **String** |  | [optional][default to &#39;Personal&#39;] |
| **plan_type_name** | **String** |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PlanCreate.new(
  additional_sites: null,
  interval: null,
  new_team_name: null,
  plan_type_name: null
)
```

