type EventType = {
  date: string;
  title: string;
  description: string;
};

const events: EventType[] = [
  {
    date: "Október 17. 15:30",
    title: "Pitch workshop",
    description:
      "Ezen a héten egy izgalmas, interaktív foglalkozással készülünk nektek, ahol fejleszthetitek a public speaking skill-t, a pitchelésen keresztül. A sessionön egy rövid ismertetőt hallhattok a pitcheléssel kapcsolatban, utána pedig a befektetések modulon belül fogtok pitcheket tartani.",
  },
  {
    date: "Október 10. 15:30",
    title: "Guest Speaker",
    description:
      "Nagy Bertalan a privát bankolásról és a befektetésekről átfogóan fog előadást tartani ezen a héten. Megtudhatjátok milyen kockázatok járnak egyes befektetésekkel, valamint milyen vagyonkezelőként dolgozni Magyarország egyik legnagyobb privát bankolási cégénél. Az előadást utólag is megtekinthetitek a modulok tab alatt!",
  },
  {
    date: "Október 03. 15:45",
    title: "Guest Speaker",
    description:
      "Ezen a héten Sipos Zoltán bankkártya szakértő előadásán vehetünk részt. Az előadás keretein belül megismerkedhettek a bankkártyák evolúciójával és működésükkel, valamint betekintést nyerhettek a bankkártyák világának szolgáltatói oldalába (a bankoknak milyen bevételeik vannak belőlük és hogyan történik a profit-maximalizálás).",
  },
];

export default function Home() {
  return (
    <div>
      <h1>Financial Literacy Club - EJG</h1>
      <div>
        <h2>Üdvözlünk!</h2>
        <p>Minden csütörtökön 15:45-től a földrajz (10.) teremben.</p>
        <p>Téged is várunk a Financial Literacy Club-ban!</p>
      </div>
      <div>
        <h2>Események</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index + event.title} className="mb-4">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
