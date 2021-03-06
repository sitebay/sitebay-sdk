=begin
#Site Bay

#OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.4.0

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::UtilsApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'UtilsApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::UtilsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of UtilsApi' do
    it 'should create an instance of UtilsApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::UtilsApi)
    end
  end

  # unit tests for domain_check
  # Domain check
  # Returns success if a given FQDN&#39;s DNS records are correctly set up
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'domain_check test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for verify_git_sync_directories
  # Verify Git Sync Directories
  # Returns success Git Repo&#39;s root folder is correctly set up
  # @param git_url 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :git_branch 
  # @return [Object]
  describe 'verify_git_sync_directories test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
