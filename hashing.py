
import hashlib


# Generate a SHA-256 hash from the text
def generate_hash(text):

    if not isinstance(text, str):
        raise TypeError("Please enter valid text")

    text_bytes = text.encode("utf-8")
    hash_value = hashlib.sha256(text_bytes)

    return hash_value.hexdigest()


# Compare two texts using SHA-256
def compare_texts(original_text, modified_text):

    original_hash = generate_hash(original_text)
    modified_hash = generate_hash(modified_text)

    if original_hash == modified_hash:
        match = True
    else:
        match = False

    result = {
        "original_hash": original_hash,
        "modified_hash": modified_hash,
        "match": match
    }

    return result
