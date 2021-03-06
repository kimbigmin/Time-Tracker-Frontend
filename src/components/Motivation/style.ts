import styled from "styled-components";

export const MotivationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  .content-box {
    background-color: rgba(255, 255, 255, 1);
    padding: 3rem;
    height: 13.7rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  .content {
    font-weight: bold;
  }

  .author {
    margin-top: 1rem;
    float: right;
  }
`;
