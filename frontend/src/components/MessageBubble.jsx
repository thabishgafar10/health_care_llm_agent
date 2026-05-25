const MessageBubble = ({
  role,
  content
}) => {
  const messageContent = String(content ?? "")

  return (

    <div
      className={
        role === "user"
        ? "flex justify-end"
        : "flex justify-start"
      }
    >

      <div
        className={
          role === "user"

          ? `
            bg-blue-600
            text-white
            p-5
            rounded-3xl
            max-w-2xl
          `

          : `
            bg-[#1c1f2b]
            border
            border-[#2a2d3a]
            text-white
            p-5
            rounded-3xl
            max-w-2xl
          `
        }
      >

        <div className="whitespace-pre-wrap">

          {messageContent}

        </div>

      </div>

    </div>
  )
}

export default MessageBubble
