import { Button, Form, Header, Segment } from "semantic-ui-react";

export function EventForm() {
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
        <Button type="button" floated="right" content="Cancel" />
      </Form>
    </Segment>
  )
}