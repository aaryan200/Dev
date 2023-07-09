import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

export const Button = forwardRef<
    HTMLButtonElement,
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>>(({ className, children, ...rest }, ref) => {
        return <button {...rest} ref={ref} className={`py-1 px-2 border border-gray-400 focus:border-blue-500 outline-none rounded w-full ${className}`}>
            {children}
        </button>
    })