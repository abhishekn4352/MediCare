import React, { useState } from 'react'
import '../styles/AppointmentList.css'

function AppointmentList({ searchTerm }) {
  const [appointments] = useState([
    {
      id: 'A001',
      patientName: 'John Doe',
      doctor: 'Dr. Sarah Smith',
      date: '2025-01-20',
      time: '10:00 AM',
      type: 'Consultation',
      status: 'Scheduled',
    },
    {
      id: 'A002',
      patientName: 'Jane Smith',
      doctor: 'Dr. Michael Chen',
      date: '2025-01-20',
      time: '2:00 PM',
      type: 'Follow-up',
      status: 'Scheduled',
    },
    {
      id: 'A003',
      patientName: 'Emily Wilson',
      doctor: 'Dr. Sarah Smith',
      date: '2025-01-21',
      time: '9:00 AM',
      type: 'Check-up',
      status: 'Pending',
    },
    {
      id: 'A004',
      patientName: 'Robert Brown',
      doctor: 'Dr. James Wilson',
      date: '2025-01-15',
      time: '11:00 AM',
      type: 'Consultation',
      status: 'Completed',
    },
  ])

  const filteredAppointments = appointments.filter(
    (apt) =>
      apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      <p className="results-count">
        {filteredAppointments.length} {filteredAppointments.length === 1 ? 'appointment' : 'appointments'} found
      </p>

      <div className="table-responsive">
        <table className="appointment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((apt) => (
              <tr key={apt.id} className="appointment-row">
                <td>{apt.id}</td>
                <td>{apt.patientName}</td>
                <td>{apt.doctor}</td>
                <td>{apt.date}</td>
                <td>{apt.time}</td>
                <td>{apt.type}</td>
                <td>
                  <span className={`status-badge ${apt.status.toLowerCase().replace('-', '')}`}>
                    {apt.status}
                  </span>
                </td>
                <td>
                  <button className="action-link" aria-label={`Manage appointment ${apt.id}`}>
                    Manage
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

export default AppointmentList
