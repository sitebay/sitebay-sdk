/**
 * Site Bay
 * OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Team } from './team';


export interface Plan { 
    additional_sites?: number;
    created: string;
    currency?: string;
    ends: string;
    id: string;
    interval?: string;
    plan_type_name: string;
    team?: Team;
    team_id?: string;
    user_id: string;
}

