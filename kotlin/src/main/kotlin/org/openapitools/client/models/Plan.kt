/**
 * Site Bay
 *
 * OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models

import org.openapitools.client.models.Team

import com.squareup.moshi.Json

/**
 * 
 *
 * @param created 
 * @param ends 
 * @param id 
 * @param planTypeName 
 * @param userId 
 * @param additionalSites 
 * @param currency 
 * @param interval 
 * @param team 
 * @param teamId 
 */

data class Plan (

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "ends")
    val ends: java.time.OffsetDateTime,

    @Json(name = "id")
    val id: kotlin.String,

    @Json(name = "plan_type_name")
    val planTypeName: kotlin.String,

    @Json(name = "user_id")
    val userId: kotlin.String,

    @Json(name = "additional_sites")
    val additionalSites: kotlin.Int? = 0,

    @Json(name = "currency")
    val currency: kotlin.String? = null,

    @Json(name = "interval")
    val interval: kotlin.String? = null,

    @Json(name = "team")
    val team: Team? = null,

    @Json(name = "team_id")
    val teamId: kotlin.String? = null

)
