import React, { useState } from 'react'
import '../styles/PatientList.css'
import PatientProfile from './PatientProfile'

function PatientList({ searchTerm }) {
  const [patients] = useState([
    { id: 'P001', name: 'John Doe', age: 45, bloodType: 'O+', lastVisit: '2025-01-10', status: 'Active' },
    { id: 'P002', name: 'Jane Smith', age: 32, bloodType: 'A-', lastVisit: '2025-01-14', status: 'Active' },
    { id: 'P003', name: 'Michael Johnson', age: 58, bloodType: 'B+', lastVisit: '2025-01-08', status: 'Inactive' },
    { id: 'P004', name: 'Emily Wilson', age: 27, bloodType: 'AB+', lastVisit: '2025-01-15', status: 'Active' },
    { id: 'P005', name: 'Robert Brown', age: 52, bloodType: 'O-', lastVisit: '2025-01-09', status: 'Active' },
  ])

  const [selectedPatient, setSelectedPatient] = useState(null)

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (selectedPatient) {
    return (
      <PatientProfile
        patient={patients.find((p) => p.id === selectedPatient)}
        onBack={() => setSelectedPatient(null)}
      />
    )
  }

  return (
    <div className="patient-list">
      <h2>Patient Records</h2>
      <p className="results-count">
        {filteredPatients.length} {filteredPatients.length === 1 ? 'patient' : 'patients'} found
      </p>

      <div className="table-responsive">
        <table className="patient-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Blood Type</th>
              <th>Last Visit</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="patient-row">
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.bloodType}</td>
                <td>{patient.lastVisit}</td>
                <td>
                  <span className={`status-badge ${patient.status.toLowerCase()}`}>
                    {patient.status}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedPatient(patient.id)}
                    aria-label={`View profile for ${patient.name}`}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PatientList
