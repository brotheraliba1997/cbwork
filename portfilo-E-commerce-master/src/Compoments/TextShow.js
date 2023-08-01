import React from 'react'

function TextShow({ title, fsize, className }) {
  return (
    <div>
      <p className={`text-[${fsize}] ${className}`}> {title} </p>
    </div>
  );
}

export default TextShow