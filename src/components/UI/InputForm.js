import React from "react";
import { useController } from "react-hook-form";

const InputForm = (props) => {
  const { label, type, name, placeholder, control } = props;
  const { field, fieldState } = useController({ name, control });
  return (
    <>
      <div className="my-1">
        <label className=" relative flex items-center gap-5 text-gray-700 font-bold mb-2 ">
          {label}
        </label>
        <input
          className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-blue-500  sm:text-sm"
          placeholder={placeholder}
          type={type}
          {...field}
        />
        <span style={{ color: "red", paddingLeft: "5px" }}>
          {fieldState.error && fieldState.error.message}
        </span>
      </div>
    </>
  );
};
export default InputForm;
