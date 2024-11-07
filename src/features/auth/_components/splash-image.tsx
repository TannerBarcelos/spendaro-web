type SplashImageProps = {
  src: string;
};

function SplashImage({ src }: SplashImageProps) {
  let img_src = "";
  switch (src) {
    case "signin":
      img_src = "/assets/illustrations/signin.svg";
      break;
    case "signup":
      img_src = "/assets/illustrations/signup.svg";
      break;
    default:
      img_src = "/assets/illustrations/feel-good.svg";
      break;
  }

  return (
    <div className="w-1/2 h-full bg-primary/[0.03] rounded-2xl">
      <div className="flex flex-col items-center justify-center h-full">
        <img
          src={img_src}
          alt={`${src} photo for auth screens`}
          className="w-2/3"
        />
      </div>
    </div>
  );
}
export default SplashImage;
