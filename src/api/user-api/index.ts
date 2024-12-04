import axiosInstance from "@/api/axios";

const USER_BASE_URL = "/user";

const USER_URLS = {
  userDetails: `${USER_BASE_URL}/user-details`,
};

export interface UserDetailsResponse {
  data: UserData;
  message: string;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchUser = async () => {
  const headers = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${access_token}`, no need to send this header as Clerk handles it for us via cookies and session management in the api server
  };
  const { data } = await axiosInstance.get<UserDetailsResponse>(
    USER_URLS.userDetails,
    {
      headers,
    }
  );
  return data;
};
