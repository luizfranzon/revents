import { Container } from "semantic-ui-react";
import { EventDashboard } from "../features/events/dashboard/EventDashboard";
import { NavBar } from "./nav/NavBar";
import { useState } from "react";

export function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <NavBar setFormOpen={setIsFormOpen} />
      <Container className="main">
        <EventDashboard setFormOpen={setIsFormOpen} formOpen={isFormOpen} />
      </Container>
    </>
  )
}