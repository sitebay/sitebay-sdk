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
    /// Plan
    /// </summary>
    [DataContract]
    public partial class Plan :  IEquatable<Plan>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Plan" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Plan() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Plan" /> class.
        /// </summary>
        /// <param name="additionalSites">additionalSites (default to 0).</param>
        /// <param name="created">created (required).</param>
        /// <param name="currency">currency.</param>
        /// <param name="ends">ends (required).</param>
        /// <param name="id">id (required).</param>
        /// <param name="interval">interval.</param>
        /// <param name="planTypeName">planTypeName (required).</param>
        /// <param name="team">team.</param>
        /// <param name="teamId">teamId.</param>
        /// <param name="userId">userId (required).</param>
        public Plan(int additionalSites = 0, DateTime created = default(DateTime), string currency = default(string), DateTime ends = default(DateTime), string id = default(string), string interval = default(string), string planTypeName = default(string), Team team = default(Team), string teamId = default(string), string userId = default(string))
        {
            // to ensure "created" is required (not null)
            if (created == null)
            {
                throw new InvalidDataException("created is a required property for Plan and cannot be null");
            }
            else
            {
                this.Created = created;
            }

            // to ensure "ends" is required (not null)
            if (ends == null)
            {
                throw new InvalidDataException("ends is a required property for Plan and cannot be null");
            }
            else
            {
                this.Ends = ends;
            }

            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for Plan and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            // to ensure "planTypeName" is required (not null)
            if (planTypeName == null)
            {
                throw new InvalidDataException("planTypeName is a required property for Plan and cannot be null");
            }
            else
            {
                this.PlanTypeName = planTypeName;
            }

            // to ensure "userId" is required (not null)
            if (userId == null)
            {
                throw new InvalidDataException("userId is a required property for Plan and cannot be null");
            }
            else
            {
                this.UserId = userId;
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
            this.Currency = currency;
            this.Interval = interval;
            this.Team = team;
            this.TeamId = teamId;
        }

        /// <summary>
        /// Gets or Sets AdditionalSites
        /// </summary>
        [DataMember(Name="additional_sites", EmitDefaultValue=false)]
        public int AdditionalSites { get; set; }

        /// <summary>
        /// Gets or Sets Created
        /// </summary>
        [DataMember(Name="created", EmitDefaultValue=true)]
        public DateTime Created { get; set; }

        /// <summary>
        /// Gets or Sets Currency
        /// </summary>
        [DataMember(Name="currency", EmitDefaultValue=false)]
        public string Currency { get; set; }

        /// <summary>
        /// Gets or Sets Ends
        /// </summary>
        [DataMember(Name="ends", EmitDefaultValue=true)]
        public DateTime Ends { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=true)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Interval
        /// </summary>
        [DataMember(Name="interval", EmitDefaultValue=false)]
        public string Interval { get; set; }

        /// <summary>
        /// Gets or Sets PlanTypeName
        /// </summary>
        [DataMember(Name="plan_type_name", EmitDefaultValue=true)]
        public string PlanTypeName { get; set; }

        /// <summary>
        /// Gets or Sets Team
        /// </summary>
        [DataMember(Name="team", EmitDefaultValue=false)]
        public Team Team { get; set; }

        /// <summary>
        /// Gets or Sets TeamId
        /// </summary>
        [DataMember(Name="team_id", EmitDefaultValue=false)]
        public string TeamId { get; set; }

        /// <summary>
        /// Gets or Sets UserId
        /// </summary>
        [DataMember(Name="user_id", EmitDefaultValue=true)]
        public string UserId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Plan {\n");
            sb.Append("  AdditionalSites: ").Append(AdditionalSites).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Ends: ").Append(Ends).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Interval: ").Append(Interval).Append("\n");
            sb.Append("  PlanTypeName: ").Append(PlanTypeName).Append("\n");
            sb.Append("  Team: ").Append(Team).Append("\n");
            sb.Append("  TeamId: ").Append(TeamId).Append("\n");
            sb.Append("  UserId: ").Append(UserId).Append("\n");
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
            return this.Equals(input as Plan);
        }

        /// <summary>
        /// Returns true if Plan instances are equal
        /// </summary>
        /// <param name="input">Instance of Plan to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Plan input)
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
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.Ends == input.Ends ||
                    (this.Ends != null &&
                    this.Ends.Equals(input.Ends))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Interval == input.Interval ||
                    (this.Interval != null &&
                    this.Interval.Equals(input.Interval))
                ) && 
                (
                    this.PlanTypeName == input.PlanTypeName ||
                    (this.PlanTypeName != null &&
                    this.PlanTypeName.Equals(input.PlanTypeName))
                ) && 
                (
                    this.Team == input.Team ||
                    (this.Team != null &&
                    this.Team.Equals(input.Team))
                ) && 
                (
                    this.TeamId == input.TeamId ||
                    (this.TeamId != null &&
                    this.TeamId.Equals(input.TeamId))
                ) && 
                (
                    this.UserId == input.UserId ||
                    (this.UserId != null &&
                    this.UserId.Equals(input.UserId))
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
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
                if (this.Currency != null)
                    hashCode = hashCode * 59 + this.Currency.GetHashCode();
                if (this.Ends != null)
                    hashCode = hashCode * 59 + this.Ends.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Interval != null)
                    hashCode = hashCode * 59 + this.Interval.GetHashCode();
                if (this.PlanTypeName != null)
                    hashCode = hashCode * 59 + this.PlanTypeName.GetHashCode();
                if (this.Team != null)
                    hashCode = hashCode * 59 + this.Team.GetHashCode();
                if (this.TeamId != null)
                    hashCode = hashCode * 59 + this.TeamId.GetHashCode();
                if (this.UserId != null)
                    hashCode = hashCode * 59 + this.UserId.GetHashCode();
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
