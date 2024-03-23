import { EventList } from "./EventList";
import { Grid } from "semantic-ui-react";
import { EventForm } from "../form/EventForm";
import { sampleData } from "../../../api/sampleData";

export function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  )
}