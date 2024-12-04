import AuthHeader from "./_components/auth-header";
import { Link } from "@tanstack/react-router";
import { SignUp } from "@clerk/clerk-react";

function SignupPage() {
  return (
    <div className="w-3/4 m-auto">
      <AuthHeader page="signup" />
      {/* Signing up always puts a user through onboarding first */}
      <SignUp routing="hash" fallbackRedirectUrl="/onboarding" />
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
