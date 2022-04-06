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
 * @param description 
 * @param resolve 
 */

data class TicketReply (

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "description")
    val description: kotlin.String? = null,

    @Json(name = "resolve")
    val resolve: kotlin.Boolean? = null

)

