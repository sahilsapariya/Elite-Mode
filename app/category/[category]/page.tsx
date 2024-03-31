const page = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <h1>{params.category}</h1>
      <p>Category content</p>
    </div>
  );
};

export default page;
