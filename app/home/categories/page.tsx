import { CategoryCard } from "@/components/Cards";
import Slider from "@/components/Slider";
import { clothingCategoriesMen } from "@/constants";
import React from "react";

export default function Categories() {
  return (
    <>
      <div className="w-full padding-container">
        <h1 className="bold-24 mb-1">Men</h1>
        <hr />
        <div className="hidden w-full md:flexCenter">
          <div className="flex justify-center flex-wrap">
            {clothingCategoriesMen.map((category, index) => {
              return <CategoryCard data={category} key={index} />;
            })}
          </div>
        </div>

        <div className="block md:hidden">
          <Slider
            data={clothingCategoriesMen.slice(
              0,
              Math.floor(clothingCategoriesMen.length / 2)
            )}
            cardType="category"
          />
          <Slider
            data={clothingCategoriesMen.slice(
              Math.floor(clothingCategoriesMen.length / 2),
              clothingCategoriesMen.length
            )}
            cardType="category"
          />
        </div>
      </div>
    </>
  );
}
