'use client';
import { useState } from "react";

export default function CalorieIntake() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [afactor, setAfactor] = useState("");

    const [malebmr, setMalebmr] = useState(0);
    const [femalebmr, setFemalebmr] = useState(0);
    
    const [Mantenance, setMantenace] = useState(0);


    const light = 1.375;
    const moderate = 1.55;
    const heavy = 1.75;
    const athlete = 1.9;

    const calculateBmr = () => {
        if (gender == "male") {
        const newmailbmr = (10*weight)+(6.25*height)-(5*age)+5;
        setMalebmr(newmailbmr);
        let mentanence = newmailbmr;
        if (afactor == "lightactive") {
            mentanence*=light
        } else if (afactor == "moderate") {
            mentanence*=moderate
        } else if (afactor == "heavy") {
            mentanence*=heavy
        } else if (afactor == "athlete") {
            mentanence*=athlete
        }

        setMantenace(mentanence);
        } else {
            const newfemalebmr = (10*weight)+(6.25*height)-(5*age)-161;
            setFemalebmr(newfemalebmr);
        }
    }
    return (
        <div className="max-w-3xl mx-auto m-20 p-10">
            <div>
                My name is 
                <input value={name} type="text" 
                onChange={(e) => setName(e.target.value)}
                placeholder="name" 
                className="p-1 text-black border-1 rounded m-2 w-30" 
                />. 
                
                I am a 
                <input value={age} type="number" 
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="20" 
                className="p-1 text-black border-1 rounded m-2 w-15" 
                />-year-old young 
                
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="border-1 p-1 m-2 rounded">
                    <option value="" disabled>?</option>
                    <option value="male">man</option>
                    <option value="female"> woman</option></select>. 

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


                and maintain a <select value={afactor} onChange={(e) => setAfactor(e.target.value)} className="border-1 p-1 rounded m-2">
                    <option value="" disabled>?</option>
                    <option value="light">Lightly active</option>
                    <option value="moderate">Moderately active</option>
                    <option value="heavy">Active</option>
                    <option value="athlete">Very Active</option>
                    </select> lifestyle.
            </div>
            <div className="flex">
                <button onClick={calculateBmr} className="p-2 rounded m-10 bg-green-500 hover:bg-green-600 font-bold cursor-pointer mx-auto items-center ">Calulate</button>
            </div>
            <div>
                {name} If you just lie in a bed all day, your body still needs {malebmr} calories to survive. total calories: {Math.round(Mantenance)}.
                
            </div>
            <div>
                {name} If you just lie in a bed all day, your body still needs {femalebmr} calories to survive.
            </div>
        </div>
    )

}