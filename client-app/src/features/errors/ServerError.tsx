import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const ServerError = () => {
  return (
    <Container>
      <Header as="h1" content="Server Error" />
      <Header sub as="h5" color="red" content="Server Error" />
      <Segment>
        <Header as="h4" content="Stack trace" color="teal" />
        <code style={{ marginTop: "10px" }}>error details</code>
      </Segment>
    </Container>
  );
};

export default ServerError;
