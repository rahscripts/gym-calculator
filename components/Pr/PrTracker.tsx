"use client";
import { useEffect, useState } from "react";
import PrCard from "./PrCard";

type Pr = {
  id: string;
  exerciseName: string;
  prweight: string;
  date: number;
};

export default function PrTracker() {
  const [exerciseName, setExerciseName] = useState("");
  const [prweight, setPrweight] = useState("");
  const [prs, setPrs] = useState<Pr[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("pr");
    if (saved) {
      setPrs(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pr", JSON.stringify(prs));
  }, [prs]);

  const handleInput = () => {
    if (!exerciseName || !prweight) return;

    const newPr: Pr = {
      id: crypto.randomUUID(),
      exerciseName,
      prweight,
      date: Date.now(), // ✅ store raw number
    };

    setPrs(prev => [newPr, ...prev]);
    setExerciseName("");
    setPrweight("");
  };

  const handleDelete = (id: string) => {
      setPrs(prev => prev.filter(t => t.id !==id))
  }

  const minus = () => {
    setPrweight(String(Number(prweight)-1))
  }
  const plus = () => {
    setPrweight(String(Number(prweight)+1))
  }

  const breakPR = (id: string, newWeight: string) => {
    setPrs(prev => prev.map(t => t.id === id ? {...t, prweight: newWeight} : t));
  }

  console.log(prs);

  return (
    <main className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-5 mb-5">
        <input
          type="text"
          className="input input-neutral"
          value={exerciseName}
          placeholder="exercise name"
          onChange={(e) => setExerciseName(e.target.value)}
        />

        <div className="flex gap-5">
          <button onClick={minus} className="btn">-</button>
          <input
            type="number"
            className="input w-24 input-neutral"
            value={prweight}
            placeholder="weight"
            onChange={(e) => setPrweight(e.target.value)}
          />
          <button onClick={plus} className="btn">+</button>
        </div>
        <div className="btn" onClick={handleInput}>
          Add
        </div>
        
      </div>

      <div className="grid gap-3">
        {prs.map((pr) => (
          <PrCard key={pr.id} handleDelete={handleDelete} breakPr={breakPR} pr={pr} />
        ))}
      </div>
    </main>
  );
}
