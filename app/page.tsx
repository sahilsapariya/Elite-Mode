import Hero from "@/app/Components/Hero";
import NewArrivals from "@/app/Components/NewArrivals";
import Categories from "@/app/Components/Categories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <NewArrivals />
      <Categories />
    </main>
  );
}
