import styled from "styled-components";

export const Sidebar = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #1e2a47;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const SidebarItem = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #2a3b5f;
  }

  svg {
    font-size: 24px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid white;
`;

