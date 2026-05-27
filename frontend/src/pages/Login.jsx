import {
  useState
} from "react"

import {
  useNavigate,
  Link
} from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const handleLogin = () => {

    if (!email || !password) {

      alert("Fill all fields")

      return
    }

    localStorage.setItem(

      "health_user",

      JSON.stringify({
        email
      })
    )

    navigate("/dashboard")
  }

  return (

    <div
      className="
        h-screen
        flex
        items-center
        justify-center
        bg-[#f5f7fb]
      "
    >

      <div
        className="
          w-[430px]
          bg-white
          p-10
          rounded-[32px]
          border
          border-[#dbe4f0]
          shadow-sm
        "
      >

        {/* LOGO */}

        <div className="mb-8">

          <h1
            className="
              text-4xl
              font-bold
              text-[#1f2937]
            "
          >

            HealthMind AI

          </h1>

          <p
            className="
              text-[#6b7280]
              mt-3
              text-lg
            "
          >

            Your intelligent healthcare companion

          </p>

        </div>

        {/* TITLE */}

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-[#1f2937]
            "
          >

            Welcome Back

          </h2>

          <p
            className="
              text-[#6b7280]
              mt-2
            "
          >

            Login to continue your healthcare journey

          </p>

        </div>

        {/* FORM */}

        <div className="mt-8 space-y-5">

          <input

            type="email"

            placeholder="Enter your email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            className="
              w-full
              p-5
              rounded-2xl
              bg-[#f3f6fb]
              border
              border-[#dbe4f0]
              text-[#1f2937]
              outline-none
              placeholder:text-[#9ca3af]
            "
          />

          <input

            type="password"

            placeholder="Enter your password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            className="
              w-full
              p-5
              rounded-2xl
              bg-[#f3f6fb]
              border
              border-[#dbe4f0]
              text-[#1f2937]
              outline-none
              placeholder:text-[#9ca3af]
            "
          />

          <button

            onClick={handleLogin}

            className="
              w-full
              bg-[#69d2e7]
              hover:bg-[#55c4da]
              transition
              p-5
              rounded-2xl
              font-semibold
              text-white
              text-lg
            "
          >

            Login

          </button>

        </div>

        {/* FOOTER */}

        <p
          className="
            text-[#6b7280]
            mt-8
            text-center
          "
        >

          Don't have an account?

          <Link

            to="/signup"

            className="
              text-[#69d2e7]
              font-semibold
              ml-2
            "
          >

            Signup

          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login