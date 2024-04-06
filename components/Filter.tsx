import { FILTER } from "@/constants";

export default function Filter({
  filterState,
  clearAllFilters,
  handleBrandToggle,
  handlePriceChange,
  handleColorToggle,
}: {
  filterState: any;
  clearAllFilters: any;
  handleBrandToggle: any;
  handlePriceChange: any;
  handleColorToggle: any;
}) {
  return (
    <section className="hidden md:block w-[12rem]">
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
                <label
                  className="flex items-center gap-2 cursor-pointer"
                  key={index}
                >
                  <input
                    type="checkbox"
                    checked={filterState.selectedBrands.includes(brand.value)}
                    onChange={() => handleBrandToggle(brand.value)}
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
                <label
                  className="flex items-center gap-2 cursor-pointer"
                  key={index}
                >
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
                <label
                  className="flex items-center gap-2 cursor-pointer"
                  key={index}
                >
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
