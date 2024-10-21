type AuthHeaderProps = {
  selectedTab: string;
};

function AuthHeader({ selectedTab }: AuthHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-900">
        {selectedTab === "signin" ? "Welcome Back!" : "Create Your Account"}
      </h1>
      <p className="text-gray-500 mt-2 text-sm">
        Enter to start your journey towards financial freedom.
      </p>
    </div>
  );
}
export default AuthHeader;
