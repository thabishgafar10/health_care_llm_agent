const Sidebar = ({

  chats,

  activeChatId,

  setActiveChatId,

  createNewChat,

  deleteChat

}) => {

  return (

    <div
      className="
        w-[320px]
        bg-white
        rounded-3xl
        border
        border-[#dbe4f0]
        p-6
        flex
        flex-col
      "
    >

      {/* HEADER */}

      <div>

        <h1
          className="
            text-4xl
            font-bold
            text-[#1f2937]
          "
        >

          HealthMind AI

        </h1>

        <p
          className="
            text-[#6b7280]
            mt-2
          "
        >

          Healthcare AI Companion

        </p>

      </div>

      {/* NEW CHAT */}

      <button

        onClick={createNewChat}

        className="
          mt-8
          bg-[#69d2e7]
          hover:bg-[#55c4da]
          transition
          text-white
          py-4
          rounded-2xl
          text-lg
          font-semibold
        "
      >

        + New Chat

      </button>

      {/* CHAT LIST */}

      <div className="mt-10 flex-1 overflow-y-auto">

        <h2
          className="
            text-[#6b7280]
            font-semibold
            mb-4
          "
        >

          Recent Chats

        </h2>

        <div className="space-y-3">

          {
            chats.map(chat => (

              <div

                key={chat.id}

                className={

                  activeChatId === chat.id

                  ? `
                    flex
                    items-center
                    justify-between
                    bg-[#69d2e7]
                    text-white
                    p-4
                    rounded-2xl
                  `

                  : `
                    flex
                    items-center
                    justify-between
                    bg-[#f3f6fb]
                    hover:bg-[#e8eef7]
                    transition
                    text-[#1f2937]
                    p-4
                    rounded-2xl
                  `
                }
              >

                {/* CHAT TITLE */}

                <button

                  onClick={() =>
                    setActiveChatId(chat.id)
                  }

                  className="
                    flex-1
                    text-left
                    truncate
                  "
                >

                  {chat.title}

                </button>

                {/* DELETE */}

                <button

                  onClick={() =>
                    deleteChat(chat.id)
                  }

                  className="
                    ml-3
                    opacity-70
                    hover:opacity-100
                    transition
                  "
                >

                  ✕

                </button>

              </div>
            ))
          }

        </div>

      </div>

      {/* FOOTER */}

      <div
        className="
          pt-6
          border-t
          border-[#dbe4f0]
        "
      >

        <p
          className="
            text-[#9ca3af]
            text-sm
            text-center
          "
        >

          AI-powered healthcare assistant

        </p>

      </div>

    </div>
  )
}

export default Sidebar