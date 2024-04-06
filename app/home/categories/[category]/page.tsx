"use client";
import { ProductCard } from "@/components/Cards";
import Filter from "@/components/Filter";
import { PRODUCTS } from "@/constants";
import { useEffect, useState } from "react";

interface FilterState {
  selectedBrands: string[];
  selectedPrice: string[];
  selectedColors: string[];
}

export default function Category({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState(PRODUCTS);
  const [filterState, setFilterState] = useState<FilterState>({
    selectedBrands: [],
    selectedPrice: [],
    selectedColors: [],
  });

  const handleBrandToggle = (brand: string) => {
    setFilterState((prevState) => ({
      ...prevState,
      selectedBrands: prevState.selectedBrands.includes(brand)
        ? prevState.selectedBrands.filter((brand) => brand !== brand)
        : [...prevState.selectedBrands, brand],
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

  const filterProducts = () => {
    return PRODUCTS.filter((product) => {
      if (
        filterState.selectedBrands.length > 0 &&
        !filterState.selectedBrands.includes(product.brand.toLowerCase())
      ) {
        return false;
      }

      if (filterState.selectedPrice.length > 0) {
        const [minPrice, maxPrice] = filterState.selectedPrice[0].split("-");
        if (
          product.price < parseInt(minPrice) ||
          (maxPrice && product.price > parseInt(maxPrice))
        ) {
          return false;
        }
      }

      if (
        filterState.selectedColors.length > 0 &&
        !filterState.selectedColors.some((color) =>
          product.colors?.includes(color.toLowerCase())
        )
      ) {
        return false;
      }

      return true;
    });
  };

  useEffect(() => {
    const filteredProducts = filterProducts();
    setProducts(filteredProducts);
  }, [filterState]);

  return (
    <>
      <Filter
        filterState={filterState}
        handleBrandToggle={handleBrandToggle}
        handleColorToggle={handleColorToggle}
        handlePriceChange={handlePriceChange}
        clearAllFilters={clearAllFilters}
      />
      <section className="w-full md:w-[calc(100%-13.25rem)]">
        <h1 className="bold-20 mb-5 ml-2">
          {(params.category &&
            params.category[0].toUpperCase() + params.category.slice(1)) ||
            ""}
        </h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>
        ) : (
          <h2 className="bold-20 text-center">No products found</h2>
        )}
      </section>
    </>
  );
}
