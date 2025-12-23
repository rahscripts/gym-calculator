"use client";
import { useState } from "react";

type PredictFutureProps = {
    maintenance: number;
    afactorobject: {
        light: number;
        moderate: number;
        heavy: number;
        athlete: number;
    };
    allData: {
        name: string;
        age: number;
        gender: number;
        height: number;
        weight: number;
        afactor: number;
    }
    ;
}

export default function PredictFuture({
    maintenance, afactorobject, allData,
}: PredictFutureProps) {


    const [answers, setAnswers] = useState<Record<number, string>>({});



    //whats your ultimate goal?
    const option1 = ["Weigth Loss", "Weight Gain"];
    //how many calories you can {} everyday?
    const option2 = ["300", "500"];
    //how many months you gonna follow the plan?
    const option3 = ["6", "12"];

    const allOption = [
        {
            id: 1, q: "whats your ultimate goal?", o: ["Weight Loss", " Weight Gain"],
        },
        {
            id: 2, q: "You gonna follow: ", o: ["300", "500"]
        },
        {
            id: 3, q: "how many months you gonna follow the plan?", o: ["3", "12"],
        },
    ];



    
    const w = allData.weight;



    return (
        <section>
            <div className="m-10">
                <h1 className="font-extrabold underline decoration-3 decoration-green-600 text-3xl">Predict Your Future Weight</h1>
            </div>
            <div>
                {allOption.map((q) => (
                    <div key={q.q}>
                        <p>{q.q}</p>
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
                                        className={`px-4 py-2 rounded transition
                    ${isSelected
                                                ? "bg-green-600 text-white"
                                                : "bg-green-200 hover:bg-green-300"
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                ))}

            </div>
            <div>

            </div>
        </section>
    )
}