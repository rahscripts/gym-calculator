"use client";
import { useState } from "react";

type PredictFutureProps = {
    maintenance: number;
    afactorobject: {
        light:number;
        moderate:number;
        heavy:number;
        athlete:number;
    };
    allData: {
         name:string;
            age:number;
            gender:number;
            height:number;
            weight:number;
            afactor:number;
    }
    ;
}

export default function PredictFuture({
    maintenance, afactorobject, allData,
}: PredictFutureProps) {
    //whats your ultimate goal?
    const option1 = ["Weigth Loss", "Weight Gain"];
    //how many calories you can {} everyday?
    const option2 = ["300","500"];
    //how many months you gonna follow the plan?
    const option3 = ["6","12"];

    const allOption = [
         {
            q: "whats your ultimate goal?", o1: "Weight Loss", o2: " Weight Gain",
        },
        {
            q: "You gonna follow: ", o1: "300", o2: "500",
        },
        {
            q: "how many months you gonna follow the plan?", o1: "3", o2: "12",
        },
    ];


    
    const mcal = maintenance;
    const w = allData.weight;
    

    return (
        <section>
            <div className="m-10">
                    <h1 className="font-extrabold underline decoration-3 decoration-green-600 text-3xl">Predict Your Future Weight</h1>
            </div>
            <div>
            {allOption.map((o) => (
                <div>
                    <div>
                        {o.q}
                    </div>
                    <div>
                        <p>{o.o1}</p>
                        <p>{o.o2}</p>
                    </div>
                </div>
            ))}


            </div>
        </section>
    )
}