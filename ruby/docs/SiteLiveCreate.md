# OpenapiClient::SiteLiveCreate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **fqdn** | **String** |  |  |
| **git_url** | **String** |  | [optional] |
| **region_id** | **Integer** |  | [optional][default to 1] |
| **team_id** | **String** |  |  |
| **template_name** | **String** |  | [optional] |
| **wordpress_blog_name** | **String** |  |  |
| **wordpress_email** | **String** |  |  |
| **wordpress_first_name** | **String** |  |  |
| **wordpress_last_name** | **String** |  |  |
| **wordpress_password** | **String** |  |  |
| **wordpress_username** | **String** |  |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SiteLiveCreate.new(
  fqdn: null,
  git_url: null,
  region_id: null,
  team_id: null,
  template_name: null,
  wordpress_blog_name: null,
  wordpress_email: null,
  wordpress_first_name: null,
  wordpress_last_name: null,
  wordpress_password: null,
  wordpress_username: null
)
```

