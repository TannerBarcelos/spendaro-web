type AuthHeaderProps = {
  selectedTab: string;
};

function AuthHeader({ selectedTab }: AuthHeaderProps) {
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-medium">
        {selectedTab === "signin" ? "Sign In" : "Create Your Account"}
      </h1>
      <p className="my-3 text-sm font-normal">
        {selectedTab === "signin"
          ? "Continue your journey towards financial freedom."
          : "Enter to start your journey towards financial freedom."}
      </p>
    </div>
  );
}
export default AuthHeader;
