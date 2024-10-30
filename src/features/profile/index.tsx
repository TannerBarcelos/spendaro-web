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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUserDetails } from "./_api/queries";
import { Button } from "@/components/ui/button";

export function UserProfilePage() {
  const data = useUserDetails();
  const accessToken = useAuthStore((state) => state.accessToken);
  const UploadImageDropzone = generateUploadDropzone({
    url: "http://localhost:8010/api/uploadthing",
  });
  const [uploadedImage, setUploadedImage] = useState<string>();
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-semibold">Account</h1>
      <div className="my-8">
        <h3 className="text-lg font-medium mt-4 mb-2">Profile Photo</h3>
        <div className="flex items-center w-auto">
          <img
            src={data.data?.data.data.profileImage}
            alt="User profile image"
            className="w-[80px] h-[80px] object-cover rounded-full"
          />
          <Dialog>
            <div className="mx-4">
              <DialogTrigger>
                <Button className="bg-gray-200/60 text-gray-900 mr-4 hover:bg-gray-200/90">
                  Change Photo
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload a new profile photo</DialogTitle>
              </DialogHeader>
              {uploadedImage && (
                <img
                  src={uploadedImage}
                  alt="User profile photo"
                  className="w-[200px] h-[200px] object-cover"
                />
              )}
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
          <Dialog>
            <DialogTrigger>
              <Button variant="destructive">Remove Photo</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Remove Photo?</DialogTitle>
                <DialogDescription>
                  This photo will be deleted and you&apos;ll need to upload a
                  new one.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Remove Photo</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-lg font-semibold">User Information</h2>
        <div>
          <p>
            <span className="font-semibold">First Name:</span>{" "}
            {data.data?.data.data.firstName}
          </p>
          <p>
            <span className="font-semibold">Last Name:</span>{" "}
            {data.data?.data.data.lastName}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {data.data?.data.data.email}
          </p>
        </div>
      </div>
    </div>
  );
}
