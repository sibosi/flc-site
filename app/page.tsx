import Calendar from "@/components/calendar";
import Alert from "@/components/ui/alert";
import { EventCardProps, EventCard } from "@/components/ui/EventCard";
import eventsJSON from "@/data/events.json";

const events = eventsJSON as EventCardProps[];

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="show my-12 text-center text-3xl lg:text-5xl">
        Financial Literacy Club
      </h1>
      <Alert className="show animationDelay-100">
        <h2 className="text-2xl">Üdvözlünk!</h2>
        <p>Minden csütörtökön 15:45-től a földrajz (10.) teremben.</p>
        <p>Téged is várunk a Financial Literacy Club-ban!</p>
      </Alert>

      <div>
        <h2 className="show animationDelay-200">Események</h2>
        <div className="my-2 flex flex-wrap justify-around">
          {events.map((event, index) => (
            <EventCard
              title={event.title}
              date={event.date}
              description={event.description}
              key={index}
              image={event.image}
              className={`show animationDelay-${index * 100 + 300}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="show animationDelay-300">Naptár</h2>
        <Calendar />
      </div>
    </div>
  );
}
