import {
  Routes,
  Route
} from "react-router-dom"

import LandingPage from "./pages/LandingPage"

import Login from "./pages/Login"

import Signup from "./pages/Signup"

import Dashboard from "./pages/Dashboard"

import Reports from "./pages/Reports"

import KnowledgeBase from "./pages/KnowledgeBase"

import Insights from "./pages/Insights"

import Tools from "./pages/Tools"

import ProtectedRoute from "./layouts/ProtectedRoute"

import MainLayout from "./layouts/MainLayout"

function App() {

  return (

    <Routes>

      {/* LANDING PAGE */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* AUTH */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* PROTECTED PLATFORM */}

      <Route

        element={

          <ProtectedRoute>

            <MainLayout />

          </ProtectedRoute>
        }
      >

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/knowledge-base"
          element={<KnowledgeBase />}
        />

        <Route
          path="/insights"
          element={<Insights />}
        />

        <Route
          path="/tools"
          element={<Tools />}
        />

      </Route>

    </Routes>
  )
}

export default App