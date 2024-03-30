import { WHY_CHOOSE_US } from "@/constants";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-gray-50 gap-10 py-5">
      <div>
        <h2 className="text-[32px] font-semibold text-[#393D46] red-rose-bold">
          Why Choose Us
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {WHY_CHOOSE_US.map((service, index) => {
          return (
            <Card
              src={service.src}
              key={index}
              alt={service.alt}
              label={service.label}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Card = (props: any) => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[250px] m-3">
      <Image
        src={props.src}
        alt={props.alt}
        width={75}
        height={75}
        className="max-w-[100px] max-h-[100px]"
      />
      <span className="text-2xl text-center font-bold">{props.label}</span>
      <p className="text-center text-gray-400">{props.description}</p>
    </div>
  );
};

export default WhyChooseUs;
