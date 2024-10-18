type PageProps = {
  children?: React.ReactNode;
};

function Page({ children }: PageProps) {
  return (
    <div className="min-h-screen flex flex-col m-4 lg:mx-0">{children}</div>
  );
}
export default Page;
