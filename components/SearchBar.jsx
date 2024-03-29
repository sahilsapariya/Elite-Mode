"use client";

import Image from "next/image";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("product searched ", searchTerm);
  };
  return (
    <div className="w-full bg-white-A700 py-2">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-centermax-w-[500px] w-full mx-auto py-2"
        >
          <div className="">
            <input
              type="text"
              placeholder="Search for products"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full min-w-[17rem] px-4 py-2 border-[1px] border-[#000] outline-none focus:outline-none active:outline-none rounded-l-sm"
            />
          </div>

          <div className="flex justify-center items-center min-w-[3rem] bg-[#000]">
            <button type="submit">
              <span>
                <Image
                  src="/icons/img_search_white_a700.svg"
                  alt="search button"
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
