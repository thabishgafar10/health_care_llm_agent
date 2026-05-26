import Navbar from "../components/Navbar"

import {
  Outlet
} from "react-router-dom"

const MainLayout = () => {

  return (

    <div
      className="
        h-screen
        bg-[#0f1117]
        text-white
      "
    >

      <Navbar />

      <div className="h-[calc(100vh-80px)]">

        <Outlet />

      </div>

    </div>
  )
}

export default MainLayout