import { useRouter } from "expo-router";

export const useSignInModel = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/home");
  };
  return { handleLogin };
};
