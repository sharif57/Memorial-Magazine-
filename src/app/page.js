import Banner from "./components/Banner";
import Help from "./components/Help";
import Qulity from "./components/Qulity";
import RecentSt from "./components/RecentSt";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <RecentSt></RecentSt>
      <Qulity></Qulity>
      <Help></Help>
    </div>
  );
}
