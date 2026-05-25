import UploadBox from "./UploadBox"

const Sidebar = () => {

  return (

    <div
      className="
        w-[260px]
        bg-[#171923]
        rounded-3xl
        p-5
        flex
        flex-col
        justify-between
        border
        border-[#2a2d3a]
      "
    >

      <div>

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-orange-500
            "
          ></div>

          <div>

            <h1
              className="
                text-xl
                font-bold
              "
            >

              HealthMind

            </h1>

            <p
              className="
                text-xs
                text-gray-400
              "
            >

              AI Healthcare Assistant

            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="mt-10 space-y-3">

          <button
            className="
              w-full
              bg-[#232734]
              hover:bg-[#2f3443]
              transition
              p-4
              rounded-2xl
              text-left
            "
          >

            AI Chat

          </button>

          <button
            className="
              w-full
              bg-[#232734]
              hover:bg-[#2f3443]
              transition
              p-4
              rounded-2xl
              text-left
            "
          >

            Medical Reports

          </button>

          <button
            className="
              w-full
              bg-[#232734]
              hover:bg-[#2f3443]
              transition
              p-4
              rounded-2xl
              text-left
            "
          >

            Upload PDFs

          </button>

        </div>

        {/* Upload */}

        <div className="mt-10">

          <UploadBox />

        </div>

      </div>

      {/* Bottom Card */}

      <div
        className="
          bg-gradient-to-br
          from-orange-500
          to-pink-500
          p-5
          rounded-3xl
        "
      >

        <p className="font-bold">

          AI Healthcare Platform

        </p>

        <p className="text-sm mt-2">

          Powered by RAG + Groq

        </p>

      </div>

    </div>
  )
}

export default Sidebar