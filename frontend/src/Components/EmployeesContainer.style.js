import styled from "styled-components";
import Employees from "./Employees";
export const EmployeesContainer = styled(Employees)`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  border-radius: 1rem;

  /* height: 20rem; */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
