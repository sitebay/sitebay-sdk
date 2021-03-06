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

export class TemplateCreate {
    'fullDescription': string;
    'name': string;
    'plugins': string;
    'quickstart': string;
    'shortDescription': string;
    'tag': string;
    'wpressUrl': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fullDescription",
            "baseName": "full_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "plugins",
            "baseName": "plugins",
            "type": "string",
            "format": ""
        },
        {
            "name": "quickstart",
            "baseName": "quickstart",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortDescription",
            "baseName": "short_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "wpressUrl",
            "baseName": "wpress_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

