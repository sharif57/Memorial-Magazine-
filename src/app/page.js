import Banner from "./components/Banner";
import Help from "./components/Help";
import Pricing from "./components/Pricing";
import Qulity from "./components/Qulity";
import RecentSt from "./components/RecentSt";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <RecentSt></RecentSt>
      <Qulity></Qulity>
      <Help></Help>
      <Team></Team>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
    </div>
  );
}
