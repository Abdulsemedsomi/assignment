import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppBarrStyle } from "../Components/AppBarr.style";
import { Container } from "../Components/Contianer.style";
import { EmployeesContainer } from "../Components/EmployeesContainer.style";
import { GlobalStyle } from "../Components/Global.style";
import { StyledModal } from "../Components/Modal.style";
import { getEmployees } from "../redux/actions/employeeActions";

function Index() {
  const [toggle, setToggle] = useState(false);
  function closeModal() {
    setToggle(false);
  }
  function openModal() {
    setToggle(true);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <Container>
      {toggle ? (
        <StyledModal
          props={{
            onClick: function () {
              closeModal();
            },
          }}
        />
      ) : (
        <></>
      )}
      <GlobalStyle />
      <AppBarrStyle
        props={{
          onClick: function () {
            openModal();
          },
        }}
      />
      <EmployeesContainer
        props={{
          onClick: function () {
            openModal();
          },
        }}
      />
    </Container>
  );
}

export default Index;
