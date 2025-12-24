'use client';
import Image from "next/image";
import { useState } from "react";
import CalorieIntake from "@/components/CalorieIntake";
import Header from "@/components/Header";

export default function Home() {
  const [start, setStart] = useState(false);
  const [skinny, setSkinny] = useState(false);
  const [fatty, setFatty] = useState(false);


  return (
    <section>
      <div><Header /></div>
      <div className="max-lg:mt-10 mt-30 transition-all duration-200">
        <CalorieIntake />
      </div>
      <div className="max-lg:mt-10 mt-50 mb-40">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold capitalize ">Section created for fun!😭</h1><br />
          <button className="bg-green-500 p-2 rounded font-bold hover:bg-green-600 cursor-pointer" onClick={() => setStart(!start)}>Start</button>
        </div>
        <div className="max-w-3xl mx-auto mb-10 px-10">
          {start &&
            <div>
              <div className="inset-10 bg-green-700 rounded p-10 sm:m-2 lg:m-20 mb-5 flex flex-col items-center font-bold text-white -space-y-2">
                <h1 className="text-3xl italic">Choose:<span className="max-lg:hidden text-xs opacity-50">this section is created just for fun. ThankYou.</span></h1>
                <button onClick={() => { setSkinny(!skinny); setStart(!start) }} className="bg-green-500 p-1 mt-4 m-2 rounded text-black cursor-pointer">Skinny</button>
                <button onClick={() => { setFatty(!fatty); setStart(!start) }} className="bg-green-500 p-1 m-1 rounded text-black cursor-pointer">Fatty</button>
              </div>
            </div>
          }
          <div>
            {skinny &&
              <div className="inset-10 bg-blue-700 p-10 rounded sm:m-2 lg:m-20 mb-10 flex flex-col items-center font-bold text-white space-y-2">
                if you go gym for 2 years you will look like:
                <Image src="/ronaldo.webp" alt="your image" height={500} width={500} />
                <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 p-1 rounded " onClick={() => { setStart(!start); setSkinny(!skinny) }}>Go Back!</button>
              </div>
            }
          </div>
          <div>
            {fatty &&
              <div className="inset-10 bg-blue-700 p-10 rounded mb-10 sm:m-2 lg:m-20 flex flex-col items-center font-bold text-white space-y-2">
                if you go gym for 2 years you will look like:
                <Image src="/Sam Sulek.jpeg" alt="your image" height={500} width={500} />
                <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 p-1 rounded " onClick={() => { setStart(!start); setFatty(!fatty) }}>Go Back!</button>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
