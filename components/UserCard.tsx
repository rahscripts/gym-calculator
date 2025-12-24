import Image from "next/image"

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

export default function UserCard({allData} :  UserDataProps) {
    return (
        <div className="flex items-center space-y-5 flex-col justify-center mt-30 mt-4 p-2 ">
            <div className="transition-all bg-gradient-to-t from-purple-500 via-purple-600 to-purple-800 duration-300 rounded-2xl p-5 backdrop-blur-xl flex space-x-5 text-white items-start">
                <div>
                    <Image src={allData.gender == "male" ? "/boy.png" : "/girl.png"} alt="user image" height={110} width={110} className="rounded-xl"/>
                </div>
                <div className="flex flex-col -space-y-1">
                    <p className="text-2xl pb-2 font-semibold">{allData.name}</p>
                    <div className="-space-y-1 text-sm">
                        <p>age: {allData.age}</p>
                        <p>sex: {allData.gender}</p>
                        <p>height: {allData.height}</p>
                        <p>weight: {allData.weight}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}