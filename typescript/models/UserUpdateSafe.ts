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

export class UserUpdateSafe {
    'address'?: string;
    'address2'?: string;
    'city'?: string;
    'country'?: string;
    'defaultRegionId'?: number;
    'fullName'?: string;
    'password'?: string;
    'phoneNumber'?: string;
    'postCode'?: string;
    'state'?: string;
    'tfa'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultRegionId",
            "baseName": "default_region_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "fullName",
            "baseName": "full_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "postCode",
            "baseName": "post_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "tfa",
            "baseName": "tfa",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserUpdateSafe.attributeTypeMap;
    }

    public constructor() {
    }
}

