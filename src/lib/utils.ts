import { isAxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Takes an error object and returns a string message - will determine if it's an Axios error or generic error and parse the message accordingly
 * @param error - error object (can be any type)
 * @returns error message as a string
 */
export const errorBuilder = (error: unknown): string => {
  if (isAxiosError(error)) {
    return error.response?.data.message;
  } else {
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred";
    return errorMessage;
  }
};

export const greetTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  let greeting = "";

  if (hours >= 0 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon";
  } else if (hours >= 17 && hours < 24) {
    greeting = "Good Evening";
  }

  return greeting;
};

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const truncateUsername = (firstName?: string | null, lastName?: string | null) => {

  if (!firstName || !lastName) {
    return "";
  }

  return `${firstName ?? ""} ${lastName ?? ""}`
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
};
