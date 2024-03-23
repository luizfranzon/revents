import { Button, Icon, Item, ItemGroup, ItemHeader, List, Segment, SegmentGroup } from "semantic-ui-react";
import { EventListAttendee } from "./EventListAttendee";

export function EventListItem({ event }: any) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <ItemHeader>{event.title}</ItemHeader>
              <Item.Description>{event.description}</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {
            event.attendees.map((attendee: any) => {
              return <EventListAttendee key={attendee.id} attendee={attendee} />
            })
          }
        </List>
      </Segment>
      <Segment clearing>
        <span>Description of the event</span>
        <Button color='teal' floated="right" content="View" />
      </Segment>
    </SegmentGroup>
  )
}