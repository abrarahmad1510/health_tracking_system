import { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaBriefcaseMedical, FaNotesMedical } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="profile">
      <div className="profile-header">
        <FaUserCircle className="profile-pic" />
        <h1>John Doe</h1>
        <p className="profile-subtitle">Age: 45 | Patient ID: PT-12345</p>
      </div>
      <div className="profile-tabs">
        <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? 'active' : ''}>
          Overview
        </button>
        <button onClick={() => setActiveTab('medicalHistory')} className={activeTab === 'medicalHistory' ? 'active' : ''}>
          Medical History
        </button>
        <button onClick={() => setActiveTab('appointments')} className={activeTab === 'appointments' ? 'active' : ''}>
          Appointments
        </button>
        <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active' : ''}>
          Contact Info
        </button>
      </div>
      <div className="profile-content">
        {activeTab === 'overview' && (
          <div>
            <h2>Patient Overview</h2>
            <p><FaBirthdayCake /> <strong>Date of Birth:</strong> January 15, 1978</p>
            <p><FaBriefcaseMedical /> <strong>Primary Physician:</strong> Dr. Jane Smith</p>
            <p><FaNotesMedical /> <strong>Known Allergies:</strong> Penicillin, Peanuts</p>
            <p><FaMapMarkerAlt /> <strong>Address:</strong> 1234 Elm Street, Springfield, USA</p>
          </div>
        )}
        {activeTab === 'medicalHistory' && (
          <div>
            <h2>Medical History</h2>
            <ul>
              <li>Hypertension - Diagnosed in 2010</li>
              <li>Type 2 Diabetes - Diagnosed in 2015</li>
              <li>Appendectomy - Performed in 2005</li>
              <li>Annual Physical Exam - Last conducted in March 2023</li>
            </ul>
          </div>
        )}
        {activeTab === 'appointments' && (
          <div>
            <h2>Upcoming Appointments</h2>
            <ul>
              <li>Cardiology Consultation - July 20, 2023 at 10:00 AM</li>
              <li>Diabetes Management Session - August 5, 2023 at 2:00 PM</li>
              <li>Annual Physical Exam - September 15, 2023 at 9:00 AM</li>
            </ul>
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <h2>Contact Information</h2>
            <p><FaEnvelope /> <strong>Email:</strong> john.doe@example.com</p>
            <p><FaPhone /> <strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><FaMapMarkerAlt /> <strong>Address:</strong> 1234 Elm Street, Springfield, USA</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

