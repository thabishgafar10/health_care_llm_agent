import chromadb

from app.services.embedding_service import (
    generate_embedding
)

# CHROMA CLIENT

client = chromadb.Client()

collection = client.get_or_create_collection(
    name="medical_documents"
)

# CHUNKING

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

# ADD DOCUMENT

def add_document(text: str):

    chunks = chunk_text(text)

    for index, chunk in enumerate(chunks):

        embedding = generate_embedding(chunk)

        collection.add(

            documents=[chunk],

            embeddings=[embedding],

            ids=[f"doc_{index}"]
        )

# QUERY RAG

def query_rag(query: str):

    embedding = generate_embedding(query)

    results = collection.query(

        query_embeddings=[embedding],

        n_results=3
    )

    documents = results.get(
        "documents",
        [[]]
    )[0]

    return "\n".join(documents)