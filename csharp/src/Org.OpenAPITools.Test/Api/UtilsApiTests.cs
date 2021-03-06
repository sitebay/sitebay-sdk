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
    ///  Class for testing UtilsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class UtilsApiTests
    {
        private UtilsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new UtilsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of UtilsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' UtilsApi
            //Assert.IsInstanceOf(typeof(UtilsApi), instance);
        }

        
        /// <summary>
        /// Test DomainCheck
        /// </summary>
        [Test]
        public void DomainCheckTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string fqdn = null;
            //var response = instance.DomainCheck(fqdn);
            //Assert.IsInstanceOf(typeof(Object), response, "response is Object");
        }
        
        /// <summary>
        /// Test VerifyGitSyncDirectories
        /// </summary>
        [Test]
        public void VerifyGitSyncDirectoriesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string gitUrl = null;
            //string gitBranch = null;
            //var response = instance.VerifyGitSyncDirectories(gitUrl, gitBranch);
            //Assert.IsInstanceOf(typeof(Object), response, "response is Object");
        }
        
    }

}
