import { BrowserRouter, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="container py-5">
        <header className="p-4 mb-4 border rounded bg-light">
          <h1 className="display-6 fw-bold">OctoFit Tracker</h1>
          <p className="lead mb-0">
            A modern multi-tier fitness platform for logging activities, managing teams,
            and climbing the leaderboard.
          </p>
        </header>

        <nav className="nav nav-pills mb-4">
          <NavLink className="nav-link" to="/">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" to="/activities">
            Activities
          </NavLink>
          <NavLink className="nav-link" to="/teams">
            Teams
          </NavLink>
        </nav>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h5">Ready to track your progress?</h2>
                <p className="card-text">
                  Start by logging workouts, joining teams, and watching your fitness
                  goals come to life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h5">Backend status</h2>
                <p className="card-text">
                  The API tier will run on port 8000 and communicate with MongoDB on port
                  27017.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
