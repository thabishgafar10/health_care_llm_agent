const Insights = () => {

  return (

    <div
      className="
        p-8
        text-white
      "
    >

      <h1
        className="
          text-4xl
          font-bold
        "
      >

        AI Insights

      </h1>

      <p
        className="
          text-gray-400
          mt-2
        "
      >

        Platform intelligence analytics

      </p>

      <div
        className="
          grid
          grid-cols-4
          gap-6
          mt-10
        "
      >

        <div
          className="
            bg-[#171923]
            p-6
            rounded-3xl
            border
            border-[#2a2d3a]
          "
        >

          <h2 className="text-4xl font-bold">

            24

          </h2>

          <p className="text-gray-400 mt-2">

            Chats Created

          </p>

        </div>

        <div
          className="
            bg-[#171923]
            p-6
            rounded-3xl
            border
            border-[#2a2d3a]
          "
        >

          <h2 className="text-4xl font-bold">

            8

          </h2>

          <p className="text-gray-400 mt-2">

            PDFs Uploaded

          </p>

        </div>

      </div>

    </div>
  )
}

export default Insights