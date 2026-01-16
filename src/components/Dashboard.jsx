import React from 'react'
import '../styles/Dashboard.css'
import StatCard from './StatCard'

function Dashboard() {
  const stats = [
    { title: 'Total Patients', value: '1,245', icon: '👥' },
    { title: 'Appointments Today', value: '28', icon: '📅' },
    { title: 'Active Doctors', value: '12', icon: '👨‍⚕️' },
    { title: 'Emergency Cases', value: '5', icon: '🚨' },
  ]

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="dashboard-sections">
        <div className="section">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li>Patient John Doe checked in at 9:30 AM</li>
            <li>Dr. Sarah Smith completed consultation</li>
            <li>New appointment scheduled for tomorrow</li>
            <li>Lab results uploaded for patient ID 1089</li>
            <li>Medication reminder sent to 45 patients</li>
          </ul>
        </div>

        <div className="section">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-btn">Add Patient</button>
            <button className="action-btn">Schedule Appointment</button>
            <button className="action-btn">View Reports</button>
            <button className="action-btn">Settings</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
