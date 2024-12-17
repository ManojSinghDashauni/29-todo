import React, { useId } from "react";

const Textarea = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block font-semibold mb-4 pl-1  text-[#0d5051]"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        rows="4"
        cols="50"
        className={`px-3 py-2  outline-none border-none focus:bg-[#eff2f9]  w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Textarea;
