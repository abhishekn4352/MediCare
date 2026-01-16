import React, { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import PatientList from './components/PatientList'
import AppointmentList from './components/AppointmentList'
import SearchBar from './components/SearchBar'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>MediCare Dashboard</h1>
          <p>Healthcare Management System</p>
        </div>
      </header>

      <nav className="app-nav">
        <button
          className={`nav-button ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`nav-button ${activeTab === 'patients' ? 'active' : ''}`}
          onClick={() => setActiveTab('patients')}
        >
          Patients
        </button>
        <button
          className={`nav-button ${activeTab === 'appointments' ? 'active' : ''}`}
          onClick={() => setActiveTab('appointments')}
        >
          Appointments
        </button>
      </nav>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <main className="app-main">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'patients' && <PatientList searchTerm={searchTerm} />}
        {activeTab === 'appointments' && <AppointmentList searchTerm={searchTerm} />}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 MediCare Dashboard. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
