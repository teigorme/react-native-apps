import { useProfileModel } from "@/src/ModelViews/Profile/Profile.Model";
import ProfileView from "@/src/ModelViews/Profile/Profile.View";

export default function Profile() {
  const props = useProfileModel();
  return <ProfileView {...props} />;
}
