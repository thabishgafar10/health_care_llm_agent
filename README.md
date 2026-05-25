# Healthcare AI Assistant

## Overview

Healthcare AI Assistant is a full-stack AI-powered healthcare chatbot that uses:

- FastAPI backend
- React frontend
- Groq LLM
- ChromaDB vector database
- RAG architecture
- PDF ingestion system

---

## Features

- AI healthcare chatbot
- PDF upload and analysis
- RAG pipeline
- Semantic retrieval
- Chat history persistence
- Markdown AI responses
- Smooth chat UI
- Dockerized architecture

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- Framer Motion

### Backend
- FastAPI
- Groq API
- ChromaDB
- PyPDF

---

## Project Structure

healthcare-ai/
│
├── backend/
├── frontend/
├── docker-compose.yml
└── README.md

---

## Backend Setup

cd backend

python -m venv env

env\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload

---

## Frontend Setup

cd frontend

npm install

npm run dev

---

## Docker Setup

docker compose up --build

---

## API Endpoints

### GET /

Root endpoint

### GET /health

Health check

### POST /chat

AI chat endpoint

### POST /upload-pdf

PDF upload endpoint

---

## Future Improvements

- Authentication
- Voice assistant
- OCR prescription scanning
- Cloud deployment
- Real embeddings
- Streaming responses

---

## Disclaimer

This project is for educational purposes only and should not be used as professional medical advice.