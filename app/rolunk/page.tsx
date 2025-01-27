import Image from "next/image";
import people_json from "./people.json";

type PeopleType = {
  name: string;
  position: string | null;
  image: string;
  bio: string;
};

const people_data: PeopleType[] = people_json;

export default function Rolunk() {
  return (
    <div className="space-y-4">
      <h1 className="text-center">Rólunk</h1>
      <div className="relative mx-auto h-64 w-full md:h-80 lg:h-96">
        <Image
          src="/people/group.png"
          alt="FLC logo"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-4">
        <h2>Mi az FLC?</h2>
        <div>
          <p>
            A Financial Literacy Club egy új kezdeményezés az iskolánkban,
            amelynek lehetőséget biztosít a diákok pénzügyi és gazdasági
            ismereteinek fejlesztésére. Az FLC keretein belül többek között
            tanulmányi versenyekre, vendégelőadásokra és céglátogatásokra
            jelentkezhetnek az Eötvösös diákok, gyakorlati betekintést nyújtva a
            pénzügyi világba.
          </p>
        </div>

        <p>
          A pénzügyi ismereteken túl a klub olyan alapvető készségek
          fejlesztésére összpontosít, mint a nyilvános beszéd, a vezetés, a
          prezentációs technikák, a csapatmunka és a kritikai gondolkodás. Ezek
          a készségek kulcsfontosságúak mind a tanulmányi, mind a szakmai
          sikerhez.
        </p>
        <p>
          Az FLC heti rendszerességgel, csütörtökön van megtartva. A szakkör
          tartalmaz egy mentorprogramot, ahol a vezetőség tagjai segítik a
          diákokat a versenyekre való felkészülésben és a prezentációk
          előkészítésében. Az oktatás nyelve angol, a diákok sokféle forráshoz
          és lehetőséghez férhetnek hozzá.
        </p>
        <p>
          Az FLC-ben a tanév modulokra oszlik, amelyek átfogó pénzügyi témákra
          fókuszálnak, mint a pénzügyi piacok. A diákok a kiválasztott témákról
          csoportosan prezentálnak minden modul végén. Ezen kívül a klub ‘paper
          trading’ platformot hoz létre a tagok számára, díjakért versenyezve.
        </p>
      </div>
      <div className="w-full">
        <h2>Tagjaink</h2>
        <div className="space-y-4">
          {people_data.map((person, index) => (
            <div
              key={index + person.name}
              className="my-4 flex flex-col gap-4 lg:flex-row"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="mx-auto object-contain"
              />
              <div>
                <h3 className="max-lg:text-center">{person.name}</h3>
                <p className="mb-2 max-lg:text-center">{person.position}</p>
                <p>{person.bio}</p>
              </div>
              {index < people_data.length - 1 && (
                <hr className="my-4 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
