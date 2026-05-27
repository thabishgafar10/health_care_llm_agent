const MessageBubble = ({

  role,

  content

}) => {

  const isUser =
    role === "user"

  return (

    <div
      className={

        isUser

        ? "flex justify-end"

        : "flex justify-start"
      }
    >

      <div
        className={

          isUser

          ? `
            max-w-[70%]
            bg-[#69d2e7]
            text-white
            px-5
            py-4
            rounded-[26px]
            shadow-sm
          `

          : `
            max-w-[78%]
            bg-white
            border
            border-[#dbe4f0]
            text-[#1f2937]
            px-6
            py-5
            rounded-[26px]
            shadow-sm
          `
        }
      >

        {/* LABEL */}

        <div
          className="
            text-xs
            font-semibold
            mb-3
            opacity-70
          "
        >

          {
            isUser
            ? "YOU"
            : "HEALTHMIND AI"
          }

        </div>

        {/* CONTENT */}

        <p
          className="
            whitespace-pre-wrap
            leading-8
            text-[15px]
          "
        >

          {content}

        </p>

      </div>

    </div>
  )
}

export default MessageBubble