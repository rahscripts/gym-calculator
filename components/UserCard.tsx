import Image from "next/image";
import { useState } from "react";

type UserDataProps = {
    allData: {
        name: string;
        age: number;
        gender: string;
        height: number;
        weight: number;
        afactor: string;
    }
    ;
}

export default function UserCard({ allData }: UserDataProps) {
    const [color, setColor] = useState("purple");
    const colorMap: Record<string, string> = {
        purple: "from-green-500 via-green-600 to-green-800 border-green-700",
        blue: "from-blue-500 via-blue-600 to-blue-800 border-blue-700",
        green: "from-green-500 via-green-600 to-green-800 border-green-700",
        red: "from-red-500 via-red-600 to-red-800 border-red-700",
        yellow: "from-yellow-500 via-yellow-600 to-yellow-800 border-yellow-700",
    };


    return (
        <div className="flex  items-center space-y-5 flex-col justify-center max-md:mt-2  mt-10 -mb-5 p-2 ">
            <div
                className={`transition-all hover:scale-[1.02] bg-linear-to-t ${colorMap[color]}
  duration-300 rounded-2xl p-5 backdrop-blur-xl
  flex space-x-5 text-white items-start`}
            >

                <div>
                    <Image src={allData.gender == "male" ? "/boy.png" : "/girl.png"} alt="user image" height={110} width={110} className="rounded-xl" />
                </div>
                <div className="flex flex-col -space-y-1">
                    <p className="text-2xl pb-2 font-semibold">{allData.name ? allData.name : allData.gender=="male" ? "Athlete" : "Lifting Luna"}</p>
                    <div className="-space-y-1 text-sm">
                        <p>age: {allData.age}</p>
                        <p>sex: {allData.gender}</p>
                        <p>height: {allData.height}</p>
                        <p>weight: {allData.weight}</p>
                    </div>
                </div>
            </div>
            <div>
                <select onChange={(e) => setColor(e.target.value)} name="colorchange" className={`cursor-pointer font-semibold border-2 p-1 rounded border-${color}-700`} id="">
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="red">red</option>
                </select>
            </div>
        </div>
    )
}