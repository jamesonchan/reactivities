import React from "react";
import { useDispatch } from "react-redux";
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
        <Menu.Item>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="reactivities" />
        <Menu.Item>
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
