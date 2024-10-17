import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const greetTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  let greeting = "";

  if (hours >= 0 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon";
  } else if (hours >= 17 && hours < 20) {
    greeting = "Good Evening";
  } else if (hours >= 20 && hours < 24) {
    greeting = "Good Night";
  }

  return greeting;
};
