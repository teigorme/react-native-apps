import useHomeModel from "@/src/ModelViews/Home/Home.Model";
import HomeView from "@/src/ModelViews/Home/Home.View";

const Index = () => {
  const props = useHomeModel();
  return <HomeView {...props} />;
};

export default Index;
