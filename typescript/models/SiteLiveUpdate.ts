/**
 * Site Bay
 * OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SiteLiveUpdate {
    'fqdn'?: string;
    'gitUrl'?: string;
    'httpAuthEnabled'?: boolean;
    'teamId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fqdn",
            "baseName": "fqdn",
            "type": "string",
            "format": ""
        },
        {
            "name": "gitUrl",
            "baseName": "git_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "httpAuthEnabled",
            "baseName": "http_auth_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "teamId",
            "baseName": "team_id",
            "type": "string",
            "format": "uuid4"
        }    ];

    static getAttributeTypeMap() {
        return SiteLiveUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}

