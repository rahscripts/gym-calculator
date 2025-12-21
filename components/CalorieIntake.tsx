'use client';
import { useState } from "react";

export default function CalorieIntake() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [afactor, setAfactor] = useState("");

    const [malebmr, setMalbmr] = useState(0);
    const [femalebmr, setFemalebmr] = useState(0);

    const calculateBmr = () => {
        if (gender === "male") {
        const newmailbmr = (10*weight)+(6.25*height)-(5*age)+5;
        setMalbmr(newmailbmr);
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
                    <option value="lightactive">Lightly active</option>
                    <option value="modeactive">Moderately active</option>
                    <option value="active">Active</option>
                    <option value="active">Very Active</option>
                    </select> lifestyle.
            </div>
            <div className="flex">
                <button onClick={calculateBmr} className="p-2 rounded m-10 bg-green-500 hover:bg-green-600 font-bold cursor-pointer mx-auto items-center ">Calulate</button>
            </div>
            <div>
                {malebmr}
            </div>
        </div>
    )

}