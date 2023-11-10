import React from 'react';

export default function Buttons({ handleSort, value, title }) {
  return (
    <div>
      <button onClick={handleSort} value={value} className="btns">
        {title}
      </button>
    </div>
  );
}