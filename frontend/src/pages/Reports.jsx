import {
  useEffect,
  useState
} from "react"

import API from "../services/api"

const Reports = () => {

  const [reports, setReports] =
    useState([])

  useEffect(() => {

    fetchReports()

  }, [])

  const fetchReports = async () => {

    try {

      const response =
        await API.get("/reports")

      setReports(response.data)

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

        Medical Reports

      </h1>

      <p
        className="
          text-[#6b7280]
          mt-3
          text-lg
        "
      >

        AI-powered healthcare analysis

      </p>

      <div
        className="
          mt-10
          grid
          grid-cols-2
          gap-6
        "
      >

        {
          reports.map((report, index) => (

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

                {report.filename}

              </h2>

              <p
                className="
                  text-[#6b7280]
                  mt-4
                  leading-relaxed
                "
              >

                {report.summary}

              </p>

              <div className="mt-6">

                <h3
                  className="
                    font-semibold
                    text-[#1f2937]
                  "
                >

                  Risk Level

                </h3>

                <p
                  className="
                    text-[#69d2e7]
                    mt-2
                    font-medium
                  "
                >

                  {report.risk_level}

                </p>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Reports