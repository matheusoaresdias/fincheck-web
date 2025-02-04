import { ComponentProps } from "react";

export function Button(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className="
        bg-teal-900
        hover:bg-teal-800
        disabled:bg-gray-100
        text-white
        px-6
        h-12
        rounded-2xl
        font-medium
        disabled:text-gray-400
        disabled:cursor-not-allowed
        transition-all
        active:bg-teal-950
      "
    ></button>
  );
}
