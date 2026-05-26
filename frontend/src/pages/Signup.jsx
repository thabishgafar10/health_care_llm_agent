import {
  useState
} from "react"

import {
  useNavigate,
  Link
} from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const handleSignup = () => {

    if (
      !name ||
      !email ||
      !password
    ) {

      alert("Fill all fields")

      return
    }

    localStorage.setItem(

      "health_user",

      JSON.stringify({
        name,
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
        bg-[#0f1117]
      "
    >

      <div
        className="
          w-[400px]
          bg-[#171923]
          p-8
          rounded-3xl
          border
          border-[#2a2d3a]
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >

          Create Account

        </h1>

        <p
          className="
            text-gray-400
            mt-2
          "
        >

          Join the Healthcare AI Platform

        </p>

        <div className="mt-8 space-y-4">

          <input

            type="text"

            placeholder="Full Name"

            value={name}

            onChange={(e) =>
              setName(e.target.value)
            }

            className="
              w-full
              p-4
              rounded-2xl
              bg-[#232734]
              border
              border-[#2a2d3a]
              text-white
              outline-none
            "
          />

          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            className="
              w-full
              p-4
              rounded-2xl
              bg-[#232734]
              border
              border-[#2a2d3a]
              text-white
              outline-none
            "
          />

          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            className="
              w-full
              p-4
              rounded-2xl
              bg-[#232734]
              border
              border-[#2a2d3a]
              text-white
              outline-none
            "
          />

          <button

            onClick={handleSignup}

            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              transition
              p-4
              rounded-2xl
              font-semibold
              text-white
            "
          >

            Create Account

          </button>

        </div>

        <p
          className="
            text-gray-400
            mt-6
            text-center
          "
        >

          Already have an account?

          <Link
            to="/"
            className="
              text-blue-500
              ml-2
            "
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  )
}

export default Signup