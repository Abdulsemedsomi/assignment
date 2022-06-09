import styled from "styled-components";
import AppBarr from "./AppBarr";

export const AppBarrStyle = styled(AppBarr)`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    color: white;
    background-color: #f07705;
    border: none;
    height: 2rem;
    border-radius: 0.4rem;
  }
  .utility {
    display: flex;
    gap: 1rem;
  }
`;
