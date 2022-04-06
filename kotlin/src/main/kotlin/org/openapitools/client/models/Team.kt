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


import com.squareup.moshi.Json

/**
 * 
 *
 * @param created 
 * @param id 
 * @param name 
 * @param planId 
 * @param timezone 
 */

data class Team (

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "id")
    val id: kotlin.String,

    @Json(name = "name")
    val name: kotlin.String,

    @Json(name = "plan_id")
    val planId: kotlin.String,

    @Json(name = "timezone")
    val timezone: kotlin.String

)
