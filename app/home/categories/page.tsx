import { clothingCategoriesMen } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Category = {
  data: {
    label: string;
    imgUrl: string;
    slug: string;
    gender: string;
  };
};

export default function Categories() {
  return (
    <section className="container max-container padding-container mb-5">
      <div>
        <h1 className="bold-32 mb-1">Men</h1>
        <hr />
        <div className="hidden w-full md:flexCenter">
          <div className="flex justify-center flex-wrap">
            {clothingCategoriesMen.map((category, index) => {
              return <CategoryCard data={category} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const CategoryCard = ({ data }: Category) => {
  return (
    <div className="h-[120px] m-1">
      <Link
        href={`/home/categories/${data.slug}`}
        className="flex flex-col gap-1 items-center justify-center bg-gray-50 border rounded-sm p-2 m-2 w-32 h-[calc(100%-8px)]"
      >
        <Image src={data.imgUrl} alt={data.label} width={50} height={50} />
        <h3 className="text-center">{data.label}</h3>
      </Link>
    </div>
  );
};
