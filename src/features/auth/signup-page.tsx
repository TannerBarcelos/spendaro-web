import { z } from "zod";
import AuthHeader from "./_components/auth-header";
import { Link } from "@tanstack/react-router";
import { SignUp } from "@clerk/clerk-react";

const newUserSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export type NewUser = z.infer<typeof newUserSchema>;

function SignupPage() {
  return (
    <div className="w-3/4 m-auto">
      <AuthHeader page="signup" />
      <SignUp />
      <p className="text-xs pt-4 text-gray-500 font-normal">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-primary hover:text-primary/90 ml-1 dark:text-secondary dark:hover:text-secondary/90"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
export default SignupPage;
