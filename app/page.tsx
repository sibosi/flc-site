import Calendar from "@/components/calendar";
import Alert from "@/components/ui/alert";
import { EventCardProps, EventCard } from "@/components/ui/EventCard";

const events: EventCardProps[] = [
  {
    date: "Október 17. 15:30",
    title: "Pitch workshop",
    description:
      "Ezen a héten egy izgalmas, interaktív foglalkozással készülünk nektek, ahol fejleszthetitek a public speaking skill-t, a pitchelésen keresztül. A sessionön egy rövid ismertetőt hallhattok a pitcheléssel kapcsolatban, utána pedig a befektetések modulon belül fogtok pitcheket tartani.",
    image: "/events/event1.jpg",
  },
  {
    date: "Október 10. 15:30",
    title: "Guest Speaker",
    description:
      "Nagy Bertalan a privát bankolásról és a befektetésekről átfogóan fog előadást tartani ezen a héten. Megtudhatjátok milyen kockázatok járnak egyes befektetésekkel, valamint milyen vagyonkezelőként dolgozni Magyarország egyik legnagyobb privát bankolási cégénél. Az előadást utólag is megtekinthetitek a modulok tab alatt!",
    image: "/events/event2.jpg",
  },
  {
    date: "Október 03. 15:45",
    title: "Guest Speaker",
    description:
      "Ezen a héten Sipos Zoltán bankkártya szakértő előadásán vehetünk részt. Az előadás keretein belül megismerkedhettek a bankkártyák evolúciójával és működésükkel, valamint betekintést nyerhettek a bankkártyák világának szolgáltatói oldalába (a bankoknak milyen bevételeik vannak belőlük és hogyan történik a profit-maximalizálás).",
    image: "/events/event3.jpg",
  },
];

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
