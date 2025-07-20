import Calendar from "@/components/calendar";
import Alert from "@/components/ui/alert";
import { EventCardType, EventCard } from "@/components/ui/EventCard";
import eventsJSON from "@/data/events.json";
import sortEventsByDate from "@/functions/sortEventsByDate";

const events = eventsJSON as EventCardType[];

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="show my-12 text-center text-3xl md:text-5xl">
        Financial Literacy Club
      </h1>

      <Alert className="show animationDelay-100">
        <h2 className="text-2xl">Üdvözlünk!</h2>
        <p>
          Téged is várunk vissza szeptemberben a Financial Literacy Club-ban!
        </p>
      </Alert>

      <div>
        <h2 className="show animationDelay-200">Események</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {sortEventsByDate(events, true)
            .slice(0, 6)
            .map((event, index) => (
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
        {events.length > 6 && (
          <div
            className={`show mt-4 text-center animationDelay-${6 * 100 + 300}`}
          >
            <a href="/esemenyek" className="text-blue-500 hover:underline">
              További eseményeink
            </a>
          </div>
        )}
      </div>

      <div>
        <h2 className="show animationDelay-300">Naptár</h2>
        <Calendar />
      </div>
    </div>
  );
}
