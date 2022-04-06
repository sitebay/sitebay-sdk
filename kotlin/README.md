# org.openapitools.client - Kotlin client library for Site Bay

## Requires

* Kotlin 1.4.30
* Gradle 6.8.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://my.sitebay.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**deletePaymentMethod**](docs/AccountApi.md#deletepaymentmethod) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*AccountApi* | [**deletePaymentMethod_0**](docs/AccountApi.md#deletepaymentmethod_0) | **DELETE** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*AccountApi* | [**getPaymentMethods**](docs/AccountApi.md#getpaymentmethods) | **GET** /api/v1/account/payment_method | Get payment methods
*AccountApi* | [**getPaymentMethods_0**](docs/AccountApi.md#getpaymentmethods_0) | **GET** /api/v1/account/payment_method | Get payment methods
*AccountApi* | [**getTax**](docs/AccountApi.md#gettax) | **GET** /api/v1/account/get_tax | Get tax
*AccountApi* | [**getTax_0**](docs/AccountApi.md#gettax_0) | **GET** /api/v1/account/get_tax | Get tax
*AccountApi* | [**getUserMe**](docs/AccountApi.md#getuserme) | **GET** /api/v1/account | Get own user
*AccountApi* | [**getUserMe_0**](docs/AccountApi.md#getuserme_0) | **GET** /api/v1/account | Get own user
*AccountApi* | [**revokeOauth**](docs/AccountApi.md#revokeoauth) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*AccountApi* | [**revokeOauth_0**](docs/AccountApi.md#revokeoauth_0) | **DELETE** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*AccountApi* | [**updatePaymentMethod**](docs/AccountApi.md#updatepaymentmethod) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*AccountApi* | [**updatePaymentMethod_0**](docs/AccountApi.md#updatepaymentmethod_0) | **PUT** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*AccountApi* | [**updateUser**](docs/AccountApi.md#updateuser) | **PUT** /api/v1/account | Update user
*AccountApi* | [**updateUser_0**](docs/AccountApi.md#updateuser_0) | **PUT** /api/v1/account | Update user
*MigrationApi* | [**createMigration**](docs/MigrationApi.md#createmigration) | **POST** /api/v1/migration | Create a migration
*MigrationApi* | [**deleteMigration**](docs/MigrationApi.md#deletemigration) | **GET** /api/v1/migration/{migration_id} | Delete Migration
*MigrationApi* | [**getMigrations**](docs/MigrationApi.md#getmigrations) | **GET** /api/v1/migration | Get Migrations
*PlanApi* | [**cancelPlan**](docs/PlanApi.md#cancelplan) | **DELETE** /api/v1/plan/{plan_id} | Cancel Plan
*PlanApi* | [**createPlan**](docs/PlanApi.md#createplan) | **POST** /api/v1/plan | Create a Plan
*PlanApi* | [**getPlan**](docs/PlanApi.md#getplan) | **GET** /api/v1/plan/{plan_id} | Get Plan
*PlanApi* | [**getPlans**](docs/PlanApi.md#getplans) | **GET** /api/v1/plan | Get Plans
*PlanApi* | [**previewChange**](docs/PlanApi.md#previewchange) | **GET** /api/v1/plan/{plan_id}/preview | Preview Plan
*PlanApi* | [**uncancelPlan**](docs/PlanApi.md#uncancelplan) | **PATCH** /api/v1/plan/{plan_id} | Uncancel Plan
*PlanApi* | [**updatePlan**](docs/PlanApi.md#updateplan) | **PUT** /api/v1/plan/{plan_id} | Update a Plan
*RegionApi* | [**getRegion**](docs/RegionApi.md#getregion) | **GET** /api/v1/region/{region_id} | Get a Region
*RegionApi* | [**getRegions**](docs/RegionApi.md#getregions) | **GET** /api/v1/region | Get Regions
*SiteLiveApi* | [**addMailDns**](docs/SiteLiveApi.md#addmaildns) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*SiteLiveApi* | [**addMailDns_0**](docs/SiteLiveApi.md#addmaildns_0) | **POST** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*SiteLiveApi* | [**changeDevMode**](docs/SiteLiveApi.md#changedevmode) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*SiteLiveApi* | [**changeDevMode_0**](docs/SiteLiveApi.md#changedevmode_0) | **PATCH** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*SiteLiveApi* | [**clearCache**](docs/SiteLiveApi.md#clearcache) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*SiteLiveApi* | [**clearCache_0**](docs/SiteLiveApi.md#clearcache_0) | **POST** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*SiteLiveApi* | [**commitSiteStage**](docs/SiteLiveApi.md#commitsitestage) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*SiteLiveApi* | [**commitSiteStage_0**](docs/SiteLiveApi.md#commitsitestage_0) | **POST** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*SiteLiveApi* | [**createEmail**](docs/SiteLiveApi.md#createemail) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
*SiteLiveApi* | [**createEmail_0**](docs/SiteLiveApi.md#createemail_0) | **POST** /api/v1/site_live/{fqdn}/email | Create Email
*SiteLiveApi* | [**createExternalPath**](docs/SiteLiveApi.md#createexternalpath) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
*SiteLiveApi* | [**createExternalPath_0**](docs/SiteLiveApi.md#createexternalpath_0) | **POST** /api/v1/site_live/{fqdn}/external-path | Create External Path
*SiteLiveApi* | [**createSiteLive**](docs/SiteLiveApi.md#createsitelive) | **POST** /api/v1/site_live | Create a site
*SiteLiveApi* | [**createSiteLive_0**](docs/SiteLiveApi.md#createsitelive_0) | **POST** /api/v1/site_live | Create a site
*SiteLiveApi* | [**createSiteStage**](docs/SiteLiveApi.md#createsitestage) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*SiteLiveApi* | [**createSiteStage_0**](docs/SiteLiveApi.md#createsitestage_0) | **POST** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*SiteLiveApi* | [**createTag**](docs/SiteLiveApi.md#createtag) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
*SiteLiveApi* | [**createTag_0**](docs/SiteLiveApi.md#createtag_0) | **POST** /api/v1/site_live/{fqdn}/tag | Create tag
*SiteLiveApi* | [**deleteDnsRecord**](docs/SiteLiveApi.md#deletednsrecord) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*SiteLiveApi* | [**deleteDnsRecord_0**](docs/SiteLiveApi.md#deletednsrecord_0) | **DELETE** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*SiteLiveApi* | [**deleteEmail**](docs/SiteLiveApi.md#deleteemail) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*SiteLiveApi* | [**deleteEmail_0**](docs/SiteLiveApi.md#deleteemail_0) | **DELETE** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*SiteLiveApi* | [**deleteExternalPath**](docs/SiteLiveApi.md#deleteexternalpath) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*SiteLiveApi* | [**deleteExternalPath_0**](docs/SiteLiveApi.md#deleteexternalpath_0) | **DELETE** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*SiteLiveApi* | [**deleteSiteLive**](docs/SiteLiveApi.md#deletesitelive) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
*SiteLiveApi* | [**deleteSiteLive_0**](docs/SiteLiveApi.md#deletesitelive_0) | **DELETE** /api/v1/site_live/{fqdn} | Delete your live site
*SiteLiveApi* | [**deleteSiteStage**](docs/SiteLiveApi.md#deletesitestage) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*SiteLiveApi* | [**deleteSiteStage_0**](docs/SiteLiveApi.md#deletesitestage_0) | **DELETE** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*SiteLiveApi* | [**deleteTag**](docs/SiteLiveApi.md#deletetag) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*SiteLiveApi* | [**deleteTag_0**](docs/SiteLiveApi.md#deletetag_0) | **DELETE** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*SiteLiveApi* | [**disableFirewall**](docs/SiteLiveApi.md#disablefirewall) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*SiteLiveApi* | [**disableFirewall_0**](docs/SiteLiveApi.md#disablefirewall_0) | **DELETE** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*SiteLiveApi* | [**enableFirewall**](docs/SiteLiveApi.md#enablefirewall) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*SiteLiveApi* | [**enableFirewall_0**](docs/SiteLiveApi.md#enablefirewall_0) | **POST** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*SiteLiveApi* | [**getDnsRecords**](docs/SiteLiveApi.md#getdnsrecords) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
*SiteLiveApi* | [**getDnsRecords_0**](docs/SiteLiveApi.md#getdnsrecords_0) | **GET** /api/v1/site_live/{fqdn}/dns | Get DNS records
*SiteLiveApi* | [**getEmails**](docs/SiteLiveApi.md#getemails) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
*SiteLiveApi* | [**getEmails_0**](docs/SiteLiveApi.md#getemails_0) | **GET** /api/v1/site_live/{fqdn}/email | Get Emails
*SiteLiveApi* | [**getExternalPaths**](docs/SiteLiveApi.md#getexternalpaths) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*SiteLiveApi* | [**getExternalPaths_0**](docs/SiteLiveApi.md#getexternalpaths_0) | **GET** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*SiteLiveApi* | [**getFilesAtPoint**](docs/SiteLiveApi.md#getfilesatpoint) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*SiteLiveApi* | [**getFilesAtPoint_0**](docs/SiteLiveApi.md#getfilesatpoint_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*SiteLiveApi* | [**getMailDns**](docs/SiteLiveApi.md#getmaildns) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*SiteLiveApi* | [**getMailDns_0**](docs/SiteLiveApi.md#getmaildns_0) | **GET** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*SiteLiveApi* | [**getPitRestore**](docs/SiteLiveApi.md#getpitrestore) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*SiteLiveApi* | [**getPitRestore_0**](docs/SiteLiveApi.md#getpitrestore_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*SiteLiveApi* | [**getPitRestores**](docs/SiteLiveApi.md#getpitrestores) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*SiteLiveApi* | [**getPitRestores_0**](docs/SiteLiveApi.md#getpitrestores_0) | **GET** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*SiteLiveApi* | [**getSiteLive**](docs/SiteLiveApi.md#getsitelive) | **GET** /api/v1/site_live/{fqdn} | Get your live site
*SiteLiveApi* | [**getSiteLive_0**](docs/SiteLiveApi.md#getsitelive_0) | **GET** /api/v1/site_live/{fqdn} | Get your live site
*SiteLiveApi* | [**getSitePlanUsage**](docs/SiteLiveApi.md#getsiteplanusage) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*SiteLiveApi* | [**getSitePlanUsage_0**](docs/SiteLiveApi.md#getsiteplanusage_0) | **GET** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*SiteLiveApi* | [**getSitesLive**](docs/SiteLiveApi.md#getsiteslive) | **GET** /api/v1/site_live | Get your sites
*SiteLiveApi* | [**getSitesLive_0**](docs/SiteLiveApi.md#getsiteslive_0) | **GET** /api/v1/site_live | Get your sites
*SiteLiveApi* | [**getTags**](docs/SiteLiveApi.md#gettags) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
*SiteLiveApi* | [**getTags_0**](docs/SiteLiveApi.md#gettags_0) | **GET** /api/v1/site_live/{fqdn}/tag | Get tags
*SiteLiveApi* | [**modifyFirewall**](docs/SiteLiveApi.md#modifyfirewall) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*SiteLiveApi* | [**modifyFirewall_0**](docs/SiteLiveApi.md#modifyfirewall_0) | **PUT** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*SiteLiveApi* | [**restoreSite**](docs/SiteLiveApi.md#restoresite) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*SiteLiveApi* | [**restoreSite_0**](docs/SiteLiveApi.md#restoresite_0) | **POST** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*SiteLiveApi* | [**shellCmdSiteLive**](docs/SiteLiveApi.md#shellcmdsitelive) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*SiteLiveApi* | [**shellCmdSiteLive_0**](docs/SiteLiveApi.md#shellcmdsitelive_0) | **PUT** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*SiteLiveApi* | [**updateDnsRecord**](docs/SiteLiveApi.md#updatednsrecord) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
*SiteLiveApi* | [**updateDnsRecord_0**](docs/SiteLiveApi.md#updatednsrecord_0) | **PUT** /api/v1/site_live/{fqdn}/dns | Update DNS record
*SiteLiveApi* | [**updateEmail**](docs/SiteLiveApi.md#updateemail) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*SiteLiveApi* | [**updateEmail_0**](docs/SiteLiveApi.md#updateemail_0) | **PATCH** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*SiteLiveApi* | [**updateSiteLive**](docs/SiteLiveApi.md#updatesitelive) | **PUT** /api/v1/site_live/{fqdn} | Update a site
*SiteLiveApi* | [**updateSiteLive_0**](docs/SiteLiveApi.md#updatesitelive_0) | **PUT** /api/v1/site_live/{fqdn} | Update a site
*SiteLiveApi* | [**validateMxRecords**](docs/SiteLiveApi.md#validatemxrecords) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*SiteLiveApi* | [**validateMxRecords_0**](docs/SiteLiveApi.md#validatemxrecords_0) | **GET** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*TeamApi* | [**getTeam**](docs/TeamApi.md#getteam) | **GET** /api/v1/team/{team_id} | Get a team
*TeamApi* | [**getTeamMember**](docs/TeamApi.md#getteammember) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*TeamApi* | [**getTeamMember_0**](docs/TeamApi.md#getteammember_0) | **GET** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*TeamApi* | [**getTeamMembers**](docs/TeamApi.md#getteammembers) | **GET** /api/v1/team{team_id}/member | Get a team's members
*TeamApi* | [**getTeamMembers_0**](docs/TeamApi.md#getteammembers_0) | **GET** /api/v1/team{team_id}/member | Get a team's members
*TeamApi* | [**getTeam_0**](docs/TeamApi.md#getteam_0) | **GET** /api/v1/team/{team_id} | Get a team
*TeamApi* | [**getTeams**](docs/TeamApi.md#getteams) | **GET** /api/v1/team | Get your owned teams
*TeamApi* | [**getTeams_0**](docs/TeamApi.md#getteams_0) | **GET** /api/v1/team | Get your owned teams
*TeamApi* | [**removeTeamMember**](docs/TeamApi.md#removeteammember) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*TeamApi* | [**removeTeamMember_0**](docs/TeamApi.md#removeteammember_0) | **DELETE** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*TeamApi* | [**updateTeam**](docs/TeamApi.md#updateteam) | **PUT** /api/v1/team/{team_id} | Update a Team
*TeamApi* | [**updateTeam_0**](docs/TeamApi.md#updateteam_0) | **PUT** /api/v1/team/{team_id} | Update a Team
*TemplateApi* | [**getTemplate**](docs/TemplateApi.md#gettemplate) | **GET** /api/v1/template/{template_name} | Get Templates
*TemplateApi* | [**getTemplates**](docs/TemplateApi.md#gettemplates) | **GET** /api/v1/template | Get Templates
*TemplateApi* | [**submitTemplate**](docs/TemplateApi.md#submittemplate) | **POST** /api/v1/template | Create Template
*TicketApi* | [**createTicket**](docs/TicketApi.md#createticket) | **POST** /api/v1/ticket | Create Ticket
*TicketApi* | [**createTicketReply**](docs/TicketApi.md#createticketreply) | **POST** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
*TicketApi* | [**deleteTicket**](docs/TicketApi.md#deleteticket) | **DELETE** /api/v1/ticket/{ticket_id} | Delete Ticket
*TicketApi* | [**getTicket**](docs/TicketApi.md#getticket) | **GET** /api/v1/ticket/{ticket_id} | Get Ticket
*TicketApi* | [**getTickets**](docs/TicketApi.md#gettickets) | **GET** /api/v1/ticket | Get Tickets
*TicketApi* | [**updateTicket**](docs/TicketApi.md#updateticket) | **PUT** /api/v1/ticket/{ticket_id} | Update Ticket
*UtilsApi* | [**domainCheck**](docs/UtilsApi.md#domaincheck) | **GET** /api/v1/domain_check | Domain check
*UtilsApi* | [**verifyGitSyncDirectories**](docs/UtilsApi.md#verifygitsyncdirectories) | **GET** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.ExternalPathCreate](docs/ExternalPathCreate.md)
 - [org.openapitools.client.models.HTTPValidationError](docs/HTTPValidationError.md)
 - [org.openapitools.client.models.Migration](docs/Migration.md)
 - [org.openapitools.client.models.PITRestoreCreate](docs/PITRestoreCreate.md)
 - [org.openapitools.client.models.Plan](docs/Plan.md)
 - [org.openapitools.client.models.PlanCreate](docs/PlanCreate.md)
 - [org.openapitools.client.models.PlanUpdate](docs/PlanUpdate.md)
 - [org.openapitools.client.models.Region](docs/Region.md)
 - [org.openapitools.client.models.SiteLive](docs/SiteLive.md)
 - [org.openapitools.client.models.SiteLiveCreate](docs/SiteLiveCreate.md)
 - [org.openapitools.client.models.SiteLiveUpdate](docs/SiteLiveUpdate.md)
 - [org.openapitools.client.models.SiteStageCreate](docs/SiteStageCreate.md)
 - [org.openapitools.client.models.Tag](docs/Tag.md)
 - [org.openapitools.client.models.TagCreate](docs/TagCreate.md)
 - [org.openapitools.client.models.Team](docs/Team.md)
 - [org.openapitools.client.models.TeamMember](docs/TeamMember.md)
 - [org.openapitools.client.models.TeamUpdate](docs/TeamUpdate.md)
 - [org.openapitools.client.models.Template](docs/Template.md)
 - [org.openapitools.client.models.TemplateCreate](docs/TemplateCreate.md)
 - [org.openapitools.client.models.Ticket](docs/Ticket.md)
 - [org.openapitools.client.models.TicketCreate](docs/TicketCreate.md)
 - [org.openapitools.client.models.TicketReply](docs/TicketReply.md)
 - [org.openapitools.client.models.TicketReplyCreate](docs/TicketReplyCreate.md)
 - [org.openapitools.client.models.TicketUpdate](docs/TicketUpdate.md)
 - [org.openapitools.client.models.User](docs/User.md)
 - [org.openapitools.client.models.UserEmailCreate](docs/UserEmailCreate.md)
 - [org.openapitools.client.models.UserEmailUpdate](docs/UserEmailUpdate.md)
 - [org.openapitools.client.models.UserUpdateSafe](docs/UserUpdateSafe.md)
 - [org.openapitools.client.models.ValidationError](docs/ValidationError.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="APIKeyCookie"></a>
### APIKeyCookie

- **Type**: API key
- **API key parameter name**: msb
- **Location**: 

<a name="OAuth2PasswordBearer"></a>
### OAuth2PasswordBearer

- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: N/A

