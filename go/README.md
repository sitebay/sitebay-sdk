# Go API client for openapi

OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.GoClientCodegen

## Installation

Install the following dependencies:

```shell
go get github.com/stretchr/testify/assert
go get golang.org/x/oauth2
go get golang.org/x/net/context
```

Put the package under your project folder and add the following in import:

```golang
import openapi "github.com/GIT_USER_ID/GIT_REPO_ID"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `sw.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), openapi.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `sw.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), openapi.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `sw.ContextOperationServerIndices` and `sw.ContextOperationServerVariables` context maps.

```
ctx := context.WithValue(context.Background(), openapi.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), openapi.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to *https://my.sitebay.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**DeletePaymentMethod**](docs/AccountApi.md#deletepaymentmethod) | **Delete** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*AccountApi* | [**DeletePaymentMethod_0**](docs/AccountApi.md#deletepaymentmethod_0) | **Delete** /api/v1/account/payment_method/{payment_method_id} | Delete payment method
*AccountApi* | [**GetPaymentMethods**](docs/AccountApi.md#getpaymentmethods) | **Get** /api/v1/account/payment_method | Get payment methods
*AccountApi* | [**GetPaymentMethods_0**](docs/AccountApi.md#getpaymentmethods_0) | **Get** /api/v1/account/payment_method | Get payment methods
*AccountApi* | [**GetTax**](docs/AccountApi.md#gettax) | **Get** /api/v1/account/get_tax | Get tax
*AccountApi* | [**GetTax_0**](docs/AccountApi.md#gettax_0) | **Get** /api/v1/account/get_tax | Get tax
*AccountApi* | [**GetUserMe**](docs/AccountApi.md#getuserme) | **Get** /api/v1/account | Get own user
*AccountApi* | [**GetUserMe_0**](docs/AccountApi.md#getuserme_0) | **Get** /api/v1/account | Get own user
*AccountApi* | [**RevokeOauth**](docs/AccountApi.md#revokeoauth) | **Delete** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*AccountApi* | [**RevokeOauth_0**](docs/AccountApi.md#revokeoauth_0) | **Delete** /api/v1/account/revoke_oauth/{provider} | Revoke OAuth
*AccountApi* | [**UpdatePaymentMethod**](docs/AccountApi.md#updatepaymentmethod) | **Put** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*AccountApi* | [**UpdatePaymentMethod_0**](docs/AccountApi.md#updatepaymentmethod_0) | **Put** /api/v1/account/payment_method/{payment_method_id} | Update payment method
*AccountApi* | [**UpdateUser**](docs/AccountApi.md#updateuser) | **Put** /api/v1/account | Update user
*AccountApi* | [**UpdateUser_0**](docs/AccountApi.md#updateuser_0) | **Put** /api/v1/account | Update user
*MigrationApi* | [**CreateMigration**](docs/MigrationApi.md#createmigration) | **Post** /api/v1/migration | Create a migration
*MigrationApi* | [**DeleteMigration**](docs/MigrationApi.md#deletemigration) | **Get** /api/v1/migration/{migration_id} | Delete Migration
*MigrationApi* | [**GetMigrations**](docs/MigrationApi.md#getmigrations) | **Get** /api/v1/migration | Get Migrations
*PlanApi* | [**CancelPlan**](docs/PlanApi.md#cancelplan) | **Delete** /api/v1/plan/{plan_id} | Cancel Plan
*PlanApi* | [**CreatePlan**](docs/PlanApi.md#createplan) | **Post** /api/v1/plan | Create a Plan
*PlanApi* | [**GetPlan**](docs/PlanApi.md#getplan) | **Get** /api/v1/plan/{plan_id} | Get Plan
*PlanApi* | [**GetPlans**](docs/PlanApi.md#getplans) | **Get** /api/v1/plan | Get Plans
*PlanApi* | [**PreviewChange**](docs/PlanApi.md#previewchange) | **Get** /api/v1/plan/{plan_id}/preview | Preview Plan
*PlanApi* | [**UncancelPlan**](docs/PlanApi.md#uncancelplan) | **Patch** /api/v1/plan/{plan_id} | Uncancel Plan
*PlanApi* | [**UpdatePlan**](docs/PlanApi.md#updateplan) | **Put** /api/v1/plan/{plan_id} | Update a Plan
*RegionApi* | [**GetRegion**](docs/RegionApi.md#getregion) | **Get** /api/v1/region/{region_id} | Get a Region
*RegionApi* | [**GetRegions**](docs/RegionApi.md#getregions) | **Get** /api/v1/region | Get Regions
*SiteLiveApi* | [**AddMailDns**](docs/SiteLiveApi.md#addmaildns) | **Post** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*SiteLiveApi* | [**AddMailDns_0**](docs/SiteLiveApi.md#addmaildns_0) | **Post** /api/v1/site_live/{fqdn}/dns/email_dns_records | Create Email DNS records
*SiteLiveApi* | [**ChangeDevMode**](docs/SiteLiveApi.md#changedevmode) | **Patch** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*SiteLiveApi* | [**ChangeDevMode_0**](docs/SiteLiveApi.md#changedevmode_0) | **Patch** /api/v1/site_live/{fqdn}/change-dev-mode | Change HTTP Auth
*SiteLiveApi* | [**ClearCache**](docs/SiteLiveApi.md#clearcache) | **Post** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*SiteLiveApi* | [**ClearCache_0**](docs/SiteLiveApi.md#clearcache_0) | **Post** /api/v1/site_live/{fqdn}/clear-cache | Clear the cache
*SiteLiveApi* | [**CommitSiteStage**](docs/SiteLiveApi.md#commitsitestage) | **Post** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*SiteLiveApi* | [**CommitSiteStage_0**](docs/SiteLiveApi.md#commitsitestage_0) | **Post** /api/v1/site_live/{fqdn}/stage/commit | Commit Stage Site
*SiteLiveApi* | [**CreateEmail**](docs/SiteLiveApi.md#createemail) | **Post** /api/v1/site_live/{fqdn}/email | Create Email
*SiteLiveApi* | [**CreateEmail_0**](docs/SiteLiveApi.md#createemail_0) | **Post** /api/v1/site_live/{fqdn}/email | Create Email
*SiteLiveApi* | [**CreateExternalPath**](docs/SiteLiveApi.md#createexternalpath) | **Post** /api/v1/site_live/{fqdn}/external-path | Create External Path
*SiteLiveApi* | [**CreateExternalPath_0**](docs/SiteLiveApi.md#createexternalpath_0) | **Post** /api/v1/site_live/{fqdn}/external-path | Create External Path
*SiteLiveApi* | [**CreateSiteLive**](docs/SiteLiveApi.md#createsitelive) | **Post** /api/v1/site_live | Create a site
*SiteLiveApi* | [**CreateSiteLive_0**](docs/SiteLiveApi.md#createsitelive_0) | **Post** /api/v1/site_live | Create a site
*SiteLiveApi* | [**CreateSiteStage**](docs/SiteLiveApi.md#createsitestage) | **Post** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*SiteLiveApi* | [**CreateSiteStage_0**](docs/SiteLiveApi.md#createsitestage_0) | **Post** /api/v1/site_live/{fqdn}/stage | Create a Staging site
*SiteLiveApi* | [**CreateTag**](docs/SiteLiveApi.md#createtag) | **Post** /api/v1/site_live/{fqdn}/tag | Create tag
*SiteLiveApi* | [**CreateTag_0**](docs/SiteLiveApi.md#createtag_0) | **Post** /api/v1/site_live/{fqdn}/tag | Create tag
*SiteLiveApi* | [**DeleteDnsRecord**](docs/SiteLiveApi.md#deletednsrecord) | **Delete** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*SiteLiveApi* | [**DeleteDnsRecord_0**](docs/SiteLiveApi.md#deletednsrecord_0) | **Delete** /api/v1/site_live/{fqdn}/dns/{dns_id} | Delete DNS record
*SiteLiveApi* | [**DeleteEmail**](docs/SiteLiveApi.md#deleteemail) | **Delete** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*SiteLiveApi* | [**DeleteEmail_0**](docs/SiteLiveApi.md#deleteemail_0) | **Delete** /api/v1/site_live/{fqdn}/email/{user_email_address} | Delete Email
*SiteLiveApi* | [**DeleteExternalPath**](docs/SiteLiveApi.md#deleteexternalpath) | **Delete** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*SiteLiveApi* | [**DeleteExternalPath_0**](docs/SiteLiveApi.md#deleteexternalpath_0) | **Delete** /api/v1/site_live/{fqdn}/external-path/{external_path_id} | Delete External Path
*SiteLiveApi* | [**DeleteSiteLive**](docs/SiteLiveApi.md#deletesitelive) | **Delete** /api/v1/site_live/{fqdn} | Delete your live site
*SiteLiveApi* | [**DeleteSiteLive_0**](docs/SiteLiveApi.md#deletesitelive_0) | **Delete** /api/v1/site_live/{fqdn} | Delete your live site
*SiteLiveApi* | [**DeleteSiteStage**](docs/SiteLiveApi.md#deletesitestage) | **Delete** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*SiteLiveApi* | [**DeleteSiteStage_0**](docs/SiteLiveApi.md#deletesitestage_0) | **Delete** /api/v1/site_live/{fqdn}/stage | Delete Stage Site
*SiteLiveApi* | [**DeleteTag**](docs/SiteLiveApi.md#deletetag) | **Delete** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*SiteLiveApi* | [**DeleteTag_0**](docs/SiteLiveApi.md#deletetag_0) | **Delete** /api/v1/site_live/{fqdn}/tag/{tag_id} | Get a tag
*SiteLiveApi* | [**DisableFirewall**](docs/SiteLiveApi.md#disablefirewall) | **Delete** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*SiteLiveApi* | [**DisableFirewall_0**](docs/SiteLiveApi.md#disablefirewall_0) | **Delete** /api/v1/site_live/{fqdn}/firewall | Disable the firewall
*SiteLiveApi* | [**EnableFirewall**](docs/SiteLiveApi.md#enablefirewall) | **Post** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*SiteLiveApi* | [**EnableFirewall_0**](docs/SiteLiveApi.md#enablefirewall_0) | **Post** /api/v1/site_live/{fqdn}/firewall | Enable the firewall
*SiteLiveApi* | [**GetDnsRecords**](docs/SiteLiveApi.md#getdnsrecords) | **Get** /api/v1/site_live/{fqdn}/dns | Get DNS records
*SiteLiveApi* | [**GetDnsRecords_0**](docs/SiteLiveApi.md#getdnsrecords_0) | **Get** /api/v1/site_live/{fqdn}/dns | Get DNS records
*SiteLiveApi* | [**GetEmails**](docs/SiteLiveApi.md#getemails) | **Get** /api/v1/site_live/{fqdn}/email | Get Emails
*SiteLiveApi* | [**GetEmails_0**](docs/SiteLiveApi.md#getemails_0) | **Get** /api/v1/site_live/{fqdn}/email | Get Emails
*SiteLiveApi* | [**GetExternalPaths**](docs/SiteLiveApi.md#getexternalpaths) | **Get** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*SiteLiveApi* | [**GetExternalPaths_0**](docs/SiteLiveApi.md#getexternalpaths_0) | **Get** /api/v1/site_live/{fqdn}/external-path | Get External Paths
*SiteLiveApi* | [**GetFilesAtPoint**](docs/SiteLiveApi.md#getfilesatpoint) | **Get** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*SiteLiveApi* | [**GetFilesAtPoint_0**](docs/SiteLiveApi.md#getfilesatpoint_0) | **Get** /api/v1/site_live/{fqdn}/pit-restore/files | PIT Files
*SiteLiveApi* | [**GetMailDns**](docs/SiteLiveApi.md#getmaildns) | **Get** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*SiteLiveApi* | [**GetMailDns_0**](docs/SiteLiveApi.md#getmaildns_0) | **Get** /api/v1/site_live/{fqdn}/dns/email_dns_records | Get Required mail DNS records
*SiteLiveApi* | [**GetPitRestore**](docs/SiteLiveApi.md#getpitrestore) | **Get** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*SiteLiveApi* | [**GetPitRestore_0**](docs/SiteLiveApi.md#getpitrestore_0) | **Get** /api/v1/site_live/{fqdn}/pit-restore/{pit_restore_id} | Get PIT Restore
*SiteLiveApi* | [**GetPitRestores**](docs/SiteLiveApi.md#getpitrestores) | **Get** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*SiteLiveApi* | [**GetPitRestores_0**](docs/SiteLiveApi.md#getpitrestores_0) | **Get** /api/v1/site_live/{fqdn}/pit-restore | Get PIT Restores
*SiteLiveApi* | [**GetSiteLive**](docs/SiteLiveApi.md#getsitelive) | **Get** /api/v1/site_live/{fqdn} | Get your live site
*SiteLiveApi* | [**GetSiteLive_0**](docs/SiteLiveApi.md#getsitelive_0) | **Get** /api/v1/site_live/{fqdn} | Get your live site
*SiteLiveApi* | [**GetSitePlanUsage**](docs/SiteLiveApi.md#getsiteplanusage) | **Get** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*SiteLiveApi* | [**GetSitePlanUsage_0**](docs/SiteLiveApi.md#getsiteplanusage_0) | **Get** /api/v1/site_live/{fqdn}/usage | Get Site Plan Usage
*SiteLiveApi* | [**GetSitesLive**](docs/SiteLiveApi.md#getsiteslive) | **Get** /api/v1/site_live | Get your sites
*SiteLiveApi* | [**GetSitesLive_0**](docs/SiteLiveApi.md#getsiteslive_0) | **Get** /api/v1/site_live | Get your sites
*SiteLiveApi* | [**GetTags**](docs/SiteLiveApi.md#gettags) | **Get** /api/v1/site_live/{fqdn}/tag | Get tags
*SiteLiveApi* | [**GetTags_0**](docs/SiteLiveApi.md#gettags_0) | **Get** /api/v1/site_live/{fqdn}/tag | Get tags
*SiteLiveApi* | [**ModifyFirewall**](docs/SiteLiveApi.md#modifyfirewall) | **Put** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*SiteLiveApi* | [**ModifyFirewall_0**](docs/SiteLiveApi.md#modifyfirewall_0) | **Put** /api/v1/site_live/{fqdn}/firewall | Modify the firewall
*SiteLiveApi* | [**RestoreSite**](docs/SiteLiveApi.md#restoresite) | **Post** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*SiteLiveApi* | [**RestoreSite_0**](docs/SiteLiveApi.md#restoresite_0) | **Post** /api/v1/site_live/{fqdn}/pit-restore | Create PIT Restore
*SiteLiveApi* | [**ShellCmdSiteLive**](docs/SiteLiveApi.md#shellcmdsitelive) | **Put** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*SiteLiveApi* | [**ShellCmdSiteLive_0**](docs/SiteLiveApi.md#shellcmdsitelive_0) | **Put** /api/v1/site_live/{fqdn}/cmd | Execute shell command
*SiteLiveApi* | [**UpdateDnsRecord**](docs/SiteLiveApi.md#updatednsrecord) | **Put** /api/v1/site_live/{fqdn}/dns | Update DNS record
*SiteLiveApi* | [**UpdateDnsRecord_0**](docs/SiteLiveApi.md#updatednsrecord_0) | **Put** /api/v1/site_live/{fqdn}/dns | Update DNS record
*SiteLiveApi* | [**UpdateEmail**](docs/SiteLiveApi.md#updateemail) | **Patch** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*SiteLiveApi* | [**UpdateEmail_0**](docs/SiteLiveApi.md#updateemail_0) | **Patch** /api/v1/site_live/{fqdn}/email/{user_email_address} | Update Email
*SiteLiveApi* | [**UpdateSiteLive**](docs/SiteLiveApi.md#updatesitelive) | **Put** /api/v1/site_live/{fqdn} | Update a site
*SiteLiveApi* | [**UpdateSiteLive_0**](docs/SiteLiveApi.md#updatesitelive_0) | **Put** /api/v1/site_live/{fqdn} | Update a site
*SiteLiveApi* | [**ValidateMxRecords**](docs/SiteLiveApi.md#validatemxrecords) | **Get** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*SiteLiveApi* | [**ValidateMxRecords_0**](docs/SiteLiveApi.md#validatemxrecords_0) | **Get** /api/v1/site_live/{fqdn}/validate_mx_records | MX Validation
*TeamApi* | [**GetTeam**](docs/TeamApi.md#getteam) | **Get** /api/v1/team/{team_id} | Get a team
*TeamApi* | [**GetTeamMember**](docs/TeamApi.md#getteammember) | **Get** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*TeamApi* | [**GetTeamMember_0**](docs/TeamApi.md#getteammember_0) | **Get** /api/v1/team/{team_id}/member/{team_member_id} | Get Team Member
*TeamApi* | [**GetTeamMembers**](docs/TeamApi.md#getteammembers) | **Get** /api/v1/team{team_id}/member | Get a team&#39;s members
*TeamApi* | [**GetTeamMembers_0**](docs/TeamApi.md#getteammembers_0) | **Get** /api/v1/team{team_id}/member | Get a team&#39;s members
*TeamApi* | [**GetTeam_0**](docs/TeamApi.md#getteam_0) | **Get** /api/v1/team/{team_id} | Get a team
*TeamApi* | [**GetTeams**](docs/TeamApi.md#getteams) | **Get** /api/v1/team | Get your owned teams
*TeamApi* | [**GetTeams_0**](docs/TeamApi.md#getteams_0) | **Get** /api/v1/team | Get your owned teams
*TeamApi* | [**RemoveTeamMember**](docs/TeamApi.md#removeteammember) | **Delete** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*TeamApi* | [**RemoveTeamMember_0**](docs/TeamApi.md#removeteammember_0) | **Delete** /api/v1/team/{team_id}/member/{team_member_id} | Remove Team Member
*TeamApi* | [**UpdateTeam**](docs/TeamApi.md#updateteam) | **Put** /api/v1/team/{team_id} | Update a Team
*TeamApi* | [**UpdateTeam_0**](docs/TeamApi.md#updateteam_0) | **Put** /api/v1/team/{team_id} | Update a Team
*TemplateApi* | [**GetTemplate**](docs/TemplateApi.md#gettemplate) | **Get** /api/v1/template/{template_name} | Get Templates
*TemplateApi* | [**GetTemplates**](docs/TemplateApi.md#gettemplates) | **Get** /api/v1/template | Get Templates
*TemplateApi* | [**SubmitTemplate**](docs/TemplateApi.md#submittemplate) | **Post** /api/v1/template | Create Template
*TicketApi* | [**CreateTicket**](docs/TicketApi.md#createticket) | **Post** /api/v1/ticket | Create Ticket
*TicketApi* | [**CreateTicketReply**](docs/TicketApi.md#createticketreply) | **Post** /api/v1/ticket/{ticket_id}/reply | Create Ticket Reply
*TicketApi* | [**DeleteTicket**](docs/TicketApi.md#deleteticket) | **Delete** /api/v1/ticket/{ticket_id} | Delete Ticket
*TicketApi* | [**GetTicket**](docs/TicketApi.md#getticket) | **Get** /api/v1/ticket/{ticket_id} | Get Ticket
*TicketApi* | [**GetTickets**](docs/TicketApi.md#gettickets) | **Get** /api/v1/ticket | Get Tickets
*TicketApi* | [**UpdateTicket**](docs/TicketApi.md#updateticket) | **Put** /api/v1/ticket/{ticket_id} | Update Ticket
*UtilsApi* | [**DomainCheck**](docs/UtilsApi.md#domaincheck) | **Get** /api/v1/domain_check | Domain check
*UtilsApi* | [**VerifyGitSyncDirectories**](docs/UtilsApi.md#verifygitsyncdirectories) | **Get** /api/v1/verify_git_sync_directories | Verify Git Sync Directories


## Documentation For Models

 - [ExternalPathCreate](docs/ExternalPathCreate.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [Migration](docs/Migration.md)
 - [PITRestoreCreate](docs/PITRestoreCreate.md)
 - [Plan](docs/Plan.md)
 - [PlanCreate](docs/PlanCreate.md)
 - [PlanUpdate](docs/PlanUpdate.md)
 - [Region](docs/Region.md)
 - [SiteLive](docs/SiteLive.md)
 - [SiteLiveCreate](docs/SiteLiveCreate.md)
 - [SiteLiveUpdate](docs/SiteLiveUpdate.md)
 - [SiteStageCreate](docs/SiteStageCreate.md)
 - [Tag](docs/Tag.md)
 - [TagCreate](docs/TagCreate.md)
 - [Team](docs/Team.md)
 - [TeamMember](docs/TeamMember.md)
 - [TeamUpdate](docs/TeamUpdate.md)
 - [Template](docs/Template.md)
 - [TemplateCreate](docs/TemplateCreate.md)
 - [Ticket](docs/Ticket.md)
 - [TicketCreate](docs/TicketCreate.md)
 - [TicketReply](docs/TicketReply.md)
 - [TicketReplyCreate](docs/TicketReplyCreate.md)
 - [TicketUpdate](docs/TicketUpdate.md)
 - [User](docs/User.md)
 - [UserEmailCreate](docs/UserEmailCreate.md)
 - [UserEmailUpdate](docs/UserEmailUpdate.md)
 - [UserUpdateSafe](docs/UserUpdateSafe.md)
 - [ValidationError](docs/ValidationError.md)


## Documentation For Authorization



### APIKeyCookie

- **Type**: API key
- **API key parameter name**: msb
- **Location**: 

Note, each API key must be added to a map of `map[string]APIKey` where the key is: msb and passed in as the auth context for each request.


### OAuth2PasswordBearer


- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: N/A

Example

```golang
auth := context.WithValue(context.Background(), sw.ContextAccessToken, "ACCESSTOKENSTRING")
r, err := client.Service.Operation(auth, args)
```

Or via OAuth2 module to automatically refresh tokens and perform user authentication.

```golang
import "golang.org/x/oauth2"

/* Perform OAuth2 round trip request and obtain a token */

tokenSource := oauth2cfg.TokenSource(createContext(httpClient), &token)
auth := context.WithValue(oauth2.NoContext, sw.ContextOAuth2, tokenSource)
r, err := client.Service.Operation(auth, args)
```


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author



