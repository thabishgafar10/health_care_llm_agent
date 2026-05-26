import {
  useState,
  useEffect
} from "react"

import API from "../services/api"

const useChat = () => {

  const getErrorMessage = (error) => {

    const detail =
      error.response?.data?.detail

    if (typeof detail === "string") {
      return detail
    }

    if (error.code === "ERR_NETWORK") {
      return "Cannot reach the backend. Make sure the FastAPI server is running on the URL in frontend/.env."
    }

    return "Something went wrong while getting the assistant response."
  }

  const [chats, setChats] = useState([])

  const [activeChatId, setActiveChatId] =
    useState(null)

  const [loading, setLoading] =
    useState(false)

  // LOAD CHATS

  useEffect(() => {

    const savedChats =
      localStorage.getItem(
        "health_chats"
      )

    if (savedChats) {

      const parsedChats =
        JSON.parse(savedChats)

      setChats(parsedChats)

      if (parsedChats.length > 0) {

        setActiveChatId(
          parsedChats[0].id
        )
      }

    } else {

      createNewChat()
    }

  }, [])

  // SAVE CHATS

  useEffect(() => {

    localStorage.setItem(

      "health_chats",

      JSON.stringify(chats)
    )

  }, [chats])

  // CREATE NEW CHAT

  const createNewChat = () => {

    const newChat = {

      id: Date.now(),

      title: "New Chat",

      messages: []
    }

    setChats(prev => [
      newChat,
      ...prev
    ])

    setActiveChatId(newChat.id)
  }

  // ACTIVE CHAT

  const activeChat = chats.find(
    chat => chat.id === activeChatId
  )

  // SEND MESSAGE

  const sendMessage = async (text) => {

    if (!text.trim()) return

    const userMessage = {

      role: "user",

      content: text
    }

    // UPDATE USER MESSAGE

    const updatedChats = chats.map(
      chat => {

        if (
          chat.id === activeChatId
        ) {

          return {

            ...chat,

            title:
              chat.messages.length === 0
                ? text.slice(0, 30)
                : chat.title,

            messages: [
              ...chat.messages,
              userMessage
            ]
          }
        }

        return chat
      }
    )

    setChats(updatedChats)

    setLoading(true)

    try {

      const response = await API.post(
        "/chat",
        {
          message: text
        }
      )

      const aiMessage = {

        role: "assistant",

        content:
          response.data.response
      }

      setChats(prev =>
        prev.map(chat => {

          if (
            chat.id === activeChatId
          ) {

            return {

              ...chat,

              messages: [
                ...chat.messages,
                aiMessage
              ]
            }
          }

          return chat
        })
      )

    } catch (error) {

      console.error(error)

      const aiMessage = {

        role: "assistant",

        content: getErrorMessage(error)
      }

      setChats(prev =>
        prev.map(chat => {

          if (
            chat.id === activeChatId
          ) {

            return {

              ...chat,

              messages: [
                ...chat.messages,
                aiMessage
              ]
            }
          }

          return chat
        })
      )

    } finally {

      setLoading(false)
    }
  }

  return {

    chats,

    activeChat,

    activeChatId,

    setActiveChatId,

    createNewChat,

    sendMessage,

    loading
  }
}

export default useChat
