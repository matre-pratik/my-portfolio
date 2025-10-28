import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn - classname
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}

