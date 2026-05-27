import {
  useEffect,
  useState
} from "react"

import API from "../services/api"

const Insights = () => {

  const [stats, setStats] =
    useState(null)

  useEffect(() => {

    fetchStats()

  }, [])

  const fetchStats = async () => {

    try {

      const response =
        await API.get("/stats")

      setStats(response.data)

    } catch (error) {

      console.error(error)
    }
  }

  if (!stats) {

    return null
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

        AI Insights

      </h1>

      <p
        className="
          text-[#6b7280]
          mt-3
          text-lg
        "
      >

        Healthcare intelligence analytics

      </p>

      <div
        className="
          grid
          grid-cols-4
          gap-6
          mt-10
        "
      >

        <Card
          title="Reports Uploaded"
          value={stats.reports_uploaded}
        />

        <Card
          title="Conditions Detected"
          value={stats.conditions_detected}
        />

        <Card
          title="Medical Entities"
          value={stats.medical_entities}
        />

        <Card
          title="Documents Processed"
          value={stats.documents_processed}
        />

      </div>

    </div>
  )
}

const Card = ({
  title,
  value
}) => (

  <div
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
        text-5xl
        font-bold
        text-[#1f2937]
      "
    >

      {value}

    </h2>

    <p
      className="
        text-[#6b7280]
        mt-4
      "
    >

      {title}

    </p>

  </div>
)

export default Insights