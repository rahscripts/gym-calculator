"use client";
import { useState } from "react";

type PredictFutureProps = {
    allData: {
        name: string;
        age: string;
        gender: string;
        height: string;
        weight: string;
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


    const w = Number(allData.weight);

    const finalWeight = goal==="Weight Loss" ? w-totalkg : w+totalkg;
    console.log(finalWeight);

    const allOption = [
        {
            id: 1, q: "whats your ultimate goal?", o: ["Weight Loss", " Weight Gain"],
        },
        {
            id: 2, q: "I will eat in", o: ["300", "500"]
        },
        {
            id: 3, q: "how many months you gonna follow the plan?", o: ["6", "12"],
        },
    ];



    const sign = goal === "Weight Loss" ? "-" : "+";
    

    return (
        <section className="mt-20 px-4 md:px-0">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-extrabold transition-all duration-300 underline decoration-3 decoration-green-600 max-md:text-3xl text-5xl">Predict Your Future Weight</h1>
                </div>

                {/* Questions Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {allOption.map((q) => (
                        <div 
                            key={q.id} 
                            className="bg-white border-2 border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:border-pink-500 hover:shadow-lg"
                        >
                            <p className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">
                                {q.q}{q.q === "I will eat in" ? " (±) calories" : ""}
                            </p>
                            <div className="flex flex-col gap-3">
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
                                            className={`px-6 py-3 rounded-lg cursor-pointer font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                                                isSelected
                                                    ? "bg-green-500 text-white shadow-lg"
                                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            }`}
                                        >
                                            {["300", "500"].includes(opt) ? sign : ""}
                                            {opt}
                                            {["300", "500"].includes(opt) ? " cal" : ""}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results Section */}
                {goal && cal && t && (
                    <div className="bg-gradient-to-r scale-80 from-green-50 via-green-100 to-green-50 border-3 border-green-500 rounded-3xl p-8 md:p-12 text-center transition-all duration-300 shadow-xl">
                        <p className="text-gray-700 text-lg md:text-xl mb-4">
                            After following your plan for <span className="font-bold text-green-700">{t} months</span>...
                        </p>
                        
                        <div className="bg-white rounded-2xl p-8 mb-6 border-2 border-green-300">
                            <p className="text-gray-600 text-base md:text-lg mb-2">Your Current Weight</p>
                            <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{w} kg</p>

                            <div className="flex justify-center items-center my-4">
                                <div className="w-full h-1 bg-green-400"></div>
                                <span className="mx-4 text-2xl font-bold text-green-500">{sign}</span>
                                <div className="w-full h-1 bg-green-400"></div>
                            </div>

                            <p className="text-gray-600 text-base md:text-lg mb-2">Weight Change</p>
                            <p className="text-2xl md:text-3xl font-bold text-red-500">{totalkg.toFixed(2)} kg</p>
                        </div>

                        <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-8 text-white">
                            <p className="text-sm md:text-base mb-2 uppercase tracking-wide opacity-90">Your Goal Weight</p>
                            <p className="text-5xl md:text-6xl font-black mb-2">{finalWeight ? finalWeight.toFixed(2) : "❌"}</p>
                            <p className="text-lg md:text-xl">kg</p>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {(!goal || !cal || !t) && (
                    <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-12 text-center">
                        <p className="text-gray-600 text-lg">Select all options above to see your predicted weight</p>
                    </div>
                )}
            </div>
        </section>
    );
}