const tools = [

  {
    title: "Symptom Analyzer",
    description:
      "AI-powered healthcare symptom intelligence"
  },

  {
    title: "Report Summarizer",
    description:
      "Medical PDF summarization engine"
  },

  {
    title: "RAG Knowledge Search",
    description:
      "Semantic medical retrieval system"
  },

  {
    title: "Document Intelligence",
    description:
      "Healthcare document analysis pipeline"
  }
]

const Tools = () => {

  return (

    <div
      className="
        min-h-screen
        bg-[#f5f7fb]
        p-8
      "
    >

      <h1
        className="
          text-5xl
          font-bold
          text-[#1f2937]
        "
      >

        AI Agent Tools

      </h1>

      <p
        className="
          text-[#6b7280]
          mt-3
          text-lg
        "
      >

        Intelligent healthcare workflows

      </p>

      <div
        className="
          grid
          grid-cols-2
          gap-6
          mt-10
        "
      >

        {
          tools.map((tool, index) => (

            <div

              key={index}

              className="
                bg-white
                border
                border-[#dbe4f0]
                rounded-3xl
                p-7
                shadow-sm
              "
            >

              <h2
                className="
                  text-3xl
                  font-bold
                  text-[#1f2937]
                "
              >

                {tool.title}

              </h2>

              <p
                className="
                  text-[#6b7280]
                  mt-4
                  text-lg
                "
              >

                {tool.description}

              </p>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Tools