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
    /// PlanCreate
    /// </summary>
    [DataContract]
    public partial class PlanCreate :  IEquatable<PlanCreate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PlanCreate" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PlanCreate() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PlanCreate" /> class.
        /// </summary>
        /// <param name="additionalSites">additionalSites (default to 0).</param>
        /// <param name="interval">interval (required).</param>
        /// <param name="newTeamName">newTeamName (default to &quot;Personal&quot;).</param>
        /// <param name="planTypeName">planTypeName (required).</param>
        public PlanCreate(int additionalSites = 0, string interval = default(string), string newTeamName = "Personal", string planTypeName = default(string))
        {
            // to ensure "interval" is required (not null)
            if (interval == null)
            {
                throw new InvalidDataException("interval is a required property for PlanCreate and cannot be null");
            }
            else
            {
                this.Interval = interval;
            }

            // to ensure "planTypeName" is required (not null)
            if (planTypeName == null)
            {
                throw new InvalidDataException("planTypeName is a required property for PlanCreate and cannot be null");
            }
            else
            {
                this.PlanTypeName = planTypeName;
            }

            // use default value if no "additionalSites" provided
            if (additionalSites == null)
            {
                this.AdditionalSites = 0;
            }
            else
            {
                this.AdditionalSites = additionalSites;
            }
            // use default value if no "newTeamName" provided
            if (newTeamName == null)
            {
                this.NewTeamName = "Personal";
            }
            else
            {
                this.NewTeamName = newTeamName;
            }
        }

        /// <summary>
        /// Gets or Sets AdditionalSites
        /// </summary>
        [DataMember(Name="additional_sites", EmitDefaultValue=false)]
        public int AdditionalSites { get; set; }

        /// <summary>
        /// Gets or Sets Interval
        /// </summary>
        [DataMember(Name="interval", EmitDefaultValue=true)]
        public string Interval { get; set; }

        /// <summary>
        /// Gets or Sets NewTeamName
        /// </summary>
        [DataMember(Name="new_team_name", EmitDefaultValue=false)]
        public string NewTeamName { get; set; }

        /// <summary>
        /// Gets or Sets PlanTypeName
        /// </summary>
        [DataMember(Name="plan_type_name", EmitDefaultValue=true)]
        public string PlanTypeName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PlanCreate {\n");
            sb.Append("  AdditionalSites: ").Append(AdditionalSites).Append("\n");
            sb.Append("  Interval: ").Append(Interval).Append("\n");
            sb.Append("  NewTeamName: ").Append(NewTeamName).Append("\n");
            sb.Append("  PlanTypeName: ").Append(PlanTypeName).Append("\n");
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
            return this.Equals(input as PlanCreate);
        }

        /// <summary>
        /// Returns true if PlanCreate instances are equal
        /// </summary>
        /// <param name="input">Instance of PlanCreate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PlanCreate input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AdditionalSites == input.AdditionalSites ||
                    (this.AdditionalSites != null &&
                    this.AdditionalSites.Equals(input.AdditionalSites))
                ) && 
                (
                    this.Interval == input.Interval ||
                    (this.Interval != null &&
                    this.Interval.Equals(input.Interval))
                ) && 
                (
                    this.NewTeamName == input.NewTeamName ||
                    (this.NewTeamName != null &&
                    this.NewTeamName.Equals(input.NewTeamName))
                ) && 
                (
                    this.PlanTypeName == input.PlanTypeName ||
                    (this.PlanTypeName != null &&
                    this.PlanTypeName.Equals(input.PlanTypeName))
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
                if (this.AdditionalSites != null)
                    hashCode = hashCode * 59 + this.AdditionalSites.GetHashCode();
                if (this.Interval != null)
                    hashCode = hashCode * 59 + this.Interval.GetHashCode();
                if (this.NewTeamName != null)
                    hashCode = hashCode * 59 + this.NewTeamName.GetHashCode();
                if (this.PlanTypeName != null)
                    hashCode = hashCode * 59 + this.PlanTypeName.GetHashCode();
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
