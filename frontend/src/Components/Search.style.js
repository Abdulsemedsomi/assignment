import styled from "styled-components";

export const Search = styled.div`
  background-color: white;
  width: 10rem;
  height: 2rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  color: gray;

  input {
    border: none;
    height: 2rem;
    width: 8rem;
    border-radius: 0.4rem;
    outline: none;
    padding-left: 0.5rem;
  }
  &:hover {
    box-shadow: 0 10px 16px 0 rgb(0 0 0 / 5%), 0 6px 20px 0 rgb(0 0 0 / 4%);
  }
`;
