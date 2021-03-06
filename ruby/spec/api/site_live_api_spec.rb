=begin
#Site Bay

#OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.4.0

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::SiteLiveApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'SiteLiveApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::SiteLiveApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of SiteLiveApi' do
    it 'should create an instance of SiteLiveApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::SiteLiveApi)
    end
  end

  # unit tests for add_mail_dns
  # Create Email DNS records
  # Automatically add the DNS records to your Nameserver configured site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'add_mail_dns test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for add_mail_dns_0
  # Create Email DNS records
  # Automatically add the DNS records to your Nameserver configured site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'add_mail_dns_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for change_dev_mode
  # Change HTTP Auth
  # Enable or disable HTTP Basic Authentication
  # @param fqdn 
  # @param value 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'change_dev_mode test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for change_dev_mode_0
  # Change HTTP Auth
  # Enable or disable HTTP Basic Authentication
  # @param fqdn 
  # @param value 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'change_dev_mode_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for clear_cache
  # Clear the cache
  # Purges the Cloudflare CDN cache for your site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'clear_cache test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for clear_cache_0
  # Clear the cache
  # Purges the Cloudflare CDN cache for your site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'clear_cache_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for commit_site_stage
  # Commit Stage Site
  # Sync the wp-content and database from your staging site to your live site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'commit_site_stage test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for commit_site_stage_0
  # Commit Stage Site
  # Sync the wp-content and database from your staging site to your live site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'commit_site_stage_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_email
  # Create Email
  # Create a custom email account
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [UserEmailCreate] :user_email_create 
  # @return [Object]
  describe 'create_email test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_email_0
  # Create Email
  # Create a custom email account
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [UserEmailCreate] :user_email_create 
  # @return [Object]
  describe 'create_email_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_external_path
  # Create External Path
  # Connect an external URL to your site on a subpath
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [ExternalPathCreate] :external_path_create 
  # @return [Object]
  describe 'create_external_path test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_external_path_0
  # Create External Path
  # Connect an external URL to your site on a subpath
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [ExternalPathCreate] :external_path_create 
  # @return [Object]
  describe 'create_external_path_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_site_live
  # Create a site
  # Create a new site by providing your domain and your site&#39;s WordPress details
  # @param [Hash] opts the optional parameters
  # @option opts [UNKNOWN_BASE_TYPE] :unknown_base_type 
  # @return [SiteLive]
  describe 'create_site_live test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_site_live_0
  # Create a site
  # Create a new site by providing your domain and your site&#39;s WordPress details
  # @param [Hash] opts the optional parameters
  # @option opts [UNKNOWN_BASE_TYPE] :unknown_base_type 
  # @return [SiteLive]
  describe 'create_site_live_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_site_stage
  # Create a Staging site
  # Create a staging site on which you can test changes
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [SiteStageCreate] :site_stage_create 
  # @return [Object]
  describe 'create_site_stage test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_site_stage_0
  # Create a Staging site
  # Create a staging site on which you can test changes
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [SiteStageCreate] :site_stage_create 
  # @return [Object]
  describe 'create_site_stage_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_tag
  # Create tag
  # Create a tag for organizational purposes for your site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [TagCreate] :tag_create 
  # @return [Tag]
  describe 'create_tag test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_tag_0
  # Create tag
  # Create a tag for organizational purposes for your site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [TagCreate] :tag_create 
  # @return [Tag]
  describe 'create_tag_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_dns_record
  # Delete DNS record
  # Delete a DNS record on your Nameserver configured site
  # @param dns_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_dns_record test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_dns_record_0
  # Delete DNS record
  # Delete a DNS record on your Nameserver configured site
  # @param dns_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_dns_record_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_email
  # Delete Email
  # Delete a custom email account
  # @param fqdn 
  # @param user_email_address 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_email test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_email_0
  # Delete Email
  # Delete a custom email account
  # @param fqdn 
  # @param user_email_address 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_email_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_external_path
  # Delete External Path
  # Delete the link between an external URL and your site
  # @param external_path_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_external_path test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_external_path_0
  # Delete External Path
  # Delete the link between an external URL and your site
  # @param external_path_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_external_path_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_site_live
  # Delete your live site
  # This permanently deletes your site, and its stage site if one exists
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_site_live test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_site_live_0
  # Delete your live site
  # This permanently deletes your site, and its stage site if one exists
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_site_live_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_site_stage
  # Delete Stage Site
  # Delete your staging site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_site_stage test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_site_stage_0
  # Delete Stage Site
  # Delete your staging site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'delete_site_stage_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_tag
  # Get a tag
  # Get a tag by its ID
  # @param tag_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Array<Tag>]
  describe 'delete_tag test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_tag_0
  # Get a tag
  # Get a tag by its ID
  # @param tag_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Array<Tag>]
  describe 'delete_tag_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for disable_firewall
  # Disable the firewall
  # Disable wp-login firewall
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'disable_firewall test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for disable_firewall_0
  # Disable the firewall
  # Disable wp-login firewall
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'disable_firewall_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for enable_firewall
  # Enable the firewall
  # Enable the wp-login firewall
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'enable_firewall test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for enable_firewall_0
  # Enable the firewall
  # Enable the wp-login firewall
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'enable_firewall_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_dns_records
  # Get DNS records
  # Get a nameserver configured site&#39;s DNS records
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_dns_records test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_dns_records_0
  # Get DNS records
  # Get a nameserver configured site&#39;s DNS records
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_dns_records_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_emails
  # Get Emails
  # Get all custom email accounts
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_emails test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_emails_0
  # Get Emails
  # Get all custom email accounts
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_emails_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_external_paths
  # Get External Paths
  # Get details about your site&#39;s external path configs
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_external_paths test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_external_paths_0
  # Get External Paths
  # Get details about your site&#39;s external path configs
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_external_paths_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_files_at_point
  # PIT Files
  # Get a list of wp-content files at a point in time
  # @param fqdn 
  # @param restore_point 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_files_at_point test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_files_at_point_0
  # PIT Files
  # Get a list of wp-content files at a point in time
  # @param fqdn 
  # @param restore_point 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_files_at_point_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_mail_dns
  # Get Required mail DNS records
  # Get the required records for our custom email service
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_mail_dns test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_mail_dns_0
  # Get Required mail DNS records
  # Get the required records for our custom email service
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_mail_dns_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_pit_restore
  # Get PIT Restore
  # Get the results of a site&#39;s restore to a previous point in time
  # @param pit_restore_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_pit_restore test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_pit_restore_0
  # Get PIT Restore
  # Get the results of a site&#39;s restore to a previous point in time
  # @param pit_restore_id 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_pit_restore_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_pit_restores
  # Get PIT Restores
  # Get all the results of a site&#39;s restores to a previous point in time
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_pit_restores test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_pit_restores_0
  # Get PIT Restores
  # Get all the results of a site&#39;s restores to a previous point in time
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_pit_restores_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_site_live
  # Get your live site
  # Get details about your live site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [SiteLive]
  describe 'get_site_live test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_site_live_0
  # Get your live site
  # Get details about your live site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [SiteLive]
  describe 'get_site_live_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_site_plan_usage
  # Get Site Plan Usage
  # Get your visits and storage for a site at a given interval
  # @param fqdn 
  # @param start 
  # @param _end 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_site_plan_usage test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_site_plan_usage_0
  # Get Site Plan Usage
  # Get your visits and storage for a site at a given interval
  # @param fqdn 
  # @param start 
  # @param _end 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'get_site_plan_usage_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_sites_live
  # Get your sites
  # Get details about all of your live sites
  # @param [Hash] opts the optional parameters
  # @return [Array<SiteLive>]
  describe 'get_sites_live test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_sites_live_0
  # Get your sites
  # Get details about all of your live sites
  # @param [Hash] opts the optional parameters
  # @return [Array<SiteLive>]
  describe 'get_sites_live_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_tags
  # Get tags
  # Get all the tags for your site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Array<Tag>]
  describe 'get_tags test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_tags_0
  # Get tags
  # Get all the tags for your site
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Array<Tag>]
  describe 'get_tags_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for modify_firewall
  # Modify the firewall
  # Add/Delete an IP from the wp-login firewall
  # @param fqdn 
  # @param ip_address 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :add_or_del 
  # @return [Object]
  describe 'modify_firewall test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for modify_firewall_0
  # Modify the firewall
  # Add/Delete an IP from the wp-login firewall
  # @param fqdn 
  # @param ip_address 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :add_or_del 
  # @return [Object]
  describe 'modify_firewall_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for restore_site
  # Create PIT Restore
  # Restore your site to a previous point in time, down to the minute
  # @param fqdn 
  # @param pit_restore_create 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'restore_site test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for restore_site_0
  # Create PIT Restore
  # Restore your site to a previous point in time, down to the minute
  # @param fqdn 
  # @param pit_restore_create 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'restore_site_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for shell_cmd_site_live
  # Execute shell command
  # Send a bash shell command to your site, such as a WP-CLI command
  # @param fqdn 
  # @param cmd 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :cwd 
  # @option opts [Boolean] :auto_track_dir 
  # @option opts [Boolean] :stage 
  # @return [Object]
  describe 'shell_cmd_site_live test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for shell_cmd_site_live_0
  # Execute shell command
  # Send a bash shell command to your site, such as a WP-CLI command
  # @param fqdn 
  # @param cmd 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :cwd 
  # @option opts [Boolean] :auto_track_dir 
  # @option opts [Boolean] :stage 
  # @return [Object]
  describe 'shell_cmd_site_live_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_dns_record
  # Update DNS record
  # Update a DNS record on your Nameserver configured site
  # @param fqdn 
  # @param dns_type 
  # @param dns_hostname 
  # @param dns_content 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :dns_id 
  # @option opts [Integer] :dns_priority 
  # @option opts [Integer] :dns_ttl 
  # @return [Object]
  describe 'update_dns_record test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_dns_record_0
  # Update DNS record
  # Update a DNS record on your Nameserver configured site
  # @param fqdn 
  # @param dns_type 
  # @param dns_hostname 
  # @param dns_content 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :dns_id 
  # @option opts [Integer] :dns_priority 
  # @option opts [Integer] :dns_ttl 
  # @return [Object]
  describe 'update_dns_record_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_email
  # Update Email
  # Update a custom email account
  # @param user_email_address 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [UserEmailUpdate] :user_email_update 
  # @return [Object]
  describe 'update_email test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_email_0
  # Update Email
  # Update a custom email account
  # @param user_email_address 
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @option opts [UserEmailUpdate] :user_email_update 
  # @return [Object]
  describe 'update_email_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_site_live
  # Update a site
  # Update a site&#39;s details
  # @param fqdn 
  # @param site_live_update 
  # @param [Hash] opts the optional parameters
  # @return [SiteLive]
  describe 'update_site_live test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_site_live_0
  # Update a site
  # Update a site&#39;s details
  # @param fqdn 
  # @param site_live_update 
  # @param [Hash] opts the optional parameters
  # @return [SiteLive]
  describe 'update_site_live_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for validate_mx_records
  # MX Validation
  # Check if your mail related DNS records are set up correctly
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'validate_mx_records test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for validate_mx_records_0
  # MX Validation
  # Check if your mail related DNS records are set up correctly
  # @param fqdn 
  # @param [Hash] opts the optional parameters
  # @return [Object]
  describe 'validate_mx_records_0 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
