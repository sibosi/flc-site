import React from "react";
import Image from "next/image";
import { DM_Serif_Text } from "next/font/google";
import FLC_logo from "@/public/FLC logo no text.png";
import US_Embassy_logo from "@/public/use-hungary-seal.png";

const fontDMSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});

const InvestIntoYourFuture = () => {
  return (
    <div className="rounded-2xl px-4 py-8 shadow-lg">
      <div className="mb-10 text-center">
        <h1 className="mx-auto mb-6 w-fit text-left text-6xl font-bold">
          <span className="font-bold text-purple-600">Fektess</span>
          <br />
          <span
            className={`leading-tight tracking-wider text-blue-800 ${fontDMSerifText.variable}`}
            style={{ fontFamily: "var(--font-dm-serif-text)" }}
          >
            a jövődbe.
          </span>
        </h1>

        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="w-28">
            <Image
              src={FLC_logo}
              alt="Financial Literacy Club Logo"
              width={112}
              height={112}
              className="rounded-full"
            />
            <span className="ml-2 text-blue-950">Financial Literacy Club</span>
          </div>
          <span
            className={`pb-12 leading-tight tracking-wider ${fontDMSerifText.variable}`}
            style={{ fontFamily: "var(--font-dm-serif-text)" }}
          >
            x
          </span>
          <div className="w-28">
            <Image
              src={US_Embassy_logo}
              alt="US Embassy Logo"
              width={112}
              height={112}
              className="rounded-full"
            />
            <span className="ml-2 text-blue-950">
              U.S. Embassy Youth Council
            </span>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="https://form.jotform.com/251243183705351"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition duration-300 hover:bg-blue-700"
          >
            Jelentkezés itt
          </a>
        </div>
      </div>

      <div className="md:flex">
        <div className="mb-8">
          <p className="mb-4 text-lg">
            Nagy örommel hívunk meg Benneteket a Budapest Financial Literacy
            Club különleges eseményére, amelyet 2025. június 18-án tartunk az
            Európa Pontban!
          </p>
          <p className="mb-4 text-lg">
            Ez az <span className="font-bold">INGYENES</span> program elsősorban
            középiskolásoknak szól, és olyan témákat jár körül, mint:
          </p>
          <ul className="ml-4 space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>
                Pályaorientáció – Hogyan válassz egyetemet, mit érdemes
                mérlegelni?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>
                „Vállalkozás – Az első lépések és a siker kulcsai&quot;
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>„Továbbtanulás – Itthon vagy külföldön?&quot;</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>
                Pénzügyi tudatosság – Hogyan építs biztos jövőt fiatalon?
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8 rounded-lg bg-blue-100 p-6">
          <p className="mb-2">
            <span className="text-blue-600">📍</span>{" "}
            <span className="font-semibold">Helyszín:</span> Európa Pont
            (Budapest, Lövőház u. 35.)
          </p>
          <p className="mb-2">
            <span className="text-blue-600">📅</span>{" "}
            <span className="font-semibold">Időpont:</span> 2025. június 18.
            (szerda), 10:30 – 15:00
          </p>
          <p className="mb-2">
            <span className="text-green-600">✔</span> Igazolható tanulmányi
            eseményként
          </p>
          <p className="mb-2">
            <span className="text-blue-600">🎟</span>{" "}
            <span className="font-semibold">Részvétel:</span> Ingyenes, de
            regisztrációhoz kötött!
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-blue-800">Program:</h2>

        <div className="mb-8 border-l-4 border-blue-200 p-4">
          <h3 className="mb-2 text-xl font-semibold">
            🕧 10:30 – 11:10: Regisztráció
          </h3>
        </div>

        <div className="mb-8 rounded-lg bg-blue-100 p-6">
          <h3 className="mb-2 text-xl font-semibold text-blue-800">
            🎓 „Továbbtanulás – Itthon vagy külföldön?&quot;
          </h3>
          <p className="mb-4 text-lg font-medium text-blue-700">
            🕚 11:10 – 12:00
          </p>
          <p className="mb-3">
            Merre érdemes továbbtanulni? Mit nyújtanak a hazai és a külföldi
            egyetemek, és hogyan lehet eligazodni a lehetőségek között?
          </p>
          <p className="mb-3">
            Ebben a panelbeszélgetésben három különböző szemléletet és
            tapasztalatot képviselő szakértő segít választ találni:
          </p>
          <ul className="mb-4 ml-4 space-y-2">
            <li>🎙 Bíró Ágota (Engame Academy)</li>
            <li>🎙 Simon Zoltán (EducationUSA)</li>
            <li>🎙 Kelecsényi Judit (MCC)</li>
          </ul>
          <p className="mb-3">
            👥 <span className="font-semibold">Moderátorok:</span> Bartók
            Márton, Balogh Bendegúz (Financial Literacy Club társalapítók)
          </p>
          <p className="mb-3">
            👉 40 perc izgalmas beszélgetés után 10 perc Q&A – kérdezz bátran,
            ha benned is felmerült már, hogy merre tovább!
          </p>
        </div>

        <div className="mb-8 border-l-4 border-blue-200 p-4">
          <h3 className="mb-2 text-xl font-semibold">
            🕧 12:00 – 12:30: Szünet
          </h3>
          <p>
            A szünet során a résztvevő diákok a meghívott intézmények
            standjainál érdeklődhetnek, kapcsolatokat építhetnek.
          </p>
        </div>

        <div className="mb-8 rounded-lg bg-blue-100 p-6">
          <h3 className="mb-2 text-xl font-semibold text-blue-800">
            🚀 „Vállalkozás – Az első lépések és a siker kulcsai&quot;
          </h3>
          <p className="mb-4 text-lg font-medium text-blue-700">
            🕧 12:30 – 13:20
          </p>
          <p className="mb-3">
            Mi kell ahhoz, hogy egy ötletből valódi vállalkozás legyen? Lehet-e
            már középiskolásként elindulni ezen az úton? Hogyan gondolkodik egy
            fiatal vállalkozó?
          </p>
          <p className="mb-3">
            Ebben a panelbeszélgetésben több sikeres startup-alapító osztja meg
            tapasztalatait és tanácsait:
          </p>
          <ul className="mb-4 ml-4 space-y-2">
            <li>🎙 Keserű Balázs</li>
            <li>🎙 László Miklós (Diverzum)</li>
            <li>🎙 További meghívott előadó (hamarosan)</li>
          </ul>
          <p className="mb-3">
            👤 <span className="font-semibold">Moderátor:</span> Golovics Milán
            (Forbes)
          </p>
          <p className="mb-3">Témák, amelyekről biztosan hallhatunk majd:</p>
          <ul className="mb-4 ml-4 space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>Milyen lépések vezetnek egy működő vállalkozásig?</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>
                Mikor és hogyan érdemes elindítani egy startupot – akár iskola
                mellett?
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>Mi segít a legtöbbet: készségek, mindset, mentorok?</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>
                Milyen buktatókkal érdemes számolni, és mit lehet belőlük
                tanulni?
              </span>
            </li>
          </ul>
          <p className="mb-3">
            👉 40 perc inspiráló beszélgetés, 10 perc közönségkérdés – kérdezz,
            ha már motoszkál benned egy ötlet, vagy csak kíváncsi vagy, hogyan
            érdemes belevágni!
          </p>
        </div>

        <div className="mb-8 border-l-4 border-blue-200 p-4">
          <h3 className="mb-2 text-xl font-semibold">
            🕧 13:20 – 13:50: Szünet
          </h3>
          <p>
            A szünet során a résztvevő diákok a meghívott intézmények
            standjainál érdeklődhetnek, kapcsolatokat építhetnek.
          </p>
        </div>

        <div className="mb-8 rounded-lg bg-blue-100 p-6">
          <h3 className="mb-2 text-xl font-semibold text-blue-800">
            🎤 „Mit üzennék a 17 éves önmagamnak, 10.000 fős nagyvállalat vagy
            saját vállalkozás?&quot;
          </h3>
          <p className="mb-4 text-lg font-medium text-blue-700">
            🕑 13:50 – 14:40
          </p>
          <p className="mb-3">🎙 Palkó András (Special Effects)</p>
          <p className="mb-3">
            💡 Multinál dolgozni, csatlakozni egy magyar céges csapathoz, vagy
            saját vállalkozásba kezdeni? Mit érdemes választani – és mikor?
          </p>
          <p className="mb-3">
            Egy inspiráló előadás Palkó Andrástól, aki mindhárom területen
            szerzett személyes tapasztalatot:
          </p>
          <ul className="mb-4 ml-4 space-y-2">
            <li>🏢 nemzetközi nagyvállalat</li>
            <li>🏠 hazai középvállalat</li>
            <li>🚀 saját vállalkozás</li>
          </ul>
          <p className="mb-3">
            Az előadásban több szemponton át hasonlítja össze a tapasztalatait a
            3 üzleti szférából, szó lesz többek között:
          </p>
          <ul className="mb-4 ml-4 space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>jövedelmi lehetőségekről</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>önállóságról és döntési szabadságról</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>céges kultúráról és munkaköri rugalmasságról</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>képzettség és karrierépítés viszonyáról</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">🔹</span>
              <span>work-life balance-ról</span>
            </li>
          </ul>
          <p className="mb-3">
            👉 Tedd fel magadnak a kérdést: milyen jövőt képzelsz el? Ez az
            előadás segít tisztábban látni a válaszokat!
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-blue-100 p-8 text-center">
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Ne maradj le erről az egyedülálló lehetőségről!
        </h2>
        <div>
          <a
            href="https://form.jotform.com/251243183705351"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition duration-300 hover:bg-blue-700"
          >
            Jelentkezz most!
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvestIntoYourFuture;
