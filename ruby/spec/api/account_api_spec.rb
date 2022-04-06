=begin
#Site Bay

#OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.4.0

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::AccountApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'AccountApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::AccountApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AccountApi' do
    it 'should create an instance of AccountApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::AccountApi)
    end
  end

  # unit tests for delete_payment_method
  # Delete payment method
  # Delete a non-default payment method
  # @param payment_method_id 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_payment_method test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_payment_method_0
  # Delete payment method
  # Delete a non-default payment method
  # @param payment_method_id 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_payment_method_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_payment_methods
  # Get payment methods
  # Get your payment methods
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_payment_methods test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_payment_methods_0
  # Get payment methods
  # Get your payment methods
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_payment_methods_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_tax
  # Get tax
  # Get your default card&#39;s sales tax percentage
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_tax test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_tax_0
  # Get tax
  # Get your default card&#39;s sales tax percentage
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_tax_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_me
  # Get own user
  # Get your user data
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_user_me test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_user_me_0
  # Get own user
  # Get your user data
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_user_me_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for revoke_oauth
  # Revoke OAuth
  # Revoke your Git OAuth permission
  # @param provider 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'revoke_oauth test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for revoke_oauth_0
  # Revoke OAuth
  # Revoke your Git OAuth permission
  # @param provider 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'revoke_oauth_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_payment_method
  # Update payment method
  # Select your default payment method to charge every billing cycle
  # @param payment_method_id 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'update_payment_method test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_payment_method_0
  # Update payment method
  # Select your default payment method to charge every billing cycle
  # @param payment_method_id 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'update_payment_method_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_user
  # Update user
  # Update your user data
  # @param [Hash] opts the optional parameters
  # @option opts [UNKNOWN_BASE_TYPE] :unknown_base_type 
  # @return [Object]
  describe 'update_user test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_user_0
  # Update user
  # Update your user data
  # @param [Hash] opts the optional parameters
  # @option opts [UNKNOWN_BASE_TYPE] :unknown_base_type 
  # @return [Object]
  describe 'update_user_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end