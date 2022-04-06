import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ExternalPathCreate } from '../models/ExternalPathCreate';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { Migration } from '../models/Migration';
import { PITRestoreCreate } from '../models/PITRestoreCreate';
import { Plan } from '../models/Plan';
import { PlanCreate } from '../models/PlanCreate';
import { PlanUpdate } from '../models/PlanUpdate';
import { Region } from '../models/Region';
import { SiteLive } from '../models/SiteLive';
import { SiteLiveCreate } from '../models/SiteLiveCreate';
import { SiteLiveUpdate } from '../models/SiteLiveUpdate';
import { SiteStageCreate } from '../models/SiteStageCreate';
import { Tag } from '../models/Tag';
import { TagCreate } from '../models/TagCreate';
import { Team } from '../models/Team';
import { TeamMember } from '../models/TeamMember';
import { TeamUpdate } from '../models/TeamUpdate';
import { Template } from '../models/Template';
import { TemplateCreate } from '../models/TemplateCreate';
import { Ticket } from '../models/Ticket';
import { TicketCreate } from '../models/TicketCreate';
import { TicketReply } from '../models/TicketReply';
import { TicketReplyCreate } from '../models/TicketReplyCreate';
import { TicketUpdate } from '../models/TicketUpdate';
import { User } from '../models/User';
import { UserEmailCreate } from '../models/UserEmailCreate';
import { UserEmailUpdate } from '../models/UserEmailUpdate';
import { UserUpdateSafe } from '../models/UserUpdateSafe';
import { ValidationError } from '../models/ValidationError';
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a non-default payment method
     * Delete payment method
     * @param paymentMethodId 
     */
    public deletePaymentMethod(paymentMethodId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePaymentMethod(paymentMethodId, _options);
        return result.toPromise();
    }

    /**
     * Delete a non-default payment method
     * Delete payment method
     * @param paymentMethodId 
     */
    public deletePaymentMethod_1(paymentMethodId: string, _options?: Configuration): Promise<any> {
        const result = this.api.deletePaymentMethod_1(paymentMethodId, _options);
        return result.toPromise();
    }

    /**
     * Get your payment methods
     * Get payment methods
     */
    public getPaymentMethods(_options?: Configuration): Promise<any> {
        const result = this.api.getPaymentMethods(_options);
        return result.toPromise();
    }

    /**
     * Get your payment methods
     * Get payment methods
     */
    public getPaymentMethods_2(_options?: Configuration): Promise<any> {
        const result = this.api.getPaymentMethods_2(_options);
        return result.toPromise();
    }

    /**
     * Get your default card's sales tax percentage
     * Get tax
     */
    public getTax(_options?: Configuration): Promise<any> {
        const result = this.api.getTax(_options);
        return result.toPromise();
    }

    /**
     * Get your default card's sales tax percentage
     * Get tax
     */
    public getTax_3(_options?: Configuration): Promise<any> {
        const result = this.api.getTax_3(_options);
        return result.toPromise();
    }

    /**
     * Get your user data
     * Get own user
     */
    public getUserMe(_options?: Configuration): Promise<any> {
        const result = this.api.getUserMe(_options);
        return result.toPromise();
    }

    /**
     * Get your user data
     * Get own user
     */
    public getUserMe_4(_options?: Configuration): Promise<any> {
        const result = this.api.getUserMe_4(_options);
        return result.toPromise();
    }

    /**
     * Revoke your Git OAuth permission
     * Revoke OAuth
     * @param provider 
     */
    public revokeOauth(provider: string, _options?: Configuration): Promise<any> {
        const result = this.api.revokeOauth(provider, _options);
        return result.toPromise();
    }

    /**
     * Revoke your Git OAuth permission
     * Revoke OAuth
     * @param provider 
     */
    public revokeOauth_5(provider: string, _options?: Configuration): Promise<any> {
        const result = this.api.revokeOauth_5(provider, _options);
        return result.toPromise();
    }

    /**
     * Select your default payment method to charge every billing cycle
     * Update payment method
     * @param paymentMethodId 
     */
    public updatePaymentMethod(paymentMethodId: string, _options?: Configuration): Promise<any> {
        const result = this.api.updatePaymentMethod(paymentMethodId, _options);
        return result.toPromise();
    }

    /**
     * Select your default payment method to charge every billing cycle
     * Update payment method
     * @param paymentMethodId 
     */
    public updatePaymentMethod_6(paymentMethodId: string, _options?: Configuration): Promise<any> {
        const result = this.api.updatePaymentMethod_6(paymentMethodId, _options);
        return result.toPromise();
    }

    /**
     * Update your user data
     * Update user
     * @param UNKNOWN_BASE_TYPE 
     */
    public updateUser(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<any> {
        const result = this.api.updateUser(UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }

    /**
     * Update your user data
     * Update user
     * @param UNKNOWN_BASE_TYPE 
     */
    public updateUser_7(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<any> {
        const result = this.api.updateUser_7(UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }


}



import { ObservableMigrationApi } from './ObservableAPI';

import { MigrationApiRequestFactory, MigrationApiResponseProcessor} from "../apis/MigrationApi";
export class PromiseMigrationApi {
    private api: ObservableMigrationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MigrationApiRequestFactory,
        responseProcessor?: MigrationApiResponseProcessor
    ) {
        this.api = new ObservableMigrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request a new site migration by providing your old host's domain and your site's login details
     * Create a migration
     * @param currentUrl 
     * @param wordpressPassword 
     * @param wordpressUser 
     * @param extra 
     * @param ftpAddress 
     * @param ftpPassword 
     * @param ftpUser 
     * @param host 
     * @param hostPassword 
     * @param hostUser 
     * @param migrationType 
     * @param zipFile 
     * @param zipFileName 
     */
    public createMigration(currentUrl: string, wordpressPassword: string, wordpressUser: string, extra?: string, ftpAddress?: string, ftpPassword?: string, ftpUser?: string, host?: string, hostPassword?: string, hostUser?: string, migrationType?: string, zipFile?: HttpFile, zipFileName?: string, _options?: Configuration): Promise<Migration> {
        const result = this.api.createMigration(currentUrl, wordpressPassword, wordpressUser, extra, ftpAddress, ftpPassword, ftpUser, host, hostPassword, hostUser, migrationType, zipFile, zipFileName, _options);
        return result.toPromise();
    }

    /**
     * Delete Migration
     * @param migrationId 
     */
    public deleteMigration(migrationId: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteMigration(migrationId, _options);
        return result.toPromise();
    }

    /**
     * Get Migrations
     */
    public getMigrations(_options?: Configuration): Promise<Array<Migration>> {
        const result = this.api.getMigrations(_options);
        return result.toPromise();
    }


}



import { ObservablePlanApi } from './ObservableAPI';

import { PlanApiRequestFactory, PlanApiResponseProcessor} from "../apis/PlanApi";
export class PromisePlanApi {
    private api: ObservablePlanApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlanApiRequestFactory,
        responseProcessor?: PlanApiResponseProcessor
    ) {
        this.api = new ObservablePlanApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel your plan, which will delete it at the end of your cycle
     * Cancel Plan
     * @param planId 
     */
    public cancelPlan(planId: string, _options?: Configuration): Promise<any> {
        const result = this.api.cancelPlan(planId, _options);
        return result.toPromise();
    }

    /**
     * Buy a new plan/team
     * Create a Plan
     * @param UNKNOWN_BASE_TYPE 
     */
    public createPlan(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<Plan> {
        const result = this.api.createPlan(UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }

    /**
     * Get a plan by its UUID
     * Get Plan
     * @param planId 
     */
    public getPlan(planId: string, _options?: Configuration): Promise<Plan> {
        const result = this.api.getPlan(planId, _options);
        return result.toPromise();
    }

    /**
     * Get all your active plans
     * Get Plans
     */
    public getPlans(_options?: Configuration): Promise<Array<Plan>> {
        const result = this.api.getPlans(_options);
        return result.toPromise();
    }

    /**
     * Preview the proration change before you upgrade or downgrade your plan
     * Preview Plan
     * @param planId 
     * @param newPlanTypeName 
     * @param additionalSites 
     */
    public previewChange(planId: string, newPlanTypeName: string, additionalSites: number, _options?: Configuration): Promise<any> {
        const result = this.api.previewChange(planId, newPlanTypeName, additionalSites, _options);
        return result.toPromise();
    }

    /**
     * Uncancel your cancelled plan
     * Uncancel Plan
     * @param planId 
     */
    public uncancelPlan(planId: string, _options?: Configuration): Promise<any> {
        const result = this.api.uncancelPlan(planId, _options);
        return result.toPromise();
    }

    /**
     * Upgrade or downgrade your plan
     * Update a Plan
     * @param planId 
     * @param planUpdate 
     */
    public updatePlan(planId: string, planUpdate: PlanUpdate, _options?: Configuration): Promise<Plan> {
        const result = this.api.updatePlan(planId, planUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableRegionApi } from './ObservableAPI';

import { RegionApiRequestFactory, RegionApiResponseProcessor} from "../apis/RegionApi";
export class PromiseRegionApi {
    private api: ObservableRegionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionApiRequestFactory,
        responseProcessor?: RegionApiResponseProcessor
    ) {
        this.api = new ObservableRegionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details of a region by its ID
     * Get a Region
     * @param regionId 
     */
    public getRegion(regionId: number, _options?: Configuration): Promise<Region> {
        const result = this.api.getRegion(regionId, _options);
        return result.toPromise();
    }

    /**
     * Get details of all regions
     * Get Regions
     */
    public getRegions(_options?: Configuration): Promise<Array<Region>> {
        const result = this.api.getRegions(_options);
        return result.toPromise();
    }


}



import { ObservableSiteLiveApi } from './ObservableAPI';

import { SiteLiveApiRequestFactory, SiteLiveApiResponseProcessor} from "../apis/SiteLiveApi";
export class PromiseSiteLiveApi {
    private api: ObservableSiteLiveApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SiteLiveApiRequestFactory,
        responseProcessor?: SiteLiveApiResponseProcessor
    ) {
        this.api = new ObservableSiteLiveApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Automatically add the DNS records to your Nameserver configured site
     * Create Email DNS records
     * @param fqdn 
     */
    public addMailDns(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.addMailDns(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Automatically add the DNS records to your Nameserver configured site
     * Create Email DNS records
     * @param fqdn 
     */
    public addMailDns_1(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.addMailDns_1(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Enable or disable HTTP Basic Authentication
     * Change HTTP Auth
     * @param fqdn 
     * @param value 
     */
    public changeDevMode(fqdn: string, value: string, _options?: Configuration): Promise<any> {
        const result = this.api.changeDevMode(fqdn, value, _options);
        return result.toPromise();
    }

    /**
     * Enable or disable HTTP Basic Authentication
     * Change HTTP Auth
     * @param fqdn 
     * @param value 
     */
    public changeDevMode_2(fqdn: string, value: string, _options?: Configuration): Promise<any> {
        const result = this.api.changeDevMode_2(fqdn, value, _options);
        return result.toPromise();
    }

    /**
     * Purges the Cloudflare CDN cache for your site
     * Clear the cache
     * @param fqdn 
     */
    public clearCache(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.clearCache(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Purges the Cloudflare CDN cache for your site
     * Clear the cache
     * @param fqdn 
     */
    public clearCache_3(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.clearCache_3(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Sync the wp-content and database from your staging site to your live site
     * Commit Stage Site
     * @param fqdn 
     */
    public commitSiteStage(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.commitSiteStage(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Sync the wp-content and database from your staging site to your live site
     * Commit Stage Site
     * @param fqdn 
     */
    public commitSiteStage_4(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.commitSiteStage_4(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Create a custom email account
     * Create Email
     * @param fqdn 
     * @param userEmailCreate 
     */
    public createEmail(fqdn: string, userEmailCreate?: UserEmailCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createEmail(fqdn, userEmailCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a custom email account
     * Create Email
     * @param fqdn 
     * @param userEmailCreate 
     */
    public createEmail_5(fqdn: string, userEmailCreate?: UserEmailCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createEmail_5(fqdn, userEmailCreate, _options);
        return result.toPromise();
    }

    /**
     * Connect an external URL to your site on a subpath
     * Create External Path
     * @param fqdn 
     * @param externalPathCreate 
     */
    public createExternalPath(fqdn: string, externalPathCreate?: ExternalPathCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createExternalPath(fqdn, externalPathCreate, _options);
        return result.toPromise();
    }

    /**
     * Connect an external URL to your site on a subpath
     * Create External Path
     * @param fqdn 
     * @param externalPathCreate 
     */
    public createExternalPath_6(fqdn: string, externalPathCreate?: ExternalPathCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createExternalPath_6(fqdn, externalPathCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a new site by providing your domain and your site's WordPress details
     * Create a site
     * @param UNKNOWN_BASE_TYPE 
     */
    public createSiteLive(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<SiteLive> {
        const result = this.api.createSiteLive(UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }

    /**
     * Create a new site by providing your domain and your site's WordPress details
     * Create a site
     * @param UNKNOWN_BASE_TYPE 
     */
    public createSiteLive_7(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<SiteLive> {
        const result = this.api.createSiteLive_7(UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }

    /**
     * Create a staging site on which you can test changes
     * Create a Staging site
     * @param fqdn 
     * @param siteStageCreate 
     */
    public createSiteStage(fqdn: string, siteStageCreate?: SiteStageCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createSiteStage(fqdn, siteStageCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a staging site on which you can test changes
     * Create a Staging site
     * @param fqdn 
     * @param siteStageCreate 
     */
    public createSiteStage_8(fqdn: string, siteStageCreate?: SiteStageCreate, _options?: Configuration): Promise<any> {
        const result = this.api.createSiteStage_8(fqdn, siteStageCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a tag for organizational purposes for your site
     * Create tag
     * @param fqdn 
     * @param tagCreate 
     */
    public createTag(fqdn: string, tagCreate?: TagCreate, _options?: Configuration): Promise<Tag> {
        const result = this.api.createTag(fqdn, tagCreate, _options);
        return result.toPromise();
    }

    /**
     * Create a tag for organizational purposes for your site
     * Create tag
     * @param fqdn 
     * @param tagCreate 
     */
    public createTag_9(fqdn: string, tagCreate?: TagCreate, _options?: Configuration): Promise<Tag> {
        const result = this.api.createTag_9(fqdn, tagCreate, _options);
        return result.toPromise();
    }

    /**
     * Delete a DNS record on your Nameserver configured site
     * Delete DNS record
     * @param dnsId 
     * @param fqdn 
     */
    public deleteDnsRecord(dnsId: string, fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteDnsRecord(dnsId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * Delete a DNS record on your Nameserver configured site
     * Delete DNS record
     * @param dnsId 
     * @param fqdn 
     */
    public deleteDnsRecord_10(dnsId: string, fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteDnsRecord_10(dnsId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * Delete a custom email account
     * Delete Email
     * @param fqdn 
     * @param userEmailAddress 
     */
    public deleteEmail(fqdn: string, userEmailAddress: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteEmail(fqdn, userEmailAddress, _options);
        return result.toPromise();
    }

    /**
     * Delete a custom email account
     * Delete Email
     * @param fqdn 
     * @param userEmailAddress 
     */
    public deleteEmail_11(fqdn: string, userEmailAddress: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteEmail_11(fqdn, userEmailAddress, _options);
        return result.toPromise();
    }

    /**
     * Delete the link between an external URL and your site
     * Delete External Path
     * @param externalPathId 
     * @param fqdn 
     */
    public deleteExternalPath(externalPathId: string, fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteExternalPath(externalPathId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * Delete the link between an external URL and your site
     * Delete External Path
     * @param externalPathId 
     * @param fqdn 
     */
    public deleteExternalPath_12(externalPathId: string, fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteExternalPath_12(externalPathId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * This permanently deletes your site, and its stage site if one exists
     * Delete your live site
     * @param fqdn 
     */
    public deleteSiteLive(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteSiteLive(fqdn, _options);
        return result.toPromise();
    }

    /**
     * This permanently deletes your site, and its stage site if one exists
     * Delete your live site
     * @param fqdn 
     */
    public deleteSiteLive_13(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteSiteLive_13(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Delete your staging site
     * Delete Stage Site
     * @param fqdn 
     */
    public deleteSiteStage(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteSiteStage(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Delete your staging site
     * Delete Stage Site
     * @param fqdn 
     */
    public deleteSiteStage_14(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.deleteSiteStage_14(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get a tag by its ID
     * Get a tag
     * @param tagId 
     * @param fqdn 
     */
    public deleteTag(tagId: string, fqdn: string, _options?: Configuration): Promise<Array<Tag>> {
        const result = this.api.deleteTag(tagId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get a tag by its ID
     * Get a tag
     * @param tagId 
     * @param fqdn 
     */
    public deleteTag_15(tagId: string, fqdn: string, _options?: Configuration): Promise<Array<Tag>> {
        const result = this.api.deleteTag_15(tagId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * Disable wp-login firewall
     * Disable the firewall
     * @param fqdn 
     */
    public disableFirewall(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.disableFirewall(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Disable wp-login firewall
     * Disable the firewall
     * @param fqdn 
     */
    public disableFirewall_16(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.disableFirewall_16(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Enable the wp-login firewall
     * Enable the firewall
     * @param fqdn 
     */
    public enableFirewall(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.enableFirewall(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Enable the wp-login firewall
     * Enable the firewall
     * @param fqdn 
     */
    public enableFirewall_17(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.enableFirewall_17(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get a nameserver configured site's DNS records
     * Get DNS records
     * @param fqdn 
     */
    public getDnsRecords(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getDnsRecords(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get a nameserver configured site's DNS records
     * Get DNS records
     * @param fqdn 
     */
    public getDnsRecords_18(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getDnsRecords_18(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get all custom email accounts
     * Get Emails
     * @param fqdn 
     */
    public getEmails(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getEmails(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get all custom email accounts
     * Get Emails
     * @param fqdn 
     */
    public getEmails_19(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getEmails_19(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get details about your site's external path configs
     * Get External Paths
     * @param fqdn 
     */
    public getExternalPaths(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getExternalPaths(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get details about your site's external path configs
     * Get External Paths
     * @param fqdn 
     */
    public getExternalPaths_20(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getExternalPaths_20(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get a list of wp-content files at a point in time
     * PIT Files
     * @param fqdn 
     * @param restorePoint 
     */
    public getFilesAtPoint(fqdn: string, restorePoint: Date, _options?: Configuration): Promise<any> {
        const result = this.api.getFilesAtPoint(fqdn, restorePoint, _options);
        return result.toPromise();
    }

    /**
     * Get a list of wp-content files at a point in time
     * PIT Files
     * @param fqdn 
     * @param restorePoint 
     */
    public getFilesAtPoint_21(fqdn: string, restorePoint: Date, _options?: Configuration): Promise<any> {
        const result = this.api.getFilesAtPoint_21(fqdn, restorePoint, _options);
        return result.toPromise();
    }

    /**
     * Get the required records for our custom email service
     * Get Required mail DNS records
     * @param fqdn 
     */
    public getMailDns(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getMailDns(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get the required records for our custom email service
     * Get Required mail DNS records
     * @param fqdn 
     */
    public getMailDns_22(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getMailDns_22(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get the results of a site's restore to a previous point in time
     * Get PIT Restore
     * @param pitRestoreId 
     * @param fqdn 
     */
    public getPitRestore(pitRestoreId: string, fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getPitRestore(pitRestoreId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get the results of a site's restore to a previous point in time
     * Get PIT Restore
     * @param pitRestoreId 
     * @param fqdn 
     */
    public getPitRestore_23(pitRestoreId: string, fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getPitRestore_23(pitRestoreId, fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get all the results of a site's restores to a previous point in time
     * Get PIT Restores
     * @param fqdn 
     */
    public getPitRestores(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getPitRestores(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get all the results of a site's restores to a previous point in time
     * Get PIT Restores
     * @param fqdn 
     */
    public getPitRestores_24(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.getPitRestores_24(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get details about your live site
     * Get your live site
     * @param fqdn 
     */
    public getSiteLive(fqdn: string, _options?: Configuration): Promise<SiteLive> {
        const result = this.api.getSiteLive(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get details about your live site
     * Get your live site
     * @param fqdn 
     */
    public getSiteLive_25(fqdn: string, _options?: Configuration): Promise<SiteLive> {
        const result = this.api.getSiteLive_25(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get your visits and storage for a site at a given interval
     * Get Site Plan Usage
     * @param fqdn 
     * @param start 
     * @param end 
     */
    public getSitePlanUsage(fqdn: string, start: Date, end: Date, _options?: Configuration): Promise<any> {
        const result = this.api.getSitePlanUsage(fqdn, start, end, _options);
        return result.toPromise();
    }

    /**
     * Get your visits and storage for a site at a given interval
     * Get Site Plan Usage
     * @param fqdn 
     * @param start 
     * @param end 
     */
    public getSitePlanUsage_26(fqdn: string, start: Date, end: Date, _options?: Configuration): Promise<any> {
        const result = this.api.getSitePlanUsage_26(fqdn, start, end, _options);
        return result.toPromise();
    }

    /**
     * Get details about all of your live sites
     * Get your sites
     */
    public getSitesLive(_options?: Configuration): Promise<Array<SiteLive>> {
        const result = this.api.getSitesLive(_options);
        return result.toPromise();
    }

    /**
     * Get details about all of your live sites
     * Get your sites
     */
    public getSitesLive_27(_options?: Configuration): Promise<Array<SiteLive>> {
        const result = this.api.getSitesLive_27(_options);
        return result.toPromise();
    }

    /**
     * Get all the tags for your site
     * Get tags
     * @param fqdn 
     */
    public getTags(fqdn: string, _options?: Configuration): Promise<Array<Tag>> {
        const result = this.api.getTags(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Get all the tags for your site
     * Get tags
     * @param fqdn 
     */
    public getTags_28(fqdn: string, _options?: Configuration): Promise<Array<Tag>> {
        const result = this.api.getTags_28(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Add/Delete an IP from the wp-login firewall
     * Modify the firewall
     * @param fqdn 
     * @param ipAddress 
     * @param addOrDel 
     */
    public modifyFirewall(fqdn: string, ipAddress: string, addOrDel?: string, _options?: Configuration): Promise<any> {
        const result = this.api.modifyFirewall(fqdn, ipAddress, addOrDel, _options);
        return result.toPromise();
    }

    /**
     * Add/Delete an IP from the wp-login firewall
     * Modify the firewall
     * @param fqdn 
     * @param ipAddress 
     * @param addOrDel 
     */
    public modifyFirewall_29(fqdn: string, ipAddress: string, addOrDel?: string, _options?: Configuration): Promise<any> {
        const result = this.api.modifyFirewall_29(fqdn, ipAddress, addOrDel, _options);
        return result.toPromise();
    }

    /**
     * Restore your site to a previous point in time, down to the minute
     * Create PIT Restore
     * @param fqdn 
     * @param pITRestoreCreate 
     */
    public restoreSite(fqdn: string, pITRestoreCreate: PITRestoreCreate, _options?: Configuration): Promise<any> {
        const result = this.api.restoreSite(fqdn, pITRestoreCreate, _options);
        return result.toPromise();
    }

    /**
     * Restore your site to a previous point in time, down to the minute
     * Create PIT Restore
     * @param fqdn 
     * @param pITRestoreCreate 
     */
    public restoreSite_30(fqdn: string, pITRestoreCreate: PITRestoreCreate, _options?: Configuration): Promise<any> {
        const result = this.api.restoreSite_30(fqdn, pITRestoreCreate, _options);
        return result.toPromise();
    }

    /**
     * Send a bash shell command to your site, such as a WP-CLI command
     * Execute shell command
     * @param fqdn 
     * @param cmd 
     * @param cwd 
     * @param autoTrackDir 
     * @param stage 
     */
    public shellCmdSiteLive(fqdn: string, cmd: string, cwd?: string, autoTrackDir?: boolean, stage?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.shellCmdSiteLive(fqdn, cmd, cwd, autoTrackDir, stage, _options);
        return result.toPromise();
    }

    /**
     * Send a bash shell command to your site, such as a WP-CLI command
     * Execute shell command
     * @param fqdn 
     * @param cmd 
     * @param cwd 
     * @param autoTrackDir 
     * @param stage 
     */
    public shellCmdSiteLive_31(fqdn: string, cmd: string, cwd?: string, autoTrackDir?: boolean, stage?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.shellCmdSiteLive_31(fqdn, cmd, cwd, autoTrackDir, stage, _options);
        return result.toPromise();
    }

    /**
     * Update a DNS record on your Nameserver configured site
     * Update DNS record
     * @param fqdn 
     * @param dnsType 
     * @param dnsHostname 
     * @param dnsContent 
     * @param dnsId 
     * @param dnsPriority 
     * @param dnsTtl 
     */
    public updateDnsRecord(fqdn: string, dnsType: string, dnsHostname: string, dnsContent: string, dnsId?: string, dnsPriority?: number, dnsTtl?: number, _options?: Configuration): Promise<any> {
        const result = this.api.updateDnsRecord(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl, _options);
        return result.toPromise();
    }

    /**
     * Update a DNS record on your Nameserver configured site
     * Update DNS record
     * @param fqdn 
     * @param dnsType 
     * @param dnsHostname 
     * @param dnsContent 
     * @param dnsId 
     * @param dnsPriority 
     * @param dnsTtl 
     */
    public updateDnsRecord_32(fqdn: string, dnsType: string, dnsHostname: string, dnsContent: string, dnsId?: string, dnsPriority?: number, dnsTtl?: number, _options?: Configuration): Promise<any> {
        const result = this.api.updateDnsRecord_32(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl, _options);
        return result.toPromise();
    }

    /**
     * Update a custom email account
     * Update Email
     * @param userEmailAddress 
     * @param fqdn 
     * @param userEmailUpdate 
     */
    public updateEmail(userEmailAddress: string, fqdn: string, userEmailUpdate?: UserEmailUpdate, _options?: Configuration): Promise<any> {
        const result = this.api.updateEmail(userEmailAddress, fqdn, userEmailUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update a custom email account
     * Update Email
     * @param userEmailAddress 
     * @param fqdn 
     * @param userEmailUpdate 
     */
    public updateEmail_33(userEmailAddress: string, fqdn: string, userEmailUpdate?: UserEmailUpdate, _options?: Configuration): Promise<any> {
        const result = this.api.updateEmail_33(userEmailAddress, fqdn, userEmailUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update a site's details
     * Update a site
     * @param fqdn 
     * @param siteLiveUpdate 
     */
    public updateSiteLive(fqdn: string, siteLiveUpdate: SiteLiveUpdate, _options?: Configuration): Promise<SiteLive> {
        const result = this.api.updateSiteLive(fqdn, siteLiveUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update a site's details
     * Update a site
     * @param fqdn 
     * @param siteLiveUpdate 
     */
    public updateSiteLive_34(fqdn: string, siteLiveUpdate: SiteLiveUpdate, _options?: Configuration): Promise<SiteLive> {
        const result = this.api.updateSiteLive_34(fqdn, siteLiveUpdate, _options);
        return result.toPromise();
    }

    /**
     * Check if your mail related DNS records are set up correctly
     * MX Validation
     * @param fqdn 
     */
    public validateMxRecords(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.validateMxRecords(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Check if your mail related DNS records are set up correctly
     * MX Validation
     * @param fqdn 
     */
    public validateMxRecords_35(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.validateMxRecords_35(fqdn, _options);
        return result.toPromise();
    }


}



import { ObservableTeamApi } from './ObservableAPI';

import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";
export class PromiseTeamApi {
    private api: ObservableTeamApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamApiRequestFactory,
        responseProcessor?: TeamApiResponseProcessor
    ) {
        this.api = new ObservableTeamApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details about an owned team team by its ID
     * Get a team
     * @param teamId 
     */
    public getTeam(teamId: string, _options?: Configuration): Promise<Team> {
        const result = this.api.getTeam(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get a Team Member by their UUID
     * Get Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public getTeamMember(teamMemberId: string, teamId: string, _options?: Configuration): Promise<TeamMember> {
        const result = this.api.getTeamMember(teamMemberId, teamId, _options);
        return result.toPromise();
    }

    /**
     * Get a Team Member by their UUID
     * Get Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public getTeamMember_1(teamMemberId: string, teamId: string, _options?: Configuration): Promise<TeamMember> {
        const result = this.api.getTeamMember_1(teamMemberId, teamId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Team Members
     * Get a team's members
     * @param teamId 
     */
    public getTeamMembers(teamId: string, _options?: Configuration): Promise<Array<TeamMember>> {
        const result = this.api.getTeamMembers(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of Team Members
     * Get a team's members
     * @param teamId 
     */
    public getTeamMembers_2(teamId: string, _options?: Configuration): Promise<Array<TeamMember>> {
        const result = this.api.getTeamMembers_2(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get details about an owned team team by its ID
     * Get a team
     * @param teamId 
     */
    public getTeam_3(teamId: string, _options?: Configuration): Promise<Team> {
        const result = this.api.getTeam_3(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get details about all of your owned teams
     * Get your owned teams
     */
    public getTeams(_options?: Configuration): Promise<Array<Team>> {
        const result = this.api.getTeams(_options);
        return result.toPromise();
    }

    /**
     * Get details about all of your owned teams
     * Get your owned teams
     */
    public getTeams_4(_options?: Configuration): Promise<Array<Team>> {
        const result = this.api.getTeams_4(_options);
        return result.toPromise();
    }

    /**
     * Remove a team member
     * Remove Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public removeTeamMember(teamMemberId: string, teamId: string, _options?: Configuration): Promise<any> {
        const result = this.api.removeTeamMember(teamMemberId, teamId, _options);
        return result.toPromise();
    }

    /**
     * Remove a team member
     * Remove Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public removeTeamMember_5(teamMemberId: string, teamId: string, _options?: Configuration): Promise<any> {
        const result = this.api.removeTeamMember_5(teamMemberId, teamId, _options);
        return result.toPromise();
    }

    /**
     * Adjust your team's settings
     * Update a Team
     * @param teamId 
     * @param teamUpdate 
     */
    public updateTeam(teamId: string, teamUpdate: TeamUpdate, _options?: Configuration): Promise<Team> {
        const result = this.api.updateTeam(teamId, teamUpdate, _options);
        return result.toPromise();
    }

    /**
     * Adjust your team's settings
     * Update a Team
     * @param teamId 
     * @param teamUpdate 
     */
    public updateTeam_6(teamId: string, teamUpdate: TeamUpdate, _options?: Configuration): Promise<Team> {
        const result = this.api.updateTeam_6(teamId, teamUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableTemplateApi } from './ObservableAPI';

import { TemplateApiRequestFactory, TemplateApiResponseProcessor} from "../apis/TemplateApi";
export class PromiseTemplateApi {
    private api: ObservableTemplateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplateApiRequestFactory,
        responseProcessor?: TemplateApiResponseProcessor
    ) {
        this.api = new ObservableTemplateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details of a ready-made template sites by its name
     * Get Templates
     * @param templateName 
     */
    public getTemplate(templateName: string, _options?: Configuration): Promise<Template> {
        const result = this.api.getTemplate(templateName, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of ready-made template sites
     * Get Templates
     */
    public getTemplates(_options?: Configuration): Promise<Array<Template>> {
        const result = this.api.getTemplates(_options);
        return result.toPromise();
    }

    /**
     * Create a new template by uploading a wpress file
     * Create Template
     * @param templateCreate 
     */
    public submitTemplate(templateCreate?: TemplateCreate, _options?: Configuration): Promise<Template> {
        const result = this.api.submitTemplate(templateCreate, _options);
        return result.toPromise();
    }


}



import { ObservableTicketApi } from './ObservableAPI';

import { TicketApiRequestFactory, TicketApiResponseProcessor} from "../apis/TicketApi";
export class PromiseTicketApi {
    private api: ObservableTicketApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TicketApiRequestFactory,
        responseProcessor?: TicketApiResponseProcessor
    ) {
        this.api = new ObservableTicketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a support ticket request
     * Create Ticket
     * @param UNKNOWN_BASE_TYPE 
     */
    public createTicket(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<Ticket> {
        const result = this.api.createTicket(UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }

    /**
     * Reply to a support ticket request
     * Create Ticket Reply
     * @param ticketId 
     * @param UNKNOWN_BASE_TYPE 
     */
    public createTicketReply(ticketId: number, UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Promise<TicketReply> {
        const result = this.api.createTicketReply(ticketId, UNKNOWN_BASE_TYPE, _options);
        return result.toPromise();
    }

    /**
     * Delete a support ticket request by its ID
     * Delete Ticket
     * @param ticketId 
     */
    public deleteTicket(ticketId: number, _options?: Configuration): Promise<any> {
        const result = this.api.deleteTicket(ticketId, _options);
        return result.toPromise();
    }

    /**
     * Get a support ticket request by its ID
     * Get Ticket
     * @param ticketId 
     */
    public getTicket(ticketId: number, _options?: Configuration): Promise<Ticket> {
        const result = this.api.getTicket(ticketId, _options);
        return result.toPromise();
    }

    /**
     * Get Tickets
     */
    public getTickets(_options?: Configuration): Promise<Array<Ticket>> {
        const result = this.api.getTickets(_options);
        return result.toPromise();
    }

    /**
     * Update a support ticket request
     * Update Ticket
     * @param ticketId 
     * @param ticketUpdate 
     */
    public updateTicket(ticketId: number, ticketUpdate: TicketUpdate, _options?: Configuration): Promise<Ticket> {
        const result = this.api.updateTicket(ticketId, ticketUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableUtilsApi } from './ObservableAPI';

import { UtilsApiRequestFactory, UtilsApiResponseProcessor} from "../apis/UtilsApi";
export class PromiseUtilsApi {
    private api: ObservableUtilsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UtilsApiRequestFactory,
        responseProcessor?: UtilsApiResponseProcessor
    ) {
        this.api = new ObservableUtilsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns success if a given FQDN's DNS records are correctly set up
     * Domain check
     * @param fqdn 
     */
    public domainCheck(fqdn: string, _options?: Configuration): Promise<any> {
        const result = this.api.domainCheck(fqdn, _options);
        return result.toPromise();
    }

    /**
     * Returns success Git Repo's root folder is correctly set up
     * Verify Git Sync Directories
     * @param gitUrl 
     * @param gitBranch 
     */
    public verifyGitSyncDirectories(gitUrl: string, gitBranch?: string, _options?: Configuration): Promise<any> {
        const result = this.api.verifyGitSyncDirectories(gitUrl, gitBranch, _options);
        return result.toPromise();
    }


}



