/*
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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * PlanCreate
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-04-06T15:29:58.049226-06:00[America/Boise]")
public class PlanCreate {
  public static final String SERIALIZED_NAME_ADDITIONAL_SITES = "additional_sites";
  @SerializedName(SERIALIZED_NAME_ADDITIONAL_SITES)
  private Integer additionalSites = 0;

  public static final String SERIALIZED_NAME_INTERVAL = "interval";
  @SerializedName(SERIALIZED_NAME_INTERVAL)
  private String interval;

  public static final String SERIALIZED_NAME_NEW_TEAM_NAME = "new_team_name";
  @SerializedName(SERIALIZED_NAME_NEW_TEAM_NAME)
  private String newTeamName = "Personal";

  public static final String SERIALIZED_NAME_PLAN_TYPE_NAME = "plan_type_name";
  @SerializedName(SERIALIZED_NAME_PLAN_TYPE_NAME)
  private String planTypeName;

  public PlanCreate() { 
  }

  public PlanCreate additionalSites(Integer additionalSites) {
    
    this.additionalSites = additionalSites;
    return this;
  }

   /**
   * Get additionalSites
   * @return additionalSites
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getAdditionalSites() {
    return additionalSites;
  }


  public void setAdditionalSites(Integer additionalSites) {
    this.additionalSites = additionalSites;
  }


  public PlanCreate interval(String interval) {
    
    this.interval = interval;
    return this;
  }

   /**
   * Get interval
   * @return interval
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getInterval() {
    return interval;
  }


  public void setInterval(String interval) {
    this.interval = interval;
  }


  public PlanCreate newTeamName(String newTeamName) {
    
    this.newTeamName = newTeamName;
    return this;
  }

   /**
   * Get newTeamName
   * @return newTeamName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNewTeamName() {
    return newTeamName;
  }


  public void setNewTeamName(String newTeamName) {
    this.newTeamName = newTeamName;
  }


  public PlanCreate planTypeName(String planTypeName) {
    
    this.planTypeName = planTypeName;
    return this;
  }

   /**
   * Get planTypeName
   * @return planTypeName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getPlanTypeName() {
    return planTypeName;
  }


  public void setPlanTypeName(String planTypeName) {
    this.planTypeName = planTypeName;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PlanCreate planCreate = (PlanCreate) o;
    return Objects.equals(this.additionalSites, planCreate.additionalSites) &&
        Objects.equals(this.interval, planCreate.interval) &&
        Objects.equals(this.newTeamName, planCreate.newTeamName) &&
        Objects.equals(this.planTypeName, planCreate.planTypeName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(additionalSites, interval, newTeamName, planTypeName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PlanCreate {\n");
    sb.append("    additionalSites: ").append(toIndentedString(additionalSites)).append("\n");
    sb.append("    interval: ").append(toIndentedString(interval)).append("\n");
    sb.append("    newTeamName: ").append(toIndentedString(newTeamName)).append("\n");
    sb.append("    planTypeName: ").append(toIndentedString(planTypeName)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

