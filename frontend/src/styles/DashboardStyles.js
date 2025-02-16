import styled from "styled-components";

export const DashboardContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Stats = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;

  h3 {
    font-size: 16px;
    color: #555;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    color: #ff7675;
  }
`;

export const GraphContainer = styled.div`
  background: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

