"""
    Site Bay

    OpenAPI schema for the Agency plan. Access for only $99USD per month! Swagger docs available at https://my.sitebay.org/docs  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import unittest

import openapi_client
from openapi_client.api.migration_api import MigrationApi  # noqa: E501


class TestMigrationApi(unittest.TestCase):
    """MigrationApi unit test stubs"""

    def setUp(self):
        self.api = MigrationApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_migration(self):
        """Test case for create_migration

        Create a migration  # noqa: E501
        """
        pass

    def test_delete_migration(self):
        """Test case for delete_migration

        Delete Migration  # noqa: E501
        """
        pass

    def test_get_migrations(self):
        """Test case for get_migrations

        Get Migrations  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()