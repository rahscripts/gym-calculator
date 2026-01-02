
import CalorieIntake from "@/components/CalorieIntake";
import Header from "@/components/Header";
import FAQlists from "@/components/FAQlists";
import Footer from "@/components/Footer";
import CalculateMeals from "@/components/CalculateMeals";
import PrTracker from "@/components/Pr/PrTracker";

export default function Home() {
  return (
    <section>
      <div><Header /></div>
      <div className="max-lg:mt-10 mt-20 max-md:mb-0 mb-20 transition-all duration-200">
        <CalorieIntake />
      </div>
      <div className="mb-20 max-sm:-mt-10 mt-40"><FAQlists /></div>
      
      <div>
        <Footer />
      </div>
    </section>
  );
}
