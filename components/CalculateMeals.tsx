"use client";
import { useState } from "react";

type CalculateMeals = {
    maintenance: number;
}


export default function CalculateMeals({maintenance}: CalculateMeals) {

    const mainMeals=maintenance*0.7;
    const snackMeals=maintenance-mainMeals;

    const oneMeal=Math.round(mainMeals/3);
    const oneSnackMeal = Math.round(snackMeals/2);

    const Meals = [
       {m:"breakfast", c: oneMeal-200},
       {m:"lunch", c: oneMeal+100},
       {m:"dinner", c:oneMeal+100},
    ];

    const snacks = [
        {m: "snack1" , c: oneSnackMeal},
        {m: "snack2", c: oneSnackMeal},
    ]
    return (
        <div className="flex flex-col items-center mt-20">
            <div className="mx-auto text-2xl font-bold ">
                <h1>Meal Distribution According To Your Maintenance Calories</h1>
            </div>
            <div className="flex flex-col gap-20 lg:-mb-5 max-md:mb-40">
                <div className="flex gap-2 items-center justify-center mt-10 -mb-20 scale-130">
                    {Meals.map((meal) => (
                        <div key={meal.m} className="flex flex-col -space-y-1 items-center border-2 border-black rounded-sm  bg-green-200 p-2">
                                <div className="font-bold text-4xl">{meal.c}<span className="text-xl">cal</span></div>
                                <div>{meal.m}</div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 items-center justify-center mt-10 -mb-20 scale-130">
                    {snacks.map((meal) => (
                        <div key={meal.m} className="flex flex-col -space-y-1 items-center border-2 border-black rounded-sm  bg-pink-200 p-2">
                                <div className="font-bold text-4xl">{meal.c}<span className="text-xl">cal</span></div>
                                <div>{meal.m}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}