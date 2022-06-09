import styled from "styled-components";
import DeleteEmployee from "./DeleteEmployee";

export const StyledAlert = styled(DeleteEmployee)`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;

    padding: 20px;
    border: 1px solid #888;
    width: 30%; /* Could be more or less, depending on screen size */
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 0.5rem;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    color: white;
    background-color: #f07705;
    border: none;
    height: 2rem;
    /* border-radius: 0.4rem; */
  }
  .action-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
