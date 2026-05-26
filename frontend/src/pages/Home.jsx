import Sidebar from "../components/Sidebar"

import ChatWindow from "../components/ChatWindow"

import useChat from "../hooks/useChat"

const Home = () => {

  const {

    chats,

    activeChat,

    activeChatId,

    setActiveChatId,

    createNewChat,

    sendMessage,

    loading

  } = useChat()

  return (

    <div
      className="
        h-full
        bg-[#0f1117]
        flex
        gap-4
        p-4
      "
    >

      {/* LEFT SIDEBAR */}

      <Sidebar

        chats={chats}

        activeChatId={activeChatId}

        setActiveChatId={
          setActiveChatId
        }

        createNewChat={
          createNewChat
        }
      />

      {/* CHAT AREA */}

      <div className="flex-1">

        <ChatWindow

          messages={
            activeChat?.messages || []
          }

          sendMessage={sendMessage}

          loading={loading}
        />

      </div>

    </div>
  )
}

export default Home