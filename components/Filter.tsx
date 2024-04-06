"use client";
import { FILTER } from "@/constants";
import React, { useState } from "react";

interface FilterState {
  selectedBrands: number[];
  selectedPrice: string[];
  selectedColors: string[];
}

export default function Filter() {
  const [filterState, setFilterState] = useState<FilterState>({
    selectedBrands: [],
    selectedPrice: [],
    selectedColors: [],
  });

  const handleBrandToggle = (brandId: number) => {
    setFilterState((prevState) => ({
      ...prevState,
      selectedBrands: prevState.selectedBrands.includes(brandId)
        ? prevState.selectedBrands.filter((id) => id !== brandId)
        : [...prevState.selectedBrands, brandId],
    }));
  };

  const handlePriceChange = (price: string) => {
    setFilterState((prevState) => ({
      ...prevState,
      selectedPrice: prevState.selectedPrice.includes(price)
        ? prevState.selectedPrice.filter((price) => price !== price)
        : [...prevState.selectedPrice, price],
    }));
  };

  const handleColorToggle = (color: string) => {
    setFilterState((prevState) => ({
      ...prevState,
      selectedColors: prevState.selectedColors.includes(color)
        ? prevState.selectedColors.filter((c) => c !== color)
        : [...prevState.selectedColors, color],
    }));
  };

  const clearAllFilters = () => {
    setFilterState({
      selectedBrands: [],
      selectedPrice: [],
      selectedColors: [],
    });
  };

  return (
    <section className="max-w-[12rem]">
      <div className="flex justify-between items-center">
        <h2 className="bold-20">Filter</h2>
        <button className="text-sm text-gray-500" onClick={clearAllFilters}>
          Clear all
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-2 my-3 px-3">
        <div className="flex flex-col gap-1">
          <h3 className="bold-16 ">BRAND</h3>
          <div className="flex flex-col gap-1">
            {FILTER.brands.map((brand, index) => {
              return (
                <label className="flex items-center gap-2" key={index}>
                  <input
                    type="checkbox"
                    checked={filterState.selectedBrands.includes(brand.id)}
                    onChange={() => handleBrandToggle(brand.id)}
                  />
                  <span>{brand.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 my-3 px-3">
        <div className="flex flex-col gap-1">
          <h3 className="bold-16 ">PRICE</h3>
          <div className="flex flex-col gap-1">
            {FILTER.price.map((price, index) => {
              return (
                <label className="flex items-center gap-2" key={index}>
                  <input
                    type="checkbox"
                    checked={filterState.selectedPrice.includes(price.value)}
                    onChange={() => handlePriceChange(price.value)}
                  />
                  <span>{price.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 my-3 px-3">
        <div className="flex flex-col gap-1">
          <h3 className="bold-16 ">COLOR</h3>
          <div className="flex flex-col gap-1">
            {FILTER.colors.map((color, index) => {
              return (
                <label className="flex items-center gap-2" key={index}>
                  <input
                    type="checkbox"
                    checked={filterState.selectedColors.includes(color.value)}
                    onChange={() => handleColorToggle(color.value)}
                  />
                  <span>{color.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
