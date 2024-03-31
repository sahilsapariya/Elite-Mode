import { CATEGORIES } from "@/constants";
import Image from "next/image";

const Categories = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10">
      <div>
        <h1 className="text-[32px] font-semibold text-[#393D46] red-rose-bold">
          Categories
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {CATEGORIES.map((category, index) => {
          return (
            <Card
              key={index}
              src={category.src}
              alt={category.alt}
              label={category.label}
            />
          );
        })}
      </div>
    </section>
  );
};

const Card = (props: any) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center bg-gray-50 rounded-sm p-2 m-2">
      <Image src={props.src} alt={props.alt} width={100} height={100} />
      <span>{props.label}</span>
    </div>
  );
};

export default Categories;
