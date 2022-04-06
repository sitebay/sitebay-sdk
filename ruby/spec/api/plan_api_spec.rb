=begin
#Site Bay

#OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.4.0

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::PlanApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'PlanApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::PlanApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of PlanApi' do
    it 'should create an instance of PlanApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::PlanApi)
    end
  end

  # unit tests for cancel_plan
  # Cancel Plan
  # Cancel your plan, which will delete it at the end of your cycle
  # @param plan_id 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'cancel_plan test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_plan
  # Create a Plan
  # Buy a new plan/team
  # @param [Hash] opts the optional parameters
  # @option opts [UNKNOWN_BASE_TYPE] :unknown_base_type 
  # @return [Plan]
  describe 'create_plan test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_plan
  # Get Plan
  # Get a plan by its UUID
  # @param plan_id 
  # @param [Hash] opts the optional parameters
  # @return [Plan]
  describe 'get_plan test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_plans
  # Get Plans
  # Get all your active plans
  # @param [Hash] opts the optional parameters
  # @return [Array<Plan>]
  describe 'get_plans test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for preview_change
  # Preview Plan
  # Preview the proration change before you upgrade or downgrade your plan
  # @param plan_id 
  # @param new_plan_type_name 
  # @param additional_sites 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'preview_change test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for uncancel_plan
  # Uncancel Plan
  # Uncancel your cancelled plan
  # @param plan_id 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'uncancel_plan test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_plan
  # Update a Plan
  # Upgrade or downgrade your plan
  # @param plan_id 
  # @param plan_update 
  # @param [Hash] opts the optional parameters
  # @return [Plan]
  describe 'update_plan test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
