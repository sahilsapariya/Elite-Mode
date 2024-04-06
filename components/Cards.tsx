import Image from "next/image";
import Link from "next/link";

type Category = {
  data: {
    label: string;
    imgUrl: string;
    slug: string;
    gender: string;
  };
};

export const CategoryCard = ({ data }: Category) => {
  return (
    <div className="h-[120px] mx-[-10px] md:m-1">
      <Link
        href={`/home/categories/${data.slug}`}
        className="flex flex-col gap-1 items-center justify-center bg-gray-50 border rounded-sm p-2 m-2 w-32 h-[calc(100%-8px)]"
      >
        <Image
          src={data.imgUrl}
          alt={data.label}
          width={50}
          height={50}
          className="no-drag"
        />
        <h3 className="text-center">{data.label}</h3>
      </Link>
    </div>
  );
};


