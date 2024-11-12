import { Link } from "@tanstack/react-router";
import { AlertCircle } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-background">
      <div className="mb-6 relative w-48 h-48">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted"
          />
          <path
            d="M30 30 L70 70 M70 30 L30 70"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
        <AlertCircle className="absolute bottom-0 right-0 h-12 w-12 text-primary" />
      </div>
      <h1 className="text-6xl font-black mb-3 text-foreground">404</h1>
      <h2 className="text-2xl font-semibold mb-3 text-foreground">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Oops! It seems the page you're looking for doesn't exist or has been
        moved.
      </p>
      <Link
        to="/dashboard"
        className="bg-logo text-white dark:hover:bg-foreground/10 light:hover:bg-primary/90 font-bold py-3 px-6 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        Go back home
      </Link>
    </div>
  );
}
export default NotFound;
