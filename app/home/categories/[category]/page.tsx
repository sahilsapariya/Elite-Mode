import Filter from "@/components/Filter";

export default function Category({ params }: { params: { category: string } }) {
  return (
    <div>
      <Filter />
    </div>
  );
}
