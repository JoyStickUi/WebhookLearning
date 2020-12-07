import unittest
import os
from selenium import webdriver

class TestMySite(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_method(self):
        os.replace(os.path.join(".", "WebhookLearning", "views"), os.path.join("..", "views"))

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
