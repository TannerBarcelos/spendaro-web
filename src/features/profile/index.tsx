import { generateUploadDropzone } from "@uploadthing/react";
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
        />
      </div>
    </div>
  );
}
