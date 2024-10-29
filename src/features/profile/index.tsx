import { generateUploadButton } from "@uploadthing/react";
import { twMerge } from "tailwind-merge";

export function UserProfilePage() {
  const UploadButton = generateUploadButton({
    url: "http://localhost:8010/api/uploadthing",
  });
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-semibold">User Profile</h1>
      <UploadButton endpoint="profileImageUploader" config={{ cn: twMerge }} />
    </div>
  );
}
