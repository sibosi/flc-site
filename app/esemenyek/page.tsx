import { EventCard, EventCardType } from "@/components/ui/EventCard";
import eventsJSON from "@/data/events.json";
import sortEventsByDate from "@/functions/sortEventsByDate";

const events = eventsJSON as EventCardType[];

export default function Esemenyek() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-center">Esemenyek</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        {sortEventsByDate(events).map((event, index) => (
          <EventCard
            title={event.title}
            date={event.displayDate}
            description={event.description}
            key={index}
            image={event.image}
            className={`show animationDelay-${index * 100 + 300}`}
          />
        ))}
      </div>
    </div>
  );
}
