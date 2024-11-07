type AuthHeaderProps = {
  selectedTab: string;
};

function AuthHeader({ selectedTab }: AuthHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">
        {selectedTab === "signin" ? "Welcome Back!" : "Create Your Account"}
      </h1>
      <p className="mt-2 text-sm">
        {selectedTab === "signin"
          ? "Continue your journey towards financial freedom."
          : "Enter to start your journey towards financial freedom."}
      </p>
    </div>
  );
}
export default AuthHeader;
