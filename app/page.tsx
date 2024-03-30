import Hero from "@/app/Components/Hero";
import NewArrivals from "@/app/Components/NewArrivals";
import Categories from "@/app/Components/Categories";
import Featured from "@/app/Components/Featured";
import WhyChooseUs from "@/app/Components/WhyChooseUs";
import Brands from "@/app/Components/Brands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <NewArrivals />
      <Categories />
      <Featured />
      <WhyChooseUs />
      <Brands />
      <Footer />
    </main>
  );
}
