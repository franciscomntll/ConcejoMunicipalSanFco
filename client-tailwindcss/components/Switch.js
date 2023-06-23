import { memo, useEffect, useState } from "react";

export const Switch = memo((props) => {
  const [options] = useState(props?.options);
  return (
    <div className="flex  items-center h-10 rounded-full bg-slate-100 overflow-hidden relative">
        <div className={`w-1/2 absolute top-0 left-0 h-full bg-primary transition ${props.value === options[0] ? "" : "translate-x-full bg-slate-700"}`}/>
      {options?.slice(0,2)?.map((option, index) => (
        <button
          key={index}
          onClick={() => props.onChange(option)}
          onDrag={() => props.onChange(option)}
          className={`w-1/2 h-full text-xs font-bold uppercase flex items-center px-20 text-center justify-center transition z-5 relative ${props.value === option ? "text-white" : "text-slate-900"}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
});
