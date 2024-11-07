type SplashImageProps = {
  src: string;
};

function SplashImage({ src }: SplashImageProps) {
  return (
    <div className="w-1/2 h-full bg-primary/[0.03] rounded-2xl">
      <div className="flex flex-col items-center justify-center h-full">
        <img src={src} alt="Feel good illustration" className="w-2/3" />
      </div>
    </div>
  );
}
export default SplashImage;
