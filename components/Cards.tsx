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

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="m-0 md:m-2 max-w-[210px] w-[calc(100%-1rem)]">
      <Link
        href={`/home/products/${product.id}`}
        className="flex flex-col gap-3"
      >
        <div className="relative z-0 w-full min-h-64 flexCenter">
          <Image
            src={product.imgUrls[0]}
            alt={product.label}
            width={200}
            height={200}
            className="no-drag w-full"
          />
          <div className="absolute z-10 bottom-2 left-2 flexCenter gap-1 px-1 py-px rounded-sm bg-white opacity-80">
            <span className="regular-14">{product.averageRating}</span>
            <span>
              <Image
                src={"/icons/star.svg"}
                alt="rating"
                width={14}
                height={14}
              />
            </span>
            <span> | </span>
            <span className="regular-14">{product.totalRatings}</span>
          </div>
        </div>
        <div className="w-full">
          <h3 className="bold-16 font-[Poppins]">{product.brand}</h3>
          <h4 className="regular-14 text-gray-400">{product.label}</h4>

          <div className="gap-3 flexStart">
            <span className="bold-16">₹ {product.price}</span>
            <span className="text-[12px] line-through text-gray-400">
              ₹ {product.prevPrice}
            </span>
            <span className="text-[12px] font-light text-orange-500">
              {"("}
              {product.offer}% OFF{")"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
