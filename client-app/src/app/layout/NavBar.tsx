import React from "react";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import { openForm } from "../../redux/actions/formActions/formOpenAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const formOpenHandler = () => {
    dispatch(openForm());
  };
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" as={NavLink} to='/activities' />
        <Menu.Item name="Errors" as={NavLink} to='/errors' />
        <Menu.Item as={NavLink} to='/createActivity'>
          <Button
            positive
            content="Create Activity"
            onClick={formOpenHandler}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
