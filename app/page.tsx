import Hero from "@/app/Components/Hero";
import NewArrivals from "@/app/Components/NewArrivals";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10">
      <Hero />
      <NewArrivals />
    </main>
  );
}
