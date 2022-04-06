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
    /// SiteLiveUpdate
    /// </summary>
    [DataContract]
    public partial class SiteLiveUpdate :  IEquatable<SiteLiveUpdate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SiteLiveUpdate" /> class.
        /// </summary>
        /// <param name="fqdn">fqdn.</param>
        /// <param name="gitUrl">gitUrl.</param>
        /// <param name="httpAuthEnabled">httpAuthEnabled.</param>
        /// <param name="teamId">teamId.</param>
        public SiteLiveUpdate(string fqdn = default(string), string gitUrl = default(string), bool httpAuthEnabled = default(bool), string teamId = default(string))
        {
            this.Fqdn = fqdn;
            this.GitUrl = gitUrl;
            this.HttpAuthEnabled = httpAuthEnabled;
            this.TeamId = teamId;
        }

        /// <summary>
        /// Gets or Sets Fqdn
        /// </summary>
        [DataMember(Name="fqdn", EmitDefaultValue=false)]
        public string Fqdn { get; set; }

        /// <summary>
        /// Gets or Sets GitUrl
        /// </summary>
        [DataMember(Name="git_url", EmitDefaultValue=false)]
        public string GitUrl { get; set; }

        /// <summary>
        /// Gets or Sets HttpAuthEnabled
        /// </summary>
        [DataMember(Name="http_auth_enabled", EmitDefaultValue=false)]
        public bool HttpAuthEnabled { get; set; }

        /// <summary>
        /// Gets or Sets TeamId
        /// </summary>
        [DataMember(Name="team_id", EmitDefaultValue=false)]
        public string TeamId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SiteLiveUpdate {\n");
            sb.Append("  Fqdn: ").Append(Fqdn).Append("\n");
            sb.Append("  GitUrl: ").Append(GitUrl).Append("\n");
            sb.Append("  HttpAuthEnabled: ").Append(HttpAuthEnabled).Append("\n");
            sb.Append("  TeamId: ").Append(TeamId).Append("\n");
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
            return this.Equals(input as SiteLiveUpdate);
        }

        /// <summary>
        /// Returns true if SiteLiveUpdate instances are equal
        /// </summary>
        /// <param name="input">Instance of SiteLiveUpdate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SiteLiveUpdate input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Fqdn == input.Fqdn ||
                    (this.Fqdn != null &&
                    this.Fqdn.Equals(input.Fqdn))
                ) && 
                (
                    this.GitUrl == input.GitUrl ||
                    (this.GitUrl != null &&
                    this.GitUrl.Equals(input.GitUrl))
                ) && 
                (
                    this.HttpAuthEnabled == input.HttpAuthEnabled ||
                    (this.HttpAuthEnabled != null &&
                    this.HttpAuthEnabled.Equals(input.HttpAuthEnabled))
                ) && 
                (
                    this.TeamId == input.TeamId ||
                    (this.TeamId != null &&
                    this.TeamId.Equals(input.TeamId))
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
                if (this.Fqdn != null)
                    hashCode = hashCode * 59 + this.Fqdn.GetHashCode();
                if (this.GitUrl != null)
                    hashCode = hashCode * 59 + this.GitUrl.GetHashCode();
                if (this.HttpAuthEnabled != null)
                    hashCode = hashCode * 59 + this.HttpAuthEnabled.GetHashCode();
                if (this.TeamId != null)
                    hashCode = hashCode * 59 + this.TeamId.GetHashCode();
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