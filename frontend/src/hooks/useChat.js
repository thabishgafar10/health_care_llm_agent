import {
  useEffect,
  useState
} from "react"

import API from "../services/api"

const useChat = () => {

  // LOAD SAVED CHATS

  const savedChats = JSON.parse(

    localStorage.getItem(
      "healthmind_chats"
    )

  ) || [

    {
      id: 1,

      title: "New Chat",

      messages: []
    }
  ]

  // STATES

  const [chats, setChats] =
    useState(savedChats)

  const [activeChatId,
    setActiveChatId] =
    useState(savedChats[0].id)

  const [loading,
    setLoading] =
    useState(false)

  // SAVE TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(

      "healthmind_chats",

      JSON.stringify(chats)
    )

  }, [chats])

  // ACTIVE CHAT

  const activeChat =
    chats.find(

      chat =>
        chat.id === activeChatId
    )

  // CREATE NEW CHAT

  const createNewChat = () => {

    const newChat = {

      id: Date.now(),

      title: `Chat ${chats.length + 1}`,

      messages: []
    }

    setChats([
      newChat,
      ...chats
    ])

    setActiveChatId(
      newChat.id
    )
  }

  // SEND MESSAGE

  const sendMessage = async (
    text
  ) => {

    if (!text.trim()) return

    // USER MESSAGE

    const userMessage = {

      role: "user",

      content: text
    }

    // UPDATE CHAT

    const updatedChats =
      chats.map(chat => {

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
      })

    setChats(updatedChats)

    setLoading(true)

    try {

      // API CALL

      const response =
        await API.post(

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

      // UPDATE WITH AI RESPONSE

      const finalChats =
        updatedChats.map(chat => {

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

      setChats(finalChats)

    } catch (error) {

      console.error(error)

      const errorMessage = {

        role: "assistant",

        content:
          "Something went wrong while contacting the AI system."
      }

      const finalChats =
        updatedChats.map(chat => {

          if (
            chat.id === activeChatId
          ) {

            return {

              ...chat,

              messages: [

                ...chat.messages,

                errorMessage
              ]
            }
          }

          return chat
        })

      setChats(finalChats)

    } finally {

      setLoading(false)
    }
  }

  const deleteChat = (chatId) => {

  const filteredChats = chats.filter(

    chat => chat.id !== chatId
  )

  // PREVENT EMPTY STATE

  if (filteredChats.length === 0) {

    const defaultChat = {

      id: Date.now(),

      title: "New Chat",

      messages: []
    }

    setChats([defaultChat])

    setActiveChatId(
      defaultChat.id
    )

    return
  }

  setChats(filteredChats)

  // HANDLE ACTIVE CHAT

  if (activeChatId === chatId) {

    setActiveChatId(
      filteredChats[0].id
    )
  }
}

return {

  chats,

  activeChat,

  activeChatId,

  setActiveChatId,

  createNewChat,

  sendMessage,

  deleteChat,

  loading
}
}

export default useChat