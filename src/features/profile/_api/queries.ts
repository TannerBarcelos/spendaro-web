import { useQuery } from "@tanstack/react-query";
import { fetchUser } from ".";

export const useFetchUserDetails = (isSignedIn: boolean) => {
  return useQuery({
    queryKey: ["userDetails"],
    queryFn: fetchUser,
    enabled: isSignedIn,
    retry: 1,
  });
};
