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
    <div className="sliding-border-animation rounded-2xl bg-white px-6 py-10 shadow-2xl">
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
            className="rounded-full border border-gray-300 shadow-md transition-transform duration-300 hover:scale-105"
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
            className="text-blue-600 transition-transform duration-300 hover:scale-110"
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
            className="rounded-full shadow-md transition-transform duration-300 hover:scale-105"
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
              className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-105"
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
      </div>
    </div>
  );
};

export default InvestIntoYourFuture;
