import { Button, Form, Header, Segment } from "semantic-ui-react";

type Props = {
  setFormOpen: (value: boolean) => void
}

export function EventForm({ setFormOpen }: Props) {
  return (
    <Segment clearing>
      <Header content="Create Event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event Title" name="" id="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" name="" id="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" name="" id="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" name="" id="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" name="" id="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Date" name="" id="" />
        </Form.Field>

        <Button type="submit" floated="right" positive content="Submit" />
        <Button onClick={() => setFormOpen(false)} type="button" floated="right" content="Cancel" />
      </Form>
    </Segment>
  )
}