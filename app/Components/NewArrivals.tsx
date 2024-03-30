import Slider from "@/components/Slider";
import { NEW_ARRIVALS } from "@/constants";
import Image from "next/image";

const NewArrivals = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-[32px] text-[#393D46] font-semibold red-rose-bold">
          New Arrivals
        </h1>
        <div className="text-gray-400 red-rose-regular text-center">
          <p>
            Online shopping for New Arrivals from a great selection at Clothing
          </p>
          <p>Shoes & Jewlery store</p>
        </div>
      </div>

      <div className="mt-10 w-full overflow-hidden flex justify-center">
        <Slider data={NEW_ARRIVALS} cardType="new_arrivals" />
      </div>
    </section>
  );
};

export const Card = ({
  data,
}: {
  data: {
    img: string;
    alt: string;
    title: string;
    caption: string;
  };
}) => {
  return (
    <div className="relative min-w-[240px]">
      <Image
        src={data.img}
        alt={data.alt}
        width={240}
        height={280}
        className="rounded-t-[150px] w-full h-[280px] object-cover bg-cover bg-center no-drag"
      />
      <div className="mt-2">
        <h3 className="text-[#393D46] text-[16px] font-semibold">
          {data.title}
        </h3>
        <p className="text-gray-400 font-light text-[14px]">{data.caption}</p>
      </div>
    </div>
  );
};

export default NewArrivals;
