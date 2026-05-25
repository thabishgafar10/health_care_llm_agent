import numpy as np

def generate_embedding(text: str):

    np.random.seed(len(text))

    embedding = np.random.rand(384)

    return embedding.tolist()