const Reports = () => {

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

        Medical Reports

      </h1>

      <p
        className="
          text-gray-400
          mt-2
        "
      >

        AI-powered report analysis

      </p>

      <div
        className="
          grid
          grid-cols-3
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

          <h2 className="text-xl font-semibold">

            Blood Report

          </h2>

          <p className="text-gray-400 mt-3">

            AI detected elevated glucose levels.

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

          <h2 className="text-xl font-semibold">

            Kidney Analysis

          </h2>

          <p className="text-gray-400 mt-3">

            AI identified mild abnormalities.

          </p>

        </div>

      </div>

    </div>
  )
}

export default Reports