import { useSignInModel } from "../ModelViews/Sign-In/SignIn.Model";
import SignInView from "../ModelViews/Sign-In/SignIn.View";

export default function SignIn() {
  const props = useSignInModel();
  return <SignInView {...props} />;
}
