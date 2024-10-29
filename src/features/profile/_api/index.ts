import axiosInstance from "@/lib/axios";

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
  const response = await axiosInstance.get<UserDetailsResponse>(
    USER_URLS.userDetails,
  );
  return response;
};
