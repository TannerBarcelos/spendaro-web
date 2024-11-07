type AuthHeaderProps = {
  page: string;
};

function AuthHeader({ page }: AuthHeaderProps) {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-medium">
        {page === "signin" ? "Sign In" : "Create Your Account"}
      </h1>
      <p className="my-3 text-sm font-normal">
        {page === "signin"
          ? "Continue your journey towards financial freedom."
          : "Enter to start your journey towards financial freedom."}
      </p>
    </div>
  );
}
export default AuthHeader;
