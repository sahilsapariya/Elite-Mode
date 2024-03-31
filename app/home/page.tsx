import Hero from "@/app/home/components/Hero";
import NewArrivals from "@/app/home/components/NewArrivals";
import Categories from "@/app/home/components/Categories";
import Featured from "@/app/home/components/Featured";
import WhyChooseUs from "@/app/home/components/WhyChooseUs";
import Brands from "@/app/home/components/Brands";

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
