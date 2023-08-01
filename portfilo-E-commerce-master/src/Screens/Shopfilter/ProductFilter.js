import React from 'react'
import PriceRang from '../../Compoments/PriceRang'
import Container from '../../Compoments/Container';
import FilterColor from '../../Compoments/FilterColor';
import Categories from '../../Compoments/Categories';
import SearchInput from "../../Compoments/SearchInput";
import Sorting from '../../Compoments/Sorting';
import Pagination from '../../Compoments/Pagination';
import SliderCard from '../../Compoments/SliderCard';


function ProductFilter() {

    const array = [1,2,3,4,5,6,7,8]

  return (
    <div>
      <Container>
        <div className=" grid md:grid-cols-4  grid-cols-1 md:gap-8">
          <div>
            <PriceRang />
            <FilterColor />
            <Categories />
          </div>

          <div className="col-span-3 ">
            <SearchInput />
            <Sorting />
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 my-8">
              {/* <SliderCard /> */}
            </div>
            <Pagination />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductFilter