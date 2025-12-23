"use client";
import { Props } from "next/script";
import { useState } from "react";

type PredictFutureProps = {
    maintenance: number;
    afactorobject: {
        light:number;
        moderate:number;
        heavy:number;
        athlete:number;
    };
    allData: object;
}

export default function PredictFuture({
    maintenance, afactorobject, allData
}: PredictFutureProps) {
    return (
        <div>predict</div>
    )
}