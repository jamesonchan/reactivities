import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityCreateForm from "../../features/activities/form/ActivityCreateForm";
import ActivityEditForm from "../../features/activities/form/ActivityEditForm";
import NotFound from "../../features/errors/NotFound";
import TestErrors from "../../features/errors/TestError";
import HomePage from "../../features/home/HomePage";
import NavBar from "./NavBar";

function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      {/* when on homepage navbar disappears */}
      {path !== "/" ? <NavBar /> : <></>}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          {path !== "/" && <Route path="*" element={<NotFound />} />}
          <Route path="/activities" element={<ActivityDashboard />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/manage/:id" element={<ActivityEditForm />} />
          <Route path="/createActivity" element={<ActivityCreateForm />} />
          <Route path="/errors" element={<TestErrors />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
