type AuthHeaderProps = {
  page: string;
};

function AuthHeader({ page }: AuthHeaderProps) {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-medium dark:text-primary">
        {page === "signin" ? "Sign In" : "Create Your Account"}
      </h1>
      <p className="my-3 text-sm font-normal text-gray-700 dark:text-foreground">
        {page === "signin"
          ? "Continue your journey towards financial freedom."
          : "Enter to start your journey towards financial freedom."}
      </p>
    </div>
  );
}
export default AuthHeader;
