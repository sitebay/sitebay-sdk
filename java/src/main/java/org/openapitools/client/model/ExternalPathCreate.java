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
 * ExternalPathCreate
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-04-06T15:29:58.049226-06:00[America/Boise]")
public class ExternalPathCreate {
  public static final String SERIALIZED_NAME_EXTERNAL_NAME = "external_name";
  @SerializedName(SERIALIZED_NAME_EXTERNAL_NAME)
  private String externalName;

  public static final String SERIALIZED_NAME_PATH = "path";
  @SerializedName(SERIALIZED_NAME_PATH)
  private String path;

  public ExternalPathCreate() { 
  }

  public ExternalPathCreate externalName(String externalName) {
    
    this.externalName = externalName;
    return this;
  }

   /**
   * Get externalName
   * @return externalName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getExternalName() {
    return externalName;
  }


  public void setExternalName(String externalName) {
    this.externalName = externalName;
  }


  public ExternalPathCreate path(String path) {
    
    this.path = path;
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getPath() {
    return path;
  }


  public void setPath(String path) {
    this.path = path;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExternalPathCreate externalPathCreate = (ExternalPathCreate) o;
    return Objects.equals(this.externalName, externalPathCreate.externalName) &&
        Objects.equals(this.path, externalPathCreate.path);
  }

  @Override
  public int hashCode() {
    return Objects.hash(externalName, path);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExternalPathCreate {\n");
    sb.append("    externalName: ").append(toIndentedString(externalName)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
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
