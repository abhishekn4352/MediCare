import React from 'react'
import '../styles/PatientProfile.css'

function PatientProfile({ patient, onBack }) {
  return (
    <div className="patient-profile">
      <button className="back-btn" onClick={onBack} aria-label="Go back">
        ← Back
      </button>

      <div className="profile-header">
        <div className="profile-avatar">{patient.name.charAt(0)}</div>
        <div className="profile-info">
          <h2>{patient.name}</h2>
          <p className="patient-id">ID: {patient.id}</p>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-section">
          <h3>Basic Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Age</label>
              <p>{patient.age} years</p>
            </div>
            <div className="info-item">
              <label>Blood Type</label>
              <p>{patient.bloodType}</p>
            </div>
            <div className="info-item">
              <label>Status</label>
              <p>
                <span className={`status-badge ${patient.status.toLowerCase()}`}>
                  {patient.status}
                </span>
              </p>
            </div>
            <div className="info-item">
              <label>Last Visit</label>
              <p>{patient.lastVisit}</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Medical History</h3>
          <ul className="medical-list">
            <li>Hypertension - Controlled</li>
            <li>Type 2 Diabetes - Managed</li>
            <li>Allergies: Penicillin</li>
          </ul>
        </div>

        <div className="profile-section">
          <h3>Current Medications</h3>
          <ul className="medications-list">
            <li>Lisinopril 10mg - Once daily</li>
            <li>Metformin 500mg - Twice daily</li>
            <li>Aspirin 81mg - Once daily</li>
          </ul>
        </div>

        <div className="profile-actions">
          <button className="action-btn primary">Edit Patient</button>
          <button className="action-btn secondary">Print Records</button>
          <button className="action-btn secondary">Schedule Appointment</button>
        </div>
      </div>
    </div>
  )
}

export default PatientProfile
