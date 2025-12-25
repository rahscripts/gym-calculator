'use client';
import { useEffect, useState } from "react";
import PredictFuture from "./PredictFuture";
import UserCard from "./UserCard";
import HoverTooltipText from "./HoverToolTipText";

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
        if (gender == "male") {
            const newmailbmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
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
            const newfemalebmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
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
            protien: weight * 1.5,
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
            protien: weight * 2,
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
        <div className="max-w-7xl mx-auto my-10 p-10">
            <div className="flex flex-col items-center">
                <div className="mb-10">
                    <h1 className="font-extrabold transition-all duration-300 underline decoration-3 decoration-green-600 max-md:text-3xl text-5xl">Daily Calorie Intake Calculator</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold flex flex-col text-2xl transition-all duration-200 max-lg:text-sm items-center">
                        <div>
                            My name is
                            <input value={name} type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="name"
                                className="p-1 border-green-600 text-black border-1 rounded m-2 w-30"
                            />. <br />
                        </div>

                        <div>
                            I am a
                            <input value={age} type="number"
                                onChange={(e) => setAge(Number(e.target.value))}
                                placeholder="20"
                                className="p-1 text-black border-green-600 border-1 rounded m-2 w-15"
                            />-year-old young
                            <select value={gender} onChange={(e) => setGender(e.target.value)} className="border-1 border-green-600 p-1 m-2 rounded">
                                <option value="" disabled>?</option>
                                <option value="male">man</option>
                                <option value="female"> woman</option></select>. <br />
                        </div>
                        <div>
                            I stand
                            <input value={height} type="number"
                                onChange={(e) => setHeight(Number(e.target.value))}
                                placeholder="175"
                                className="p-1 text-black border-1 border-green-600 rounded m-2 w-20"
                            />cm tall,
                            weigh approximately
                            <input value={weight} type="number"
                                onChange={(e) => setWeight(Number(e.target.value))}
                                placeholder="65"
                                className="p-1 text-black border-green-600 border-1 rounded m-2 w-15"
                            /> kg,
                            <br />
                        </div>
                        <div>
                            and maintain a
                            <select
                                value={afactor}
                                onChange={(e) => setAfactor(e.target.value)}
                                className="border-1 border-green-600 p-1 rounded m-2">
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
                        {gender === "male" ?
                            <div className="flex flex-col -space-x-1 items-start justify-center">

                                <div className="text-gray-700"><HoverTooltipText text="BMR(basal metabolic rate):" tooltip="calories that burn if you sleep all day without walking or exercising."/> <span className=" font-bold">{maintenance < 8000 ? `${Math.round(malebmr)} calories` : "Enter Valid Info"}</span></div>

                                <div className="text-4xl max-md:text-2xl font-semibold tracking-tight uppercase"><HoverTooltipText text="Maintenance Calories:" tooltip="The daily calories your body needs to maintain its current weight. "/> <span className=" font-bold text-green-700">{maintenance < 8000 ? `${Math.round(maintenance)} calories` : "Enter Valid Info"}</span></div>

                            </div> :
                            <div className="flex flex-col -space-x-1 items-start justify-center">
                                 <div className="text-gray-700"><HoverTooltipText text="BMR(basal metabolic rate):" tooltip="calories that burn if you sleep all day without walking or exercising."/> <span className=" font-bold">{maintenance < 8000 ? `${Math.round(femalebmr)} calories` : "Enter Valid Info"}</span></div>

                                <div className="text-4xl max-md:text-2xl font-semibold tracking-tight uppercase"><HoverTooltipText text="Maintenance Calories:" tooltip="The daily calories your body needs to maintain its current weight. "/> <span className=" font-bold text-green-700">{maintenance < 8000 ? `${Math.round(maintenance)} calories` : "Enter Valid Info"}</span></div>
                            </div>
                        }


                    </div>
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
                        <div>
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