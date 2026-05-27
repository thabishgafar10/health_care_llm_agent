import {
  Link
} from "react-router-dom"

const features = [

  {
    title: "Medical PDF Intelligence",
    description:
      "Upload healthcare reports and extract AI-powered medical insights instantly."
  },

  {
    title: "Healthcare AI Assistant",
    description:
      "Interact with an intelligent medical companion using contextual reasoning."
  },

  {
    title: "RAG-Powered Retrieval",
    description:
      "Semantic medical search powered by vector embeddings and retrieval systems."
  },

  {
    title: "Persistent Multi-Chat",
    description:
      "Maintain multiple healthcare conversations with contextual memory."
  },

  {
    title: "AI Health Recommendations",
    description:
      "Receive preventive measures and healthcare suggestions from uploaded reports."
  },

  {
    title: "Medical Analytics Dashboard",
    description:
      "Visualize extracted conditions, findings, risks, and healthcare intelligence."
  }
]

const LandingPage = () => {

  return (

    <div
      className="
        min-h-screen
        bg-[#f5f7fb]
      "
    >

      {/* NAVBAR */}

      <nav
        className="
          flex
          items-center
          justify-between
          px-10
          py-6
        "
      >

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

        </div>

        <div className="flex gap-4">

          <Link

            to="/login"

            className="
              px-6
              py-3
              rounded-2xl
              bg-white
              border
              border-[#dbe4f0]
              text-[#1f2937]
              hover:bg-[#eef3f8]
              transition
            "
          >

            Login

          </Link>

          <Link

            to="/signup"

            className="
              px-6
              py-3
              rounded-2xl
              bg-[#69d2e7]
              hover:bg-[#55c4da]
              transition
              text-white
              font-semibold
            "
          >

            Get Started

          </Link>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section
        className="
          px-10
          py-24
          grid
          grid-cols-2
          gap-16
          items-center
        "
      >

        {/* LEFT */}

        <div>

          <div
            className="
              inline-block
              bg-[#eef9fc]
              text-[#69d2e7]
              px-5
              py-2
              rounded-full
              font-medium
              mb-8
            "
          >

            LLM-Powered Healthcare Intelligence

          </div>

          <h1
            className="
              text-7xl
              font-bold
              leading-tight
              text-[#1f2937]
            "
          >

            AI Healthcare
            Intelligence
            Platform

          </h1>

          <p
            className="
              text-[#6b7280]
              text-xl
              mt-8
              leading-relaxed
            "
          >

            Analyze healthcare reports,
            extract medical insights,
            and interact with an
            intelligent AI healthcare assistant
            powered by RAG and LLM workflows.

          </p>

          <div
            className="
              flex
              gap-5
              mt-10
            "
          >

            <Link

              to="/signup"

              className="
                px-8
                py-5
                rounded-2xl
                bg-[#69d2e7]
                hover:bg-[#55c4da]
                transition
                text-white
                font-semibold
                text-lg
                shadow-sm
              "
            >

              Launch Platform

            </Link>

            <Link

              to="/login"

              className="
                px-8
                py-5
                rounded-2xl
                bg-white
                border
                border-[#dbe4f0]
                text-[#1f2937]
                hover:bg-[#eef3f8]
                transition
                text-lg
              "
            >

              Explore Features

            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="
            bg-white
            border
            border-[#dbe4f0]
            rounded-[40px]
            p-10
            shadow-sm
          "
        >

          <div className="space-y-5">

            {/* CHAT PREVIEW */}

            <div
              className="
                bg-[#69d2e7]
                text-white
                px-6
                py-5
                rounded-[28px]
                ml-auto
                max-w-[80%]
              "
            >

              What are the important findings in this report?

            </div>

            <div
              className="
                bg-[#eef3f8]
                border
                border-[#dbe4f0]
                px-6
                py-5
                rounded-[28px]
                max-w-[90%]
                text-[#1f2937]
              "
            >

              The uploaded report indicates elevated glucose levels and potential diabetes-related markers.

              Recommended measures:
              • Regular glucose monitoring
              • Reduce sugar intake
              • Maintain physical activity

            </div>

            {/* ANALYTICS */}

            <div
              className="
                grid
                grid-cols-3
                gap-4
                mt-8
              "
            >

              <div
                className="
                  bg-[#f5f7fb]
                  rounded-2xl
                  p-5
                  text-center
                "
              >

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-[#1f2937]
                  "
                >

                  24

                </h2>

                <p
                  className="
                    text-[#6b7280]
                    mt-2
                  "
                >

                  Reports

                </p>

              </div>

              <div
                className="
                  bg-[#f5f7fb]
                  rounded-2xl
                  p-5
                  text-center
                "
              >

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-[#1f2937]
                  "
                >

                  18

                </h2>

                <p
                  className="
                    text-[#6b7280]
                    mt-2
                  "
                >

                  Conditions

                </p>

              </div>

              <div
                className="
                  bg-[#f5f7fb]
                  rounded-2xl
                  p-5
                  text-center
                "

              >

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-[#1f2937]
                  "
                >

                  96%

                </h2>

                <p
                  className="
                    text-[#6b7280]
                    mt-2
                  "
                >

                  Accuracy

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        className="
          px-10
          py-20
        "
      >

        <div className="text-center">

          <h2
            className="
              text-5xl
              font-bold
              text-[#1f2937]
            "
          >

            AI Healthcare Capabilities

          </h2>

          <p
            className="
              text-[#6b7280]
              text-xl
              mt-5
            "
          >

            Modular AI workflows designed for healthcare intelligence

          </p>

        </div>

        <div
          className="
            grid
            grid-cols-3
            gap-6
            mt-16
          "
        >

          {
            features.map((feature, index) => (

              <div

                key={index}

                className="
                  bg-white
                  border
                  border-[#dbe4f0]
                  rounded-[32px]
                  p-8
                  shadow-sm
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#1f2937]
                  "
                >

                  {feature.title}

                </h3>

                <p
                  className="
                    text-[#6b7280]
                    mt-5
                    leading-relaxed
                  "
                >

                  {feature.description}

                </p>

              </div>
            ))
          }

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        className="
          px-10
          py-24
        "
      >

        <div className="text-center">

          <h2
            className="
              text-5xl
              font-bold
              text-[#1f2937]
            "
          >

            How It Works

          </h2>

        </div>

        <div
          className="
            grid
            grid-cols-4
            gap-6
            mt-16
          "
        >

          {
            [

              "Upload Medical Report",

              "AI Document Analysis",

              "Healthcare Intelligence Extraction",

              "Conversational Recommendations"

            ].map((step, index) => (

              <div

                key={index}

                className="
                  bg-white
                  border
                  border-[#dbe4f0]
                  rounded-[32px]
                  p-8
                  text-center
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    bg-[#69d2e7]
                    text-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    mx-auto
                  "
                >

                  {index + 1}

                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-[#1f2937]
                    mt-6
                  "
                >

                  {step}

                </h3>

              </div>
            ))
          }

        </div>

      </section>

      {/* CTA */}

      <section
        className="
          px-10
          py-24
        "
      >

        <div
          className="
            bg-[#69d2e7]
            rounded-[40px]
            p-16
            text-center
          "
        >

          <h2
            className="
              text-5xl
              font-bold
              text-white
            "
          >

            Start Your AI Healthcare Journey

          </h2>

          <p
            className="
              text-white/90
              text-xl
              mt-6
            "
          >

            Experience next-generation healthcare intelligence powered by AI.

          </p>

          <Link

            to="/signup"

            className="
              inline-block
              mt-10
              px-10
              py-5
              rounded-2xl
              bg-white
              text-[#69d2e7]
              font-bold
              text-lg
              hover:scale-105
              transition
            "
          >

            Get Started

          </Link>

        </div>

      </section>

    </div>
  )
}

export default LandingPage