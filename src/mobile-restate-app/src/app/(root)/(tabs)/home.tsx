import { useHomeModel } from "@/src/ModelViews/Home/Home.Model";
import HomeView from "@/src/ModelViews/Home/Home.View";

export default function Home() {
  const props = useHomeModel();
  return <HomeView {...props} />;
}
