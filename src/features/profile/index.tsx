import { queryClient } from "@/lib/client";
import { useAuthStore } from "@/stores/auth-store";
import { generateUploadDropzone } from "@uploadthing/react";
import { useState } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUserDetails } from "./_api/queries";

export function UserProfilePage() {
  const data = useUserDetails();
  const accessToken = useAuthStore((state) => state.accessToken);
  const UploadImageDropzone = generateUploadDropzone({
    url: "http://localhost:8010/api/uploadthing",
  });
  const [uploadedImage, setUploadedImage] = useState<string>();
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-semibold">User Profile</h1>
      <img
        src={data.data?.data.data.profileImage}
        alt="User profile image"
        className="w-[200px] h-[200px] object-cover rounded-full"
      />
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload a new profile image</DialogTitle>
            <DialogDescription>
              Please upload a new profile image
            </DialogDescription>
          </DialogHeader>
          <UploadImageDropzone
            endpoint="profileImageUploader"
            config={{ cn: twMerge, mode: "manual" }}
            className="w-full"
            headers={() => {
              return {
                Authorization: `Bearer ${accessToken}`,
              };
            }}
            onChange={(file) => {
              const [profileImage] = file;
              const objectURL = URL.createObjectURL(profileImage);
              setUploadedImage(objectURL);
              return file;
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
        </DialogContent>
      </Dialog>
      <div className="my-10">
        <h2 className="text-lg font-semibold">Profile Image</h2>
      </div>
    </div>
  );
}
