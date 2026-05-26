const Tools = () => {

  const tools = [

    {
      name: "Symptom Analyzer",
      description:
        "AI-powered healthcare symptom intelligence"
    },

    {
      name: "Report Summarizer",
      description:
        "Medical PDF summarization engine"
    },

    {
      name: "RAG Knowledge Search",
      description:
        "Semantic medical retrieval system"
    },

    {
      name: "Document Intelligence",
      description:
        "Healthcare document analysis pipeline"
    },

    {
      name: "Memory Retrieval",
      description:
        "Persistent healthcare chat memory"
    },

    {
      name: "Risk Predictor",
      description:
        "AI-generated healthcare risk analysis"
    }
  ]

  return (

    <div
      className="
        min-h-screen
        bg-[#0f1117]
        p-8
        text-white
      "
    >

      <h1
        className="
          text-5xl
          font-bold
        "
      >

        AI Agent Tools

      </h1>

      <p
        className="
          text-gray-400
          mt-3
        "
      >

        Intelligent healthcare workflows

      </p>

      <div
        className="
          grid
          grid-cols-3
          gap-6
          mt-12
        "
      >

        {
          tools.map(tool => (

            <div

              key={tool.name}

              className="
                bg-[#171923]
                border
                border-[#2a2d3a]
                p-6
                rounded-3xl
                hover:border-blue-500
                hover:scale-[1.02]
                transition
              "
            >

              <h2
                className="
                  text-2xl
                  font-semibold
                "
              >

                {tool.name}

              </h2>

              <p
                className="
                  text-gray-400
                  mt-4
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