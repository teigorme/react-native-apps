import { router } from "expo-router";

export const useSignInModel = () => {
  const handleLogin = () => {
    router.push("/home");
  };
  return { handleLogin };
};
