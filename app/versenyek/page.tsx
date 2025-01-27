"use client";
import { Accordion, AccordionItem, Link } from "@heroui/react";

interface ChampionshipType {
  title: string;
  date?: string;
  applicationDeadline?: string;
  website?: string;
  language?: string;
}

const championships: ChampionshipType[] = [
  {
    title: "Közgazdasági Diákolimpia",
    date: "TBD. (online)",
    website:
      "https://kozgazdasagiolimpia.hu/kozgazdasagi-olimpia/a-versenyrol/",
    language: "Magyar",
  },
  {
    title: "International Economics Olympiad (IEO)",
    date: "Július / Augusztus",
    website: "www.ecolymp.org",
    language: "Angol",
  },
  {
    title: "High School Business Challenge (csapatverseny)",
    date: "Első forduló: március/április (online)",
    website: "https://businessismore.eu/hu/kezdolap/",
    language: "Angol",
  },
  {
    title: "Pénzmesterek Vetélkedő",
    date: "Tavasszal, pontos időpontot még nem hirdettek",
    website: "www.penzmesterek.hu",
    language: "Magyar",
  },
  {
    title: "World Economics Cup (csapatverseny)",
    date: "Első forduló: április (online)",
    website: "https://www.worldeconcup.org/",
    language: "Angol",
  },
  {
    title: "European Money Quiz",
    date: "Április",
    language: "Angol",
  },
  {
    title: "YIS Stock Pitch Competition",
    applicationDeadline: "Április 2, 2025",
    website: "https://yis.org/programs/stock-pitch-competition/",
    language: "Angol",
  },
];

export default function Versenyek() {
  return (
    <div className="space-y-4">
      <h2>Versenyek</h2>
      <Accordion className="space-y-4">
        {championships.map((championship, index) => (
          <AccordionItem
            key={index}
            aria-label={championship.title}
            title={championship.title}
            classNames={{ title: "text-2xl" }}
          >
            <div>
              {championship.date && (
                <p>
                  <strong>Időpont</strong>: {championship.date}
                </p>
              )}
              {championship.applicationDeadline && (
                <p>
                  <strong>Jelentkezési határidő</strong>:{" "}
                  {championship.applicationDeadline}
                </p>
              )}
              {championship.website && (
                <p>
                  <strong>Weboldal</strong>:{" "}
                  <Link href={championship.website}>
                    {championship.website}
                  </Link>
                </p>
              )}
              {championship.language && (
                <p>
                  <strong>Nyelv</strong>: {championship.language}
                </p>
              )}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
