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
        bg-white
        rounded-3xl
        border
        border-[#dbe4f0]
        flex
        flex-col
        overflow-hidden
      "
    >

      {/* HEADER */}

      <div
        className="
          px-6
          py-4
          border-b
          border-[#dbe4f0]
          bg-white
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h1
            className="
              text-2xl
              font-bold
              text-[#1f2937]
            "
          >

            HealthMind AI

          </h1>

          <p
            className="
              text-[#6b7280]
              text-sm
              mt-1
            "
          >

            Intelligent healthcare assistant

          </p>

        </div>

        <div
          className="
            bg-[#eef9fc]
            text-[#69d2e7]
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
          "
        >

          AI Active

        </div>

      </div>

      {/* CHAT AREA */}

      <div
        className="
          flex-1
          overflow-y-auto
          px-6
          py-5
          bg-[#f9fbfd]
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
              "
            >

              <div className="text-center">

                <h2
                  className="
                    text-4xl
                    font-bold
                    text-[#1f2937]
                  "
                >

                  Welcome Back

                </h2>

                <p
                  className="
                    text-[#6b7280]
                    mt-3
                    text-lg
                  "
                >

                  Upload reports and ask
                  medical questions

                </p>

              </div>

            </div>
          )
        }

        <div className="space-y-6">

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
                  bg-white
                  border
                  border-[#dbe4f0]
                  px-5
                  py-4
                  rounded-2xl
                  w-fit
                  text-[#6b7280]
                  shadow-sm
                "
              >

                AI is analyzing...

              </motion.div>
            )
          }

          <div ref={bottomRef} />

        </div>

      </div>

      {/* INPUT AREA */}

      <div
        className="
          px-6
          py-4
          border-t
          border-[#dbe4f0]
          bg-white
        "
      >

        <div
          className="
            flex
            items-end
            gap-3
          "
        >

          {/* UPLOAD */}

          <UploadBox />

          {/* TEXTAREA */}

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
              Ask anything about healthcare...
            "

            className="
              flex-1
              bg-[#f3f6fb]
              border
              border-[#dbe4f0]
              rounded-2xl
              px-5
              py-4
              text-[#1f2937]
              resize-none
              outline-none
              min-h-[60px]
              max-h-[140px]
            "
          />

          {/* SEND BUTTON */}

          <button

            onClick={handleSend}

            className="
              h-[60px]
              px-8
              bg-[#69d2e7]
              hover:bg-[#55c4da]
              transition
              rounded-2xl
              text-white
              font-semibold
              shadow-sm
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