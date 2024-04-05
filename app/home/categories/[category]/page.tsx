export default function Category({ params }: { params: { category: string } }) {
  return <div>Category: {params.category}</div>;
}
