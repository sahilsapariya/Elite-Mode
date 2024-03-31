import Hero from "@/app/components/Hero";
import NewArrivals from "@/app/components/NewArrivals";
import Categories from "@/app/components/Categories";
import Featured from "@/app/components/Featured";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Brands from "@/app/components/Brands";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <NewArrivals />
      <Categories />
      <Featured />
      <WhyChooseUs />
      <Brands />
    </main>
  );
}
