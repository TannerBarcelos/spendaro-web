import { queryClient } from "@/lib/client";
import { getTokensFromLocalStorage } from "@/lib/utils";
import { generateUploadDropzone } from "@uploadthing/react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function UserProfilePage() {
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
              Authorization: `Bearer ${getTokensFromLocalStorage().accessToken ?? ""}`,
            };
          }}
          onClientUploadComplete={(_) => {
            toast.success("Profile image updated", {
              position: "bottom-right",
              richColors: true,
              duration: 2_000,
            });
            // userStore.setProfileImage(profileImage);
            queryClient.invalidateQueries({ queryKey: ["userDetails"] });
          }}
        />
      </div>
    </div>
  );
}
