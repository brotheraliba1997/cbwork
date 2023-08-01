import React from 'react'

function Container({children}) {
  return <div className="w-full md:w-[90%] mx-auto p-5">{children}</div>;
}

export default Container