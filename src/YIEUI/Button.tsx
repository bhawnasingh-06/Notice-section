import React from "react";

type ButtonProps = {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "filter"
    | "outlined"
    | "navigation";
  classes: string;
} & React.ComponentProps<"button">;
const Button = ({ classes, children, variant, ...rest }: ButtonProps) => {
  let btnClasses;

  // More variant can be added like secondary
  if (variant === "primary") {
    btnClasses =
      "bg-gradient-to-r from-orange-400 to-pink-800 text-white py-4 px-5 text-2xl rounded-2xl xl:mt-16 lg:mt-10 w-3/4 md:w-auto mx-11 md:mx-0 mt-5";
  } else if (variant === "secondary") {
    btnClasses = "bg-yellow-200 py-1 px-4 rounded-md hover:bg-yellow-300";
  } else if (variant === "filter") {
    btnClasses = "bg-gray-200 py-1 px-3 rounded-sm ";
  } else if (variant === "outlined") {
    btnClasses =
      "border py-2 text-gray-500 rounded-md border-black hover:border-gray-400 hover:text-black w-full";
  } else if (variant === "navigation") {
    btnClasses =
      "py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ml-1";
  }
  return (
    <div className={classes}>
      <button className={btnClasses} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
