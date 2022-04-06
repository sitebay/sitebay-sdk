# OpenAPIClient-php

OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs


## Installation & Usage

### Requirements

PHP 7.3 and later.
Should also work with PHP 8.0 but has not been tested.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$payment_method_id = 'payment_method_id_example'; // string

try {
    $result = $apiInstance->deletePaymentMethod($payment_method_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccountApi->deletePaymentMethod: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://my.sitebay.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**deletePaymentMethod**](docs/Api/AccountApi.md#deletepaymentmethod) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*AccountApi* | [**deletePaymentMethod_0**](docs/Api/AccountApi.md#deletepaymentmethod_0) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*AccountApi* | [**getPaymentMethods**](docs/Api/AccountApi.md#getpaymentmethods) | **GET** /api/v1/account/payment_method | Get payment methods
*AccountApi* | [**getPaymentMethods_0**](docs/Api/AccountApi.md#getpaymentmethods_0) | **GET** /api/v1/account/payment_method | Get payment methods
*AccountApi* | [**getTax**](docs/Api/AccountApi.md#gettax) | **GET** /api/v1/account/get_tax | Get tax
*AccountApi* | [**getTax_0**](docs/Api/AccountApi.md#gettax_0) | **GET** /api/v1/account/get_tax | Get tax
*AccountApi* | [**getUserMe**](docs/Api/AccountApi.md#getuserme) | **GET** /api/v1/account | Get own user
*AccountApi* | [**getUserMe_0**](docs/Api/AccountApi.md#getuserme_0) | **GET** /api/v1/account | Get own user
*AccountApi* | [**revokeOauth**](docs/Api/AccountApi.md#revokeoauth) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*AccountApi* | [**revokeOauth_0**](docs/Api/AccountApi.md#revokeoauth_0) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*AccountApi* | [**updatePaymentMethod**](docs/Api/AccountApi.md#updatepaymentmethod) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*AccountApi* | [**updatePaymentMethod_0**](docs/Api/AccountApi.md#updatepaymentmethod_0) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*AccountApi* | [**updateUser**](docs/Api/AccountApi.md#updateuser) | **PUT** /api/v1/account | Update user
*AccountApi* | [**updateUser_0**](docs/Api/AccountApi.md#updateuser_0) | **PUT** /api/v1/account | Update user
*MigrationApi* | [**createMigration**](docs/Api/MigrationApi.md#createmigration) | **POST** /api/v1/migration | Create a migration
*MigrationApi* | [**deleteMigration**](docs/Api/MigrationApi.md#deletemigration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
*MigrationApi* | [**getMigrations**](docs/Api/MigrationApi.md#getmigrations) | **GET** /api/v1/migration | Get Migrations
*PlanApi* | [**cancelPlan**](docs/Api/PlanApi.md#cancelplan) | **DELETE** /api/v1/plan/{plan_id} | Cancel Plan
*PlanApi* | [**createPlan**](docs/Api/PlanApi.md#createplan) | **POST** /api/v1/plan | Create a Plan
*PlanApi* | [**getPlan**](docs/Api/PlanApi.md#getplan) | **GET** /api/v1/plan/{plan_id} | Get Plan
*PlanApi* | [**getPlans**](docs/Api/PlanApi.md#getplans) | **GET** /api/v1/plan | Get Plans
*PlanApi* | [**previewChange**](docs/Api/PlanApi.md#previewchange) | **GET** /api/v1/plan/{plan_id}/preview | Preview Plan
*PlanApi* | [**uncancelPlan**](docs/Api/PlanApi.md#uncancelplan) | **PATCH** /api/v1/plan/{plan_id} | Uncancel Plan
*PlanApi* | [**updatePlan**](docs/Api/PlanApi.md#updateplan) | **PUT** /api/v1/plan/{plan_id} | Update a Plan
*RegionApi* | [**getRegion**](docs/Api/RegionApi.md#getregion) | **GET** /api/v1/region/{region_id} | Get a Region
*RegionApi* | [**getRegions**](docs/Api/RegionApi.md#getregions) | **GET** /api/v1/region | Get Regions
*SiteLiveApi* | [**addMailDns**](docs/Api/SiteLiveApi.md#addmaildns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*SiteLiveApi* | [**addMailDns_0**](docs/Api/SiteLiveApi.md#addmaildns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*SiteLiveApi* | [**changeDevMode**](docs/Api/SiteLiveApi.md#changedevmode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*SiteLiveApi* | [**changeDevMode_0**](docs/Api/SiteLiveApi.md#changedevmode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*SiteLiveApi* | [**clearCache**](docs/Api/SiteLiveApi.md#clearcache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*SiteLiveApi* | [**clearCache_0**](docs/Api/SiteLiveApi.md#clearcache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*SiteLiveApi* | [**commitSiteStage**](docs/Api/SiteLiveApi.md#commitsitestage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*SiteLiveApi* | [**commitSiteStage_0**](docs/Api/SiteLiveApi.md#commitsitestage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*SiteLiveApi* | [**createEmail**](docs/Api/SiteLiveApi.md#createemail) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
*SiteLiveApi* | [**createEmail_0**](docs/Api/SiteLiveApi.md#createemail_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
*SiteLiveApi* | [**createExternalPath**](docs/Api/SiteLiveApi.md#createexternalpath) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
*SiteLiveApi* | [**createExternalPath_0**](docs/Api/SiteLiveApi.md#createexternalpath_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
*SiteLiveApi* | [**createSiteLive**](docs/Api/SiteLiveApi.md#createsitelive) | **POST** /api/v1/site_live | Create a site
*SiteLiveApi* | [**createSiteLive_0**](docs/Api/SiteLiveApi.md#createsitelive_0) | **POST** /api/v1/site_live | Create a site
*SiteLiveApi* | [**createSiteStage**](docs/Api/SiteLiveApi.md#createsitestage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*SiteLiveApi* | [**createSiteStage_0**](docs/Api/SiteLiveApi.md#createsitestage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*SiteLiveApi* | [**createTag**](docs/Api/SiteLiveApi.md#createtag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
*SiteLiveApi* | [**createTag_0**](docs/Api/SiteLiveApi.md#createtag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
*SiteLiveApi* | [**deleteDnsRecord**](docs/Api/SiteLiveApi.md#deletednsrecord) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*SiteLiveApi* | [**deleteDnsRecord_0**](docs/Api/SiteLiveApi.md#deletednsrecord_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*SiteLiveApi* | [**deleteEmail**](docs/Api/SiteLiveApi.md#deleteemail) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*SiteLiveApi* | [**deleteEmail_0**](docs/Api/SiteLiveApi.md#deleteemail_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*SiteLiveApi* | [**deleteExternalPath**](docs/Api/SiteLiveApi.md#deleteexternalpath) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*SiteLiveApi* | [**deleteExternalPath_0**](docs/Api/SiteLiveApi.md#deleteexternalpath_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*SiteLiveApi* | [**deleteSiteLive**](docs/Api/SiteLiveApi.md#deletesitelive) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
*SiteLiveApi* | [**deleteSiteLive_0**](docs/Api/SiteLiveApi.md#deletesitelive_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
*SiteLiveApi* | [**deleteSiteStage**](docs/Api/SiteLiveApi.md#deletesitestage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*SiteLiveApi* | [**deleteSiteStage_0**](docs/Api/SiteLiveApi.md#deletesitestage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*SiteLiveApi* | [**deleteTag**](docs/Api/SiteLiveApi.md#deletetag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*SiteLiveApi* | [**deleteTag_0**](docs/Api/SiteLiveApi.md#deletetag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*SiteLiveApi* | [**disableFirewall**](docs/Api/SiteLiveApi.md#disablefirewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*SiteLiveApi* | [**disableFirewall_0**](docs/Api/SiteLiveApi.md#disablefirewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*SiteLiveApi* | [**enableFirewall**](docs/Api/SiteLiveApi.md#enablefirewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*SiteLiveApi* | [**enableFirewall_0**](docs/Api/SiteLiveApi.md#enablefirewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*SiteLiveApi* | [**getDnsRecords**](docs/Api/SiteLiveApi.md#getdnsrecords) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
*SiteLiveApi* | [**getDnsRecords_0**](docs/Api/SiteLiveApi.md#getdnsrecords_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
*SiteLiveApi* | [**getEmails**](docs/Api/SiteLiveApi.md#getemails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
*SiteLiveApi* | [**getEmails_0**](docs/Api/SiteLiveApi.md#getemails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
*SiteLiveApi* | [**getExternalPaths**](docs/Api/SiteLiveApi.md#getexternalpaths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*SiteLiveApi* | [**getExternalPaths_0**](docs/Api/SiteLiveApi.md#getexternalpaths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*SiteLiveApi* | [**getFilesAtPoint**](docs/Api/SiteLiveApi.md#getfilesatpoint) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*SiteLiveApi* | [**getFilesAtPoint_0**](docs/Api/SiteLiveApi.md#getfilesatpoint_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*SiteLiveApi* | [**getMailDns**](docs/Api/SiteLiveApi.md#getmaildns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*SiteLiveApi* | [**getMailDns_0**](docs/Api/SiteLiveApi.md#getmaildns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*SiteLiveApi* | [**getPitRestore**](docs/Api/SiteLiveApi.md#getpitrestore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*SiteLiveApi* | [**getPitRestore_0**](docs/Api/SiteLiveApi.md#getpitrestore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*SiteLiveApi* | [**getPitRestores**](docs/Api/SiteLiveApi.md#getpitrestores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*SiteLiveApi* | [**getPitRestores_0**](docs/Api/SiteLiveApi.md#getpitrestores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*SiteLiveApi* | [**getSiteLive**](docs/Api/SiteLiveApi.md#getsitelive) | **GET** /api/v1/site_live/{fqdn} | Get your live site
*SiteLiveApi* | [**getSiteLive_0**](docs/Api/SiteLiveApi.md#getsitelive_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site
*SiteLiveApi* | [**getSitePlanUsage**](docs/Api/SiteLiveApi.md#getsiteplanusage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*SiteLiveApi* | [**getSitePlanUsage_0**](docs/Api/SiteLiveApi.md#getsiteplanusage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*SiteLiveApi* | [**getSitesLive**](docs/Api/SiteLiveApi.md#getsiteslive) | **GET** /api/v1/site_live | Get your sites
*SiteLiveApi* | [**getSitesLive_0**](docs/Api/SiteLiveApi.md#getsiteslive_0) | **GET** /api/v1/site_live | Get your sites
*SiteLiveApi* | [**getTags**](docs/Api/SiteLiveApi.md#gettags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
*SiteLiveApi* | [**getTags_0**](docs/Api/SiteLiveApi.md#gettags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
*SiteLiveApi* | [**modifyFirewall**](docs/Api/SiteLiveApi.md#modifyfirewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*SiteLiveApi* | [**modifyFirewall_0**](docs/Api/SiteLiveApi.md#modifyfirewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*SiteLiveApi* | [**restoreSite**](docs/Api/SiteLiveApi.md#restoresite) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*SiteLiveApi* | [**restoreSite_0**](docs/Api/SiteLiveApi.md#restoresite_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*SiteLiveApi* | [**shellCmdSiteLive**](docs/Api/SiteLiveApi.md#shellcmdsitelive) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*SiteLiveApi* | [**shellCmdSiteLive_0**](docs/Api/SiteLiveApi.md#shellcmdsitelive_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*SiteLiveApi* | [**updateDnsRecord**](docs/Api/SiteLiveApi.md#updatednsrecord) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
*SiteLiveApi* | [**updateDnsRecord_0**](docs/Api/SiteLiveApi.md#updatednsrecord_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
*SiteLiveApi* | [**updateEmail**](docs/Api/SiteLiveApi.md#updateemail) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*SiteLiveApi* | [**updateEmail_0**](docs/Api/SiteLiveApi.md#updateemail_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*SiteLiveApi* | [**updateSiteLive**](docs/Api/SiteLiveApi.md#updatesitelive) | **PUT** /api/v1/site_live/{fqdn} | Update a site
*SiteLiveApi* | [**updateSiteLive_0**](docs/Api/SiteLiveApi.md#updatesitelive_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site
*SiteLiveApi* | [**validateMxRecords**](docs/Api/SiteLiveApi.md#validatemxrecords) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*SiteLiveApi* | [**validateMxRecords_0**](docs/Api/SiteLiveApi.md#validatemxrecords_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*TeamApi* | [**getTeam**](docs/Api/TeamApi.md#getteam) | **GET** /api/v1/team/{team_id} | Get a team
*TeamApi* | [**getTeamMember**](docs/Api/TeamApi.md#getteammember) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*TeamApi* | [**getTeamMember_0**](docs/Api/TeamApi.md#getteammember_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*TeamApi* | [**getTeamMembers**](docs/Api/TeamApi.md#getteammembers) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
*TeamApi* | [**getTeamMembers_0**](docs/Api/TeamApi.md#getteammembers_0) | **GET** /api/v1/team{team_id}/member | Get a team&#39;s members
*TeamApi* | [**getTeam_0**](docs/Api/TeamApi.md#getteam_0) | **GET** /api/v1/team/{team_id} | Get a team
*TeamApi* | [**getTeams**](docs/Api/TeamApi.md#getteams) | **GET** /api/v1/team | Get your owned teams
*TeamApi* | [**getTeams_0**](docs/Api/TeamApi.md#getteams_0) | **GET** /api/v1/team | Get your owned teams
*TeamApi* | [**removeTeamMember**](docs/Api/TeamApi.md#removeteammember) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*TeamApi* | [**removeTeamMember_0**](docs/Api/TeamApi.md#removeteammember_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*TeamApi* | [**updateTeam**](docs/Api/TeamApi.md#updateteam) | **PUT** /api/v1/team/{team_id} | Update a Team
*TeamApi* | [**updateTeam_0**](docs/Api/TeamApi.md#updateteam_0) | **PUT** /api/v1/team/{team_id} | Update a Team
*TemplateApi* | [**getTemplate**](docs/Api/TemplateApi.md#gettemplate) | **GET** /api/v1/template/{template_name} | Get Templates
*TemplateApi* | [**getTemplates**](docs/Api/TemplateApi.md#gettemplates) | **GET** /api/v1/template | Get Templates
*TemplateApi* | [**submitTemplate**](docs/Api/TemplateApi.md#submittemplate) | **POST** /api/v1/template | Create Template
*TicketApi* | [**createTicket**](docs/Api/TicketApi.md#createticket) | **POST** /api/v1/ticket | Create Ticket
*TicketApi* | [**createTicketReply**](docs/Api/TicketApi.md#createticketreply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
*TicketApi* | [**deleteTicket**](docs/Api/TicketApi.md#deleteticket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
*TicketApi* | [**getTicket**](docs/Api/TicketApi.md#getticket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
*TicketApi* | [**getTickets**](docs/Api/TicketApi.md#gettickets) | **GET** /api/v1/ticket | Get Tickets
*TicketApi* | [**updateTicket**](docs/Api/TicketApi.md#updateticket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket
*UtilsApi* | [**domainCheck**](docs/Api/UtilsApi.md#domaincheck) | **GET** /api/v1/domain_check | Domain check
*UtilsApi* | [**verifyGitSyncDirectories**](docs/Api/UtilsApi.md#verifygitsyncdirectories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories

## Models

- [ExternalPathCreate](docs/Model/ExternalPathCreate.md)
- [HTTPValidationError](docs/Model/HTTPValidationError.md)
- [Migration](docs/Model/Migration.md)
- [PITRestoreCreate](docs/Model/PITRestoreCreate.md)
- [Plan](docs/Model/Plan.md)
- [PlanCreate](docs/Model/PlanCreate.md)
- [PlanUpdate](docs/Model/PlanUpdate.md)
- [Region](docs/Model/Region.md)
- [SiteLive](docs/Model/SiteLive.md)
- [SiteLiveCreate](docs/Model/SiteLiveCreate.md)
- [SiteLiveUpdate](docs/Model/SiteLiveUpdate.md)
- [SiteStageCreate](docs/Model/SiteStageCreate.md)
- [Tag](docs/Model/Tag.md)
- [TagCreate](docs/Model/TagCreate.md)
- [Team](docs/Model/Team.md)
- [TeamMember](docs/Model/TeamMember.md)
- [TeamUpdate](docs/Model/TeamUpdate.md)
- [Template](docs/Model/Template.md)
- [TemplateCreate](docs/Model/TemplateCreate.md)
- [Ticket](docs/Model/Ticket.md)
- [TicketCreate](docs/Model/TicketCreate.md)
- [TicketReply](docs/Model/TicketReply.md)
- [TicketReplyCreate](docs/Model/TicketReplyCreate.md)
- [TicketUpdate](docs/Model/TicketUpdate.md)
- [User](docs/Model/User.md)
- [UserEmailCreate](docs/Model/UserEmailCreate.md)
- [UserEmailUpdate](docs/Model/UserEmailUpdate.md)
- [UserUpdateSafe](docs/Model/UserUpdateSafe.md)
- [ValidationError](docs/Model/ValidationError.md)

## Authorization

### APIKeyCookie

- **Type**: API key
- **API key parameter name**: msb
- **Location**: 



### OAuth2PasswordBearer

- **Type**: `OAuth`
- **Flow**: `password`
- **Authorization URL**: ``
- **Scopes**: N/A

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
