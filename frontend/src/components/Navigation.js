import React from 'react';
import styled from 'styled-components';
import {
  FaTachometerAlt,
  FaHeartbeat,
  FaChartBar,
  FaUser,
  FaCog,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff; /* White background for a clean look */
  height: 100vh;
  width: 250px; /* Adjusted width for a sleeker profile */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Tab = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  font-family: 'Arial', sans-serif;
  font-size: 18px; /* Appropriate font size for readability */
  font-weight: 600;
  color: #333333; /* Dark gray text for contrast */
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f0f0f0; /* Light gray background on hover */
    color: #007bff; /* Blue text on hover */
    cursor: pointer;
  }
`;

const IconWrapper = styled.span`
  margin-right: 12px;
  font-size: 20px; /* Icon size matching text */
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0; /* Light gray top border */
`;

const SocialIcon = styled.a`
  font-size: 24px; /* Consistent icon size */
  color: ${(props) => props.color || '#000000'};
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7; /* Slight transparency on hover */
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabList>
        <Tab>
          <IconWrapper>
            <FaTachometerAlt />
          </IconWrapper>
          Dashboard
        </Tab>
        <Tab>
          <IconWrapper>
            <FaHeartbeat />
          </IconWrapper>
          Health
        </Tab>
        <Tab>
          <IconWrapper>
            <FaChartBar />
          </IconWrapper>
          Analytics
        </Tab>
        <Tab>
          <IconWrapper>
            <FaUser />
          </IconWrapper>
          Profile
        </Tab>
        <Tab>
          <IconWrapper>
            <FaCog />
          </IconWrapper>
          Settings
        </Tab>
      </TabList>
      <SocialIcons>
        <SocialIcon href="#" color="#0A66C2" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="#" color="#C13584" aria-label="Instagram">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="#" color="#1877F2" aria-label="Facebook">
          <FaFacebook />
        </SocialIcon>
      </SocialIcons>
    </NavigationContainer>
  );
};

export default Navigation;

