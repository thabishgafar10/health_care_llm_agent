const Sidebar = ({

  chats,

  activeChatId,

  setActiveChatId,

  createNewChat

}) => {

  const logout = () => {

    localStorage.removeItem(
      "health_user"
    )

    window.location.href = "/"
  }

  return (

    <div
      className="
        w-[300px]
        bg-[#171923]
        rounded-3xl
        p-5
        border
        border-[#2a2d3a]
        flex
        flex-col
      "
    >

      {/* Header */}

      <div>

        <h1
          className="
            text-2xl
            font-bold
          "
        >

          HealthMind AI

        </h1>

        <p
          className="
            text-gray-400
            text-sm
            mt-1
          "
        >

          Healthcare Agent Platform

        </p>

      </div>

      {/* New Chat */}

      <button

        onClick={createNewChat}

        className="
          mt-8
          w-full
          bg-blue-600
          hover:bg-blue-700
          transition
          p-4
          rounded-2xl
          font-semibold
        "
      >

        + New Chat

      </button>

      {/* Chat History */}

      <div className="mt-8 flex-1 overflow-y-auto">

        <p
          className="
            text-gray-400
            text-sm
            mb-4
          "
        >

          Recent Chats

        </p>

        <div className="space-y-3">

          {
            chats.map(chat => (

              <button

                key={chat.id}

                onClick={() =>
                  setActiveChatId(chat.id)
                }

                className={

                  activeChatId === chat.id

                  ? `
                    w-full
                    text-left
                    bg-blue-600
                    p-4
                    rounded-2xl
                    truncate
                  `

                  : `
                    w-full
                    text-left
                    bg-[#232734]
                    hover:bg-[#2d3345]
                    transition
                    p-4
                    rounded-2xl
                    truncate
                  `
                }
              >

                {chat.title}

              </button>
            ))
          }

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-6">

        <button

          onClick={logout}

          className="
            w-full
            bg-red-500
            hover:bg-red-600
            transition
            p-4
            rounded-2xl
            font-semibold
          "
        >

          Logout

        </button>

      </div>

    </div>
  )
}

export default Sidebar