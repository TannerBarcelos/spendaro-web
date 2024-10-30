import { useQuery } from "@tanstack/react-query";
import { fetchUser } from ".";

export const useUserDetails = () => {
  return useQuery({
    queryKey: ["userDetails"],
    queryFn: fetchUser,
    retry: 3,
    staleTime: Infinity // never refetch - data should only be fetched once, and then kept in the cache. It can be re-fetched only when invalidated by the user in their profile page when updating their details.
  });
};
