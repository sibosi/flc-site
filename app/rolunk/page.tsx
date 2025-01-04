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
    <div>
      <h1>Rólunk</h1>
      <div>
        <h2>Bemutatkozás - mi az FLC?</h2>
        <p>
          A Financial Literacy Club egy új kezdeményezés az iskolánkban,
          amelynek lehetőséget biztosít a diákok pénzügyi és gazdasági
          ismereteinek fejlesztésére. Az FLC keretein belül többek között
          tanulmányi versenyekre, vendégelőadásokra és céglátogatásokra
          jelentkezhetnek az Eötvösös diákok, gyakorlati betekintést nyújtva a
          pénzügyi világba.
        </p>

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
      <div>
        <h2>Tagjaink</h2>
        <ul>
          {people_data.map((person, index) => (
            <li key={index + person.name} className="mb-4 flex gap-4">
              <Image
                src={person.image}
                alt={person.name}
                width={200}
                height={200}
                className="object-contain"
              />
              <div>
                <h3>{person.name}</h3>
                <p>{person.position}</p>
                <p>{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
