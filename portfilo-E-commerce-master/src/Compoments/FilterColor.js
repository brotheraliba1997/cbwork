import React from 'react'
import TextShow from './TextShow';

function FilterColor() {

    const array = [0,1,2,3,4,5,6,7]
  return (
    <div className="mt-4">
      <TextShow
        title="Color"
        fsize="24px"
        className="text-[#11142D] font-semibold text-left"
      />

      <div className="grid grid-cols-4 gap-4">
        {array.map(() => (
          <div className="rounded-full w-[40px] h-[40px] bg-[#E2E2EA] mx-auto">
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterColor