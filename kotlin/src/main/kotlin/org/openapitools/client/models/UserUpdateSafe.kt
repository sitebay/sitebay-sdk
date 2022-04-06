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
 * @param address 
 * @param address2 
 * @param city 
 * @param country 
 * @param defaultRegionId 
 * @param fullName 
 * @param password 
 * @param phoneNumber 
 * @param postCode 
 * @param state 
 * @param tfa 
 */

data class UserUpdateSafe (

    @Json(name = "address")
    val address: kotlin.String? = null,

    @Json(name = "address2")
    val address2: kotlin.String? = null,

    @Json(name = "city")
    val city: kotlin.String? = null,

    @Json(name = "country")
    val country: kotlin.String? = null,

    @Json(name = "default_region_id")
    val defaultRegionId: kotlin.Int? = 1,

    @Json(name = "full_name")
    val fullName: kotlin.String? = null,

    @Json(name = "password")
    val password: kotlin.String? = null,

    @Json(name = "phone_number")
    val phoneNumber: kotlin.String? = null,

    @Json(name = "post_code")
    val postCode: kotlin.String? = null,

    @Json(name = "state")
    val state: kotlin.String? = null,

    @Json(name = "tfa")
    val tfa: kotlin.Int? = null

)

