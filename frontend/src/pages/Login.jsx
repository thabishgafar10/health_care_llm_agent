import {
  useState
} from "react"

import {
  useNavigate,
  Link
} from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

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

          Welcome Back

        </h1>

        <p
          className="
            text-gray-400
            mt-2
          "
        >

          Login to your AI workspace

        </p>

        <div className="mt-8 space-y-4">

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

            onClick={handleLogin}

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

            Login

          </button>

        </div>

        <p
          className="
            text-gray-400
            mt-6
            text-center
          "
        >

          Don't have an account?

          <Link
            to="/signup"
            className="
              text-blue-500
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