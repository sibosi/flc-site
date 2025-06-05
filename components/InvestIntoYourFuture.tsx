import React from "react";
import Image from "next/image";
import { DM_Serif_Text } from "next/font/google";
import FLC_logo from "@/public/FLC logo no text.png";
import US_Embassy_logo from "@/public/use-hungary-seal.png";
import "@/styles/borderAnimation.css";

const fontDMSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});

const InvestIntoYourFuture = () => {
  return (
    <div className="sliding-border-animation overflow-hidden">
      <div className="inner rounded-2xl bg-white px-6 py-10 shadow-2xl">
        <h1 className="mx-auto mb-4 w-fit text-left text-5xl font-bold md:text-6xl">
          <span className="font-bold text-purple-600">Fektess</span>
          <br />
          <span
            className={`leading-tight tracking-wider text-blue-800 ${fontDMSerifText.variable}`}
            style={{ fontFamily: "var(--font-dm-serif-text)" }}
          >
            a jövődbe.
          </span>
        </h1>

        <div className="mb-4 flex items-center justify-center gap-6 text-center">
          <div className="w-28">
            <Image
              src={FLC_logo}
              alt="Financial Literacy Club Logo"
              width={112}
              height={112}
              className="rounded-full border border-gray-300 shadow-md transition-transform duration-300"
            />
            <span className="mt-2 block text-sm font-medium text-blue-950">
              Financial Literacy Club Budapest
            </span>
          </div>
          <span
            className={`pb-12 leading-tight tracking-wider ${fontDMSerifText.variable}`}
            style={{ fontFamily: "var(--font-dm-serif-text)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-blue-600 transition-transform duration-300"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </span>
          <div className="w-28">
            <Image
              src={US_Embassy_logo}
              alt="US Embassy Logo"
              width={112}
              height={112}
              className="rounded-full shadow-md transition-transform duration-300"
            />
            <span className="mt-2 block text-sm font-medium text-blue-950">
              U.S. Embassy Youth Council
            </span>
          </div>
        </div>

        <div className="mt-8 md:flex md:gap-4">
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap gap-4 max-md:flex-col md:justify-around">
              <div className="flex rounded-xl bg-indigo-100 p-4 text-blue-950 shadow-md">
                <div className="mr-4 flex-shrink-0 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </div>
                <div>
                  <p>
                    <strong>Európa Pont</strong>, Budapest, Lövőház u.
                  </p>
                  <p>
                    <strong>június 18. (szerda)</strong>, 10:30 – 15:00
                  </p>
                </div>
              </div>

              <div className="flex rounded-xl bg-green-100 p-4 text-blue-950 shadow-md">
                <div className="mr-4 flex-shrink-0 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                  </svg>
                </div>
                <div>
                  <p>
                    <strong>Igazolható</strong> tanulmányi eseményként
                  </p>
                  <p>
                    <strong>Ingyenes</strong>, de regisztrációhoz kötött!
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4 flex justify-center">
              <a
                href="https://form.jotform.com/251243183705351"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-bold text-white shadow-lg transition duration-300"
              >
                Jelentkezés itt
              </a>
            </div>

            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Nagy örommel hívunk meg Benneteket a Budapest Financial Literacy
              Club különleges eseményére, amelyet 2025. június 18-án tartunk az
              Európa Pontban!
            </p>
            <p className="mb-4 text-lg leading-relaxed text-gray-800">
              Ez az <span className="font-bold">INGYENES</span> program
              elsősorban középiskolásoknak szól, és olyan témákat jár körül,
              mint:
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
        </div>
        <div className="mb-12">
          <div className="mb-10 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
              Program
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="group mb-8">
            <div className="relative overflow-hidden rounded-xl border-l-4 border-blue-400 bg-gradient-to-r from-gray-50 to-blue-50 p-6 transition-all duration-300 hover:border-blue-600">
              <div className="absolute right-0 top-0 -mr-10 -mt-10 h-20 w-20 rounded-full bg-blue-100 opacity-50"></div>
              <h3 className="mb-2 flex items-center text-xl font-bold text-gray-800">
                <span className="mr-3 text-2xl">🕧</span>
                10:30 – 11:10: Regisztráció
              </h3>
              <div className="h-0.5 w-12 bg-blue-400 transition-all duration-300 group-hover:w-24"></div>
            </div>
          </div>

          <div className="group mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 p-8 shadow-lg transition-all duration-500">
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-30"></div>
              <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-24 w-24 rounded-full bg-gradient-to-tr from-purple-200 to-blue-200 opacity-40"></div>

              <div className="relative z-10">
                <div className="mb-4 flex items-center">
                  <span className="mr-4 text-3xl">🎓</span>
                  <h3 className="text-2xl font-bold text-blue-800">
                    „Továbbtanulás – Itthon vagy külföldön?&quot;
                  </h3>
                </div>

                <div className="mb-6 inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                  <span className="mr-2 text-lg">🕚</span>
                  11:10 – 12:00
                </div>

                <p className="mb-4 leading-relaxed text-gray-700">
                  Merre érdemes továbbtanulni? Mit nyújtanak a hazai és a
                  külföldi egyetemek, és hogyan lehet eligazodni a lehetőségek
                  között?
                </p>

                <div className="mb-4 rounded-xl bg-white/60 p-6 backdrop-blur-sm">
                  <p className="mb-4 font-medium text-gray-700">
                    Ebben a panelbeszélgetésben három különböző szemléletet és
                    tapasztalatot képviselő szakértő segít választ találni:
                  </p>
                  <div className="grid gap-3">
                    {[
                      "Bíró Ágota (Engame Academy)",
                      "Simon Zoltán (EducationUSA)",
                      "Kelecsényi Judit (MCC)",
                    ].map((speaker, index) => (
                      <div
                        key={index}
                        className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-shadow duration-200"
                      >
                        <span className="mr-3 text-blue-600">🎙</span>
                        <span className="font-medium text-gray-800">
                          {speaker}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                  <p className="mb-2">
                    <span className="font-semibold">👥 Moderátorok:</span>{" "}
                    Bartók Márton, Balogh Bendegúz (Financial Literacy Club
                    társalapítók)
                  </p>
                  <p>
                    👉 40 perc izgalmas beszélgetés után 10 perc Q&A – kérdezz
                    bátran, ha benned is felmerült már, hogy merre tovább!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group mb-8">
            <div className="relative overflow-hidden rounded-xl border-l-4 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 p-6 transition-all duration-300 hover:border-green-600">
              <div className="absolute right-0 top-0 -mr-8 -mt-8 h-16 w-16 rounded-full bg-green-100 opacity-50"></div>
              <h3 className="mb-2 flex items-center text-xl font-bold text-gray-800">
                <span className="mr-3 text-2xl">☕</span>
                12:00 – 12:30: Szünet
              </h3>
              <p className="text-gray-600">
                A szünet során a résztvevő diákok a meghívott intézmények
                standjainál érdeklődhetnek, kapcsolatokat építhetnek.
              </p>
              <div className="h-0.5 w-12 bg-green-400 transition-all duration-300 group-hover:w-24"></div>
            </div>
          </div>

          <div className="group mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8 shadow-lg transition-all duration-500">
              <div className="absolute right-0 top-0 -mr-20 -mt-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30"></div>
              <div className="absolute bottom-0 left-0 -mb-14 -ml-14 h-28 w-28 rounded-full bg-gradient-to-tr from-orange-200 to-purple-200 opacity-40"></div>

              <div className="relative z-10">
                <div className="mb-4 flex items-center">
                  <span className="mr-4 text-3xl">🚀</span>
                  <h3 className="text-2xl font-bold text-purple-800">
                    „Vállalkozás – Az első lépések és a siker kulcsai&quot;
                  </h3>
                </div>

                <div className="mb-6 inline-flex items-center rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white">
                  <span className="mr-2 text-lg">🕧</span>
                  12:30 – 13:20
                </div>

                <p className="mb-4 leading-relaxed text-gray-700">
                  Mi kell ahhoz, hogy egy ötletből valódi vállalkozás legyen?
                  Lehet-e már középiskolásként elindulni ezen az úton? Hogyan
                  gondolkodik egy fiatal vállalkozó?
                </p>

                <div className="mb-6 rounded-xl bg-white/60 p-6 backdrop-blur-sm">
                  <p className="mb-4 font-medium text-gray-700">
                    Ebben a panelbeszélgetésben több sikeres startup-alapító
                    osztja meg tapasztalatait és tanácsait:
                  </p>
                  <div className="mb-4 grid gap-3">
                    {[
                      "Keserű Balázs",
                      "László Miklós (Diverzum)",
                      "További meghívott előadó (hamarosan)",
                    ].map((speaker, index) => (
                      <div
                        key={index}
                        className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-shadow duration-200"
                      >
                        <span className="mr-3 text-purple-600">🎙</span>
                        <span className="font-medium text-gray-800">
                          {speaker}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 p-4 text-white">
                    <p className="font-semibold">
                      👤 Moderátor: Golovics Milán (Forbes)
                    </p>
                  </div>

                  <h4 className="mb-3 font-bold text-gray-800">
                    Témák, amelyekről biztosan hallhatunk majd:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Milyen lépések vezetnek egy működő vállalkozásig?",
                      "Mikor és hogyan érdemes elindítani egy startupot – akár iskola mellett?",
                      "Mi segít a legtöbbet: készségek, mindset, mentorok?",
                      "Milyen buktatókkal érdemes számolni, és mit lehet belőlük tanulni?",
                    ].map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-start rounded-lg bg-white p-3 shadow-sm transition-all duration-200"
                      >
                        <span className="mr-3 mt-0.5 text-purple-600">🔹</span>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
                  <p>
                    👉 40 perc inspiráló beszélgetés, 10 perc közönségkérdés –
                    kérdezz, ha már motoszkál benned egy ötlet, vagy csak
                    kíváncsi vagy, hogyan érdemes belevágni!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group mb-8">
            <div className="relative overflow-hidden rounded-xl border-l-4 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 p-6 transition-all duration-300 hover:border-green-600">
              <div className="absolute right-0 top-0 -mr-8 -mt-8 h-16 w-16 rounded-full bg-green-100 opacity-50"></div>
              <h3 className="mb-2 flex items-center text-xl font-bold text-gray-800">
                <span className="mr-3 text-2xl">☕</span>
                13:20 – 13:50: Szünet
              </h3>
              <p className="text-gray-600">
                A szünet során a résztvevő diákok a meghívott intézmények
                standjainál érdeklődhetnek, kapcsolatokat építhetnek.
              </p>
              <div className="h-0.5 w-12 bg-green-400 transition-all duration-300 group-hover:w-24"></div>
            </div>
          </div>

          <div className="group mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 shadow-lg transition-all duration-500">
              <div className="-mr-18 -mt-18 absolute right-0 top-0 h-36 w-36 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 opacity-30"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-32 w-32 rounded-full bg-gradient-to-tr from-yellow-200 to-orange-200 opacity-40"></div>

              <div className="relative z-10">
                <div className="mb-4 flex items-center">
                  <span className="mr-4 text-3xl">🎤</span>
                  <h3 className="text-2xl font-bold text-orange-800">
                    „Mit üzennék a 17 éves önmagamnak, 10.000 fős nagyvállalat
                    vagy saját vállalkozás?&quot;
                  </h3>
                </div>

                <div className="mb-6 inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white">
                  <span className="mr-2 text-lg">🕑</span>
                  13:50 – 14:40
                </div>

                <div className="mb-6 rounded-xl bg-white/60 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white">
                    <span className="mr-3 text-2xl">🎙</span>
                    <span className="text-lg font-bold">
                      Palkó András (Special Effects)
                    </span>
                  </div>

                  <p className="mb-4 text-gray-700">
                    💡 Multinál dolgozni, csatlakozni egy magyar céges
                    csapathoz, vagy saját vállalkozásba kezdeni? Mit érdemes
                    választani – és mikor?
                  </p>

                  <p className="mb-4 text-gray-700">
                    Egy inspiráló előadás Palkó Andrástól, aki mindhárom
                    területen szerzett személyes tapasztalatot:
                  </p>

                  <div className="mb-6 grid gap-4 md:grid-cols-3">
                    {[
                      { icon: "🏢", text: "nemzetközi nagyvállalat" },
                      { icon: "🏠", text: "hazai középvállalat" },
                      { icon: "🚀", text: "saját vállalkozás" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-white p-4 text-center shadow-sm transition-all duration-200"
                      >
                        <div className="mb-2 text-3xl">{item.icon}</div>
                        <div className="font-medium text-gray-800">
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="mb-4 font-bold text-gray-800">
                    Az előadásban több szemponton át hasonlítja össze a
                    tapasztalatait a 3 üzleti szférából:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "jövedelmi lehetőségekről",
                      "önállóságról és döntési szabadságról",
                      "céges kultúráról és munkaköri rugalmasságról",
                      "képzettség és karrierépítés viszonyáról",
                      "work-life balance-ról",
                    ].map((topic, index) => (
                      <div
                        key={index}
                        className="flex items-start rounded-lg bg-white p-3 shadow-sm transition-all duration-200"
                      >
                        <span className="mr-3 mt-0.5 text-orange-600">🔹</span>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 p-4 text-white">
                  <p>
                    👉 Tedd fel magadnak a kérdést: milyen jövőt képzelsz el? Ez
                    az előadás segít tisztábban látni a válaszokat!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-center shadow-2xl">
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-40 w-40 rounded-full bg-white/20"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-32 w-32 rounded-full bg-white/20"></div>

            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-white">
                Ne maradj le erről az egyedülálló lehetőségről!
              </h2>
              <div>
                <a
                  href="https://form.jotform.com/251243183705351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-600 transition-all duration-300 hover:bg-gray-100"
                >
                  Jelentkezz most!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestIntoYourFuture;
