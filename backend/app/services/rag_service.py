import chromadb

from app.services.embedding_service import (
    generate_embedding
)

client = chromadb.Client()

collection = client.create_collection(
    name="medical_knowledge"
)


def chunk_text(
    text,
    chunk_size=500
):

    chunks = []

    for i in range(
        0,
        len(text),
        chunk_size
    ):

        chunks.append(
            text[i:i + chunk_size]
        )

    return chunks


def add_document(text: str):

    chunks = chunk_text(text)

    for index, chunk in enumerate(chunks):

        embedding = generate_embedding(chunk)

        collection.add(

            documents=[chunk],

            embeddings=[embedding],

            ids=[f"doc_{index}"]
        )


def retrieve_context(query: str):

    query_embedding = generate_embedding(query)

    results = collection.query(

        query_embeddings=[query_embedding],

        n_results=3
    )

    contexts = results["documents"][0]

    combined_context = "\n".join(contexts)

    return combined_context