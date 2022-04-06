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

export class Migration {
    'currentUrl': string;
    'extra'?: string;
    'ftpAddress'?: string;
    'ftpPassword'?: string;
    'ftpUser'?: string;
    'host'?: string;
    'hostPassword'?: string;
    'hostUser'?: string;
    'migrationType'?: string;
    'wordpressPassword': string;
    'wordpressUser': string;
    'zipFileName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentUrl",
            "baseName": "current_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "extra",
            "baseName": "extra",
            "type": "string",
            "format": ""
        },
        {
            "name": "ftpAddress",
            "baseName": "ftp_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "ftpPassword",
            "baseName": "ftp_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "ftpUser",
            "baseName": "ftp_user",
            "type": "string",
            "format": ""
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostPassword",
            "baseName": "host_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostUser",
            "baseName": "host_user",
            "type": "string",
            "format": ""
        },
        {
            "name": "migrationType",
            "baseName": "migration_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "wordpressPassword",
            "baseName": "wordpress_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "wordpressUser",
            "baseName": "wordpress_user",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipFileName",
            "baseName": "zip_file_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Migration.attributeTypeMap;
    }

    public constructor() {
    }
}

