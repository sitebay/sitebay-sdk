import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     * Delete a non-default payment method
     * Delete payment method
     * @param paymentMethodId 
     */
    public deletePaymentMethod(paymentMethodId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deletePaymentMethod(paymentMethodId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePaymentMethod(rsp)));
            }));
    }

    /**
     * Delete a non-default payment method
     * Delete payment method
     * @param paymentMethodId 
     */
    public deletePaymentMethod_1(paymentMethodId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deletePaymentMethod_1(paymentMethodId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePaymentMethod_1(rsp)));
            }));
    }

    /**
     * Get your payment methods
     * Get payment methods
     */
    public getPaymentMethods(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getPaymentMethods(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentMethods(rsp)));
            }));
    }

    /**
     * Get your payment methods
     * Get payment methods
     */
    public getPaymentMethods_2(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getPaymentMethods_2(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentMethods_2(rsp)));
            }));
    }

    /**
     * Get your default card's sales tax percentage
     * Get tax
     */
    public getTax(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getTax(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTax(rsp)));
            }));
    }

    /**
     * Get your default card's sales tax percentage
     * Get tax
     */
    public getTax_3(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getTax_3(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTax_3(rsp)));
            }));
    }

    /**
     * Get your user data
     * Get own user
     */
    public getUserMe(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getUserMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserMe(rsp)));
            }));
    }

    /**
     * Get your user data
     * Get own user
     */
    public getUserMe_4(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getUserMe_4(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserMe_4(rsp)));
            }));
    }

    /**
     * Revoke your Git OAuth permission
     * Revoke OAuth
     * @param provider 
     */
    public revokeOauth(provider: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.revokeOauth(provider, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeOauth(rsp)));
            }));
    }

    /**
     * Revoke your Git OAuth permission
     * Revoke OAuth
     * @param provider 
     */
    public revokeOauth_5(provider: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.revokeOauth_5(provider, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeOauth_5(rsp)));
            }));
    }

    /**
     * Select your default payment method to charge every billing cycle
     * Update payment method
     * @param paymentMethodId 
     */
    public updatePaymentMethod(paymentMethodId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updatePaymentMethod(paymentMethodId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePaymentMethod(rsp)));
            }));
    }

    /**
     * Select your default payment method to charge every billing cycle
     * Update payment method
     * @param paymentMethodId 
     */
    public updatePaymentMethod_6(paymentMethodId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updatePaymentMethod_6(paymentMethodId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePaymentMethod_6(rsp)));
            }));
    }

    /**
     * Update your user data
     * Update user
     * @param UNKNOWN_BASE_TYPE 
     */
    public updateUser(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateUser(UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUser(rsp)));
            }));
    }

    /**
     * Update your user data
     * Update user
     * @param UNKNOWN_BASE_TYPE 
     */
    public updateUser_7(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateUser_7(UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUser_7(rsp)));
            }));
    }

}

import { MigrationApiRequestFactory, MigrationApiResponseProcessor} from "../apis/MigrationApi";
export class ObservableMigrationApi {
    private requestFactory: MigrationApiRequestFactory;
    private responseProcessor: MigrationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MigrationApiRequestFactory,
        responseProcessor?: MigrationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MigrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MigrationApiResponseProcessor();
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
    public createMigration(currentUrl: string, wordpressPassword: string, wordpressUser: string, extra?: string, ftpAddress?: string, ftpPassword?: string, ftpUser?: string, host?: string, hostPassword?: string, hostUser?: string, migrationType?: string, zipFile?: HttpFile, zipFileName?: string, _options?: Configuration): Observable<Migration> {
        const requestContextPromise = this.requestFactory.createMigration(currentUrl, wordpressPassword, wordpressUser, extra, ftpAddress, ftpPassword, ftpUser, host, hostPassword, hostUser, migrationType, zipFile, zipFileName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMigration(rsp)));
            }));
    }

    /**
     * Delete Migration
     * @param migrationId 
     */
    public deleteMigration(migrationId: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteMigration(migrationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMigration(rsp)));
            }));
    }

    /**
     * Get Migrations
     */
    public getMigrations(_options?: Configuration): Observable<Array<Migration>> {
        const requestContextPromise = this.requestFactory.getMigrations(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMigrations(rsp)));
            }));
    }

}

import { PlanApiRequestFactory, PlanApiResponseProcessor} from "../apis/PlanApi";
export class ObservablePlanApi {
    private requestFactory: PlanApiRequestFactory;
    private responseProcessor: PlanApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlanApiRequestFactory,
        responseProcessor?: PlanApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlanApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlanApiResponseProcessor();
    }

    /**
     * Cancel your plan, which will delete it at the end of your cycle
     * Cancel Plan
     * @param planId 
     */
    public cancelPlan(planId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.cancelPlan(planId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelPlan(rsp)));
            }));
    }

    /**
     * Buy a new plan/team
     * Create a Plan
     * @param UNKNOWN_BASE_TYPE 
     */
    public createPlan(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<Plan> {
        const requestContextPromise = this.requestFactory.createPlan(UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPlan(rsp)));
            }));
    }

    /**
     * Get a plan by its UUID
     * Get Plan
     * @param planId 
     */
    public getPlan(planId: string, _options?: Configuration): Observable<Plan> {
        const requestContextPromise = this.requestFactory.getPlan(planId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlan(rsp)));
            }));
    }

    /**
     * Get all your active plans
     * Get Plans
     */
    public getPlans(_options?: Configuration): Observable<Array<Plan>> {
        const requestContextPromise = this.requestFactory.getPlans(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPlans(rsp)));
            }));
    }

    /**
     * Preview the proration change before you upgrade or downgrade your plan
     * Preview Plan
     * @param planId 
     * @param newPlanTypeName 
     * @param additionalSites 
     */
    public previewChange(planId: string, newPlanTypeName: string, additionalSites: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.previewChange(planId, newPlanTypeName, additionalSites, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.previewChange(rsp)));
            }));
    }

    /**
     * Uncancel your cancelled plan
     * Uncancel Plan
     * @param planId 
     */
    public uncancelPlan(planId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.uncancelPlan(planId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uncancelPlan(rsp)));
            }));
    }

    /**
     * Upgrade or downgrade your plan
     * Update a Plan
     * @param planId 
     * @param planUpdate 
     */
    public updatePlan(planId: string, planUpdate: PlanUpdate, _options?: Configuration): Observable<Plan> {
        const requestContextPromise = this.requestFactory.updatePlan(planId, planUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePlan(rsp)));
            }));
    }

}

import { RegionApiRequestFactory, RegionApiResponseProcessor} from "../apis/RegionApi";
export class ObservableRegionApi {
    private requestFactory: RegionApiRequestFactory;
    private responseProcessor: RegionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionApiRequestFactory,
        responseProcessor?: RegionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RegionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RegionApiResponseProcessor();
    }

    /**
     * Get details of a region by its ID
     * Get a Region
     * @param regionId 
     */
    public getRegion(regionId: number, _options?: Configuration): Observable<Region> {
        const requestContextPromise = this.requestFactory.getRegion(regionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRegion(rsp)));
            }));
    }

    /**
     * Get details of all regions
     * Get Regions
     */
    public getRegions(_options?: Configuration): Observable<Array<Region>> {
        const requestContextPromise = this.requestFactory.getRegions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRegions(rsp)));
            }));
    }

}

import { SiteLiveApiRequestFactory, SiteLiveApiResponseProcessor} from "../apis/SiteLiveApi";
export class ObservableSiteLiveApi {
    private requestFactory: SiteLiveApiRequestFactory;
    private responseProcessor: SiteLiveApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SiteLiveApiRequestFactory,
        responseProcessor?: SiteLiveApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SiteLiveApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SiteLiveApiResponseProcessor();
    }

    /**
     * Automatically add the DNS records to your Nameserver configured site
     * Create Email DNS records
     * @param fqdn 
     */
    public addMailDns(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.addMailDns(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMailDns(rsp)));
            }));
    }

    /**
     * Automatically add the DNS records to your Nameserver configured site
     * Create Email DNS records
     * @param fqdn 
     */
    public addMailDns_1(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.addMailDns_1(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMailDns_1(rsp)));
            }));
    }

    /**
     * Enable or disable HTTP Basic Authentication
     * Change HTTP Auth
     * @param fqdn 
     * @param value 
     */
    public changeDevMode(fqdn: string, value: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.changeDevMode(fqdn, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changeDevMode(rsp)));
            }));
    }

    /**
     * Enable or disable HTTP Basic Authentication
     * Change HTTP Auth
     * @param fqdn 
     * @param value 
     */
    public changeDevMode_2(fqdn: string, value: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.changeDevMode_2(fqdn, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changeDevMode_2(rsp)));
            }));
    }

    /**
     * Purges the Cloudflare CDN cache for your site
     * Clear the cache
     * @param fqdn 
     */
    public clearCache(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.clearCache(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clearCache(rsp)));
            }));
    }

    /**
     * Purges the Cloudflare CDN cache for your site
     * Clear the cache
     * @param fqdn 
     */
    public clearCache_3(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.clearCache_3(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clearCache_3(rsp)));
            }));
    }

    /**
     * Sync the wp-content and database from your staging site to your live site
     * Commit Stage Site
     * @param fqdn 
     */
    public commitSiteStage(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.commitSiteStage(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commitSiteStage(rsp)));
            }));
    }

    /**
     * Sync the wp-content and database from your staging site to your live site
     * Commit Stage Site
     * @param fqdn 
     */
    public commitSiteStage_4(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.commitSiteStage_4(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commitSiteStage_4(rsp)));
            }));
    }

    /**
     * Create a custom email account
     * Create Email
     * @param fqdn 
     * @param userEmailCreate 
     */
    public createEmail(fqdn: string, userEmailCreate?: UserEmailCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.createEmail(fqdn, userEmailCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmail(rsp)));
            }));
    }

    /**
     * Create a custom email account
     * Create Email
     * @param fqdn 
     * @param userEmailCreate 
     */
    public createEmail_5(fqdn: string, userEmailCreate?: UserEmailCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.createEmail_5(fqdn, userEmailCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEmail_5(rsp)));
            }));
    }

    /**
     * Connect an external URL to your site on a subpath
     * Create External Path
     * @param fqdn 
     * @param externalPathCreate 
     */
    public createExternalPath(fqdn: string, externalPathCreate?: ExternalPathCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.createExternalPath(fqdn, externalPathCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createExternalPath(rsp)));
            }));
    }

    /**
     * Connect an external URL to your site on a subpath
     * Create External Path
     * @param fqdn 
     * @param externalPathCreate 
     */
    public createExternalPath_6(fqdn: string, externalPathCreate?: ExternalPathCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.createExternalPath_6(fqdn, externalPathCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createExternalPath_6(rsp)));
            }));
    }

    /**
     * Create a new site by providing your domain and your site's WordPress details
     * Create a site
     * @param UNKNOWN_BASE_TYPE 
     */
    public createSiteLive(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<SiteLive> {
        const requestContextPromise = this.requestFactory.createSiteLive(UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSiteLive(rsp)));
            }));
    }

    /**
     * Create a new site by providing your domain and your site's WordPress details
     * Create a site
     * @param UNKNOWN_BASE_TYPE 
     */
    public createSiteLive_7(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<SiteLive> {
        const requestContextPromise = this.requestFactory.createSiteLive_7(UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSiteLive_7(rsp)));
            }));
    }

    /**
     * Create a staging site on which you can test changes
     * Create a Staging site
     * @param fqdn 
     * @param siteStageCreate 
     */
    public createSiteStage(fqdn: string, siteStageCreate?: SiteStageCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.createSiteStage(fqdn, siteStageCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSiteStage(rsp)));
            }));
    }

    /**
     * Create a staging site on which you can test changes
     * Create a Staging site
     * @param fqdn 
     * @param siteStageCreate 
     */
    public createSiteStage_8(fqdn: string, siteStageCreate?: SiteStageCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.createSiteStage_8(fqdn, siteStageCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSiteStage_8(rsp)));
            }));
    }

    /**
     * Create a tag for organizational purposes for your site
     * Create tag
     * @param fqdn 
     * @param tagCreate 
     */
    public createTag(fqdn: string, tagCreate?: TagCreate, _options?: Configuration): Observable<Tag> {
        const requestContextPromise = this.requestFactory.createTag(fqdn, tagCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTag(rsp)));
            }));
    }

    /**
     * Create a tag for organizational purposes for your site
     * Create tag
     * @param fqdn 
     * @param tagCreate 
     */
    public createTag_9(fqdn: string, tagCreate?: TagCreate, _options?: Configuration): Observable<Tag> {
        const requestContextPromise = this.requestFactory.createTag_9(fqdn, tagCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTag_9(rsp)));
            }));
    }

    /**
     * Delete a DNS record on your Nameserver configured site
     * Delete DNS record
     * @param dnsId 
     * @param fqdn 
     */
    public deleteDnsRecord(dnsId: string, fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteDnsRecord(dnsId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDnsRecord(rsp)));
            }));
    }

    /**
     * Delete a DNS record on your Nameserver configured site
     * Delete DNS record
     * @param dnsId 
     * @param fqdn 
     */
    public deleteDnsRecord_10(dnsId: string, fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteDnsRecord_10(dnsId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDnsRecord_10(rsp)));
            }));
    }

    /**
     * Delete a custom email account
     * Delete Email
     * @param fqdn 
     * @param userEmailAddress 
     */
    public deleteEmail(fqdn: string, userEmailAddress: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteEmail(fqdn, userEmailAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmail(rsp)));
            }));
    }

    /**
     * Delete a custom email account
     * Delete Email
     * @param fqdn 
     * @param userEmailAddress 
     */
    public deleteEmail_11(fqdn: string, userEmailAddress: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteEmail_11(fqdn, userEmailAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmail_11(rsp)));
            }));
    }

    /**
     * Delete the link between an external URL and your site
     * Delete External Path
     * @param externalPathId 
     * @param fqdn 
     */
    public deleteExternalPath(externalPathId: string, fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteExternalPath(externalPathId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteExternalPath(rsp)));
            }));
    }

    /**
     * Delete the link between an external URL and your site
     * Delete External Path
     * @param externalPathId 
     * @param fqdn 
     */
    public deleteExternalPath_12(externalPathId: string, fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteExternalPath_12(externalPathId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteExternalPath_12(rsp)));
            }));
    }

    /**
     * This permanently deletes your site, and its stage site if one exists
     * Delete your live site
     * @param fqdn 
     */
    public deleteSiteLive(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteSiteLive(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSiteLive(rsp)));
            }));
    }

    /**
     * This permanently deletes your site, and its stage site if one exists
     * Delete your live site
     * @param fqdn 
     */
    public deleteSiteLive_13(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteSiteLive_13(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSiteLive_13(rsp)));
            }));
    }

    /**
     * Delete your staging site
     * Delete Stage Site
     * @param fqdn 
     */
    public deleteSiteStage(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteSiteStage(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSiteStage(rsp)));
            }));
    }

    /**
     * Delete your staging site
     * Delete Stage Site
     * @param fqdn 
     */
    public deleteSiteStage_14(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteSiteStage_14(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSiteStage_14(rsp)));
            }));
    }

    /**
     * Get a tag by its ID
     * Get a tag
     * @param tagId 
     * @param fqdn 
     */
    public deleteTag(tagId: string, fqdn: string, _options?: Configuration): Observable<Array<Tag>> {
        const requestContextPromise = this.requestFactory.deleteTag(tagId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTag(rsp)));
            }));
    }

    /**
     * Get a tag by its ID
     * Get a tag
     * @param tagId 
     * @param fqdn 
     */
    public deleteTag_15(tagId: string, fqdn: string, _options?: Configuration): Observable<Array<Tag>> {
        const requestContextPromise = this.requestFactory.deleteTag_15(tagId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTag_15(rsp)));
            }));
    }

    /**
     * Disable wp-login firewall
     * Disable the firewall
     * @param fqdn 
     */
    public disableFirewall(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.disableFirewall(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableFirewall(rsp)));
            }));
    }

    /**
     * Disable wp-login firewall
     * Disable the firewall
     * @param fqdn 
     */
    public disableFirewall_16(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.disableFirewall_16(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableFirewall_16(rsp)));
            }));
    }

    /**
     * Enable the wp-login firewall
     * Enable the firewall
     * @param fqdn 
     */
    public enableFirewall(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.enableFirewall(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableFirewall(rsp)));
            }));
    }

    /**
     * Enable the wp-login firewall
     * Enable the firewall
     * @param fqdn 
     */
    public enableFirewall_17(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.enableFirewall_17(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableFirewall_17(rsp)));
            }));
    }

    /**
     * Get a nameserver configured site's DNS records
     * Get DNS records
     * @param fqdn 
     */
    public getDnsRecords(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getDnsRecords(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsRecords(rsp)));
            }));
    }

    /**
     * Get a nameserver configured site's DNS records
     * Get DNS records
     * @param fqdn 
     */
    public getDnsRecords_18(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getDnsRecords_18(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsRecords_18(rsp)));
            }));
    }

    /**
     * Get all custom email accounts
     * Get Emails
     * @param fqdn 
     */
    public getEmails(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getEmails(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmails(rsp)));
            }));
    }

    /**
     * Get all custom email accounts
     * Get Emails
     * @param fqdn 
     */
    public getEmails_19(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getEmails_19(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmails_19(rsp)));
            }));
    }

    /**
     * Get details about your site's external path configs
     * Get External Paths
     * @param fqdn 
     */
    public getExternalPaths(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getExternalPaths(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExternalPaths(rsp)));
            }));
    }

    /**
     * Get details about your site's external path configs
     * Get External Paths
     * @param fqdn 
     */
    public getExternalPaths_20(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getExternalPaths_20(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExternalPaths_20(rsp)));
            }));
    }

    /**
     * Get a list of wp-content files at a point in time
     * PIT Files
     * @param fqdn 
     * @param restorePoint 
     */
    public getFilesAtPoint(fqdn: string, restorePoint: Date, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFilesAtPoint(fqdn, restorePoint, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesAtPoint(rsp)));
            }));
    }

    /**
     * Get a list of wp-content files at a point in time
     * PIT Files
     * @param fqdn 
     * @param restorePoint 
     */
    public getFilesAtPoint_21(fqdn: string, restorePoint: Date, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getFilesAtPoint_21(fqdn, restorePoint, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFilesAtPoint_21(rsp)));
            }));
    }

    /**
     * Get the required records for our custom email service
     * Get Required mail DNS records
     * @param fqdn 
     */
    public getMailDns(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getMailDns(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailDns(rsp)));
            }));
    }

    /**
     * Get the required records for our custom email service
     * Get Required mail DNS records
     * @param fqdn 
     */
    public getMailDns_22(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getMailDns_22(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailDns_22(rsp)));
            }));
    }

    /**
     * Get the results of a site's restore to a previous point in time
     * Get PIT Restore
     * @param pitRestoreId 
     * @param fqdn 
     */
    public getPitRestore(pitRestoreId: string, fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getPitRestore(pitRestoreId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPitRestore(rsp)));
            }));
    }

    /**
     * Get the results of a site's restore to a previous point in time
     * Get PIT Restore
     * @param pitRestoreId 
     * @param fqdn 
     */
    public getPitRestore_23(pitRestoreId: string, fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getPitRestore_23(pitRestoreId, fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPitRestore_23(rsp)));
            }));
    }

    /**
     * Get all the results of a site's restores to a previous point in time
     * Get PIT Restores
     * @param fqdn 
     */
    public getPitRestores(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getPitRestores(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPitRestores(rsp)));
            }));
    }

    /**
     * Get all the results of a site's restores to a previous point in time
     * Get PIT Restores
     * @param fqdn 
     */
    public getPitRestores_24(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getPitRestores_24(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPitRestores_24(rsp)));
            }));
    }

    /**
     * Get details about your live site
     * Get your live site
     * @param fqdn 
     */
    public getSiteLive(fqdn: string, _options?: Configuration): Observable<SiteLive> {
        const requestContextPromise = this.requestFactory.getSiteLive(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSiteLive(rsp)));
            }));
    }

    /**
     * Get details about your live site
     * Get your live site
     * @param fqdn 
     */
    public getSiteLive_25(fqdn: string, _options?: Configuration): Observable<SiteLive> {
        const requestContextPromise = this.requestFactory.getSiteLive_25(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSiteLive_25(rsp)));
            }));
    }

    /**
     * Get your visits and storage for a site at a given interval
     * Get Site Plan Usage
     * @param fqdn 
     * @param start 
     * @param end 
     */
    public getSitePlanUsage(fqdn: string, start: Date, end: Date, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getSitePlanUsage(fqdn, start, end, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSitePlanUsage(rsp)));
            }));
    }

    /**
     * Get your visits and storage for a site at a given interval
     * Get Site Plan Usage
     * @param fqdn 
     * @param start 
     * @param end 
     */
    public getSitePlanUsage_26(fqdn: string, start: Date, end: Date, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getSitePlanUsage_26(fqdn, start, end, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSitePlanUsage_26(rsp)));
            }));
    }

    /**
     * Get details about all of your live sites
     * Get your sites
     */
    public getSitesLive(_options?: Configuration): Observable<Array<SiteLive>> {
        const requestContextPromise = this.requestFactory.getSitesLive(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSitesLive(rsp)));
            }));
    }

    /**
     * Get details about all of your live sites
     * Get your sites
     */
    public getSitesLive_27(_options?: Configuration): Observable<Array<SiteLive>> {
        const requestContextPromise = this.requestFactory.getSitesLive_27(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSitesLive_27(rsp)));
            }));
    }

    /**
     * Get all the tags for your site
     * Get tags
     * @param fqdn 
     */
    public getTags(fqdn: string, _options?: Configuration): Observable<Array<Tag>> {
        const requestContextPromise = this.requestFactory.getTags(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTags(rsp)));
            }));
    }

    /**
     * Get all the tags for your site
     * Get tags
     * @param fqdn 
     */
    public getTags_28(fqdn: string, _options?: Configuration): Observable<Array<Tag>> {
        const requestContextPromise = this.requestFactory.getTags_28(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTags_28(rsp)));
            }));
    }

    /**
     * Add/Delete an IP from the wp-login firewall
     * Modify the firewall
     * @param fqdn 
     * @param ipAddress 
     * @param addOrDel 
     */
    public modifyFirewall(fqdn: string, ipAddress: string, addOrDel?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.modifyFirewall(fqdn, ipAddress, addOrDel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.modifyFirewall(rsp)));
            }));
    }

    /**
     * Add/Delete an IP from the wp-login firewall
     * Modify the firewall
     * @param fqdn 
     * @param ipAddress 
     * @param addOrDel 
     */
    public modifyFirewall_29(fqdn: string, ipAddress: string, addOrDel?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.modifyFirewall_29(fqdn, ipAddress, addOrDel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.modifyFirewall_29(rsp)));
            }));
    }

    /**
     * Restore your site to a previous point in time, down to the minute
     * Create PIT Restore
     * @param fqdn 
     * @param pITRestoreCreate 
     */
    public restoreSite(fqdn: string, pITRestoreCreate: PITRestoreCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.restoreSite(fqdn, pITRestoreCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreSite(rsp)));
            }));
    }

    /**
     * Restore your site to a previous point in time, down to the minute
     * Create PIT Restore
     * @param fqdn 
     * @param pITRestoreCreate 
     */
    public restoreSite_30(fqdn: string, pITRestoreCreate: PITRestoreCreate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.restoreSite_30(fqdn, pITRestoreCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreSite_30(rsp)));
            }));
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
    public shellCmdSiteLive(fqdn: string, cmd: string, cwd?: string, autoTrackDir?: boolean, stage?: boolean, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.shellCmdSiteLive(fqdn, cmd, cwd, autoTrackDir, stage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shellCmdSiteLive(rsp)));
            }));
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
    public shellCmdSiteLive_31(fqdn: string, cmd: string, cwd?: string, autoTrackDir?: boolean, stage?: boolean, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.shellCmdSiteLive_31(fqdn, cmd, cwd, autoTrackDir, stage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shellCmdSiteLive_31(rsp)));
            }));
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
    public updateDnsRecord(fqdn: string, dnsType: string, dnsHostname: string, dnsContent: string, dnsId?: string, dnsPriority?: number, dnsTtl?: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateDnsRecord(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDnsRecord(rsp)));
            }));
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
    public updateDnsRecord_32(fqdn: string, dnsType: string, dnsHostname: string, dnsContent: string, dnsId?: string, dnsPriority?: number, dnsTtl?: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateDnsRecord_32(fqdn, dnsType, dnsHostname, dnsContent, dnsId, dnsPriority, dnsTtl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDnsRecord_32(rsp)));
            }));
    }

    /**
     * Update a custom email account
     * Update Email
     * @param userEmailAddress 
     * @param fqdn 
     * @param userEmailUpdate 
     */
    public updateEmail(userEmailAddress: string, fqdn: string, userEmailUpdate?: UserEmailUpdate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateEmail(userEmailAddress, fqdn, userEmailUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmail(rsp)));
            }));
    }

    /**
     * Update a custom email account
     * Update Email
     * @param userEmailAddress 
     * @param fqdn 
     * @param userEmailUpdate 
     */
    public updateEmail_33(userEmailAddress: string, fqdn: string, userEmailUpdate?: UserEmailUpdate, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.updateEmail_33(userEmailAddress, fqdn, userEmailUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEmail_33(rsp)));
            }));
    }

    /**
     * Update a site's details
     * Update a site
     * @param fqdn 
     * @param siteLiveUpdate 
     */
    public updateSiteLive(fqdn: string, siteLiveUpdate: SiteLiveUpdate, _options?: Configuration): Observable<SiteLive> {
        const requestContextPromise = this.requestFactory.updateSiteLive(fqdn, siteLiveUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSiteLive(rsp)));
            }));
    }

    /**
     * Update a site's details
     * Update a site
     * @param fqdn 
     * @param siteLiveUpdate 
     */
    public updateSiteLive_34(fqdn: string, siteLiveUpdate: SiteLiveUpdate, _options?: Configuration): Observable<SiteLive> {
        const requestContextPromise = this.requestFactory.updateSiteLive_34(fqdn, siteLiveUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSiteLive_34(rsp)));
            }));
    }

    /**
     * Check if your mail related DNS records are set up correctly
     * MX Validation
     * @param fqdn 
     */
    public validateMxRecords(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.validateMxRecords(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateMxRecords(rsp)));
            }));
    }

    /**
     * Check if your mail related DNS records are set up correctly
     * MX Validation
     * @param fqdn 
     */
    public validateMxRecords_35(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.validateMxRecords_35(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateMxRecords_35(rsp)));
            }));
    }

}

import { TeamApiRequestFactory, TeamApiResponseProcessor} from "../apis/TeamApi";
export class ObservableTeamApi {
    private requestFactory: TeamApiRequestFactory;
    private responseProcessor: TeamApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamApiRequestFactory,
        responseProcessor?: TeamApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamApiResponseProcessor();
    }

    /**
     * Get details about an owned team team by its ID
     * Get a team
     * @param teamId 
     */
    public getTeam(teamId: string, _options?: Configuration): Observable<Team> {
        const requestContextPromise = this.requestFactory.getTeam(teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeam(rsp)));
            }));
    }

    /**
     * Get a Team Member by their UUID
     * Get Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public getTeamMember(teamMemberId: string, teamId: string, _options?: Configuration): Observable<TeamMember> {
        const requestContextPromise = this.requestFactory.getTeamMember(teamMemberId, teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamMember(rsp)));
            }));
    }

    /**
     * Get a Team Member by their UUID
     * Get Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public getTeamMember_1(teamMemberId: string, teamId: string, _options?: Configuration): Observable<TeamMember> {
        const requestContextPromise = this.requestFactory.getTeamMember_1(teamMemberId, teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamMember_1(rsp)));
            }));
    }

    /**
     * Get a list of Team Members
     * Get a team's members
     * @param teamId 
     */
    public getTeamMembers(teamId: string, _options?: Configuration): Observable<Array<TeamMember>> {
        const requestContextPromise = this.requestFactory.getTeamMembers(teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamMembers(rsp)));
            }));
    }

    /**
     * Get a list of Team Members
     * Get a team's members
     * @param teamId 
     */
    public getTeamMembers_2(teamId: string, _options?: Configuration): Observable<Array<TeamMember>> {
        const requestContextPromise = this.requestFactory.getTeamMembers_2(teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamMembers_2(rsp)));
            }));
    }

    /**
     * Get details about an owned team team by its ID
     * Get a team
     * @param teamId 
     */
    public getTeam_3(teamId: string, _options?: Configuration): Observable<Team> {
        const requestContextPromise = this.requestFactory.getTeam_3(teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeam_3(rsp)));
            }));
    }

    /**
     * Get details about all of your owned teams
     * Get your owned teams
     */
    public getTeams(_options?: Configuration): Observable<Array<Team>> {
        const requestContextPromise = this.requestFactory.getTeams(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeams(rsp)));
            }));
    }

    /**
     * Get details about all of your owned teams
     * Get your owned teams
     */
    public getTeams_4(_options?: Configuration): Observable<Array<Team>> {
        const requestContextPromise = this.requestFactory.getTeams_4(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeams_4(rsp)));
            }));
    }

    /**
     * Remove a team member
     * Remove Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public removeTeamMember(teamMemberId: string, teamId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.removeTeamMember(teamMemberId, teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeTeamMember(rsp)));
            }));
    }

    /**
     * Remove a team member
     * Remove Team Member
     * @param teamMemberId 
     * @param teamId 
     */
    public removeTeamMember_5(teamMemberId: string, teamId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.removeTeamMember_5(teamMemberId, teamId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeTeamMember_5(rsp)));
            }));
    }

    /**
     * Adjust your team's settings
     * Update a Team
     * @param teamId 
     * @param teamUpdate 
     */
    public updateTeam(teamId: string, teamUpdate: TeamUpdate, _options?: Configuration): Observable<Team> {
        const requestContextPromise = this.requestFactory.updateTeam(teamId, teamUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTeam(rsp)));
            }));
    }

    /**
     * Adjust your team's settings
     * Update a Team
     * @param teamId 
     * @param teamUpdate 
     */
    public updateTeam_6(teamId: string, teamUpdate: TeamUpdate, _options?: Configuration): Observable<Team> {
        const requestContextPromise = this.requestFactory.updateTeam_6(teamId, teamUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTeam_6(rsp)));
            }));
    }

}

import { TemplateApiRequestFactory, TemplateApiResponseProcessor} from "../apis/TemplateApi";
export class ObservableTemplateApi {
    private requestFactory: TemplateApiRequestFactory;
    private responseProcessor: TemplateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplateApiRequestFactory,
        responseProcessor?: TemplateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TemplateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TemplateApiResponseProcessor();
    }

    /**
     * Get details of a ready-made template sites by its name
     * Get Templates
     * @param templateName 
     */
    public getTemplate(templateName: string, _options?: Configuration): Observable<Template> {
        const requestContextPromise = this.requestFactory.getTemplate(templateName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplate(rsp)));
            }));
    }

    /**
     * Returns a list of ready-made template sites
     * Get Templates
     */
    public getTemplates(_options?: Configuration): Observable<Array<Template>> {
        const requestContextPromise = this.requestFactory.getTemplates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplates(rsp)));
            }));
    }

    /**
     * Create a new template by uploading a wpress file
     * Create Template
     * @param templateCreate 
     */
    public submitTemplate(templateCreate?: TemplateCreate, _options?: Configuration): Observable<Template> {
        const requestContextPromise = this.requestFactory.submitTemplate(templateCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.submitTemplate(rsp)));
            }));
    }

}

import { TicketApiRequestFactory, TicketApiResponseProcessor} from "../apis/TicketApi";
export class ObservableTicketApi {
    private requestFactory: TicketApiRequestFactory;
    private responseProcessor: TicketApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TicketApiRequestFactory,
        responseProcessor?: TicketApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TicketApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TicketApiResponseProcessor();
    }

    /**
     * Create a support ticket request
     * Create Ticket
     * @param UNKNOWN_BASE_TYPE 
     */
    public createTicket(UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<Ticket> {
        const requestContextPromise = this.requestFactory.createTicket(UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTicket(rsp)));
            }));
    }

    /**
     * Reply to a support ticket request
     * Create Ticket Reply
     * @param ticketId 
     * @param UNKNOWN_BASE_TYPE 
     */
    public createTicketReply(ticketId: number, UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<TicketReply> {
        const requestContextPromise = this.requestFactory.createTicketReply(ticketId, UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTicketReply(rsp)));
            }));
    }

    /**
     * Delete a support ticket request by its ID
     * Delete Ticket
     * @param ticketId 
     */
    public deleteTicket(ticketId: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.deleteTicket(ticketId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTicket(rsp)));
            }));
    }

    /**
     * Get a support ticket request by its ID
     * Get Ticket
     * @param ticketId 
     */
    public getTicket(ticketId: number, _options?: Configuration): Observable<Ticket> {
        const requestContextPromise = this.requestFactory.getTicket(ticketId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTicket(rsp)));
            }));
    }

    /**
     * Get Tickets
     */
    public getTickets(_options?: Configuration): Observable<Array<Ticket>> {
        const requestContextPromise = this.requestFactory.getTickets(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTickets(rsp)));
            }));
    }

    /**
     * Update a support ticket request
     * Update Ticket
     * @param ticketId 
     * @param ticketUpdate 
     */
    public updateTicket(ticketId: number, ticketUpdate: TicketUpdate, _options?: Configuration): Observable<Ticket> {
        const requestContextPromise = this.requestFactory.updateTicket(ticketId, ticketUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTicket(rsp)));
            }));
    }

}

import { UtilsApiRequestFactory, UtilsApiResponseProcessor} from "../apis/UtilsApi";
export class ObservableUtilsApi {
    private requestFactory: UtilsApiRequestFactory;
    private responseProcessor: UtilsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UtilsApiRequestFactory,
        responseProcessor?: UtilsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UtilsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UtilsApiResponseProcessor();
    }

    /**
     * Returns success if a given FQDN's DNS records are correctly set up
     * Domain check
     * @param fqdn 
     */
    public domainCheck(fqdn: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.domainCheck(fqdn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.domainCheck(rsp)));
            }));
    }

    /**
     * Returns success Git Repo's root folder is correctly set up
     * Verify Git Sync Directories
     * @param gitUrl 
     * @param gitBranch 
     */
    public verifyGitSyncDirectories(gitUrl: string, gitBranch?: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.verifyGitSyncDirectories(gitUrl, gitBranch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyGitSyncDirectories(rsp)));
            }));
    }

}
