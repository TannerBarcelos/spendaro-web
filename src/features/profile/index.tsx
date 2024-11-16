import { queryClient } from "@/api/query-client";
import { authStore } from "@/stores/auth-store";
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
import { useUserDetails } from "@/api/user-api/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UserProfilePage() {
  const data = useUserDetails();
  const accessToken = authStore((state) => state.accessToken);
  const UploadImageDropzone = generateUploadDropzone({
    url: "http://localhost:8010/api/uploadthing",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-semibold">Account</h1>
      <div className="my-8">
        <h3 className="text-lg font-medium mt-4 mb-2">Profile Photo</h3>
        <div className="flex items-center w-auto">
          <img
            src={data.data?.data.profileImage}
            alt="User profile image"
            className="w-[80px] h-[80px] object-cover rounded-full"
          />
          <Dialog
            open={dialogOpen}
            onOpenChange={(isOpen) => {
              setDialogOpen(isOpen);
            }}
          >
            <div className="mx-4">
              <DialogTrigger>
                <Button className="bg-gray-200/60 text-gray-900 hover:bg-gray-200/90">
                  Change Photo
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload a new profile photo</DialogTitle>
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
                  setDialogOpen(false);
                }}
              />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                className="hover:bg-red-200/10 border-red-300 text-red-700"
              >
                Remove Photo
              </Button>
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
        <h3 className="text-lg font-medium mt-8 mb-2">Name</h3>
        <div className="flex flex-col items-center w-fit">
          <div>
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder={data.data?.data.firstName ?? "name"}
              className="w-[400px]"
            />
          </div>
          <div className="mt-4">
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder={data.data?.data.firstName ?? "name"}
              className="w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
