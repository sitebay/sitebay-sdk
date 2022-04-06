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

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiDeletePaymentMethodRequest {
    /**
     * 
     * @type string
     * @memberof AccountApideletePaymentMethod
     */
    paymentMethodId: string
}

export interface AccountApiDeletePaymentMethod0Request {
    /**
     * 
     * @type string
     * @memberof AccountApideletePaymentMethod_1
     */
    paymentMethodId: string
}

export interface AccountApiGetPaymentMethodsRequest {
}

export interface AccountApiGetPaymentMethods0Request {
}

export interface AccountApiGetTaxRequest {
}

export interface AccountApiGetTax0Request {
}

export interface AccountApiGetUserMeRequest {
}

export interface AccountApiGetUserMe0Request {
}

export interface AccountApiRevokeOauthRequest {
    /**
     * 
     * @type string
     * @memberof AccountApirevokeOauth
     */
    provider: string
}

export interface AccountApiRevokeOauth0Request {
    /**
     * 
     * @type string
     * @memberof AccountApirevokeOauth_5
     */
    provider: string
}

export interface AccountApiUpdatePaymentMethodRequest {
    /**
     * 
     * @type string
     * @memberof AccountApiupdatePaymentMethod
     */
    paymentMethodId: string
}

export interface AccountApiUpdatePaymentMethod0Request {
    /**
     * 
     * @type string
     * @memberof AccountApiupdatePaymentMethod_6
     */
    paymentMethodId: string
}

export interface AccountApiUpdateUserRequest {
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof AccountApiupdateUser
     */
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE
}

export interface AccountApiUpdateUser0Request {
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof AccountApiupdateUser_7
     */
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a non-default payment method
     * Delete payment method
     * @param param the request object
     */
    public deletePaymentMethod(param: AccountApiDeletePaymentMethodRequest, options?: Configuration): Promise<any> {
        return this.api.deletePaymentMethod(param.paymentMethodId,  options).toPromise();
    }

    /**
     * Delete a non-default payment method
     * Delete payment method
     * @param param the request object
     */
    public deletePaymentMethod_1(param: AccountApiDeletePaymentMethod0Request, options?: Configuration): Promise<any> {
        return this.api.deletePaymentMethod_1(param.paymentMethodId,  options).toPromise();
    }

    /**
     * Get your payment methods
     * Get payment methods
     * @param param the request object
     */
    public getPaymentMethods(param: AccountApiGetPaymentMethodsRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getPaymentMethods( options).toPromise();
    }

    /**
     * Get your payment methods
     * Get payment methods
     * @param param the request object
     */
    public getPaymentMethods_2(param: AccountApiGetPaymentMethods0Request = {}, options?: Configuration): Promise<any> {
        return this.api.getPaymentMethods_2( options).toPromise();
    }

    /**
     * Get your default card's sales tax percentage
     * Get tax
     * @param param the request object
     */
    public getTax(param: AccountApiGetTaxRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getTax( options).toPromise();
    }

    /**
     * Get your default card's sales tax percentage
     * Get tax
     * @param param the request object
     */
    public getTax_3(param: AccountApiGetTax0Request = {}, options?: Configuration): Promise<any> {
        return this.api.getTax_3( options).toPromise();
    }

    /**
     * Get your user data
     * Get own user
     * @param param the request object
     */
    public getUserMe(param: AccountApiGetUserMeRequest = {}, options?: Configuration): Promise<any> {
        return this.api.getUserMe( options).toPromise();
    }

    /**
     * Get your user data
     * Get own user
     * @param param the request object
     */
    public getUserMe_4(param: AccountApiGetUserMe0Request = {}, options?: Configuration): Promise<any> {
        return this.api.getUserMe_4( options).toPromise();
    }

    /**
     * Revoke your Git OAuth permission
     * Revoke OAuth
     * @param param the request object
     */
    public revokeOauth(param: AccountApiRevokeOauthRequest, options?: Configuration): Promise<any> {
        return this.api.revokeOauth(param.provider,  options).toPromise();
    }

    /**
     * Revoke your Git OAuth permission
     * Revoke OAuth
     * @param param the request object
     */
    public revokeOauth_5(param: AccountApiRevokeOauth0Request, options?: Configuration): Promise<any> {
        return this.api.revokeOauth_5(param.provider,  options).toPromise();
    }

    /**
     * Select your default payment method to charge every billing cycle
     * Update payment method
     * @param param the request object
     */
    public updatePaymentMethod(param: AccountApiUpdatePaymentMethodRequest, options?: Configuration): Promise<any> {
        return this.api.updatePaymentMethod(param.paymentMethodId,  options).toPromise();
    }

    /**
     * Select your default payment method to charge every billing cycle
     * Update payment method
     * @param param the request object
     */
    public updatePaymentMethod_6(param: AccountApiUpdatePaymentMethod0Request, options?: Configuration): Promise<any> {
        return this.api.updatePaymentMethod_6(param.paymentMethodId,  options).toPromise();
    }

    /**
     * Update your user data
     * Update user
     * @param param the request object
     */
    public updateUser(param: AccountApiUpdateUserRequest = {}, options?: Configuration): Promise<any> {
        return this.api.updateUser(param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

    /**
     * Update your user data
     * Update user
     * @param param the request object
     */
    public updateUser_7(param: AccountApiUpdateUser0Request = {}, options?: Configuration): Promise<any> {
        return this.api.updateUser_7(param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

}

import { ObservableMigrationApi } from "./ObservableAPI";
import { MigrationApiRequestFactory, MigrationApiResponseProcessor} from "../apis/MigrationApi";

export interface MigrationApiCreateMigrationRequest {
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    currentUrl: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    wordpressPassword: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    wordpressUser: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    extra?: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    ftpAddress?: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    ftpPassword?: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    ftpUser?: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    host?: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    hostPassword?: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    hostUser?: string
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    migrationType?: string
    /**
     * 
     * @type HttpFile
     * @memberof MigrationApicreateMigration
     */
    zipFile?: HttpFile
    /**
     * 
     * @type string
     * @memberof MigrationApicreateMigration
     */
    zipFileName?: string
}

export interface MigrationApiDeleteMigrationRequest {
    /**
     * 
     * @type number
     * @memberof MigrationApideleteMigration
     */
    migrationId: number
}

export interface MigrationApiGetMigrationsRequest {
}

export class ObjectMigrationApi {
    private api: ObservableMigrationApi

    public constructor(configuration: Configuration, requestFactory?: MigrationApiRequestFactory, responseProcessor?: MigrationApiResponseProcessor) {
        this.api = new ObservableMigrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Request a new site migration by providing your old host's domain and your site's login details
     * Create a migration
     * @param param the request object
     */
    public createMigration(param: MigrationApiCreateMigrationRequest, options?: Configuration): Promise<Migration> {
        return this.api.createMigration(param.currentUrl, param.wordpressPassword, param.wordpressUser, param.extra, param.ftpAddress, param.ftpPassword, param.ftpUser, param.host, param.hostPassword, param.hostUser, param.migrationType, param.zipFile, param.zipFileName,  options).toPromise();
    }

    /**
     * Delete Migration
     * @param param the request object
     */
    public deleteMigration(param: MigrationApiDeleteMigrationRequest, options?: Configuration): Promise<any> {
        return this.api.deleteMigration(param.migrationId,  options).toPromise();
    }

    /**
     * Get Migrations
     * @param param the request object
     */
    public getMigrations(param: MigrationApiGetMigrationsRequest = {}, options?: Configuration): Promise<Array<Migration>> {
        return this.api.getMigrations( options).toPromise();
    }

}

import { ObservablePlanApi } from "./ObservableAPI";
import { PlanApiRequestFactory, PlanApiResponseProcessor} from "../apis/PlanApi";

export interface PlanApiCancelPlanRequest {
    /**
     * 
     * @type string
     * @memberof PlanApicancelPlan
     */
    planId: string
}

export interface PlanApiCreatePlanRequest {
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof PlanApicreatePlan
     */
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE
}

export interface PlanApiGetPlanRequest {
    /**
     * 
     * @type string
     * @memberof PlanApigetPlan
     */
    planId: string
}

export interface PlanApiGetPlansRequest {
}

export interface PlanApiPreviewChangeRequest {
    /**
     * 
     * @type string
     * @memberof PlanApipreviewChange
     */
    planId: string
    /**
     * 
     * @type string
     * @memberof PlanApipreviewChange
     */
    newPlanTypeName: string
    /**
     * 
     * @type number
     * @memberof PlanApipreviewChange
     */
    additionalSites: number
}

export interface PlanApiUncancelPlanRequest {
    /**
     * 
     * @type string
     * @memberof PlanApiuncancelPlan
     */
    planId: string
}

export interface PlanApiUpdatePlanRequest {
    /**
     * 
     * @type string
     * @memberof PlanApiupdatePlan
     */
    planId: string
    /**
     * 
     * @type PlanUpdate
     * @memberof PlanApiupdatePlan
     */
    planUpdate: PlanUpdate
}

export class ObjectPlanApi {
    private api: ObservablePlanApi

    public constructor(configuration: Configuration, requestFactory?: PlanApiRequestFactory, responseProcessor?: PlanApiResponseProcessor) {
        this.api = new ObservablePlanApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel your plan, which will delete it at the end of your cycle
     * Cancel Plan
     * @param param the request object
     */
    public cancelPlan(param: PlanApiCancelPlanRequest, options?: Configuration): Promise<any> {
        return this.api.cancelPlan(param.planId,  options).toPromise();
    }

    /**
     * Buy a new plan/team
     * Create a Plan
     * @param param the request object
     */
    public createPlan(param: PlanApiCreatePlanRequest = {}, options?: Configuration): Promise<Plan> {
        return this.api.createPlan(param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

    /**
     * Get a plan by its UUID
     * Get Plan
     * @param param the request object
     */
    public getPlan(param: PlanApiGetPlanRequest, options?: Configuration): Promise<Plan> {
        return this.api.getPlan(param.planId,  options).toPromise();
    }

    /**
     * Get all your active plans
     * Get Plans
     * @param param the request object
     */
    public getPlans(param: PlanApiGetPlansRequest = {}, options?: Configuration): Promise<Array<Plan>> {
        return this.api.getPlans( options).toPromise();
    }

    /**
     * Preview the proration change before you upgrade or downgrade your plan
     * Preview Plan
     * @param param the request object
     */
    public previewChange(param: PlanApiPreviewChangeRequest, options?: Configuration): Promise<any> {
        return this.api.previewChange(param.planId, param.newPlanTypeName, param.additionalSites,  options).toPromise();
    }

    /**
     * Uncancel your cancelled plan
     * Uncancel Plan
     * @param param the request object
     */
    public uncancelPlan(param: PlanApiUncancelPlanRequest, options?: Configuration): Promise<any> {
        return this.api.uncancelPlan(param.planId,  options).toPromise();
    }

    /**
     * Upgrade or downgrade your plan
     * Update a Plan
     * @param param the request object
     */
    public updatePlan(param: PlanApiUpdatePlanRequest, options?: Configuration): Promise<Plan> {
        return this.api.updatePlan(param.planId, param.planUpdate,  options).toPromise();
    }

}

import { ObservableRegionApi } from "./ObservableAPI";
import { RegionApiRequestFactory, RegionApiResponseProcessor} from "../apis/RegionApi";

export interface RegionApiGetRegionRequest {
    /**
     * 
     * @type number
     * @memberof RegionApigetRegion
     */
    regionId: number
}

export interface RegionApiGetRegionsRequest {
}

export class ObjectRegionApi {
    private api: ObservableRegionApi

    public constructor(configuration: Configuration, requestFactory?: RegionApiRequestFactory, responseProcessor?: RegionApiResponseProcessor) {
        this.api = new ObservableRegionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details of a region by its ID
     * Get a Region
     * @param param the request object
     */
    public getRegion(param: RegionApiGetRegionRequest, options?: Configuration): Promise<Region> {
        return this.api.getRegion(param.regionId,  options).toPromise();
    }

    /**
     * Get details of all regions
     * Get Regions
     * @param param the request object
     */
    public getRegions(param: RegionApiGetRegionsRequest = {}, options?: Configuration): Promise<Array<Region>> {
        return this.api.getRegions( options).toPromise();
    }

}

import { ObservableSiteLiveApi } from "./ObservableAPI";
import { SiteLiveApiRequestFactory, SiteLiveApiResponseProcessor} from "../apis/SiteLiveApi";

export interface SiteLiveApiAddMailDnsRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiaddMailDns
     */
    fqdn: string
}

export interface SiteLiveApiAddMailDns0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiaddMailDns_1
     */
    fqdn: string
}

export interface SiteLiveApiChangeDevModeRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApichangeDevMode
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApichangeDevMode
     */
    value: string
}

export interface SiteLiveApiChangeDevMode0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApichangeDevMode_2
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApichangeDevMode_2
     */
    value: string
}

export interface SiteLiveApiClearCacheRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiclearCache
     */
    fqdn: string
}

export interface SiteLiveApiClearCache0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiclearCache_3
     */
    fqdn: string
}

export interface SiteLiveApiCommitSiteStageRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicommitSiteStage
     */
    fqdn: string
}

export interface SiteLiveApiCommitSiteStage0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicommitSiteStage_4
     */
    fqdn: string
}

export interface SiteLiveApiCreateEmailRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateEmail
     */
    fqdn: string
    /**
     * 
     * @type UserEmailCreate
     * @memberof SiteLiveApicreateEmail
     */
    userEmailCreate?: UserEmailCreate
}

export interface SiteLiveApiCreateEmail0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateEmail_5
     */
    fqdn: string
    /**
     * 
     * @type UserEmailCreate
     * @memberof SiteLiveApicreateEmail_5
     */
    userEmailCreate?: UserEmailCreate
}

export interface SiteLiveApiCreateExternalPathRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateExternalPath
     */
    fqdn: string
    /**
     * 
     * @type ExternalPathCreate
     * @memberof SiteLiveApicreateExternalPath
     */
    externalPathCreate?: ExternalPathCreate
}

export interface SiteLiveApiCreateExternalPath0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateExternalPath_6
     */
    fqdn: string
    /**
     * 
     * @type ExternalPathCreate
     * @memberof SiteLiveApicreateExternalPath_6
     */
    externalPathCreate?: ExternalPathCreate
}

export interface SiteLiveApiCreateSiteLiveRequest {
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof SiteLiveApicreateSiteLive
     */
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE
}

export interface SiteLiveApiCreateSiteLive0Request {
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof SiteLiveApicreateSiteLive_7
     */
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE
}

export interface SiteLiveApiCreateSiteStageRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateSiteStage
     */
    fqdn: string
    /**
     * 
     * @type SiteStageCreate
     * @memberof SiteLiveApicreateSiteStage
     */
    siteStageCreate?: SiteStageCreate
}

export interface SiteLiveApiCreateSiteStage0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateSiteStage_8
     */
    fqdn: string
    /**
     * 
     * @type SiteStageCreate
     * @memberof SiteLiveApicreateSiteStage_8
     */
    siteStageCreate?: SiteStageCreate
}

export interface SiteLiveApiCreateTagRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateTag
     */
    fqdn: string
    /**
     * 
     * @type TagCreate
     * @memberof SiteLiveApicreateTag
     */
    tagCreate?: TagCreate
}

export interface SiteLiveApiCreateTag0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApicreateTag_9
     */
    fqdn: string
    /**
     * 
     * @type TagCreate
     * @memberof SiteLiveApicreateTag_9
     */
    tagCreate?: TagCreate
}

export interface SiteLiveApiDeleteDnsRecordRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteDnsRecord
     */
    dnsId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteDnsRecord
     */
    fqdn: string
}

export interface SiteLiveApiDeleteDnsRecord0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteDnsRecord_10
     */
    dnsId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteDnsRecord_10
     */
    fqdn: string
}

export interface SiteLiveApiDeleteEmailRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteEmail
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteEmail
     */
    userEmailAddress: string
}

export interface SiteLiveApiDeleteEmail0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteEmail_11
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteEmail_11
     */
    userEmailAddress: string
}

export interface SiteLiveApiDeleteExternalPathRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteExternalPath
     */
    externalPathId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteExternalPath
     */
    fqdn: string
}

export interface SiteLiveApiDeleteExternalPath0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteExternalPath_12
     */
    externalPathId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteExternalPath_12
     */
    fqdn: string
}

export interface SiteLiveApiDeleteSiteLiveRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteSiteLive
     */
    fqdn: string
}

export interface SiteLiveApiDeleteSiteLive0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteSiteLive_13
     */
    fqdn: string
}

export interface SiteLiveApiDeleteSiteStageRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteSiteStage
     */
    fqdn: string
}

export interface SiteLiveApiDeleteSiteStage0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteSiteStage_14
     */
    fqdn: string
}

export interface SiteLiveApiDeleteTagRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteTag
     */
    tagId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteTag
     */
    fqdn: string
}

export interface SiteLiveApiDeleteTag0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteTag_15
     */
    tagId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApideleteTag_15
     */
    fqdn: string
}

export interface SiteLiveApiDisableFirewallRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApidisableFirewall
     */
    fqdn: string
}

export interface SiteLiveApiDisableFirewall0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApidisableFirewall_16
     */
    fqdn: string
}

export interface SiteLiveApiEnableFirewallRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApienableFirewall
     */
    fqdn: string
}

export interface SiteLiveApiEnableFirewall0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApienableFirewall_17
     */
    fqdn: string
}

export interface SiteLiveApiGetDnsRecordsRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetDnsRecords
     */
    fqdn: string
}

export interface SiteLiveApiGetDnsRecords0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetDnsRecords_18
     */
    fqdn: string
}

export interface SiteLiveApiGetEmailsRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetEmails
     */
    fqdn: string
}

export interface SiteLiveApiGetEmails0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetEmails_19
     */
    fqdn: string
}

export interface SiteLiveApiGetExternalPathsRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetExternalPaths
     */
    fqdn: string
}

export interface SiteLiveApiGetExternalPaths0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetExternalPaths_20
     */
    fqdn: string
}

export interface SiteLiveApiGetFilesAtPointRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetFilesAtPoint
     */
    fqdn: string
    /**
     * 
     * @type Date
     * @memberof SiteLiveApigetFilesAtPoint
     */
    restorePoint: Date
}

export interface SiteLiveApiGetFilesAtPoint0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetFilesAtPoint_21
     */
    fqdn: string
    /**
     * 
     * @type Date
     * @memberof SiteLiveApigetFilesAtPoint_21
     */
    restorePoint: Date
}

export interface SiteLiveApiGetMailDnsRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetMailDns
     */
    fqdn: string
}

export interface SiteLiveApiGetMailDns0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetMailDns_22
     */
    fqdn: string
}

export interface SiteLiveApiGetPitRestoreRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetPitRestore
     */
    pitRestoreId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetPitRestore
     */
    fqdn: string
}

export interface SiteLiveApiGetPitRestore0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetPitRestore_23
     */
    pitRestoreId: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetPitRestore_23
     */
    fqdn: string
}

export interface SiteLiveApiGetPitRestoresRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetPitRestores
     */
    fqdn: string
}

export interface SiteLiveApiGetPitRestores0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetPitRestores_24
     */
    fqdn: string
}

export interface SiteLiveApiGetSiteLiveRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetSiteLive
     */
    fqdn: string
}

export interface SiteLiveApiGetSiteLive0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetSiteLive_25
     */
    fqdn: string
}

export interface SiteLiveApiGetSitePlanUsageRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetSitePlanUsage
     */
    fqdn: string
    /**
     * 
     * @type Date
     * @memberof SiteLiveApigetSitePlanUsage
     */
    start: Date
    /**
     * 
     * @type Date
     * @memberof SiteLiveApigetSitePlanUsage
     */
    end: Date
}

export interface SiteLiveApiGetSitePlanUsage0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetSitePlanUsage_26
     */
    fqdn: string
    /**
     * 
     * @type Date
     * @memberof SiteLiveApigetSitePlanUsage_26
     */
    start: Date
    /**
     * 
     * @type Date
     * @memberof SiteLiveApigetSitePlanUsage_26
     */
    end: Date
}

export interface SiteLiveApiGetSitesLiveRequest {
}

export interface SiteLiveApiGetSitesLive0Request {
}

export interface SiteLiveApiGetTagsRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetTags
     */
    fqdn: string
}

export interface SiteLiveApiGetTags0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApigetTags_28
     */
    fqdn: string
}

export interface SiteLiveApiModifyFirewallRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApimodifyFirewall
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApimodifyFirewall
     */
    ipAddress: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApimodifyFirewall
     */
    addOrDel?: string
}

export interface SiteLiveApiModifyFirewall0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApimodifyFirewall_29
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApimodifyFirewall_29
     */
    ipAddress: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApimodifyFirewall_29
     */
    addOrDel?: string
}

export interface SiteLiveApiRestoreSiteRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApirestoreSite
     */
    fqdn: string
    /**
     * 
     * @type PITRestoreCreate
     * @memberof SiteLiveApirestoreSite
     */
    pITRestoreCreate: PITRestoreCreate
}

export interface SiteLiveApiRestoreSite0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApirestoreSite_30
     */
    fqdn: string
    /**
     * 
     * @type PITRestoreCreate
     * @memberof SiteLiveApirestoreSite_30
     */
    pITRestoreCreate: PITRestoreCreate
}

export interface SiteLiveApiShellCmdSiteLiveRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApishellCmdSiteLive
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApishellCmdSiteLive
     */
    cmd: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApishellCmdSiteLive
     */
    cwd?: string
    /**
     * 
     * @type boolean
     * @memberof SiteLiveApishellCmdSiteLive
     */
    autoTrackDir?: boolean
    /**
     * 
     * @type boolean
     * @memberof SiteLiveApishellCmdSiteLive
     */
    stage?: boolean
}

export interface SiteLiveApiShellCmdSiteLive0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApishellCmdSiteLive_31
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApishellCmdSiteLive_31
     */
    cmd: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApishellCmdSiteLive_31
     */
    cwd?: string
    /**
     * 
     * @type boolean
     * @memberof SiteLiveApishellCmdSiteLive_31
     */
    autoTrackDir?: boolean
    /**
     * 
     * @type boolean
     * @memberof SiteLiveApishellCmdSiteLive_31
     */
    stage?: boolean
}

export interface SiteLiveApiUpdateDnsRecordRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord
     */
    dnsType: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord
     */
    dnsHostname: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord
     */
    dnsContent: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord
     */
    dnsId?: string
    /**
     * 
     * @type number
     * @memberof SiteLiveApiupdateDnsRecord
     */
    dnsPriority?: number
    /**
     * 
     * @type number
     * @memberof SiteLiveApiupdateDnsRecord
     */
    dnsTtl?: number
}

export interface SiteLiveApiUpdateDnsRecord0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord_32
     */
    fqdn: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord_32
     */
    dnsType: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord_32
     */
    dnsHostname: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord_32
     */
    dnsContent: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateDnsRecord_32
     */
    dnsId?: string
    /**
     * 
     * @type number
     * @memberof SiteLiveApiupdateDnsRecord_32
     */
    dnsPriority?: number
    /**
     * 
     * @type number
     * @memberof SiteLiveApiupdateDnsRecord_32
     */
    dnsTtl?: number
}

export interface SiteLiveApiUpdateEmailRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateEmail
     */
    userEmailAddress: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateEmail
     */
    fqdn: string
    /**
     * 
     * @type UserEmailUpdate
     * @memberof SiteLiveApiupdateEmail
     */
    userEmailUpdate?: UserEmailUpdate
}

export interface SiteLiveApiUpdateEmail0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateEmail_33
     */
    userEmailAddress: string
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateEmail_33
     */
    fqdn: string
    /**
     * 
     * @type UserEmailUpdate
     * @memberof SiteLiveApiupdateEmail_33
     */
    userEmailUpdate?: UserEmailUpdate
}

export interface SiteLiveApiUpdateSiteLiveRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateSiteLive
     */
    fqdn: string
    /**
     * 
     * @type SiteLiveUpdate
     * @memberof SiteLiveApiupdateSiteLive
     */
    siteLiveUpdate: SiteLiveUpdate
}

export interface SiteLiveApiUpdateSiteLive0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApiupdateSiteLive_34
     */
    fqdn: string
    /**
     * 
     * @type SiteLiveUpdate
     * @memberof SiteLiveApiupdateSiteLive_34
     */
    siteLiveUpdate: SiteLiveUpdate
}

export interface SiteLiveApiValidateMxRecordsRequest {
    /**
     * 
     * @type string
     * @memberof SiteLiveApivalidateMxRecords
     */
    fqdn: string
}

export interface SiteLiveApiValidateMxRecords0Request {
    /**
     * 
     * @type string
     * @memberof SiteLiveApivalidateMxRecords_35
     */
    fqdn: string
}

export class ObjectSiteLiveApi {
    private api: ObservableSiteLiveApi

    public constructor(configuration: Configuration, requestFactory?: SiteLiveApiRequestFactory, responseProcessor?: SiteLiveApiResponseProcessor) {
        this.api = new ObservableSiteLiveApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Automatically add the DNS records to your Nameserver configured site
     * Create Email DNS records
     * @param param the request object
     */
    public addMailDns(param: SiteLiveApiAddMailDnsRequest, options?: Configuration): Promise<any> {
        return this.api.addMailDns(param.fqdn,  options).toPromise();
    }

    /**
     * Automatically add the DNS records to your Nameserver configured site
     * Create Email DNS records
     * @param param the request object
     */
    public addMailDns_1(param: SiteLiveApiAddMailDns0Request, options?: Configuration): Promise<any> {
        return this.api.addMailDns_1(param.fqdn,  options).toPromise();
    }

    /**
     * Enable or disable HTTP Basic Authentication
     * Change HTTP Auth
     * @param param the request object
     */
    public changeDevMode(param: SiteLiveApiChangeDevModeRequest, options?: Configuration): Promise<any> {
        return this.api.changeDevMode(param.fqdn, param.value,  options).toPromise();
    }

    /**
     * Enable or disable HTTP Basic Authentication
     * Change HTTP Auth
     * @param param the request object
     */
    public changeDevMode_2(param: SiteLiveApiChangeDevMode0Request, options?: Configuration): Promise<any> {
        return this.api.changeDevMode_2(param.fqdn, param.value,  options).toPromise();
    }

    /**
     * Purges the Cloudflare CDN cache for your site
     * Clear the cache
     * @param param the request object
     */
    public clearCache(param: SiteLiveApiClearCacheRequest, options?: Configuration): Promise<any> {
        return this.api.clearCache(param.fqdn,  options).toPromise();
    }

    /**
     * Purges the Cloudflare CDN cache for your site
     * Clear the cache
     * @param param the request object
     */
    public clearCache_3(param: SiteLiveApiClearCache0Request, options?: Configuration): Promise<any> {
        return this.api.clearCache_3(param.fqdn,  options).toPromise();
    }

    /**
     * Sync the wp-content and database from your staging site to your live site
     * Commit Stage Site
     * @param param the request object
     */
    public commitSiteStage(param: SiteLiveApiCommitSiteStageRequest, options?: Configuration): Promise<any> {
        return this.api.commitSiteStage(param.fqdn,  options).toPromise();
    }

    /**
     * Sync the wp-content and database from your staging site to your live site
     * Commit Stage Site
     * @param param the request object
     */
    public commitSiteStage_4(param: SiteLiveApiCommitSiteStage0Request, options?: Configuration): Promise<any> {
        return this.api.commitSiteStage_4(param.fqdn,  options).toPromise();
    }

    /**
     * Create a custom email account
     * Create Email
     * @param param the request object
     */
    public createEmail(param: SiteLiveApiCreateEmailRequest, options?: Configuration): Promise<any> {
        return this.api.createEmail(param.fqdn, param.userEmailCreate,  options).toPromise();
    }

    /**
     * Create a custom email account
     * Create Email
     * @param param the request object
     */
    public createEmail_5(param: SiteLiveApiCreateEmail0Request, options?: Configuration): Promise<any> {
        return this.api.createEmail_5(param.fqdn, param.userEmailCreate,  options).toPromise();
    }

    /**
     * Connect an external URL to your site on a subpath
     * Create External Path
     * @param param the request object
     */
    public createExternalPath(param: SiteLiveApiCreateExternalPathRequest, options?: Configuration): Promise<any> {
        return this.api.createExternalPath(param.fqdn, param.externalPathCreate,  options).toPromise();
    }

    /**
     * Connect an external URL to your site on a subpath
     * Create External Path
     * @param param the request object
     */
    public createExternalPath_6(param: SiteLiveApiCreateExternalPath0Request, options?: Configuration): Promise<any> {
        return this.api.createExternalPath_6(param.fqdn, param.externalPathCreate,  options).toPromise();
    }

    /**
     * Create a new site by providing your domain and your site's WordPress details
     * Create a site
     * @param param the request object
     */
    public createSiteLive(param: SiteLiveApiCreateSiteLiveRequest = {}, options?: Configuration): Promise<SiteLive> {
        return this.api.createSiteLive(param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

    /**
     * Create a new site by providing your domain and your site's WordPress details
     * Create a site
     * @param param the request object
     */
    public createSiteLive_7(param: SiteLiveApiCreateSiteLive0Request = {}, options?: Configuration): Promise<SiteLive> {
        return this.api.createSiteLive_7(param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

    /**
     * Create a staging site on which you can test changes
     * Create a Staging site
     * @param param the request object
     */
    public createSiteStage(param: SiteLiveApiCreateSiteStageRequest, options?: Configuration): Promise<any> {
        return this.api.createSiteStage(param.fqdn, param.siteStageCreate,  options).toPromise();
    }

    /**
     * Create a staging site on which you can test changes
     * Create a Staging site
     * @param param the request object
     */
    public createSiteStage_8(param: SiteLiveApiCreateSiteStage0Request, options?: Configuration): Promise<any> {
        return this.api.createSiteStage_8(param.fqdn, param.siteStageCreate,  options).toPromise();
    }

    /**
     * Create a tag for organizational purposes for your site
     * Create tag
     * @param param the request object
     */
    public createTag(param: SiteLiveApiCreateTagRequest, options?: Configuration): Promise<Tag> {
        return this.api.createTag(param.fqdn, param.tagCreate,  options).toPromise();
    }

    /**
     * Create a tag for organizational purposes for your site
     * Create tag
     * @param param the request object
     */
    public createTag_9(param: SiteLiveApiCreateTag0Request, options?: Configuration): Promise<Tag> {
        return this.api.createTag_9(param.fqdn, param.tagCreate,  options).toPromise();
    }

    /**
     * Delete a DNS record on your Nameserver configured site
     * Delete DNS record
     * @param param the request object
     */
    public deleteDnsRecord(param: SiteLiveApiDeleteDnsRecordRequest, options?: Configuration): Promise<any> {
        return this.api.deleteDnsRecord(param.dnsId, param.fqdn,  options).toPromise();
    }

    /**
     * Delete a DNS record on your Nameserver configured site
     * Delete DNS record
     * @param param the request object
     */
    public deleteDnsRecord_10(param: SiteLiveApiDeleteDnsRecord0Request, options?: Configuration): Promise<any> {
        return this.api.deleteDnsRecord_10(param.dnsId, param.fqdn,  options).toPromise();
    }

    /**
     * Delete a custom email account
     * Delete Email
     * @param param the request object
     */
    public deleteEmail(param: SiteLiveApiDeleteEmailRequest, options?: Configuration): Promise<any> {
        return this.api.deleteEmail(param.fqdn, param.userEmailAddress,  options).toPromise();
    }

    /**
     * Delete a custom email account
     * Delete Email
     * @param param the request object
     */
    public deleteEmail_11(param: SiteLiveApiDeleteEmail0Request, options?: Configuration): Promise<any> {
        return this.api.deleteEmail_11(param.fqdn, param.userEmailAddress,  options).toPromise();
    }

    /**
     * Delete the link between an external URL and your site
     * Delete External Path
     * @param param the request object
     */
    public deleteExternalPath(param: SiteLiveApiDeleteExternalPathRequest, options?: Configuration): Promise<any> {
        return this.api.deleteExternalPath(param.externalPathId, param.fqdn,  options).toPromise();
    }

    /**
     * Delete the link between an external URL and your site
     * Delete External Path
     * @param param the request object
     */
    public deleteExternalPath_12(param: SiteLiveApiDeleteExternalPath0Request, options?: Configuration): Promise<any> {
        return this.api.deleteExternalPath_12(param.externalPathId, param.fqdn,  options).toPromise();
    }

    /**
     * This permanently deletes your site, and its stage site if one exists
     * Delete your live site
     * @param param the request object
     */
    public deleteSiteLive(param: SiteLiveApiDeleteSiteLiveRequest, options?: Configuration): Promise<any> {
        return this.api.deleteSiteLive(param.fqdn,  options).toPromise();
    }

    /**
     * This permanently deletes your site, and its stage site if one exists
     * Delete your live site
     * @param param the request object
     */
    public deleteSiteLive_13(param: SiteLiveApiDeleteSiteLive0Request, options?: Configuration): Promise<any> {
        return this.api.deleteSiteLive_13(param.fqdn,  options).toPromise();
    }

    /**
     * Delete your staging site
     * Delete Stage Site
     * @param param the request object
     */
    public deleteSiteStage(param: SiteLiveApiDeleteSiteStageRequest, options?: Configuration): Promise<any> {
        return this.api.deleteSiteStage(param.fqdn,  options).toPromise();
    }

    /**
     * Delete your staging site
     * Delete Stage Site
     * @param param the request object
     */
    public deleteSiteStage_14(param: SiteLiveApiDeleteSiteStage0Request, options?: Configuration): Promise<any> {
        return this.api.deleteSiteStage_14(param.fqdn,  options).toPromise();
    }

    /**
     * Get a tag by its ID
     * Get a tag
     * @param param the request object
     */
    public deleteTag(param: SiteLiveApiDeleteTagRequest, options?: Configuration): Promise<Array<Tag>> {
        return this.api.deleteTag(param.tagId, param.fqdn,  options).toPromise();
    }

    /**
     * Get a tag by its ID
     * Get a tag
     * @param param the request object
     */
    public deleteTag_15(param: SiteLiveApiDeleteTag0Request, options?: Configuration): Promise<Array<Tag>> {
        return this.api.deleteTag_15(param.tagId, param.fqdn,  options).toPromise();
    }

    /**
     * Disable wp-login firewall
     * Disable the firewall
     * @param param the request object
     */
    public disableFirewall(param: SiteLiveApiDisableFirewallRequest, options?: Configuration): Promise<any> {
        return this.api.disableFirewall(param.fqdn,  options).toPromise();
    }

    /**
     * Disable wp-login firewall
     * Disable the firewall
     * @param param the request object
     */
    public disableFirewall_16(param: SiteLiveApiDisableFirewall0Request, options?: Configuration): Promise<any> {
        return this.api.disableFirewall_16(param.fqdn,  options).toPromise();
    }

    /**
     * Enable the wp-login firewall
     * Enable the firewall
     * @param param the request object
     */
    public enableFirewall(param: SiteLiveApiEnableFirewallRequest, options?: Configuration): Promise<any> {
        return this.api.enableFirewall(param.fqdn,  options).toPromise();
    }

    /**
     * Enable the wp-login firewall
     * Enable the firewall
     * @param param the request object
     */
    public enableFirewall_17(param: SiteLiveApiEnableFirewall0Request, options?: Configuration): Promise<any> {
        return this.api.enableFirewall_17(param.fqdn,  options).toPromise();
    }

    /**
     * Get a nameserver configured site's DNS records
     * Get DNS records
     * @param param the request object
     */
    public getDnsRecords(param: SiteLiveApiGetDnsRecordsRequest, options?: Configuration): Promise<any> {
        return this.api.getDnsRecords(param.fqdn,  options).toPromise();
    }

    /**
     * Get a nameserver configured site's DNS records
     * Get DNS records
     * @param param the request object
     */
    public getDnsRecords_18(param: SiteLiveApiGetDnsRecords0Request, options?: Configuration): Promise<any> {
        return this.api.getDnsRecords_18(param.fqdn,  options).toPromise();
    }

    /**
     * Get all custom email accounts
     * Get Emails
     * @param param the request object
     */
    public getEmails(param: SiteLiveApiGetEmailsRequest, options?: Configuration): Promise<any> {
        return this.api.getEmails(param.fqdn,  options).toPromise();
    }

    /**
     * Get all custom email accounts
     * Get Emails
     * @param param the request object
     */
    public getEmails_19(param: SiteLiveApiGetEmails0Request, options?: Configuration): Promise<any> {
        return this.api.getEmails_19(param.fqdn,  options).toPromise();
    }

    /**
     * Get details about your site's external path configs
     * Get External Paths
     * @param param the request object
     */
    public getExternalPaths(param: SiteLiveApiGetExternalPathsRequest, options?: Configuration): Promise<any> {
        return this.api.getExternalPaths(param.fqdn,  options).toPromise();
    }

    /**
     * Get details about your site's external path configs
     * Get External Paths
     * @param param the request object
     */
    public getExternalPaths_20(param: SiteLiveApiGetExternalPaths0Request, options?: Configuration): Promise<any> {
        return this.api.getExternalPaths_20(param.fqdn,  options).toPromise();
    }

    /**
     * Get a list of wp-content files at a point in time
     * PIT Files
     * @param param the request object
     */
    public getFilesAtPoint(param: SiteLiveApiGetFilesAtPointRequest, options?: Configuration): Promise<any> {
        return this.api.getFilesAtPoint(param.fqdn, param.restorePoint,  options).toPromise();
    }

    /**
     * Get a list of wp-content files at a point in time
     * PIT Files
     * @param param the request object
     */
    public getFilesAtPoint_21(param: SiteLiveApiGetFilesAtPoint0Request, options?: Configuration): Promise<any> {
        return this.api.getFilesAtPoint_21(param.fqdn, param.restorePoint,  options).toPromise();
    }

    /**
     * Get the required records for our custom email service
     * Get Required mail DNS records
     * @param param the request object
     */
    public getMailDns(param: SiteLiveApiGetMailDnsRequest, options?: Configuration): Promise<any> {
        return this.api.getMailDns(param.fqdn,  options).toPromise();
    }

    /**
     * Get the required records for our custom email service
     * Get Required mail DNS records
     * @param param the request object
     */
    public getMailDns_22(param: SiteLiveApiGetMailDns0Request, options?: Configuration): Promise<any> {
        return this.api.getMailDns_22(param.fqdn,  options).toPromise();
    }

    /**
     * Get the results of a site's restore to a previous point in time
     * Get PIT Restore
     * @param param the request object
     */
    public getPitRestore(param: SiteLiveApiGetPitRestoreRequest, options?: Configuration): Promise<any> {
        return this.api.getPitRestore(param.pitRestoreId, param.fqdn,  options).toPromise();
    }

    /**
     * Get the results of a site's restore to a previous point in time
     * Get PIT Restore
     * @param param the request object
     */
    public getPitRestore_23(param: SiteLiveApiGetPitRestore0Request, options?: Configuration): Promise<any> {
        return this.api.getPitRestore_23(param.pitRestoreId, param.fqdn,  options).toPromise();
    }

    /**
     * Get all the results of a site's restores to a previous point in time
     * Get PIT Restores
     * @param param the request object
     */
    public getPitRestores(param: SiteLiveApiGetPitRestoresRequest, options?: Configuration): Promise<any> {
        return this.api.getPitRestores(param.fqdn,  options).toPromise();
    }

    /**
     * Get all the results of a site's restores to a previous point in time
     * Get PIT Restores
     * @param param the request object
     */
    public getPitRestores_24(param: SiteLiveApiGetPitRestores0Request, options?: Configuration): Promise<any> {
        return this.api.getPitRestores_24(param.fqdn,  options).toPromise();
    }

    /**
     * Get details about your live site
     * Get your live site
     * @param param the request object
     */
    public getSiteLive(param: SiteLiveApiGetSiteLiveRequest, options?: Configuration): Promise<SiteLive> {
        return this.api.getSiteLive(param.fqdn,  options).toPromise();
    }

    /**
     * Get details about your live site
     * Get your live site
     * @param param the request object
     */
    public getSiteLive_25(param: SiteLiveApiGetSiteLive0Request, options?: Configuration): Promise<SiteLive> {
        return this.api.getSiteLive_25(param.fqdn,  options).toPromise();
    }

    /**
     * Get your visits and storage for a site at a given interval
     * Get Site Plan Usage
     * @param param the request object
     */
    public getSitePlanUsage(param: SiteLiveApiGetSitePlanUsageRequest, options?: Configuration): Promise<any> {
        return this.api.getSitePlanUsage(param.fqdn, param.start, param.end,  options).toPromise();
    }

    /**
     * Get your visits and storage for a site at a given interval
     * Get Site Plan Usage
     * @param param the request object
     */
    public getSitePlanUsage_26(param: SiteLiveApiGetSitePlanUsage0Request, options?: Configuration): Promise<any> {
        return this.api.getSitePlanUsage_26(param.fqdn, param.start, param.end,  options).toPromise();
    }

    /**
     * Get details about all of your live sites
     * Get your sites
     * @param param the request object
     */
    public getSitesLive(param: SiteLiveApiGetSitesLiveRequest = {}, options?: Configuration): Promise<Array<SiteLive>> {
        return this.api.getSitesLive( options).toPromise();
    }

    /**
     * Get details about all of your live sites
     * Get your sites
     * @param param the request object
     */
    public getSitesLive_27(param: SiteLiveApiGetSitesLive0Request = {}, options?: Configuration): Promise<Array<SiteLive>> {
        return this.api.getSitesLive_27( options).toPromise();
    }

    /**
     * Get all the tags for your site
     * Get tags
     * @param param the request object
     */
    public getTags(param: SiteLiveApiGetTagsRequest, options?: Configuration): Promise<Array<Tag>> {
        return this.api.getTags(param.fqdn,  options).toPromise();
    }

    /**
     * Get all the tags for your site
     * Get tags
     * @param param the request object
     */
    public getTags_28(param: SiteLiveApiGetTags0Request, options?: Configuration): Promise<Array<Tag>> {
        return this.api.getTags_28(param.fqdn,  options).toPromise();
    }

    /**
     * Add/Delete an IP from the wp-login firewall
     * Modify the firewall
     * @param param the request object
     */
    public modifyFirewall(param: SiteLiveApiModifyFirewallRequest, options?: Configuration): Promise<any> {
        return this.api.modifyFirewall(param.fqdn, param.ipAddress, param.addOrDel,  options).toPromise();
    }

    /**
     * Add/Delete an IP from the wp-login firewall
     * Modify the firewall
     * @param param the request object
     */
    public modifyFirewall_29(param: SiteLiveApiModifyFirewall0Request, options?: Configuration): Promise<any> {
        return this.api.modifyFirewall_29(param.fqdn, param.ipAddress, param.addOrDel,  options).toPromise();
    }

    /**
     * Restore your site to a previous point in time, down to the minute
     * Create PIT Restore
     * @param param the request object
     */
    public restoreSite(param: SiteLiveApiRestoreSiteRequest, options?: Configuration): Promise<any> {
        return this.api.restoreSite(param.fqdn, param.pITRestoreCreate,  options).toPromise();
    }

    /**
     * Restore your site to a previous point in time, down to the minute
     * Create PIT Restore
     * @param param the request object
     */
    public restoreSite_30(param: SiteLiveApiRestoreSite0Request, options?: Configuration): Promise<any> {
        return this.api.restoreSite_30(param.fqdn, param.pITRestoreCreate,  options).toPromise();
    }

    /**
     * Send a bash shell command to your site, such as a WP-CLI command
     * Execute shell command
     * @param param the request object
     */
    public shellCmdSiteLive(param: SiteLiveApiShellCmdSiteLiveRequest, options?: Configuration): Promise<any> {
        return this.api.shellCmdSiteLive(param.fqdn, param.cmd, param.cwd, param.autoTrackDir, param.stage,  options).toPromise();
    }

    /**
     * Send a bash shell command to your site, such as a WP-CLI command
     * Execute shell command
     * @param param the request object
     */
    public shellCmdSiteLive_31(param: SiteLiveApiShellCmdSiteLive0Request, options?: Configuration): Promise<any> {
        return this.api.shellCmdSiteLive_31(param.fqdn, param.cmd, param.cwd, param.autoTrackDir, param.stage,  options).toPromise();
    }

    /**
     * Update a DNS record on your Nameserver configured site
     * Update DNS record
     * @param param the request object
     */
    public updateDnsRecord(param: SiteLiveApiUpdateDnsRecordRequest, options?: Configuration): Promise<any> {
        return this.api.updateDnsRecord(param.fqdn, param.dnsType, param.dnsHostname, param.dnsContent, param.dnsId, param.dnsPriority, param.dnsTtl,  options).toPromise();
    }

    /**
     * Update a DNS record on your Nameserver configured site
     * Update DNS record
     * @param param the request object
     */
    public updateDnsRecord_32(param: SiteLiveApiUpdateDnsRecord0Request, options?: Configuration): Promise<any> {
        return this.api.updateDnsRecord_32(param.fqdn, param.dnsType, param.dnsHostname, param.dnsContent, param.dnsId, param.dnsPriority, param.dnsTtl,  options).toPromise();
    }

    /**
     * Update a custom email account
     * Update Email
     * @param param the request object
     */
    public updateEmail(param: SiteLiveApiUpdateEmailRequest, options?: Configuration): Promise<any> {
        return this.api.updateEmail(param.userEmailAddress, param.fqdn, param.userEmailUpdate,  options).toPromise();
    }

    /**
     * Update a custom email account
     * Update Email
     * @param param the request object
     */
    public updateEmail_33(param: SiteLiveApiUpdateEmail0Request, options?: Configuration): Promise<any> {
        return this.api.updateEmail_33(param.userEmailAddress, param.fqdn, param.userEmailUpdate,  options).toPromise();
    }

    /**
     * Update a site's details
     * Update a site
     * @param param the request object
     */
    public updateSiteLive(param: SiteLiveApiUpdateSiteLiveRequest, options?: Configuration): Promise<SiteLive> {
        return this.api.updateSiteLive(param.fqdn, param.siteLiveUpdate,  options).toPromise();
    }

    /**
     * Update a site's details
     * Update a site
     * @param param the request object
     */
    public updateSiteLive_34(param: SiteLiveApiUpdateSiteLive0Request, options?: Configuration): Promise<SiteLive> {
        return this.api.updateSiteLive_34(param.fqdn, param.siteLiveUpdate,  options).toPromise();
    }

    /**
     * Check if your mail related DNS records are set up correctly
     * MX Validation
     * @param param the request object
     */
    public validateMxRecords(param: SiteLiveApiValidateMxRecordsRequest, options?: Configuration): Promise<any> {
        return this.api.validateMxRecords(param.fqdn,  options).toPromise();
    }

    /**
     * Check if your mail related DNS records are set up correctly
     * MX Validation
     * @param param the request object
     */
    public validateMxRecords_35(param: SiteLiveApiValidateMxRecords0Request, options?: Configuration): Promise<any> {
        return this.api.validateMxRecords_35(param.fqdn,  options).toPromise();
    }

}

import { ObservableTeamApi } from "./ObservableAPI";
import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";

export interface TeamApiGetTeamRequest {
    /**
     * 
     * @type string
     * @memberof TeamApigetTeam
     */
    teamId: string
}

export interface TeamApiGetTeamMemberRequest {
    /**
     * 
     * @type string
     * @memberof TeamApigetTeamMember
     */
    teamMemberId: string
    /**
     * 
     * @type string
     * @memberof TeamApigetTeamMember
     */
    teamId: string
}

export interface TeamApiGetTeamMember0Request {
    /**
     * 
     * @type string
     * @memberof TeamApigetTeamMember_1
     */
    teamMemberId: string
    /**
     * 
     * @type string
     * @memberof TeamApigetTeamMember_1
     */
    teamId: string
}

export interface TeamApiGetTeamMembersRequest {
    /**
     * 
     * @type string
     * @memberof TeamApigetTeamMembers
     */
    teamId: string
}

export interface TeamApiGetTeamMembers0Request {
    /**
     * 
     * @type string
     * @memberof TeamApigetTeamMembers_2
     */
    teamId: string
}

export interface TeamApiGetTeam0Request {
    /**
     * 
     * @type string
     * @memberof TeamApigetTeam_3
     */
    teamId: string
}

export interface TeamApiGetTeamsRequest {
}

export interface TeamApiGetTeams0Request {
}

export interface TeamApiRemoveTeamMemberRequest {
    /**
     * 
     * @type string
     * @memberof TeamApiremoveTeamMember
     */
    teamMemberId: string
    /**
     * 
     * @type string
     * @memberof TeamApiremoveTeamMember
     */
    teamId: string
}

export interface TeamApiRemoveTeamMember0Request {
    /**
     * 
     * @type string
     * @memberof TeamApiremoveTeamMember_5
     */
    teamMemberId: string
    /**
     * 
     * @type string
     * @memberof TeamApiremoveTeamMember_5
     */
    teamId: string
}

export interface TeamApiUpdateTeamRequest {
    /**
     * 
     * @type string
     * @memberof TeamApiupdateTeam
     */
    teamId: string
    /**
     * 
     * @type TeamUpdate
     * @memberof TeamApiupdateTeam
     */
    teamUpdate: TeamUpdate
}

export interface TeamApiUpdateTeam0Request {
    /**
     * 
     * @type string
     * @memberof TeamApiupdateTeam_6
     */
    teamId: string
    /**
     * 
     * @type TeamUpdate
     * @memberof TeamApiupdateTeam_6
     */
    teamUpdate: TeamUpdate
}

export class ObjectTeamApi {
    private api: ObservableTeamApi

    public constructor(configuration: Configuration, requestFactory?: TeamApiRequestFactory, responseProcessor?: TeamApiResponseProcessor) {
        this.api = new ObservableTeamApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details about an owned team team by its ID
     * Get a team
     * @param param the request object
     */
    public getTeam(param: TeamApiGetTeamRequest, options?: Configuration): Promise<Team> {
        return this.api.getTeam(param.teamId,  options).toPromise();
    }

    /**
     * Get a Team Member by their UUID
     * Get Team Member
     * @param param the request object
     */
    public getTeamMember(param: TeamApiGetTeamMemberRequest, options?: Configuration): Promise<TeamMember> {
        return this.api.getTeamMember(param.teamMemberId, param.teamId,  options).toPromise();
    }

    /**
     * Get a Team Member by their UUID
     * Get Team Member
     * @param param the request object
     */
    public getTeamMember_1(param: TeamApiGetTeamMember0Request, options?: Configuration): Promise<TeamMember> {
        return this.api.getTeamMember_1(param.teamMemberId, param.teamId,  options).toPromise();
    }

    /**
     * Get a list of Team Members
     * Get a team's members
     * @param param the request object
     */
    public getTeamMembers(param: TeamApiGetTeamMembersRequest, options?: Configuration): Promise<Array<TeamMember>> {
        return this.api.getTeamMembers(param.teamId,  options).toPromise();
    }

    /**
     * Get a list of Team Members
     * Get a team's members
     * @param param the request object
     */
    public getTeamMembers_2(param: TeamApiGetTeamMembers0Request, options?: Configuration): Promise<Array<TeamMember>> {
        return this.api.getTeamMembers_2(param.teamId,  options).toPromise();
    }

    /**
     * Get details about an owned team team by its ID
     * Get a team
     * @param param the request object
     */
    public getTeam_3(param: TeamApiGetTeam0Request, options?: Configuration): Promise<Team> {
        return this.api.getTeam_3(param.teamId,  options).toPromise();
    }

    /**
     * Get details about all of your owned teams
     * Get your owned teams
     * @param param the request object
     */
    public getTeams(param: TeamApiGetTeamsRequest = {}, options?: Configuration): Promise<Array<Team>> {
        return this.api.getTeams( options).toPromise();
    }

    /**
     * Get details about all of your owned teams
     * Get your owned teams
     * @param param the request object
     */
    public getTeams_4(param: TeamApiGetTeams0Request = {}, options?: Configuration): Promise<Array<Team>> {
        return this.api.getTeams_4( options).toPromise();
    }

    /**
     * Remove a team member
     * Remove Team Member
     * @param param the request object
     */
    public removeTeamMember(param: TeamApiRemoveTeamMemberRequest, options?: Configuration): Promise<any> {
        return this.api.removeTeamMember(param.teamMemberId, param.teamId,  options).toPromise();
    }

    /**
     * Remove a team member
     * Remove Team Member
     * @param param the request object
     */
    public removeTeamMember_5(param: TeamApiRemoveTeamMember0Request, options?: Configuration): Promise<any> {
        return this.api.removeTeamMember_5(param.teamMemberId, param.teamId,  options).toPromise();
    }

    /**
     * Adjust your team's settings
     * Update a Team
     * @param param the request object
     */
    public updateTeam(param: TeamApiUpdateTeamRequest, options?: Configuration): Promise<Team> {
        return this.api.updateTeam(param.teamId, param.teamUpdate,  options).toPromise();
    }

    /**
     * Adjust your team's settings
     * Update a Team
     * @param param the request object
     */
    public updateTeam_6(param: TeamApiUpdateTeam0Request, options?: Configuration): Promise<Team> {
        return this.api.updateTeam_6(param.teamId, param.teamUpdate,  options).toPromise();
    }

}

import { ObservableTemplateApi } from "./ObservableAPI";
import { TemplateApiRequestFactory, TemplateApiResponseProcessor} from "../apis/TemplateApi";

export interface TemplateApiGetTemplateRequest {
    /**
     * 
     * @type string
     * @memberof TemplateApigetTemplate
     */
    templateName: string
}

export interface TemplateApiGetTemplatesRequest {
}

export interface TemplateApiSubmitTemplateRequest {
    /**
     * 
     * @type TemplateCreate
     * @memberof TemplateApisubmitTemplate
     */
    templateCreate?: TemplateCreate
}

export class ObjectTemplateApi {
    private api: ObservableTemplateApi

    public constructor(configuration: Configuration, requestFactory?: TemplateApiRequestFactory, responseProcessor?: TemplateApiResponseProcessor) {
        this.api = new ObservableTemplateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get details of a ready-made template sites by its name
     * Get Templates
     * @param param the request object
     */
    public getTemplate(param: TemplateApiGetTemplateRequest, options?: Configuration): Promise<Template> {
        return this.api.getTemplate(param.templateName,  options).toPromise();
    }

    /**
     * Returns a list of ready-made template sites
     * Get Templates
     * @param param the request object
     */
    public getTemplates(param: TemplateApiGetTemplatesRequest = {}, options?: Configuration): Promise<Array<Template>> {
        return this.api.getTemplates( options).toPromise();
    }

    /**
     * Create a new template by uploading a wpress file
     * Create Template
     * @param param the request object
     */
    public submitTemplate(param: TemplateApiSubmitTemplateRequest = {}, options?: Configuration): Promise<Template> {
        return this.api.submitTemplate(param.templateCreate,  options).toPromise();
    }

}

import { ObservableTicketApi } from "./ObservableAPI";
import { TicketApiRequestFactory, TicketApiResponseProcessor} from "../apis/TicketApi";

export interface TicketApiCreateTicketRequest {
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof TicketApicreateTicket
     */
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE
}

export interface TicketApiCreateTicketReplyRequest {
    /**
     * 
     * @type number
     * @memberof TicketApicreateTicketReply
     */
    ticketId: number
    /**
     * 
     * @type UNKNOWN_BASE_TYPE
     * @memberof TicketApicreateTicketReply
     */
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE
}

export interface TicketApiDeleteTicketRequest {
    /**
     * 
     * @type number
     * @memberof TicketApideleteTicket
     */
    ticketId: number
}

export interface TicketApiGetTicketRequest {
    /**
     * 
     * @type number
     * @memberof TicketApigetTicket
     */
    ticketId: number
}

export interface TicketApiGetTicketsRequest {
}

export interface TicketApiUpdateTicketRequest {
    /**
     * 
     * @type number
     * @memberof TicketApiupdateTicket
     */
    ticketId: number
    /**
     * 
     * @type TicketUpdate
     * @memberof TicketApiupdateTicket
     */
    ticketUpdate: TicketUpdate
}

export class ObjectTicketApi {
    private api: ObservableTicketApi

    public constructor(configuration: Configuration, requestFactory?: TicketApiRequestFactory, responseProcessor?: TicketApiResponseProcessor) {
        this.api = new ObservableTicketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a support ticket request
     * Create Ticket
     * @param param the request object
     */
    public createTicket(param: TicketApiCreateTicketRequest = {}, options?: Configuration): Promise<Ticket> {
        return this.api.createTicket(param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

    /**
     * Reply to a support ticket request
     * Create Ticket Reply
     * @param param the request object
     */
    public createTicketReply(param: TicketApiCreateTicketReplyRequest, options?: Configuration): Promise<TicketReply> {
        return this.api.createTicketReply(param.ticketId, param.UNKNOWN_BASE_TYPE,  options).toPromise();
    }

    /**
     * Delete a support ticket request by its ID
     * Delete Ticket
     * @param param the request object
     */
    public deleteTicket(param: TicketApiDeleteTicketRequest, options?: Configuration): Promise<any> {
        return this.api.deleteTicket(param.ticketId,  options).toPromise();
    }

    /**
     * Get a support ticket request by its ID
     * Get Ticket
     * @param param the request object
     */
    public getTicket(param: TicketApiGetTicketRequest, options?: Configuration): Promise<Ticket> {
        return this.api.getTicket(param.ticketId,  options).toPromise();
    }

    /**
     * Get Tickets
     * @param param the request object
     */
    public getTickets(param: TicketApiGetTicketsRequest = {}, options?: Configuration): Promise<Array<Ticket>> {
        return this.api.getTickets( options).toPromise();
    }

    /**
     * Update a support ticket request
     * Update Ticket
     * @param param the request object
     */
    public updateTicket(param: TicketApiUpdateTicketRequest, options?: Configuration): Promise<Ticket> {
        return this.api.updateTicket(param.ticketId, param.ticketUpdate,  options).toPromise();
    }

}

import { ObservableUtilsApi } from "./ObservableAPI";
import { UtilsApiRequestFactory, UtilsApiResponseProcessor} from "../apis/UtilsApi";

export interface UtilsApiDomainCheckRequest {
    /**
     * 
     * @type string
     * @memberof UtilsApidomainCheck
     */
    fqdn: string
}

export interface UtilsApiVerifyGitSyncDirectoriesRequest {
    /**
     * 
     * @type string
     * @memberof UtilsApiverifyGitSyncDirectories
     */
    gitUrl: string
    /**
     * 
     * @type string
     * @memberof UtilsApiverifyGitSyncDirectories
     */
    gitBranch?: string
}

export class ObjectUtilsApi {
    private api: ObservableUtilsApi

    public constructor(configuration: Configuration, requestFactory?: UtilsApiRequestFactory, responseProcessor?: UtilsApiResponseProcessor) {
        this.api = new ObservableUtilsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns success if a given FQDN's DNS records are correctly set up
     * Domain check
     * @param param the request object
     */
    public domainCheck(param: UtilsApiDomainCheckRequest, options?: Configuration): Promise<any> {
        return this.api.domainCheck(param.fqdn,  options).toPromise();
    }

    /**
     * Returns success Git Repo's root folder is correctly set up
     * Verify Git Sync Directories
     * @param param the request object
     */
    public verifyGitSyncDirectories(param: UtilsApiVerifyGitSyncDirectoriesRequest, options?: Configuration): Promise<any> {
        return this.api.verifyGitSyncDirectories(param.gitUrl, param.gitBranch,  options).toPromise();
    }

}
