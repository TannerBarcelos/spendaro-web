type BoxProps = {
  dollar_amount: number;
};

function Box({ dollar_amount }: BoxProps) {
  return (
    <div className="h-full w-full flex justify-center mt-12">
      <p className="text-2xl font-semibold">${dollar_amount}</p>
    </div>
  );
}
export default Box;
