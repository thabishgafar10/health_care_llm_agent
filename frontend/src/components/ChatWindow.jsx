import {
  useState,
  useRef,
  useEffect
} from "react"

import MessageBubble from "./MessageBubble"

import UploadBox from "./UploadBox"

import { motion } from "framer-motion"

const ChatWindow = ({

  messages,

  sendMessage,

  loading

}) => {

  const [input, setInput] =
    useState("")

  const bottomRef = useRef(null)

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    })

  }, [messages, loading])

  const handleSend = () => {

    if (!input.trim()) return

    sendMessage(input)

    setInput("")
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

      {/* HEADER */}

      <div
        className="
          p-6
          border-b
          border-[#2a2d3a]
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >

          AI Healthcare Assistant

        </h1>

        <p
          className="
            text-gray-400
            mt-1
          "
        >

          RAG-powered medical intelligence

        </p>

      </div>

      {/* CHAT MESSAGES */}

      <div
        className="
          flex-1
          overflow-y-auto
          p-6
          space-y-4
        "
      >

        {
          messages.length === 0 && (

            <div
              className="
                h-full
                flex
                items-center
                justify-center
                text-center
              "
            >

              <div>

                <h2
                  className="
                    text-4xl
                    font-bold
                    text-white
                  "
                >

                  Welcome to HealthMind AI

                </h2>

                <p
                  className="
                    text-gray-400
                    mt-4
                    text-lg
                  "
                >

                  Upload reports and ask
                  healthcare questions

                </p>

              </div>

            </div>
          )
        }

        {
          messages.map((msg, index) => (

            <MessageBubble

              key={index}

              role={msg.role}

              content={msg.content}
            />
          ))
        }

        {
          loading && (

            <motion.div

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              className="
                text-gray-400
                italic
              "
            >

              AI Agent is thinking...

            </motion.div>
          )
        }

        <div ref={bottomRef} />

      </div>

      {/* PDF UPLOAD */}

      <div className="px-6 pt-2">

        <UploadBox />

      </div>

      {/* INPUT */}

      <div
        className="
          p-6
          border-t
          border-[#2a2d3a]
          flex
          gap-4
        "
      >

        <textarea

          value={input}

          onChange={(e) =>
            setInput(e.target.value)
          }

          onKeyDown={(e) => {

            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {

              e.preventDefault()

              handleSend()
            }
          }}

          placeholder="
            Ask healthcare question...
          "

          className="
            flex-1
            bg-[#232734]
            border
            border-[#2a2d3a]
            rounded-2xl
            p-5
            text-white
            resize-none
            outline-none
            h-[80px]
          "
        />

        <button

          onClick={handleSend}

          className="
            w-[150px]
            bg-blue-600
            hover:bg-blue-700
            transition
            rounded-2xl
            text-white
            font-semibold
          "
        >

          Send

        </button>

      </div>

    </div>
  )
}

export default ChatWindow