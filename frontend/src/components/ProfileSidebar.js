import React from 'react';
import { FaUserCircle, FaCalendarAlt, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake, FaHeartbeat } from 'react-icons/fa';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 300px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const UserInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Avatar = styled(FaUserCircle)`
  font-size: 80px;
  color: #007bff;
  margin-bottom: 10px;
`;

const UserName = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const UserDetails = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const HealthScore = styled.p`
  font-size: 1.2rem;
  color: #28a745;
  font-weight: bold;
  margin: 10px 0;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AppointmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AppointmentItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfileSidebar = () => {
  return (
    <ProfileContainer>
      <UserInfo>
        <Avatar />
        <UserName>Emma Stratton</UserName>
        <UserDetails>
          <FaBirthdayCake /> January 15, 1985
        </UserDetails>
        <UserDetails>
          <FaEnvelope /> emma.stratton@example.com
        </UserDetails>
        <UserDetails>
          <FaPhone /> +1 (555) 123-4567
        </UserDetails>
        <UserDetails>
          <FaMapMarkerAlt /> 1234 Elm Street, Springfield, USA
        </UserDetails>
        <HealthScore>
          <FaHeartbeat /> Health Score: 89%
        </HealthScore>
      </UserInfo>
      <Section>
        <SectionTitle>
          <FaCalendarAlt />
          Upcoming Appointments
        </SectionTitle>
        <AppointmentList>
          <AppointmentItem>
            <FaCheckCircle color="#28a745" />
            General Checkup - Mar 10
          </AppointmentItem>
          <AppointmentItem>
            <FaCheckCircle color="#28a745" />
            Blood Test - Mar 15
          </AppointmentItem>
          <AppointmentItem>
            <FaCheckCircle color="#28a745" />
            Dental Cleaning - Apr 5
          </AppointmentItem>
        </AppointmentList>
      </Section>
      <Section>
        <SectionTitle>
          <FaHeartbeat />
          Recent Activities
        </SectionTitle>
        <AppointmentList>
          <AppointmentItem>
            <FaCheckCircle color="#28a745" />
            Vaccination - Feb 20
          </AppointmentItem>
          <AppointmentItem>
            <FaCheckCircle color="#28a745" />
            Annual Physical Exam - Jan 15
          </AppointmentItem>
        </AppointmentList>
      </Section>
    </ProfileContainer>
  );
};

export default ProfileSidebar;

