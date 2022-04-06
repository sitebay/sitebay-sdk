/*
 * Site Bay
 *
 * OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// PITRestoreCreate
    /// </summary>
    [DataContract]
    public partial class PITRestoreCreate :  IEquatable<PITRestoreCreate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PITRestoreCreate" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PITRestoreCreate() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PITRestoreCreate" /> class.
        /// </summary>
        /// <param name="forStageSite">forStageSite (default to false).</param>
        /// <param name="restorePoint">restorePoint (required).</param>
        public PITRestoreCreate(bool forStageSite = false, DateTime restorePoint = default(DateTime))
        {
            // to ensure "restorePoint" is required (not null)
            if (restorePoint == null)
            {
                throw new InvalidDataException("restorePoint is a required property for PITRestoreCreate and cannot be null");
            }
            else
            {
                this.RestorePoint = restorePoint;
            }

            // use default value if no "forStageSite" provided
            if (forStageSite == null)
            {
                this.ForStageSite = false;
            }
            else
            {
                this.ForStageSite = forStageSite;
            }
        }

        /// <summary>
        /// Gets or Sets ForStageSite
        /// </summary>
        [DataMember(Name="for_stage_site", EmitDefaultValue=false)]
        public bool ForStageSite { get; set; }

        /// <summary>
        /// Gets or Sets RestorePoint
        /// </summary>
        [DataMember(Name="restore_point", EmitDefaultValue=true)]
        public DateTime RestorePoint { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PITRestoreCreate {\n");
            sb.Append("  ForStageSite: ").Append(ForStageSite).Append("\n");
            sb.Append("  RestorePoint: ").Append(RestorePoint).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as PITRestoreCreate);
        }

        /// <summary>
        /// Returns true if PITRestoreCreate instances are equal
        /// </summary>
        /// <param name="input">Instance of PITRestoreCreate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PITRestoreCreate input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ForStageSite == input.ForStageSite ||
                    (this.ForStageSite != null &&
                    this.ForStageSite.Equals(input.ForStageSite))
                ) && 
                (
                    this.RestorePoint == input.RestorePoint ||
                    (this.RestorePoint != null &&
                    this.RestorePoint.Equals(input.RestorePoint))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ForStageSite != null)
                    hashCode = hashCode * 59 + this.ForStageSite.GetHashCode();
                if (this.RestorePoint != null)
                    hashCode = hashCode * 59 + this.RestorePoint.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
