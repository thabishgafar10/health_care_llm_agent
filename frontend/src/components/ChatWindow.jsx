import {
  useState,
  useEffect,
  useRef
} from "react"

import MessageBubble from "./MessageBubble"

const ChatWindow = ({
  messages,
  sendMessage,
  loading
}) => {

  const [input, setInput] = useState("")
  const safeMessages = Array.isArray(messages) ? messages : []

  const bottomRef = useRef(null)

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    })

  }, [messages])

  const handleSend = () => {

    if (!input.trim()) return

    sendMessage(input)

    setInput("")
  }

  const handleKeyDown = (e) => {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {

      e.preventDefault()

      handleSend()
    }
  }

  return (

    <div
      className="
        h-full
        bg-[#171923]
        rounded-3xl
        border
        border-[#2a2d3a]
        flex
        flex-col
      "
    >

      {/* Top Navbar */}

      <div
        className="
          p-5
          border-b
          border-[#2a2d3a]
          flex
          justify-between
          items-center
        "
      >

        <div>

          <h1 className="text-xl font-bold">

            AI Healthcare Assistant

          </h1>

          <p className="text-sm text-gray-400">

            RAG-powered medical intelligence

          </p>

        </div>

      </div>

      {/* Messages */}

      <div
        className="
          flex-1
          overflow-y-auto
          p-6
          space-y-4
        "
      >

        {
          safeMessages.map((msg, index) => (

            <MessageBubble
              key={index}
              role={msg.role}
              content={msg.content}
            />

          ))
        }

        {
          loading && (

            <div
              className="
                text-gray-400
                italic
              "
            >

              AI is thinking...

            </div>
          )
        }

        <div ref={bottomRef}></div>

      </div>

      {/* Input */}

      <div
        className="
          p-5
          border-t
          border-[#2a2d3a]
        "
      >

        <div className="flex gap-4">

          <textarea

            value={input}

            onChange={(e) =>
              setInput(e.target.value)
            }

            onKeyDown={handleKeyDown}

            placeholder="
Ask healthcare question...
            "

            rows={2}

            className="
              flex-1
              bg-[#232734]
              border
              border-[#2a2d3a]
              rounded-2xl
              p-4
              text-white
              outline-none
              resize-none
              focus:border-blue-500
            "
          />

          <button

            onClick={handleSend}

            className="
              px-8
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              transition
              font-semibold
            "
          >

            Send

          </button>

        </div>

      </div>

    </div>
  )
}

export default ChatWindow
