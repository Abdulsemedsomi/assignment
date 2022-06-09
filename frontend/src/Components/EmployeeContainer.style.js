import styled from "styled-components";
import Employee from "./Employee";
export const EmployeeContainer = styled(Employee)`
  padding: 1rem;
  background-color: white;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 5%), 0 6px 20px 0 rgb(0 0 0 / 4%);
  border-radius: 0.4rem;
  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #f07705;
    text-align: center;
    color: white;
    justify-items: center;
    padding: auto;
    font-size: large;
  }
  .personal-info {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
  .name {
    font-weight: 900;
  }
  .birthday {
    font-size: smaller;
    font-weight: 400;
  }
  .salary {
    margin: 0;
  }
  .btn {
    display: flex;
    justify-content: end;
  }
  .group-one {
    display: flex;
    gap: 1rem;
  }
  .profile {
    display: flex;
    flex-direction: column;
  }
`;
