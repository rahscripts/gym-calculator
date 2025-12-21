'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [start, setStart] = useState(false);
  const [skinny, setSkinny] = useState(false);
  const [fatty, setFatty] = useState(false);

  return (
    <section>
      <div>
        Gym Calculator: <br />
        <button onClick={() => setStart(!start)}> {start ? 'start' : 'not started'}</button>
      </div>
      {start && 
      <div>
        <div className="inset-10 bg-red-600 p-20 rounded m-20 flex flex-col items-center font-bold text-white ">
          Choose: 
          <button onClick={() => setSkinny(!skinny)} className="bg-green-500 p-2 m-3 rounded text-black cursor-pointer">Skinny</button>
          <button onClick={() => setFatty(!skinny)} className="bg-green-500 p-2 m-3 rounded text-black cursor-pointer">Fatty</button>
        </div>
        </div>
        }
        <div>
           if you go gym for 2 years you will look like:
           <Image src="/ronaldo.webp" alt="your image" height={100} width={100}/>
        </div>
    </section>
  );
}
