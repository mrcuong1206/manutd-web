import React from "react";
import { useController } from "react-hook-form";

const InputForm = (props) => {
  const { label, type, name, placeholder, control } = props;
  const { field, fieldState } = useController({ name, control });
  return (
    <>
      <div className="my-6">
        <label className=" relative flex items-center pl-2">
          {label}
          <input
            className="ml-1 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </label>
        <span style={{ color: "red" }}>
          {fieldState.error && fieldState.error.message}
        </span>
      </div>
    </>
  );
};
export default InputForm;
