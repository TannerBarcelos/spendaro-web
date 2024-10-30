import axiosInstance from "@/lib/axios";
import { useAuthStore } from "@/stores/auth-store";
import { useUserStore } from "@/stores/user-store";

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
  const access_token = useAuthStore.getState().accessToken;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  };
  const response = await axiosInstance.get<UserDetailsResponse>(
    USER_URLS.userDetails,
    {
      headers,
    }
  );
  const { firstName, lastName, email, profileImage } = response.data.data;

  // Update the user store with the fetched user data
  const store = useUserStore.getState();
  store.setFirstName(firstName);
  store.setLastName(lastName);
  store.setEmail(email);
  store.setProfileImage(profileImage);

  return response;
};
