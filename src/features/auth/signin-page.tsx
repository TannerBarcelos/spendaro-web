import { Route as AuthRoute } from "@/routes/(auth)/_auth/signin";
import AuthHeader from "./_components/auth-header";
import { Link } from "@tanstack/react-router";
import { SignedOut, SignIn } from "@clerk/clerk-react";

function SigninPage() {
  const redirect_url = AuthRoute.useSearch({
    select: (search) => search.redirect_url,
  });
  return (
    <div className="w-3/4 m-auto">
      <SignedOut>
        <AuthHeader page="signin" />
        <SignIn fallbackRedirectUrl={redirect_url || "/dashboard"} />
        <p className="text-xs pt-4 text-gray-500 font-normal">
          Don&apos;t have an account?
          <Link
            to="/signup"
            className="text-primary hover:text-primary/90 ml-1 dark:text-secondary dark:hover:text-secondary/90"
          >
            Sign up
          </Link>
        </p>
      </SignedOut>
    </div>
  );
}
export default SigninPage;
