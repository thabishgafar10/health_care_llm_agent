import Sidebar from "../components/Sidebar"

import ChatWindow from "../components/ChatWindow"

import useChat from "../hooks/useChat"

const Home = () => {

  const {
    messages,
    sendMessage,
    loading
  } = useChat()

  return (

    <div
      className="
        h-screen
        bg-[#0f1117]
        flex
        p-4
        gap-4
      "
    >

      <Sidebar />

      <div className="flex-1">

        <ChatWindow
          messages={messages}
          sendMessage={sendMessage}
          loading={loading}
        />

      </div>

    </div>
  )
}

export default Home