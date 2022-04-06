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
    ///  Class for testing TicketApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class TicketApiTests
    {
        private TicketApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new TicketApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of TicketApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' TicketApi
            //Assert.IsInstanceOf(typeof(TicketApi), instance);
        }

        
        /// <summary>
        /// Test CreateTicket
        /// </summary>
        [Test]
        public void CreateTicketTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null;
            //var response = instance.CreateTicket(UNKNOWN_BASE_TYPE);
            //Assert.IsInstanceOf(typeof(Ticket), response, "response is Ticket");
        }
        
        /// <summary>
        /// Test CreateTicketReply
        /// </summary>
        [Test]
        public void CreateTicketReplyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int ticketId = null;
            //UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE = null;
            //var response = instance.CreateTicketReply(ticketId, UNKNOWN_BASE_TYPE);
            //Assert.IsInstanceOf(typeof(TicketReply), response, "response is TicketReply");
        }
        
        /// <summary>
        /// Test DeleteTicket
        /// </summary>
        [Test]
        public void DeleteTicketTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int ticketId = null;
            //var response = instance.DeleteTicket(ticketId);
            //Assert.IsInstanceOf(typeof(Object), response, "response is Object");
        }
        
        /// <summary>
        /// Test GetTicket
        /// </summary>
        [Test]
        public void GetTicketTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int ticketId = null;
            //var response = instance.GetTicket(ticketId);
            //Assert.IsInstanceOf(typeof(Ticket), response, "response is Ticket");
        }
        
        /// <summary>
        /// Test GetTickets
        /// </summary>
        [Test]
        public void GetTicketsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetTickets();
            //Assert.IsInstanceOf(typeof(List<Ticket>), response, "response is List<Ticket>");
        }
        
        /// <summary>
        /// Test UpdateTicket
        /// </summary>
        [Test]
        public void UpdateTicketTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int ticketId = null;
            //TicketUpdate ticketUpdate = null;
            //var response = instance.UpdateTicket(ticketId, ticketUpdate);
            //Assert.IsInstanceOf(typeof(Ticket), response, "response is Ticket");
        }
        
    }

}
