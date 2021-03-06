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

/**
* Base User model.
*/
export class User {
    'address'?: string;
    'address2'?: string;
    'city'?: string;
    'country'?: string;
    'defaultRegionId'?: number;
    'email': string;
    'fullName'?: string;
    'id'?: string;
    'isActive'?: boolean;
    'isSuperuser'?: boolean;
    'isVerified'?: boolean;
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
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "fullName",
            "baseName": "full_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid4"
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuperuser",
            "baseName": "is_superuser",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isVerified",
            "baseName": "is_verified",
            "type": "boolean",
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
        return User.attributeTypeMap;
    }

    public constructor() {
    }
}

