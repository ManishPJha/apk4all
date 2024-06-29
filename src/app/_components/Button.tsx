"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  redirectTo?: string;
  goBack?: boolean;
  transparent?: boolean;
  padding?: boolean;
  bold?: boolean;
}

const Button = forwardRef<any, ButtonProps>(
  (
    {
      children,
      className,
      redirectTo,
      goBack,
      bold,
      transparent,
      padding,
      onClick,
      ...props
    },
    ref
  ) => {
    const router = useRouter();

    const btnCombinedClasses = cn(
      "bg-blue-500 hover:bg-blue-700 text-white rounded focus:outline-none",
      transparent && "bg-transparent hover:bg-transparent",
      padding && "py-2 px-4",
      bold && "font-bold",
      goBack && "transition duration-300 ease-in-out",
      className
    );

    if (redirectTo) {
      return (
        <Link href={redirectTo} className={btnCombinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        className={btnCombinedClasses}
        onClick={goBack ? router.back : onClick}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
