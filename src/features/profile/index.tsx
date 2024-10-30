import { queryClient } from "@/lib/client";
import { useAuthStore } from "@/stores/auth-store";
import { generateUploadDropzone } from "@uploadthing/react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function UserProfilePage() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const UploadImageDropzone = generateUploadDropzone({
    url: "http://localhost:8010/api/uploadthing",
  });
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-semibold">User Profile</h1>
      <div className="my-10">
        <h2 className="text-lg font-semibold">Profile Image</h2>
        <UploadImageDropzone
          endpoint="profileImageUploader"
          config={{ cn: twMerge }}
          className="w-[400px]"
          headers={() => {
            return {
              Authorization: `Bearer ${accessToken}`,
            };
          }}
          onClientUploadComplete={(res) => {
            const responseMessage = res[0].serverData.message as string;
            toast.success(responseMessage, {
              position: "bottom-right",
              richColors: true,
              duration: 2_000,
            });
            queryClient.invalidateQueries({ queryKey: ["userDetails"] });
          }}
        />
      </div>
    </div>
  );
}
