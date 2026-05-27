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

  deleteChat,

  loading

} = useChat()

  return (

    <div
      className="
        h-full
        bg-[#f5f7fb]
        flex
        gap-5
        p-5
      "
    >

      <Sidebar

        chats={chats}

        activeChatId={activeChatId}

        setActiveChatId={
          setActiveChatId
        }

        createNewChat={
          createNewChat
        }

        deleteChat={deleteChat}
        
      />

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