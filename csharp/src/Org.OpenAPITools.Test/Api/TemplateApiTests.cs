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
    ///  Class for testing TemplateApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class TemplateApiTests
    {
        private TemplateApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new TemplateApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of TemplateApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' TemplateApi
            //Assert.IsInstanceOf(typeof(TemplateApi), instance);
        }

        
        /// <summary>
        /// Test GetTemplate
        /// </summary>
        [Test]
        public void GetTemplateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string templateName = null;
            //var response = instance.GetTemplate(templateName);
            //Assert.IsInstanceOf(typeof(Template), response, "response is Template");
        }
        
        /// <summary>
        /// Test GetTemplates
        /// </summary>
        [Test]
        public void GetTemplatesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetTemplates();
            //Assert.IsInstanceOf(typeof(List<Template>), response, "response is List<Template>");
        }
        
        /// <summary>
        /// Test SubmitTemplate
        /// </summary>
        [Test]
        public void SubmitTemplateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //TemplateCreate templateCreate = null;
            //var response = instance.SubmitTemplate(templateCreate);
            //Assert.IsInstanceOf(typeof(Template), response, "response is Template");
        }
        
    }

}
