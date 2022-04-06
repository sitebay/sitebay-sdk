// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPValidationError } from '../models/HTTPValidationError';
import { Migration } from '../models/Migration';

/**
 * no description
 */
export class MigrationApiRequestFactory extends BaseAPIRequestFactory {

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
    public async createMigration(currentUrl: string, wordpressPassword: string, wordpressUser: string, extra?: string, ftpAddress?: string, ftpPassword?: string, ftpUser?: string, host?: string, hostPassword?: string, hostUser?: string, migrationType?: string, zipFile?: HttpFile, zipFileName?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'currentUrl' is not null or undefined
        if (currentUrl === null || currentUrl === undefined) {
            throw new RequiredError("MigrationApi", "createMigration", "currentUrl");
        }


        // verify required parameter 'wordpressPassword' is not null or undefined
        if (wordpressPassword === null || wordpressPassword === undefined) {
            throw new RequiredError("MigrationApi", "createMigration", "wordpressPassword");
        }


        // verify required parameter 'wordpressUser' is not null or undefined
        if (wordpressUser === null || wordpressUser === undefined) {
            throw new RequiredError("MigrationApi", "createMigration", "wordpressUser");
        }












        // Path Params
        const localVarPath = '/api/v1/migration';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (currentUrl !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('current_url', currentUrl as any);
        }
        if (extra !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('extra', extra as any);
        }
        if (ftpAddress !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ftp_address', ftpAddress as any);
        }
        if (ftpPassword !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ftp_password', ftpPassword as any);
        }
        if (ftpUser !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('ftp_user', ftpUser as any);
        }
        if (host !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('host', host as any);
        }
        if (hostPassword !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('host_password', hostPassword as any);
        }
        if (hostUser !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('host_user', hostUser as any);
        }
        if (migrationType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('migration_type', migrationType as any);
        }
        if (wordpressPassword !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('wordpress_password', wordpressPassword as any);
        }
        if (wordpressUser !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('wordpress_user', wordpressUser as any);
        }
        if (zipFile !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('zip_file', zipFile, zipFile.name);
             }
        }
        if (zipFileName !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('zip_file_name', zipFileName as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete Migration
     * @param migrationId 
     */
    public async deleteMigration(migrationId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'migrationId' is not null or undefined
        if (migrationId === null || migrationId === undefined) {
            throw new RequiredError("MigrationApi", "deleteMigration", "migrationId");
        }


        // Path Params
        const localVarPath = '/api/v1/migration/{migration_id}'
            .replace('{' + 'migration_id' + '}', encodeURIComponent(String(migrationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Migrations
     */
    public async getMigrations(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/migration';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["OAuth2PasswordBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MigrationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createMigration(response: ResponseContext): Promise<Migration > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Migration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Migration", ""
            ) as Migration;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Migration = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Migration", ""
            ) as Migration;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMigration(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMigrations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMigrations(response: ResponseContext): Promise<Array<Migration> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Migration> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Migration>", ""
            ) as Array<Migration>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Migration> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Migration>", ""
            ) as Array<Migration>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
