# openapi_client

OpenapiClient - the Ruby gem for the Site Bay

OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build openapi_client.gemspec
```

Then either install the gem locally:

```shell
gem install ./openapi_client-1.0.0.gem
```

(for development, run `gem install --dev ./openapi_client-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'openapi_client', '~> 1.0.0'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/GIT_USER_ID/GIT_REPO_ID, then add the following in the Gemfile:

    gem 'openapi_client', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```ruby
# Load the gem
require 'openapi_client'

# Setup authorization
OpenapiClient.configure do |config|
  # Configure OAuth2 access token for authorization: OAuth2PasswordBearer
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = OpenapiClient::AccountApi.new
payment_method_id = 'payment_method_id_example' # String | 

begin
  #Delete payment method
  result = api_instance.delete_payment_method(payment_method_id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling AccountApi->delete_payment_method: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *https://my.sitebay.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenapiClient::AccountApi* | [**delete_payment_method**](docs/AccountApi.md#delete_payment_method) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*OpenapiClient::AccountApi* | [**delete_payment_method_0**](docs/AccountApi.md#delete_payment_method_0) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*OpenapiClient::AccountApi* | [**get_payment_methods**](docs/AccountApi.md#get_payment_methods) | **GET** /api/v1/account/payment_method | Get payment methods
*OpenapiClient::AccountApi* | [**get_payment_methods_0**](docs/AccountApi.md#get_payment_methods_0) | **GET** /api/v1/account/payment_method | Get payment methods
*OpenapiClient::AccountApi* | [**get_tax**](docs/AccountApi.md#get_tax) | **GET** /api/v1/account/get_tax | Get tax
*OpenapiClient::AccountApi* | [**get_tax_0**](docs/AccountApi.md#get_tax_0) | **GET** /api/v1/account/get_tax | Get tax
*OpenapiClient::AccountApi* | [**get_user_me**](docs/AccountApi.md#get_user_me) | **GET** /api/v1/account | Get own user
*OpenapiClient::AccountApi* | [**get_user_me_0**](docs/AccountApi.md#get_user_me_0) | **GET** /api/v1/account | Get own user
*OpenapiClient::AccountApi* | [**revoke_oauth**](docs/AccountApi.md#revoke_oauth) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*OpenapiClient::AccountApi* | [**revoke_oauth_0**](docs/AccountApi.md#revoke_oauth_0) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*OpenapiClient::AccountApi* | [**update_payment_method**](docs/AccountApi.md#update_payment_method) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*OpenapiClient::AccountApi* | [**update_payment_method_0**](docs/AccountApi.md#update_payment_method_0) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*OpenapiClient::AccountApi* | [**update_user**](docs/AccountApi.md#update_user) | **PUT** /api/v1/account | Update user
*OpenapiClient::AccountApi* | [**update_user_0**](docs/AccountApi.md#update_user_0) | **PUT** /api/v1/account | Update user
*OpenapiClient::MigrationApi* | [**create_migration**](docs/MigrationApi.md#create_migration) | **POST** /api/v1/migration | Create a migration
*OpenapiClient::MigrationApi* | [**delete_migration**](docs/MigrationApi.md#delete_migration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
*OpenapiClient::MigrationApi* | [**get_migrations**](docs/MigrationApi.md#get_migrations) | **GET** /api/v1/migration | Get Migrations
*OpenapiClient::PlanApi* | [**cancel_plan**](docs/PlanApi.md#cancel_plan) | **DELETE** /api/v1/plan/{plan_id} | Cancel Plan
*OpenapiClient::PlanApi* | [**create_plan**](docs/PlanApi.md#create_plan) | **POST** /api/v1/plan | Create a Plan
*OpenapiClient::PlanApi* | [**get_plan**](docs/PlanApi.md#get_plan) | **GET** /api/v1/plan/{plan_id} | Get Plan
*OpenapiClient::PlanApi* | [**get_plans**](docs/PlanApi.md#get_plans) | **GET** /api/v1/plan | Get Plans
*OpenapiClient::PlanApi* | [**preview_change**](docs/PlanApi.md#preview_change) | **GET** /api/v1/plan/{plan_id}/preview | Preview Plan
*OpenapiClient::PlanApi* | [**uncancel_plan**](docs/PlanApi.md#uncancel_plan) | **PATCH** /api/v1/plan/{plan_id} | Uncancel Plan
*OpenapiClient::PlanApi* | [**update_plan**](docs/PlanApi.md#update_plan) | **PUT** /api/v1/plan/{plan_id} | Update a Plan
*OpenapiClient::RegionApi* | [**get_region**](docs/RegionApi.md#get_region) | **GET** /api/v1/region/{region_id} | Get a Region
*OpenapiClient::RegionApi* | [**get_regions**](docs/RegionApi.md#get_regions) | **GET** /api/v1/region | Get Regions
*OpenapiClient::SiteLiveApi* | [**add_mail_dns**](docs/SiteLiveApi.md#add_mail_dns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*OpenapiClient::SiteLiveApi* | [**add_mail_dns_0**](docs/SiteLiveApi.md#add_mail_dns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*OpenapiClient::SiteLiveApi* | [**change_dev_mode**](docs/SiteLiveApi.md#change_dev_mode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*OpenapiClient::SiteLiveApi* | [**change_dev_mode_0**](docs/SiteLiveApi.md#change_dev_mode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*OpenapiClient::SiteLiveApi* | [**clear_cache**](docs/SiteLiveApi.md#clear_cache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*OpenapiClient::SiteLiveApi* | [**clear_cache_0**](docs/SiteLiveApi.md#clear_cache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*OpenapiClient::SiteLiveApi* | [**commit_site_stage**](docs/SiteLiveApi.md#commit_site_stage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*OpenapiClient::SiteLiveApi* | [**commit_site_stage_0**](docs/SiteLiveApi.md#commit_site_stage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*OpenapiClient::SiteLiveApi* | [**create_email**](docs/SiteLiveApi.md#create_email) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
*OpenapiClient::SiteLiveApi* | [**create_email_0**](docs/SiteLiveApi.md#create_email_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
*OpenapiClient::SiteLiveApi* | [**create_external_path**](docs/SiteLiveApi.md#create_external_path) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
*OpenapiClient::SiteLiveApi* | [**create_external_path_0**](docs/SiteLiveApi.md#create_external_path_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
*OpenapiClient::SiteLiveApi* | [**create_site_live**](docs/SiteLiveApi.md#create_site_live) | **POST** /api/v1/site_live | Create a site
*OpenapiClient::SiteLiveApi* | [**create_site_live_0**](docs/SiteLiveApi.md#create_site_live_0) | **POST** /api/v1/site_live | Create a site
*OpenapiClient::SiteLiveApi* | [**create_site_stage**](docs/SiteLiveApi.md#create_site_stage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*OpenapiClient::SiteLiveApi* | [**create_site_stage_0**](docs/SiteLiveApi.md#create_site_stage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*OpenapiClient::SiteLiveApi* | [**create_tag**](docs/SiteLiveApi.md#create_tag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
*OpenapiClient::SiteLiveApi* | [**create_tag_0**](docs/SiteLiveApi.md#create_tag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
*OpenapiClient::SiteLiveApi* | [**delete_dns_record**](docs/SiteLiveApi.md#delete_dns_record) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*OpenapiClient::SiteLiveApi* | [**delete_dns_record_0**](docs/SiteLiveApi.md#delete_dns_record_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*OpenapiClient::SiteLiveApi* | [**delete_email**](docs/SiteLiveApi.md#delete_email) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*OpenapiClient::SiteLiveApi* | [**delete_email_0**](docs/SiteLiveApi.md#delete_email_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*OpenapiClient::SiteLiveApi* | [**delete_external_path**](docs/SiteLiveApi.md#delete_external_path) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*OpenapiClient::SiteLiveApi* | [**delete_external_path_0**](docs/SiteLiveApi.md#delete_external_path_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*OpenapiClient::SiteLiveApi* | [**delete_site_live**](docs/SiteLiveApi.md#delete_site_live) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
*OpenapiClient::SiteLiveApi* | [**delete_site_live_0**](docs/SiteLiveApi.md#delete_site_live_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
*OpenapiClient::SiteLiveApi* | [**delete_site_stage**](docs/SiteLiveApi.md#delete_site_stage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*OpenapiClient::SiteLiveApi* | [**delete_site_stage_0**](docs/SiteLiveApi.md#delete_site_stage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*OpenapiClient::SiteLiveApi* | [**delete_tag**](docs/SiteLiveApi.md#delete_tag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*OpenapiClient::SiteLiveApi* | [**delete_tag_0**](docs/SiteLiveApi.md#delete_tag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*OpenapiClient::SiteLiveApi* | [**disable_firewall**](docs/SiteLiveApi.md#disable_firewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*OpenapiClient::SiteLiveApi* | [**disable_firewall_0**](docs/SiteLiveApi.md#disable_firewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*OpenapiClient::SiteLiveApi* | [**enable_firewall**](docs/SiteLiveApi.md#enable_firewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*OpenapiClient::SiteLiveApi* | [**enable_firewall_0**](docs/SiteLiveApi.md#enable_firewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*OpenapiClient::SiteLiveApi* | [**get_dns_records**](docs/SiteLiveApi.md#get_dns_records) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
*OpenapiClient::SiteLiveApi* | [**get_dns_records_0**](docs/SiteLiveApi.md#get_dns_records_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
*OpenapiClient::SiteLiveApi* | [**get_emails**](docs/SiteLiveApi.md#get_emails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
*OpenapiClient::SiteLiveApi* | [**get_emails_0**](docs/SiteLiveApi.md#get_emails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
*OpenapiClient::SiteLiveApi* | [**get_external_paths**](docs/SiteLiveApi.md#get_external_paths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*OpenapiClient::SiteLiveApi* | [**get_external_paths_0**](docs/SiteLiveApi.md#get_external_paths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*OpenapiClient::SiteLiveApi* | [**get_files_at_point**](docs/SiteLiveApi.md#get_files_at_point) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*OpenapiClient::SiteLiveApi* | [**get_files_at_point_0**](docs/SiteLiveApi.md#get_files_at_point_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*OpenapiClient::SiteLiveApi* | [**get_mail_dns**](docs/SiteLiveApi.md#get_mail_dns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*OpenapiClient::SiteLiveApi* | [**get_mail_dns_0**](docs/SiteLiveApi.md#get_mail_dns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*OpenapiClient::SiteLiveApi* | [**get_pit_restore**](docs/SiteLiveApi.md#get_pit_restore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*OpenapiClient::SiteLiveApi* | [**get_pit_restore_0**](docs/SiteLiveApi.md#get_pit_restore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*OpenapiClient::SiteLiveApi* | [**get_pit_restores**](docs/SiteLiveApi.md#get_pit_restores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*OpenapiClient::SiteLiveApi* | [**get_pit_restores_0**](docs/SiteLiveApi.md#get_pit_restores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*OpenapiClient::SiteLiveApi* | [**get_site_live**](docs/SiteLiveApi.md#get_site_live) | **GET** /api/v1/site_live/{fqdn} | Get your live site
*OpenapiClient::SiteLiveApi* | [**get_site_live_0**](docs/SiteLiveApi.md#get_site_live_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site
*OpenapiClient::SiteLiveApi* | [**get_site_plan_usage**](docs/SiteLiveApi.md#get_site_plan_usage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*OpenapiClient::SiteLiveApi* | [**get_site_plan_usage_0**](docs/SiteLiveApi.md#get_site_plan_usage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*OpenapiClient::SiteLiveApi* | [**get_sites_live**](docs/SiteLiveApi.md#get_sites_live) | **GET** /api/v1/site_live | Get your sites
*OpenapiClient::SiteLiveApi* | [**get_sites_live_0**](docs/SiteLiveApi.md#get_sites_live_0) | **GET** /api/v1/site_live | Get your sites
*OpenapiClient::SiteLiveApi* | [**get_tags**](docs/SiteLiveApi.md#get_tags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
*OpenapiClient::SiteLiveApi* | [**get_tags_0**](docs/SiteLiveApi.md#get_tags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
*OpenapiClient::SiteLiveApi* | [**modify_firewall**](docs/SiteLiveApi.md#modify_firewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*OpenapiClient::SiteLiveApi* | [**modify_firewall_0**](docs/SiteLiveApi.md#modify_firewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*OpenapiClient::SiteLiveApi* | [**restore_site**](docs/SiteLiveApi.md#restore_site) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*OpenapiClient::SiteLiveApi* | [**restore_site_0**](docs/SiteLiveApi.md#restore_site_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*OpenapiClient::SiteLiveApi* | [**shell_cmd_site_live**](docs/SiteLiveApi.md#shell_cmd_site_live) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*OpenapiClient::SiteLiveApi* | [**shell_cmd_site_live_0**](docs/SiteLiveApi.md#shell_cmd_site_live_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*OpenapiClient::SiteLiveApi* | [**update_dns_record**](docs/SiteLiveApi.md#update_dns_record) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
*OpenapiClient::SiteLiveApi* | [**update_dns_record_0**](docs/SiteLiveApi.md#update_dns_record_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
*OpenapiClient::SiteLiveApi* | [**update_email**](docs/SiteLiveApi.md#update_email) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*OpenapiClient::SiteLiveApi* | [**update_email_0**](docs/SiteLiveApi.md#update_email_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*OpenapiClient::SiteLiveApi* | [**update_site_live**](docs/SiteLiveApi.md#update_site_live) | **PUT** /api/v1/site_live/{fqdn} | Update a site
*OpenapiClient::SiteLiveApi* | [**update_site_live_0**](docs/SiteLiveApi.md#update_site_live_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site
*OpenapiClient::SiteLiveApi* | [**validate_mx_records**](docs/SiteLiveApi.md#validate_mx_records) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*OpenapiClient::SiteLiveApi* | [**validate_mx_records_0**](docs/SiteLiveApi.md#validate_mx_records_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*OpenapiClient::TeamApi* | [**get_team**](docs/TeamApi.md#get_team) | **GET** /api/v1/team/{team_id} | Get a team
*OpenapiClient::TeamApi* | [**get_team_0**](docs/TeamApi.md#get_team_0) | **GET** /api/v1/team/{team_id} | Get a team
*OpenapiClient::TeamApi* | [**get_team_member**](docs/TeamApi.md#get_team_member) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*OpenapiClient::TeamApi* | [**get_team_member_0**](docs/TeamApi.md#get_team_member_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*OpenapiClient::TeamApi* | [**get_team_members**](docs/TeamApi.md#get_team_members) | **GET** /api/v1/team{team_id}/member | Get a team's members
*OpenapiClient::TeamApi* | [**get_team_members_0**](docs/TeamApi.md#get_team_members_0) | **GET** /api/v1/team{team_id}/member | Get a team's members
*OpenapiClient::TeamApi* | [**get_teams**](docs/TeamApi.md#get_teams) | **GET** /api/v1/team | Get your owned teams
*OpenapiClient::TeamApi* | [**get_teams_0**](docs/TeamApi.md#get_teams_0) | **GET** /api/v1/team | Get your owned teams
*OpenapiClient::TeamApi* | [**remove_team_member**](docs/TeamApi.md#remove_team_member) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*OpenapiClient::TeamApi* | [**remove_team_member_0**](docs/TeamApi.md#remove_team_member_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*OpenapiClient::TeamApi* | [**update_team**](docs/TeamApi.md#update_team) | **PUT** /api/v1/team/{team_id} | Update a Team
*OpenapiClient::TeamApi* | [**update_team_0**](docs/TeamApi.md#update_team_0) | **PUT** /api/v1/team/{team_id} | Update a Team
*OpenapiClient::TemplateApi* | [**get_template**](docs/TemplateApi.md#get_template) | **GET** /api/v1/template/{template_name} | Get Templates
*OpenapiClient::TemplateApi* | [**get_templates**](docs/TemplateApi.md#get_templates) | **GET** /api/v1/template | Get Templates
*OpenapiClient::TemplateApi* | [**submit_template**](docs/TemplateApi.md#submit_template) | **POST** /api/v1/template | Create Template
*OpenapiClient::TicketApi* | [**create_ticket**](docs/TicketApi.md#create_ticket) | **POST** /api/v1/ticket | Create Ticket
*OpenapiClient::TicketApi* | [**create_ticket_reply**](docs/TicketApi.md#create_ticket_reply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
*OpenapiClient::TicketApi* | [**delete_ticket**](docs/TicketApi.md#delete_ticket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
*OpenapiClient::TicketApi* | [**get_ticket**](docs/TicketApi.md#get_ticket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
*OpenapiClient::TicketApi* | [**get_tickets**](docs/TicketApi.md#get_tickets) | **GET** /api/v1/ticket | Get Tickets
*OpenapiClient::TicketApi* | [**update_ticket**](docs/TicketApi.md#update_ticket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket
*OpenapiClient::UtilsApi* | [**domain_check**](docs/UtilsApi.md#domain_check) | **GET** /api/v1/domain_check | Domain check
*OpenapiClient::UtilsApi* | [**verify_git_sync_directories**](docs/UtilsApi.md#verify_git_sync_directories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


## Documentation for Models

 - [OpenapiClient::ExternalPathCreate](docs/ExternalPathCreate.md)
 - [OpenapiClient::HTTPValidationError](docs/HTTPValidationError.md)
 - [OpenapiClient::Migration](docs/Migration.md)
 - [OpenapiClient::PITRestoreCreate](docs/PITRestoreCreate.md)
 - [OpenapiClient::Plan](docs/Plan.md)
 - [OpenapiClient::PlanCreate](docs/PlanCreate.md)
 - [OpenapiClient::PlanUpdate](docs/PlanUpdate.md)
 - [OpenapiClient::Region](docs/Region.md)
 - [OpenapiClient::SiteLive](docs/SiteLive.md)
 - [OpenapiClient::SiteLiveCreate](docs/SiteLiveCreate.md)
 - [OpenapiClient::SiteLiveUpdate](docs/SiteLiveUpdate.md)
 - [OpenapiClient::SiteStageCreate](docs/SiteStageCreate.md)
 - [OpenapiClient::Tag](docs/Tag.md)
 - [OpenapiClient::TagCreate](docs/TagCreate.md)
 - [OpenapiClient::Team](docs/Team.md)
 - [OpenapiClient::TeamMember](docs/TeamMember.md)
 - [OpenapiClient::TeamUpdate](docs/TeamUpdate.md)
 - [OpenapiClient::Template](docs/Template.md)
 - [OpenapiClient::TemplateCreate](docs/TemplateCreate.md)
 - [OpenapiClient::Ticket](docs/Ticket.md)
 - [OpenapiClient::TicketCreate](docs/TicketCreate.md)
 - [OpenapiClient::TicketReply](docs/TicketReply.md)
 - [OpenapiClient::TicketReplyCreate](docs/TicketReplyCreate.md)
 - [OpenapiClient::TicketUpdate](docs/TicketUpdate.md)
 - [OpenapiClient::User](docs/User.md)
 - [OpenapiClient::UserEmailCreate](docs/UserEmailCreate.md)
 - [OpenapiClient::UserEmailUpdate](docs/UserEmailUpdate.md)
 - [OpenapiClient::UserUpdateSafe](docs/UserUpdateSafe.md)
 - [OpenapiClient::ValidationError](docs/ValidationError.md)


## Documentation for Authorization


### APIKeyCookie


- **Type**: API key
- **API key parameter name**: msb
- **Location**: 

### OAuth2PasswordBearer


- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: N/A
