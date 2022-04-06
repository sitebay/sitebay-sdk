=begin
#Site Bay

#OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.4.0

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::RegionApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'RegionApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::RegionApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of RegionApi' do
    it 'should create an instance of RegionApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::RegionApi)
    end
  end

  # unit tests for get_region
  # Get a Region
  # Get details of a region by its ID
  # @param region_id 
  # @param [Hash] opts the optional parameters
  # @return [Region]
  describe 'get_region test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_regions
  # Get Regions
  # Get details of all regions
  # @param [Hash] opts the optional parameters
  # @return [Array<Region>]
  describe 'get_regions test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
