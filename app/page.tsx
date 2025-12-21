'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [start, setStart] = useState(false);
  const [skinny, setSkinny] = useState(false);
  const [fatty, setFatty] = useState(false);

  return (
    <section>
        <div className="max-w-3xl mx-auto m-20 p-10">
          <div>
          Gym Calculator: <br />
          <button onClick={() => setStart(!start)}> {start ? 'start' : 'not started'}</button>
                </div>
                {start && 
                <div>
          <div className="inset-10 bg-green-700 p-10 rounded m-20 flex flex-col items-center font-bold text-white -space-y-2">
            <h1 className="text-3xl italic">Choose: </h1>
            <button onClick={() => {setSkinny(!skinny); setStart(!start)}} className="bg-green-500 p-1 mt-4 m-2 rounded text-black cursor-pointer">Skinny</button>
            <button onClick={() => {setSkinny(!skinny); setStart(!start)}} className="bg-green-500 p-1 m-1 rounded text-black cursor-pointer">Fatty</button>
          </div>
          </div>
          }
          <div>
            {skinny &&
            <div className="inset-10 bg-blue-700 p-10 rounded m-20 flex flex-col items-center font-bold text-white -space-y-2">
               if you go gym for 2 years you will look like:
               <Image src="/ronaldo.webp" alt="your image" height={100} width={100}/>
            </div>
            }
          </div>
          <div>
            {fatty &&
             <div className="inset-10 bg-blue-700 p-10 rounded m-20 flex flex-col items-center font-bold text-white -space-y-2">
               if you go gym for 2 years you will look like:
               <Image src="/Sam Sulek.jpeg" alt="your image" height={100} width={100}/>
            </div>
            }
          </div>
        </div>
        
    </section>
  );
}
