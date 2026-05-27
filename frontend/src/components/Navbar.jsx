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
        bg-white
        border-b
        border-[#dbe4f0]
        flex
        items-center
        justify-between
        px-8
      "
    >

      {/* LOGO */}

      <h1
        className="
          text-3xl
          font-bold
          text-[#1f2937]
        "
      >

        HealthMind AI

      </h1>

      {/* NAV */}

      <div className="flex gap-3">

        {
          navItems.map(item => (

            <Link

              key={item.path}

              to={item.path}

              className={

                location.pathname === item.path

                ? `
                  bg-[#69d2e7]
                  text-white
                  px-5
                  py-2
                  rounded-2xl
                `

                : `
                  bg-[#f3f6fb]
                  hover:bg-[#e8eef7]
                  transition
                  text-[#1f2937]
                  px-5
                  py-2
                  rounded-2xl
                `
              }
            >

              {item.label}

            </Link>
          ))
        }

      </div>

      {/* LOGOUT */}

      <button

        onClick={() => {

          localStorage.removeItem(
            "health_user"
          )

          window.location.href = "/"
        }}

        className="
          bg-[#69d2e7]
          hover:bg-[#55c4da]
          transition
          px-5
          py-2
          rounded-2xl
          text-white
        "
      >

        Logout

      </button>

    </div>
  )
}

export default Navbar