import { AppEvent } from "../../../types/event";
import { EventListItem } from "./EventListItem";

type Props = {
  events: AppEvent[]
}

export function EventList({ events }: Props) {
  return (
    <>
      {events.map((event) => {
        return <EventListItem key={event.id} event={event} />
      })}
    </>
  )
}