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

export class SiteStageCreate {
    'gitBranch'?: string;
    'restorePoint'?: Date;
    'subdomain': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "gitBranch",
            "baseName": "git_branch",
            "type": "string",
            "format": ""
        },
        {
            "name": "restorePoint",
            "baseName": "restore_point",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "subdomain",
            "baseName": "subdomain",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SiteStageCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

