import unittest

class TestBooks(unittest.TestCase):

    def test_add_book(self):
        self.assertEqual(sum([2,2]), 5, "Should be 4")


if __name__ == '__main__':
    unittest.main()
