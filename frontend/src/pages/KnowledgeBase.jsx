import {
  useEffect,
  useState
} from "react"

import API from "../services/api"

const KnowledgeBase = () => {

  const [documents, setDocuments] =
    useState([])

  useEffect(() => {

    fetchDocs()

  }, [])

  const fetchDocs = async () => {

    try {

      const response =
        await API.get(
          "/knowledge-base"
        )

      setDocuments(response.data)

    } catch (error) {

      console.error(error)
    }
  }

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

        Knowledge Base

      </h1>

      <p
        className="
          text-[#6b7280]
          mt-3
          text-lg
        "
      >

        AI-powered healthcare memory

      </p>

      <div
        className="
          mt-10
          space-y-5
        "
      >

        {
          documents.map((doc, index) => (

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
                  text-2xl
                  font-bold
                  text-[#1f2937]
                "
              >

                {doc.filename}

              </h2>

              <p
                className="
                  text-[#6b7280]
                  mt-3
                "
              >

                {doc.summary}

              </p>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default KnowledgeBase