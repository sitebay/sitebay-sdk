# OpenapiClient::User

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **address** | **String** |  | [optional] |
| **address2** | **String** |  | [optional] |
| **city** | **String** |  | [optional] |
| **country** | **String** |  | [optional] |
| **default_region_id** | **Integer** |  | [optional][default to 1] |
| **email** | **String** |  |  |
| **full_name** | **String** |  | [optional] |
| **id** | **String** |  | [optional] |
| **is_active** | **Boolean** |  | [optional][default to true] |
| **is_superuser** | **Boolean** |  | [optional][default to false] |
| **is_verified** | **Boolean** |  | [optional][default to false] |
| **phone_number** | **String** |  | [optional] |
| **post_code** | **String** |  | [optional] |
| **state** | **String** |  | [optional] |
| **tfa** | **Integer** |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::User.new(
  address: null,
  address2: null,
  city: null,
  country: null,
  default_region_id: null,
  email: null,
  full_name: null,
  id: null,
  is_active: null,
  is_superuser: null,
  is_verified: null,
  phone_number: null,
  post_code: null,
  state: null,
  tfa: null
)
```

