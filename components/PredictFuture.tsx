"use client";
import { useState } from "react";

type PredictFutureProps = {
    allData: {
        name: string;
        age: number;
        gender: string;
        height: number;
        weight: number;
        afactor: string;
    }
    ;
}

export default function PredictFuture({
   allData,
}: PredictFutureProps) {


    const [answers, setAnswers] = useState<Record<number, string>>({});
    console.log(answers);
    const goal = answers[1];
    const cal = Number(answers[2]);
    const t = Number(answers[3]);


    const days = t*30;
    const tcal = cal*days;
    console.log(tcal);
    //1kg = 7700;
    const kg = 7700;
    const totalkg = Number((tcal/kg).toFixed(2));

    
    console.log(totalkg);


    const w = allData.weight;

    const finalWeight = goal==="Weight Loss" ? w-totalkg : w+totalkg;
    console.log(finalWeight);

    const allOption = [
        {
            id: 1, q: "whats your ultimate goal?", o: ["Weight Loss", " Weight Gain"],
        },
        {
            id: 2, q: "You gonna follow: ", o: ["300", "500"]
        },
        {
            id: 3, q: "how many months you gonna follow the plan?", o: ["6", "12"],
        },
    ];



    const sign = goal === "Weight Loss" ? "-" : "+";
    

    return (
        <section className="flex mt-20 flex-col items-center">
            <div className="m-10">
                <h1 className="font-extrabold  transition-all duration-200 underline decoration-3 decoration-green-600 max-md:text-3xl text-5xl">Predict Your Future Weight</h1>
            </div>
            <div >
                {allOption.map((q) => (
                    <div key={q.q} className="flex flex-col items-center text-center capitalize">
                        <div>
                            <p className="text-2xl font-bold ">{q.q}</p>
                        </div>
                        <div>
                            {q.o.map((opt) => {
                                const isSelected = answers[q.id] === opt;
                                return (
                                    <button
                                        key={opt}
                                        onClick={() =>
                                            setAnswers((prev) => ({
                                                ...prev,
                                                [q.id]: opt,
                                            }))
                                        }
                                        className={`px-4 text-black-900 cursor-pointer py-2 m-2 mb-10 text-1xl max-lg:text-xs font-semibold rounded transition
                                                ${isSelected
                                                ? "bg-green-600 text-white"
                                                : "bg-green-200 hover:bg-green-300"
                                            } `}
                                    >
                                    {["300","500"].includes(opt) ? sign : ""}{opt}{["300","500"].includes(opt) ? " cal" : ""}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                ))}

            </div>
            <div className="flex flex-col items-center">
                <p className="text-green-700 font-bold">By the end of {t} months.</p>
                <p className="font-extrabold uppercase text-2xl"> Your Weight will be <span className="text-red-500 ">{finalWeight? finalWeight.toFixed(2) : "❌"}</span> Kg.</p>
            </div>
        </section>
    )
}