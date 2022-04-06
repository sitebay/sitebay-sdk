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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Org.OpenAPITools.Client;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Model;

namespace Org.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing MigrationApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class MigrationApiTests
    {
        private MigrationApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new MigrationApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of MigrationApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' MigrationApi
            //Assert.IsInstanceOf(typeof(MigrationApi), instance);
        }

        
        /// <summary>
        /// Test CreateMigration
        /// </summary>
        [Test]
        public void CreateMigrationTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string currentUrl = null;
            //string wordpressPassword = null;
            //string wordpressUser = null;
            //string extra = null;
            //string ftpAddress = null;
            //string ftpPassword = null;
            //string ftpUser = null;
            //string host = null;
            //string hostPassword = null;
            //string hostUser = null;
            //string migrationType = null;
            //System.IO.Stream zipFile = null;
            //string zipFileName = null;
            //var response = instance.CreateMigration(currentUrl, wordpressPassword, wordpressUser, extra, ftpAddress, ftpPassword, ftpUser, host, hostPassword, hostUser, migrationType, zipFile, zipFileName);
            //Assert.IsInstanceOf(typeof(Migration), response, "response is Migration");
        }
        
        /// <summary>
        /// Test DeleteMigration
        /// </summary>
        [Test]
        public void DeleteMigrationTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int migrationId = null;
            //var response = instance.DeleteMigration(migrationId);
            //Assert.IsInstanceOf(typeof(Object), response, "response is Object");
        }
        
        /// <summary>
        /// Test GetMigrations
        /// </summary>
        [Test]
        public void GetMigrationsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetMigrations();
            //Assert.IsInstanceOf(typeof(List<Migration>), response, "response is List<Migration>");
        }
        
    }

}