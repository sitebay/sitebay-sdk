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
    /// Migration
    /// </summary>
    [DataContract]
    public partial class Migration :  IEquatable<Migration>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Migration" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Migration() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Migration" /> class.
        /// </summary>
        /// <param name="currentUrl">currentUrl (required).</param>
        /// <param name="extra">extra.</param>
        /// <param name="ftpAddress">ftpAddress.</param>
        /// <param name="ftpPassword">ftpPassword.</param>
        /// <param name="ftpUser">ftpUser.</param>
        /// <param name="host">host.</param>
        /// <param name="hostPassword">hostPassword.</param>
        /// <param name="hostUser">hostUser.</param>
        /// <param name="migrationType">migrationType.</param>
        /// <param name="wordpressPassword">wordpressPassword (required).</param>
        /// <param name="wordpressUser">wordpressUser (required).</param>
        /// <param name="zipFileName">zipFileName.</param>
        public Migration(string currentUrl = default(string), string extra = default(string), string ftpAddress = default(string), string ftpPassword = default(string), string ftpUser = default(string), string host = default(string), string hostPassword = default(string), string hostUser = default(string), string migrationType = default(string), string wordpressPassword = default(string), string wordpressUser = default(string), string zipFileName = default(string))
        {
            // to ensure "currentUrl" is required (not null)
            if (currentUrl == null)
            {
                throw new InvalidDataException("currentUrl is a required property for Migration and cannot be null");
            }
            else
            {
                this.CurrentUrl = currentUrl;
            }

            // to ensure "wordpressPassword" is required (not null)
            if (wordpressPassword == null)
            {
                throw new InvalidDataException("wordpressPassword is a required property for Migration and cannot be null");
            }
            else
            {
                this.WordpressPassword = wordpressPassword;
            }

            // to ensure "wordpressUser" is required (not null)
            if (wordpressUser == null)
            {
                throw new InvalidDataException("wordpressUser is a required property for Migration and cannot be null");
            }
            else
            {
                this.WordpressUser = wordpressUser;
            }

            this.Extra = extra;
            this.FtpAddress = ftpAddress;
            this.FtpPassword = ftpPassword;
            this.FtpUser = ftpUser;
            this.Host = host;
            this.HostPassword = hostPassword;
            this.HostUser = hostUser;
            this.MigrationType = migrationType;
            this.ZipFileName = zipFileName;
        }

        /// <summary>
        /// Gets or Sets CurrentUrl
        /// </summary>
        [DataMember(Name="current_url", EmitDefaultValue=true)]
        public string CurrentUrl { get; set; }

        /// <summary>
        /// Gets or Sets Extra
        /// </summary>
        [DataMember(Name="extra", EmitDefaultValue=false)]
        public string Extra { get; set; }

        /// <summary>
        /// Gets or Sets FtpAddress
        /// </summary>
        [DataMember(Name="ftp_address", EmitDefaultValue=false)]
        public string FtpAddress { get; set; }

        /// <summary>
        /// Gets or Sets FtpPassword
        /// </summary>
        [DataMember(Name="ftp_password", EmitDefaultValue=false)]
        public string FtpPassword { get; set; }

        /// <summary>
        /// Gets or Sets FtpUser
        /// </summary>
        [DataMember(Name="ftp_user", EmitDefaultValue=false)]
        public string FtpUser { get; set; }

        /// <summary>
        /// Gets or Sets Host
        /// </summary>
        [DataMember(Name="host", EmitDefaultValue=false)]
        public string Host { get; set; }

        /// <summary>
        /// Gets or Sets HostPassword
        /// </summary>
        [DataMember(Name="host_password", EmitDefaultValue=false)]
        public string HostPassword { get; set; }

        /// <summary>
        /// Gets or Sets HostUser
        /// </summary>
        [DataMember(Name="host_user", EmitDefaultValue=false)]
        public string HostUser { get; set; }

        /// <summary>
        /// Gets or Sets MigrationType
        /// </summary>
        [DataMember(Name="migration_type", EmitDefaultValue=false)]
        public string MigrationType { get; set; }

        /// <summary>
        /// Gets or Sets WordpressPassword
        /// </summary>
        [DataMember(Name="wordpress_password", EmitDefaultValue=true)]
        public string WordpressPassword { get; set; }

        /// <summary>
        /// Gets or Sets WordpressUser
        /// </summary>
        [DataMember(Name="wordpress_user", EmitDefaultValue=true)]
        public string WordpressUser { get; set; }

        /// <summary>
        /// Gets or Sets ZipFileName
        /// </summary>
        [DataMember(Name="zip_file_name", EmitDefaultValue=false)]
        public string ZipFileName { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Migration {\n");
            sb.Append("  CurrentUrl: ").Append(CurrentUrl).Append("\n");
            sb.Append("  Extra: ").Append(Extra).Append("\n");
            sb.Append("  FtpAddress: ").Append(FtpAddress).Append("\n");
            sb.Append("  FtpPassword: ").Append(FtpPassword).Append("\n");
            sb.Append("  FtpUser: ").Append(FtpUser).Append("\n");
            sb.Append("  Host: ").Append(Host).Append("\n");
            sb.Append("  HostPassword: ").Append(HostPassword).Append("\n");
            sb.Append("  HostUser: ").Append(HostUser).Append("\n");
            sb.Append("  MigrationType: ").Append(MigrationType).Append("\n");
            sb.Append("  WordpressPassword: ").Append(WordpressPassword).Append("\n");
            sb.Append("  WordpressUser: ").Append(WordpressUser).Append("\n");
            sb.Append("  ZipFileName: ").Append(ZipFileName).Append("\n");
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
            return this.Equals(input as Migration);
        }

        /// <summary>
        /// Returns true if Migration instances are equal
        /// </summary>
        /// <param name="input">Instance of Migration to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Migration input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CurrentUrl == input.CurrentUrl ||
                    (this.CurrentUrl != null &&
                    this.CurrentUrl.Equals(input.CurrentUrl))
                ) && 
                (
                    this.Extra == input.Extra ||
                    (this.Extra != null &&
                    this.Extra.Equals(input.Extra))
                ) && 
                (
                    this.FtpAddress == input.FtpAddress ||
                    (this.FtpAddress != null &&
                    this.FtpAddress.Equals(input.FtpAddress))
                ) && 
                (
                    this.FtpPassword == input.FtpPassword ||
                    (this.FtpPassword != null &&
                    this.FtpPassword.Equals(input.FtpPassword))
                ) && 
                (
                    this.FtpUser == input.FtpUser ||
                    (this.FtpUser != null &&
                    this.FtpUser.Equals(input.FtpUser))
                ) && 
                (
                    this.Host == input.Host ||
                    (this.Host != null &&
                    this.Host.Equals(input.Host))
                ) && 
                (
                    this.HostPassword == input.HostPassword ||
                    (this.HostPassword != null &&
                    this.HostPassword.Equals(input.HostPassword))
                ) && 
                (
                    this.HostUser == input.HostUser ||
                    (this.HostUser != null &&
                    this.HostUser.Equals(input.HostUser))
                ) && 
                (
                    this.MigrationType == input.MigrationType ||
                    (this.MigrationType != null &&
                    this.MigrationType.Equals(input.MigrationType))
                ) && 
                (
                    this.WordpressPassword == input.WordpressPassword ||
                    (this.WordpressPassword != null &&
                    this.WordpressPassword.Equals(input.WordpressPassword))
                ) && 
                (
                    this.WordpressUser == input.WordpressUser ||
                    (this.WordpressUser != null &&
                    this.WordpressUser.Equals(input.WordpressUser))
                ) && 
                (
                    this.ZipFileName == input.ZipFileName ||
                    (this.ZipFileName != null &&
                    this.ZipFileName.Equals(input.ZipFileName))
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
                if (this.CurrentUrl != null)
                    hashCode = hashCode * 59 + this.CurrentUrl.GetHashCode();
                if (this.Extra != null)
                    hashCode = hashCode * 59 + this.Extra.GetHashCode();
                if (this.FtpAddress != null)
                    hashCode = hashCode * 59 + this.FtpAddress.GetHashCode();
                if (this.FtpPassword != null)
                    hashCode = hashCode * 59 + this.FtpPassword.GetHashCode();
                if (this.FtpUser != null)
                    hashCode = hashCode * 59 + this.FtpUser.GetHashCode();
                if (this.Host != null)
                    hashCode = hashCode * 59 + this.Host.GetHashCode();
                if (this.HostPassword != null)
                    hashCode = hashCode * 59 + this.HostPassword.GetHashCode();
                if (this.HostUser != null)
                    hashCode = hashCode * 59 + this.HostUser.GetHashCode();
                if (this.MigrationType != null)
                    hashCode = hashCode * 59 + this.MigrationType.GetHashCode();
                if (this.WordpressPassword != null)
                    hashCode = hashCode * 59 + this.WordpressPassword.GetHashCode();
                if (this.WordpressUser != null)
                    hashCode = hashCode * 59 + this.WordpressUser.GetHashCode();
                if (this.ZipFileName != null)
                    hashCode = hashCode * 59 + this.ZipFileName.GetHashCode();
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