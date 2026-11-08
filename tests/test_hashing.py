import unittest

from hashing import generate_hash, compare_texts

class TestHashing(unittest.TestCase):

    def test_generate_hash(self):

        result = generate_hash("abc")

        expected = (
            "ba7816bf8f01cfea414140de5dae2223"
            "b00361a396177a9cb410ff61f20015ad"
        )

        self.assertEqual(result, expected)


    def test_identical_text(self):

        result = compare_texts("Hello", "Hello")
        self.assertTrue(result["match"])

    def test_different_text(self):

        result = compare_texts("Hello", "Hello!")

        self.assertFalse(result["match"])

    def test_empty_text(self):
        result = generate_hash("")

        self.assertEqual(len(result), 64)

    def test_invalid_input(self):

        with self.assertRaises(TypeError):
            generate_hash(123)

if __name__ == "__main__":
    unittest.main()