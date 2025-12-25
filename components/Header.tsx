export default function Header() {
    return (
        <div className="max-w-7xl mx-auto mb-10 p-10">
          <div className="flex items-center justify-between">
          <div>
              <h1 className="text-3xl font-extrabold ">
                Calorie Calculator
                <span className="uppercase font-black tracking-tighter text-xs italic underline decoration-wavy text-green-600">
                    by MR
                    </span>
                    </h1>
          </div>
          <div><button className="bg-green-500 p-2 rounded font-bold hover:bg-green-600 transition-all duration-300 cursor-pointer"> still developing! </button></div>
            </div> 
        </div>
    )
}