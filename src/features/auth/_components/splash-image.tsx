import { Zap } from "lucide-react";

function SplashImage() {
  return (
    <div className="w-1/2 h-full bg-primary/[0.009] rounded-2xl relative">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-start lg:w-[500px]">
            <Zap size={70} strokeWidth={1.5} className="text-logo" />
            <h1 className="lg:text-4xl font-bold text-primary my-4">
              Track, Save, Thrive.
            </h1>
            <p className="text-md  mt-2 text-foreground">
              Spendaro aims to help all users track their expenses, save money
              and thrive financially.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SplashImage;
