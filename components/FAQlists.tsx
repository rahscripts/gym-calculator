"use client";
import { useState } from "react";

export default function FAQlists() {
  const fitnessFAQs = [
    {
      question: "What is BMR?",
      answer:
        "BMR means Basal Metabolic Rate, which is the number of calories your body needs to stay alive at rest, like breathing and heartbeat, without any movement or exercise.",
      example:
        "If your BMR is 1600 calories, your body will burn 1600 calories even if you sleep all day without walking or exercising.",
    },
    {
      question: "What are maintenance calories?",
      answer:
        "Maintenance calories are the calories you need to eat daily to keep your body weight the same, meaning you neither gain weight nor lose weight over time.",
      example:
        "If you eat 2200 calories daily and your weight stays the same for weeks, then 2200 is your maintenance calories.",
    },
    {
      question: "How do I gain weight?",
      answer:
        "To gain weight, you must eat more calories than your maintenance calories consistently, focus on protein, carbs, and strength training so the gained weight is mostly muscle.",
      example:
        "If your maintenance is 2200 calories, eating around 2600 calories daily with workouts will slowly increase your body weight.",
    },
    {
      question: "How do I lose weight?",
      answer:
        "To lose weight, you need to eat fewer calories than your maintenance calories while staying active, so your body starts using stored fat for energy.",
      example:
        "If your maintenance is 2200 calories, eating around 1800 calories daily will help you lose weight gradually.",
    },
    {
      question: "What is a calorie deficit?",
      answer:
        "A calorie deficit happens when you eat fewer calories than your body burns in a day, which forces your body to use fat as energy.",
      example:
        "Burning 2200 calories daily but eating only 1800 calories creates a 400 calorie deficit.",
    },
    {
      question: "What is a calorie surplus?",
      answer:
        "A calorie surplus means you eat more calories than your body needs, which helps in gaining weight, muscle, or fat depending on your diet and training.",
      example:
        "Eating 2600 calories when your body needs only 2200 calories creates a 400 calorie surplus.",
    },
    {
      question: "Why is protein important?",
      answer:
        "Protein helps repair muscles, build strength, and recover after workouts, making it essential for muscle growth, fat loss, and overall body health.",
      example:
        "Eating eggs, chicken, or whey protein after workouts helps your muscles recover and grow stronger.",
    },
    {
      question: "How much protein should I eat?",
      answer:
        "A beginner should eat around 1.6 to 2 grams of protein per kilogram of body weight daily for good muscle growth and recovery.",
      example:
        "If you weigh 60 kg, eating about 100 to 120 grams of protein daily is enough.",
    },
    {
      question: "What is body fat?",
      answer:
        "Body fat is the stored energy in your body, which protects organs and provides fuel, but too much body fat can cause health and fitness problems.",
      example:
        "A person with high belly fat usually has higher body fat percentage compared to someone lean.",
    },
    {
      question: "Why is strength training important?",
      answer:
        "Strength training builds muscle, increases metabolism, improves strength, and helps shape your body while also making fat loss more effective.",
      example:
        "Doing exercises like squats, push-ups, and weight lifting makes your body stronger and more muscular over time.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl max-lg:flex-col max-md:gap-0 gap-10 items-start flex mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col flex-2 uppercase mb-6">
        <div className="font-semibold text-green-700">FAQ's</div>
        <div className="font-extrabold flex text-2xl">
          frequently asked questions
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-3 flex flex-col flex-3">
        {fitnessFAQs.map((faq, index) => (
          <div key={faq.question} className="border-b pb-2">
            {/* Question */}
            <div
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="flex justify-between items-center cursor-pointer py-2"
            >
              <div
                className={`font-bold transition-colors duration-200 ${
                  activeIndex === index ? "text-green-600" : "text-black"
                }`}
              >
                {faq.question}
              </div>
              <div className="text-xl  font-bold">
                {activeIndex === index ? "−" : "+"}
              </div>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 font-bold text-sm">{faq.answer}</div>
              <div className="pt-1 text-sm opacity-80">{faq.example}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
