'use client';
import { useState } from "react";
import CalorieIntake from "@/components/CalorieIntake";
import Header from "@/components/Header";
import FAQlists from "@/components/FAQlists";
import PurchaseDietPlan from "@/components/PurchasedDietPlan";

export default function Home() {
  return (
    <section>
      <div><Header /></div>
      <div className="max-lg:mt-10 mt-30 max-md:mb-0 mb-20 transition-all duration-200">
        <CalorieIntake />
      </div>
      <div className="mb-20 max-sm:-mt-10 mt-40"><FAQlists /></div>
      <div>
  
      </div>
    </section>
  );
}
