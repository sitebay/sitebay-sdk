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
 * @param resolved 
 * @param subject 
 * @param category 
 * @param description 
 */

data class Ticket (

    @Json(name = "created")
    val created: java.time.OffsetDateTime,

    @Json(name = "id")
    val id: kotlin.Int,

    @Json(name = "resolved")
    val resolved: kotlin.Boolean,

    @Json(name = "subject")
    val subject: kotlin.String,

    @Json(name = "category")
    val category: kotlin.String? = null,

    @Json(name = "description")
    val description: kotlin.String? = null

)

