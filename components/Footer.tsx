import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#393D46] flex justify-center py-12">
      <div className="w-full max-w-[1200px] flex flex-col">
        <Link href="/" className="flex flex-nowrap ml-5 items-center">
          <Image
            src="/icons/img_group_19_white_a700.svg"
            alt="image"
            width={50}
            height={50}
            className="w-auto h-auto cursor-pointer"
          />{" "}
          <h4 className="cursor-pointer text-white text-2xl font-bold font-poppins"> Elliye</h4>
        </Link>
        <div className="flex lg:flex-row flex-col gap-x-10 ">
          <div className="p-5">
            <p className="text-gray-300 text-justify">
              Step into style with Elliye. Explore our curated collection of
              chic and trendy clothing, footwear, and accessories for every
              occasion. From casual essentials to statement pieces, find your
              perfect look with us. Enjoy hassle-free shopping, fast shipping,
              and exceptional customer service. Elevate your wardrobe today with
              Elliye.
            </p>
          </div>
          <div className="flex pt-5 items-start gap-5 justify-center pr-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-white min-w-[30px]"
            >
              <Image
                src="/icons/social/insta.svg"
                alt="instagram"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-white min-w-[30px]"
            >
              <Image
                src="/icons/social/fb.svg"
                alt="facebook"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-white min-w-[30px]"
            >
              <Image
                src="/icons/social/x.svg"
                alt="twitter"
                width={50}
                height={50}
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 mb-5">
          <a
            href="https://sahilsapariya.netlify.app"
            target="_blank"
            className="text-gray-400"
          >
            © Made with ❤️, Sahil Sapariya, 2024
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
