import unittest

from app import app

class TestFlaskApp(unittest.TestCase):

    def setUp(self):

        self.client = app.test_client()

    def test_home_page(self):

        response = self.client.get("/")

        self.assertEqual(response.status_code, 200)

    def test_matching_text(self):

        response = self.client.post("/compare", json={
            "original_text": "Hello",
            "modified_text": "Hello"
        })

        data = response.get_json()

        self.assertEqal(response.status_code, 200)
        self.assertTrue(data["match"])

    def test_modified_text(self):

        response = self.client.post("/compare", json={
            "original_text": "Hello",
            "modified_text": "Hello!"
        })

        data = response.get_json()

        self.assertEqual(response.status_code, 200)
        self.assertFalse(data["match"])

    def test_missing_input(self):

        response = self.client.post("/compare", json={
            "original_text": "Hello"

        })

        self.assertEqual(response.status_code, 400)

    def test_invalid_input(self):

        response = self.client.post(
            "/compare",
            data="invalid data",
            content_type="application/json"
        )

        self.assertEqual(response.status_code, 400)

if __name__ == "__main__":

    unittest.main()