"use client";

import { useState } from "react";

type Pr = {
  id: string;
  exerciseName: string;
  prweight: string;
  date: number;
};

type PrCardProps = {
  pr: Pr;
  handleDelete: (id: string) => void;
  breakPr: (id: string, newString: string) => void;
};

export default function PrCard({ pr, handleDelete, breakPr }: PrCardProps) {
  const formatDate = (date: number) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const [newWeight, setNewWeight] = useState("");
    const [open, setOpen] = useState(false);

  return (
    <div key={pr.id} className="bg-base-200 border border-base-300 transition-all duration-300 rounded-xl p-4 mt-2 shadow-sm hover:shadow-md ">
      
      {/* Date */}
      <div className="text-xs text-gray-500 mb-1">
        {formatDate(pr.date)}
      </div>

      {/* Exercise Name */}
      <div className="text-2xl font-bold uppercase  tracking-wide">
        {pr.exerciseName}
      </div>

      {/* PR Weight */}
      <div onClick={() => {
          breakPr(pr.id, newWeight);  setOpen(!open);
          }} className="text-base font-semibold text-green-600 mt-1">
        {open ? <input value={newWeight} autoFocus placeholder="enter new weight" className="input" onChange={(e) => setNewWeight(e.target.value)}/> : pr.prweight} kg
      </div>
      <div>
        <button className="btn" onClick={() => handleDelete(pr.id)}>delete</button>
      </div>
        <button onClick={() => {
         setOpen(!open);
          }} className="btn">Break your pr</button>
    </div>
  );
}
