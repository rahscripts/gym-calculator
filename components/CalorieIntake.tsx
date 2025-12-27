'use client';
import { useEffect, useState } from "react";
import PredictFuture from "./PredictFuture";
import UserCard from "./UserCard";
import HoverTooltipText from "./HoverToolTipText";

export default function CalorieIntake() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [afactor, setAfactor] = useState("");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    const [malebmr, setMalebmr] = useState(0);
    const [femalebmr, setFemalebmr] = useState(0);

    const [maintenance, setMantenace] = useState(0);
    const [press, setPress] = useState(false);
    const allData = {
        name,
        age,
        gender,
        height,
        weight,
        afactor,
    };

    const afactorobject = {
        light: 1.375,
        moderate: 1.55,
        heavy: 1.75,
        athlete: 1.9,
    }

    const calculateBmr = () => {
        const ageNum = Number(age);
        const heightNum = Number(height);
        const weightNum = Number(weight);

        if (gender == "male") {
            const newmailbmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5;
            setMalebmr(newmailbmr);
            let mentanence = newmailbmr;
            if (afactor == "light") {
                mentanence *= afactorobject.light;
            } else if (afactor == "moderate") {
                mentanence *= afactorobject.moderate;
            } else if (afactor == "heavy") {
                mentanence *= afactorobject.heavy;
            } else if (afactor == "athlete") {
                mentanence *= afactorobject.athlete;
            }

            setMantenace(mentanence);
        } else {
            const newfemalebmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161;
            setFemalebmr(newfemalebmr);
            let mentanence = newfemalebmr;
            if (afactor == "light") {
                mentanence *= afactorobject.light;
            } else if (afactor == "moderate") {
                mentanence *= afactorobject.moderate;
            } else if (afactor == "heavy") {
                mentanence *= afactorobject.heavy;
            } else if (afactor == "athlete") {
                mentanence *= afactorobject.athlete;
            }

            setMantenace(mentanence);
        }
        setPress(true);
    }

    useEffect(() => {
        if (typeof window === "undefined") return;

        const raw = localStorage.getItem("calorieUser");
        if (!raw) return;

        const savedData = JSON.parse(raw);

        setName(savedData.name || "");
        setAge(savedData.age || "");
        setGender(savedData.gender || "");
        setHeight(savedData.height || "");
        setWeight(savedData.weight || "");
        setAfactor(savedData.afactor || "");
    }, []);


    const saveData = () => {
        const data = {
            name,
            age,
            gender,
            height,
            weight,
            afactor,
        };

        localStorage.setItem("calorieUser", JSON.stringify(data));
    };

    useEffect(() => {
        saveData();
    }, [name, age, gender, height, weight, afactor]);




    const goals = [
        {
            label: "Weight Loss",
            color: "bg-red-200 hover:bg-red-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: -300,
            emoji: "🥦",
            t: "text-red-600",
            question: "How does weight loss work?",
            answer:
                "Weight loss happens when your body uses more energy than the food you eat, so it starts burning stored body fat.",
            example:
                "A 70 kg person eats 1800 calories but needs 2200, so the body burns about 400 calories from fat daily."
        },
        {
            label: "Weight Gain",
            color: "bg-green-200 hover:bg-green-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: 400,
            emoji: "🍔",
            t: "text-green-600",
            question: "How does weight gain work?",
            answer:
                "Weight gain happens when you eat more energy than your body needs, so the extra food gets stored as body weight.",
            example:
                "A 70 kg person eats 2600 calories but needs 2200, so the extra 400 calories increase body weight over time."
        },
        {
            label: "Build Muscles",
            color: "bg-orange-200 hover:bg-orange-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: 0,
            protien: Number(weight) * 1.5,
            t: "text-orange-600",
            emoji: "🦵🏻",
            question: "How does muscle building work?",
            answer:
                "Muscle builds when you train with weights and give your body enough protein and rest to repair stronger.",
            example:
                "A 70 kg person lifts weights regularly and eats enough protein, so muscles slowly grow bigger and stronger."
        },
        {
            label: "Body Recomposition",
            color: "bg-gray-300 hover:bg-gray-400 px-2 p-1 rounded m-1 cursor-pointer duration-150 font-semibold",
            calorie: -300,
            protien: Number(weight) * 2,
            t: "text-purple-700 ",
            emoji: "🏃🏻",
            question: "How does body recomposition work?",
            answer:
                " Body recomposition uses maintenance calories, high protein, balanced carbs and fats to lose fat while gaining muscle.",
            example:
                "A 70 kg person eats near maintenance calories, lifts weights, loses fat slowly, and gains muscle together."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto my-10 px-4 md:p-10">
            <div className="flex flex-col items-center">
                <div className="mb-12">
                    <h1 className="font-extrabold transition-all duration-300 underline decoration-3 decoration-green-600 max-md:text-3xl text-5xl text-center">Daily Calorie Intake Calculator</h1>
                </div>
                <div className="flex flex-col items-center justify-center w-full max-w-2xl">
                    {/* Name Input - Optional */}
                    <div className="w-full mb-8">
                        <input 
                            value={name} 
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name (optional)"
                            className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg text-black focus:border-green-500 focus:outline-none transition-colors duration-300"
                        />
                    </div>

                    {/* Counter Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                        {/* Age Counter */}
                        <div className="flex flex-col items-center">
                            <label className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Age</label>
                            <div className="flex items-center justify-center gap-3 w-full">
                                <button
                                    onClick={() => {
                                        const val = age ? Number(age) - 1 : 0;
                                        if (val >= 0) setAge(val.toString());
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300"
                                >
                                    −
                                </button>
                                <input
                                    type="text"
                                    value={age}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (val === "" || !isNaN(Number(val))) setAge(val);
                                    }}
                                    placeholder="0"
                                    className="w-24 p-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg text-black focus:border-green-500 focus:outline-none transition-colors duration-300"
                                />
                                <button
                                    onClick={() => setAge((Number(age) + 1).toString())}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Height Counter */}
                        <div className="flex flex-col items-center">
                            <label className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Height (cm)</label>
                            <div className="flex items-center justify-center gap-3 w-full">
                                <button
                                    onClick={() => {
                                        const val = height ? Number(height) - 1 : 0;
                                        if (val >= 0) setHeight(val.toString());
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300"
                                >
                                    −
                                </button>
                                <input
                                    type="text"
                                    value={height}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (val === "" || !isNaN(Number(val))) setHeight(val);
                                    }}
                                    placeholder="0"
                                    className="w-24 p-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg text-black focus:border-green-500 focus:outline-none transition-colors duration-300"
                                />
                                <button
                                    onClick={() => setHeight((Number(height) + 1).toString())}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Weight Counter */}
                        <div className="flex flex-col items-center">
                            <label className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Weight (kg)</label>
                            <div className="flex items-center justify-center gap-3 w-full">
                                <button
                                    onClick={() => {
                                        const val = weight ? Number(weight) - 1 : 0;
                                        if (val >= 0) setWeight(val.toString());
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300"
                                >
                                    −
                                </button>
                                <input
                                    type="text"
                                    value={weight}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (val === "" || !isNaN(Number(val))) setWeight(val);
                                    }}
                                    placeholder="0"
                                    className="w-24 p-4 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg text-black focus:border-green-500 focus:outline-none transition-colors duration-300"
                                />
                                <button
                                    onClick={() => setWeight((Number(weight) + 1).toString())}
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Gender Selector */}
                    <div className="w-full mb-8">
                        <label className="text-sm font-bold text-gray-700 mb-3 block uppercase tracking-wide">Gender</label>
                        <select 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)} 
                            className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg text-black focus:border-green-500 focus:outline-none transition-colors duration-300"
                        >
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    {/* Activity Level Selector */}
                    <div className="w-full mb-8">
                        <label className="text-sm font-bold text-gray-700 mb-3 block uppercase tracking-wide">Activity Level</label>
                        <select
                            value={afactor}
                            onChange={(e) => setAfactor(e.target.value)}
                            className="w-full p-3 text-lg border-2 border-gray-300 rounded-lg text-black focus:border-green-500 focus:outline-none transition-colors duration-300"
                        >
                            <option value="" disabled>Select activity level</option>
                            <option value="light">Lightly Active</option>
                            <option value="moderate">Moderately Active</option>
                            <option value="heavy">Active</option>
                            <option value="athlete">Very Active</option>
                        </select>
                    </div>

                    {/* Calculate Button */}
                    <button 
                        onClick={calculateBmr} 
                        className="w-full md:w-auto px-8 py-4 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold text-lg cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                        Calculate
                    </button>
                    
                    {/* Results Section */}
                    {press && (
                        <div className="w-full mt-12 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-300 transition-all duration-300">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-700 text-sm mb-2"><HoverTooltipText text="BMR (Basal Metabolic Rate):" tooltip="Calories that burn if you sleep all day without walking or exercising."/> </p>
                                    <p className="text-3xl md:text-4xl font-bold text-green-700">{maintenance < 8000 ? `${Math.round(gender === "male" ? malebmr : femalebmr)} calories` : "Enter Valid Info"}</p>
                                </div>
                                
                                <div>
                                    <p className="text-gray-700 text-sm mb-2"><HoverTooltipText text="Maintenance Calories:" tooltip="The daily calories your body needs to maintain its current weight."/></p>
                                    <p className="text-4xl md:text-5xl font-bold text-green-600">{maintenance < 8000 ? `${Math.round(maintenance)} calories` : "Enter Valid Info"}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="hidden">
                        {press && (
                            <div className="flex flex-col items-center">
                                <h1 className="text-3xl tracking-tighter font-semibold m-10 mb-3">
                                    {gender === "male" ? "Mr." : "Mrs."} <span className="capitalize">{name}</span>! Know about your Goal! {gender === "male" ? "🧑🏻‍💻" : "👩🏻‍💻"}
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
                                                    <div>
                                                        <div className="text-2xl font-bold mt-3">{goal.question}</div>
                                                        <div className="opacity-90 text-xs">{goal.answer}</div>
                                                        <div className={`${goal.t}`}>since, your maintenance calories is <span className="font-bold text-green-600">{Math.round(maintenance)}</span>, you need to make change of <span className="font-bold">{goal.calorie}</span> calorie in your diet.</div>
                                                        <div>{goal.protien ?
                                                            <div>
                                                                <p className="text-1xl font-semibold italic">Daily protien goal: {goal.protien}gm🥣</p>
                                                                <p></p>
                                                            </div> :
                                                            ""}</div>
                                                    </div>
                                                    <div className="mt-1 font-semibold mb-2">
                                                        Calories to {goal.label}: <span className="text-2xl font-bold">{Math.round(maintenance + goal.calorie)} {goal.emoji}</span>
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
            <div>
                {press &&
                    <div>
                        <div >
                            <PredictFuture allData={allData} />
                        </div>
                        <div>
                            <UserCard allData={allData} />
                        </div>
                    </div>}
            </div>
        </div>
    )

}