import Image from "next/image";

const Brands = () => {
  return (
    <section className="w-full py-5 flex justify-center max-w-[1200px]">
      <Image
        src="/icons/img_brands.svg"
        alt="brands"
        width={200}
        height={200}
        className="w-full h-full no-drag"
      />
    </section>
  );
};

export default Brands;
