import {
  Link,
  useLocation
} from "react-router-dom"

const Navbar = () => {

  const location = useLocation()

  const navItems = [

    {
      label: "Chat",
      path: "/dashboard"
    },

    {
      label: "Reports",
      path: "/reports"
    },

    {
      label: "Knowledge Base",
      path: "/knowledge-base"
    },

    {
      label: "Insights",
      path: "/insights"
    },

    {
      label: "Tools",
      path: "/tools"
    }
  ]

  return (

    <div
      className="
        h-20
        bg-[#171923]
        border-b
        border-[#2a2d3a]
        flex
        items-center
        justify-between
        px-8
      "
    >

      {/* Logo */}

      <div>

        <h1
          className="
            text-2xl
            font-bold
            text-white
          "
        >

          HealthMind AI

        </h1>

      </div>

      {/* Navigation */}

      <div
        className="
          flex
          gap-3
        "
      >

        {
          navItems.map(item => (

            <Link

              key={item.path}

              to={item.path}

              className={

                location.pathname === item.path

                ? `
                  bg-blue-600
                  px-5
                  py-2
                  rounded-xl
                  text-white
                `

                : `
                  bg-[#232734]
                  hover:bg-[#2d3345]
                  transition
                  px-5
                  py-2
                  rounded-xl
                  text-gray-300
                `
              }
            >

              {item.label}

            </Link>
          ))
        }

      </div>

      {/* Logout */}

      <button

        onClick={() => {

          localStorage.removeItem(
            "health_user"
          )

          window.location.href = "/"
        }}

        className="
          bg-red-500
          hover:bg-red-600
          transition
          px-5
          py-2
          rounded-xl
          text-white
        "
      >

        Logout

      </button>

    </div>
  )
}

export default Navbar