'use client';
import { useState } from "react";

export default function CalorieIntake() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [afactor, setAfactor] = useState("");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    const [malebmr, setMalebmr] = useState(0);
    const [femalebmr, setFemalebmr] = useState(0);

    const [Mantenance, setMantenace] = useState(0);
    const [press, setPress] = useState(false);


    const light = 1.375;
    const moderate = 1.55;
    const heavy = 1.75;
    const athlete = 1.9;

    const calculateBmr = () => {
        if (gender == "male") {
            const newmailbmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            setMalebmr(newmailbmr);
            let mentanence = newmailbmr;
            if (afactor == "light") {
                mentanence *= light
            } else if (afactor == "moderate") {
                mentanence *= moderate
            } else if (afactor == "heavy") {
                mentanence *= heavy
            } else if (afactor == "athlete") {
                mentanence *= athlete
            }

            setMantenace(mentanence);
        } else {
            const newfemalebmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            setFemalebmr(newfemalebmr);
        }
        setPress(true);
    }
    const goals = [
        {
            label: "Weight Loss",
            color: " bg-red-200 hover:bg-red-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: -300,
            emoji: "🥦"
        },
        {
            label: "Weight Gain",
            color: " bg-green-200 hover:bg-green-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: 400,
            emoji: "🍔"
        },
        {
            label: "Build Muscles",
            color: " bg-orange-200 hover:bg-orange-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: 0,
            emoji: "🦵🏻"
        },
        {
            label: "Body Recomposition",
            color: " bg-gray-300 hover:bg-gray-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: -300,
            emoji: "🏃🏻"
        },
    ];

    return (
        <div className="max-w-3xl mx-auto my-10 p-10">
            <div className="flex flex-col items-center">
                <div className="mb-10">
                    <h1 className="font-extrabold underline decoration-3 decoration-green-600 text-3xl">Daily Calorie Intake Calculator</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold flex flex-col text-2xl transition-all duration-200 max-lg:text-xs items-center">
                        <div>
                            My name is
                            <input value={name} type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="name"
                                className="p-1 text-black border-1 rounded m-2 w-30"
                            />. <br />
                        </div>

                        <div>
                            I am a
                            <input value={age} type="number"
                                onChange={(e) => setAge(Number(e.target.value))}
                                placeholder="20"
                                className="p-1 text-black border-1 rounded m-2 w-15"
                            />-year-old young
                            <select value={gender} onChange={(e) => setGender(e.target.value)} className="border-1 p-1 m-2 rounded">
                                <option value="" disabled>?</option>
                                <option value="male">man</option>
                                <option value="female"> woman</option></select>. <br />
                        </div>
                        <div>
                            I stand
                            <input value={height} type="number"
                                onChange={(e) => setHeight(Number(e.target.value))}
                                placeholder="175"
                                className="p-1 text-black border-1 rounded m-2 w-15"
                            />cm tall,
                            weigh approximately
                            <input value={weight} type="number"
                                onChange={(e) => setWeight(Number(e.target.value))}
                                placeholder="65"
                                className="p-1 text-black border-1 rounded m-2 w-15"
                            /> kg,
                            <br />
                        </div>
                        <div>
                            and maintain a
                            <select
                                value={afactor}
                                onChange={(e) => setAfactor(e.target.value)}
                                className="border-1 p-1 rounded m-2">
                                <option value="" disabled>?</option>
                                <option value="light">Lightly active</option>
                                <option value="moderate">Moderately active</option>
                                <option value="heavy">Active</option>
                                <option value="athlete">Very Active</option>
                            </select> lifestyle.
                        </div>
                    </div>
                    <div className="flex">
                        <button onClick={calculateBmr} className="p-2 rounded m-10 bg-green-500 hover:bg-green-600 font-bold cursor-pointer mx-auto items-center ">Calulate</button>
                    </div>
                    <div>
                        {gender == "male" ?
                            <div className="flex flex-col items-center justify-center">
                                <div>BMR (basal metabolic rate): <span className="text-2xl font-bold">{Math.round(malebmr)} calories </span></div>
                                <div>Calories to maintain weight: <span className="text-2xl font-bold text-green-700">{Math.round(Mantenance)} calories</span></div>
                            </div> :
                            <div className="flex flex-col items-center justify-center">
                                <div>BMR (basal metabolic rate): <span className="text-2xl font-bold">{Math.round(femalebmr)} calories </span></div>
                                <div>Calories to maintain weight: <span className="text-2xl font-bold text-green-700">{Math.round(Mantenance)} calories</span></div>
                            </div>
                        }


                    </div>
                    <div>
                        {press && (
                            <div>
                                <h1 className="text-3xl tracking-tighter font-semibold m-10 mb-3">
                                    Tell about your goal {gender === "male" ? "Mr." : "Mrs."} {name} 💪🏻
                                </h1>

                                <div className="flex flex-col items-center w-full">
                                    {goals.map((goal, index) => {
                                        const isOpen = activeIndex === index;

                                        return (
                                            <div key={index} className="w-full">
                                                <button
                                                    onClick={() => setActiveIndex(isOpen ? null : index)}
                                                    className={`py-5 cursor-pointer font-semibold w-full flex justify-between items-center ${index !== goals.length - 1 ? "border-b" : ""}
          `}
                                                >
                                                    <p className={goal.color}>{goal.label}</p>
                                                    <span className="text-sm opacity-60">
                                                        {isOpen ? "−" : "+"}
                                                    </span>
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-90" : "max-h-0 opacity-0"}
          `}
                                                >
                                                    <div className="mt-3 mb-2">
                                                        Calories to {goal.label}: <span className="text-2xl font-bold">{Math.round(Mantenance+ goal.calorie)} {goal.emoji}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )

}