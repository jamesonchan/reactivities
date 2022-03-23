import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityCreateForm from "../../features/activities/form/ActivityCreateForm";
import ActivityEditForm from "../../features/activities/form/ActivityEditForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivityDashboard />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/manage/:id" element={<ActivityEditForm />} />
          <Route path="/createActivity" element={<ActivityCreateForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
