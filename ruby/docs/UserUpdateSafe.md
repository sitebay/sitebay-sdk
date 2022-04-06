# OpenapiClient::UserUpdateSafe

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **address** | **String** |  | [optional] |
| **address2** | **String** |  | [optional] |
| **city** | **String** |  | [optional] |
| **country** | **String** |  | [optional] |
| **default_region_id** | **Integer** |  | [optional][default to 1] |
| **full_name** | **String** |  | [optional] |
| **password** | **String** |  | [optional] |
| **phone_number** | **String** |  | [optional] |
| **post_code** | **String** |  | [optional] |
| **state** | **String** |  | [optional] |
| **tfa** | **Integer** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::UserUpdateSafe.new(
  address: null,
  address2: null,
  city: null,
  country: null,
  default_region_id: null,
  full_name: null,
  password: null,
  phone_number: null,
  post_code: null,
  state: null,
  tfa: null
)
```

