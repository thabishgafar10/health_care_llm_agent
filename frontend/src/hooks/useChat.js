import { useState, useEffect } from "react"

import API from "../services/api"

const useChat = () => {

  const [messages, setMessages] = useState(() => {
    const savedHistory = localStorage.getItem(
      "chat_history"
    )

    if (!savedHistory) return []

    try {
      const parsedHistory = JSON.parse(savedHistory)

      return Array.isArray(parsedHistory) ? parsedHistory : []
    } catch {
      return []
    }
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    localStorage.setItem(
      "chat_history",
      JSON.stringify(messages)
    )

  }, [messages])

  const sendMessage = async (text) => {

    const messageText = text.trim()

    if (!messageText) return

    const userMessage = {
      role: "user",
      content: messageText
    }

    setMessages(prev => [
      ...prev,
      userMessage
    ])

    setLoading(true)

    try {

      const response = await API.post(
        "/chat",
        {
          message: messageText
        }
      )

      const aiMessage = {
        role: "assistant",
        content: response.data?.response || "No response received."
      }

      setMessages(prev => [
        ...prev,
        aiMessage
      ])

    } catch (error) {

      console.error(error)

      const errorMessage = {
        role: "assistant",
        content: "Something went wrong."
      }

      setMessages(prev => [
        ...prev,
        errorMessage
      ])

    } finally {

      setLoading(false)
    }
  }

  return {
    messages,
    sendMessage,
    loading
  }
}

export default useChat
