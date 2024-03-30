import Slider from "@/components/Slider";
import { FEATURED } from "@/constants";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center max-w-[1200px] gap-2">
      <div>
        <h1 className="text-[32px] font-semibold text-[#393D46] red-rose-bold">
          Featured
        </h1>
      </div>
      <div className="w-full overflow-hidden flex justify-center">
        <Slider data={FEATURED} cardType="featured" />
      </div>
    </section>
  );
};

export const Card = ({
  data,
}: {
  data: {
    src: string;
    alt: string;
    label: string;
    price: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-1 w-[280px] items-center justify-center border-[1px] border-[#000] rounded-sm p-2 m-2 ">
      <Image src={data.src} alt={data.alt} width={280} height={240} className="w-full h-full no-drag" />
      <div className="flex flex-col text-center">
        <p>{data.label}</p>
        <p className="text-sm text-gray-400 font-medium">$ {data.price}</p>
      </div>
    </div>
  );
};

export default Featured;
