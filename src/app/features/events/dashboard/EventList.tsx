import { EventListItem } from "./EventListItem";

export function EventList(props: any) {
  return (
    <>
      {props.events.map((event: any) => {
        return <EventListItem key={event.id} event={event} />
      })}
    </>
  )
}