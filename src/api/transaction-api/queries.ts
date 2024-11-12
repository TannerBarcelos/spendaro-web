import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useGetTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/transactions");
      return data;
    },
    retry: 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
