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
 * SiteLive
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-04-06T15:29:58.049226-06:00[America/Boise]")
public class SiteLive {
  public static final String SERIALIZED_NAME_ACTIVE = "active";
  @SerializedName(SERIALIZED_NAME_ACTIVE)
  private Boolean active;

  public static final String SERIALIZED_NAME_BUSY = "busy";
  @SerializedName(SERIALIZED_NAME_BUSY)
  private String busy;

  public static final String SERIALIZED_NAME_DKIM_KEY = "dkim_key";
  @SerializedName(SERIALIZED_NAME_DKIM_KEY)
  private String dkimKey;

  public static final String SERIALIZED_NAME_FQDN = "fqdn";
  @SerializedName(SERIALIZED_NAME_FQDN)
  private String fqdn;

  public static final String SERIALIZED_NAME_GIT_URL = "git_url";
  @SerializedName(SERIALIZED_NAME_GIT_URL)
  private String gitUrl;

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_REGION_ID = "region_id";
  @SerializedName(SERIALIZED_NAME_REGION_ID)
  private Integer regionId;

  public static final String SERIALIZED_NAME_TEAM_ID = "team_id";
  @SerializedName(SERIALIZED_NAME_TEAM_ID)
  private String teamId;

  public static final String SERIALIZED_NAME_UNTRACKED_TABLES = "untracked_tables";
  @SerializedName(SERIALIZED_NAME_UNTRACKED_TABLES)
  private String untrackedTables;

  public static final String SERIALIZED_NAME_USER_ID = "user_id";
  @SerializedName(SERIALIZED_NAME_USER_ID)
  private String userId;

  public SiteLive() { 
  }

  public SiteLive active(Boolean active) {
    
    this.active = active;
    return this;
  }

   /**
   * Get active
   * @return active
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getActive() {
    return active;
  }


  public void setActive(Boolean active) {
    this.active = active;
  }


  public SiteLive busy(String busy) {
    
    this.busy = busy;
    return this;
  }

   /**
   * Get busy
   * @return busy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getBusy() {
    return busy;
  }


  public void setBusy(String busy) {
    this.busy = busy;
  }


  public SiteLive dkimKey(String dkimKey) {
    
    this.dkimKey = dkimKey;
    return this;
  }

   /**
   * Get dkimKey
   * @return dkimKey
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getDkimKey() {
    return dkimKey;
  }


  public void setDkimKey(String dkimKey) {
    this.dkimKey = dkimKey;
  }


  public SiteLive fqdn(String fqdn) {
    
    this.fqdn = fqdn;
    return this;
  }

   /**
   * Get fqdn
   * @return fqdn
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getFqdn() {
    return fqdn;
  }


  public void setFqdn(String fqdn) {
    this.fqdn = fqdn;
  }


  public SiteLive gitUrl(String gitUrl) {
    
    this.gitUrl = gitUrl;
    return this;
  }

   /**
   * Get gitUrl
   * @return gitUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getGitUrl() {
    return gitUrl;
  }


  public void setGitUrl(String gitUrl) {
    this.gitUrl = gitUrl;
  }


  public SiteLive id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public SiteLive regionId(Integer regionId) {
    
    this.regionId = regionId;
    return this;
  }

   /**
   * Get regionId
   * @return regionId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Integer getRegionId() {
    return regionId;
  }


  public void setRegionId(Integer regionId) {
    this.regionId = regionId;
  }


  public SiteLive teamId(String teamId) {
    
    this.teamId = teamId;
    return this;
  }

   /**
   * Get teamId
   * @return teamId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getTeamId() {
    return teamId;
  }


  public void setTeamId(String teamId) {
    this.teamId = teamId;
  }


  public SiteLive untrackedTables(String untrackedTables) {
    
    this.untrackedTables = untrackedTables;
    return this;
  }

   /**
   * Get untrackedTables
   * @return untrackedTables
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUntrackedTables() {
    return untrackedTables;
  }


  public void setUntrackedTables(String untrackedTables) {
    this.untrackedTables = untrackedTables;
  }


  public SiteLive userId(String userId) {
    
    this.userId = userId;
    return this;
  }

   /**
   * Get userId
   * @return userId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getUserId() {
    return userId;
  }


  public void setUserId(String userId) {
    this.userId = userId;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SiteLive siteLive = (SiteLive) o;
    return Objects.equals(this.active, siteLive.active) &&
        Objects.equals(this.busy, siteLive.busy) &&
        Objects.equals(this.dkimKey, siteLive.dkimKey) &&
        Objects.equals(this.fqdn, siteLive.fqdn) &&
        Objects.equals(this.gitUrl, siteLive.gitUrl) &&
        Objects.equals(this.id, siteLive.id) &&
        Objects.equals(this.regionId, siteLive.regionId) &&
        Objects.equals(this.teamId, siteLive.teamId) &&
        Objects.equals(this.untrackedTables, siteLive.untrackedTables) &&
        Objects.equals(this.userId, siteLive.userId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(active, busy, dkimKey, fqdn, gitUrl, id, regionId, teamId, untrackedTables, userId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SiteLive {\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
    sb.append("    busy: ").append(toIndentedString(busy)).append("\n");
    sb.append("    dkimKey: ").append(toIndentedString(dkimKey)).append("\n");
    sb.append("    fqdn: ").append(toIndentedString(fqdn)).append("\n");
    sb.append("    gitUrl: ").append(toIndentedString(gitUrl)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    regionId: ").append(toIndentedString(regionId)).append("\n");
    sb.append("    teamId: ").append(toIndentedString(teamId)).append("\n");
    sb.append("    untrackedTables: ").append(toIndentedString(untrackedTables)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
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

